import { Tree } from '@angular-devkit/schematics';
import { hasNgModuleImport as originalHasNgModuleImport } from '@angular/cdk/schematics';

/**
 * Whether the Angular module in the given path imports the specified module class name.
 */
export function hasNgModuleImport(tree: Tree, modulePath: string, className: string): boolean {
  return originalHasNgModuleImport(tree, modulePath, className);
}
