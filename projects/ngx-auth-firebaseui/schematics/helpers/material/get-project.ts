import { getProjectFromWorkspace as originalGetProjectFromWorkspace } from '@angular/cdk/schematics';
import { WorkspaceSchema, WorkspaceProject } from '@angular-devkit/core/src/experimental/workspace';

/**
 * Finds the specified project configuration in the workspace. Throws an error if the project
 * couldn't be found.
 */
export function getProjectFromWorkspace(workspace: WorkspaceSchema, projectName?: string): WorkspaceProject {
  return originalGetProjectFromWorkspace(workspace, projectName);
}
