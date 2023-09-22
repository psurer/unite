import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  private readonly apiUrl = 'http://localhost:3000/api/friends';

  constructor(private http: HttpClient) {}
  /* The getFriendRequests method takes a user ID and returns an observable of an array of users who 
  have sent friend requests to that user. The sendFriendRequest method takes the IDs of the user sending 
  the request and the user receiving the request and sends a friend request to the backend API. */
  getFriendRequests(userId: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/requests/${userId}`);
  }

  sendFriendRequest(userId: string, friendId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/requests/${userId}`, { friendId });
  }
  /* The acceptFriendRequest method takes the IDs of the user accepting the request and the user who sent the request
 and accepts the friend request in the backend. The removeFriend method takes the IDs of the two users and 
 removes the friendship relationship between them.*/
  acceptFriendRequest(userId: string, friendId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/accept/${userId}`, { friendId });
  }

  removeFriend(userId: string, friendId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${userId}/${friendId}`);
  }
}

/* This service is responsible for handling friend-related functionality.
 It communicates with the backend API to perform various operations 
 on friends such as retrieving friend requests, sending friend requests,
  accepting friend requests, and removing friends. */
