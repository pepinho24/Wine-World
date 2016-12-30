import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { AboutComponent } from './components/about/about.component';

export const routes: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: ArticlesListComponent
    }, {
        path: 'about',
        component: AboutComponent
    }, {
        path: '**',
        redirectTo: ''
    }
]);
