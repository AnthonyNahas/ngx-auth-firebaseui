import {
  Host as OriginalHost,
  Change as OriginalChange,
  NoopChange as OriginalNoopChange,
  InsertChange as OriginalInsertChange,
  RemoveChange as OriginalRemoveChange,
  ReplaceChange as OriginalReplaceChange
} from '@schematics/angular/utility/change';

export interface Host extends OriginalHost {}

export interface Change extends OriginalChange {}

/**
 * An operation that does nothing.
 */
export class NoopChange extends OriginalNoopChange {}

/**
 * Will add text to the source code.
 */
export class InsertChange extends OriginalInsertChange {}

/**
 * Will remove text from the source code.
 */
export class RemoveChange extends OriginalRemoveChange {}

/**
 * Will replace text from the source code.
 */
export class ReplaceChange extends OriginalReplaceChange {}
