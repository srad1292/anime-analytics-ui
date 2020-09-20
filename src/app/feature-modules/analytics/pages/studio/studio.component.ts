import { Component, OnInit } from '@angular/core';
import { StudioCounts, StudioCount } from '../../models/studio-counts.interface';
import { IBarGraphData } from 'src/app/graphs/models/bar-graph-data.interface';
import { IDoughnutGraphData } from 'src/app/graphs/models/doughnut-graph-data.interface';
import { ActivatedRoute } from '@angular/router';
import { getColors } from 'src/app/graphs/utils/get-colors.util';
import { BarYTicks } from 'src/app/graphs/models/bar-y-ticks.interface';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss']
})
export class StudioComponent implements OnInit {

  studioData: StudioCounts;

  studioCountGraph: IBarGraphData;

  studioAverageGraph: IBarGraphData;

  studioFrequencyGraph: IDoughnutGraphData;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.studioData = this._activatedRoute.snapshot.data.studioData;
    const studios: StudioCount[] = this.studioData?.studios || [];
    
    this.studioCountGraph = this._buildCountOfStudioGraph(studios);
    this.studioAverageGraph = this._buildAverageRatingOfStudioGraph(studios);
    this.studioFrequencyGraph = this._buildFrequencyOfStudioGraph(studios);
  }
  
  private _buildCountOfStudioGraph(studios: StudioCount[]): IBarGraphData {
    let labels: string[] = [];
    let values: number[] = [];
    studios.forEach((studio: StudioCount) => {
      labels.push(`${studio.name}`);
      values.push(studio.count);
    });

    let max = 0;
    let stepSize = 1;
    if(studios?.length) {
      const sorted = [...studios].sort((a,b) => {
        return b.count - a.count;
      });
      max = sorted[0].count;
      if(max <= 15) {
        stepSize = 1;
      }
      else if(max <= 30) {
        stepSize = 2;
      } 
      else {
        stepSize = 5;
      }
    }

    const yTicks: BarYTicks = {
      min: 0,
      max: max,
      stepSize: stepSize
    };

    return {
      labels,
      values,
      colors: getColors(labels),
      dataLabel: "Count of Anime",
      yTicks
    };
  }

  private _buildAverageRatingOfStudioGraph(studios: StudioCount[]): IBarGraphData {
    let labels: string[] = [];
    let values: number[] = [];
    studios.forEach((studio: StudioCount) => {
      labels.push(`${studio.name}`);
      values.push(studio.average);
    });

    const yTicks: BarYTicks = {
      min: 0,
      max: 10,
      stepSize: 1
    };

    return {
      labels,
      values,
      colors: getColors(labels),
      dataLabel: "Average Rating",
      yTicks
    };
  }

  private _buildFrequencyOfStudioGraph(studios: StudioCount[]): IDoughnutGraphData {
    let labels: string[] = [];
    let values: number[] = [];
    studios.forEach((studio: StudioCount) => {
      labels.push(`${studio.name}`);
      values.push(studio.count);
    });

    return {
      labels,
      values,
      colors: getColors(labels),
      dataLabel: "Frequency"
    };
  }

}
