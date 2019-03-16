import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor() {}

  ngOnInit() {
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
    this.loaded = true;
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.users.unshift(value);
      this.form.reset();
    }
  }
}
