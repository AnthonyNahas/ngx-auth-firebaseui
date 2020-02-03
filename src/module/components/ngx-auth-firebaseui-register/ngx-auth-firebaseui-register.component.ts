import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';
import { NgxAuthFirebaseuiAnimations } from '../../animations';
import { AuthProcessService } from '../../services/auth-process.service';


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
  @Input() tosUrl: string;
  @Input() privacyPolicyUrl: string;

  // i18n common
  @Input() titleText = 'CREATE AN ACCOUNT';
  @Input() readAncAcceptText = 'I read and accept';
  @Input() termsAndConditionsText = 'terms and conditions';
  @Input() createAccountButtonText = 'CREATE AN ACCOUNT';
  @Input() alreadyHaveAccountText = 'Already have an account?';
  @Input() loginButtonText = 'LOGIN';

  // i18n emnameail
  @Input() nameText = 'Name';
  @Input() nameErrorRequiredText = 'Name is required';

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

  // Events
  @Output() onSuccess: any;
  @Output() onError: any;
  @Output() onLoginRequested: EventEmitter<void> = new EventEmitter<void>();

  registerForm: FormGroup;
  onErrorSubscription: Subscription;
  authenticationError = false;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private _formBuilder: FormBuilder,
              public authProcess: AuthProcessService) {
    // Configure the layout

    // Set the private defaults
    this._unsubscribeAll = new Subject();
    this.onSuccess = authProcess.onSuccessEmitter;
    this.onError = authProcess.onErrorEmitter;
  }

  get color(): string | ThemePalette {
    return this.authenticationError ? 'warn' : 'primary';
  }

  get colorAccent(): string | ThemePalette {
    return this.authenticationError ? 'warn' : 'accent';
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.onErrorSubscription = this.onError.subscribe(() => this.authenticationError = true);
    }
    this.registerForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordConfirm: ['', [Validators.required, confirmPasswordValidator]]
    });

    // Update the validity of the 'passwordConfirm' field
    // when the 'password' field changes
    this.registerForm
      .controls
      .password
      .valueChanges.pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        this.registerForm.controls.passwordConfirm.updateValueAndValidity();
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

  async createAccount() {
    return await this.authProcess.signUp(
      this.registerForm.controls.name.value,
      {
        email: this.registerForm.controls.email.value,
        password: this.registerForm.controls.password.value
      }
    )
  }
}
