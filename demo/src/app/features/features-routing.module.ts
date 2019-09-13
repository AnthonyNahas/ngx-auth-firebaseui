import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {FeaturesComponent} from './features.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: FeaturesComponent}
  ])],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {
}
