import { Component, OnInit } from '@angular/core';
import { FinishedYearCounts, FinishedYearCount } from '../../models/finished-date-counts.interface';
import { IBarGraphData } from 'src/app/graphs/models/bar-graph-data.interface';
import { IDoughnutGraphData } from 'src/app/graphs/models/doughnut-graph-data.interface';
import { ActivatedRoute } from '@angular/router';
import { getColors } from 'src/app/graphs/utils/get-colors.util';
import { BarYTicks } from 'src/app/graphs/models/bar-y-ticks.interface';
import { ITimeResolver } from '../../resolvers/time.resolver';
import { StartedAiringYearCounts, StartedAiringYearCount } from '../../models/start-air-date-counts.interface';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  finishedYearData: FinishedYearCounts;
  finishedYearCountGraph: IBarGraphData;
  finishedYearAverageGraph: IBarGraphData;

  startedAiringYearData: StartedAiringYearCounts;
  startedAiringYearCountGraph: IBarGraphData;
  startedAiringYearAverageGraph: IBarGraphData;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const timeData: ITimeResolver = this._activatedRoute.snapshot.data.timeData || {};
    
    this.finishedYearData = timeData.finishedYearData;
    const finishedYears: FinishedYearCount[] = this.finishedYearData?.finishedYear || [];
    this.finishedYearCountGraph = this._buildCountOfFinishedYearGraph(finishedYears);
    this.finishedYearAverageGraph = this._buildAverageRatingOfFinishedYearGraph(finishedYears);

    this.startedAiringYearData = timeData.startingAiringYearData;
    const startingYears: StartedAiringYearCount[] = this.startedAiringYearData?.startedAiringYear || [];
    this.startedAiringYearCountGraph = this._buildCountOfStartedAiringYearGraph(startingYears);
    this.startedAiringYearAverageGraph = this._buildAverageRatingOfStartedAiringYearGraph(startingYears);
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

  private _buildCountOfStartedAiringYearGraph(startingYears: StartedAiringYearCount[]): IBarGraphData {
    let labels: string[] = [];
    let values: number[] = [];
    startingYears.forEach((startingYear: StartedAiringYearCount) => {
      labels.push(`${startingYear.year}`);
      values.push(startingYear.count);
    });

    return {
      labels,
      values,
      colors: getColors(labels),
      dataLabel: "Count of Anime"
    };
  }

  private _buildAverageRatingOfStartedAiringYearGraph(startingYears: StartedAiringYearCount[]): IBarGraphData {
    let labels: string[] = [];
    let values: number[] = [];
    startingYears.forEach((startingYear: StartedAiringYearCount) => {
      labels.push(`${startingYear.year}`);
      values.push(startingYear.average);
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
