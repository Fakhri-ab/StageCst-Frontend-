import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../services/user.service';
import {UserAuthService} from '../services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  currentUser: any;
  roles: any
  constructor(
      private userService: UserService,
      private userAuthService: UserAuthService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.roles = this.userAuthService.getRoles();
    console.log('roles this', this.roles)

    const isAuthorized = this.roles[0].roleName.includes(route.data.role)
    if (!isAuthorized) {
      window.alert('Not Authorized You Must Be Admin')
    }
    return isAuthorized ;
  }

}
