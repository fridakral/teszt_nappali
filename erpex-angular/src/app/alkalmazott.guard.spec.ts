import { TestBed } from '@angular/core/testing';

import { AlkalmazottGuard } from './alkalmazott.guard';

describe('AlkalmazottGuard', () => {
  let guard: AlkalmazottGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AlkalmazottGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
