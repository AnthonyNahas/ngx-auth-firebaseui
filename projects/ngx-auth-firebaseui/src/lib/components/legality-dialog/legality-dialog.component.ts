import {Component, Inject} from '@angular/core';
import {MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef} from '@angular/material/legacy-dialog';
import {LegalityDialogParams, LegalityDialogResult} from '../../interfaces';

@Component({
  selector: 'ngx-auth-firebaseui-legality-dialog',
  templateUrl: './legality-dialog.component.html',
  styleUrls: ['./legality-dialog.component.scss']
})
export class LegalityDialogComponent {

  checkTOS: boolean;
  checkPrivacyPolicy: boolean;

  constructor(public dialogRef: MatDialogRef<LegalityDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: LegalityDialogParams) {
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle, id-blacklist, id-match
  private _disableConfirmActionButton = false;

  get disableConfirmActionButton(): boolean {
    if (this.data.tosUrl && this.data.privacyPolicyUrl) {
      this._disableConfirmActionButton = !(this.checkTOS && this.checkPrivacyPolicy);
    } else if (this.data.tosUrl && !this.data.privacyPolicyUrl) {
      this._disableConfirmActionButton = !this.checkTOS;
    } else if (!this.data.tosUrl && this.data.privacyPolicyUrl) {
      this._disableConfirmActionButton = !this.checkPrivacyPolicy;
    }
    return this._disableConfirmActionButton;
  }

  closeDialog() {
    const result: LegalityDialogResult = {
      checked: !this.disableConfirmActionButton,
      authProvider: this.data.authProvider
    };
    this.dialogRef.close(result);
  }

}
