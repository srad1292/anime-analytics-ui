import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OverviewCounts, RatingCount } from '../../models/overview-counts.interface';
import { IOverviewResolver } from '../../resolvers/overview-resolver';
import { IBarGraphData } from 'src/app/graphs/models/bar-graph-data.interface';
import { getColors } from 'src/app/graphs/utils/get-colors.util';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  overviewData: IOverviewResolver;
  overviewCounts: OverviewCounts;

  ratingCountData: IBarGraphData;

  constructor(
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.overviewData = this._activatedRoute.snapshot.data.overviewData;
    this.overviewCounts = this.overviewData?.counts;
    this.ratingCountData = this._buildRatingCountGraph(this.overviewCounts?.countsByRating);
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
