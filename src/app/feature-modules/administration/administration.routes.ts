import { Routes } from '@angular/router';
import { AnimeRatingComponent } from './pages/anime-rating/anime-rating.component';
import { AnimeSearchComponent } from './pages/anime-search/anime-search.component';
import { GetRatingResolver } from './resolvers/get-rating.resolver';

export const administrationRoutes: Routes = [
    {
        path: 'search',
        component: AnimeSearchComponent,
    },
    {
        path: 'anime/:malId',
        component: AnimeRatingComponent,
        resolve: {
            animeRatings: GetRatingResolver
        }
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search',
    },
    {
        path: '**',
        redirectTo: 'search',
    }
]