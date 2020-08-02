import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './pages/overview/overview.component';
import { RouterModule } from '@angular/router';
import { analyticsRoutes } from './analytics.routes';
import { OverviewResolver } from './resolvers/overview-resolver';



@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(analyticsRoutes),
  ],
  providers: [
    OverviewResolver
  ]
})
export class AnalyticsModule { }
