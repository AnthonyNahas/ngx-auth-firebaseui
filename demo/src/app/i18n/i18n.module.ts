import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {I18nComponent} from './i18n.component';
import {AppSharedModule} from '../shared';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {I18nRoutingModule} from './i18n-routing.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {createTranslateLoader} from '../app.module';
import {HttpClient} from '@angular/common/http';
import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  declarations: [I18nComponent],
  imports: [
    CommonModule,
    I18nRoutingModule,
    MarkdownModule.forChild(),
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
