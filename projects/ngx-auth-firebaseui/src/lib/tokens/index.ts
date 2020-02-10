// This token is the official token containing the final configuration; ie. the merge between default and user provided configurations
import {InjectionToken} from '@angular/core';
import {NgxAuthFirebaseUIConfig} from '../interfaces';

export const NgxAuthFirebaseUIConfigToken = new InjectionToken<NgxAuthFirebaseUIConfig>('NgxAuthFirebaseUIConfigToken');
// This is an intermediate token containing only user-provided configuration
export const UserProvidedConfigToken = new InjectionToken<NgxAuthFirebaseUIConfig>('UserProvidedConfigToken');
