import { Component, OnInit } from '@angular/core';
import { WineService } from '../../services/wine.service';
import { Wine } from '../../models/wine';

@Component({
    selector: 'wine-list',
    templateUrl: './wine-list.component.html',
    styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {
    wine: Wine[];
    sortOptions: any[] = [
        {label: 'Year', value: 'year'},
        {label: 'Retail Price', value: 'retailPrice'}
    ];
    orderOptions: any[] = [
        {label: 'Ascending', value: 'asc'},
        {label: 'Descending', value: 'desc'}
    ];
    sort: string= 'year';
    order: string = 'asc';

    constructor(private wineService: WineService) {
    }

    ngOnInit() {
        this.wineService.getAll()
          .then((wine: Wine[]) => this.wine = wine);
    }
}
