import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Wine } from '../models/wine';

// TODO: serve app from our server
const BASE_PATH = 'http://localhost:3000/api/wine';

@Injectable()
export class WineService {
    constructor(private http: Http) {
    }

    // TODO: move to factory ot smth
    private createWine(item) {
        return new Wine(item.name, item.type, item.year, item.origin, item.description,
            item.sweetness, item.abv, item.image, item.price, item.wholesaleQuantity);
    }

    private getPromise(observable: Observable<any>) {
        return observable
            .map((res: any) => res.json().result)
            .toPromise();
    }

    getAll() {
        return this.getPromise(this.http.get(BASE_PATH))
            .then(items => items.map(this.createWine));
    }

    getRecommended() {
        return this.getPromise(this.http.get(`${BASE_PATH}/select/recommended`))
            .then(items => items.map(this.createWine));
    }

    getTopSelling() {
        return this.getPromise(this.http.get(`${BASE_PATH}/select/top`))
            .then(items => items.map(this.createWine));
    }

    getByName(name: string) {
        return this.getPromise(this.http.get(`${BASE_PATH}/${name}`))
            .then(this.createWine);
    }
}
