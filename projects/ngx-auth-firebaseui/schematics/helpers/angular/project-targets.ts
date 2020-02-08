import {SchematicsException, Tree} from '@angular-devkit/schematics';
import {targetBuildNotFoundError as originalTargetBuildNotFoundError} from '@schematics/angular/utility/project-targets';

import {getProject, isWorkspaceProject} from './project';
import {WorkspaceProject, WorkspaceSchema, WorkspaceTargets} from './workspace-models';

// TODO: Migrate to use the original source
export function getProjectTargets(project: WorkspaceProject): WorkspaceTargets;
export function getProjectTargets(workspaceOrHost: WorkspaceSchema | Tree, projectName: string): WorkspaceTargets;
export function getProjectTargets(
  projectOrHost: WorkspaceProject | Tree | WorkspaceSchema,
  projectName = ''
): WorkspaceTargets {
  const project = isWorkspaceProject(projectOrHost) ? projectOrHost : getProject(projectOrHost, projectName);

  const projectTargets = project.targets || project.architect;
  if (!projectTargets) {
    throw new Error('Project target not found.');
  }

  return projectTargets;
}

export function targetBuildNotFoundError(): SchematicsException {
  return originalTargetBuildNotFoundError();
}
