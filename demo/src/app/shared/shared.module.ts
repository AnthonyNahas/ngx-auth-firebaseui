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
  MatTabsModule,
  MatTooltipModule, MatInputModule, MatRippleModule
} from '@angular/material';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {BadgesComponent} from './badges/badges.component';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {HighlightModule} from 'ngx-highlightjs';
import {NgxMaterialPagesModule} from 'ngx-material-pages';

@NgModule({
  imports: [
    RouterModule,
    NgbCollapseModule.forRoot(),
    HighlightModule,
    NgxAuthFirebaseUIModule,
    NgxMaterialPagesModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentWrapperComponent,
    HighlightModule,
    NgxAuthFirebaseUIModule,
    NgxMaterialPagesModule,
    BadgesComponent,
    FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatRippleModule
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
