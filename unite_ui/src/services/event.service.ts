import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventModel } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl = 'https://localhost:3000/events'; // replace this with backend API endpoint
  public events: EventModel[] = [];

  constructor(private http: HttpClient) { 
    this.getEvents().subscribe((events) => {
      this.events = events;
    });
  }

  // Get all events
  getEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(this.apiUrl);
  }
  // Get a specific event by ID
  getEvent(id: number): Observable<EventModel> {
    return this.http.get<EventModel>(`${this.apiUrl}/${id}`);
  }
  // Add a new event
  addEvent(event: EventModel): Observable<EventModel> {
    return this.http.post<EventModel>(this.apiUrl, event);
  }
  // Update an existing event
  updateEvent(event: EventModel): Observable<EventModel> {
    return this.http.put<EventModel>(`${this.apiUrl}/${event.id}`, event);
  }
  // Delete an event by ID
  deleteEvent(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
  // Generate a unique ID for a new event
  getUniqueId(): number {
    return Math.max(...this.events.map((event) => event.id)) + 1;
  }
}
// import { Injectable } from '@angular/core';
// // import { Subject } from 'rxjs';
// import { UnityEventModel } from '../models/event.model';

// @Injectable({providedIn: "root"}) // with root, angular will create a new instance of EventService and make it available to the entire app
// export class EventService {
//   private eventsUrl = 'api/events';

//   constructor(private http: HttpClient) { }

//   getEvents(): Observable<Event[]> {
//     return this.http.get<Event[]>(this.eventsUrl);
//   }

//   addEvent(event: Event): Observable<Event> {
//     return this.http.post<Event>(this.eventsUrl, event);
//   }
//     // eventsChanged = new Subject<Event[]>();
//     events: UnityEventModel[] = [
//         {
//           id: 1,
//           name: 'Test Event 1',
//           subtitle: 'test subtitle 1',
//           date: new Date('11.01.2023').toDateString(),
//           description: 'Volunteer at the soup kitchen',
//           imagePath: '../../../assets/soup.png',
//         },
//         {
//           id: 2,
//           name: 'Test Event 2',
//           subtitle: 'test subtitle 2',
//           date:  new Date('11.01.2023').toDateString(),
//           description: 'Cooking at the soup kitchen',
//           imagePath: '../../../assets/cooking.png',
//         },
//         {
//           id: 3,
//           name: 'Test Event 3',
//           subtitle: 'test subtitle 3',
//           date:  new Date('11.01.2023').toDateString(),
//           description: 'Handing out food at the kitchen',
//           imagePath: '../../../assets/serving-food-line.png'
//         },
//         {
//           id: 4,
//           name: 'Test Event 4',
//           subtitle: 'test subtitle 4',
//           date: new Date('11.01.2023').toDateString(),
//           description: 'Mentor a dev',
//           imagePath: '../../../assets/dev-mentor.png',
//         },
//         {
//           id: 5,
//           name: 'Test Event 5',
//           subtitle: 'test subtitle 5',
//           date:  new Date('11.01.2023').toDateString(),
//           description: 'volunteer to read to children during reading hour at the Hôpital Necker',
//           imagePath: '../../../assets/kids-reading.png',
//         },
//         {
//           id:6 ,
//           name: 'Test Event 6',
//           subtitle: 'test subtitle 6',
//           date:  new Date('11.01.2023').toDateString(),
//           description: 'Volunteer at the Simplon-aux-Champs in the 18th district of Paris',
//           imagePath: '../../../assets/local-garden.png'
//         }
//       ];
// }