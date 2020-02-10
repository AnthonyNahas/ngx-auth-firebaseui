import { Tree } from '@angular-devkit/schematics';
import {
  buildDefaultPath as originalBuildDefaultPath,
  getProject as originalGetProject,
  isWorkspaceSchema as originalIsWorkspaceSchema,
  isWorkspaceProject as originalIsWorkspaceProject
} from '@schematics/angular/utility/project';
import { ProjectType, WorkspaceProject, WorkspaceSchema } from '@schematics/angular/utility/workspace-models';

/**
 * Build a default project path for generating.
 * @param project The project to build the path for.
 */
export function buildDefaultPath(project: WorkspaceProject): string {
  return originalBuildDefaultPath(project);
}

export function getProject<TProjectType extends ProjectType = ProjectType.Application>(
  workspaceOrHost: WorkspaceSchema | Tree,
  projectName: string
): WorkspaceProject<TProjectType> {
  return originalGetProject(workspaceOrHost, projectName);
}

export function isWorkspaceSchema(workspace: any): workspace is WorkspaceSchema {
  return originalIsWorkspaceSchema(workspace);
}

export function isWorkspaceProject(project: any): project is WorkspaceProject {
  return originalIsWorkspaceProject(project);
}
