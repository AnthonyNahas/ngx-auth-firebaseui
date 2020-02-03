import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Subscription } from 'rxjs';
import { NgxAuthFirebaseuiAnimations } from '../../animations';
import { AuthProcessService, AuthProvider } from '../../services/auth-process.service';

@Component({
  selector: 'ngx-auth-firebaseui-login',
  templateUrl: './ngx-auth-firebaseui-login.component.html',
  styleUrls: ['./ngx-auth-firebaseui-login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: NgxAuthFirebaseuiAnimations
})
export class NgxAuthFirebaseuiLoginComponent implements OnInit {

  @Input() logoUrl: string;
  @Input() providers: string[] | string = AuthProvider.ALL; //  google, facebook, twitter, github as array or all as one single string
  @Input() appearance: MatFormFieldAppearance;
  @Input() registrationEnabled = true;
  @Input() resetPasswordEnabled = true;
  @Input() messageOnAuthSuccess: string;
  @Input() messageOnAuthError: string;

  // i18n
  @Input() titleText = 'LOGIN TO YOUR ACCOUNT';
  @Input() rememberMeText = 'Remember Me';
  @Input() loginButtonText = 'LOGIN';
  @Input() orLabelText = 'OR';
  @Input() forgotPasswordText = 'Forgot Password?';
  @Input() dontHaveAnAccountText = 'Don\'t have an account?';
  @Input() createAccountButtonText = 'Create an account';

  // i18n email
  @Input() emailText = 'Email';
  @Input() emailErrorRequiredText = 'Email is required';
  @Input() emailErrorPatternText = 'Please enter a valid email address';

  // i18n password
  @Input() passwordText = 'Password';
  @Input() passwordErrorRequiredText = 'Password is required';

  // Events
  @Output() onSuccess: any;
  @Output() onError: any;
  @Output() onCreateAccountRequested: EventEmitter<void> = new EventEmitter<void>();
  @Output() onResetPasswordRequested: EventEmitter<void> = new EventEmitter<void>();

  loginForm: FormGroup;
  authProviders = AuthProvider;
  onErrorSubscription: Subscription;
  authenticationError = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public authProcess: AuthProcessService,
    private _formBuilder: FormBuilder) {
    this.onSuccess = authProcess.onSuccessEmitter;
    this.onError = authProcess.onErrorEmitter;
  }

  get color(): string | ThemePalette {
    return this.authenticationError ? 'warn' : 'primary';
  }

  get colorAccent(): string | ThemePalette {
    return this.authenticationError ? 'warn' : 'accent';
  }

  ngOnInit() {

    if (isPlatformBrowser(this.platformId)) {
      this.onErrorSubscription = this.onError.subscribe(() => this.authenticationError = true);
    }

    this.updateAuthSnackbarMessages();

    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  public updateAuthSnackbarMessages(): void {
    this.authProcess.messageOnAuthSuccess = this.messageOnAuthSuccess;
    this.authProcess.messageOnAuthError = this.messageOnAuthError;
  }

  async login() {
    return await this.authProcess.signInWith(this.authProviders.EmailAndPassword,
      {
        email: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value
      }
    )
  }
}
