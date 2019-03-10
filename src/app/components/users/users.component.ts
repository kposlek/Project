import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: 'Karolina',
        lastName: 'Poslek',
        age: 34,
        address: {
          street: 'Landsberger Straße 133b',
          city: 'Munich',
          state: 'Germany'
        }
      },
      {
        firstName: 'Kristian',
        lastName: 'Poslek',
        age: 33,
        address: {
          street: 'Landsberger Straße 133b',
          city: 'Munich',
          state: 'Germany'
        }
      },
      {
        firstName: 'Ivana',
        lastName: 'Kukic',
        age: 34,
        address: {
          street: 'Stenjevecka 46',
          city: 'Zagreb',
          state: 'Croatia'
        }
      }
    ];
    this.loaded = true;

    this.addUser({
      firstName: 'Ivana',
      lastName: 'Malenica'
    });
  }
  addUser(user: User) {
    this.users.push(user);
  }
}
