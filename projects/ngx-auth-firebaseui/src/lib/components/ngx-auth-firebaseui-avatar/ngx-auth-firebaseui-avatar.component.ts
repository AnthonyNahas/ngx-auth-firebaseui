import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from "firebase/app";
import { Observable } from "rxjs";
import { take } from 'rxjs/operators';
import { MatDialog } from "@angular/material/dialog";
import { UserComponent } from "..";
import { AuthProcessService } from "../../services/auth-process.service";

export interface LinkMenuItem {
  text: string;
  icon?: string;
  // tslint:disable-next-line:ban-types
  callback?: Function;
}

@Component({
  selector: "ngx-auth-firebaseui-avatar",
  templateUrl: "./ngx-auth-firebaseui-avatar.component.html",
  styleUrls: ["./ngx-auth-firebaseui-avatar.component.scss"],
})
export class NgxAuthFirebaseuiAvatarComponent implements OnInit {
  @Input()
  layout: "default" | "simple" = "default";

  @Input()
  canLogout = true;

  @Input()
  links: LinkMenuItem[];

  @Input()
  canViewAccount = true;

  @Input()
  canDeleteAccount = true;

  @Input()
  canEditAccount = true;

  @Input()
  textProfile = "Profile";

  @Input()
  textSignOut = "Sign Out";

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onSignOut: EventEmitter<void> = new EventEmitter();

  user: firebase.User;
  user$: Observable<firebase.User | null>;
  displayNameInitials: string | null;

  constructor(public afa: AngularFireAuth, public dialog: MatDialog, private authProcess: AuthProcessService) {}

  ngOnInit() {
    this.user$ = this.afa.user;
    this.user$.subscribe((user: firebase.User) => {
      this.user = user;
      this.displayNameInitials = user
        ? this.getDisplayNameInitials(user.displayName)
        : null;
    });
  }

  getDisplayNameInitials(displayName: string | null): string | null {
    if (!displayName) {
      return null;
    }
    const initialsRegExp: RegExpMatchArray = displayName.match(/\b\w/g) || [];
    const initials = (
      (initialsRegExp.shift() || "") + (initialsRegExp.pop() || "")
    ).toUpperCase();
    return initials;
  }

  openProfile() {
    const dialogRef = this.dialog.open(UserComponent);
    const instance = dialogRef.componentInstance;
    instance.canDeleteAccount = this.canDeleteAccount;
    instance.canEditAccount = this.canEditAccount;
    instance
    .onSignOut
    .pipe(
      take(1)
      ).subscribe(_ => this.onSignOut.emit()); // propagate the onSignout event
    instance
    .onAccountEdited
    .pipe(
      take(1)
    ).subscribe(_ => this.displayNameInitials = this.getDisplayNameInitials(this.authProcess.user.displayName)) // update display name initials?
  }

  async signOut() {
    try {
      await this.afa.signOut();
      // Sign-out successful.
      this.onSignOut.emit();
    } catch (e) {
      // An error happened.
      console.error("An error happened while signing out!", e);
    }
  }
}
