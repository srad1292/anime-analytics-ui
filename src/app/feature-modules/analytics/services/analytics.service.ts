import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { OverviewCounts } from '../models/overview-counts.interface';
import { OverviewRatings } from '../models/overview-ratings.interface';
import { OverviewRatingsPagination } from '../models/overview-ratings-pagination.interface';

@Injectable({providedIn: "root"})
export class AnalyticsService {

    baseUrl: string;

    constructor (
        private _http: HttpClient
    ) {
        this.baseUrl = `${environment.serviceUrl}/analytics`;    
    }

    public getOverviewCounts(): Observable<OverviewCounts> {
        return this._http.get<OverviewCounts>(`${this.baseUrl}/overview/counts`)
        .pipe(
            catchError((error) => {
                console.log("Error getting overview counts");
                console.log({error});
                return of({
                    totalCount: 0,
                    ratedCount: 0,
                    averageRating: 0,
                    countsByRating: []
                });
            })
        );
    }

    public getHighestRated(queryParams: OverviewRatingsPagination): Observable<OverviewRatings> {
        let params: HttpParams = new HttpParams();
        Object.keys(queryParams).forEach(key => {
            params = params.append(`${key}`, `${queryParams[key]}`)
        });

        return this._http.get<OverviewRatings>(`${this.baseUrl}/overview/highest-rated`, {params})
        .pipe(
            catchError((error) => {
                console.log("Error getting overview counts");
                console.log({error});
                return of({
                    rating: 0,
                    count: 0,
                    data: []
                });
            })
        );
    }

    public getLowestRated(queryParams: OverviewRatingsPagination): Observable<OverviewRatings> {
        let params: HttpParams = new HttpParams();
        Object.keys(queryParams).forEach(key => {
            params = params.append(`${key}`, `${queryParams[key]}`)
        });

        return this._http.get<OverviewRatings>(`${this.baseUrl}/overview/lowest-rated`, {params})
        .pipe(
            catchError((error) => {
                console.log("Error getting overview counts");
                console.log({error});
                return of({
                    rating: 0,
                    count: 0,
                    data: []
                });
            })
        );
    }



}