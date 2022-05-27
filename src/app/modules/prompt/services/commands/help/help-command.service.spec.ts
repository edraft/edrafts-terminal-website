import { TestBed } from '@angular/core/testing';

import { HelpCommandService } from './help-command.service';

describe('HelpCommandService', () => {
  let service: HelpCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
