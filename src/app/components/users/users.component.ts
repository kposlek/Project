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
  enableAdd: boolean = true;
  showUserForm: boolean = false;

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
        },

        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kristian',
        lastName: 'Poslek',
        age: 33,
        address: {
          street: 'Landsberger Straße 133b',
          city: 'Munich',
          state: 'Germany'
        },

        isActive: false,
        registered: new Date('03/11/2017 06:20:00'),
        hide: true
      },
      {
        firstName: 'Ivana',
        lastName: 'Kukic',
        age: 34,
        address: {
          street: 'Stenjevecka 46',
          city: 'Zagreb',
          state: 'Croatia'
        },

        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true
      }
    ];
    this.loaded = true;
  }
  addUser(user: User) {
    this.users.push(user);
  }
  //   fireEvent(e) {
  //     // console.log('Button Clicked');
  //     console.log(e.type);
  //   }
  //   toggleHide(user: User) {
  //     user.hide = !user.hide;
  //   }
  onSubmit(e) {
    console.log(123);
    e.preventDefault();
  }
  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value);
  }
}
