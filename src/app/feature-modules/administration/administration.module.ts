import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { administrationRoutes } from './administration.routes';
import { AnimeSearchComponent } from './pages/anime-search/anime-search.component';
import { AnimeRatingComponent } from './pages/anime-rating/anime-rating.component';
import { AdministrationService } from './services/administration.service';



@NgModule({
  declarations: [
    AnimeSearchComponent, 
    AnimeRatingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(administrationRoutes),
  ],
  providers: [
    AdministrationService
  ]
})
export class AdministrationModule { }
