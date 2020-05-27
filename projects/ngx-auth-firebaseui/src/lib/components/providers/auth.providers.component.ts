import {Component, Input, Output} from '@angular/core';
import {AuthProcessService, AuthProvider} from '../../services/auth-process.service';
import {NgxAuthFirebaseuiAnimations} from '../../animations';
import {LegalityDialogComponent} from '..';
import {LegalityDialogParams, LegalityDialogResult} from '../../interfaces';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

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
  styleUrls: ['auth.providers.component.scss'],
  animations: NgxAuthFirebaseuiAnimations
})
export class AuthProvidersComponent {

  @Input() theme: Theme; // theme: string = Theme.DEFAULT;
  @Input() layout: string = Layout.ROW;
  @Input() providers: AuthProvider[] | AuthProvider = AuthProvider.ALL; //  google, facebook, twitter, github, microsoft, yahoo

  @Output() onSuccess: any;
  @Output() onError: any;

  @Input() tosUrl: string;
  @Input() privacyPolicyUrl: string;
  dialogRef: MatDialogRef<LegalityDialogComponent>;

  themes = Theme;
  authProvider = AuthProvider;

  constructor(public authProcess: AuthProcessService, public dialog: MatDialog) {
    this.onSuccess = authProcess.onSuccessEmitter;
    this.onError = authProcess.onErrorEmitter;
  }

  processLegalSignUP(authProvider?: AuthProvider) {
    if (this.tosUrl || this.privacyPolicyUrl) {
      const params: LegalityDialogParams = {
        tosUrl: this.tosUrl,
        privacyPolicyUrl: this.privacyPolicyUrl,
        authProvider
      };

      this.dialogRef = this.dialog.open(LegalityDialogComponent, {data: params});
      this.dialogRef.afterClosed().subscribe((result: LegalityDialogResult) => {
        if (result && result.checked) {
          // this._afterSignUpMiddleware(result.authProvider).then(() => this.signUpFormGroup.reset());
          this.authProcess.signInWith(authProvider);
        }
        this.dialogRef = null;
      });
    } else {
      // this._afterSignUpMiddleware(authProvider).then(() => this.signUpFormGroup.reset());
      this.authProcess.signInWith(authProvider);
    }
  }

}
