import {NgModule, ModuleWithProviders, InjectionToken} from '@angular/core';
import {CommonModule} from '@angular/common';
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
    MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {IAuthFirebaseUIConfig} from './interfaces/config.interface';
import {AngularFireModule, FirebaseAppConfig, FirebaseAppConfigToken, FirebaseAppName} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {ResponseSnackbarComponent} from './components/response/response.snackbar.component';
import {AuthProcessService} from './services/auth-process.service';
import {AuthComponent} from './components/auth/auth.component';
import {AuthProvidersComponent} from './components/providers/auth.providers.component';
import {EmailConfirmationComponent} from './components/email-confirmation/email-confirmation.component';
import {FirestoreSyncService} from './services/firestore-sync.service';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {UserComponent} from './components/user/user.component';

// export * from './classes';
// todo export all interfaces within the ngx-auth-firebaseui module
export * from './interfaces/main.interface';
export * from './components/auth/auth.component';
export * from './components/user/user.component';


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
        AngularFireAuthModule,
        AngularFirestoreModule,
    ],
    declarations:
        [
            AuthComponent,
            UserComponent,
            AuthProvidersComponent,
            EmailConfirmationComponent,
            ResponseSnackbarComponent
        ],
    exports:
        [
            AuthComponent,
            UserComponent,
            AuthProvidersComponent,
            ResponseSnackbarComponent,
        ],
    entryComponents:
        [
            ResponseSnackbarComponent
        ],
    providers:
        [
            AuthProcessService,
            FirestoreSyncService
        ],
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
                ],
        };
    }
}
