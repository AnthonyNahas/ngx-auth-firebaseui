import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {TosComponent} from './tos/tos.component';
import {PrivatePolicyComponent} from './private-policy/private-policy.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', redirectTo: 'tos'},
    {path: 'tos', component: TosComponent},
    {path: 'privacy', component: PrivatePolicyComponent}
  ])],
  exports: [RouterModule]
})
export class LegalRoutingModule {
}
