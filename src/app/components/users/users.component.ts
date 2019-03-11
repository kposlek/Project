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
  currentClasses = {};
  currentStyles = {};

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
        image: 'http://lorempixel.com/600/600/people/3',
        isActive: true,
        balance: 100,
        registered: new Date('01/02/2018 08:30:00')
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
        image: 'http://lorempixel.com/600/600/people/2',
        isActive: false,
        balance: 200,
        registered: new Date('03/11/2017 06:20:00')
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
        image: 'http://lorempixel.com/600/600/people/1',
        isActive: true,
        balance: 50,
        registered: new Date('11/02/2016 10:30:00')
      }
    ];
    this.loaded = true;

    // this.addUser({
    //   firstName: 'Ivana',
    //   lastName: 'Malenica'
    // });
    this.setCurrentClasses();
    this.setCurrentStyles();
  }
  addUser(user: User) {
    this.users.push(user);
  }
  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    };
  }
  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    };
  }
}
