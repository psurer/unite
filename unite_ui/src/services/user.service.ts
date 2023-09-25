import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserProfile } from '../models/user.model';
import { LeaderboardUser } from 'src/models/leaderboard-user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private readonly apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/me`);
  }

  searchUsers(query: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/search?q=${query}`);
  }

  getUserById(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${userId}`);
  }

  getUsersByIds(userIds: string[]): Observable<User[]> {
    return this.http.post<User[]>(`${this.apiUrl}/batch`, { userIds });
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
  }

  getTopUsers(): Observable<LeaderboardUser[]> {
    return this.http.get<LeaderboardUser[]>(`${this.apiUrl}/topUsers`);
  }
}