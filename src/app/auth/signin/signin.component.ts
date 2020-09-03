import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from "src/app/services/auth.service" ;
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  email : string ='';
  password : string = '';
  message : any
  show : boolean = false ;

  constructor(private router : Router , private authService : AuthService) { }

  ngOnInit(): void {
  }
  /*onlogin() {
     this.router.navigate(["admin"]);
  }*/

    onLogin() {
    this.authService.signInUser(this.email ,this.password).then(
      () => {
        if (this.email==="admin.admin@gmail.com" && this.password==="adminadmin"){
          this.router.navigate(["admin"]);
      }
        else {
          this.router.navigate(["user"]); 
        }
      },
      (error) =>{
        this.show = true ;
        this.message = error ;

      }
    )
  }

}
