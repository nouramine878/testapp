import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from 'src/app/auth/auth-routing.module' ;
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire' ;
import { AngularFireDatabaseModule } from '@angular/fire/database';



@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    CommonModule ,
    AuthRoutingModule,
    FormsModule  ,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
 
  exports : [
    SigninComponent ,
    SignupComponent
  ]
})
export class AuthModule { }
