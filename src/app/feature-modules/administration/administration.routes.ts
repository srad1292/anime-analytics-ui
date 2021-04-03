import { Routes } from '@angular/router';
import { AnimeRatingComponent } from './pages/anime-rating/anime-rating.component';
import { AnimeSearchComponent } from './pages/anime-search/anime-search.component';

export const administrationRoutes: Routes = [
    {
        path: 'search',
        component: AnimeSearchComponent,
    },
    {
        path: 'anime/:malId',
        component: AnimeRatingComponent,
        // resolve: {
        //     genreData: GenreResolver
        // }
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