import { TestBed } from '@angular/core/testing';
import { AddressBookGuard } from './address-book.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

describe('AddressBookGuard', () => {
  let guard: AddressBookGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(AddressBookGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true for canActivate when user is logged in', () => {
    localStorage.setItem('isUserLoggedIn', 'true');
    const result = guard.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{url: '/address-book'});
    expect(result).toBe(true);
  });

  it('should return /login route from canActivate when user is not logged in', () => {
    localStorage.setItem('isUserLoggedIn', 'false');
    const result = guard.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{url: '/address-book'});
    expect(result.toString()).toBe('/login');
  });
});
