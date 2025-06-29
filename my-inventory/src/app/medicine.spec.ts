import { TestBed } from '@angular/core/testing';

import { Medicine } from './medicine';

describe('Medicine', () => {
  let service: Medicine;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Medicine);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
