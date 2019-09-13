import {Component} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {ExampleBaseComponent} from '../example.abstract';

@Component({
  selector: 'app-appearance',
  templateUrl: './appearance.component.html',
  styleUrls: ['./appearance.component.scss']
})
export class AppearanceComponent extends ExampleBaseComponent{

  standardHtml = `<ngx-auth-firebaseui appearance="standard"></ngx-auth-firebaseui>`;
  fillHtml = `<ngx-auth-firebaseui appearance="fill"></ngx-auth-firebaseui>`;
  outlineHtml = `<ngx-auth-firebaseui appearance="outline"></ngx-auth-firebaseui>`;
  legacyHtml = `<ngx-auth-firebaseui appearance="legacy"></ngx-auth-firebaseui>`;

  constructor(public snackBar: MatSnackBar) {
    super(snackBar);
  }

}
