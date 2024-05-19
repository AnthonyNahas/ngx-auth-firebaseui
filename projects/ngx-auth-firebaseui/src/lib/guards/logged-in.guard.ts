import {Inject, Injectable} from '@angular/core';
import {user} from '@angular/fire/auth';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {NgxAuthFirebaseUIConfig} from '../interfaces';
import {AuthProcessService} from '../services/auth-process.service';
import {NgxAuthFirebaseUIConfigToken} from '../tokens';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard  {
  constructor(
    @Inject(NgxAuthFirebaseUIConfigToken)
    private config: NgxAuthFirebaseUIConfig,
    private router: Router,
    private authProcess: AuthProcessService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return user(this.authProcess.afa).pipe(
      map(user => {
        if (user) {
          if (this.config.guardProtectedRoutesUntilEmailIsVerified && !user.emailVerified && !user.isAnonymous) {
            if (this.config.authGuardFallbackURL) {
              this.router.navigate([`${this.config.authGuardFallbackURL}`], {queryParams: {redirectUrl: state.url}});
            }
            return false;
          } else {
            return true;
          }
        } else {
          if (this.config.authGuardFallbackURL) {
            this.router.navigate([`/${this.config.authGuardFallbackURL}`], {queryParams: {redirectUrl: state.url}});
          }
          return false;
        }
      })
    );
  }
}
