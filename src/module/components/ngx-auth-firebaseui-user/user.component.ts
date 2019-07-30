import {Component, EventEmitter, Inject, Input, Output, forwardRef} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {MatFormFieldAppearance, MatSnackBar} from '@angular/material';
import {AuthProcessService} from '../../services/auth-process.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EMAIL_REGEX, PHONE_NUMBER_REGEX} from '../ngx-auth-firebaseui/auth.component';
import {User} from 'firebase';
import {FirestoreSyncService} from '../../services/firestore-sync.service';
import {NgxAuthFirebaseUIConfig, NgxAuthFirebaseUIConfigToken} from '../../ngx-auth-firebase-u-i.module';

@Component({
  selector: 'ngx-auth-firebaseui-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  @Input()
  editMode: boolean;

  @Input()
  canLogout = true;

  @Input()
  canEditAccount = true;

  @Input()
  canDeleteAccount = true;

  @Input()
  appearance: MatFormFieldAppearance;

  @Output()
  onSignOut: EventEmitter<void> = new EventEmitter();

  @Output()
  onAccountEdited: EventEmitter<void> = new EventEmitter();

  @Output()
  onAccountDeleted: EventEmitter<void> = new EventEmitter();

  updateFormGroup: FormGroup;
  updateNameFormControl: FormControl;
  updateEmailFormControl: FormControl;
  updatePhoneNumberFormControl: FormControl;
  updatePasswordFormControl: FormControl;

  constructor(
    public auth: AngularFireAuth,
    public authProcess: AuthProcessService,
    private _fireStoreService: FirestoreSyncService,
    private snackBar: MatSnackBar,
    @Inject(forwardRef(() => NgxAuthFirebaseUIConfigToken)) public config: NgxAuthFirebaseUIConfig
  ) { }

  protected initUpdateFormGroup() {
    const currentUser: User = this.auth.auth.currentUser;
    this.updateFormGroup = new FormGroup({
      name: this.updateNameFormControl = new FormControl(
        { value: currentUser.displayName, disabled: this.editMode },
        [
          Validators.required,
          Validators.minLength(this.config.nameMinLength),
          Validators.maxLength(this.config.nameMaxLength)
        ]
      ),

      email: this.updateEmailFormControl = new FormControl(
        {value: currentUser.email, disabled: this.editMode},
        [
          Validators.required,
          Validators.pattern(EMAIL_REGEX)
        ]),

      phoneNumber: this.updatePhoneNumberFormControl = new FormControl(
        {value: currentUser.phoneNumber, disabled: this.editMode},
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

  async save() {
    if (this.updateFormGroup.dirty) {
      const user = this.auth.auth.currentUser;
      // ngx-auth-firebaseui-user.updateProfile()
      // ngx-auth-firebaseui-user.updateEmail()
      // console.log('form = ', this.updateFormGroup);

      const snackBarMsg: string[] = [];

      try {
        if (this.updateNameFormControl.dirty) {
          await user.updateProfile({displayName: this.updateNameFormControl.value, photoURL: null});
          snackBarMsg.push(`your name has been updated to ${user.displayName}`);
        }

        if (this.updateEmailFormControl.dirty) {
          await user.updateEmail(this.updateEmailFormControl.value);
          snackBarMsg.push(`your email has been updated to ${user.email}`);
        }

        if (this.updatePhoneNumberFormControl.dirty) {
          await user.updatePhoneNumber(this.updatePhoneNumberFormControl.value);
          console.log('phone number = ', this.updatePhoneNumberFormControl.value);
          snackBarMsg.push(`your phone number has been updated to ${user.phoneNumber}`);
        }

        if (this.config.enableFirestoreSync) {
          await this._fireStoreService.updateUserData(this.authProcess.parseUserInfo(user));
        }

      } catch (error) {
        error.message ? this.snackBar.open(error.message, 'Ok') : this.snackBar.open(error, 'Ok');
        console.error(error);
      }


      if (snackBarMsg.length > 0) {
        this.snackBar.open(snackBarMsg.join('\\n'), 'Ok');
      }
      // this.updateFormGroup.reset();
    }

    this.editMode = false;
  }

  signOut() {
    this.auth.auth.signOut()
      .then(() => this.onSignOut.emit())
      .catch(e => console.error('An error happened while signing out!', e));
  }

  /**
   * Delete the account of the current firebase ngx-auth-firebaseui-user
   *
   * On Success, emit the <onAccountDeleted> event and toast a msg!#
   * Otherwise, log the and toast and error msg!
   *
   */
  async deleteAccount() {
    try {
      const user = this.auth.auth.currentUser;

      // await this.authProcess.deleteAccount();
      await this.auth.auth.currentUser.delete();
      // if (this.config.enableFirestoreSync) {
      await this._fireStoreService.deleteUserData(user.uid);
      // }
      this.onAccountDeleted.emit();
      this.editMode = false;
      console.log('Your account has been successfully deleted!');
      this.snackBar.open('Your account has been successfully deleted!', 'OK', {
        duration: 5000
      })
    } catch (error) {
      console.log('Error while delete user account', error);
      this.snackBar.open(`Error occurred while deleting your account: ${error.message}`, 'OK', {
        duration: 5000
      })
    }
  }
}
