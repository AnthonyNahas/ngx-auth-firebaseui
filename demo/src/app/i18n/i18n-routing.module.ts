import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {I18nComponent} from './i18n.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: I18nComponent}
  ])],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
