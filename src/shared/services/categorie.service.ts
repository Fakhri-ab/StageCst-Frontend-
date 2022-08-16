import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Categorie} from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  api = 'http://localhost:8081' ;
  requestHeader = new HttpHeaders(
      {'No-Auth': 'True'}
  )
  constructor(private  httpclient: HttpClient) { }


  GetAllCat(): Observable<Categorie> {
    return this.httpclient.get<Categorie>(`${this.api}/AllCat`);
  }

  // tslint:disable-next-line:no-shadowed-variable
  addcat(Categorie) {
    return this.httpclient.post(`${this.api}/AddCat`, Categorie);
  }

  // tslint:disable-next-line:no-shadowed-variable
  Editcat(Categorie, id) {
    return this.httpclient.put(`${this.api}/modify-Categorie/${id}`, Categorie);
  }

  getcategorie(id): Observable<Categorie> {
    // @ts-ignore
    return this.httpclient.get(`${this.api}/GetCat/${id}`, );
  }

  deleteCategorie(id): Observable<any> {
    return this.httpclient.delete(`${this.api}/delete-Categorie/${id}`);
  }
}
