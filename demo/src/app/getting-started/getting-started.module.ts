import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GettingStartedComponent} from './getting-started.component';
import {GettingStartedRoutingModule} from './getting-started-routing.module';
import {MatCheckboxModule, MatInputModule, MatSidenavModule, MatStepperModule, MatTabsModule} from '@angular/material';
import {AppSharedModule} from '../shared';
import {StepContentComponent, StepContentViewComponent} from './step-content/step-content.component';

@NgModule({
  imports: [
    CommonModule,
    GettingStartedRoutingModule,
    AppSharedModule,
    MatSidenavModule,
    MatStepperModule,
    MatCheckboxModule,
    MatInputModule,
    MatTabsModule
  ],
  declarations: [GettingStartedComponent, StepContentComponent, StepContentViewComponent],
})
export class GettingStartedModule {
}
