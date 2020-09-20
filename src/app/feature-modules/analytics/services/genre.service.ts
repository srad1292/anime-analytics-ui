import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { GenreCounts } from '../models/genre-counts.interface';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  baseUrl: string;

  constructor (
      private _http: HttpClient
  ) {
      this.baseUrl = `${environment.serviceUrl}/analytics/genre`;    
  }

  public getGenreCounts(): Observable<GenreCounts> {
    return this._http.get<GenreCounts>(`${this.baseUrl}`)
    .pipe(
      catchError((error) => {
        console.log("Error getting genre data");
        console.log(error);
        return of({ genres: [] });
      })
    );
  }
}
