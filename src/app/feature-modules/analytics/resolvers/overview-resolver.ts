import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { OverviewCounts } from '../models/overview-counts.interface';
import { OverviewRatings } from '../models/overview-ratings.interface';
import { AnalyticsService } from '../services/analytics.service';
import { forkJoin, of, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { overviewRatingsPaginationDefault } from '../models/overview-ratings-pagination.interface';

export interface IOverviewResolver {
    counts: OverviewCounts;
    highestRated: OverviewRatings;
    lowestRated: OverviewRatings;
}

@Injectable()
export class OverviewResolver implements Resolve<IOverviewResolver> {

    constructor( private _analyticsService: AnalyticsService) {

    }

    resolve(): Observable<IOverviewResolver> {
        const paginationOptions = overviewRatingsPaginationDefault;
        return forkJoin([
            this._analyticsService.getOverviewCounts(),
            this._analyticsService.getHighestRated(paginationOptions),
            this._analyticsService.getLowestRated(paginationOptions)
        ])
        .pipe(
            (
                map((data) => {
                    return {
                        counts: data[0],
                        highestRated: data[1],
                        lowestRated: data[2],
                    };
                })
            )
        )
    }
}