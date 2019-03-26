import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];

  constructor() {
    this.users = [
      {
        firstName: 'Karolina',
        lastName: 'Poslek',
        email: 'karolina@poslek.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kristian',
        lastName: 'Poslek',
        email: 'kristian@poslek.com',

        isActive: false,
        registered: new Date('03/11/2017 06:20:00'),
        hide: true
      },
      {
        firstName: 'Ivana',
        lastName: 'Kukic',
        email: 'ivana.kukic@gmail.com',

        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true
      }
    ];
  }
  getUsers(): User[] {
    console.log('Fetching users from service...');
    return this.users;
  }
}
