import { Injectable } from '@angular/core';

import { IUser } from './../models/User';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  users: IUser[];

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

  getUsers(): IUser[] {
    console.log('Fetching users from data service');
    return this.users;
  }

  addUser(user: IUser) {
    this.users.unshift(user);
  }
}
