import {Rule} from '@angular-devkit/schematics';
import {applyLintFix as originalApplyLintFix} from '@schematics/angular/utility/lint-fix';

export function applyLintFix(path = '/'): Rule {
  return originalApplyLintFix(path);
}
