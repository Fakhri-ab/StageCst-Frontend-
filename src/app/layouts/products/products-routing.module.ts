import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {AddProductComponent} from './add-product/add-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {DetailsProductComponent} from './details-product/details-product.component';

const routes: Routes = [
    {
  path: 'Products/addProduct',
  component : AddProductComponent
    },
  {
    path: 'Products/EditProduct/:id',
    component : EditProductComponent
  },
  {
    path: 'Products/detailsProduct/:id',
    component : DetailsProductComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
