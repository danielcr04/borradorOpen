import { Course } from './course.entity';
import { Classroom } from './classroom.entity';

export interface TimeRange {
  start: string;  // Hora de inicio en formato 'HH:mm'
  end: string;    // Hora de fin en formato 'HH:mm'
}

export class Schedule {
  id: number;
  dayOfWeek: string;
  timeRange: TimeRange;
  course: Course;
  classroom: Classroom;
  //teacher: Teacher;

  constructor(schedule: {
    id?: number,
    dayOfWeek?: string,
    timeRange?: TimeRange,
    course?: Course,
    classroom?: Classroom
    //teacher?: Teacher
  }) {
    this.id = schedule.id || 0;
    this.dayOfWeek = schedule.dayOfWeek || '';
    this.timeRange = schedule.timeRange || { start: '', end: '' };  // Si no se pasa, por defecto se pone un objeto vacío
    this.course = schedule.course || new Course({});  // Si no se pasa, se crea un curso vacío
    this.classroom = schedule.classroom || new Classroom({});  // Si no se pasa, se crea un aula vacía
  }
}
