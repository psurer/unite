// you want to pass information from one component to another
// for example, we have our events dashboard which will display a list of eventcards,
// to edit an event as the creator, you will click edit, which will open the edit event item
// we want that component to retrieve the id for the grocery item so it can display the right information to our user.
// We Use a route to pass this type of information to our application components.
// To do so, we use the ActivatedRoute interface.
// update! we now use provideRouter from '@angular/router'
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router'; // CLI imports router

import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
import { ResetPasswordComponent } from './account/reset-password/reset-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EventDashboardComponent } from './events/event-dashboard/event-dashboard.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { EditUserProfileComponent } from './user/edit-user-profile/edit-user-profile.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// below we set up routes constant where we define our routes
// each route is an JS object that contains two properties:
// 1. path = defines the URL path for the route.
// 2. property, component = defines the component Angular should use for the corresponding path.
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'resetpassword',
    component: ResetPasswordComponent,
  },
  {
    path: 'profile',
    component: UserProfileComponent,
  },
  {
    path: 'edit-profile',
    component: EditUserProfileComponent,
  },
  {
    path: 'event-detail',
    component: EventDetailComponent,
  },
  {
    path: 'events',
    component: EventDashboardComponent,
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// Notice that we palce the wildcard ** route at the end of JS pbjects array.
// The order of our routes is VERY important,
// Angular applies routes in order and uses the first match it finds.