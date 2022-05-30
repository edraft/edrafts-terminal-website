import { TestBed } from '@angular/core/testing';

import { LanguageCommandService } from './language-command.service';

describe('LanguageCommandService', () => {
  let service: LanguageCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
