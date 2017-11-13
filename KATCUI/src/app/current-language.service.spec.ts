import { TestBed, inject } from '@angular/core/testing';

import { CurrentLanguageService } from './current-language.service';

describe('CurrentLanguageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentLanguageService]
    });
  });

  it('should be created', inject([CurrentLanguageService], (service: CurrentLanguageService) => {
    expect(service).toBeTruthy();
  }));
});
