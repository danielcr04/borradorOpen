import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import { ScheduleWeekly } from '../../model/weekly-schedule.entity';
import { Course } from '../../model/course.entity';
import { Classroom } from '../../model/classroom.entity';
import { Schedule, TimeRange } from '../../model/schedule.entity';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatError } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgForOf, NgIf } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-weekly-schedule-action-dialog',
  imports: [
    MatFormField,
    FormsModule,
    MatInput,
    MatButton,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatFormFieldModule,
    MatLabel,
    MatError,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgForOf,
    NgIf,
    MatIconModule
  ],
  templateUrl: './weekly-schedule-action-dialog.component.html',
  styleUrl: './weekly-schedule-action-dialog.component.css'
})
export class WeeklyScheduleActionDialogComponent {
  dialogTitle?: string;
  weeklySchedule: ScheduleWeekly;
  mode: 'add' | 'edit' | 'delete';

  // Data for select options
  availableCourses: Course[] = [];
  availableClassrooms: Classroom[] = [];
  dayOptions: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Current schedule being edited
  currentSchedule: Schedule = new Schedule({});

  constructor(
    public dialogRef: MatDialogRef<WeeklyScheduleActionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private courseService: CourseService
  ) {
    this.mode = data.mode;
    this.weeklySchedule = data.weeklySchedule || new ScheduleWeekly({});

    if (this.mode === 'add') {
      this.dialogTitle = 'Add New Weekly Schedule';
    } else if (this.mode === 'edit') {
      this.dialogTitle = 'Edit Weekly Schedule';
    } else if (this.mode === 'delete') {
      this.dialogTitle = 'Confirm Deletion';
    }

    // Load available courses and classrooms
    this.loadAvailableCourses();
    this.loadAvailableClassrooms();
  }

  loadAvailableCourses() {
    this.courseService.getAll().subscribe(courses => {
      this.availableCourses = courses;
    });
  }

  loadAvailableClassrooms() {
    // Ideally, this would call a classroom service
    // For now, we'll use mock data

   /* this.courseService.getAll().subscribe(courses => {
      this.availableCourses = courses;
    });*/

    this.availableClassrooms = [
      new Classroom({ id: 1, code: 'A101', capacity: 30, campus: 'Surco' }),
      new Classroom({ id: 2, code: 'B202', capacity: 25, campus: 'SJL' }),
      new Classroom({ id: 3, code: 'C303', capacity: 40, campus: 'Ate' })
    ];
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }

  onSubmit(): void {
    this.dialogRef.close(this.weeklySchedule);
  }

  onConfirmDelete(): void {
    this.dialogRef.close(true);
  }

  addSchedule(): void {
    if (this.currentSchedule.dayOfWeek &&
      this.currentSchedule.timeRange.start &&
      this.currentSchedule.timeRange.end &&
      this.currentSchedule.course.id &&
      this.currentSchedule.classroom.id) {

      // Find the full Course and Classroom objects
      const course = this.availableCourses.find(c => c.id === this.currentSchedule.course.id);
      const classroom = this.availableClassrooms.find(c => c.id === this.currentSchedule.classroom.id);

      if (course && classroom) {
        // Create a new Schedule object with full references
        const scheduleToAdd = new Schedule({
          id: Date.now(), // Temporary ID
          dayOfWeek: this.currentSchedule.dayOfWeek,
          timeRange: { ...this.currentSchedule.timeRange },
          course: course,
          classroom: classroom
        });

        // Add to weekly schedule
        this.weeklySchedule.weekSchedule.push(scheduleToAdd);

        // Reset current schedule
        this.currentSchedule = new Schedule({});
      }
    }
  }

  removeSchedule(index: number): void {
    this.weeklySchedule.weekSchedule.splice(index, 1);
  }
}
