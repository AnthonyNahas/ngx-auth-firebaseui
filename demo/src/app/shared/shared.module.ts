import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContentWrapperComponent} from './content-wrapper/content-wrapper.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatTabsModule
} from '@angular/material';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {BadgesComponent} from './badges/badges.component';
import {NgxAuthFirebaseUIModule} from '../../../../dist';

@NgModule({
  imports: [
    RouterModule,
    NgbCollapseModule.forRoot(),
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: 'AIzaSyASG7KxDO2z5AH9r0jlUmwiw68Ap8kG20c',
      authDomain: 'ngx-auth-firebaseui.firebaseapp.com',
      databaseURL: 'https://ngx-auth-firebaseui.firebaseio.com',
      projectId: 'ngx-auth-firebaseui',
      storageBucket: 'ngx-auth-firebaseui.appspot.com',
      messagingSenderId: '520699629648'
    }),
    FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentWrapperComponent,
    NgxAuthFirebaseUIModule,
    BadgesComponent,
    FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentWrapperComponent,
    BadgesComponent
  ],
  providers: [],
})
export class AppSharedModule {
}
