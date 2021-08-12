import { Component, OnInit } from '@angular/core';

import { IUser } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users!: IUser[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 20,
        address: {
          street: '123 Fake St',
          city: 'Boston',
          state: 'MA',
        },
        image: 'https://i.pravatar.cc/',
        isActive: true,
      },
      {
        firstName: 'Jane',
        lastName: 'Dane',
        age: 22,
        address: {
          street: '242 Not Real St',
          city: 'Dallas',
          state: 'TX',
        },
        image: 'https://i.pravatar.cc/',
        isActive: false,
      },
      {
        firstName: 'Steve',
        lastName: 'Stevenson',
        age: 30,
        address: {
          street: '55 Real St',
          city: 'Miami',
          state: 'FL',
        },
        isActive: true,
      },
    ];

    this.loaded = true;
  }

  addUser(user: IUser) {
    this.users.push(user);
  }
}
