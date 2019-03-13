import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ExampleBaseComponent} from '../example.abstract';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent extends ExampleBaseComponent{

  user;

  message: string;
  errorMessage: string;

  example = `<ngx-auth-firebaseui
             messageOnAuthSuccess="Here we go! The authentication was successful! "
             messageOnAuthError="Oop! Something went wrong! Please retry again!">
             </ngx-auth-firebaseui>`;

  example2 = `<ngx-auth-firebaseui
             (onSuccess)="saveUser($event)"
             (onError)="handleError($event)"
             [messageOnAuthSuccess]="message"
             [messageOnAuthError]="errorMessage">
             </ngx-auth-firebaseui>`;


  constructor(public snackBar: MatSnackBar) {
    super(snackBar);
  }

  saveUser($event) {
    this.user = $event;
    this.message = `${this.user.displayName} here we go!`;
    console.log('Auth success - ngx-auth-firebaseui-user = ', this.user, this.user.displayName);
  }

  handleError($event) {
    this.errorMessage = `Oops! ${$event}`;
  }
}
