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

@NgModule({
  imports: [
    RouterModule,
    NgbCollapseModule.forRoot(),
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
    ContentWrapperComponent
  ],
  providers: [],
})
export class AppSharedModule {
}
