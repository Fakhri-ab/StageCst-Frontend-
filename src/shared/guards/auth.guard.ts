import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserAuthService} from '../services/user-auth.service';
import {UserService} from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
      private userAuthService: UserAuthService,
      private router: Router,
      private userService: UserService
  ) {}

   canActivate() {
  if (this.userAuthService.getToken()) {
  return true;
} else {
  this.router.navigateByUrl('/login')

}
  }
   // return true;
 //  }



}
