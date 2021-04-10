import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { administrationRoutes } from './administration.routes';
import { AnimeSearchComponent } from './pages/anime-search/anime-search.component';
import { AnimeRatingComponent } from './pages/anime-rating/anime-rating.component';
import { AdministrationService } from './services/administration.service';
import { GetRatingResolver } from './resolvers/get-rating.resolver';



@NgModule({
  declarations: [
    AnimeSearchComponent, 
    AnimeRatingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(administrationRoutes),
  ],
  providers: [
    AdministrationService,
    GetRatingResolver,
  ]
})
export class AdministrationModule { }
