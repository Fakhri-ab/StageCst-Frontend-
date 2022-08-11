import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {AddProductComponent} from './add-product/add-product.component';

const routes: Routes = [{
  path: 'Products/addProduct',
  component : AddProductComponent
}]

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
