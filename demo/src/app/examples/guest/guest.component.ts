import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ExampleBaseComponent} from '../example.abstract';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent extends ExampleBaseComponent{

  firstTabHtml = `<ngx-auth-firebaseui [tabindex]="1" [guestEnabled]="true"></ngx-auth-firebaseui>`;
  secondTabHtml = `<ngx-auth-firebaseui [tabindex]="1" [guestEnabled]="false"></ngx-auth-firebaseui>`;


  constructor(public snackBar: MatSnackBar) {
    super(snackBar);
  }
}
