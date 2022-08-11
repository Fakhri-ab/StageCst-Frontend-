import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserAuthService} from './user-auth.service';
import jwt_decode from 'jwt-decode';
import {UserModel} from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api = 'http://localhost:8081' ;
  requestHeader = new HttpHeaders(
      {'No-Auth': 'True'}
  )
              constructor(private  httpclient: HttpClient,
              private userAuthService: UserAuthService) { }

  public  login(loginForm) {
    return this.httpclient.post(this.api + '/authenticate', loginForm, {headers: this.requestHeader})
  }


  public  SignUp(UserModel) {
    return this.httpclient.post(this.api + '/registerNewUser', UserModel, {headers: this.requestHeader})
  }

  public forUser() {
    return this.httpclient.get(this.api + '/forUser', {
      responseType: 'text',
    });
  }

  public forAdmin() {
    return this.httpclient.get(this.api + '/forAdmin', {
      responseType: 'text',
    });
  }

  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  get accessToken(): string {
    return localStorage.getItem('accessToken');
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}
