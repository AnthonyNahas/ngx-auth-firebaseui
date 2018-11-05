import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  example = `<ngx-auth-firebaseui
  messageOnAuthSuccess="Here we go! The authentication was successful! "
  messageOnAuthError="Oop! Something went wrong! Please retry again!">
</ngx-auth-firebaseui>`;

  constructor(public snackBar: MatSnackBar) {
  }

  showCopyMessage(content: string) {
    this.snackBar.open(`${content} copied`, 'OK', {
      duration: 3000
    });
  }

}
