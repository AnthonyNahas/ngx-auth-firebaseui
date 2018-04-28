import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ExampleComponent} from './example.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ExampleComponent}
  ])],
  exports: [RouterModule]
})
export class ExampleRoutingModule {
}
