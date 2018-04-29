import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthProvider} from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExampleComponent implements OnInit {

  providers = AuthProvider;


  allProvidersHTML = `<ngx-auth-firebaseui></ngx-auth-firebaseui>`;
  gftProvidersHTML = `<ngx-auth-firebaseui
            [providers]="[providers.Google, providers.Facebook, providers.Twitter]">
            </ngx-auth-firebaseui>`;

  ftProvidersHTML = `<ngx-auth-firebaseui
            [providers]="[ providers.Facebook, providers.Twitter]"></ngx-auth-firebaseui>`;

  ggProvidersHTML = `<ngx-auth-firebaseui
            [providers]="[ providers.Google, providers.Github]"></ngx-auth-firebaseui>`;

  constructor() {
  }

  ngOnInit() {
  }

}
