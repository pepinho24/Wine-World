import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, RouterModule } from '@angular/router';
import { routes } from '../../routes';
import { Http } from '@angular/http';
import { ArticlesServiceService } from '../../services/articles-service.service';
import { Article } from '../../core/Article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article: Article;
  constructor(private service: ArticlesServiceService, private route: ActivatedRoute,
    private router: Router) {
    // this.route.params.subscribe(params =>
    //   http.get('../../app/data/articles.json')
    //     // Call map on the response observable to get the parsed people object
    //     .map(res => res.json())
    //     // Subscribe to the observable to get the parsed people object and attach it to the
    //     // component
    //     .subscribe(res => {
    //       this.article = res.filter(a => a.ArticleId === +params['id'])[0];
    //     })
    // );
  }

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getArticle(+params['id']))
      .subscribe((a: Article) => {
        this.article = a;
        console.log(this.article);
      });
  }

  goToArticles() {
    this.router.navigate(['/articles']);
  }
}
