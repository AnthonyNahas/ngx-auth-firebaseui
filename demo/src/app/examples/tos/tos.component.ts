import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-tos',
  templateUrl: './tos.component.html',
  styleUrls: ['./tos.component.scss']
})
export class TosComponent {

  firstExample = `<ngx-auth-firebaseui [tabIndex]="1" tosUrl="/legal/tos"></ngx-auth-firebaseui>`;
  secondExample = `<ngx-auth-firebaseui [tabIndex]="1" privacyPolicyUrl="/legal/privacy"></ngx-auth-firebaseui>`;
  thirdExample = `<ngx-auth-firebaseui [tabIndex]="1" tosUrl="/legal/tos" privacyPolicyUrl="/legal/privacy"></ngx-auth-firebaseui>`;

  constructor(public snackBar: MatSnackBar) {
  }

  showCopyMessage(content: string) {
    this.snackBar.open(`${content} copied`, 'OK', {
      duration: 3000
    });
  }

}
