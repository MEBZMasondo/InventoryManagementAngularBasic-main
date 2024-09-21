import { TestBed } from '@angular/core/testing';

import { DataholderService } from './dataholder.service';

describe('DataholderService', () => {
  let service: DataholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
