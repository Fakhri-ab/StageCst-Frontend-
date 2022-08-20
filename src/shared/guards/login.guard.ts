import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserAuthService} from '../services/user-auth.service';
import {UserService} from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
      private userAuthService: UserAuthService,
      private router: Router,
      private userService: UserService
  ) {}
  canActivate() {
    if (this.userAuthService.getToken()) {
      this.router.navigateByUrl('admin/dashboard')
    } else {
      return true

    }
  }

}
