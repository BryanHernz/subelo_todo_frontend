import { TestBed } from '@angular/core/testing';

import { FrequentService } from './frequent.service';

describe('FrequentService', () => {
  let service: FrequentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrequentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
