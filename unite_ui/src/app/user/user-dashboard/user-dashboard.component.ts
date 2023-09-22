import { Component } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {
  userPoints: number = 250;
  userLevel: number = 3;
  challengesCompleted: number = 10;
  challengesTotal: number = 15;

  friendsProgress: Array<{ name: string, progress: number }> = [
    { name: 'Friend 1', progress: 40 },
    { name: 'Friend 2', progress: 60 },
    { name: 'Friend 3', progress: 80 }
  ];

  trendingChallenges: Array<string> = ['Challenge 1', 'Challenge 2', 'Challenge 3'];

  redeemPoints(): void {
    // TODO: Implement redemption of user points
  }
  
  purchasePoints(): void {
    // TODO: Implement purchase of more user points
  }
  
  enterPoints(): void {
    // TODO: Implement user entering points through voting, etc.
  }
  
  searchEvents(): void {
    // TODO: Implement searching for events
  }
}  
