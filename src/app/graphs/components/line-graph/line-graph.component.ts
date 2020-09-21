import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { ILineGraphData } from '../../models/line-graph-data.interface';


@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss']
})
export class LineGraphComponent implements OnInit {

  @Input() graphData: ILineGraphData;

  @Input() canvasId: string;

  @Input() title: string;

  barChart: Chart;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this._buildGraph();
  }

  private _buildGraph() {
    if (this.barChart) this.barChart.destroy();
    
    console.log(this.graphData);
    console.log(this.canvasId);
    this.barChart = new Chart(this.canvasId, {  
      type: 'line',  
      data: {  
        labels: this.graphData?.labels,
        datasets: [  
          {  
            label: this.graphData?.dataLabel,
            data: this.graphData?.values,  
            borderColor: '#3cba9f',  
            // backgroundColor: this.graphData?.colors,
            fill: false  
          }, 
        ]  
      },  
      options: { 
        response: true,
        maintainAspectRatio: false,
        legend: {  
          display: false  
        },
        scales: {  
          xAxes: [{  
            display: true  
          }],  
          yAxes: [{  
            display: true,
            ticks: this.graphData?.yTicks || {}  
          }],  
        }
      }  
    });  
  }


}
