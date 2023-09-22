import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.scss']
})
export class EditUserProfileComponent implements OnInit {

  user: User; // the user object stores the current user info
  editForm: FormGroup; // form group stores the edited user info

  constructor(private fb: FormBuilder, private userService: UserService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    // we get the current user from the backend
    this.userService.getCurrentUser().subscribe((user: User) => {
      this.user = user; // we store the user info in the user object

      // we create the edit form with the user info pre-populated
      this.editForm = this.fb.group({
        profilePic: [this.user.profilePic],
        userName: [this.user.userName, Validators.required],
        firstName: [this.user.firstName, Validators.required],
        lastName: [this.user.lastName, Validators.required],
        email: [this.user.email, [Validators.required, Validators.email]]
      });
    });
  }

  onSubmit() {
    // here we set the user object to the values in the edit form
    this.user = this.editForm.value;

    // we update the user info in the backend
    this.userService.updateUser(this.user).subscribe((updatedUser: User) => {
      this.user = updatedUser; // now we store the updated user info in the user object
      this.snackBar.open('Profile updated successfully!', 'Close', 
      {
        duration: 3000
      });
    });
  }

}

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-edit-user-profile',
//   templateUrl: './edit-user-profile.component.html',
//   styleUrls: ['./edit-user-profile.component.scss']
// })

// export class EditUserProfileComponent implements OnInit {
//   profilePictureUrl: string = ''; // initial profile picture url
//   aboutMe: string = ''; // initial about me text

//   constructor() { }

//   ngOnInit(): void {
//     // here we fetch user profile data here and set initial values
//     // we can fetch user profile data from a database or API and set it here
//     // let's assume we have fetched the following data:
//     this.profilePictureUrl = 'https://via.placeholder.com/150'; // set profile picture url
//     this.aboutMe = 'Hello, my name is Jane Doe and I love coding!'; // set about me text
//   }

//   onUploadPicture(): void {
//     // logic to upload new profile picture
//     this.profilePictureUrl = 'new-picture-url'; // set new profile picture url
//   }

//   onSaveAbout(): void {
//     // logic to save about me text
//     console.log('About Me Saved:', this.aboutMe); // log saved about me text
//   }

// }
