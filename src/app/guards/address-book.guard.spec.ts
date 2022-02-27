import { TestBed } from '@angular/core/testing';

import { AddressBookGuard } from './address-book.guard';

describe('AddressBookGuard', () => {
  let guard: AddressBookGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AddressBookGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
