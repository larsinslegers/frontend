import { TestBed } from '@angular/core/testing';

import { PlankDataService } from './plank-data.service';

describe('PlankDataService', () => {
  let service: PlankDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlankDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
