import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { AddProductComponent } from './add-product/add-product.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DetailsProductComponent } from './details-product/details-product.component';



@NgModule({
  declarations: [ AddProductComponent, EditProductComponent, DetailsProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,
  ]
})
export class ProductsModule { }
