import { Routes } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';
import { OverviewResolver } from './resolvers/overview-resolver';

export const analyticsRoutes: Routes = [
    {
        path: 'overview',
        component: OverviewComponent,
        resolve: {
            overviewData: OverviewResolver
        }
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview',
    },
    {
        path: '**',
        redirectTo: 'overview',
    }
]