import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OverviewCounts, RatingCount } from '../../models/overview-counts.interface';
import { IOverviewResolver } from '../../resolvers/overview-resolver';
import { IBarGraphData } from 'src/app/graphs/models/bar-graph-data.interface';
import { getColors } from 'src/app/graphs/utils/get-colors.util';

import { ExportPageService } from '../../services/export_page.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @ViewChild('overviewContainer')
  pdfTable!: ElementRef;

  overviewData: IOverviewResolver;
  overviewCounts: OverviewCounts;

  ratingCountData: IBarGraphData;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _exportPageService: ExportPageService
  ) { }

  ngOnInit(): void {
    this.overviewData = this._activatedRoute.snapshot.data.overviewData;
    this.overviewCounts = this.overviewData?.counts;
    this.ratingCountData = this._buildRatingCountGraph(this.overviewCounts?.countsByRating);
  }

  public exportPage(): void {
    let containerId: String = 'overview-container';
    this._exportPageService.downloadPdf(containerId, 'overview');
    this._exportPageService.downloadPng(containerId, 'overview');
  }

  private _buildRatingCountGraph(counts: RatingCount[] = []): IBarGraphData {
    let labels: string[] = [];
    let values: number[] = [];
    counts.forEach((count: RatingCount) => {
      labels.push(`${count.score}`);
      values.push(count.count);
    });

    return {
      labels,
      values,
      colors: getColors(labels),
      dataLabel: "Count of Anime by Rating"
    };
  }



}
