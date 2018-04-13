import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders, InjectionToken} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LibComponent} from './component/lib.component';
import {LibService} from './service/lib.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthComponent} from './components/auth/auth.component';
import {UserComponent} from './components/user/user.component';
import {AuthProvidersComponent} from './components/providers/auth.providers.component';
import {ResponseSnackbarComponent} from './components/response/response.snackbar.component';
import {EmailConfirmationComponent} from './components/email-confirmation/email-confirmation.component';
import {IAuthFirebaseUIConfig} from './interfaces/config.interface';
import {FirestoreSyncService} from './services/firestore-sync.service';
import {AuthProcessService} from './services/auth-process.service';
import {AngularFireModule, FirebaseAppConfig, FirebaseAppConfigToken, FirebaseAppName} from 'angularfire2';
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
  MatProgressBarModule
} from '@angular/material';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {NgxMaterialPasswordStrengthModule} from 'ngx-material-password-strength';

// Export module's public API
export {LibComponent} from './component/lib.component';
export {LibService} from './service/lib.service';

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
    MatProgressBarModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgxMaterialPasswordStrengthModule,
  ],
  exports: [
    LibComponent,
    AuthComponent,
    UserComponent,
    AuthProvidersComponent,
    EmailConfirmationComponent,
    ResponseSnackbarComponent,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  declarations: [
    LibComponent,
    AuthComponent,
    UserComponent,
    AuthProvidersComponent,
    EmailConfirmationComponent,
    ResponseSnackbarComponent
  ]
})


export class NgxAuthFirebaseUIModule extends AngularFireModule {
  static forRoot(configFactory: FirebaseAppConfig, appNameFactory?: () => string, config?: IAuthFirebaseUIConfig): ModuleWithProviders {
    return {
      ngModule: NgxAuthFirebaseUIModule,
      providers:
        [
          {
            provide: FirebaseAppConfigToken,
            useValue: configFactory
          },
          {
            provide: FirebaseAppName,
            useFactory: appNameFactory
          },
          {
            provide: new InjectionToken<IAuthFirebaseUIConfig>('IAuthFirebaseUIConfig - main config'),
            useValue: config
          },
          LibService,
          AuthProcessService,
          FirestoreSyncService
        ],
    };
  }
}
