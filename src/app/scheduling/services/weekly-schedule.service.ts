import {Injectable} from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {ScheduleWeekly} from "../model/weekly-schedule.entity";
import {environment} from '../../../environments/environment';


const weeklyScheduleResourceEndpointPath = environment.weeklyScheduleEndpointPath;

@Injectable({
  providedIn: 'root'
})
export class WeeklyScheduleService extends BaseService<ScheduleWeekly> {

  /**
   * Initializes the CourseService.
   * Sets up the base URL endpoint for all course-related HTTP requests.
   */
  constructor() {
    super();
    this.resourceEndpoint = weeklyScheduleResourceEndpointPath;
  }
}
