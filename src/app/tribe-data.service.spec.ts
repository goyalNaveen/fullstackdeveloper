import { TestBed } from '@angular/core/testing';

import { TribeDataService } from './tribe-data.service';

describe('TribeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TribeDataService = TestBed.get(TribeDataService);
    expect(service).toBeTruthy();
  });
});
