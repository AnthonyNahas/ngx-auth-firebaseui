import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-go-back-url',
  templateUrl: './go-back-url.component.html',
  styleUrls: ['./go-back-url.component.scss']
})
export class GoBackURLComponent {

  example = `<ngx-auth-firebaseui goBackURL="/"></ngx-auth-firebaseui>`;

  constructor(public snackBar: MatSnackBar) {
  }

  showCopyMessage(content: string) {
    this.snackBar.open(`${content} copied`, 'OK', {
      duration: 3000
    });
  }

}
