import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Wine } from '../../models/wine';
import { WineService } from '../../services/wine.service';

@Component({
    selector: 'wine-detail',
    templateUrl: './wine-detail.component.html',
    styleUrls: ['./wine-detail.component.css']
})
export class WineDetailComponent implements OnInit {
    wine: Wine;

    constructor(private wineService: WineService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params
          .switchMap((params: Params) => this.wineService.getByName(params['name']))
          .subscribe((wine: Wine) => {this.wine = wine; console.log(wine);});
    }
}
