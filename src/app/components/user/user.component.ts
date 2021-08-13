import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
})
export class UserComponent implements OnInit {
  user!: IUser;

  constructor() {}

  ngOnInit() {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'jodoe@aol.com',
    };
  }
}
