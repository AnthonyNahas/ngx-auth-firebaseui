import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders, InjectionToken} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthComponent} from './components/auth/auth.component';
import {UserComponent} from './components/user/user.component';
import {AuthProvidersComponent} from './components/providers/auth.providers.component';
import {EmailConfirmationComponent} from './components/email-confirmation/email-confirmation.component';
import {INgxAuthFirebaseUIConfig} from './interfaces/config.interface';
import {FirestoreSyncService} from './services/firestore-sync.service';
import {AuthProcessService} from './services/auth-process.service';
import {FirebaseAppConfig, FirebaseOptionsToken, FirebaseNameOrConfigToken} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
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
  MatProgressBarModule
} from '@angular/material';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {NgxMaterialPasswordStrengthModule} from 'ngx-material-password-strength';

// Export module's public API
// components
export {AuthComponent} from './components/auth/auth.component';
export {UserComponent} from './components/user/user.component';
export {AuthProvidersComponent} from './components/providers/auth.providers.component';
// services
export {AuthProcessService, AuthProvider} from './services/auth-process.service';
export {INgxAuthFirebaseUIConfig} from './interfaces/config.interface';
export {FirestoreSyncService} from './services/firestore-sync.service';

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
    MatProgressSpinnerModule,
    MatProgressBarModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgxMaterialPasswordStrengthModule,
  ],
  exports: [
    AuthComponent,
    UserComponent,
    AuthProvidersComponent,
    EmailConfirmationComponent,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  declarations: [
    AuthComponent,
    UserComponent,
    AuthProvidersComponent,
    EmailConfirmationComponent,
  ]
})


export class NgxAuthFirebaseUIModule {
  static forRoot(configFactory: FirebaseAppConfig, appNameFactory?: () => string, config?: INgxAuthFirebaseUIConfig): ModuleWithProviders {
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
            provide: new InjectionToken<INgxAuthFirebaseUIConfig>('IAuthFirebaseUIConfig - main config'),
            useValue: config
          },
          AuthProcessService,
          FirestoreSyncService
        ],
    };
  }
}
