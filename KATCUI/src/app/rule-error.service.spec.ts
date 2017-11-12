import { TestBed, inject } from '@angular/core/testing';

import { RuleErrorService } from './rule-error.service';

describe('RuleErrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RuleErrorService]
    });
  });

  it('should be created', inject([RuleErrorService], (service: RuleErrorService) => {
    expect(service).toBeTruthy();
  }));
});
