import { Component, OnInit } from '@angular/core';
import { UserProfile, Activity } from '../../../models/user.model';
import { UserProfileService } from '../../../services/user.profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {
  userProfile: UserProfile;

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit(): void {
    this.userProfile = this.userProfileService.getUserProfile();
  }

  onUpdateProfile(updatedProfile: UserProfile): void {
    this.userProfileService.updateUserProfile(updatedProfile);
    this.userProfile = this.userProfileService.getUserProfile();
  }

  onAddActivity(activity: Activity): void {
    this.userProfileService.addActivityLog(activity);
    this.userProfile = this.userProfileService.getUserProfile();
  }
}