import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Buffer } from 'buffer';
// we use the tap operator ( an operators provided by the RxJS library ) that allow us to manipulate or transform data emitted by an observable stream.
// tap allows us to perform actions like logging, error handling, or triggering other actions based on the emitted data.
// we use interface to define the structure of the response objects for the signup and login methods
interface SignupResponse {
  message: string;
}
interface LoginResponse {
  token: string;
}
// @Injectable decorator is used to declare that the AuthService class is a candidate for
// injection dependency resolution. It is decorated with the providedIn property set to 'root',
// which means that Angular will create a single instance of the service and make it available
// throughout the application.
@Injectable({
  providedIn: 'root',
})

// This class defines the AuthService. It contains methods for handling user authentication,
// including signup, login, logout, and resetPassword, as well as methods for checking the
// authentication status (isAuthenticated) and initializing the authentication status (hasToken).
export class AuthService {
  private readonly API_URL = 'http://localhost:3000/api';
  private readonly TOKEN_KEY = 'jwt-token';
  // we use this isAutheticated subject to emit authentication status changes
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(
    this.hasToken()
  );

  // we use this observable to emit authentication status changes
  loggedInStatusChanged: Observable<boolean> =
    this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {}

  //method to signup new user
  signup(email: string, password: string): Observable<SignupResponse> {
    return this.http.post<SignupResponse>('/api/auth/signup', {
      email,
      password,
    });
  }

  // method to login user
  login(email: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>('/api/auth/login', { email, password })
      .pipe(
        tap((response) => {
          // we store the returned token in local storage
          localStorage.setItem(this.TOKEN_KEY, response.token);
          // this will emit a change in authentication status
          this.isAuthenticatedSubject.next(true);
        })
      );
  }

  // method to log out a user
  logout(): void {
    // this will remove the token from local storage
    localStorage.removeItem(this.TOKEN_KEY);
    // emits a change in authentication status
    this.isAuthenticatedSubject.next(false);
  }

  // method to reset a user's password
  resetPassword(email: string): Observable<SignupResponse> {
    return this.http.post<SignupResponse>('/api/auth/reset-password', {
      email,
    });
  }

  // we check to see if the user is authenticated by checking if the token is present in local storage.
  // It returns a boolean value indicating whether the user is authenticated.
  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  // method to check if a token is present in local storage
  private hasToken(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  //method to get the username from the token
  getUsername(): string {
    // Retrieve the JWT token from local storage using the TOKEN_KEY constant
    const token = localStorage.getItem(this.TOKEN_KEY);

    // Check if a token was found in local storage
    if (token) {
      // Split the token into its three parts (header, payload, signature)
      const tokenParts = token.split('.');
      // this will decode the payload part of the token from base64 encoding to a string
      // a buffer object is an array of bytes, which is used to represent binary data in JavaScript.
      // allows one to work with binary data in a more efficient way than using strings, which are not well suited for handling binary data.
      // we are decoding the second part of a token using base64 encoding and converting it to a string using UTF-8 character encoding.
      const payloadString = Buffer.from(tokenParts[1], 'base64').toString(
        'utf-8'
      );
      // Parse the decoded payload string into a JavaScript object
      const payload = JSON.parse(payloadString);

      // we extract the username property from the decoded payload and return it
      return payload.username;
    } else {
      // If no token was found in local storage, return the string 'unknown'
      return 'unknown';
    }
  }
}