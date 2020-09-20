import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { StudioCounts } from '../models/studio-counts.interface';
import { StudioService } from '../services/studio.service';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class StudioResolver implements Resolve<StudioCounts> {

    constructor(private _studioService: StudioService) {}

    public resolve(): Observable<StudioCounts> {
        return this._studioService.getStudioCounts().pipe(take(1));
    }
}