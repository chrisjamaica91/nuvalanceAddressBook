import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressBookComponent } from './address-book/address-book.component';
import { AddressRoutingModule } from './address-routing.module';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ContactDetailsComponent } from './address-book/contact-details/contact-details.component';

@NgModule({
  declarations: [AddressBookComponent, ContactDetailsComponent],
  imports: [
    CommonModule,
    AddressRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    AddressBookComponent
  ]
})
export class AddressBookModule { }
