import {Component, Input} from '@angular/core';
import {AuthProcessService, AuthProvider} from '../../services/auth-process.service';

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
  layout: string = Layout.ROW;

  @Input()
  providers: string[] | string = AuthProvider.ALL; //  google, facebook, twitter, github

  authProvider = AuthProvider;

  constructor(public authProcess: AuthProcessService) {
  }

}
