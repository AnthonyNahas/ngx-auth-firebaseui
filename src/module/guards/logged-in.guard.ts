import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthProcessService, NgxAuthFirebaseUIConfig, NgxAuthFirebaseUIConfigToken } from '../ngx-auth-firebase-u-i.module';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(
    @Inject(NgxAuthFirebaseUIConfigToken)
    private config: NgxAuthFirebaseUIConfig,
    private router: Router,
    private authProcess: AuthProcessService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authProcess.afa.user.pipe(
      map(user => {
        if (user) {
          if (this.config.guardProtectedRoutesUntilEmailIsVerified && !user.emailVerified) {
            if (this.config.authGuardFallbackURL) {
              this.router.navigate([`${this.config.authGuardFallbackURL}`], { queryParams: { redirectUrl: state.url }});
            }
            return false;
          } else {
            return true;
          }
        } else {
          if (this.config.authGuardFallbackURL) {
            this.router.navigate([`/${this.config.authGuardFallbackURL}`], { queryParams: { redirectUrl: state.url }});
          }
          return false;
        }
      })
    );
  }
}
