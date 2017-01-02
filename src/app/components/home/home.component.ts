import { Component, OnInit } from '@angular/core';
import { Wine } from '../../models/wine';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    topSellingWine: Wine[];
    recommendedWine: Wine[];

  constructor() {
    this.topSellingWine = [new Wine('test1')];
    this.recommendedWine = [new Wine('test2')];
  }

  ngOnInit() {

  }

}
