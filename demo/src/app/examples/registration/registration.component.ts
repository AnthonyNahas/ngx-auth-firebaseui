import {Component} from '@angular/core';
import {ExampleBaseComponent} from '../example.abstract';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent extends ExampleBaseComponent {

  firstTabHtml = `<ngx-auth-firebaseui  [registrationEnabled]="true"></ngx-auth-firebaseui>`;
  secondTabHtml = `<ngx-auth-firebaseui  [registrationEnabled]="false"></ngx-auth-firebaseui>`;

  constructor(public snackBar: MatSnackBar) {
    super(snackBar);
  }

}
