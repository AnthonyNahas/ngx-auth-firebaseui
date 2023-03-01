import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {Angulartics2Module} from 'angulartics2';
import {AngularFireModule} from '@angular/fire/compat';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {FormsModule} from '@angular/forms';
import {MarkdownModule} from 'ngx-markdown';
import {FlipComponent, FlipSection} from './flip/flip.component';
import {MatButtonModule} from '@angular/material/button';
import {MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NgxAuthFirebaseUIModule} from 'projects/ngx-auth-firebaseui/src/public-api';
import {environment} from '../environments/environment';


export const firebaseKey = environment.config;
// export const firebaseKey = {
//   apiKey: 'AIzaSyASG7KxDO2z5AH9r0jlUmwiw68Ap8kG20c',
//   authDomain: 'ngx-auth-firebaseui.firebaseapp.com',
//   databaseURL: 'https://ngx-auth-firebaseui.firebaseio.com',
//   projectId: 'ngx-auth-firebaseui',
//   storageBucket: 'ngx-auth-firebaseui.appspot.com',
//   messagingSenderId: '520699629648'
// };

export function firebaseAppNameFactory() {
  return `you_app_name`;
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    FlipSection,
    FlipComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    Angulartics2Module.forRoot(),
    AngularFireModule.initializeApp(firebaseKey),
    NgxAuthFirebaseUIModule.forRoot(firebaseKey, firebaseAppNameFactory,
      {
        enableFirestoreSync: true,
        passwordMinLength: 8,
        passwordMaxLength: 16,
        toastMessageOnAuthSuccess: true,
        toastMessageOnAuthError: true,
        authGuardFallbackURL: 'examples/logged-out',
        authGuardLoggedInURL: 'examples/logged-in',
        // enableEmailVerification: false // If you want to disable email verification
      }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    MarkdownModule.forRoot({loader: HttpClient}),
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
