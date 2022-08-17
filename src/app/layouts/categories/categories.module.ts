import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from '../categories/categories.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditCategorieComponent } from './edit-categorie/edit-categorie.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AddCategorieComponent, EditCategorieComponent],
    imports: [
        CommonModule,
        CategoriesRoutingModule,
        ReactiveFormsModule,
        NgbPaginationModule
    ]
})
export class CategoriesModule { }
