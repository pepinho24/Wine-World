import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Observable, Observer } from 'rxjs/Rx';

import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { routes } from './routes';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { WineListSmallComponent } from './components/wine-list-small/wine-list-small.component';
import { WineListComponent } from './components/wine-list/wine-list.component';
import { WineDetailComponent } from './components/wine-detail/wine-detail.component';

import { UsersService } from './services/users.service';
import { AuthenticationService } from './services/authentication.service';
import { WineService } from './services/wine.service';

import { ArticlesServiceService } from './services/articles.service';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ArticleDetailsSmallComponent } from './components/article-details-small/article-details-small.component';
import { ArticleCreateComponent } from './components/article-create/article-create.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routes
  ],
  declarations: [
    AppComponent,
    ArticlesListComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ArticleDetailComponent,
    TruncatePipe,
    FooterComponent,
    WineListSmallComponent,
    WineListComponent,
    WineDetailComponent,
    ArticleDetailsSmallComponent,
    ArticleCreateComponent
  ],
  providers: [ArticlesServiceService, UsersService,  AuthenticationService, WineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
