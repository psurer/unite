import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsAndReviewsComponent } from './ratings-and-reviews.component';

describe('RatingsAndReviewsComponent', () => {
  let component: RatingsAndReviewsComponent;
  let fixture: ComponentFixture<RatingsAndReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingsAndReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingsAndReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
