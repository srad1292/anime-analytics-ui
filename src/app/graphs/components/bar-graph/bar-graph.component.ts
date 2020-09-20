import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { IBarGraphData } from '../../models/bar-graph-data.interface';
import { BarYTicks } from '../../models/bar-y-ticks.interface';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent implements OnInit {

  @Input() graphData: IBarGraphData;

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
      type: 'bar',  
      data: {  
        labels: this.graphData?.labels,
        datasets: [  
          {  
            label: this.graphData?.dataLabel,
            data: this.graphData?.values,  
            borderColor: '#3cba9f',  
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
