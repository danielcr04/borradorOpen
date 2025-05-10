import { Schedule } from './schedule.entity';

export class ScheduleWeekly {
  id: number;
  //academyId: number;   Campo para el ID de la academia
  name: string;        // Nombre para identificar la programación semanal
  weekSchedule: Schedule[];  // Lista de todos los horarios de la semana

  constructor(scheduleWeekly: { id?: number, name?: string, weekSchedule?: Schedule[] }) {
    this.id = scheduleWeekly.id || 0;
    // this.academyId = scheduleWeekly.academyId || 0;  Asegura que el campo academyId sea asignado
    this.name = scheduleWeekly.name || '';           // Asegura que el nombre esté asignado (por defecto vacío)
    this.weekSchedule = scheduleWeekly.weekSchedule || [];
  }
}
