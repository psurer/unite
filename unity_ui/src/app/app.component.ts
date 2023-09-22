import { Component, OnInit } from '@angular/core';
// import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [AuthService]
})

export class AppComponent 
{
  title = 'unity_ui';

  constructor(private router: Router) {}

  

  // constructor(private authService: AuthService) {}
  // Adding the OnInit lifecycle hook, most initialization shoud not be done in the constructor
// but instead here and simply set to this.auth = this.authService
ngOninit() {
  this.router.navigate(['/home'])
  // this.auth = this.authService.auth;
  }
}