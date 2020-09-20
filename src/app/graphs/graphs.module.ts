import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { DoughnutGraphComponent } from './components/doughnut-graph/doughnut-graph.component';

@NgModule({
  declarations: [
    BarGraphComponent,
    DoughnutGraphComponent
  ],
  exports: [
    BarGraphComponent,
    DoughnutGraphComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
  ]
})
export class GraphsModule { }
