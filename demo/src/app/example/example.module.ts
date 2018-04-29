import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExampleComponent} from './example.component';
import {ExampleRoutingModule} from './example-routing.module';
import {AppSharedModule} from '../shared';

@NgModule({
  imports: [
    CommonModule,
    ExampleRoutingModule,
    AppSharedModule
  ],
  declarations: [ExampleComponent]
})
export class ExampleModule {
}
