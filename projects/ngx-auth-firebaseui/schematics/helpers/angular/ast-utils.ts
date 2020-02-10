import {
  insertImport as originalInsertImport,
  findNodes as originalFindNodes,
  findNode as originalFindNode,
  getSourceNodes as originalGetSourceNodes,
  insertAfterLastOccurrence as originalInsertAfterLastOccurrence,
  getContentOfKeyLiteral as originalGetContentOfKeyLiteral,
  getFirstNgModuleName as originalGetFirstNgModuleName,
  getDecoratorMetadata as originalGetDecoratorMetadata,
  getMetadataField as originalGetMetadataField,
  getRouterModuleDeclaration as originalGetRouterModuleDeclaration,
  addSymbolToNgModuleMetadata as originalAddSymbolToNgModuleMetadata,
  addDeclarationToModule as originalAddDeclarationToModule,
  addImportToModule as originalAddImportToModule,
  addProviderToModule as originalAddProviderToModule,
  addExportToModule as originalAddExportToModule,
  addBootstrapToModule as originalAddBootstrapToModule,
  addEntryComponentToModule as originalAddEntryComponentToModule,
  addRouteDeclarationToModule as originalAddRouteDeclarationToModule,
  isImported as originalIsImported
} from '@schematics/angular/utility/ast-utils';
import * as ts from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';

import { Change } from './change';

/**
 * Add Import `import { symbolName } from fileName` if the import doesn't exit
 * already. Assumes fileToEdit can be resolved and accessed.
 * @param fileToEdit (file we want to add import to)
 * @param symbolName (item to import)
 * @param fileName (path to the file)
 * @param isDefault (if true, import follows style for importing default exports)
 * @return Change
 */
export function insertImport(
  source: ts.SourceFile,
  fileToEdit: string,
  symbolName: string,
  fileName: string,
  isDefault = false
): Change {
  return originalInsertImport(source, fileToEdit, symbolName, fileName, isDefault);
}

/**
 * Find all nodes from the AST in the subtree of node of SyntaxKind kind.
 * @param node
 * @param kind
 * @param max The maximum number of items to return.
 * @param recursive Continue looking for nodes of kind recursive until end
 * the last child even when node of kind has been found.
 * @return all nodes of kind, or [] if none is found
 */
export function findNodes(node: ts.Node, kind: ts.SyntaxKind, max = Infinity, recursive = false): ts.Node[] {
  return originalFindNodes(node, kind, max, recursive);
}

/**
 * Get all the nodes from a source.
 * @param sourceFile The source file object.
 * @returns {Observable<ts.Node>} An observable of all the nodes in the source.
 */
export function getSourceNodes(sourceFile: ts.SourceFile): ts.Node[] {
  return originalGetSourceNodes(sourceFile);
}

export function findNode(node: ts.Node, kind: ts.SyntaxKind, text: string): ts.Node | null {
  return originalFindNode(node, kind, text);
}

/**
 * Insert `toInsert` after the last occurence of `ts.SyntaxKind[nodes[i].kind]`
 * or after the last of occurence of `syntaxKind` if the last occurence is a sub child
 * of ts.SyntaxKind[nodes[i].kind] and save the changes in file.
 *
 * @param nodes insert after the last occurence of nodes
 * @param toInsert string to insert
 * @param file file to insert changes into
 * @param fallbackPos position to insert if toInsert happens to be the first occurence
 * @param syntaxKind the ts.SyntaxKind of the subchildren to insert after
 * @return Change instance
 * @throw Error if toInsert is first occurence but fall back is not set
 */
export function insertAfterLastOccurrence(
  nodes: ts.Node[],
  toInsert: string,
  file: string,
  fallbackPos: number,
  syntaxKind?: ts.SyntaxKind
): Change {
  return originalInsertAfterLastOccurrence(nodes, toInsert, file, fallbackPos, syntaxKind);
}

export function getContentOfKeyLiteral(_source: ts.SourceFile, node: ts.Node): string | null {
  return originalGetContentOfKeyLiteral(_source, node);
}

export function getDecoratorMetadata(source: ts.SourceFile, identifier: string, module: string): ts.Node[] {
  return originalGetDecoratorMetadata(source, identifier, module);
}

/**
 * Given a source file with @NgModule class(es), find the name of the first @NgModule class.
 *
 * @param source source file containing one or more @NgModule
 * @returns the name of the first @NgModule, or `undefined` if none is found
 */
export function getFirstNgModuleName(source: ts.SourceFile): string | undefined {
  return originalGetFirstNgModuleName(source);
}

export function getMetadataField(node: ts.ObjectLiteralExpression, metadataField: string): ts.ObjectLiteralElement[] {
  return originalGetMetadataField(node, metadataField);
}

export function addSymbolToNgModuleMetadata(
  source: ts.SourceFile,
  ngModulePath: string,
  metadataField: string,
  symbolName: string,
  importPath: string | null = null
): Change[] {
  return originalAddSymbolToNgModuleMetadata(source, ngModulePath, metadataField, symbolName, importPath);
}

/**
 * Custom function to insert a declaration (component, pipe, directive)
 * into NgModule declarations. It also imports the component.
 */
export function addDeclarationToModule(
  source: ts.SourceFile,
  modulePath: string,
  classifiedName: string,
  importPath: string
): Change[] {
  return originalAddDeclarationToModule(source, modulePath, classifiedName, importPath);
}

/**
 * Custom function to insert an NgModule into NgModule imports. It also imports the module.
 */
export function addImportToModule(
  source: ts.SourceFile,
  modulePath: string,
  classifiedName: string,
  importPath: string
): Change[] {
  return originalAddImportToModule(source, modulePath, classifiedName, importPath);
}

/**
 * Custom function to insert a provider into NgModule. It also imports it.
 */
export function addProviderToModule(
  source: ts.SourceFile,
  modulePath: string,
  classifiedName: string,
  importPath: string
): Change[] {
  return originalAddProviderToModule(source, modulePath, classifiedName, importPath);
}

/**
 * Custom function to insert an export into NgModule. It also imports it.
 */
export function addExportToModule(
  source: ts.SourceFile,
  modulePath: string,
  classifiedName: string,
  importPath: string
): Change[] {
  return originalAddExportToModule(source, modulePath, classifiedName, importPath);
}

/**
 * Custom function to insert an export into NgModule. It also imports it.
 */
export function addBootstrapToModule(
  source: ts.SourceFile,
  modulePath: string,
  classifiedName: string,
  importPath: string
): Change[] {
  return originalAddBootstrapToModule(source, modulePath, classifiedName, importPath);
}

/**
 * Custom function to insert an entryComponent into NgModule. It also imports it.
 */
export function addEntryComponentToModule(
  source: ts.SourceFile,
  modulePath: string,
  classifiedName: string,
  importPath: string
): Change[] {
  return originalAddEntryComponentToModule(source, modulePath, classifiedName, importPath);
}

/**
 * Determine if an import already exists.
 */
export function isImported(source: ts.SourceFile, classifiedName: string, importPath: string): boolean {
  return originalIsImported(source, classifiedName, importPath);
}

/**
 * Returns the RouterModule declaration from NgModule metadata, if any.
 */
export function getRouterModuleDeclaration(source: ts.SourceFile): ts.Expression | undefined {
  return originalGetRouterModuleDeclaration(source);
}

/**
 * Adds a new route declaration to a router module (i.e. has a RouterModule declaration)
 */
export function addRouteDeclarationToModule(source: ts.SourceFile, fileToAdd: string, routeLiteral: string): Change {
  return originalAddRouteDeclarationToModule(source, fileToAdd, routeLiteral);
}
