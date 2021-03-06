// https://angular.io/docs/ts/latest/guide/router.html
import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OperatorGuardService implements CanActivate {
  constructor(
    private _router: Router,
    private _snackbar: MatSnackBar,
    private _authService: AuthService
  ) {}

  private redirectToLogin(url: string) {
    this._router.navigate(['/login'], {
      queryParams: {
        returnUrl: url
      }
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if not authenticated, redirect to login
    if (!this._authService.isAuthenticated(false)) {
      this.redirectToLogin(state.url);
      return false;
    }
    // if authenticated but not verified, redirect to login
    if (!this._authService.currentUserValue.emailConfirmed) {
      this._router.navigate(['/login']);
      this._snackbar.open('User not verified', 'OK', { duration: 3000 });
      return false;
    }
    // else activate only if admin/editor
    const user = this._authService.currentUserValue;
    const ok =
      user &&
      user.roles.some(r => r === 'admin' || r === 'editor' || r === 'operator');
    if (!ok) {
      this._snackbar.open('Unauthorized user', 'OK', { duration: 3000 });
    }
    return ok;
  }
}
