import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  // providers: [AuthService, LogginService]
})
export class SignupComponent implements OnInit {

  // constructor(private loggingService: LoggingService,
  //   private authServie: AuthService) { }

  //   onCreateUser(username: string,password: string ) {
  //     this.loggingService.logStatusChange(accountStatus)
  //   }

  ngOnInit(): void {
  }

}
