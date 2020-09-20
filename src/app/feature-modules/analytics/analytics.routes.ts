import { Routes } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';
import { OverviewResolver } from './resolvers/overview-resolver';
import { GenreComponent } from './pages/genre/genre.component';
import { GenreResolver } from './resolvers/genre.resolver';

export const analyticsRoutes: Routes = [
    {
        path: 'overview',
        component: OverviewComponent,
        resolve: {
            overviewData: OverviewResolver
        }
    },
    {
        path: 'genre',
        component: GenreComponent,
        resolve: {
            genreData: GenreResolver
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