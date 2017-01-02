import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ArticlesServiceService } from '../../services/articles.service';
import { Article } from '../../models/Article';
import { isLoggedin } from '../../services/is-loggedin';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})

export class ArticlesListComponent implements OnInit {
  articles: Observable<Article[]>;
  isLoggedIn: boolean = !!this.users.loggedUser();
  constructor(private service: ArticlesServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private users: UsersService) {
  }

  ngOnInit() {
    this.articles = this.route.params
      .switchMap((params: Params) => {
        return this.service.getArticles();
      });
  }

}
