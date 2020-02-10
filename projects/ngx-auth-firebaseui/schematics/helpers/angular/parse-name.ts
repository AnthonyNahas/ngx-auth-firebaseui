import { Location as OriginalLocation, parseName as originalParseName } from '@schematics/angular/utility/parse-name';

export interface Location extends OriginalLocation {}

export function parseName(path: string, name: string): Location {
  return originalParseName(path, name);
}
