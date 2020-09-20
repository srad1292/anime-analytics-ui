import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { IDoughnutGraphData } from '../../models/doughnut-graph-data.interface';

@Component({
  selector: 'app-doughnut-graph',
  templateUrl: './doughnut-graph.component.html',
  styleUrls: ['./doughnut-graph.component.scss']
})
export class DoughnutGraphComponent implements OnInit {

  @Input() graphData: IDoughnutGraphData;

  @Input() canvasId: string;

  @Input() title: string;

  doughnutChart: Chart;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this._buildGraph();
  }

  private _buildGraph() {
    if (this.doughnutChart) this.doughnutChart.destroy();
    
    console.log(this.graphData);
    console.log(this.canvasId);
    this.doughnutChart = new Chart(this.canvasId, {  
      type: 'doughnut',  
      data: {  
        labels: this.graphData?.labels,
        datasets: [  
          {  
            label: this.graphData?.dataLabel,
            data: this.graphData?.values,  
            // borderColor: '#3cba9f',  
            backgroundColor: this.graphData?.colors,
            fill: true  
          }, 
        ]  
      },  
      options: { 
        response: true,
        maintainAspectRatio: false,
        legend: {  
          display: false  
        }
      }  
    });  
  }

}
