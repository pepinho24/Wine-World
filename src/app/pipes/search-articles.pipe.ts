import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../models/Article';

@Pipe({
  name: 'searchArticles'
})
export class SearchArticlesPipe implements PipeTransform {

  transform(articles: Article[], args: string[]): Article[] {
    if (!(articles && args && args[0])) {
        return articles;
    }
    let search = args[0].trim().toLowerCase(),
        result = articles;
    if (!search) {
      return result;
    }
    let searchWords = search.split(/\s/).filter((word) => word.length > 0),
        wordCount = searchWords.length;

    return result.filter((article) => {
      let title = article.Title.toLowerCase();
      return searchWords.filter((word) => title.indexOf(word) > -1).length === wordCount;
    });
  }
}
