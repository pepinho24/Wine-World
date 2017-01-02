import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers } from '@angular/http';
import { LoggedUser } from '../core/LoggedUser';

@Injectable()
export class AuthenticationService {

token: string;

  constructor(private http: Http) {
    this.token = localStorage.getItem('token');
  }

  login(username: String, password: String) {
    /*
     * If we had a login api, we would have done something like this
*/
    return this.http.put('http://localhost:3000/api/auth', JSON.stringify({
        username: username,
        password: password
      }), {
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .map((res: any) => {
        let user = res.json().result;
        this.token = user.token;
        localStorage.setItem('token', this.token);
        localStorage.setItem('currentUser', JSON.stringify(user));
      });

    // if (username === 'test' && password === 'test') {
    //   this.token = 'token';
    //   localStorage.setItem('token', this.token);
    //   localStorage.setItem('username', username.toString());

    //   return Observable.of('token');
    // }

    // return Observable.throw('authentication failure');
  }

  logout() {
    /*
     * If we had a login api, we would have done something like this

    return this.http.get(this.config.serverUrl + '/auth/logout', {
      headers: new Headers({
        'x-security-token': this.token
      })
    })
    .map((res : any) => {
      this.token = undefined;
      localStorage.removeItem('token');
    });
     */

    this.token = undefined;
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');

    return Observable.of(true);
  }

}
