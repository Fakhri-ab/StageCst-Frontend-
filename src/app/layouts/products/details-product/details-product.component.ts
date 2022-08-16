import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../../../../shared/services/produit.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategorieService} from '../../../../shared/services/categorie.service';
import {Produit} from '../../../../shared/models/produit';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  id: any
  product: Produit ;

  api = 'http://localhost:8081'

  constructor(private produitService: ProduitService, private router: Router, private router1: ActivatedRoute,
              private CategoriesService: CategorieService) { }

  ngOnInit(): void {
    this.router1.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.produitService.getProduit(this.id).subscribe(cat => {this.product = cat; })
    })
  }

  goTlist() {
    this.router.navigate(['admin/Products']);
  }

}
