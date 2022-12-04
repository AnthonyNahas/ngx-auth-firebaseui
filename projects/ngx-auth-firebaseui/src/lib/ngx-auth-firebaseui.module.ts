// @angular/*
import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
// @angular/fire
import {FIREBASE_APP_NAME, FIREBASE_OPTIONS} from '@angular/fire/compat';
import {FirebaseOptions} from '@firebase/app-types';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
// @angular/material
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import {MatLegacyChipsModule as MatChipsModule} from '@angular/material/legacy-chips';
import {MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacyMenuModule as MatMenuModule} from '@angular/material/legacy-menu';
import {MatLegacyProgressBarModule as MatProgressBarModule} from '@angular/material/legacy-progress-bar';
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from '@angular/material/legacy-progress-spinner';
import {MatLegacySnackBarModule as MatSnackBarModule} from '@angular/material/legacy-snack-bar';
import {MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs';
import {MatLegacyTooltipModule as MatTooltipModule} from '@angular/material/legacy-tooltip';

import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';


import {NgxAuthFirebaseuiLoginComponent} from './components/ngx-auth-firebaseui-login/ngx-auth-firebaseui-login.component';
import {NgxAuthFirebaseuiRegisterComponent} from './components/ngx-auth-firebaseui-register/ngx-auth-firebaseui-register.component';


import {DomSanitizer} from '@angular/platform-browser';
// ngx-auth-firebaseui
// components
import {AuthComponent} from './components/ngx-auth-firebaseui/auth.component';
import {UserComponent} from './components/ngx-auth-firebaseui-user/user.component';
import {AuthProvidersComponent} from './components/providers/auth.providers.component';
import {EmailConfirmationComponent} from './components/email-confirmation/email-confirmation.component';
import {NgxAuthFirebaseUIConfig, ngxAuthFirebaseUIConfigFactory} from './interfaces/config.interface';
import {NgxAuthFirebaseuiAvatarComponent} from './components/ngx-auth-firebaseui-avatar/ngx-auth-firebaseui-avatar.component';
import {LegalityDialogComponent} from './components/legality-dialog/legality-dialog.component';
// guards
import {LoggedInGuard} from './guards/logged-in.guard';
// services
import {FirestoreSyncService} from './services/firestore-sync.service';
import {AuthProcessService} from './services/auth-process.service';
import {NgxAuthFirebaseUIConfigToken, UserProvidedConfigToken} from './tokens';
// interfaces
// ###################################################################################################
// Export module's public API
// components
export {LegalityDialogComponent} from './components/legality-dialog/legality-dialog.component';
export {LinkMenuItem, NgxAuthFirebaseuiAvatarComponent} from './components/ngx-auth-firebaseui-avatar/ngx-auth-firebaseui-avatar.component';
export {UserComponent} from './components/ngx-auth-firebaseui-user/user.component';
export {AuthComponent} from './components/ngx-auth-firebaseui/auth.component';
export {AuthProvidersComponent} from './components/providers/auth.providers.component';
export {NgxAuthFirebaseuiLoginComponent} from './components/ngx-auth-firebaseui-login/ngx-auth-firebaseui-login.component';
export {NgxAuthFirebaseuiRegisterComponent} from './components/ngx-auth-firebaseui-register/ngx-auth-firebaseui-register.component';


// guards
export {LoggedInGuard} from './guards/logged-in.guard';
// interfaces
export {NgxAuthFirebaseUIConfig} from './interfaces/config.interface';
// services
export {AuthProcessService, AuthProvider} from './services/auth-process.service';
export {FirestoreSyncService} from './services/firestore-sync.service';


@NgModule({
    imports: [
        CommonModule,
        // HTTP
        RouterModule,
        HttpClientModule,
        // FLEX_LAYOUT
        FlexLayoutModule,
        // FORMS
        FormsModule,
        ReactiveFormsModule,
        // MATERIAL2
        MatTabsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        MatDividerModule,
        MatChipsModule,
        MatTooltipModule,
        MatDialogModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatDialogModule,
        MatMenuModule,
        // ANGULAR MATERIAL EXTENSIONS
        MatPasswordStrengthModule,
        // ANGULARFIRE2
        AngularFireAuthModule,
        AngularFirestoreModule,
    ],
    exports: [
        AuthComponent,
        UserComponent,
        NgxAuthFirebaseuiAvatarComponent,
        AuthProvidersComponent,
        EmailConfirmationComponent,
        // LoggedInGuard,
        AngularFireAuthModule,
        AngularFirestoreModule,
        NgxAuthFirebaseuiLoginComponent,
        NgxAuthFirebaseuiRegisterComponent
    ],
    declarations: [
        AuthComponent,
        UserComponent,
        NgxAuthFirebaseuiAvatarComponent,
        AuthProvidersComponent,
        EmailConfirmationComponent,
        LegalityDialogComponent,
        NgxAuthFirebaseuiLoginComponent,
        NgxAuthFirebaseuiRegisterComponent
    ]
})
export class NgxAuthFirebaseUIModule {
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, auth: AuthProcessService) {
    auth.listenToUserEvents();
    this.registerProviderIcons();
  }


  static forRoot(
    configFactory: FirebaseOptions,
    appNameFactory: () => string | undefined = () => undefined,
    config: NgxAuthFirebaseUIConfig = {}
  ): ModuleWithProviders<NgxAuthFirebaseUIModule> {

    return {
      ngModule: NgxAuthFirebaseUIModule,
      providers:
        [
          {
            provide: FIREBASE_OPTIONS,
            useValue: configFactory
          },
          {
            provide: FIREBASE_APP_NAME,
            useFactory: appNameFactory
          },
          {provide: UserProvidedConfigToken, useValue: config},
          {
            provide: NgxAuthFirebaseUIConfigToken,
            useFactory: ngxAuthFirebaseUIConfigFactory,
            deps: [UserProvidedConfigToken]
          },
          AuthProcessService,
          FirestoreSyncService,
          LoggedInGuard
        ]
    };
  }

  registerProviderIcons() {
    this.iconRegistry
      .addSvgIcon('google', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/google.svg'))
      .addSvgIcon('apple', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/apple.svg'))
      .addSvgIcon('google-colored', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/google.svg'))
      .addSvgIcon('facebook', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/facebook.svg'))
      .addSvgIcon('twitter', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/twitter.svg'))
      .addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/github-circle.svg'))
      .addSvgIcon('microsoft', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/microsoft.svg'))
      .addSvgIcon('yahoo', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/yahoo.svg'))
      .addSvgIcon('phone', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/phone.svg'));
  }
}
