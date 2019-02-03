import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoggedInGuard} from 'ngx-auth-firebaseui';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'getting-started',
    loadChildren: 'app/getting-started/getting-started.module#GettingStartedModule'
  },
  {
    path: 'features',
    loadChildren: 'app/features/features.module#FeaturesModule'
  },
  {
    path: 'examples',
    loadChildren: 'app/examples/examples.module#ExamplesModule'
  },
  {
    path: 'legal',
    loadChildren: 'app/legal/legal.module#LegalModule'
  },
  {
    path: 'providers',
    loadChildren: 'app/faq/faq.module#FaqModule'
  },
  {
    path: 'secured',
    loadChildren: 'app/faq/faq.module#FaqModule',
    canActivate: [LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
