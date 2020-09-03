import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { HeaderComponent } from './header/header.component';
import { AdminRoutingModule } from 'src/app/admin/admin-routing.module';
import { AdminComponent } from './admin.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultComponent } from './consult/consult.component'; 




@NgModule({
  declarations: [AddComponent, EditComponent, HeaderComponent, AdminComponent, ConsultComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ModalModule.forRoot(), 
    ReactiveFormsModule,
  ],
  exports : [
    AddComponent ,
    EditComponent ,
    HeaderComponent
  ]
})
export class AdminModule { }
