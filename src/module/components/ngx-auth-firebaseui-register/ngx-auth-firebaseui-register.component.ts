import {Component, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/internal/operators';
import {NgxAuthFirebaseuiAnimations} from '../../animations';
import {MatFormFieldAppearance} from '@angular/material';

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.parent || !control) {
    return null;
  }

  const password = control.parent.get('password');
  const passwordConfirm = control.parent.get('passwordConfirm');

  if (!password || !passwordConfirm) {
    return null;
  }

  if (passwordConfirm.value === '') {
    return null;
  }

  if (password.value === passwordConfirm.value) {
    return null;
  }

  return {passwordsNotMatching: true};
};

@Component({
  selector: 'ngx-auth-firebaseui-register',
  templateUrl: './ngx-auth-firebaseui-register.component.html',
  styleUrls: ['./ngx-auth-firebaseui-register.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: NgxAuthFirebaseuiAnimations
})
export class NgxAuthFirebaseuiRegisterComponent implements OnInit, OnDestroy {

  @Input() logoUrl: string;
  @Input() appearance: MatFormFieldAppearance;

  // i18n common
  @Input() titleText = 'CREATE AN ACCOUNT';
  @Input() readAncAcceptText = 'I read and accept';
  @Input() termsAndConditionsText = 'terms and conditions';
  @Input() createAccountButtonText = 'CREATE AN ACCOUNT';
  @Input() alreadyHaveAccountText = 'Already have an account?';
  @Input() loginButtonText = 'LOGIN';

  // i18n email
  @Input() emailText = 'Email';
  @Input() emailErrorRequiredText = 'Email is required';
  @Input() emailErrorPatternText = 'Please enter a valid email address';

  // i18n password
  @Input() passwordText = 'Password';
  @Input() passwordErrorRequiredText = 'Password is required';
  @Input() passwordConfirmationText = 'Password Confirmation';
  @Input() passwordConfirmationErrorRequiredText = 'Password confirmation is required';
  @Input() passwordErrorMatchText = 'Password must match';

  registerForm: FormGroup;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(private _formBuilder: FormBuilder) {
    // Configure the layout

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordConfirm: ['', [Validators.required, confirmPasswordValidator]]
    });

    // Update the validity of the 'passwordConfirm' field
    // when the 'password' field changes
    this.registerForm
      .get('password')
      .valueChanges.pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        this.registerForm.get('passwordConfirm').updateValueAndValidity();
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
