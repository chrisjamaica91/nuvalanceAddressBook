import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookComponent } from './address-book.component';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AddressService } from 'src/app/services/address.service';

describe('AddressBookComponent', () => {
  let component: AddressBookComponent;
  let fixture: ComponentFixture<AddressBookComponent>;
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
                }
            ];

  let selectedContacts = [
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
      }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressBookComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        ConfirmationService,
        MessageService,
        AuthService,
        AddressService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookComponent);
    component = fixture.componentInstance;
    component.contacts = contacts;
    component.selectedContacts = selectedContacts;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should edit contact', () => {
    component.editContact(undefined, contact);
    expect(component.contact.location.city).toEqual('Boynton Beach');
  });

  it('should hide dialog modal', () => {
    component.hideDialog();
    expect(component.contactDialog).toEqual(false);
    expect(component.submitted).toEqual(false);
  });

  it('should update contact in contact list with new value', () => {
    component.contact = contact;
    component.saveContact();
    expect(component.contacts.pop().location.city).toEqual(contact.location.city);
  });

  it('should find the index of a contact in the contactList array when provided with the id', () => {
    component.contact = contact;
    const index = component.findIndexById(contact.login.uuid);
    expect(index).toEqual(0);
  });

  it('should set contactList array when provided with the id', () => {
    component.contact = contact;
    const index = component.findIndexById(contact.login.uuid);
    expect(index).toEqual(0);
  });  
  
});
