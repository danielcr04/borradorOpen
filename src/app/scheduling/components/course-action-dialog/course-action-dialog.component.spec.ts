import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseActionDialogComponent } from './course-action-dialog.component';

describe('CourseActionDialogComponent', () => {
  let component: CourseActionDialogComponent;
  let fixture: ComponentFixture<CourseActionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseActionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseActionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
