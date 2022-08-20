import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from 'shared/components/components.module';
import {MatSelectModule} from '@angular/material/select';
import { PageComponent } from './Page/page.component';
import { RegisterComponent } from './register/register.component';
import {AuthInterceptor} from '../shared/guards/auth.interceptor';
import {UserService} from '../shared/services/user.service';
import {AuthGuard} from '../shared/guards/auth.guard';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    ComponentsModule,
    MatSelectModule,


  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    PageComponent,
    RegisterComponent

  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
