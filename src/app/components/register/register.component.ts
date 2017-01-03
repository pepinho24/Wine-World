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
  user: User;
  constructor(private users: UsersService, private router: Router, private auth: AuthenticationService) {
  }

  submitForm(value: User, isValid: boolean) {
    if (isValid) {
      this.users.create(value)
        .subscribe(
        (token: any) => {
          alert('Registered successfully!');
          this.router.navigate(['/login']);
        }
        );
    }
  }

  ngOnInit() {
    this.user = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };

    this.auth.logout();
  }

}
