import { relativePathToWorkspaceRoot as originalRelativePathToWorkspaceRoot } from '@schematics/angular/utility/paths';

export function relativePathToWorkspaceRoot(projectRoot: string | undefined): string {
  return originalRelativePathToWorkspaceRoot(projectRoot);
}
