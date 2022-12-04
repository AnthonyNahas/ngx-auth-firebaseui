import { isPlatformBrowser } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  PLATFORM_ID,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  AbstractControl,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";

// ANGULAR MATERIAL
import { MatLegacyTabChangeEvent as MatTabChangeEvent, MatLegacyTabGroup as MatTabGroup } from "@angular/material/tabs";
import { ThemePalette } from "@angular/material/core";
import { MatLegacyDialog as MatDialog, MatLegacyDialogRef as MatDialogRef } from "@angular/material/dialog";
import { MatLegacyFormFieldAppearance as MatFormFieldAppearance } from "@angular/material/form-field";

// ANGULAR FIRE
import { AngularFireAuth } from "@angular/fire/compat/auth";

// Third PARTY
import { MatPasswordStrengthComponent } from "@angular-material-extensions/password-strength";

// RXJS
import { Subscription } from "rxjs";

import { LegalityDialogComponent } from "..";
import {
  EMAIL_REGEX,
  LegalityDialogParams,
  LegalityDialogResult,
  NgxAuthFirebaseUIConfig, Theme,
} from '../../interfaces';
import {
  AuthProcessService,
  AuthProvider,
} from "../../services/auth-process.service";
import { NgxAuthFirebaseuiAnimations } from "../../animations";
import { NgxAuthFirebaseUIConfigToken } from "../../tokens";

