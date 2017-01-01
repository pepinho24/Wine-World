import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Authentication } from '../../services/authentication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(public auth: Authentication, fb: FormBuilder, public router: Router) {
    // Here we are using the FormBuilder to build out our form.
    this.loginForm = fb.group({
      'username': '',
      'password': '',
      'gender': 'Female',
      'hiking': false,
      'running': false,
      'swimming': false
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
