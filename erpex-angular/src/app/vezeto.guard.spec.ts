import { TestBed } from '@angular/core/testing';

import { VezetoGuard } from './vezeto.guard';

describe('VezetoGuard', () => {
  let guard: VezetoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VezetoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
