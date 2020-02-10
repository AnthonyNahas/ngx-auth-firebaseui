import { Tree } from '@angular-devkit/schematics';
import {
  findBootstrapModuleCall as originalFindBootstrapModuleCall,
  findBootstrapModulePath as originalFindBootstrapModulePath,
  getAppModulePath as originalGetAppModulePath
} from '@schematics/angular/utility/ng-ast-utils';
import * as ts from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';

export function findBootstrapModuleCall(host: Tree, mainPath: string): ts.CallExpression | null {
  return originalFindBootstrapModuleCall(host, mainPath);
}

export function findBootstrapModulePath(host: Tree, mainPath: string): string {
  return originalFindBootstrapModulePath(host, mainPath);
}

export function getAppModulePath(host: Tree, mainPath: string): string {
  return originalGetAppModulePath(host, mainPath);
}
