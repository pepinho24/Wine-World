import { Component, Input } from '@angular/core';

import { isLoggedin } from '../../services/is-loggedin';

import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { LoggedUser } from '../../core/LoggedUser';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() existingUser: LoggedUser;
  constructor(public auth: AuthenticationService, public router: Router) {}

  onLogout() {
    this.auth.logout()
      .subscribe(
        () => {
           alert('Logged out successfully');
          this.router.navigate(['/']);
        });
  }

}
