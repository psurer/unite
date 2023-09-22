import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPointsComponent } from './get-points.component';

describe('GetPointsComponent', () => {
  let component: GetPointsComponent;
  let fixture: ComponentFixture<GetPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPointsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
