import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {YourFirebaseAppConfig} from '../firebase_app_config';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {BadgesComponent} from './shared/badges/badges.component';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatTabsModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    BadgesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxAuthFirebaseUIModule.forRoot(YourFirebaseAppConfig),
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
