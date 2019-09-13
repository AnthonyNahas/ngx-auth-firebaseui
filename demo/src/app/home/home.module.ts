import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {AppSharedModule} from '../shared';
import {AngularFireAuthModule} from '@angular/fire/auth';

@NgModule({
  imports: [
    CommonModule,
    AppSharedModule,
    AngularFireAuthModule,
    HomeRoutingModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
