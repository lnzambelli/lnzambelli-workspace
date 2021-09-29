import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginServiceService } from 'libraries/login-library/src/lib/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private loginServices: LoginServiceService) { }

  async canActivate(): Promise<boolean> {
    if (!(await this.loginServices.isLoggedIn())) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
