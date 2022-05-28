import { TestBed } from '@angular/core/testing';

import { ClearCommandService } from './clear-command.service';

describe('ClearCommandService', () => {
  let service: ClearCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClearCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
