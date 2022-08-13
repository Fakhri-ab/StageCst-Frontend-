import { UsersComponent } from './user/users.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../app/layouts/dashboard/dashboard.component';
import { RoleComponent } from './role/role.component';
import {ProductsComponent} from './products/products.component';
import {CategoriesComponent} from './categories/categories.component';
export const AdminLayoutRoutes: Routes = [

    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
          path: '',
          loadChildren: () => import('./dashboard/dashboard.module').then(x => x.DashboardModule),

      }]},


      {
        path: 'role',
        component: RoleComponent,
        children: [
            {
          path: '',
          loadChildren: () => import('./role/role.module').then(x => x.RoleModule),

      }]},

      {
        path: 'user',
        component: UsersComponent,
        children: [
            {
          path: '',
          loadChildren: () => import('./user/users.module').then(x => x.UserModule),

      }]},

    {
        path: 'Products',
        component: ProductsComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./Products/products.module').then(x => x.ProductsModule),

            }]},
    {
        path: 'Categories',
        component: CategoriesComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./Categories/Categories.module').then(x => x.CategoriesModule),

            }]}


];
