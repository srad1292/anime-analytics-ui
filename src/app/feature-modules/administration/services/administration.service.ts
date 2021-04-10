import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { AnimeRating } from "../models/anime-rating";
import { AnimeSearchList } from "../models/anime-search-list";

@Injectable()
export class AdministrationService {

    baseUrl: string;

    constructor (
        private _http: HttpClient
    ) {
        this.baseUrl = `${environment.serviceUrl}/anime`;    
    }

    public searchForAnime(title: string = "", page: number = 1): Observable<AnimeSearchList> {
        const query: HttpParams = new HttpParams()
            .append("title", title)
            .append("page", `${page}`);

        return this._http.get<AnimeSearchList>(`${this.baseUrl}`, {params: query})
        .pipe(
            catchError((error) => {
                console.log("Error searching for anime");
                console.log({error});
                return of({
                    totalPages: 0,
                    anime: []
                });
            })
        );
    }

    public getAnimeRating(animeId: number): Observable<AnimeRating[]> {
        return this._http.get<AnimeRating[]>(`${this.baseUrl}/${animeId}`)
        .pipe(
            catchError((error) => {
                console.log("Error getting anime rating");
                console.log({error});
                return of([]);
            })
        );
    }

    public saveAnimeRating(anime: AnimeRating): Observable<AnimeRating> {
        return this._http.post<AnimeRating>(`${this.baseUrl}`, anime)
        .pipe(
            catchError((error) => {
                console.log("Error saving anime rating");
                console.log({error});
                return of(null);
            })
        );
    }
}