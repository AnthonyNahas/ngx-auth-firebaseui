import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

export interface Language {
  id: string;
  title: string;
  flag: string;
}

@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.scss']
})
export class I18nComponent implements OnInit {

  languages: Language[];
  selectedLanguage: Language;

  constructor(private _translateService: TranslateService) {
    this._translateService.addLangs(['en', 'de', 'fr']);
    this._translateService.use('en');
  }

  ngOnInit() {

    this.languages = [
      {
        id: 'en',
        title: 'English',
        flag: 'us'
      },
      {
        id: 'de',
        title: 'German',
        flag: 'de'
      },
      {
        id: 'fr',
        title: 'French',
        flag: 'fr'
      },
      {
        id: 'es',
        title: 'Española',
        flag: 'es'
      }
    ];

    // Set the selected language from default languages
    const selectedLanguage: Language | undefined = this.languages.find((element: any) => {
      console.log('this._translateService.currentLang', this._translateService.currentLang);
      console.log('this._translateService.getLangs', this._translateService.getLangs());
      console.log('element.id === this._translateService.currentLang', element.id === this._translateService.currentLang);
      return element.id === this._translateService.currentLang;
    });

    if (!selectedLanguage) {
      return;
    }

    this.selectedLanguage = selectedLanguage;
  }

  /**
   * Set the language
   *
   * @param lang
   */
  setLanguage(lang: Language): void {
    // Set the selected language for the toolbar
    this.selectedLanguage = lang;

    // Use the selected language for translations
    this._translateService.use(lang.id);
  }

}
