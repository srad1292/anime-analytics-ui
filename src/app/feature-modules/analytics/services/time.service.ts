import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { FinishedYearCounts } from '../models/finished-date-counts.interface';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  baseUrl: string;

  constructor (
      private _http: HttpClient
  ) {
      this.baseUrl = `${environment.serviceUrl}/analytics/time`;    
  }

  public getFinishedYearCounts(): Observable<FinishedYearCounts> {
    return this._http.get<FinishedYearCounts>(`${this.baseUrl}/finished-date`)
    .pipe(
      catchError((error) => {
        console.log("Error getting finished date data");
        console.log(error);
        return of({ finishedYear: [] });
      })
    );
  }
}
