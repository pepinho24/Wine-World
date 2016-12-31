import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import 'rxjs/Rx';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { routes } from './routes';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticlesServiceService } from './services/articles-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [ ArticlesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
