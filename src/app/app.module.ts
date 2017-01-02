import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Observable, Observer} from 'rxjs/Rx';

import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { routes } from './routes';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
<<<<<<< HEAD
import { ArticlesServiceService } from './services/articles-service.service';
import { TruncatePipe } from './core/truncate.pipe';
import { UsersService } from './services/users.service';
import { AuthenticationService } from './services/authentication.service';
=======
import { ArticlesServiceService } from './services/articles.service';
import { TruncatePipe } from './pipes/truncate.pipe';
import { Authentication } from './services/authentication';
>>>>>>> b1f39c24c8a4dc30783af47f567e17bd3942d04b

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ArticleDetailComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routes
  ],
  providers: [ArticlesServiceService, UsersService,  AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
