import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {MatSnackBar} from '@angular/material';
import {AuthProcessService} from '../../services/auth-process.service';

@Component({
  selector: 'ngx-auth-firebaseui-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Output()
  onAccountDeleted: EventEmitter<void> = new EventEmitter();

  editMode: boolean;

  constructor(public auth: AngularFireAuth,
              public authProcess: AuthProcessService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  // todo: 31.3.18
  save() {
    const user = this.auth.auth.currentUser;
    // user.updateProfile()
    // user.updateEmail()
    this.snackBar.open('Sorry! This feature is under development', 'Ok');
  }

  /**
   * Delete the account of the current firebase user
   *
   * On Success, emit the <onAccountDeleted> event and toast a msg!#
   * Otherwise, log the and toast and error msg!
   *
   */
  async deleteAccount() {
    try {
      await this.authProcess.deleteAccount();
      this.onAccountDeleted.emit();
      this.snackBar.open('Your account has been successfully deleted!', 'OK', {
        duration: 5000
      })
    } catch (error) {
      console.log('Error while delete user\'s account', error);
      this.snackBar.open('Error occurred while deleting your account!', 'OK', {
        duration: 5000
      })
    }
  }
}
