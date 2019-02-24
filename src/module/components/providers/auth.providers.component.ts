import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {AuthProcessService, AuthProvider} from '../../services/auth-process.service';
import {firebase} from '@firebase/app';

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

export let recaptchaVerifier: any;

@Component({
  selector: 'ngx-auth-firebaseui-providers',
  templateUrl: 'auth.providers.component.html',
  styleUrls: ['auth.providers.component.scss']
})
export class AuthProvidersComponent implements OnInit {

  @Input()
  theme: string;
  // theme: string = Theme.DEFAULT;

  @Input()
  layout: string = Layout.ROW;

  @Input()
  providers: string[] | string = AuthProvider.ALL; //  google, facebook, twitter, github

  themes = Theme;
  authProvider = AuthProvider;
  confirmationResult: any;
  verificationCode: string;

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

  ngOnInit(): void {
    // TODO(19.02.19) only for client side
    this.renderRecaptcher();
  }

  renderRecaptcher() {
    // TODO(19.02.19) only for client side
    recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
  }

  sendLoginCode() {
    const appVerifier = recaptchaVerifier;

    const num = '+4915120555552';

    firebase.auth().signInWithPhoneNumber(num, appVerifier)
      .then(result => {
        this.confirmationResult = result;
      })
      .catch(error => console.error(error));
  }

  verifyLoginCode() {
    this.confirmationResult
      .confirm(this.verificationCode)
      .then((result: any) => {
        console.log('result -> ', result);
        // this.user = result.user;

      })
      .catch((error: any) => console.log(error, 'Incorrect code entered?'));
  }


}
