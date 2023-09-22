import { Component, OnInit } from '@angular/core';
import { EventModel } from '../../../models/event.model';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-event-dashboard',
  templateUrl: './event-dashboard.component.html',
  styleUrls: ['./event-dashboard.component.scss']
})
export class EventDashboardComponent implements OnInit {
  public userLocation = 'Paris, France';
  public events: EventModel[] = [];
  public filteredEvents: EventModel[] = [];
  public selectedDate = '';
  public selectedCategory = '';
  public selectedType = '';
  public selectedDistance = '';
  public dates: string[] = [];
  public categories: string[] = [];
  public types: string[] = ['Online', 'In Person'];
  public distances: number[] = [5, 10, 25, 50, 100];
  public selectedEvent: EventModel;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
      this.filteredEvents = events;
      this.categories = [...new Set(this.events.map(event => event.category))];
      this.dates = [...new Set(this.events.map(event => event.date))];
    });
  }

  onEventSelected(event: EventModel) {
    this.selectedEvent = event;
  }
}
// import { Component, OnInit } from '@angular/core';
// // import { EventCardItemComponent } from './event-card-item/event-card-item.component';
// import { UnityEventModel } from '../../../models/event.model';
// import { EventService } from '../../../services/event.service';

// @Component({
//   selector: 'app-event-dashboard',
//   templateUrl: './event-dashboard.component.html',
//   styleUrls: ['./event-dashboard.component.scss']
// })
// export class EventDashboardComponent implements OnInit {
//   // we use Output so we can listen to this event from outside
//   // we are passing our event as a type as this is the information our eventDashboard component will need in the end
//   // @Output() eventWasSelected = new EventEmitter<UnityEventModel>();
//   public selectedEvent: UnityEventModel; // we declare a public property selectedEvent and initialize it to undefined
//   // we leave it undefined because we are not assigning a value
//   public events: UnityEventModel[] = []; // we // declare a public property events and initialize it to an empty array of UnityEventModel type

//   constructor(private eventService: EventService) { 
//      // we inject the EventService dependency
//     this.events = this.eventService.events; // assign the events array from the EventService to the events property of this component
//   }

//   ngOnInit(): void {
//     this.events = this.eventService.events;
//   }
//     // function to handle event selection
//   // we are getting the selected event here which is of type event
//   onEventSelected(myEvent: UnityEventModel) {
//     // we must do something with the selected event
//     // we pass the event as data
//     // this.eventWasSelected.emit(myEvent);
//      // set the selectedEvent property to the event that was clicked on
//      this.selectedEvent = myEvent;
//   }
// }
