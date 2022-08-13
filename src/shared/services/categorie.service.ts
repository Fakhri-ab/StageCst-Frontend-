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

  addcat(Categorie) {
    return this.httpclient.post(`${this.api}/AddCat`, Categorie);
  }
}
