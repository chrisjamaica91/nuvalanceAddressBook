import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should successfully login in user with correct credentials', () => {
    let isUserLoggedIn = false;
    service.login('admin', 'admin').subscribe(res => {
      isUserLoggedIn = res;
      expect(isUserLoggedIn).toEqual(true);
    });
  });

  it('should unsuccessfully login in user with incorrect credentials', () => {
    let isUserLoggedIn = true;
    service.login('admin', 'adm').subscribe(res => {
      isUserLoggedIn = res;
      expect(isUserLoggedIn).toEqual(false);
    });
  });

});
