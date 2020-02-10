import { Tree } from '@angular-devkit/schematics';
import {
  getSourceFile as originalGetSourceFile,
  addModuleImportToRootModule as originalAddModuleImportToRootModule,
  addModuleImportToModule as originalAddModuleImportToModule,
  typescript
} from '@angular/cdk/schematics';
import { WorkspaceProject } from '@angular-devkit/core/src/experimental/workspace';

/** Reads file given path and returns TypeScript source file. */
export function getSourceFile(host: Tree, path: string): typescript.SourceFile {
  return originalGetSourceFile(host, path);
}

/** Import and add module to root app module. */
export function addModuleImportToRootModule(host: Tree, moduleName: string, src: string, project: WorkspaceProject) {
  return originalAddModuleImportToRootModule(host, moduleName, src, project);
}

/**
 * Import and add module to specific module path.
 * @param host the tree we are updating
 * @param modulePath src location of the module to import
 * @param moduleName name of module to import
 * @param src src location to import
 */
export function addModuleImportToModule(host: Tree, modulePath: string, moduleName: string, src: string) {
  return originalAddModuleImportToModule(host, modulePath, moduleName, src);
}
