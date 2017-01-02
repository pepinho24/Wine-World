import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';
import { Article } from '../models/Article';
import { UsersService } from './users.service';

@Injectable()
export class ArticlesServiceService {
  constructor(private http: Http, private users: UsersService) {
  }

  getArticles() {
    return this.http.get('http://localhost:3000/api/articles', {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .map((res: any) => {
        console.log('articles from server');
        return res.json().result;
      });
  }

  getArticle(articleId: string) {
    return this.http.get('http://localhost:3000/api/articles/' + articleId, {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .map((res: any) => {
        console.log('article from server');
        return res.json().result;
      });
  }

 createArticle(title: string, content: string) {
   let headers = new Headers();
    headers.append('content-type', 'application/json');
    let article = {title: title, content: content, author: this.users.loggedUser()};

    return this.http.post(
      'http://localhost:3000/api/articles',
      JSON.stringify(article),
      { headers: headers })
      .map((response: Response) => {
       return response.json().result;
      });
  }
}

