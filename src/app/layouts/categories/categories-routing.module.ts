import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddCategorieComponent} from './add-categorie/add-categorie.component';
import {EditCategorieComponent} from './edit-categorie/edit-categorie.component';

const routes: Routes = [

  {path: 'Categories/AddCategorie',
  component : AddCategorieComponent},

  {path: 'Categories/EditCategorie/:id',
    component : EditCategorieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
