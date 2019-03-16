import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  //   template: '<h2>John Doe</h2>'
  styleUrls: ['./user.component.css']
  //   styles: [
  //     `
  //       h2 {
  //         color: blue;
  //       }
  //     `
  //   ]
})
export class UserComponent implements OnInit {
  // Properties
  user: User;
  //   firstName: string;
  //   lastName: string;
  //   age: number;
  //   address;
  //   foo: any;
  //   hasKids: boolean;
  //   numberArray: number[];
  //   stringArray: string[];
  //   mixedArray: any[];
  //   myTuple: [string, number, boolean];
  //   unusable: void;
  //   u: undefined;
  //   n: null;

  // Methods
  constructor() {
    // this.firstName = 'Karolina';
    // this.lastName = 'Poslek';
    // this.age = 34;
    // this.address = {
    //   street: 'Landsberger str.133B',
    //   city: 'München',
    //   state: 'DE'
    // };
    // this.foo = true;
    // this.hasKids = true;
    // this.numberArray = [1, 2, 3, 4];
    // this.stringArray = ['foo', 'moo', 'zoo'];
    // this.mixedArray = ['hello', undefined, 4, true];
    // this.myTuple = ['lala', 5, false];
    // this.unusable = undefined;
    // this.u = undefined;
    // this.n = null;
  }
  ngOnInit() {
    this.user = {
      firstName: 'Karolina',
      lastName: ' Poslek',
      email: 'karolina@poslek.com'
    };
  }
}
//   showAge() {
//     return this.age;
//   }
//   addNumbers(num1: number, num2: number): number {
//     return num1 + num2;
//   }
