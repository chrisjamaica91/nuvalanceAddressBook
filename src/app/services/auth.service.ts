import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userList = [
    {
      userName: 'root',
      password: 'root',
      permissions: {
        viewMoreDetails: false,
        delete: false,
        edit: true
      }
    },

    {
      userName: 'admin',
      password: 'admin',
      permissions: {
        viewMoreDetails: true,
        delete: true,
        edit: true
      }
    }
  ];

  authSubject = new Subject();

  constructor(private router: Router) { }

  isUserLoggedIn: boolean = false;
  loggedUser: any;

   login(userName: string, password: string): Observable<boolean> {
      this.isUserLoggedIn = this.authenticateUser(userName, password);
      localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");
      if (this.isUserLoggedIn) {
        this.loggedUser = this.findUser(userName);
      }

      return of(this.isUserLoggedIn).pipe(
          delay(300),
          tap(val => {
            this.authSubject.next(''); 
            console.log("Is User Authentication successful: " + val); 
          })
      );
   }

   logout(): void {
    this.isUserLoggedIn = false;
    this.loggedUser = null;
    localStorage.removeItem('isUserLoggedIn');
    this.authSubject.next(''); 
    this.router.navigate(['/login']);
   }

   authenticateUser(userName: string, password: string) {
     return this.userList.some(user => user.userName === userName && user.password === password);
   }

   findUser(userName: string) {
    return this.userList.find(user => user.userName === userName);
   }
}
