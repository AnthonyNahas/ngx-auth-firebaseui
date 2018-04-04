import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-auth-firebaseui-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.scss']
})
export class EmailConfirmationComponent implements OnInit {

  @Input()
  email: string;

  constructor() {
  }

  ngOnInit() {
  }

}
