import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

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
    loadChildren: 'app/example/example.module#ExampleModule'
  },
  {
    path: 'faq',
    loadChildren: 'app/faq/faq.module#FaqModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
