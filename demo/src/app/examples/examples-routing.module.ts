import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ExamplesComponent} from './examples.component';
import {ProvidersComponent} from './providers/providers.component';
import {GuestComponent} from './guest/guest.component';
import {AppearanceComponent} from './appearance/appearance.component';
import {TosComponent} from './tos/tos.component';
import {TabIndexComponent} from './tab-index/tab-index.component';
import {MessagesComponent} from './messages/messages.component';
import {GoBackURLComponent} from './go-back-url/go-back-url.component';
import {RegistrationComponent} from './registration/registration.component';
import {ResetPasswordComponent} from './reset-psasword/reset-password.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ExamplesComponent},
    {path: 'messages', component: MessagesComponent},
    {path: 'providers', component: ProvidersComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'reset-password', component: ResetPasswordComponent},
    {path: 'guest', component: GuestComponent},
    {path: 'appearance', component: AppearanceComponent},
    {path: 'tos', component: TosComponent},
    {path: 'tabIndex', component: TabIndexComponent},
    {path: 'gobackurl', component: GoBackURLComponent},
  ])],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {
}
