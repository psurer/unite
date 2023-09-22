import { Component, Input, OnInit } from '@angular/core';
import { EventModel } from '../../../../models/event.model'; //importing our event model

@Component({
  selector: 'app-event-card-item',
  templateUrl: './event-card-item.component.html',
  styleUrls: ['./event-card-item.component.scss'],
})
export class EventCardItemComponent implements OnInit { 
  // adding an event of the single Event item component which is of type Event
  // we are not defining a value at the moment, there is no value assigned to it 
  // we are getting the event from outside, and to get any data from outside we use the @Input and import it outsideß
  @Input() myEvent: EventModel;
  constructor() {}
  ngOnInit(): void {}

}
