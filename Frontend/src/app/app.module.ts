import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';

import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http'
import { AuthInterceptor } from './auth/auth.interceptor';
import { ErrorComponent } from './error/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorinterceptorInterceptor } from './error/errorinterceptor.interceptor';
import { SignupComponent } from './auth/signup/signup.component';
import { PostDisplayComponent } from './posts/post-display/post-display.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostDeleteComponent } from './posts/post-delete/post-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    SignupComponent,
    PostDisplayComponent,
    PostCreateComponent,
    PostDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true},
              {provide: HTTP_INTERCEPTORS, useClass: ErrorinterceptorInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
