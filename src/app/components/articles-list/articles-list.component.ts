import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ArticlesServiceService } from '../../services/articles.service';
import { Article } from '../../models/Article';

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

  ngOnInit() {
    this.articles = this.route.params
      .switchMap((params: Params) => {
        return this.service.getArticles();
      });
  }

}
