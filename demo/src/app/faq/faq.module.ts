import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FaqComponent} from './faq.component';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {FaqRoutingModule} from './faq-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FaqRoutingModule,
    NgxAuthFirebaseUIModule
  ],
  declarations: [FaqComponent]
})
export class FaqModule {
}
