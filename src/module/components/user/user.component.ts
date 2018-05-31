import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {MatSnackBar} from '@angular/material';
import {AuthProcessService} from '../../services/auth-process.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {EMAIL_REGEX, PHONE_NUMBER_REGEX} from '../auth/auth.component';
import {User} from 'firebase';
import {FirestoreSyncService} from '../../services/firestore-sync.service';

@Component({
  selector: 'ngx-auth-firebaseui-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  editMode: boolean;

  @Output()
  onAccountDeleted: EventEmitter<void> = new EventEmitter();

  updateFormGroup: FormGroup;
  updateNameFormControl: AbstractControl;
  updateEmailFormControl: AbstractControl;
  updatePhoneNumberFormControl: AbstractControl;
  updatePasswordFormControl: AbstractControl;

  constructor(public auth: AngularFireAuth,
              public authProcess: AuthProcessService,
              private _fireStoreService: FirestoreSyncService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  protected initUpdateFormGroup() {
    const currentUser: User = this.auth.auth.currentUser;
    this.updateFormGroup = new FormGroup({
      name: this.updateNameFormControl = new FormControl(
        {value: currentUser.displayName, disabled: true},
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ]
      ),

      email: this.updateEmailFormControl = new FormControl(
        {value: currentUser.email, disabled: true},
        [
          Validators.required,
          Validators.pattern(EMAIL_REGEX)
        ]),

      phoneNumber: this.updatePhoneNumberFormControl = new FormControl('',
        [Validators.pattern(PHONE_NUMBER_REGEX)])
    });

    this.updateFormGroup.enable();
  }

  changeEditMode() {
    this.editMode = !this.editMode;

    this.editMode ? this.initUpdateFormGroup() : this.reset();
  }

  reset() {
    this.updateFormGroup.reset();
    this.updateFormGroup.disable();
    this.updateFormGroup = null;
  }

  // todo: 31.3.18
  async save() {
    if (this.updateFormGroup.dirty) {
      const user = this.auth.auth.currentUser;
      // user.updateProfile()
      // user.updateEmail()
      console.log('form = ', this.updateFormGroup);

      const snackBarMsg: string[] = [];

      try {
        if (this.updateNameFormControl.dirty) {
          await user.updateProfile({displayName: this.updateNameFormControl.value, photoURL: null});
          snackBarMsg.push(`your name has been update to ${user.displayName}`);
        }

        if (this.updateEmailFormControl.dirty) {
          await user.updateEmail(this.updateEmailFormControl.value);
          snackBarMsg.push(`your email has been update to ${user.email}`);
        }

        if (this.updatePhoneNumberFormControl.dirty) {
          await user.updatePhoneNumber(this.updatePhoneNumberFormControl.value);
          console.log('phone number = ', this.updatePhoneNumberFormControl.value);
          snackBarMsg.push(`your phone number has been update to ${user.phoneNumber}`);
        }

        await this._fireStoreService.updateUserData(user.uid, user.providerData[0]);

      } catch (error) {
        error.message ? this.snackBar.open(error.message, 'Ok') : this.snackBar.open(error, 'Ok');
        console.error(error);
        console.error(error.code);
        console.error(error.message);
      }


      if (snackBarMsg.length > 0) {
        this.snackBar.open(snackBarMsg.join('\\n'), 'Ok');
      }
      // this.updateFormGroup.reset();
    }

    this.editMode = false;
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
      const user = this.auth.auth.currentUser;

      await this.authProcess.deleteAccount();
      await this._fireStoreService.deleteUserData(user.uid);
      this.onAccountDeleted.emit();
      this.editMode = false;
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
