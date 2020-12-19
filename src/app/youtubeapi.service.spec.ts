import { TestBed } from '@angular/core/testing';

import { YoutubeapiService } from './youtubeapi.service';

describe('YoutubeapiService', () => {
  let service: YoutubeapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
