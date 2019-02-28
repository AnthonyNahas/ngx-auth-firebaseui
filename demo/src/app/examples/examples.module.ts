import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExamplesComponent} from './examples.component';
import {ExamplesRoutingModule} from './examples-routing.module';
import {AppSharedModule} from '../shared';
import {ClipboardModule} from 'ngx-clipboard';
import {ProvidersComponent} from './providers/providers.component';
import {GuestComponent} from './guest/guest.component';
import {TosComponent} from './tos/tos.component';
import {AppearanceComponent} from './appearance/appearance.component';
import {TabIndexComponent} from './tab-index/tab-index.component';
import {MessagesComponent} from './messages/messages.component';
import { GoBackURLComponent } from './go-back-url/go-back-url.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetPasswordComponent } from './reset-psasword/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    AppSharedModule,
    ClipboardModule
  ],
  declarations:
    [
      ExamplesComponent,
      ProvidersComponent,
      GuestComponent,
      TosComponent,
      AppearanceComponent,
      TabIndexComponent,
      MessagesComponent,
      GoBackURLComponent,
      RegistrationComponent,
      ResetPasswordComponent
    ]
})
export class ExamplesModule {
}
