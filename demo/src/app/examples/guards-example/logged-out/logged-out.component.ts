import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ExampleBaseComponent} from '../../example.abstract';

@Component({
  selector: 'app-logged-out',
  templateUrl: 'logged-out.component.html',
  styleUrls: ['logged-out.component.scss']
})
export class LoggedOutComponent extends ExampleBaseComponent {

  example = `<ngx-auth-firebaseui tabIndex="1"
                             [min]="8"
                             [max]="15"
                             [enableLengthRule]="true"
                             [enableLowerCaseLetterRule]="true"
                             [enableUpperCaseLetterRule]="true"
                             [enableDigitRule]="true"
                             [enableSpecialCharRule]="true"
                             (onStrengthChanged)="onStrengthChanged($event)">
        </ngx-auth-firebaseui>`;

  constructor(public snackBar: MatSnackBar) {
    super(snackBar);
  }

  onStrengthChanged($event: number) {
    console.log('on strength changed: ', $event);
  }

}
