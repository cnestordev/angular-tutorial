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
        image: 'http://lorempixel.com/600/600/people/3',
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
        image: 'http://lorempixel.com/600/600/people/3',
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
      },
    ];

    this.loaded = true;
  }

  addUser(user: IUser) {
    this.users.push(user);
  }
}
