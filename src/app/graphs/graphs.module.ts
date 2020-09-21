import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { DoughnutGraphComponent } from './components/doughnut-graph/doughnut-graph.component';
import { LineGraphComponent } from './components/line-graph/line-graph.component';

@NgModule({
  declarations: [
    BarGraphComponent,
    DoughnutGraphComponent,
    LineGraphComponent
  ],
  exports: [
    BarGraphComponent,
    DoughnutGraphComponent,
    LineGraphComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
  ]
})
export class GraphsModule { }
