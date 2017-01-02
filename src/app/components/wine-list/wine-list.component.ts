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

    constructor(private wineService: WineService) {
    }

    ngOnInit() {
        this.wineService.getAll()
          .then((wine: Wine[]) => this.wine = wine);
    }
}
