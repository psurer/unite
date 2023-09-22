import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
//mat modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
// import { MatMenuTrigger } from '@angular/material/menu';
//my components
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { EventDashboardComponent } from './events/event-dashboard/event-dashboard.component';
import { EventCardItemComponent } from './events/event-dashboard/event-card-item/event-card-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResetPasswordComponent } from './account/reset-password/reset-password.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AttendingEventsComponent } from './events/your-events/attending-events/attending-events.component';
import { FavoriteEventsComponent } from './events/your-events/favorite-events/favorite-events.component';
import { CreateEventComponent } from './events/your-events/ceate-event/create-event.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { EditUserProfileComponent } from './user/edit-user-profile/edit-user-profile.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { UserPointsComponent } from './user/user-points/user-points.component';
import { RedeemPointsComponent } from './points/redeem-points/redeem-points.component';
import { GetPointsComponent } from './points/get-points/get-points.component';
import { UserStatusComponent } from './user/user-status/user-status.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { SocialComponent } from './social/social.component';
import { SettingsComponent } from './settings/settings.component';
import { SocialSharingComponent } from './social-sharing/social-sharing.component';
import { RatingsAndReviewsComponent } from './ratings-and-reviews/ratings-and-reviews.component';
import { AppStarRatingComponent } from './app-star-rating/app-star-rating.component';
import { SearchComponent } from './search/search.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LogoutComponent } from './account/logout/logout.component';

// import {
//   MatToolbarModule,
//   MatButtonModule
//  } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    EventCardItemComponent,
    EventDashboardComponent,
    ResetPasswordComponent,
    ServerComponent,
    ServersComponent,
    AttendingEventsComponent,
    FavoriteEventsComponent,
    CreateEventComponent,
    EventDetailComponent,
    EventEditComponent,
    UserProfileComponent,
    EditUserProfileComponent,
    SidenavComponent,
    DropdownDirective,
    ResetPasswordComponent,
    UserPointsComponent,
    RedeemPointsComponent,
    GetPointsComponent,
    UserStatusComponent,
    UserDashboardComponent,
    HomeComponent,
    AboutComponent,
    ChallengesComponent,
    SocialComponent,
    SettingsComponent,
    SocialSharingComponent,
    RatingsAndReviewsComponent,
    AppStarRatingComponent,
    SearchComponent,
    LeaderboardComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
     // this unlocks the HTTP client that Angular offers in our whole project and allows us to send requests in our app component
    RouterModule.forRoot([]),
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    FlexLayoutModule,
    MatMenuModule,
  ],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}