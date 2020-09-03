import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent} from 'src/app/user/user.component';
import { ListComponent } from 'src/app/user/list/list.component';
import { DemandeComponent } from './demande/demande.component';




const routes: Routes = [
 {path : "" , component : UserComponent , children : [
     { path : "" , component : ListComponent } ,
     { path : "demande" , component : DemandeComponent }
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
