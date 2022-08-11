import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {

  currentUser: any ;

  constructor(private userService: UserService) {}

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ):
      | Observable<boolean | UrlTree>
      | Promise<boolean | UrlTree>
      | boolean
      | UrlTree {
    const token = localStorage.getItem('accessToken')
    this.userService.getDecodedAccessToken(token)
    this.currentUser = this.userService.getDecodedAccessToken(token).user;
    const isAuthorized = this.currentUser.roles[0].name.includes(route.data.role)

    if (!isAuthorized) {
      // redirect
      // display a message
      window.alert('you are not authorized');
      console.log('you are not authorized')
    }

    return isAuthorized || false;
  }

}
