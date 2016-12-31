import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, RouterModule } from '@angular/router';
import { routes } from '../../routes';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  articleId: number;

  constructor( private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  this.route.params.subscribe(params => this.articleId = +params['id']);
  }

  goToArticles() {
    this.router.navigate(['/articles']);
  }
}
