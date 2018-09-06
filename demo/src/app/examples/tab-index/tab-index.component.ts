import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-tab-index',
  templateUrl: './tab-index.component.html',
  styleUrls: ['./tab-index.component.scss']
})
export class TabIndexComponent {

  firstTabHtml = `<ngx-auth-firebaseui [tabindex]="0"></ngx-auth-firebaseui>`;
  secondTabHtml = `<ngx-auth-firebaseui [tabindex]="1"></ngx-auth-firebaseui>`;

  constructor(public snackBar: MatSnackBar) {
  }

  showCopyMessage(content: string) {
    this.snackBar.open(`${content} copied`, 'OK', {
      duration: 3000
    });
  }
}
