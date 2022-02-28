import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  contactList: any[] = [];

  constructor(private httpClient: HttpClient) { }

  getContacts(): Observable<any> {
    return this.httpClient.get("https://randomuser.me/api/?results=200&format=json");
  }
}
