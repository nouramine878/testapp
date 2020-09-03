import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.scss']
})
export class UserheaderComponent implements OnInit {

  constructor(private authService : AuthService , private router : Router) { }

  ngOnInit(): void {
  }
  onLogOut () {
    this.authService.signOut();
    this.router.navigate([''])
  }

}
