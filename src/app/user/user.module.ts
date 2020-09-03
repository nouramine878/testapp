import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from 'src/app/user/user-routing.module';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemandeComponent } from './demande/demande.component'; 



@NgModule({
  declarations: [ListComponent, UserheaderComponent, UserComponent, DemandeComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ModalModule.forRoot(), 
    ReactiveFormsModule,
  ],
  exports : [
    ListComponent ,
    UserComponent ,
    UserheaderComponent,
    UserRoutingModule,
  ]
})
export class UserModule { }
