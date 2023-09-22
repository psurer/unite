import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResetPasswordService } from './reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  loading = false;
  success = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private resetPasswordService: ResetPasswordService
  ) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(): void {
    this.loading = true;
    const newPassword = this.resetPasswordForm.value.newPassword;
    const confirmPassword = this.resetPasswordForm.value.confirmPassword;
    this.resetPasswordService.resetPassword(newPassword, confirmPassword)
      .subscribe(
        response => {
          this.loading = false;
          this.success = true;
        },
        error => {
          this.loading = false;
          this.error = error;
        }
      );
  }

}


// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { ResetPasswordService } from './reset-password.service';
// import { ApiService } from '../../app/services/api.service';

// @Component({
//   selector: 'app-reset-password',
//   templateUrl: './reset-password.component.html',
//   styleUrls: ['./reset-password.component.scss']
// })
// export class ResetPasswordComponent implements OnInit {

//   resetPasswordForm: FormGroup;
//   isSubmitted = false;
//   isResetPasswordSuccess = false;
//   isResetPasswordError = false;
//   resetPasswordErrorMessage: string;

//   constructor(
//     private formBuilder: FormBuilder,
//     private apiService: ApiService,
//     private resetPasswordService: ResetPasswordService,
//     private router: Router
//   ) {
//     this.createForm();
//   }
//   createForm() {
//     this.resetPasswordForm = this.formBuilder.group({
//     email: ['', Validators.required.email],
//     newPassword: ['', [Validators.required, Validators.minLength(8)]]
//   });
//   }
  

//   ngOnInit() {
//     this.resetPasswordForm = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]],
//       newPassword: ['', [Validators.required, Validators.minLength(8)]]
//     });
//   }

//   get formControls() {
//     return this.resetPasswordForm.controls;
//   }

//   onSubmit() {
//     this.isSubmitted = true;
//     this.isResetPasswordSuccess = false;
//     this.isResetPasswordError = false;
//     // logic for valid password 
//     if (this.resetPasswordForm.valid) {
//       const resetPasswordData = {
//         email: this.resetPasswordForm.value.email,
//         newPassword: this.resetPasswordForm.value.newPassword
//       };
//       // logic for invalid password
//     // call the resetPassword method with both email and newPassword arguments
//     this.resetPasswordService.resetPassword(resetPasswordData.email, resetPasswordData.newPassword).subscribe(
//       () => {
//         this.isResetPasswordSuccess = true;
//         this.router.navigate(['/login']);
//       },
//         (error) => {
//           this.isResetPasswordSuccess = false;
//           this.isResetPasswordError = true;
//           this.resetPasswordErrorMessage = error.error.message;
//         }
//       );
//     }
//   }
// }





// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { ApiService } from '../services/api.service';

// @Component({
//   selector: 'app-reset-password',
//   templateUrl: './reset-password.component.html',
//   styleUrls: ['./reset-password.component.scss']
// })
// export class ResetPasswordComponent implements OnInit {
//   resetPasswordForm: FormGroup;
//   isSubmitted = false;
//   isResetPasswordSuccess = false;
//   isResetPasswordError = false;
//   resetPasswordErrorMessage: string;

//   constructor(
//     private formBuilder: FormBuilder,
//     private apiService: ApiService
//   ) { }

//   ngOnInit(): void {
//     this.resetPasswordForm = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]],
//       newPassword: ['', [Validators.required, Validators.minLength(8)]]
//     });
//   }

//   // convenience getter for easy access to form fields
//   get form() { 
//     return this.resetPasswordForm.controls; 
//   }

//   onSubmit() {
//     this.isSubmitted = true;

//     // stop here if form is invalid
//     if (this.resetPasswordForm.invalid) {
//       return;
//     }

//     const email = this.form.['email'].value;
//     const newPassword = this.form.newPassword.value;

//     this.apiService.resetPassword(email, newPassword).subscribe({
//       next: () => {
//         this.isResetPasswordSuccess = true;
//         this.isResetPasswordError = false;
//       },
//       error: (error) => {
//         this.isResetPasswordSuccess = false;
//         this.isResetPasswordError = true;
//         this.resetPasswordErrorMessage = error.error.message;
//       }
//     });
//   }
// }

