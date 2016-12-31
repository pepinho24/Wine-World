import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ArticlesServiceService } from '../../services/articles-service.service';
import { Article } from '../../core/Article';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})

export class ArticlesListComponent implements OnInit {
  articles: Observable<Article[]>;
  constructor(private service: ArticlesServiceService,
    private route: ActivatedRoute,
    private router: Router) {
  }
  // constructor(http: Http) {
  //   http.get('../../app/data/articles.json')
  //     // Call map on the response observable to get the parsed people object
  //     .map(res => res.json())
  //     // Subscribe to the observable to get the parsed people object and attach it to the
  //     // component
  //     .subscribe(res => this.articles = res);
  // }
  ngOnInit() {
    this.articles = this.route.params
      .switchMap((params: Params) => {
        return this.service.getArticles();
      });
  }

}
