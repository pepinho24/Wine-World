import { Component, OnInit } from '@angular/core';

import { isLoggedin } from '../../services/is-loggedin';

import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string;
  isLoggedIn: boolean;
  constructor(public auth: AuthenticationService, public router: Router) {}

  onLogout() {
    this.auth.logout()
      .subscribe(
        () => this.router.navigate(['../Login']),
      );
  }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.isLoggedIn = isLoggedin();
  }

}
