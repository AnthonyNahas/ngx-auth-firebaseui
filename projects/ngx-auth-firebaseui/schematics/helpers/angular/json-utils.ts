import { JsonAstArray, JsonAstNode, JsonAstObject, JsonValue } from '@angular-devkit/core';
import { UpdateRecorder } from '@angular-devkit/schematics';

import {
  appendPropertyInAstObject as originalAppendPropertyInAstObject,
  removePropertyInAstObject as originalRemovePropertyInAstObject,
  insertPropertyInAstObjectInOrder as originalInsertPropertyInAstObjectInOrder,
  appendValueInAstArray as originalAppendValueInAstArray,
  findPropertyInAstObject as originalFindPropertyInAstObject
} from '@schematics/angular/utility/json-utils';

export function appendPropertyInAstObject(
  recorder: UpdateRecorder,
  node: JsonAstObject,
  propertyName: string,
  value: JsonValue,
  indent: number
) {
  return originalAppendPropertyInAstObject(recorder, node, propertyName, value, indent);
}

export function insertPropertyInAstObjectInOrder(
  recorder: UpdateRecorder,
  node: JsonAstObject,
  propertyName: string,
  value: JsonValue,
  indent: number
) {
  return originalInsertPropertyInAstObjectInOrder(recorder, node, propertyName, value, indent);
}

export function removePropertyInAstObject(recorder: UpdateRecorder, node: JsonAstObject, propertyName: string) {
  return originalRemovePropertyInAstObject(recorder, node, propertyName);
}

export function appendValueInAstArray(recorder: UpdateRecorder, node: JsonAstArray, value: JsonValue, indent = 4) {
  return originalAppendValueInAstArray(recorder, node, value, indent);
}

export function findPropertyInAstObject(node: JsonAstObject, propertyName: string): JsonAstNode | null {
  return originalFindPropertyInAstObject(node, propertyName);
}
