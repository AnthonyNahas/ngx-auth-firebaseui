import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExampleComponent} from './example.component';
import {ExampleRoutingModule} from './example-routing.module';
import {AppSharedModule} from '../shared';
import {ClipboardModule} from 'ngx-clipboard';

@NgModule({
  imports: [
    CommonModule,
    ExampleRoutingModule,
    AppSharedModule,
    ClipboardModule
  ],
  declarations: [ExampleComponent]
})
export class ExampleModule {
}
