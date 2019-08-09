import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngx-auth-firebaseui-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.scss']
})
export class EmailConfirmationComponent {

  @Input()
  email: string;

  @Input()
  goBackURL: string;

  @Input()
  title: string;

  @Input()
  text: string;

}
