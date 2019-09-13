import {Component} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {ExampleBaseComponent} from '../example.abstract';

@Component({
  selector: 'app-go-back-url',
  templateUrl: './go-back-url.component.html',
  styleUrls: ['./go-back-url.component.scss']
})
export class GoBackURLComponent extends ExampleBaseComponent {

  example = `<ngx-auth-firebaseui tabIndex="1" goBackURL="/"></ngx-auth-firebaseui>`;

  constructor(public snackBar: MatSnackBar) {
    super(snackBar);
  }

}
