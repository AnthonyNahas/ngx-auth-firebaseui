import {
  htmlSelectorRe as originalHtmlSelectorRe,
  validateName as originalValidateName,
  validateHtmlSelector as originalValidateHtmlSelector,
  validateProjectName as originalValidateProjectName
} from '@schematics/angular/utility/validation';

export function validateName(name: string): void {
  return originalValidateName(name);
}

// Must start with a letter, and must contain only alphanumeric characters or dashes.
// When adding a dash the segment after the dash must also start with a letter.
export const htmlSelectorRe = originalHtmlSelectorRe;

export function validateHtmlSelector(selector: string): void {
  return originalValidateHtmlSelector(selector);
}

export function validateProjectName(projectName: string) {
  return originalValidateProjectName(projectName);
}
