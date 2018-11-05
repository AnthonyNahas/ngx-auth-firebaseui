import {Component, OnInit} from '@angular/core';

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

}
