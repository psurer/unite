import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './app-star-rating.component.html',
  styleUrls: ['./app-star-rating.component.scss']
})
export class AppStarRatingComponent {
  @Input() rating: number = 0;
  @Output() ratingChange = new EventEmitter<number>();
  stars: boolean[] = [];

  constructor() {}

  ngOnInit() {
    this.stars = Array(10).fill(false);
    for (let i = 0; i < this.rating; i++) {
      this.stars[i] = true;
    }
  }

  rate(rating: number) {
    this.rating = rating;
    this.ratingChange.emit(this.rating);
    for (let i = 0; i < 10; i++) {
      this.stars[i] = i < this.rating;
    }
  }
}


/* app-star-rating component is a reusable component that can be used to display a 
rating using stars. It can take an input value that represents the current rating 
and display it using a visual representation of stars. It can also allow the user
to click on the stars to change the rating. This component can be used in 
different parts of the application where there is a need to display and rate items using stars. */