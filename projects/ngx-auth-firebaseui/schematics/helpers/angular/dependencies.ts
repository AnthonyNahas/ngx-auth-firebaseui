import { Tree } from '@angular-devkit/schematics';
import {
  NodeDependency as OriginalNodeDependency,
  addPackageJsonDependency as originalAddPackageJsonDependency,
  getPackageJsonDependency as originalGetPackageJsonDependency,
  removePackageJsonDependency as originalRemovePackageJsonDependency
} from '@schematics/angular/utility/dependencies';

export enum NodeDependencyType {
  Default = 'dependencies',
  Dev = 'devDependencies',
  Peer = 'peerDependencies',
  Optional = 'optionalDependencies'
}

export interface NodeDependency extends OriginalNodeDependency {}

export function addPackageJsonDependency(tree: Tree, dependency: NodeDependency): void {
  return originalAddPackageJsonDependency(tree, dependency);
}

export function removePackageJsonDependency(tree: Tree, name: string): void {
  return originalRemovePackageJsonDependency(tree, name);
}

export function getPackageJsonDependency(tree: Tree, name: string): NodeDependency | null {
  return originalGetPackageJsonDependency(tree, name);
}
