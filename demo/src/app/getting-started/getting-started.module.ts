import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GettingStartedComponent} from './getting-started.component';
import {GettingStartedRoutingModule} from './getting-started-routing.module';
import {MatCheckboxModule, MatIconModule, MatInputModule, MatSidenavModule, MatStepperModule, MatTabsModule} from '@angular/material';
import {AppSharedModule} from '../shared';
import {DisqusModule} from 'ngx-disqus';
import {NgxMaterialPagesComponent} from './ngx-material-pages/ngx-material-pages.component';
import {NgxMaterialPageOutlookComponent} from './ngx-material-pages/ngx-material-page-outlook/ngx-material-page-outlook.component';
import {NgxMaterialPageContentComponent} from './ngx-material-pages/ngx-material-page-content/ngx-material-page-content.component';
import {NgxMaterialPageLoaderComponent} from './ngx-material-pages/ngx-material-page-loader/ngx-material-page-loader.component';

@NgModule({
  imports: [
    CommonModule,
    GettingStartedRoutingModule,
    DisqusModule.forRoot('ngx-auth-firebaseui'),
    AppSharedModule,
    MatSidenavModule,
    MatStepperModule,
    MatCheckboxModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule
  ],
  declarations:
    [
      GettingStartedComponent,
      NgxMaterialPagesComponent,
      NgxMaterialPageOutlookComponent,
      NgxMaterialPageContentComponent,
      NgxMaterialPageLoaderComponent,
    ],
})
export class GettingStartedModule {
}
