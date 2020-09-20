import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StudioCounts } from '../models/studio-counts.interface';

@Injectable({
  providedIn: 'root'
})
export class StudioService {

  baseUrl: string;

  constructor (
      private _http: HttpClient
  ) {
      this.baseUrl = `${environment.serviceUrl}/analytics/studio`;    
  }

  public getStudioCounts(): Observable<StudioCounts> {
    return this._http.get<StudioCounts>(`${this.baseUrl}`)
    .pipe(
      catchError((error) => {
        console.log("Error getting studio data");
        console.log(error);
        return of({ studios: [] });
      })
    );
  }
}
