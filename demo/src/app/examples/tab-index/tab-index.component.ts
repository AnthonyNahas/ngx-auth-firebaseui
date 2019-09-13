import {Component} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {ExampleBaseComponent} from '../example.abstract';

@Component({
  selector: 'app-tab-index',
  templateUrl: './tab-index.component.html',
  styleUrls: ['./tab-index.component.scss']
})
export class TabIndexComponent extends ExampleBaseComponent {

  firstTabHtml = `<ngx-auth-firebaseui [tabindex]="0"></ngx-auth-firebaseui>`;
  secondTabHtml = `<ngx-auth-firebaseui [tabindex]="1"></ngx-auth-firebaseui>`;

  constructor(public snackBar: MatSnackBar) {
    super(snackBar);
  }
}
