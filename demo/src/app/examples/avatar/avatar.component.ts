import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ExampleBaseComponent} from '../example.abstract';
// import {LinkMenuItem} from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-example-avatar',
  templateUrl: 'avatar.component.html',
  styleUrls: ['avatar.component.scss']
})
export class AvatarComponent extends ExampleBaseComponent implements OnInit {

  links: any[];


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

  ngOnInit(): void {
    this.links = [
      {icon: 'home', text: 'Home', callback: this.printLog}
    ];
  }

  printLog() {
    console.log('this is a log :D');
  }

}
