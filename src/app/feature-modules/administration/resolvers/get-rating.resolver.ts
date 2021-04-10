import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { AnimeRating } from "../models/anime-rating";
import { AdministrationService } from "../services/administration.service";

@Injectable()
export class GetRatingResolver implements Resolve<AnimeRating[]> {

    constructor(private _adminService: AdministrationService) {}

    public resolve(activatedRoute: ActivatedRouteSnapshot): Observable<AnimeRating[]> {
        const malId: number = activatedRoute.params.malId;
        return this._adminService.getAnimeRating(malId);
    }
}