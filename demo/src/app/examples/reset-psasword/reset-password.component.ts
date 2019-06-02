import {Component} from '@angular/core';
import {ExampleBaseComponent} from '../example.abstract';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-psasword',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent extends ExampleBaseComponent {

  firstTabHtml = `<ngx-auth-firebaseui  [resetPasswordEnabled]="true"></ngx-auth-firebaseui>`;
  secondTabHtml = `<ngx-auth-firebaseui  [resetPasswordEnabled]="false"></ngx-auth-firebaseui>`;

  constructor(public snackBar: MatSnackBar) {
    super(snackBar);
  }
}
