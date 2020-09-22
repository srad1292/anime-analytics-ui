import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { Observable, of, forkJoin } from 'rxjs';
import { TimeService } from '../services/time.service';
import { FinishedYearCounts } from '../models/finished-date-counts.interface';
import { StartedAiringYearCounts } from '../models/start-air-date-counts.interface';

export interface ITimeResolver {
    finishedYearData: FinishedYearCounts;
    startingAiringYearData: StartedAiringYearCounts;
}

@Injectable()
export class TimeResolver implements Resolve<ITimeResolver> {

    constructor(private _genreService: TimeService) {}

    public resolve(): Observable<ITimeResolver> {

        return forkJoin([
            this._genreService.getFinishedYearCounts(),
            this._genreService.getStartedAiringDateCounts()
        ])
        .pipe(
            take(1),
            map(timeData => {
                return {
                    finishedYearData: timeData[0],
                    startingAiringYearData: timeData[1]
                };
            })
        )
        
            
    }
}