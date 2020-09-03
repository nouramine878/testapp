import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path :"auth" ,
  loadChildren : () => import('src/app/auth/auth.module').then(m => m.AuthModule)
  } ,
  { path : "admin" ,
  loadChildren : () => import('src/app/admin/admin.module').then(m =>m.AdminModule)
  } ,
  {
    path : "user" ,
    loadChildren : () => import('src/app/user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
