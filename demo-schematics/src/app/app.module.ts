import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAuthFirebaseUIModule.forRoot(PUT_YOUR_FIREBASE_API_KEY_HERE)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
