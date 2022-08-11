import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { AddProductComponent } from './add-product/add-product.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ AddProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,
  ]
})
export class ProductsModule { }
