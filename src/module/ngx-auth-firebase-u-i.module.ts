import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders, InjectionToken} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthComponent} from './components/auth/auth.component';
import {UserComponent} from './components/user/user.component';
import {AuthProvidersComponent} from './components/providers/auth.providers.component';
import {EmailConfirmationComponent} from './components/email-confirmation/email-confirmation.component';
import {defaultAuthFirebaseUIConfig, NgxAuthFirebaseUIConfig} from './interfaces/config.interface';
import {FirestoreSyncService} from './services/firestore-sync.service';
import {AuthProcessService} from './services/auth-process.service';
import {FirebaseAppConfig, FirebaseOptionsToken, FirebaseNameOrConfigToken} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatSnackBarModule,
  MatTabsModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatCheckboxModule
} from '@angular/material';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {LegalityDialogComponent} from './components/legality-dialog/legality-dialog.component';
import {LoggedInGuard} from './guards/logged-in.guard';

// Export module's public API
// components
export {AuthComponent} from './components/auth/auth.component';
export {UserComponent} from './components/user/user.component';
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
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatPasswordStrengthModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  exports: [
    AuthComponent,
    UserComponent,
    AuthProvidersComponent,
    EmailConfirmationComponent,
    LoggedInGuard,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  declarations: [
    AuthComponent,
    UserComponent,
    AuthProvidersComponent,
    EmailConfirmationComponent,
    LegalityDialogComponent
  ],
  entryComponents: [
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
          FirestoreSyncService
        ],
    };
  }
}
