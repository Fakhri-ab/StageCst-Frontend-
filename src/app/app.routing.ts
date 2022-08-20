import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from 'shared/components/notfound/notfound.component';
import { PageComponent } from './Page/page.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from '../shared/guards/auth.guard';
import {RoleGuard} from '../shared/guards/role.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'register',
    component: RegisterComponent,

  },
  {
    // canActivate: [AuthGuard],
   // canActivateChild: [AuthGuard],
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout.module').then(x => x.AdminLayoutModule),
          canActivate: [AuthGuard]
  },

      {
        path: '',
        loadChildren: () => import('./layouts/Products/products.module').then(x => x.ProductsModule),
        canActivate: [AuthGuard]
      },
      {

        path: '',
        loadChildren: () => import('./layouts/Categories/Categories.module').then(x => x.CategoriesModule),
        canActivate: [AuthGuard]
      }
      ]},

  {
    path: 'page',
    component: PageComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./Page/page.module').then(x => x.PageModule),
  }]},

  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
