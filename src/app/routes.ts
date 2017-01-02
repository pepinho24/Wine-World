import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticleCreateComponent } from './components/article-create/article-create.component';
import { WineListComponent } from './components/wine-list/wine-list.component';
import { WineDetailComponent } from './components/wine-detail/wine-detail.component';

export const routes: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: HomeComponent
    }, {
        path: 'articles',
        component: ArticlesListComponent
    }, {
        path: 'article/:id',
        component: ArticleDetailComponent
    }, {
        path: 'articles/create',
        component: ArticleCreateComponent
    }, {
        path: 'about',
        component: AboutComponent
    }, {
        path: 'register',
        component: RegisterComponent
    }, {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'wine',
        component: WineListComponent
    }, {
        path: 'wine/:name',
        component: WineDetailComponent
    }, {
        path: '**',
        redirectTo: ''
    }
]);
