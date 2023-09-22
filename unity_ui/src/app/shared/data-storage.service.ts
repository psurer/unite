// // here we will inject the Angular HTTP service , we will inject a service into a service 
// import { Injectable } from "@angular/core";
// import { provideHttpClient } from '@angular/common/http';
// import { EventService }
// // so we add an @inj ectable, its optional and we don't technically need to add it to our services
// // but we MUST add it as soon as our service gets another service injected
// import { Event } from '../events/event.model';
// @Injectable({providedIn: 'root'}) // adding an object that I will pass an an arguement to @Injectable 


// // also you can add the Services in the app module.ts and add it in the providers: [EventListService, KikisService Etc ]
// export class DataStorageService {
//     constructor(private http: provideHttpClient) { // now we inject the HTTP service into the DataStorage 
//         // by adding private here, TypeScript automatically creates a property of the same name and stores whatever we accpet as an rguement here in that property
//         // and we set the type of the injected arguement to HTTP client 
//         // now we will write this logic to save events to our backernd and to fetch them from there
//         storeEvents(events: Event[]) {
//         }
//     }   
// }
// <!-- we can add click listeners on the buttons 
// and in the component we can inject the angular http service and make the http request 
// disadvantages are we have the buttons but not the data we want to interact with 
// this should be made in the event service 
// we can also make a new service for this 
// and call it data-storage service  -->