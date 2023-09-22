import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  
  private apiUrl = 'https://example.com/api/analytics';

  constructor(private http: HttpClient) { }

  trackEvent(eventName: string, eventData?: any) {
    // Code to track event and send data to server
    const eventPayload = {
      name: eventName,
      data: eventData
    };

    this.http.post(this.apiUrl, eventPayload).subscribe();
  }

  trackButtonClick(buttonName: string): void {
    this.trackEvent('button_click', { buttonName });
  }

  trackUserBehavior(behavior: string): void {
    this.trackEvent('user_behavior', { behavior });
  }
}
/* AnalyticsService is to provide a centralized location for handling analytics data and 
functionality within an Angular application. This service can be used to track various user
 interactions and behaviors, such as button clicks, form submissions, and page views. 
 The data collected by the service can then be sent to a server for further analysis and reporting.
  By abstracting the analytics functionality into a separate service, it becomes easier to maintain
   and modify the analytics code, as well as to ensure consistency and accuracy across the application. */