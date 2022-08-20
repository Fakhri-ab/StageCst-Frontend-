import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {UserAuthService} from '../services/user-auth.service';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {UserService} from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(        private userAuthService: UserAuthService,
                      private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (req.headers.get('No-Auth') === 'true') {
          return next.handle(req.clone());
      }
      const token = this.userAuthService.getToken();

      // const user = this.userService.getus
      if (token) {
          req = req.clone(
              {
                  setHeaders: {
                      Authorization: `Bearer ${token}`
                  }
              }
          )


      }

      return next.handle(req).pipe(
          catchError((err) => {
              if (err instanceof HttpErrorResponse) {
                  if (err.status === 401) {
                      this.userAuthService.clear();
                      this.router.navigate(['/login'])
                  }
              }
              return throwError(err);
          }))

  }
      // private addToken(request:HttpRequest<any>,token:string){
      //     return request.clone(
      //         {
      //             setHeaders:{
      //                 Authorization : `Bearer ${token}`
      //             }
      //         }
      //     )
      // }
  }
