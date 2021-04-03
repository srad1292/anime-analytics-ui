import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
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
                console.log("Error searcing for anime");
                console.log({error});
                return of({
                    totalPages: 0,
                    anime: []
                });
            })
        );
    }
}