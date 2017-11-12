import { TestBed, inject } from '@angular/core/testing';

import { KatclanguageService } from './katclanguage.service';

describe('KatclanguageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KatclanguageService]
    });
  });

  it('should be created', inject([KatclanguageService], (service: KatclanguageService) => {
    expect(service).toBeTruthy();
  }));
});
