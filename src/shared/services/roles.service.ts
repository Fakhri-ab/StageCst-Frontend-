import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Role} from '../models/Role';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  api = 'http://localhost:8081' ;
  constructor(private http: HttpClient) { }

  addRole(data: any) {
    return this.http.post<any>(this.api + '/createNewRole', data).pipe(map((res: any) => {
      return res ;
    }))
  }

  getAllrole(): Observable<Role[]> {
    return this.http.get<Role[]>(this.api + '/getAllRole');
  }

  deleteRole(idRole: number) {
    return this.http.delete<any>(this.api + '/deleteRole/' + idRole).pipe(map((res: any) => {
      return res ;
    }))
  }
}
