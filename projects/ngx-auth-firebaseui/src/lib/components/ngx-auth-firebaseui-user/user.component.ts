import {
  Component,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  Output,
} from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import firebase from "firebase/app";
import { EMAIL_REGEX, PHONE_NUMBER_REGEX } from "..";
import { MatFormFieldAppearance } from "@angular/material/form-field";
import { NgxAuthFirebaseUIConfigToken } from "../../tokens";
import { NgxAuthFirebaseUIConfig } from "../../interfaces";
import { AuthProcessService } from "../../services/auth-process.service";
import { FirestoreSyncService } from "../../services/firestore-sync.service";
import { map, take } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "ngx-auth-firebaseui-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent {
  @Input() editMode: boolean;
  @Input() canLogout = true;
  @Input() canEditAccount = true;
  @Input() canDeleteAccount = true;
  @Input() appearance: MatFormFieldAppearance;

  // i18n commons
  @Input() notLoggedInText = "You are not logged in!";
  @Input() emailVerifiedText = "email is verified";
  @Input() emailNotVerifiedText = "email is not verified";
  @Input() cancelButtonText = "cancel";
  @Input() saveChangesButtonText = "Save changes";
  @Input() editButtonText = "edit";
  @Input() signoutButtonText = "Sign out";
  @Input() deleteAccountButtonText = "Delete account";

  //i18n name
  @Input() nameText = "Name";
  @Input() nameErrorRequiredText = "Name is required";

  // i18n email
  @Input() emailText = "Email";
  @Input() emailErrorRequiredText = "Email is required";
  @Input() emailErrorPatternText = "Please enter a valid email address";

  // i18n phone
  @Input() phoneText = "Phone number";
  @Input() phoneHintText = `
    The phone number is international. Therefore, it should start with a + sign or 00,
    followed by the country code, - and national number e.g: +49-12345678 or 0041-1234567890

      NOTE : the phone number must be a valid phone credential !!`;
  @Input() phoneErrorPatternText = "Please enter a valid phone number";

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSignOut: EventEmitter<void> = new EventEmitter();

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAccountEdited: EventEmitter<void> = new EventEmitter();

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAccountDeleted: EventEmitter<void> = new EventEmitter();

  updateFormGroup: FormGroup;
  updateNameFormControl: FormControl;
  updateEmailFormControl: FormControl;
  updatePhoneNumberFormControl: FormControl;

  constructor(
    public auth: AngularFireAuth,
    public authProcess: AuthProcessService,
    private fireStoreService: FirestoreSyncService,
    @Inject(forwardRef(() => NgxAuthFirebaseUIConfigToken))
    public config: NgxAuthFirebaseUIConfig
  ) {}

  changeEditMode() {
    if (this.editMode) {
      this.reset();
      this.editMode = false;
    } else {
      this.initUpdateFormGroup().subscribe((updateFormGroup: FormGroup) => {
        this.updateFormGroup = updateFormGroup;
        this.editMode = true;
      });
    }
  }

  reset() {
    this.updateFormGroup.reset();
    this.updateFormGroup.disable();
    this.updateFormGroup = null;
  }

  async save() {
    if (this.updateFormGroup.dirty) {
      this.editMode = false;
      const user = this.authProcess.user;
      // ngx-auth-firebaseui-user.updateProfile()
      // ngx-auth-firebaseui-user.updateEmail()
      // console.log('form = ', this.updateFormGroup);

      const snackBarMsg: string[] = [];

      try {
        if (this.updateNameFormControl.dirty) {
          await user.updateProfile({
            displayName: this.updateNameFormControl.value,
          });
          snackBarMsg.push(`your name has been updated to ${user.displayName}`);
        }

        if (this.updateEmailFormControl.dirty) {
          await user.updateEmail(this.updateEmailFormControl.value);
          snackBarMsg.push(`your email has been updated to ${user.email}`);
        }

        if (this.updatePhoneNumberFormControl.dirty) {
          await user.updatePhoneNumber(this.updatePhoneNumberFormControl.value);
          console.log(
            "phone number = ",
            this.updatePhoneNumberFormControl.value
          );
          snackBarMsg.push(
            `your phone number has been updated to ${user.phoneNumber}`
          );
        }

        if (this.config.enableFirestoreSync) {
          await this.fireStoreService.updateUserData(
            this.authProcess.parseUserInfo(user)
          );
        }
      } catch (error) {
        this.authProcess.showToast(
          error && error.message ? error.message : error
        );
        console.error(error);
      }

      if (snackBarMsg.length > 0) {
        this.authProcess.showToast(snackBarMsg.join("\\n"));
      }
      this.onAccountEdited.emit(); // emit event if the form was dirty
      this.updateFormGroup.reset();
    }
  }

  signOut() {
    this.auth
      .signOut()
      .then(() => this.onSignOut.emit())
      .catch((e) => console.error("An error happened while signing out!", e));
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
      const user = this.authProcess.user;

      // await this.authProcess.deleteAccount();
      await this.authProcess.user.delete();
      // if (this.config.enableFirestoreSync) {
      await this.fireStoreService.deleteUserData(user.uid);
      // }
      this.onAccountDeleted.emit();
      this.editMode = false;
      console.log("Your account has been successfully deleted!");
      this.authProcess.showToast("Your account has been successfully deleted!");
    } catch (error) {
      console.log("Error while delete user account", error);
      this.authProcess.showToast(
        `Error occurred while deleting your account: ${error.message}`
      );
    }
  }

  protected initUpdateFormGroup(): Observable<FormGroup> {
    return this.authProcess.user$.pipe(
      take(1),
      map((currentUser: firebase.User) => {
        const updateFormGroup = new FormGroup({
          name: this.updateNameFormControl = new FormControl(
            { value: currentUser.displayName, disabled: this.editMode },
            [
              Validators.required,
              Validators.minLength(this.config.nameMinLength),
              Validators.maxLength(this.config.nameMaxLength),
            ]
          ),

          email: this.updateEmailFormControl = new FormControl(
            { value: currentUser.email, disabled: this.editMode },
            [Validators.required, Validators.pattern(EMAIL_REGEX)]
          ),

          phoneNumber: this.updatePhoneNumberFormControl = new FormControl(
            { value: currentUser.phoneNumber, disabled: this.editMode },
            [Validators.pattern(PHONE_NUMBER_REGEX)]
          ),
        });

        updateFormGroup.enable();
        return updateFormGroup;
      })
    );
  }
}
