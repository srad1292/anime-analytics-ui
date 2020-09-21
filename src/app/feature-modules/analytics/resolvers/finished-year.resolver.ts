import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TimeService } from '../services/time.service';
import { FinishedYearCounts } from '../models/finished-date-counts.interface';

@Injectable()
export class FinishedYearResolver implements Resolve<FinishedYearCounts> {

    constructor(private _genreService: TimeService) {}

    public resolve(): Observable<FinishedYearCounts> {
        return this._genreService.getFinishedYearCounts().pipe(take(1));
    }
}