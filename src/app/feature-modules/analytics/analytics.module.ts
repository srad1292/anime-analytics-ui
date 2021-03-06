import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './pages/overview/overview.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { analyticsRoutes } from './analytics.routes';
import { OverviewResolver } from './resolvers/overview-resolver';
import { CountComponent } from './components/count/count.component';
import { HighestRatedComponent } from './components/highest-rated/highest-rated.component';
import { LowestRatedComponent } from './components/lowest-rated/lowest-rated.component';
import { GraphsModule } from 'src/app/graphs/graphs.module';
import { GenreComponent } from './pages/genre/genre.component';
import { GenreResolver } from './resolvers/genre.resolver';
import { StudioComponent } from './pages/studio/studio.component';
import { StudioResolver } from './resolvers/studio.resolver';
import { TimeComponent } from './pages/time/time.component';
import { TimeResolver } from './resolvers/time.resolver';
import { ProducerComponent } from './pages/producer/producer.component';
import { ProducerResolver } from './resolvers/producer.resolver';



@NgModule({
  declarations: [
    OverviewComponent,
    CountComponent,
    HighestRatedComponent,
    LowestRatedComponent,
    GenreComponent,
    StudioComponent,
    TimeComponent,
    ProducerComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    GraphsModule,
    RouterModule.forChild(analyticsRoutes),
  ],
  providers: [
    OverviewResolver,
    GenreResolver,
    StudioResolver,
    TimeResolver,
    ProducerResolver,
  ]
})
export class AnalyticsModule { }
