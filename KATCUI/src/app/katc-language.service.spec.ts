import { TestBed, inject } from '@angular/core/testing';

import { KATClanguageService } from './katc-language.service';

describe('KATCLanguageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KATCLanguageService]
    });
  });

  it('should be created', inject([KATCLanguageService], (service: KATCLanguageService) => {
    expect(service).toBeTruthy();
  }));
});
