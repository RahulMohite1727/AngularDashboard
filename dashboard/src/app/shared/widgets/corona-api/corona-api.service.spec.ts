import { TestBed } from '@angular/core/testing';

import { CoronaApiService } from './corona-api.service';

describe('CoronaApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoronaApiService = TestBed.get(CoronaApiService);
    expect(service).toBeTruthy();
  });
});
