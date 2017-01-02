import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticlesServiceService } from '../../services/articles.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {
  complexForm: FormGroup;

constructor(fb: FormBuilder, private articles: ArticlesServiceService, private router: Router, private auth: AuthenticationService) {
    this.complexForm = fb.group({
      'title': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      'content': [null, Validators.compose([Validators.required, Validators.minLength(5)])]
    });
  }

  submitForm(value) {
    // check if password and confirmPassword match
    this.articles.createArticle(value.title, value.content)
      .subscribe(
      (article: any) => {
        alert('Article created successfully!');
        this.router.navigate(['/article/', article.ArticleId]);
      }
      );
  }

  ngOnInit() {

  }

}
