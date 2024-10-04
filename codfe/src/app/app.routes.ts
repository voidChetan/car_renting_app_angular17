import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CarsComponent } from './pages/cars/cars.component';
import { BookingsComponent } from './pages/bookings/bookings.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                title:'Dashboard'
            },
            {
                path: 'cars',
                component: CarsComponent,
                title:'Cars'
            },
            {
                path: 'booking',
                component: BookingsComponent,
                title: 'Bookings'
            }
        ]
    }
];
