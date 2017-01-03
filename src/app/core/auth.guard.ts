import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UsersService } from '../services/users.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private usersService: UsersService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!!this.usersService.loggedUser()) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);

        return false;
    }
}