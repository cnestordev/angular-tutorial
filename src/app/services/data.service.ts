import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IUser } from './../models/User';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  users: IUser[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@aol.com',
        image: 'https://i.pravatar.cc/',
        isActive: false,
        hide: true,
      },
      {
        firstName: 'Jane',
        lastName: 'Dane',
        email: 'janedane@aol.com',
        image: 'https://i.pravatar.cc/',
        isActive: false,
        hide: true,
      },
      {
        firstName: 'Steve',
        lastName: 'Stevenson',
        email: 'SS@aol.com',
        isActive: false,
        hide: true,
      },
    ];
  }

  getData() {
    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 2000);

      setTimeout(() => {
        observer.next(2);
      }, 3000);

      setTimeout(() => {
        observer.next({ name: 'Nestor' });
      }, 4000);
    });
    return this.data;
  }

  getUsers(): Observable<IUser[]> {
    console.log('Fetching users from data service');
    return of(this.users);
  }

  addUser(user: IUser) {
    this.users.unshift(user);
  }
}
