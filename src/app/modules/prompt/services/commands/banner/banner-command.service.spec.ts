import { TestBed } from '@angular/core/testing';

import { BannerCommandService } from './banner-command.service';

describe('BannerCommandService', () => {
  let service: BannerCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
