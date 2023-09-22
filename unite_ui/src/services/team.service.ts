import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'; // httpClient is injected into the service's constructor to make HTTP requests.
import { Team } from '../models/team.model';

/*TeamService is an injectable service that provides methods to fetch data about teams from an API. */

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private baseUrl = '/api/teams'; // The base URL of the API endpoints for teams

  constructor(private http: HttpClient) {}

  /* Fetches the top teams by points from the API
    returns An Observable of an array of `Team` objects
    getTopTeams() method fetches the top teams by points 
    from the API and returns an Observable of an array of Team objects.
 */
  getTopTeams(): Observable<Team[]> {
    const url = `${this.baseUrl}/top`; // The URL for the endpoint to get the top teams
    return this.http.get<Team[]>(url).pipe(
      catchError(this.handleError<Team[]>('getTopTeams', [])),
      map((teams: Team[]) => teams.map(this.mapTeamPoints)) // Map the returned data to an array of `Team` objects
    );
  }

  /* MapTeamPoints
    Maps the response data from the API to a `Team` object with a `points` property
    param team The team data from the API
    returns The mapped `Team` object
   */
  private mapTeamPoints(team: any): Team {
    return { name: team.name, points: team.points } as Team;
  }

  /* Handling the errors: 
    this handles an HTTP error and logs it to the console
    param operation The name of the operation that caused the error
    param result The value to return as the Observable result (optional)
    returns A function to handle the error
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
/*
    ***
     <T> in this context is a generic type parameter.
     It's a placeholder for a specific type that will be determined
     when the method is called. In this case, 
     it allows the handleError method to return an observable of any type,
     instead of a specific type that would have to be hard-coded into the method. 
     This makes the method more flexible and reusable.
   ***
*/
