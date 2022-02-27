import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  items: MenuItem[];

  loggedIn = localStorage.getItem('isUserLoggedIn') === 'true';

  ngOnInit() {
    this.items = [
        {
            label:'About',
            icon:'pi pi-fw pi-file',
        },
        {
            label:'Edit',
            icon:'pi pi-fw pi-pencil',
        },
        {
            label:'Users',
            icon:'pi pi-fw pi-user'
        }
    ];

    this.authService.authSubject.subscribe(() => {
      this.loggedIn = localStorage.getItem('isUserLoggedIn') === 'true';
    });
  }
  
  logOut() {
    this.authService.logout();
  }

}
