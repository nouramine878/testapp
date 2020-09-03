import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/admin/header/header.component' ;
import { EditComponent } from 'src/app/admin/edit/edit.component' ;
import { AddComponent } from 'src/app/admin/add/add.component'
import { AdminComponent } from './admin.component';
import { ConsultComponent } from './consult/consult.component'; 



const routes: Routes = [
  { path : "" , component : AdminComponent , children: [
    { path :"edit", component : EditComponent},
    { path : "", component : AddComponent },
    { path : 'consult' , component : ConsultComponent }
  ] },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
