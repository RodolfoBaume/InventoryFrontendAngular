import { TestBed } from '@angular/core/testing';

import { EstatusOrdenService } from './estatus-orden.service';

describe('EstatusOrdenService', () => {
  let service: EstatusOrdenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstatusOrdenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
