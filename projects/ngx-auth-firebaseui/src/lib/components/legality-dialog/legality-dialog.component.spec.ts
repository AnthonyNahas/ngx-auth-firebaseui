import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {LegalityDialogComponent} from './legality-dialog.component';
import {MAT_DIALOG_DATA, MatButtonModule, MatCheckboxModule, MatDialogModule, MatDialogRef, MatIconModule} from '@angular/material';

import {FormsModule} from '@angular/forms';
import {DebugElement} from '@angular/core';
import {getButtonById} from '../../tests/helper';

describe('LegalityDialogComponent', () => {
  let component: LegalityDialogComponent;
  let fixture: ComponentFixture<LegalityDialogComponent>;
  const testURL = 'link.com';

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatCheckboxModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule
      ],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useValue: {}}
      ],
      declarations: [LegalityDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a dialog title', () => {
    const h1: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toContain('Legal requirements');
  });

  it('should decline action button be enabled by default', () => {
    const declineActionButton: DebugElement[] = getButtonById(fixture, 'decline-action');
    expect(declineActionButton[0].nativeElement.disabled).toBeFalsy();
  });

  it('should decline action button has warn color and matDialogClose attribute and is raised', () => {
    const declineActionButton: DebugElement[] = getButtonById(fixture, 'decline-action');
    const declineActionButtonAttributes = declineActionButton.map(button => button.attributes)[0];
    expect(declineActionButtonAttributes.id).toEqual('decline-action');
    expect(declineActionButtonAttributes.color).toEqual('warn');
    expect(declineActionButtonAttributes.matDialogClose).toBeDefined();
    expect(declineActionButtonAttributes['mat-raised-button']).toBeDefined();
  });

  it('should confirm action button be disabled by default', () => {
    const confirmActionButton: DebugElement[] = getButtonById(fixture, 'confirm-action');
    const confirmActionButtonAttributes = confirmActionButton.map(button => button.attributes)[0];
    expect(confirmActionButtonAttributes['ng-reflect-disabled']).toMatch('false');
  });

  it('should confirm action button has primary color and is raised', () => {
    const confirmActionButton: DebugElement[] = getButtonById(fixture, 'confirm-action');
    const confirmActionButtonAttributes = confirmActionButton.map(button => button.attributes)[0];
    expect(confirmActionButtonAttributes.color).toEqual('primary');
    expect(confirmActionButtonAttributes['mat-raised-button']).toBeDefined();
  });

  it('should enable confirm button when only tosURL is provided and checkTOS is checked', () => {
    const disableConfirmActionButtonSpy = jest.spyOn(component, 'disableConfirmActionButton', 'get');
    component.data.tosUrl = testURL;
    component.checkTOS = true;
    fixture.detectChanges();
    expect(disableConfirmActionButtonSpy).toHaveBeenCalled();
    expect(component.disableConfirmActionButton).toBeFalsy();
  });

  it('should enable confirm button when only privacyPolicyUrl is provided and checkPrivacyPolicy is checked', () => {
    const disableConfirmActionButtonSpy = jest.spyOn(component, 'disableConfirmActionButton', 'get');
    component.data.privacyPolicyUrl = testURL;
    component.checkPrivacyPolicy = true;
    fixture.detectChanges();
    expect(disableConfirmActionButtonSpy).toHaveBeenCalled();
    expect(component.disableConfirmActionButton).toBeFalsy();
  });

  it('should enable confirm button when only tosUrl and privacyPolicyUrl is provided as well as' +
    ' checkTOS and checkPrivacyPolicy are checked', () => {
    const disableConfirmActionButtonSpy = jest.spyOn(component, 'disableConfirmActionButton', 'get');
    component.data.tosUrl = testURL;
    component.data.privacyPolicyUrl = testURL;
    // component.checkPrivacyPolicy =  true;
    fixture.detectChanges();
    expect(disableConfirmActionButtonSpy).toHaveBeenCalled();
    expect(component.disableConfirmActionButton).toBeTruthy();

    component.checkTOS = true;
    fixture.detectChanges();
    expect(component.disableConfirmActionButton).toBeTruthy();

    component.checkTOS = false;
    component.checkPrivacyPolicy = true;
    fixture.detectChanges();
    expect(component.disableConfirmActionButton).toBeTruthy();

    component.checkTOS = component.checkPrivacyPolicy = true;
    fixture.detectChanges();
    expect(component.disableConfirmActionButton).toBeFalsy();
  });

});
