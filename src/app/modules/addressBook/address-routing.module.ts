import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressBookGuard } from 'src/app/guards/address-book.guard';
import { AddressBookComponent } from './address-book/address-book.component';
import { ContactDetailsComponent } from './address-book/contact-details/contact-details.component';


const routes: Routes = [
  { path: 'address-book', component: AddressBookComponent, canActivate: [AddressBookGuard] },
  { path: 'address-book/details/:id', component: ContactDetailsComponent, canActivate: [AddressBookGuard]},
  { path: '',   redirectTo: '/address-book', pathMatch: 'full' },
  { path: '**',   redirectTo: '/address-book', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressRoutingModule { }