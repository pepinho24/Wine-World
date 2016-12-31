import { Injectable } from '@angular/core';
import { Article } from '../core/Article';

let ARTICLES = [new Article(
    1,
     'Article title 1',
     'Anonymous',
   'Dolor irure labore quis et in tempor velit. Cillum magna qui incididunt labore ea Lorem enim. Fugiat magna sit ipsum ut do. Lorem aliquip enim sint velit minim eiusmod tempor non est anim. Occaecat tempor proident esse ipsum laboris proident ex ex reprehenderit esse. Eiusmod qui aute nostrud ex labore labore tempor incididunt sint dolore adipisicing ut ut.Occaecat mollit voluptate esse sint adipisicing duis cupidatat laborum. Enim quis sit excepteur sint. Amet pariatur irure est in quis sint culpa. Dolore occaecat veniam est pariatur in pariatur commodo. In ad et quis fugiat proident mollit ex cillum ut. Aute elit dolor aute nulla dolore cupidatat enim eu incididunt amet consequat deserunt ullamco tempor. Ullamco dolor occaecat irure irure minim dolore dolore eiusmod adipisicing ullamco nisi dolor mollit.'
), new Article(
     2,
     'Eu labore quis id irure ullamco voluptate qui velit eu.',
    'Anonymous',
    'Irure laborum elit fugiat laboris qui reprehenderit occaecat aliqua qui fugiat dolore elit minim. Aliquip adipisicing incididunt commodo non qui irure cupidatat eu pariatur aliquip. Sint nisi enim duis irure do do consequat et enim adipisicing sunt et sint ut. Ad anim velit sint eu adipisicing magna esse voluptate eu non irure esse irure. Velit labore aliqua ullamco sint occaecat aliquip ipsum sint cillum amet. Qui consectetur elit nulla culpa proident dolor in excepteur tempor amet. Magna velit labore ipsum aute velit esse id elit ipsum tempor exercitation.'
), new Article(
    3,
     'Voluptate ad mollit cillum culpa ad anim et aliqua consequat.',
     'Anonymous',
   'Esse dolore enim anim proident fugiat. Elit ut voluptate id adipisicing dolore anim non officia. Nulla commodo nostrud do laborum amet proident ut. Adipisicing occaecat quis adipisicing culpa irure. Labore eu id in voluptate in eu ipsum in duis mollit non officia veniam culpa. Incididunt ullamco sint mollit cupidatat dolor officia duis sit sint do pariatur cillum. Mollit duis nostrud tempor elit deserunt ullamco eiusmod. Ex nostrud incididunt est anim elit laborum quis. Sit exercitation Lorem eiusmod ea. Incididunt reprehenderit ea esse laboris pariatur cillum et enim qui commodo quis sint irure. Non tempor velit qui officia cupidatat id nostrud enim fugiat nisi mollit et.'
), new Article(
    4,
     'Nulla aliqua laborum dolore et officia sunt ipsum proident deserunt.',
    'Anonymous',
    'Consectetur adipisicing magna et ullamco ipsum ad exercitation non pariatur consequat. Occaecat excepteur velit sit ad quis veniam magna. Anim est qui tempor et consequat elit sunt dolor laboris aliqua. Occaecat laborum minim anim reprehenderit dolor minim voluptate ex nisi nulla culpa pariatur quis. Mollit reprehenderit duis magna excepteur ea sint laborum consectetur occaecat fugiat proident quis ea occaecat. Consectetur anim dolore laborum voluptate sit. Ut velit quis qui commodo minim cillum aute consequat Lorem quis dolor adipisicing. Reprehenderit cillum et dolor occaecat. Est sunt nulla anim in in dolor. Reprehenderit ut ullamco reprehenderit incididunt sit commodo tempor.'
)];

let articlesPromise = Promise.resolve(ARTICLES);

@Injectable()
export class ArticlesServiceService {
  getArticles() { return articlesPromise; }

  getArticle(articleId: number | string) {
    return articlesPromise
      .then(articles => articles.find(article => article.ArticleId === +articleId));
  }
}

