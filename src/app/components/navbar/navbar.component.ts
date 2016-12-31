import { Component, OnInit } from '@angular/core';
import { isLoggedin } from '../../core/is-loggedin';
import { Authentication } from '../../core/authentication';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string;
  isLoggedIn: boolean;
  constructor(public auth: Authentication, public router: Router) {}

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
