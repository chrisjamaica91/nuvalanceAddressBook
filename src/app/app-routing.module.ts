import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/authentication/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    loadChildren: () => import('./modules/addressBook/address-book.module')
        .then(m => m.AddressBookModule)
  },
  {
    path: 'address-book',
    loadChildren: () => import('./modules/addressBook/address-book.module')
        .then(m => m.AddressBookModule)
  },
  {
    path: '**',
    loadChildren: () => import('./modules/addressBook/address-book.module')
        .then(m => m.AddressBookModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
