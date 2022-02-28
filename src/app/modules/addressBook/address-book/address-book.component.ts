import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../../services/address.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit {

  contactDialog = false;

  contacts: any[];

  contact: any;

  oldContactInfo: any;

  selectedContacts: any;

  submitted = false;

  loading = false;

  loggedUser: any;

  constructor(
    private addressService: AddressService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
    this.setContactList();
  }
  
  setContactList() {
    if (!this.addressService.contactList || this.addressService.contactList.length === 0) {
      this.loading = true;
      this.addressService.getContacts().subscribe(data => {
        console.log('Address Data: ', data);
        this.contacts = data.results;
        this.addressService.contactList = this.contacts;
        this.loggedUser = this.authService.loggedUser;
        this.loading = false;
      });
    } else {
      this.contacts = this.addressService.contactList;
      this.loggedUser = this.authService.loggedUser;
    }
  }

  deleteSelectedContacts() {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete the selected contacts?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.contacts = this.contacts.filter((val: any) => !this.selectedContacts.includes(val));
            this.selectedContacts = [];
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Contacts Deleted', life: 3000});
        }
    });
  }

  editContact(event?: Event, contact?: any) {
    if (event) {
      event.stopPropagation();
    }
    this.contact = {...contact};
    const oldinfo = contact;
    this.oldContactInfo = oldinfo;
    this.contactDialog = true;
  }

  deleteContact(event?: Event, contact?: any) {
    if (event) {
      event.stopPropagation();
    }
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + contact.name.first + ' ' + contact.name.last + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.contacts = this.contacts.filter((val: { login: any; }) => val.login.uuid !== contact.login.uuid);
            this.contact = {};
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Contact Deleted', life: 3000});
        }
    });
  }

  hideDialog() {
    this.contactDialog = false;
    this.submitted = false;
  }

  saveContact() {
    this.submitted = true;
    if (this.contact && this.contact.login.uuid) {
        this.contacts[this.findIndexById(this.contact.login.uuid)] = this.contact;
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Contact Updated', life: 3000});
        this.contacts = [...this.contacts];
        this.contactDialog = false;
        this.contact = undefined;
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].login.uuid === id) {
            index = i;
            break;
        }
    }

    return index;
  }
}
