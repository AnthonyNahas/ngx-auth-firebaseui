import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'firebase';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material';
import {UserComponent} from '../../..';

@Component({
  selector: 'ngx-auth-firebaseui-avatar',
  templateUrl: './ngx-auth-firebaseui-avatar.component.html',
  styleUrls: ['./ngx-auth-firebaseui-avatar.component.scss']
})
export class NgxAuthFirebaseuiAvatarComponent implements OnInit {

  user: User;
  user$: Observable<User | null>;
  displayNameInitials: string;

  constructor(public afa: AngularFireAuth,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.user$ = this.afa.user;
    this.user$.subscribe((user: User) => {
      this.user = user;
      this.displayNameInitials = this.getDisplayNameInitials(user.displayName);
    });
  }

  getDisplayNameInitials(displayName: string): string {
    if (!displayName) {
      return null;
    }
    const initialsRegExp: RegExpMatchArray = displayName.match(/\b\w/g) || [];
    const initials = ((initialsRegExp.shift() || '') + (initialsRegExp.pop() || '')).toUpperCase();
    console.log(initials);
    return initials;
  }

  openProfile() {
    this.dialog.open(UserComponent);
  }
}
