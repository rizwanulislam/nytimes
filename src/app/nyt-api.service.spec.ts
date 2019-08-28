import { TestBed } from '@angular/core/testing';

import { NytApiService } from './nyt-api.service';

describe('NytApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NytApiService = TestBed.get(NytApiService);
    expect(service).toBeTruthy();
  });
});
