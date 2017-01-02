import { Component, OnInit } from '@angular/core';
import { WineService } from '../../services/wine.service';
import { Wine } from '../../models/wine';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topSellingWine: Wine[];
  recommendedWine: Wine[];

  constructor(private wineService: WineService) {
  }

  ngOnInit() {
    this.wineService.getRecommended()
      .then((wine: Wine[]) => this.recommendedWine = wine);

    this.wineService.getTopSelling()
      .then((wine: Wine[]) => this.topSellingWine = wine);
  }

}
