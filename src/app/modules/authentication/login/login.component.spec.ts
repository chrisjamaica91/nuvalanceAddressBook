import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuthService: AuthService;
  let router: Router;


  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj<AuthService>(
      'AuthService',
      {
        login: of(true)
      });
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ LoginComponent ],
      providers: [
        MessageService,
        { provide: AuthService, useValue: mockAuthService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form group', () => {
    component.createFormGroup();
    expect(component.formData).toBeTruthy();
  });

  it('should navigate to address book page if user has correct login', () => {
    const navigateSpy = spyOn(router,'navigate');
    const data = {username: 'admin', password: 'admin'};
    component.submitLogin(data);
    expect(navigateSpy).toHaveBeenCalledWith(['/addressBook']);
  });

  
});
