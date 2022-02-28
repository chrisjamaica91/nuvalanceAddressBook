import { TestBed } from '@angular/core/testing';
import { AddressService } from './address.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


describe('AddressServiceService', () => {
  let service: AddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AddressService,
      ]
    });
    service = TestBed.inject(AddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have get contacts function', () => {
    expect(service.getContacts).toBeTruthy();
  });

  it('should return contact list from api call', () => {
    let contacts: any[] = [];
 
    service.getContacts().subscribe(res => {
      contacts = res.results;
      expect(contacts.length).toBeGreaterThanOrEqual(1);
    });
  });
});
