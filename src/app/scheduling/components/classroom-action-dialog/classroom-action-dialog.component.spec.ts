import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomActionDialogComponent } from './classroom-action-dialog.component';

describe('ClassroomActionDialogComponent', () => {
  let component: ClassroomActionDialogComponent;
  let fixture: ComponentFixture<ClassroomActionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassroomActionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassroomActionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
