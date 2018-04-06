import { TestBed, inject } from '@angular/core/testing';

import { StepManagerService } from './step-manager.service';

describe('StepManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StepManagerService]
    });
  });

  it('should be created', inject([StepManagerService], (service: StepManagerService) => {
    expect(service).toBeTruthy();
  }));
});
