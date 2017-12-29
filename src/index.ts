import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SampleComponent} from './sample.component';
import {SampleDirective} from './sample.directive';
import {SamplePipe} from './sample.pipe';
import {SampleService} from './sample.service';
import {AuthComponent} from './auth/auth.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

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
        MatIconModule
    ],
    declarations: [
        AuthComponent,
        SampleComponent,
        SampleDirective,
        SamplePipe
    ],
    exports: [
        AuthComponent,
        SampleComponent,
        SampleDirective,
        SamplePipe
    ]
})
export class NgxAuthFirebaseUIModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgxAuthFirebaseUIModule,
            providers: [SampleService]
        };
    }
}
