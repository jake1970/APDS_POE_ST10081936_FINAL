import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PostDisplayComponent } from './posts/post-display/post-display.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'posts', component:PostDisplayComponent},
  {path:'create-post', component:PostCreateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
