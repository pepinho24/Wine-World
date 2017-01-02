import { Component, OnInit, DoCheck } from '@angular/core';
import { UsersService } from './services/users.service';
import { LoggedUser } from './core/LoggedUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, DoCheck {
  title = 'Wine World';
  currentUser: LoggedUser;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.currentUser = this.usersService.loggedUser();
    console.log(this.currentUser);
  }

  ngDoCheck() {
    this.currentUser = this.usersService.loggedUser();
  }
}
