import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { User } from '../../core/User';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  complexForm: FormGroup;
  model: User;
  constructor(fb: FormBuilder, private users: UsersService, private router: Router, private auth: AuthenticationService) {
    this.complexForm = fb.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      'username': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'confirmPassword': [null, Validators.compose([Validators.required, Validators.minLength(5)])]// ,
      // 'hiking': false,
      // 'running': false,
      // 'swimming': false
    });
  }

  submitForm(value: User) {
    // check if password and confirmPassword match
    this.users.create(value)
      .subscribe(
      (token: any) => {
        alert('Registered successfully!');
        this.router.navigate(['/login']);
      }
      );
  }

  ngOnInit() {
    // reset login status
    this.auth.logout();
  }

}
