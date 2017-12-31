import {NgModule, ModuleWithProviders, InjectionToken} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SampleComponent} from './sample.component';
import {SampleDirective} from './sample.directive';
import {SamplePipe} from './sample.pipe';
import {SampleService} from './sample.service';
import {AuthComponent} from './auth/auth.component';
import {
    MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatInputModule, MatSnackBarModule,
    MatTabsModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {IAuthFirebaseUIConfig} from './interfaces/config.interface';
import {AngularFireModule, FirebaseAppConfig, FirebaseAppConfigToken, FirebaseAppName} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {ResponseSnackbarComponent} from './auth/response/response.snackbar.component';

export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
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
        MatChipsModule,
        AngularFireAuthModule,
    ],
    declarations:
        [
            AuthComponent,
            ResponseSnackbarComponent,
            SampleComponent,
            SampleDirective,
            SamplePipe
        ],
    exports:
        [
            AuthComponent,
            ResponseSnackbarComponent,
            SampleComponent,
            SampleDirective,
            SamplePipe
        ],
    entryComponents:
        [
            ResponseSnackbarComponent
        ]
})


export class NgxAuthFirebaseUIModule extends AngularFireModule {
    static forRoot(configFactory: FirebaseAppConfig, appNameFactory?: () => string, config?: IAuthFirebaseUIConfig): ModuleWithProviders {
        return {
            ngModule: NgxAuthFirebaseUIModule,
            providers:
                [
                    SampleService,
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
        }
    }
}

// export class Angularfire2WorkaroundConfigModule {
//     static initializeApp(configFactory: () => FirebaseAppConfig, appNameFactory: () => string) {
//         return {
//             ngModule: AngularFireModule,
//             providers: [
//                 {provide: FirebaseAppConfigToken, useFactory: configFactory},
//                 {provide: FirebaseAppName, useFactory: appNameFactory}
//             ]
//         };
//     }
// }
