import { Component } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private analyticsService: AnalyticsService) {}

  redirectToSignUp(): void {
    // Code to redirect user to sign-up page
  }

  redirectToDownload(): void {
    // Code to redirect user to download page
  }

  trackUserBehavior(behavior: string): void {
    this.analyticsService.trackUserBehavior(behavior);
  }
}
