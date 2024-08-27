import { Routes } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { restaurantComponent } from '../pages/restaurant/restaurant.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'restaurant/:id',
    component: restaurantComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
