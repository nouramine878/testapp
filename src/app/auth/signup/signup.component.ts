import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  email : string ='';
  password : string = '';
  message : any ;
  show : boolean = false ;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  insertUser (){
    this.authService.createNewUser(this.email ,this.password).then(
      () => {
        this.show = true ; 
        this.message= "votre compte est bien créer";
      },
      (error) =>{
        this.show = true ; 
        this.message = error ;
      }
    )
  }


}
