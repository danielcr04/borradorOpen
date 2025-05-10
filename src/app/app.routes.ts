import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/pages/dashboard/dashboard.component';
import { PaymentsComponent } from './billing/pages/payments/payments.component';
import { MainLayoutComponent } from './public/components/main-layout/main-layout.component';
import { HeaderContentComponent } from './public/components/header-content/header-content.component';
import { OrganizationComponent } from './dashboard/pages/organization/organization.component';
import {ViewCoursesComponent} from './scheduling/pages/view-courses/view-courses.component';
import {ViewWeeklySchedulesComponent} from './scheduling/pages/view-weekly-schedules/view-weekly-schedules.component';
import {ViewClassroomsComponent} from './scheduling/pages/view-classrooms/view-classrooms.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'courses', component:  ViewCoursesComponent},
      { path: 'classrooms', component: ViewClassroomsComponent },
      { path: 'payments', component: ViewWeeklySchedulesComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    component: HeaderContentComponent,
    children: [
      { path: 'organization', component: OrganizationComponent },
      { path: 'courses', component: ViewCoursesComponent }
    ]
  }
];
