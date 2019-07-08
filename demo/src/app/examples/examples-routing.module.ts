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
import {PasswordStrengthComponent} from './password-strength/password-strength.component';
import {GuardsExampleComponent} from './guards-example/guards-example.component';
import {LoggedInGuard} from 'ngx-auth-firebaseui';
import {LoggedInComponent} from './guards-example/logged-in/logged-in.component';
import {LoggedOutComponent} from './guards-example/logged-out/logged-out.component';

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
    {path: 'password-strength', component: PasswordStrengthComponent},
    {path: 'logged-in', component: LoggedInComponent},
    {path: 'logged-out', component: LoggedOutComponent},
    {path: 'guards', component: GuardsExampleComponent, canActivate : [LoggedInGuard]},
  ])],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {
}
