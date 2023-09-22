import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendingEventsComponent } from './attending-events.component';

describe('AttendingEventsComponent', () => {
  let component: AttendingEventsComponent;
  let fixture: ComponentFixture<AttendingEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendingEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
