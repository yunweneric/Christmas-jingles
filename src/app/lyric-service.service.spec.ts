import { TestBed } from '@angular/core/testing';

import { LyricServiceService } from './lyric-service.service';

describe('LyricServiceService', () => {
  let service: LyricServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LyricServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
