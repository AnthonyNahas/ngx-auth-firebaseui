import { Path } from '@angular-devkit/core';
import { Tree } from '@angular-devkit/schematics';

import {
  ModuleOptions as OriginalModuleOptions,
  findModuleFromOptions as originalFindModuleFromOptions,
  findModule as originalFindModule,
  buildRelativePath as originalBuildRelativePath,
  MODULE_EXT as ORIGINAL_MODULE_EXT,
  ROUTING_MODULE_EXT as ORIGINAL_ROUTING_MODULE_EXT
} from '@schematics/angular/utility/find-module';

export interface ModuleOptions extends OriginalModuleOptions {}

/**
 * Find the module referred by a set of options passed to the schematics.
 */
export function findModuleFromOptions(host: Tree, options: ModuleOptions): Path | undefined {
  return originalFindModuleFromOptions(host, options);
}

/**
 * Function to find the "closest" module to a generated file's path.
 */
export function findModule(
  host: Tree,
  generateDir: string,
  moduleExt = MODULE_EXT,
  routingModuleExt = ROUTING_MODULE_EXT
): Path {
  return originalFindModule(host, generateDir, moduleExt, routingModuleExt);
}

/**
 * Build a relative path from one file path to another file path.
 */
export function buildRelativePath(from: string, to: string): string {
  return originalBuildRelativePath(from, to);
}

export const MODULE_EXT = ORIGINAL_MODULE_EXT;
export const ROUTING_MODULE_EXT = ORIGINAL_ROUTING_MODULE_EXT;
