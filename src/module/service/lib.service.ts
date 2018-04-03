import { Injectable } from '@angular/core';

@Injectable()
export class LibService {
  constructor() { }
  sayHello(name?: String) {
    return `Hello ${name || 'Stanger'}!`;
  }
}
