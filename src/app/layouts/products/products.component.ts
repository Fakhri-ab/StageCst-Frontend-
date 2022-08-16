import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Produit} from '../../../shared/models/produit';
import {ProduitService} from '../../../shared/services/produit.service';
import {Categorie} from '../../../shared/models/categorie';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products!: any[];
  focus;
  focus1;
  constructor(public router: Router, private produitService: ProduitService) { }

  ngOnInit(): void {
    // tslint:disable-next-line:prefer-const
    let navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    this.getAllProducts();
  }

  goTaAddproduct() {
    this.router.navigate(['admin/Products/addProduct']);
  }

  getAllProducts() {
    this.produitService.GetAllProduits().subscribe(res => {this.products = res;
      console.log(res)
       })
  }

  goToEdit(id) {
    this.router.navigate(['admin/Products/EditProduct', id])
  }

  deleteProduct(prod: Produit) {
    // @ts-ignore
    this.produitService.deleteProduit(prod.idProduit).subscribe(res => {console.log(res);
      this.router.navigate(['/admin/Products']);
      this.getAllProducts(); })
  }
  goToProductItem(id) {
    this.router.navigate(['admin/Products/detailsProduct', id])
  }


}
