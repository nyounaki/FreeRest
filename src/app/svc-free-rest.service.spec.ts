import { TestBed, inject } from '@angular/core/testing';

import { SvcFreeRestService } from './svc-free-rest.service';
import {Restaurant} from './restaurant';

describe('SvcFreeRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SvcFreeRestService]
    });
  });

  it('should be created', inject([SvcFreeRestService], (service: SvcFreeRestService) => {
    expect(service).toBeTruthy();
  }));
});
