import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {MatSnackBar} from '@angular/material';
import {AuthProcessService} from '../../services/auth-process.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {EMAIL_REGEX} from '../auth/auth.component';
import {User} from 'firebase';

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
  updatePasswordFormControl: AbstractControl;

  constructor(public auth: AngularFireAuth,
              public authProcess: AuthProcessService,
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
          Validators.maxLength(30),
        ]
      ),

      email: this.updateEmailFormControl = new FormControl(
        {value: currentUser.email, disabled: true},
        [
          Validators.required,
          Validators.pattern(EMAIL_REGEX)
        ]),
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
  save() {
    const user = this.auth.auth.currentUser;
    // user.updateProfile()
    // user.updateEmail()
    console.log('form = ', this.updateFormGroup);
    this.snackBar.open('Sorry! This feature is under development', 'Ok');
    // this.updateFormGroup.reset();
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
