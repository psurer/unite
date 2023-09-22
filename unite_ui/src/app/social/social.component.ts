import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FriendService } from '../../services/friend.service';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  friendRequests: any[];
  newsfeed: any[];
  currentUser: any;

  constructor(
    private userService: UserService, 
    private friendService: FriendService, 
    private activityService: ActivityService
  ) { }

  ngOnInit() {
    // Get current user's ID
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      // Get friend requests for current user
      this.friendService.getFriendRequests(this.currentUser._id).subscribe(requests => {
        this.friendRequests = requests;
      });
    });

    this.activityService.getNewsfeed().subscribe(newsfeed => {
      this.newsfeed = newsfeed;
    });
  }

  acceptFriendRequest(request: { userId: string, friendId: string }) {
    this.friendService.acceptFriendRequest(request.userId, request.friendId).subscribe(() => {
      // Refresh friend requests list
      this.friendService.getFriendRequests(this.currentUser._id).subscribe(requests => {
        this.friendRequests = requests;
      });
    });
  }
  
  declineFriendRequest(request: { userId: string, friendId: string }) {
    this.friendService.removeFriend(request.userId, request.friendId).subscribe(() => {
      // Refresh friend requests list
      this.friendService.getFriendRequests(this.currentUser._id).subscribe(requests => {
        this.friendRequests = requests;
      });
    });
  }
}  
