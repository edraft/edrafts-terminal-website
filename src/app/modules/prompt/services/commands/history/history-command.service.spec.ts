import { TestBed } from '@angular/core/testing';

import { HistoryCommandService } from './history-command.service';

describe('HistoryCommandService', () => {
  let service: HistoryCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
