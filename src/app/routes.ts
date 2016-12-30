import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

export const routes: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: HomeComponent
    }, {
        path: 'articles',
        component: ArticlesListComponent
    }, {
        path: 'about',
        component: AboutComponent
    }, {
        path: '**',
        redirectTo: ''
    }
]);
