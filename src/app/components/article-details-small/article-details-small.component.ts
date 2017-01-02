import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/Article';

@Component({
  selector: 'app-article-details-small',
  templateUrl: './article-details-small.component.html',
  styleUrls: ['./article-details-small.component.css']
})
export class ArticleDetailsSmallComponent implements OnInit {

  @Input() article: Article;
  constructor() { }

  ngOnInit() {
  }

}
