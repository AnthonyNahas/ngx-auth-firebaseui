import {CommonModule} from '@angular/common';
import {Inject, InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthComponent} from './components/ngx-auth-firebaseui/auth.component';
import {UserComponent} from './components/ngx-auth-firebaseui-user/user.component';
import {AuthProvidersComponent} from './components/providers/auth.providers.component';
import {EmailConfirmationComponent} from './components/email-confirmation/email-confirmation.component';
import {defaultAuthFirebaseUIConfig, NgxAuthFirebaseUIConfig} from './interfaces/config.interface';
import {FirestoreSyncService} from './services/firestore-sync.service';
import {AuthProcessService} from './services/auth-process.service';
import {FirebaseAppConfig, FirebaseNameOrConfigToken, FirebaseOptionsToken} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {LegalityDialogComponent} from './components/legality-dialog/legality-dialog.component';
import {LoggedInGuard} from './guards/logged-in.guard';
import {NgxAuthFirebaseuiAvatarComponent} from './components/ngx-auth-firebaseui-avatar/ngx-auth-firebaseui-avatar.component';
import {RouterModule} from '@angular/router';

// Export module's public API
// components
export {AuthComponent} from './components/ngx-auth-firebaseui/auth.component';
export {UserComponent} from './components/ngx-auth-firebaseui-user/user.component';
export {NgxAuthFirebaseuiAvatarComponent} from './components/ngx-auth-firebaseui-avatar/ngx-auth-firebaseui-avatar.component';
export {AuthProvidersComponent, Theme, Layout} from './components/providers/auth.providers.component';
export {LegalityDialogComponent} from './components/legality-dialog/legality-dialog.component';
// services
export {AuthProcessService, AuthProvider} from './services/auth-process.service';
export {FirestoreSyncService} from './services/firestore-sync.service';

// guards
export {LoggedInGuard} from './guards/logged-in.guard';
// interfaces
export {NgxAuthFirebaseUIConfig} from './interfaces/config.interface';

export const NgxAuthFirebaseUIConfigToken = new InjectionToken<NgxAuthFirebaseUIConfig>('NgxAuthFirebaseUIConfig');

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
  static forRoot(configFactory: FirebaseAppConfig,
                 appNameFactory?: () => string,
                 config: NgxAuthFirebaseUIConfig = defaultAuthFirebaseUIConfig): ModuleWithProviders {
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
          {
            provide: NgxAuthFirebaseUIConfigToken,
            useValue: config
          },
          AuthProcessService,
          FirestoreSyncService,
          LoggedInGuard
        ],
    };
  }

  constructor(@Inject(NgxAuthFirebaseUIConfigToken)
              public config: NgxAuthFirebaseUIConfig) {
    this.config = Object.assign(defaultAuthFirebaseUIConfig, this.config);
  }
}
