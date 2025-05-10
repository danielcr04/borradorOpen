import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWeeklySchedulesComponent } from './view-weekly-schedules.component';

describe('ViewWeeklySchedulesComponent', () => {
  let component: ViewWeeklySchedulesComponent;
  let fixture: ComponentFixture<ViewWeeklySchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewWeeklySchedulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewWeeklySchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
