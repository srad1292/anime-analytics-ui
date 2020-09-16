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



@NgModule({
  declarations: [
    OverviewComponent,
    CountComponent,
    HighestRatedComponent,
    LowestRatedComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(analyticsRoutes),
  ],
  providers: [
    OverviewResolver
  ]
})
export class AnalyticsModule { }
