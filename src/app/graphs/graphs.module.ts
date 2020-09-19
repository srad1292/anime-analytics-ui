import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';

@NgModule({
  declarations: [
    BarGraphComponent
  ],
  exports: [
    BarGraphComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
  ]
})
export class GraphsModule { }
