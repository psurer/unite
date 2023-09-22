import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User, Activity, UserProfile } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private readonly apiUrl = 'http://localhost:3000/api/user-profiles';
  private userProfile: UserProfile | null = null; 
  
  // {
  //   id: '1',
  //   userName: 'johndoe',
  //   firstName: 'John',
  //   lastName: 'Doe',
  //   email: 'johndoe@example.com',
  //   bio: '',
  //   points: 0,
  //   status: '',
  //   profilePic: 'null',
  //   activityLog: [
  //     { challenge: 'Challenge 1', dateCompleted: new Date('2022-01-01'), pointsEarned: 50 },
  //     { challenge: 'Challenge 2', dateCompleted: new Date('2022-02-01'), pointsEarned: 75 },
  //     { challenge: 'Challenge 3', dateCompleted: new Date('2022-03-01'), pointsEarned: 100 },
  //   ]
// };

  constructor(private http: HttpClient) {}

  getUserProfile(): UserProfile | null {
    return this.userProfile;
  }

  updateUserProfile(updatedProfile: UserProfile): void {
    this.userProfile = updatedProfile;
  }

  addActivityLog(activity: Activity): void {
    if (this.userProfile) {
      this.userProfile.activityLog.push(activity);
  }
}

  createUserProfile(userId: string, bio: string, profilePic: File): Observable<User> {
    const formData = new FormData();
    formData.append('profilePic', profilePic);
    formData.append('bio', bio);
    return this.http.post<User>(`${this.apiUrl}`, formData).pipe(
      catchError(this.handleError)
    );
  }

  updateUserProfileOnServer(userId: string, bio: string, profilePic: File): Observable<User> {
    const formData = new FormData();
    formData.append('profilePic', profilePic);
    formData.append('bio', bio);
    return this.http.patch<User>(`${this.apiUrl}/${userId}`, formData).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An Error Occured:', error);
    return throwError('Something went wrong. Please try again later');
  }
}
  // createUserProfile(userId: string, bio: string, profilePic: File): Observable<User> {
  //   const newUserProfile: User = {
  //     id: '',
  //     userName: '',
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     bio: bio,
  //     points: 0,
  //     status: '',
  //     profilePic: '',
  //     activityLog: []
  //   };
  //   const formData = new FormData();
  //   formData.append('profilePic', profilePic);
  //   formData.append('bio', bio);
  //   return this.http.post<User>(`${this.apiUrl}`, formData);
  // }

//   updateUserProfileOnServer(userId: string, bio: string, profilePic: File): Observable<User> {
//     const updatedProfile: User = {
//       id: userId,
//       userName: '',
//       firstName: '',
//       lastName: '',
//       email: '',
//       bio: bio,
//       points: 0,
//       status: '',
//       profilePic: '',
//       activityLog: []
//     };
//     const formData = new FormData();
//     formData.append('profilePic', profilePic);
//     formData.append('bio', bio);
//     return this.http.patch<User>(`${this.apiUrl}/${userId}`, formData);
//   }
// }
