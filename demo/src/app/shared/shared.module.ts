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
  MatTabsModule, MatTooltipModule
} from '@angular/material';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {BadgesComponent} from './badges/badges.component';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {HighlightModule} from 'ngx-highlightjs';
import {DisqusModule} from 'ngx-disqus';
import {NgxMaterialPagesModule} from 'ngx-material-pages';

@NgModule({
  imports: [
    RouterModule,
    NgbCollapseModule.forRoot(),
    HighlightModule.forRoot(),
    DisqusModule.forRoot('ngx-auth-firebaseui'),
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: 'AIzaSyASG7KxDO2z5AH9r0jlUmwiw68Ap8kG20c',
      authDomain: 'ngx-auth-firebaseui.firebaseapp.com',
      databaseURL: 'https://ngx-auth-firebaseui.firebaseio.com',
      projectId: 'ngx-auth-firebaseui',
      storageBucket: 'ngx-auth-firebaseui.appspot.com',
      messagingSenderId: '520699629648'
    }),
    NgxMaterialPagesModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentWrapperComponent,
    HighlightModule,
    DisqusModule,
    NgxAuthFirebaseUIModule,
    NgxMaterialPagesModule,
    BadgesComponent,
    FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
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
