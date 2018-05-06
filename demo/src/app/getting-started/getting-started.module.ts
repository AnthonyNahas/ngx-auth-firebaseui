import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GettingStartedComponent} from './getting-started.component';
import {GettingStartedRoutingModule} from './getting-started-routing.module';
import {
  MatCheckboxModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule, MatSnackBarModule,
  MatStepperModule, MatTooltipModule
} from '@angular/material';
import {AppSharedModule} from '../shared';
import {DisqusModule} from 'ngx-disqus';
import {NgxMaterialPagesModule} from 'ngx-material-pages';
import {HighlightModule} from 'ngx-highlightjs';
import {ClipboardModule} from 'ngx-clipboard';

@NgModule({
  imports: [
    CommonModule,
    GettingStartedRoutingModule,
    AppSharedModule,
    ClipboardModule,
    AppSharedModule,
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
