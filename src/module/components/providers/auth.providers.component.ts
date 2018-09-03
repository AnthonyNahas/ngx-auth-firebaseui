import {Component, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {AuthProcessService, AuthProvider} from '../../..';

export enum Theme {
  DEFAULT = 'default',
  CLASSIC = 'classic',
  STROKED = 'stroked',
  FAB = 'fab',
  MINI_FAB = 'mini-fab',
  RAISED = 'raised',
}

export enum Layout {
  ROW = 'row',
  COLUMN = 'column'
}

@Component({
  selector: 'ngx-auth-firebaseui-providers',
  templateUrl: 'auth.providers.component.html',
  styleUrls: ['auth.providers.component.scss']
})
export class AuthProvidersComponent {

  @Input()
  theme: string;
  // theme: string = Theme.DEFAULT;

  @Input()
  layout: string = Layout.ROW;

  @Input()
  providers: string[] | string = AuthProvider.ALL; //  google, facebook, twitter, github

  themes = Theme;
  authProvider = AuthProvider;

  constructor(public authProcess: AuthProcessService,
              private _iconRegistry: MatIconRegistry,
              private _sanitizer: DomSanitizer) {
    _iconRegistry
      .addSvgIcon('google',
        _sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/google.svg'))
      .addSvgIcon('google-colored',
        _sanitizer.bypassSecurityTrustResourceUrl('/assets/google.svg'))
      .addSvgIcon('facebook',
        _sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/facebook.svg'))
      .addSvgIcon('twitter',
        _sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/twitter.svg'))
      .addSvgIcon('github',
        _sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/github-circle.svg'))
      .addSvgIcon('phone',
        _sanitizer.bypassSecurityTrustResourceUrl('/assets/phone.svg'));
  }

}
