import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { ProducerCounts } from '../models/producer-counts.interface';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProducerService {

  baseUrl: string;

  constructor (
      private _http: HttpClient
  ) {
      this.baseUrl = `${environment.serviceUrl}/analytics/producer`;    
  }

  public getProducerCounts(): Observable<ProducerCounts> {
    return this._http.get<ProducerCounts>(`${this.baseUrl}`)
    .pipe(
      catchError((error) => {
        console.log("Error getting producer data");
        console.log(error);
        return of({ producers: [] });
      })
    );
  }
}
