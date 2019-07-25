import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ExampleBaseComponent} from '../example.abstract';
import {LinkMenuItem} from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-example-avatar',
  templateUrl: 'avatar.component.html',
  styleUrls: ['avatar.component.scss']
})
export class AvatarComponent extends ExampleBaseComponent implements OnInit {

  links: LinkMenuItem[];


  example = `<ngx-auth-firebaseui-avatar [links]="links"></ngx-auth-firebaseui-avatar>`;

  exampleTS = `
  links: LinkMenuItem[];

   ngOnInit(): void {
    this.links = [
      {icon: 'home', text: 'Home', callback: this.printLog},
      {icon: 'favorite', text: 'Favorite', callback: this.printLog},
      {icon: 'add', text: 'Add', callback: this.printLog},
    ];
  }`;

  constructor(public snackBar: MatSnackBar) {
    super(snackBar);
  }

  onStrengthChanged($event: number) {
    console.log('on strength changed: ', $event);
  }

  ngOnInit(): void {
    this.links = [
      {icon: 'home', text: 'Home', callback: this.printLog},
      {icon: 'favorite', text: 'Favorite', callback: this.printLog},
      {icon: 'add', text: 'Add', callback: this.printLog},
    ];
  }

  printLog() {
    console.log('this is a log :D');
  }

}
