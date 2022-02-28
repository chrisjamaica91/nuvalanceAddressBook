import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressService } from 'src/app/services/address.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactDetailsComponent } from './contact-details.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';


describe('ContactDetailsComponent', () => {
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;
  let mockAddressService: AddressService;
  let router:Router;

  let contact =  {
    cell: '444',
    dob: {
      age: 78,
      date: '2020-12-09'
    },
    email: 'asd@google.com',
    gender: 'male',
    id: {
      name: 'BSN',
      value: '24546'
    },
    location: {
      city: 'Boynton Beach',
      country: 'Ireland',
      postcode: 36556,
      state: 'Zeeland',
      street: {
        number: 235,
        name: 'gisse'
      }
    },
      login: {
        uuid: '4tihwpy4p8',
        username: 'chasev'
      },
      name: {
        first: 'Eltjo',
        last: 'Koorn'
      },
      picture: {
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/22.jpg"
      }
  };

  let contacts = [
    {
      cell: '444',
      dob: {
        age: 78,
        date: '2020-12-09'
      },
      email: 'asd@google.com',
      gender: 'male',
      id: {
        name: 'BSN',
        value: '24546'
      },
      location: {
        city: 'Chicago',
        country: 'Ireland',
        postcode: 36556,
        state: 'Zeeland',
        street: {
          number: 235,
          name: 'gisse'
        }
      },
        login: {
          uuid: '4tihwpy4p8',
          username: 'chasev'
        },
        name: {
          first: 'Eltjo',
          last: 'Koorn'
        },
        picture: {
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/22.jpg"
        }
      },

      {
        cell: '444',
        dob: {
          age: 78,
          date: '2020-12-09'
        },
        email: 'asd@google.com',
        gender: 'male',
        id: {
          name: 'BSN',
          value: '24546'
        },
        location: {
          city: 'Chicago',
          country: 'Ireland',
          postcode: 36556,
          state: 'Zeeland',
          street: {
            number: 235,
            name: 'gisse'
          }
        },
          login: {
            uuid: '888888',
            username: 'chasev'
          },
          name: {
            first: 'Eltjo',
            last: 'Koorn'
          },
          picture: {
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/22.jpg"
          }
        }
  ];


  beforeEach(async () => {
    mockAddressService = jasmine.createSpyObj<AddressService>(
      'AddressService',
      {
      getContacts: of(contacts)
    });

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ ContactDetailsComponent ],
      providers: [
        { provide: AddressService, useValue: mockAddressService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    component.contact = contact;
    expect(component).toBeTruthy();
  });

  it('should set contact with found value from addressService contactlist', () => {
    mockAddressService.contactList = contacts;
    component.setContact('4tihwpy4p8');
    expect(component.contact.login.uuid).toEqual('4tihwpy4p8');
  });

  it('should navigate to address book page', () => {
    const navigateSpy = spyOn(router,'navigate');
    component.navToAddress();
    expect(navigateSpy).toHaveBeenCalledWith(['/addressBook']);
  });
});
