import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent {

  firstTabHtml = `<ngx-auth-firebaseui [tabindex]="1" [guestEnabled]="true"></ngx-auth-firebaseui>`;
  secondTabHtml = `<ngx-auth-firebaseui [tabindex]="1" [guestEnabled]="false"></ngx-auth-firebaseui>`;


  constructor(public snackBar: MatSnackBar) {
  }

  showCopyMessage(content: string) {
    this.snackBar.open(`${content} copied`, 'OK', {
      duration: 3000
    });
  }
}
