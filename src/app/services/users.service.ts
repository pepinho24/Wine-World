import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { LoggedUser } from '../core/LoggedUser';
import { AuthenticationService } from './authentication.service';
import { User } from '../core/User';

@Injectable()
export class UsersService {

  constructor(
    private http: Http,
    private auth: AuthenticationService) { }

  create(user: User) {
    let headers = new Headers();
    headers.append('content-type', 'application/json');

    return this.http.post(
      'http://localhost:3000/api/users',
      JSON.stringify(user),
      { headers: headers })
      .map((response: Response) => {
        // register and login successful if there's a token in the response
        let registeredUser = response.json();
        if (registeredUser && registeredUser.token) {
          // store user details and token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(registeredUser));
        }
      });
  }

  getToken(): string {
    let storedUser = localStorage.getItem('currentUser');
    return storedUser ? JSON.parse(storedUser).token : null;
  }

  loggedUser(): LoggedUser {
    let storedUser = localStorage.getItem('currentUser');
    return storedUser ? JSON.parse(storedUser) : null;
  }
}
