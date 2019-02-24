import {Component, Inject, Input, OnChanges, OnDestroy, OnInit, Output, PLATFORM_ID, SimpleChanges} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MatFormFieldAppearance} from '@angular/material';
import {AngularFireAuth} from '@angular/fire/auth';
import {isPlatformBrowser} from '@angular/common';
import {Subscription} from 'rxjs/internal/Subscription';

import {AuthProcessService, AuthProvider} from '../../services/auth-process.service';
import {LegalityDialogComponent} from '../../components/legality-dialog/legality-dialog.component';
import {LegalityDialogParams, LegalityDialogResult} from '../../interfaces/legality.dialog.intreface';
import {NgxAuthFirebaseUIConfig, NgxAuthFirebaseUIConfigToken} from '../../ngx-auth-firebase-u-i.module';
import {defaultAuthFirebaseUIConfig} from '../../interfaces/config.interface';


export const EMAIL_REGEX = new RegExp(['^(([^<>()[\\]\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\.,;:\\s@\"]+)*)',
  '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
  '[0-9]{1,3}\])|(([a-zA-Z\\-0-9]+\\.)+',
  '[a-zA-Z]{2,}))$'].join(''));

export const PHONE_NUMBER_REGEX = new RegExp(/^\+(?:[0-9] ?){6,14}[0-9]$/);

@Component({
  selector: 'ngx-auth-firebaseui',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.scss']
})

export class AuthComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  providers: string[] | string = AuthProvider.ALL; //  google, facebook, twitter, github as array or all as one single string

  @Input()
  appearance: MatFormFieldAppearance;

  @Input()
  tabIndex: number | null;

  @Input()
  guestEnabled = true;

  @Input()
  tosUrl: string;

  @Input()
  privacyPolicyUrl: string;

  @Input()
  goBackURL: string;

  @Input()
  messageOnAuthSuccess: string;

  @Input()
  messageOnAuthError: string;

  @Output()
  onSuccess: any;

  @Output()
  onError: any;

  authProvider = AuthProvider;
  passwordResetWished: boolean;

  public signInFormGroup: FormGroup;
  public signUpFormGroup: FormGroup;
  public resetPasswordFormGroup: FormGroup;

  onErrorSubscription: Subscription;
  authenticationError = false;

  passReset = false;
  dialogRef: MatDialogRef<LegalityDialogComponent>;

  authProviders = AuthProvider;

  signInEmailFormControl: AbstractControl;
  sigInPasswordFormControl: AbstractControl;

  sigUpNameFormControl: AbstractControl;
  sigUpEmailFormControl: AbstractControl;
  sigUpPasswordFormControl: AbstractControl;
  sigUpPasswordConfirmationFormControl: AbstractControl;
  resetPasswordEmailFormControl: AbstractControl;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              @Inject(NgxAuthFirebaseUIConfigToken) private config: NgxAuthFirebaseUIConfig,
              public auth: AngularFireAuth,
              public authProcess: AuthProcessService,
              public dialog: MatDialog) {

    this.onSuccess = authProcess.onSuccessEmitter;
    this.onError = authProcess.onErrorEmitter;
  }

  public ngOnInit(): void {
    this.config = Object.assign(defaultAuthFirebaseUIConfig, this.config);

    if (isPlatformBrowser(this.platformId)) {
      this.onErrorSubscription = this.onError.subscribe(() => this.authenticationError = true);
    }
    this.updateAuthSnackbarMessages();
    // auth form's initialization
    this._initSignInFormGroupBuilder();
    this._initSignUpFormGroupBuilder();
    this._initResetPasswordFormGroupBuilder();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.messageOnAuthSuccess || changes.messageOnAuthError) {
      this.updateAuthSnackbarMessages();
    }
  }

  public ngOnDestroy(): void {
    if (this.onErrorSubscription) {
      this.onErrorSubscription.unsubscribe();
    }
  }

  get color(): string {
    return this.authenticationError ? 'warn' : 'primary';
  }

  public updateAuthSnackbarMessages(): void {
    this.authProcess.messageOnAuthSuccess = this.messageOnAuthSuccess;
    this.authProcess.messageOnAuthError = this.messageOnAuthError;
  }

  public createForgotPasswordTab() {
    this.passwordResetWished = true;
    setTimeout(() => this.tabIndex = 0, 100);
  }

  public processLegalSignUP(authProvider?: AuthProvider) {
    if (this.tosUrl || this.privacyPolicyUrl) {
      const params: LegalityDialogParams = {
        tosUrl: this.tosUrl,
        privacyPolicyUrl: this.privacyPolicyUrl,
        authProvider: authProvider
      };

      this.dialogRef = this.dialog.open(LegalityDialogComponent, {data: params});
      this.dialogRef.afterClosed().subscribe((result: LegalityDialogResult) => {
        // console.log('this.dialogRef.afterClosed(): ', result);
        if (result && result.checked) {
          this._afterSignUpMiddleware(result.authProvider).then(() => this.signUpFormGroup.reset());
        }
        this.dialogRef = null;
      });
    } else {
      this._afterSignUpMiddleware(authProvider).then(() => this.signUpFormGroup.reset());
    }
  }

  public async signUp() {
    return await this.authProcess.signUp
    (
      this.signUpFormGroup.value.name,
      {
        email: this.signUpFormGroup.value.email,
        password: this.signUpFormGroup.value.password
      }
    );
  }

  public async signUpAnonymously() {
    return await this.authProcess.signInWith(this.authProvider.ANONYMOUS);
  }


  public resetPassword() {
    this.authProcess.resetPassword(this.resetPasswordEmailFormControl.value)
      .then(() => this.passReset = true);
  }

  private _initSignInFormGroupBuilder() {
    this.signInFormGroup = new FormGroup({});
    this.signInFormGroup.registerControl('email', this.signInEmailFormControl = new FormControl('',
      [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)
      ]));
    this.signInFormGroup.registerControl('password', this.sigInPasswordFormControl = new FormControl('',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(25),
      ]));
  }

  private _initSignUpFormGroupBuilder() {
    this.signUpFormGroup = new FormGroup({
      name: this.sigUpNameFormControl = new FormControl('',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ]),
      email: this.sigUpEmailFormControl = new FormControl('',
        [
          Validators.required,
          Validators.pattern(EMAIL_REGEX)
        ]),
      password: this.sigUpPasswordFormControl = new FormControl('',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(25),
        ])
    });
  }

  private _initResetPasswordFormGroupBuilder() {
    this.resetPasswordFormGroup = new FormGroup({
      email: this.resetPasswordEmailFormControl = new FormControl('',
        [
          Validators.required,
          Validators.pattern(EMAIL_REGEX)
        ])
    });
  }

  private _afterSignUpMiddleware(authProvider?: AuthProvider) {
    if (authProvider === this.authProvider.ANONYMOUS) {
      return this.signUpAnonymously();
    }
    return this.signUp();
  }

}
