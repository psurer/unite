import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ratings-and-reviews',
  templateUrl: './ratings-and-reviews.component.html',
  styleUrls: ['./ratings-and-reviews.component.scss']
})
export class RatingsAndReviewsComponent {
  @Input() eventId: string;
  @Input() challengeId: string;
  @Input() userId: string;
  userRating: number = 0;
  userReview: string = '';
  ratings: number[] = [];
  reviews: string[] = [];

  constructor() {}

  ngOnInit() {
    // fetch ratings and reviews for the event/challenge from backend API
    this.fetchRatingsAndReviews();
  }

  fetchRatingsAndReviews() {
    // call backend API to fetch ratings and reviews
    // populate this.ratings and this.reviews arrays with the data
  }

  onRatingChange(rating: number) {
    // update the user's rating
    this.userRating = rating;
  }

  onReviewChange(review: string) {
    // update the user's review
    this.userReview = review;
  }

  onSubmit() {
    // submit the user's rating and review to backend API
    // update this.ratings and this.reviews arrays with new data
    // reset userRating and userReview
  }
}
