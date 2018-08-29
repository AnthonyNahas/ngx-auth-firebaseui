import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrivatePolicyComponent} from './private-policy/private-policy.component';
import {LegalRoutingModule} from './legal-routing.module';
import {TosComponent} from './tos/tos.component';

@NgModule({
  imports: [
    CommonModule,
    LegalRoutingModule
  ],
  declarations: [TosComponent, PrivatePolicyComponent]
})
export class LegalModule {
}
