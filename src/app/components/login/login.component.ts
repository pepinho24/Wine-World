import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

<<<<<<< HEAD
=======
import { Authentication } from '../../services/authentication';
>>>>>>> b1f39c24c8a4dc30783af47f567e17bd3942d04b
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(public auth: AuthenticationService, fb: FormBuilder, public router: Router) {
    // Here we are using the FormBuilder to build out our form.
    this.loginForm = fb.group({
      'username': '',
      'password': ''
    });
  }

  ngOnInit() {
  }
  submitForm(value: any): void {
    this.auth.login(value.username, value.password)
      .subscribe(
      (token: any) => { this.router.navigate(['../Home']); }
      );
    console.log(value);
  }

}
