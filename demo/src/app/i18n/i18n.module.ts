import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {I18nComponent} from './i18n.component';
import {AppSharedModule} from '../shared';
import {MatButtonModule, MatCardModule, MatMenuModule} from '@angular/material';
import {I18nRoutingModule} from './i18n-routing.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {createTranslateLoader} from '../app.module';
import {HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [I18nComponent],
  imports: [
    CommonModule,
    I18nRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AppSharedModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule
  ]
})
export class I18nModule {
}
