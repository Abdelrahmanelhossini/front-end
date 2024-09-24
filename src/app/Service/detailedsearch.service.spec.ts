import { TestBed } from '@angular/core/testing';

import { DetailedsearchService } from './detailedsearch.service';

describe('DetailedsearchService', () => {
  let service: DetailedsearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailedsearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
