import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable, Subscription, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // Angular will anylze the component & realize that is hould give us our AuthService 
  // and it will set it up to do so, when it builds it, it will see that we want such an instance
  // and it will give us such an instance
  // providers: [AuthService] // we provice the type or what we want to get provided 
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn = false; // flag for user's login status
  username: string; // stores username of logged-in user
  public logoUrl: string = 'assets/images/cpmk.jpeg';
  // we subscribe to the authService's loggedInStatusChanged event to update the login status and username of the header component
  private loggedInStatusChangedSubscription: Subscription;

  // We bind it to the property by using this TS shortcut of adding an accessor in front of the name of the argument to 
  // instantly create a property with the same name and value and bind the value to it
  // ADD a Type Assignment ** This is mandatory, we need to set the type and the type has to be the class you want
  // to get injected we set the class and it must be the type of what we want to have injected - AuthService in this case
  // We are injecting the router in the constructor and assigning it to a property in the class:
  constructor(private authService: AuthService, private router: Router) {}
  // Next We need to provide a service- this means, telling Angular how to create it - by adding another property to the Angular @Component - the providers property
  ngOnInit() {
    // We subscribe to the authService's loggedINStatusChanged event to update the login status and username of the header component
    this.loggedInStatusChangedSubscription =
      this.authService.loggedInStatusChanged.subscribe({
        next: (loggedInStatus: boolean) => {
          this.isLoggedIn = loggedInStatus;
          if (loggedInStatus) {
            this.username = this.authService.getUsername();
          }
        },
      });
    // We set initial login status and username of the header component
    this.isLoggedIn = this.authService.isAuthenticated();
    if (this.isLoggedIn) {
      this.username = this.authService.getUsername();
    }
  }

  ngOnDestroy() {
    // we unsubscribe from loggedInStatusChangedSubscription to avoid memory leaks
    if (this.loggedInStatusChangedSubscription) {
      this.loggedInStatusChangedSubscription.unsubscribe();
    }
  }

  //toggles the sidenav
  toggleSidenav() {
    const sidenav = document.querySelector('mat-sidenav') as any;
    sidenav.toggle();
  }

  // closes the sidenav
  sidenavClosed() {
    const sidenav = document.querySelector('mat-sidenav') as any;
    sidenav.close();
  }
  // function to open the profile menu on click of profile button
  showProfileMenu(event: MouseEvent, trigger: MatMenuTrigger) {
    event.preventDefault();
    trigger.openMenu();
  }

  // *** 
  // OBVSERABLE NOTES 
  // Subscribing to an observable means that we are registering a callback function 
  // to be called whenever the observable emits a value. When we subscribe to an observable,
  // we are effectively saying "I want to receive notifications from this observable when it emits a value".
  // ***
  // here we declare the logout property
  // Function to log out the user and redirect to login/home page upon success
  // this method returns an Observable that will be used to handle the logout process
  public logout(): Observable<any> {
     // we create a new Observable with an observer as argument
    return new Observable((observer) => {
      // we call the authService's logout method which returns an Observable and chain the pipe() method onto it
      of(this.authService.logout())
        .pipe(
          // we use the tap() operator to perform side effects without modifying the emitted values 
          // In this case, set isLoggedIn to false, clear the username, and navigate to the login page
          tap(() => {
            this.isLoggedIn = false;
            this.username = '';
            this.router.navigate(['/login']);
          })
        ) .subscribe({  // We subscribe to the Observable returned by the authService's logout() method and pass an object with callbacks for next, error, and complete events
          next: () => {
              // The next function is called whenever the observable emits a new value, and it receives that value as an argument
              // When the logout Observable emits a next event, call the next() method on the observer object passed to the Observable created at the beginning of the method
            observer.next();
          },
          error: () => {
             // When the logout Observable emits an error event, call the error() method on the observer object passed to the Observable created at the beginning of the method
             observer.error();
          },
          complete: () => {
            // The complete function is called when the observable completes emitting values, and it does not receive any arguments
            // The error function is called if the observable encounters an error, and it receives the error object as an argument
            // When the logout Observable emits a complete event, call the complete() method on the observer object passed to the Observable created at the beginning of the method
            observer.complete(); 
          },
        });
    });
  }
  // Calls logout function and subscribes to the returned observable to redirect to the login/home page upon success
  logoutAndRedirect() {
    this.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.log(error); // Handle error if necessary
      }
  });
  }
}