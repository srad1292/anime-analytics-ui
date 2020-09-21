import { Routes } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';
import { OverviewResolver } from './resolvers/overview-resolver';
import { GenreComponent } from './pages/genre/genre.component';
import { GenreResolver } from './resolvers/genre.resolver';
import { StudioComponent } from './pages/studio/studio.component';
import { StudioResolver } from './resolvers/studio.resolver';
import { TimeComponent } from './pages/time/time.component';
import { FinishedYearResolver } from './resolvers/finished-year.resolver';

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
        path: 'studio',
        component: StudioComponent,
        resolve: {
            studioData: StudioResolver
        }
    },
    {
        path: 'dates',
        component: TimeComponent,
        resolve: {
            finishedYearData: FinishedYearResolver
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