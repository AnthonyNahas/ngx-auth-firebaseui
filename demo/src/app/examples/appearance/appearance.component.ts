import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-appearance',
  templateUrl: './appearance.component.html',
  styleUrls: ['./appearance.component.scss']
})
export class AppearanceComponent {

  standardHtml = `<ngx-auth-firebaseui appearance="standard"></ngx-auth-firebaseui>`;
  fillHtml = `<ngx-auth-firebaseui appearance="fill"></ngx-auth-firebaseui>`;
  outlineHtml = `<ngx-auth-firebaseui appearance="outline"></ngx-auth-firebaseui>`;
  legacyHtml = `<ngx-auth-firebaseui appearance="legacy"></ngx-auth-firebaseui>`;

  constructor(public snackBar: MatSnackBar) {
  }

  showCopyMessage(content: string) {
    this.snackBar.open(`${content} copied`, 'OK', {
      duration: 3000
    });
  }

}
