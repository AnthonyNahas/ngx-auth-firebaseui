import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppSharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from '../environments/environment';
import {ServiceWorkerModule} from '@angular/service-worker';
import {NgxMaterialPagesModule} from 'ngx-material-pages';
import {HttpClientModule} from '@angular/common/http';
import {ClipboardModule} from 'ngx-clipboard';
import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';
import {Angulartics2Module} from 'angulartics2';
import {AngularFireModule} from '@angular/fire';
import {HighlightModule} from 'ngx-highlightjs';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({appId: 'ngx-auth-firebaseui'}),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyASG7KxDO2z5AH9r0jlUmwiw68Ap8kG20c',
      authDomain: 'ngx-auth-firebaseui.firebaseapp.com',
      databaseURL: 'https://ngx-auth-firebaseui.firebaseio.com',
      projectId: 'ngx-auth-firebaseui',
      storageBucket: 'ngx-auth-firebaseui.appspot.com',
      messagingSenderId: '520699629648'
    }),
    NgxAuthFirebaseUIModule.forRoot({
        apiKey: 'AIzaSyASG7KxDO2z5AH9r0jlUmwiw68Ap8kG20c',
        authDomain: 'ngx-auth-firebaseui.firebaseapp.com',
        databaseURL: 'https://ngx-auth-firebaseui.firebaseio.com',
        projectId: 'ngx-auth-firebaseui',
        storageBucket: 'ngx-auth-firebaseui.appspot.com',
        messagingSenderId: '520699629648'
      }, null,
      {
        toastMessageOnAuthSuccess: false,
        toastMessageOnAuthError: false
      }),
    HighlightModule.forRoot(),
    NgxMaterialPagesModule.forRoot(),
    ClipboardModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppSharedModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
