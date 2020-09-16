import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OverviewCounts } from '../../models/overview-counts.interface';
import { IOverviewResolver } from '../../resolvers/overview-resolver';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  overviewData: IOverviewResolver;
  overviewCounts: OverviewCounts;

  constructor(
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.overviewData = this._activatedRoute.snapshot.data.overviewData;
    this.overviewCounts = this.overviewData?.counts;
  }

}
