import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {AuthProvider} from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {

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
  }

  ngOnInit() {
  }

  showCopyMessage(content: string) {
    this.snackBar.open(`${content} copied`, 'OK', {
      duration: 3000
    });
  }
}
