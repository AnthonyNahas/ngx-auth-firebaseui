import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ExampleBaseComponent} from '../../example.abstract';

@Component({
  selector: 'app-logged-in',
  templateUrl: 'logged-in.component.html',
  styleUrls: ['logged-in.component.scss']
})
export class LoggedInComponent extends ExampleBaseComponent {

  example = `
  import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';


  NgxAuthFirebaseUIModule.forRoot(firebaseKey, firebaseAppNameFactory,
      {
        authGuardFallbackURL: 'examples/logged-out',
        authGuardLoggedInURL: 'examples/logged-in',
      }),`;

  example2 = `
  import {LoggedInGuard} from 'ngx-auth-firebaseui';

  {path: 'guards', component: GuardsExampleComponent, canActivate : [LoggedInGuard]},`;

  constructor(public snackBar: MatSnackBar) {
    super(snackBar);
  }

  onStrengthChanged($event: number) {
    console.log('on strength changed: ', $event);
  }

}
