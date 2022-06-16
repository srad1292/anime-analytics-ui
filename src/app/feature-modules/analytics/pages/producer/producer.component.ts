import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProducerCounts, ProducerCount } from '../../models/producer-counts.interface';
import { IBarGraphData } from 'src/app/graphs/models/bar-graph-data.interface';
import { IDoughnutGraphData } from 'src/app/graphs/models/doughnut-graph-data.interface';
import { BarYTicks } from 'src/app/graphs/models/bar-y-ticks.interface';
import { getColors } from 'src/app/graphs/utils/get-colors.util';
import { ExportPageService } from '../../services/export_page.service';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.scss']
})
export class ProducerComponent implements OnInit {

  producerData: ProducerCounts;

  producerCountGraph: IBarGraphData;

  producerAverageGraph: IBarGraphData;

  producerFrequencyGraph: IDoughnutGraphData;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _exportPageService: ExportPageService
  ) { }

  ngOnInit(): void {
    this.producerData = this._activatedRoute.snapshot.data.producerData;
    const producers: ProducerCount[] = this.producerData?.producers || [];
    
    this.producerCountGraph = this._buildCountOfProducerGraph(producers);
    this.producerAverageGraph = this._buildAverageRatingOfProducerGraph(producers);
    this.producerFrequencyGraph = this._buildFrequencyOfProducerGraph(producers);
  }

  public exportPage(): void {
    let containerId: String = 'producer-container';
    this._exportPageService.downloadPdf(containerId, 'producer');
    this._exportPageService.downloadPng(containerId, 'producer');
  }
  
  private _buildCountOfProducerGraph(producers: ProducerCount[]): IBarGraphData {
    let labels: string[] = [];
    let values: number[] = [];
    producers.forEach((producer: ProducerCount) => {
      labels.push(`${producer.name}`);
      values.push(producer.count);
    });

    let max = 0;
    let stepSize = 1;
    if(producers?.length) {
      const sorted = [...producers].sort((a,b) => {
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

  private _buildAverageRatingOfProducerGraph(producers: ProducerCount[]): IBarGraphData {
    let labels: string[] = [];
    let values: number[] = [];
    producers.forEach((producer: ProducerCount) => {
      labels.push(`${producer.name}`);
      values.push(producer.average);
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

  private _buildFrequencyOfProducerGraph(producers: ProducerCount[]): IDoughnutGraphData {
    let labels: string[] = [];
    let values: number[] = [];
    producers.forEach((producer: ProducerCount) => {
      labels.push(`${producer.name}`);
      values.push(producer.count);
    });

    return {
      labels,
      values,
      colors: getColors(labels),
      dataLabel: "Frequency"
    };
  }

}
