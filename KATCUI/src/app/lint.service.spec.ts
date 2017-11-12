import { TestBed, inject } from '@angular/core/testing';

import { LintService } from './lint.service';

describe('LintService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LintService]
    });
  });

  it('should be created', inject([LintService], (service: LintService) => {
    expect(service).toBeTruthy();
  }));
});
