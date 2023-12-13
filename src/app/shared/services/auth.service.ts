import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }
  loggedIn = true;
  logIn() {
    this.loggedIn = true;
  }
  logOut() {
    this.loggedIn = false;
  }

  isAdmin() {
    const isUserAdmin = new Promise((resolve, reject) => { resolve(this.loggedIn); })
    return isUserAdmin;
  }

}
