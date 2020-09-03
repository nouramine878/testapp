import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from 'src/app/auth/auth.module';
import { AdminModule } from 'src/app/admin/admin.module';
import { UserModule } from 'src/app/user/user.module' ;
import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';
import { AdminRoutingModule } from 'src/app/admin/admin-routing.module';
import { UserRoutingModule } from './user/user-routing.module';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire' ;
import { AngularFireDatabaseModule } from '@angular/fire/database';
import * as firebase from 'firebase';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 


firebase.initializeApp(environment.firebase);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule ,
    AdminModule,
    UserModule,
    AuthRoutingModule,
    AdminRoutingModule,
    UserRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule,
    ModalModule.forRoot(),
    FormsModule,  
    ReactiveFormsModule,
  

  
  ],
  providers: [
    AdminService ,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
