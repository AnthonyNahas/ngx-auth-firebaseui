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
    loadChildren: () => import('app/getting-started/getting-started.module').then(m => m.GettingStartedModule)
  },
  {
    path: 'features',
    loadChildren: () => import('app/features/features.module').then(m => m.FeaturesModule)
  },
  {
    path: 'examples',
    loadChildren: () => import('app/examples/examples.module').then(m => m.ExamplesModule)
  },
  {
    path: 'i18n',
    loadChildren: () => import('app/i18n/i18n.module').then(m => m.I18nModule)
  },
  {
    path: 'legal',
    loadChildren: () => import('app/legal/legal.module').then(m => m.LegalModule)
  },
  {
    path: 'providers',
    loadChildren: () => import('app/faq/faq.module').then(m => m.FaqModule)
  },
  {
    path: 'secured',
    loadChildren: () => import('app/faq/faq.module').then(m => m.FaqModule),
    canActivate: [LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
