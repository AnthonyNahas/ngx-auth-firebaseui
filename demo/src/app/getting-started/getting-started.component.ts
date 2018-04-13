import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GettingStartedComponent implements OnInit {


  @Input()
  index = 0;

  totalSteps = 2;

  isLaunched = false;
  fillerContent = Array(15);
  fixed = false;
  coverHeader = false;
  showHeader = false;
  showFooter = false;
  modeIndex = 0;
  hasBackdrop: boolean;

  get mode() {
    return ['side', 'over', 'push'][this.modeIndex];
  }

  get fixedTop() {
    return this.fixed && this.showHeader && !this.coverHeader ? 64 : 0;
  }

  get fixedBottom() {
    return this.fixed && this.showFooter && !this.coverHeader ? 64 : 0;
  }

  ngVersion = `    _                      _                 ____ _     ___
                 / \\   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
                / △ \\ | '_ \\ / _\` | | | | |/ _\` | '__|   | |   | |    | |
               / ___ \\| | | | (_| | |_| | | (_| | |      | |___| |___ | |
              /_/   \\_\\_| |_|\\__, |\\__,_|_|\\__,_|_|       \\____|_____|___|
                             |___/

              Angular CLI: 1.7.3
              Node: 8.11.1
              OS: darwin x64
              Angular:`;

  importBrowserAnimationsModule = `import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

                                    @NgModule({
                                      ...
                                      imports: [BrowserAnimationsModule],
                                      ...
                                    })
                                    export class YourAppModule { }`;

  importNoopAnimationsModule = `import {NoopAnimationsModule} from '@angular/platform-browser/animations';

                                    @NgModule({
                                      ...
                                      imports: [NoopAnimationsModule],
                                      ...
                                    })
                                    export class YourAppModule { }`;

  importMaterialThemeSCSS = `@import "~@angular/material/prebuilt-themes/indigo-pink.css";`;

  customMaterialTheme =
    `@import '../node_modules/@angular/material/theming';
     // Plus imports for other components in your app
     // Include the common styles for Angular Material. We include this here so that you only
     // have to load a single css file for Angular Material in your app.
     // Be sure that you only ever include this mixin once!
     @include mat-core()
     // Define the palettes for your theme using the Material Design palettes available in palette.scss
     // (imported above). For each palette, you can optionally specify a default, lighter, and darker
     // hue.
     $candy-app-primary: mat-palette($mat-indigo);
     $candy-app-accent:  mat-palette($mat-pink, A200, A100, A400)
     // The warn palette is optional (defaults to red).
     $candy-app-warn:    mat-palette($mat-red)
     // Create the theme object (a Sass map containing all of the palettes).
     $candy-app-theme: mat-light-theme($candy-app-primary, $candy-app-accent, $candy-app-warn)
     // Include theme styles for core and each component used in your app.
     // Alternatively, you can import and @include the theme mixins for each component
     // that you are using.
     @include angular-material-theme($candy-app-theme);
     `;

  stylesBeforeImportMDI = `"styles": [
        "styles.css"
      ],`;

  stylesAfterImportMDI = `"styles": [
        "styles.css",
        "../node_modules/material-design-icons/iconfont/material-icons.css"
      ],`;

  materialIconsLink = `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`;

  systemJSModuleImport = `map: {
  'ngx-auth-firebaseui': 'node_modules/ngx-auth-firebaseui/bundles/ngx-auth-firebaseui.umd.js',
  }`;

  importNgxMaterialPagesModule = `import { NgxMaterialPagesModule } from 'ngx-auth-firebaseui';`;

  importNgxMaterialPagesModuleInAppModule = `import { NgxMaterialPagesModule } from 'ngx-auth-firebaseui';
                                              import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

                                              @NgModule({
                                                declarations: [AppComponent, ...],
                                                imports: [NgxMaterialPagesModule.forRoot(),
                                                BrowserAnimationsModule,
                                                 ...],
                                                bootstrap: [AppComponent]
                                              })
                                              export class AppModule {
                                              }`;

  importNgxMaterialPagesModuleInOtherModule = `import { NgxMaterialPagesModule } from 'ngx-auth-firebaseui';

                                                @NgModule({
                                                  declarations: [OtherComponent, ...],
                                                  imports: [NgxMaterialPagesModule, ...],
                                                })
                                                export class OtherModule {
                                                }`;


  constructor(private titleService: Title,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.titleService.setTitle('Getting Started | ngx-auth-firebaseui');
  }

  showCopyMessage(content: string) {
    this.snackBar.open(`${content} copied`, 'OK', {
      duration: 3000
    });
  }

  next() {
    console.log('index before', this.index);
    this.index = this.index === this.totalSteps - 1 ? this.totalSteps - 1 : ++this.index;
    console.log('index after', this.index);
  }

}
