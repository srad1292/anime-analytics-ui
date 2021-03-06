import { Routes } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';
import { OverviewResolver } from './resolvers/overview-resolver';
import { GenreComponent } from './pages/genre/genre.component';
import { GenreResolver } from './resolvers/genre.resolver';
import { StudioComponent } from './pages/studio/studio.component';
import { StudioResolver } from './resolvers/studio.resolver';
import { TimeComponent } from './pages/time/time.component';
import { TimeResolver } from './resolvers/time.resolver';
import { ProducerComponent } from './pages/producer/producer.component';
import { ProducerResolver } from './resolvers/producer.resolver';

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
        path: 'producer',
        component: ProducerComponent,
        resolve: {
            producerData: ProducerResolver
        }
    },
    {
        path: 'dates',
        component: TimeComponent,
        resolve: {
            timeData: TimeResolver
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