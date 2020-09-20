import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { GenreCounts } from '../models/genre-counts.interface';
import { GenreService } from '../services/genre.service';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class GenreResolver implements Resolve<GenreCounts> {

    constructor(private _genreService: GenreService) {}

    public resolve(): Observable<GenreCounts> {
        return this._genreService.getGenreCounts().pipe(take(1));
    }
}