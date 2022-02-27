import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contact: any;

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private addressService: AddressService) { }

  ngOnInit(): void {
    const uuId = this.actRoute.snapshot.params['id'];
    this.setContact(uuId);
  }

  setContact(uuId: string) {
    this.contact = this.addressService.contactList.find(user => user.login.uuid === uuId);
    console.log('Found contact: ', this.contact);
  }

  navToAddress() {
    this.router.navigate(['/addressBook']);
  }

}
