import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IUser } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: IUser = {
    firstName: '',
    lastName: '',
    email: '',
    image: 'https://i.pravatar.cc/',
    isActive: false,
    hide: true,
  };
  users!: IUser[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor() {}

  ngOnInit(): void {
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

    this.loaded = true;
  }

  addUser() {
    this.users.unshift(this.user);
    console.log(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      image: 'https://i.pravatar.cc/',
      isActive: false,
      hide: true,
    };
  }

  toggleHide(user: IUser) {
    user.hide = !user.hide;
  }

  onSubmit({ value, valid }: { value: IUser; valid: boolean }) {
    if (!valid) {
      console.log('form not valid');
    } else {
      value.image = 'https://i.pravatar.cc/';
      value.isActive = false;
      value.hide = true;
      this.users.unshift(value);
      this.form.reset();
    }
  }
}
