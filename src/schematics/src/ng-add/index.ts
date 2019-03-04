import {chain, noop, Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {NodePackageInstallTask} from '@angular-devkit/schematics/tasks';
import {
  addModuleImportToRootModule,
  addPackageJsonDependency,
  getProjectFromWorkspace,
  getWorkspace,
  NodeDependency,
  NodeDependencyType
} from 'schematics-utilities';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function addPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    const dependencies: NodeDependency[] = [
      {type: NodeDependencyType.Default, version: 'latest', name: 'ngx-auth-firebaseui'},
      {type: NodeDependencyType.Default, version: '7.2.7', name: '@angular/forms'},
      {type: NodeDependencyType.Default, version: '7.2.7', name: '@angular/router'},
      {type: NodeDependencyType.Default, version: '5.1.1', name: '@angular/fire'},
      {type: NodeDependencyType.Default, version: '^5.8.5', name: 'firebase'}
    ];

    dependencies.forEach(dependency => {
      addPackageJsonDependency(host, dependency);
      context.logger.log('info', `✅️ Added "${dependency.name}" into ${dependency.type}`);
    });

    return host;
  };
}

export function installPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
    context.logger.log('info', `🔍 Installing packages...`);

    return host;
  };
}

export function addModuleToImports(options: any): Rule {
  return (host: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(
      workspace,
      // Takes the first project in case it's not provided by CLI
      options.project ? options.project : Object.keys(workspace['projects'])[0]
    );
    const moduleName = 'NgxAuthFirebaseUIModule';

    addModuleImportToRootModule(host, moduleName, 'ngx-auth-firebaseui', project);
    context.logger.log('info', `✅️ "${moduleName}" is imported`);

    return host;
  };
}

export default function (options: any): Rule {
  return chain([
    options && options.skipPackageJson ? noop() : addPackageJsonDependencies(),
    options && options.skipPackageJson ? noop() : installPackageJsonDependencies(),
    options && options.skipModuleImport ? noop() : addModuleToImports(options),
  ]);
}
