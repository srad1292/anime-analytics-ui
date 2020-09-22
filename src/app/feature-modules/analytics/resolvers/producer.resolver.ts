import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { ProducerCounts } from '../models/producer-counts.interface';
import { ProducerService } from '../services/producer.service';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ProducerResolver implements Resolve<ProducerCounts> {

    constructor(private _producerService: ProducerService) {}

    public resolve(): Observable<ProducerCounts> {
        return this._producerService.getProducerCounts().pipe(take(1));
    }
}