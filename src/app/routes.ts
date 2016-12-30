import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

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
        path: 'register',
        component: RegisterComponent
    }, {
        path: 'login',
        component: LoginComponent
    }, {
        path: '**',
        redirectTo: ''
    }
]);
