import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {FaqComponent} from './faq.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: FaqComponent}
  ])],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {
}
