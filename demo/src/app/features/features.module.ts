import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeaturesComponent} from './features.component';
import {FeaturesRoutingModule} from './features-routing.module';
import {AppSharedModule} from '../shared';

@NgModule({
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    AppSharedModule
  ],
  declarations: [FeaturesComponent]
})
export class FeaturesModule {
}
