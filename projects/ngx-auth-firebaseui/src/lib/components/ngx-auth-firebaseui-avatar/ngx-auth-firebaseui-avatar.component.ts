import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Observable } from "rxjs";
import { take } from 'rxjs/operators';
import { MatDialog } from "@angular/material/dialog";
import { UserComponent } from "..";
import { AuthProcessService } from "../../services/auth-process.service";
import { Auth, user, User } from "@angular/fire/auth";

export interface LinkMenuItem {
  text: string;
  icon?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
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

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output()
  onSignOut: EventEmitter<void> = new EventEmitter();

  user: User;
  user$: Observable<User | null>;
  displayNameInitials: string | null;

  constructor(public afa: Auth, public dialog: MatDialog, private authProcess: AuthProcessService) {}

  ngOnInit() {
    this.user$ = user(this.afa);
    this.user$.subscribe((user: User) => {
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
    const initialsRegExp: RegExpMatchArray = (displayName.match(/\b\w/g) || []) as RegExpMatchArray;
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