@Component({
  selector: "ngx-auth-firebaseui",
  templateUrl: "auth.component.html",
  styleUrls: ["auth.component.scss"],
  animations: NgxAuthFirebaseuiAnimations,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent
  implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @ViewChild(MatTabGroup, { static: false }) matTabGroup: MatTabGroup;
  @ViewChild(MatPasswordStrengthComponent, { static: false })
  passwordStrength: MatPasswordStrengthComponent;

  isLoading: boolean;
  //  google, facebook, twitter, github as array or all as one single string
  @Input() providers: AuthProvider[] | AuthProvider = AuthProvider.ALL;
  @Input() providersTheme: Theme; // Classic, Stroked, etc.

  @Input() appearance: MatFormFieldAppearance;
  @Input() tabIndex: number | null;
  @Input() registrationEnabled = true;
  @Input() resetPasswordEnabled = true;
  @Input() guestEnabled = true;
  @Input() tosUrl: string;
  @Input() privacyPolicyUrl: string;
  @Input() goBackURL: string;
  @Input() messageOnAuthSuccess: string;
  @Input() messageOnAuthError: string;
  @Input() messageOnEmailConfirmationSuccess: string;

  // Events
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onSuccess: any;
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onError: any;
  @Output() selectedTabChange: EventEmitter<
    MatTabChangeEvent
  > = new EventEmitter();

  // Password strength api
  @Input() enableLengthRule = true;
  @Input() enableLowerCaseLetterRule = true;
  @Input() enableUpperCaseLetterRule = true;
  @Input() enableDigitRule = true;
  @Input() enableSpecialCharRule = true;
  @Input() min: number;
  @Input() max: number;
  @Input() customValidator: RegExp;
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onStrengthChanged: EventEmitter<number> = new EventEmitter();

  // Verify email template to use in place of default template.
  // See email-confirmation component
  @Input() verifyEmailTemplate: TemplateRef<any>;

  // i18n translations to use in default template for email verification.
  // See email-confirmation component
  @Input() verifyEmailTitleText: string;
  @Input() verifyEmailConfirmationText: string;
  @Input() verifyEmailGoBackText: string;
  @Input() sendNewVerificationEmailText: string;
  @Input() signOutText = "Sign out";

  // Customize the text
  // Reset Password Tab
  @Input() resetPasswordTabText = "Reset e-mail address to password";
  @Input() resetPasswordInputText = "Reset e-mail address to password";
  @Input() resetPasswordErrorRequiredText =
    "E-mail is required to reset the password!";
  @Input() resetPasswordErrorPatternText =
    "Please enter a valid e-mail address";
  @Input() resetPasswordActionButtonText = "Reset";
  @Input() resetPasswordInstructionsText =
    "Reset requested. Check your e-mail instructions.";

  // SignIn Tab
  @Input() signInTabText = "Sign in";
  @Input() signInCardTitleText = "Signing in";
  @Input() loginButtonText = "Log In";
  @Input() forgotPasswordButtonText = "Forgot Password ?";

  // Common
  @Input() nameText = "Name";
  @Input() nameErrorRequiredText = "Name is required";
  @Input() nameErrorMinLengthText = "The name is too short!";
  @Input() nameErrorMaxLengthText = "The name is too long!";

  @Input() emailText = "E-mail";
  @Input() emailErrorRequiredText = "E-mail is required";
  @Input() emailErrorPatternText = "Please enter a valid e-mail address";

  @Input() passwordText = "Password";
  @Input() passwordErrorRequiredText = "Password is required";
  @Input() passwordErrorMinLengthText = "The password is too short!";
  @Input() passwordErrorMaxLengthText = "The password is too long!";

  // Register Tab
  @Input() registerTabText = "Register";
  @Input() registerCardTitleText = "Registration";
  @Input() registerButtonText = "Register";
  @Input() guestButtonText = "continue as guest";

  // email confirmation component
  @Input() emailConfirmationTitle = "Confirm your e-mail address!";
  // eslint-disable-next-line max-len
  @Input()
  emailConfirmationText = `A confirmation e-mail has been sent to you. Check your inbox and click on the link "Confirm my e-mail" to confirm your e-mail address.`;

  authProvider = AuthProvider;
  passwordResetWished: boolean;

  public signInFormGroup: UntypedFormGroup;
  public signUpFormGroup: UntypedFormGroup;
  public resetPasswordFormGroup: UntypedFormGroup;

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

  constructor(
    // eslint-disable-next-line @typescript-eslint/ban-types
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(forwardRef(() => NgxAuthFirebaseUIConfigToken))
    public config: NgxAuthFirebaseUIConfig,
    public auth: AngularFireAuth,
    public authProcess: AuthProcessService,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.onSuccess = authProcess.onSuccessEmitter;
    this.onError = authProcess.onErrorEmitter;
  }

  get color(): string | ThemePalette {
    return this.authenticationError ? "warn" : "primary";
  }

  public ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.onErrorSubscription = this.onError.subscribe(
        () => (this.authenticationError = true)
      );
    }
    this.min =
      this.min != null
        ? Math.max(this.min, this.config.passwordMinLength)
        : this.config.passwordMinLength;
    this.max =
      this.max != null
        ? Math.min(this.max, this.config.passwordMaxLength)
        : this.config.passwordMaxLength;

    this.goBackURL = this.chooseBackUrl();

    this.updateAuthSnackbarMessages();
    // auth form's initialization
    this._initSignInFormGroupBuilder();
    this._initSignUpFormGroupBuilder();
    this._initResetPasswordFormGroupBuilder();
  }

  ngAfterViewInit(): void {
    if (this.passwordStrength) {
      this.passwordStrength.onStrengthChanged.subscribe((strength: number) => {
        this.onStrengthChanged.emit(strength);
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.messageOnAuthSuccess || changes.messageOnAuthError) {
      this.updateAuthSnackbarMessages();
    }
    if (changes.min) {
      this.min =
        this.min != null
          ? Math.max(this.min, this.config.passwordMinLength)
          : this.config.passwordMinLength;
    }
    if (changes.max) {
      this.max =
        this.max != null
          ? Math.min(this.max, this.config.passwordMaxLength)
          : this.config.passwordMaxLength;
    }
    if (changes.goBackURL) {
      this.goBackURL = this.chooseBackUrl();
    }
  }

  ngOnDestroy(): void {
    if (this.onErrorSubscription) {
      this.onErrorSubscription.unsubscribe();
    }
  }

  onTabChange(event: MatTabChangeEvent) {
    this.selectedTabChange.emit(event);
    this.tabIndex = event.index;
  }

  async signOut() {
    try {
      this.isLoading = true;
      this.changeDetectorRef.markForCheck();
      await this.authProcess.signOut();
    } finally {
      this.isLoading = false;
      this.tabIndex = 0;
      this.changeDetectorRef.markForCheck();
    }
  }

  async signIn() {
    if (!this.signInFormGroup.valid) {
      return;
    }
    try {
      this.isLoading = true;
      this.changeDetectorRef.markForCheck();
      await this.authProcess.signInWith(this.authProviders.EmailAndPassword, {
        email: this.signInFormGroup.value.email,
        password: this.signInFormGroup.value.password,
      });
    } finally {
      this.isLoading = false;
      this.changeDetectorRef.markForCheck();
    }
  }

  updateAuthSnackbarMessages(): void {
    this.authProcess.messageOnAuthSuccess = this.messageOnAuthSuccess;
    this.authProcess.messageOnAuthError = this.messageOnAuthError;
  }

  createForgotPasswordTab() {
    this.passwordResetWished = true;
    this.tabIndex = 2;
    this.changeDetectorRef.markForCheck();
  }

  processLegalSignUP(authProvider?: AuthProvider) {
    if (this.tosUrl || this.privacyPolicyUrl) {
      const params: LegalityDialogParams = {
        tosUrl: this.tosUrl,
        privacyPolicyUrl: this.privacyPolicyUrl,
        authProvider,
      };

      this.dialogRef = this.dialog.open(LegalityDialogComponent, {
        data: params,
      });
      this.dialogRef.afterClosed().subscribe((result: LegalityDialogResult) => {
        if (result && result.checked) {
          this._afterSignUpMiddleware(result.authProvider).then(() =>
            this.signUpFormGroup.reset()
          );
        }
        this.dialogRef = null;
      });
    } else {
      this._afterSignUpMiddleware(authProvider).then(() =>
        this.signUpFormGroup.reset()
      );
    }
  }

  async signUp() {
    try {
      this.isLoading = true;
      this.changeDetectorRef.markForCheck();
      return await this.authProcess.signUp(this.signUpFormGroup.value.name, {
        email: this.signUpFormGroup.value.email,
        password: this.signUpFormGroup.value.password,
      });
    } finally {
      this.isLoading = false;
      this.changeDetectorRef.markForCheck();
    }
  }

  async signUpAnonymously() {
    try {
      this.isLoading = true;
      this.changeDetectorRef.markForCheck();
      await this.authProcess.signInWith(this.authProvider.ANONYMOUS);
    } finally {
      this.isLoading = false;
      this.changeDetectorRef.markForCheck();
    }
  }

  resetPassword() {
    this.authProcess
      .resetPassword(this.resetPasswordEmailFormControl.value)
      .then(() => {
        this.passReset = true;
        // this.tabIndex = 2;
        this.changeDetectorRef.markForCheck();
      });
  }

  private chooseBackUrl() {
    return (
      this.activatedRoute.snapshot.queryParams.redirectUrl ||
      this.goBackURL ||
      "/"
    );
  }

  private _initSignInFormGroupBuilder() {
    this.signInFormGroup = new UntypedFormGroup({});
    this.signInFormGroup.registerControl(
      "email",
      (this.signInEmailFormControl = new UntypedFormControl("", [
        Validators.required,
        Validators.pattern(EMAIL_REGEX),
      ]))
    );
    this.signInFormGroup.registerControl(
      "password",
      (this.sigInPasswordFormControl = new UntypedFormControl("", [
        Validators.required,
        Validators.minLength(this.min),
        Validators.maxLength(this.max),
      ]))
    );
  }

  private _initSignUpFormGroupBuilder() {
    this.signUpFormGroup = new UntypedFormGroup({
      name: this.sigUpNameFormControl = new UntypedFormControl("", [
        Validators.required,
        Validators.minLength(this.config.nameMinLength),
        Validators.maxLength(this.config.nameMaxLength),
      ]),
      email: this.sigUpEmailFormControl = new UntypedFormControl("", [
        Validators.required,
        Validators.pattern(EMAIL_REGEX),
      ]),
      password: this.sigUpPasswordFormControl = new UntypedFormControl("", [
        Validators.required,
        Validators.minLength(this.min),
        Validators.maxLength(this.max),
      ]),
    });
  }

  private _initResetPasswordFormGroupBuilder() {
    this.resetPasswordFormGroup = new UntypedFormGroup({
      email: this.resetPasswordEmailFormControl = new UntypedFormControl("", [
        Validators.required,
        Validators.pattern(EMAIL_REGEX),
      ]),
    });
  }

  private _afterSignUpMiddleware(authProvider?: AuthProvider) {
    if (authProvider === this.authProvider.ANONYMOUS) {
      return this.signUpAnonymously();
    }
    return this.signUp();
  }
}
