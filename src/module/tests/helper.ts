import {By} from '@angular/platform-browser';
import {MatButton} from '@angular/material';
import {ComponentFixture} from '@angular/core/testing';
import {DebugElement} from '@angular/core';

export function getButtonById(fixture: ComponentFixture<any>, id: string): DebugElement[] {
  return fixture.debugElement.queryAll(By.directive(MatButton))
    .filter(button => button.attributes['id'] === id);
}
