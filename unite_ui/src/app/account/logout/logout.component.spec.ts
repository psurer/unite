import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// error as reads: CANNOT find name 'describe'. 
// Check installation type definitions for a test runner? 
// Try `npm i --save-dev @types/jest` 
// or 
// `npm i --save-dev @types/mocha` and then add 
// 'jest' or 'mocha' to the types field in your tsconfig.ts(2593)