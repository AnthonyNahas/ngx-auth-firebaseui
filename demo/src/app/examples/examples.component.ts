import {Component, ViewEncapsulation} from '@angular/core';
import {AuthProvider} from 'ngx-auth-firebaseui';
import {MatSnackBar} from '@angular/material';
import {ExampleBaseComponent} from './example.abstract';

@Component({
  selector: 'app-example',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExamplesComponent extends ExampleBaseComponent {

  providers = AuthProvider;

  importAuthProvider = `import {AuthProvider} from 'ngx-auth-firebaseui';

export class ExampleComponent implements OnInit {

  providers = AuthProvider;

  ngOnInit() {
    }


}`;

  allProvidersHTML = `<ngx-auth-firebaseui></ngx-auth-firebaseui>`;
  gftProvidersHTML = `<ngx-auth-firebaseui
            [providers]="[providers.Google, providers.Facebook, providers.Twitter]">
            </ngx-auth-firebaseui>`;

  ftProvidersHTML = `<ngx-auth-firebaseui
            [providers]="[ providers.Facebook, providers.Twitter]">
            </ngx-auth-firebaseui>`;

  ggProvidersHTML = `<ngx-auth-firebaseui
            [providers]="[ providers.Google, providers.Github]">
            </ngx-auth-firebaseui>`;

  gProviderHTML = `<ngx-auth-firebaseui
            [providers]="[ providers.Google]">
          </ngx-auth-firebaseui>`;

  fProviderHTML = `<ngx-auth-firebaseui
            [providers]="[ providers.Facebook]">
          </ngx-auth-firebaseui>`;

  tProviderHTML = `<ngx-auth-firebaseui
            [providers]="[ providers.Twitter]">
          </ngx-auth-firebaseui>`;

  gitProviderHTML = `<ngx-auth-firebaseui
            [providers]="[ providers.Github]">
          </ngx-auth-firebaseui>`;

  constructor(public snackBar: MatSnackBar) {
    super(snackBar);
  }

}
