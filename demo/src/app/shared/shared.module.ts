import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContentWrapperComponent} from './content-wrapper/content-wrapper.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {BadgesComponent} from './badges/badges.component';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {HighlightModule} from 'ngx-highlightjs';
import {MatPagesModule} from '@angular-material-extensions/pages';

@NgModule({
  imports: [
    RouterModule,
    NgbCollapseModule,
    HighlightModule,
    NgxAuthFirebaseUIModule,
    MatPagesModule,
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
    MatPagesModule,
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
