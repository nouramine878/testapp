import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from 'src/app/auth/signin/signin.component'
import { SignupComponent } from 'src/app/auth/signup/signup.component'

const routes: Routes = [
  { path : "" , component : SigninComponent },
  { path : "signup" , component : SignupComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
