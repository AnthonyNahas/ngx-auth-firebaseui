import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nComponent } from './i18n.component';
import {AppSharedModule} from '../shared';

@NgModule({
  declarations: [I18nComponent],
  imports: [
    CommonModule,
    AppSharedModule,
  ]
})
export class I18nModule { }
