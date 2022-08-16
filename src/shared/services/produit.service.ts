import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Produit} from '../models/produit';
import {Observable} from 'rxjs';
import {Categorie} from '../models/categorie';

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

  EditProduit(formData: FormData, id) {
    return this.httpclient.put<Produit>(`${this.api}/modify-Produit/${id}`, formData);
  }

  getProduit(id): Observable<Produit> {
    // @ts-ignore
    return this.httpclient.get(`${this.api}/retrieve-Produit/${id}`);
  }

  deleteProduit(id): Observable<any> {
    return this.httpclient.delete(`${this.api}/remove-Produit/${id}`);
  }
}
