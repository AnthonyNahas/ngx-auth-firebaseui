import { Component, Input, Output } from '@angular/core';
import { AuthProcessService, AuthProvider } from '../../services/auth-process.service';

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

  @Input() theme: Theme; // theme: string = Theme.DEFAULT;
  @Input() layout: string = Layout.ROW;
  @Input() providers: AuthProvider[] | AuthProvider = AuthProvider.ALL; //  google, facebook, twitter, github, microsoft, yahoo

  @Output() onSuccess: any;
  @Output() onError: any;

  themes = Theme;
  authProvider = AuthProvider;

  constructor(public authProcess: AuthProcessService) {
    this.onSuccess = authProcess.onSuccessEmitter;
    this.onError = authProcess.onErrorEmitter;
  }

}
