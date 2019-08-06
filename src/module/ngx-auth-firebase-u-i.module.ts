import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { FirebaseAppConfig, FirebaseNameOrConfigToken, FirebaseOptionsToken } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EmailConfirmationComponent } from './components/email-confirmation/email-confirmation.component';
import { LegalityDialogComponent } from './components/legality-dialog/legality-dialog.component';
import { NgxAuthFirebaseuiAvatarComponent } from './components/ngx-auth-firebaseui-avatar/ngx-auth-firebaseui-avatar.component';
import { UserComponent } from './components/ngx-auth-firebaseui-user/user.component';
import { AuthComponent } from './components/ngx-auth-firebaseui/auth.component';
import { AuthProvidersComponent } from './components/providers/auth.providers.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { NgxAuthFirebaseUIConfig, ngxAuthFirebaseUIConfigFactory } from './interfaces/config.interface';
import { AuthProcessService } from './services/auth-process.service';
import { FirestoreSyncService } from './services/firestore-sync.service';

// Export module's public API
// components
export { LegalityDialogComponent } from './components/legality-dialog/legality-dialog.component';
export { LinkMenuItem, NgxAuthFirebaseuiAvatarComponent } from './components/ngx-auth-firebaseui-avatar/ngx-auth-firebaseui-avatar.component';
export { UserComponent } from './components/ngx-auth-firebaseui-user/user.component';
export { AuthComponent } from './components/ngx-auth-firebaseui/auth.component';
export { AuthProvidersComponent, Layout, Theme } from './components/providers/auth.providers.component';
// guards
export { LoggedInGuard } from './guards/logged-in.guard';
// interfaces
export { NgxAuthFirebaseUIConfig } from './interfaces/config.interface';
// services
export { AuthProcessService, AuthProvider } from './services/auth-process.service';
export { FirestoreSyncService } from './services/firestore-sync.service';




// This token is the official token containing the final configuration; ie. the merge between default and user provided configurations
export const NgxAuthFirebaseUIConfigToken = new InjectionToken<NgxAuthFirebaseUIConfig>('NgxAuthFirebaseUIConfigToken');
// This is an intermediate token containing only user-provided configuration
export const UserProvidedConfigToken = new InjectionToken<NgxAuthFirebaseUIConfig>('UserProvidedConfigToken');

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
    AngularFirestoreModule
  ],
  declarations: [
    AuthComponent,
    UserComponent,
    NgxAuthFirebaseuiAvatarComponent,
    AuthProvidersComponent,
    EmailConfirmationComponent,
    LegalityDialogComponent
  ],
  entryComponents: [
    UserComponent,
    LegalityDialogComponent
  ]
})
export class NgxAuthFirebaseUIModule {
  static forRoot(
    configFactory: FirebaseAppConfig,
    appNameFactory?: () => string,
    config: NgxAuthFirebaseUIConfig = {}
  ): ModuleWithProviders {
    return {
      ngModule: NgxAuthFirebaseUIModule,
      providers:
        [
          {
            provide: FirebaseOptionsToken,
            useValue: configFactory
          },
          {
            provide: FirebaseNameOrConfigToken,
            useFactory: appNameFactory
          },
          { provide: UserProvidedConfigToken, useValue: config },
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

  constructor(private _iconRegistry: MatIconRegistry,
    private _sanitizer: DomSanitizer) {
      _iconRegistry
      .addSvgIcon('google',
        _sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/google.svg'))
      .addSvgIcon('google-colored',
        _sanitizer.bypassSecurityTrustResourceUrl('/assets/google.svg'))
      .addSvgIcon('facebook',
        _sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/facebook.svg'))
      .addSvgIcon('twitter',
        _sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/twitter.svg'))
      .addSvgIcon('github',
        _sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/github-circle.svg'))
      .addSvgIcon('microsoft',
        _sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/microsoft.svg'))
      .addSvgIcon('yahoo',
        _sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/yahoo.svg'))
      .addSvgIcon('phone',
        _sanitizer.bypassSecurityTrustResourceUrl('/assets/phone.svg'));
    }
}
