import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/*
// import { HttpClient, HttpHeaders } from '@angular/common/http';
instead of creating a HttpHeaders object and a body object separately, we will
create a single object option that includes the headers and body.
This will be more concise and easier to read.
*/
@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private apiUrl = 'https://localhost:3000'; // here we will replace this generic localhost with out auctual URL of our API
  
    constructor(private http: HttpClient) { }
  /**
   * Sends a POST request to the API endpoint to reset a user's password
   * @param email The email of the user whose password is being reset
   * @param newPassword The new password to set for the user
   * @returns An Observable of the HTTP response from the API
   */

  resetPassword(email: string, newPassword: string): Observable<any> {
    const endpoint = `${this.apiUrl}/reset-password`;
    const body = { email, newPassword };
    return this.http.post(endpoint, body);
  }
}
