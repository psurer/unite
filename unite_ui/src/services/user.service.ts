import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { User } from '../models/user.model';
// import { User, UserProfile } from '../models/user.model';
import { LeaderboardUser } from 'src/models/leaderboard-user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private readonly apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/me`).pipe(
      catchError(this.handleError)
    );
  }

  searchUsers(query: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/search?q=${query}`).pipe(
      catchError(this.handleError)
    );
  }

  getUserById(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${userId}`).pipe(
      catchError(this.handleError)
    );
  }

  getUsersByIds(userIds: string[]): Observable<User[]> {
    return this.http.post<User[]>(`${this.apiUrl}/batch`, { userIds }).pipe(
      catchError(this.handleError)
    );
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user).pipe(
      catchError(this.handleError)
    );
  }

  getTopUsers(): Observable<LeaderboardUser[]> {
    return this.http.get<LeaderboardUser[]>(`${this.apiUrl}/topUsers`).pipe( 
      catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.error('An Error Occurred', error);
    return throwError('something went wrong. Please try agaiin')
  }

  // getUserProfile(): Observable<UserProfile[]> {
  //   return this.http.get<UserProfile[]>(`${this.apiUrl}/userProfile`);
  // }
}
