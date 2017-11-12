import { TestBed, inject } from '@angular/core/testing';

import { HitListService } from './hit-list.service';

describe('HitListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HitListService]
    });
  });

  it('should be created', inject([HitListService], (service: HitListService) => {
    expect(service).toBeTruthy();
  }));
});
