import { Component, OnInit } from '@angular/core';
import { FinishedYearCounts, FinishedYearCount } from '../../models/finished-date-counts.interface';
import { IBarGraphData } from 'src/app/graphs/models/bar-graph-data.interface';
import { IDoughnutGraphData } from 'src/app/graphs/models/doughnut-graph-data.interface';
import { ActivatedRoute } from '@angular/router';
import { getColors } from 'src/app/graphs/utils/get-colors.util';
import { BarYTicks } from 'src/app/graphs/models/bar-y-ticks.interface';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  finishedYearData: FinishedYearCounts;

  finishedYearCountGraph: IBarGraphData;

  finishedYearAverageGraph: IBarGraphData;

  finishedYearFrequencyGraph: IDoughnutGraphData;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.finishedYearData = this._activatedRoute.snapshot.data.finishedYearData;
    const finishedYears: FinishedYearCount[] = this.finishedYearData?.finishedYear || [];
    
    this.finishedYearCountGraph = this._buildCountOfFinishedYearGraph(finishedYears);
    this.finishedYearAverageGraph = this._buildAverageRatingOfFinishedYearGraph(finishedYears);
  }
  
  private _buildCountOfFinishedYearGraph(finishedYears: FinishedYearCount[]): IBarGraphData {
    let labels: string[] = [];
    let values: number[] = [];
    finishedYears.forEach((finishedYear: FinishedYearCount) => {
      labels.push(`${finishedYear.year}`);
      values.push(finishedYear.count);
    });

    return {
      labels,
      values,
      colors: getColors(labels),
      dataLabel: "Count of Anime"
    };
  }

  private _buildAverageRatingOfFinishedYearGraph(finishedYears: FinishedYearCount[]): IBarGraphData {
    let labels: string[] = [];
    let values: number[] = [];
    finishedYears.forEach((finishedYear: FinishedYearCount) => {
      labels.push(`${finishedYear.year}`);
      values.push(finishedYear.average);
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
}
