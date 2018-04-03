import { TestBed, inject } from '@angular/core/testing';

import { LibService } from './lib.service';

describe('LibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibService]
    });
  });

  it('should create service', inject([LibService], (service: LibService) => {
    expect(service).toBeTruthy();
  }));

  it('should say hello to stranger', inject([LibService], (service: LibService) => {
    expect(service.sayHello()).toBe('Hello Stanger!');
  }));

 it('should say hello to provided user', inject([LibService], (service: LibService) => {
    expect(service.sayHello('ng-hacker')).toBe('Hello ng-hacker!');
  }));
});
