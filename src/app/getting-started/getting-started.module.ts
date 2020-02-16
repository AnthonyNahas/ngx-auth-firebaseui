import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GettingStartedComponent} from './getting-started.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ClipboardModule} from 'ngx-clipboard';
import {MatPagesModule} from '@angular-material-extensions/pages';
import {MatCardModule} from '@angular/material/card';
import {GettingStartedRoutingModule} from './getting-started-routing.module';
import {MarkdownModule} from 'ngx-markdown';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';

@NgModule({
  imports: [
    CommonModule,
    GettingStartedRoutingModule,
    MarkdownModule.forChild(),
    NgxAuthFirebaseUIModule,
    FlexLayoutModule,
    MatPagesModule,
    ClipboardModule,
    MatCardModule,
    MatSidenavModule,
    MatStepperModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  declarations:
    [
      GettingStartedComponent,
    ],
})
export class GettingStartedModule {
}
