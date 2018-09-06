import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ExamplesComponent} from './examples.component';
import {ProvidersComponent} from './providers/providers.component';
import {GuestComponent} from './guest/guest.component';
import {AppearanceComponent} from './appearance/appearance.component';
import {TosComponent} from './tos/tos.component';
import {TabIndexComponent} from './tab-index/tab-index.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ExamplesComponent},
    {path: 'providers', component: ProvidersComponent},
    {path: 'guest', component: GuestComponent},
    {path: 'appearance', component: AppearanceComponent},
    {path: 'tos', component: TosComponent},
    {path: 'tabIndex', component: TabIndexComponent},
  ])],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {
}
