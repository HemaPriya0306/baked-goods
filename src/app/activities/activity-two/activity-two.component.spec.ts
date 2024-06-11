import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTwoComponent } from './activity-two.component';

describe('ActivityTwoComponent', () => {
  let component: ActivityTwoComponent;
  let fixture: ComponentFixture<ActivityTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityTwoComponent]
    });
    fixture = TestBed.createComponent(ActivityTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
