import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject } from 'rxjs';


describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let authService: MockAddressService;
  let router: Router;

  class MockAddressService {
    authSubject = new Subject();
    isUserLoggedIn: boolean;
    loggedUser: any;
    router: Router;
    
    logout(): void {
      this.isUserLoggedIn = false;
      this.loggedUser = null;
      localStorage.removeItem('isUserLoggedIn');
      this.authSubject.next('');
      //this.router.navigate(['/login']);
     }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ NavBarComponent ],
      providers: [
        { provide: AuthService, useClass: MockAddressService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = new MockAddressService();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call auth service logout on logout', () => {
    component.logOut();    
    expect(localStorage.getItem('isUserLoggedIn')).toBeFalsy();
    expect(component.loggedIn).toBeFalsy();
  });
});
