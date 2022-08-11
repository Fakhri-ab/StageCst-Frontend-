import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Produit} from '../models/produit';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  api = 'http://localhost:8081' ;
  requestHeader = new HttpHeaders(
      {'No-Auth': 'True'}
  )
  constructor(private  httpclient: HttpClient) { }

  addProduit(formData: FormData) {
    return this.httpclient.post<Produit>(`${this.api}/Addprod`, formData);
  }

  GetAllProduits(): Observable<any> {
    return this.httpclient.get<any>(`${this.api}/AllProd`);
  }
}
