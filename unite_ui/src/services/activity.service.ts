import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private apiUrl = 'https://example.com/api/activities';

  constructor(private http: HttpClient) { }

  getNewsfeed(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/newsfeed`);
  }
}

/*The ActivityService is responsible for handling HTTP requests related to activities, 
specifically fetching the newsfeed of recent activities from the server. It has one method,
 getNewsfeed(), which returns an Observable that emits an array of Activity objects retrieved from the API. */