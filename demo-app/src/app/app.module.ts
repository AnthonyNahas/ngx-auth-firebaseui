import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {YourFirebaseAppConfig} from '../firebase_app_config';
import {NgxAuthFirebaseUIModule} from '../../../src';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAuthFirebaseUIModule.forRoot(YourFirebaseAppConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
