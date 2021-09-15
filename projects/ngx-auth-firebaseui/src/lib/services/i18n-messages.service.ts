import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class I18nMessagesService {

  public static legalityDialog = {
    legalRequirementsMessage: 'Legal requirements',
    iAgreeWithMessage: 'I agree to the',
    termsOfServiceAndConditionsMessage: 'Terms of Service and Conditions',
    iHaveReadAndAgreeToTheMessage: 'I have read and agree to the',
    privacyMessage: 'Privacy',
    confirmMessage: 'Confirm',
  };

  public static register = {
    // i18n common
    titleText: 'CREATE AN ACCOUNT',
    termsAndConditionsText: 'I read and accept the',
    termsAndConditionsLinkText: 'terms and conditions',
    privacyPolicyText: 'I read and accept the',
    privacyPolicyLinkText: 'privacy policy',
    createAccountButtonText: 'CREATE AN ACCOUNT',
    alreadyHaveAccountText: 'Already have an account?',
    loginButtonText: 'LOGIN',

    // i18n name
    nameText: 'Name',
    nameErrorRequiredText: 'Name is required',

    // i18n email
    emailText: 'Email',
    emailErrorRequiredText: 'Email is required',
    emailErrorPatternText: 'Please enter a valid email address',

    // i18n password
    passwordText: 'Password',
    passwordErrorRequiredText: 'Password is required',
    passwordConfirmationText: 'Password Confirmation',
    passwordConfirmationErrorRequiredText: 'Password confirmation is required',
    passwordErrorMatchText: 'Password must match',
    passwordErrorMinLengthText: 'The password is too short!',
    passwordErrorMaxLengthText: 'The password is too long!',
  };

  public static login = {
    titleText: 'LOGIN TO YOUR ACCOUNT',
    rememberMeText: 'Remember Me',
    loginButtonText: 'LOGIN',
    orLabelText: 'OR',
    forgotPasswordText: 'Forgot Password?',
    dontHaveAnAccountText: 'Don\'t have an account?',
    createAccountButtonText: 'Create an account',

    // i18n email
    emailText: 'Email',
    emailErrorRequiredText: 'Email is required',
    emailErrorPatternText: 'Please enter a valid email address',

    // i18n password
    passwordText: 'Password',
    passwordErrorRequiredText: 'Password is required',
  };

  public static avatar = {
    textProfile: 'Profile',
    textSignOut: 'Sign Out',
  };

  public static user = {
    // i18n commons
    notLoggedInText: 'You are not logged in!',
    emailVerifiedText: 'email is verified',
    emailNotVerifiedText: 'email is not verified',
    cancelButtonText: 'cancel',
    saveChangesButtonText: 'Save changes',
    editButtonText: 'edit',
    signoutButtonText: 'Sign out',
    deleteAccountButtonText: 'Delete account',
    // i18n name
    nameText: 'Name',
    nameErrorRequiredText: 'Name is required',
    // i18n email
    emailText: 'Email',
    emailErrorRequiredText: 'Email is required',
    emailErrorPatternText: 'Please enter a valid email address',
    // i18n phone
    phoneText: 'Phone number',
    phoneHintText: `
    The phone number is international. Therefore, it should start with a + sign or 00,
    followed by the country code, - and national number e.g: +49-12345678 or 0041-1234567890

      NOTE : the phone number must be a valid phone credential !!`,
    phoneErrorPatternText: 'Please enter a valid phone number',
  };

  public static emailConfirmation = {
    // i18n translations to use in default template
    verifyEmailTitleText: 'Confirm your e-mail address!',
    verifyEmailConfirmationText: 'A confirmation e-mail has been sent.' +
      ' Check your inbox and click on the link "Confirm my e-mail" to confirm your e-mail address.',
    verifyEmailGoBackText: 'Go back',
    sendNewVerificationEmailText: 'Send new confirmation e-mail',
    signOutText: 'Sign out',
    messageOnEmailConfirmationSuccess: 'A new confirmation e-mail has been sent. Please check your inbox.',
  };

  public static auth = {
    // i18n translations to use in default template for email verification.

    // Customize the text
    // Reset Password Tab
    resetPasswordTabText: 'Reset e-mail address to password',
    resetPasswordInputText: 'Reset e-mail address to password',
    resetPasswordErrorRequiredText: 'E-mail is required to reset the password!',
    resetPasswordErrorPatternText: 'Please enter a valid e-mail address',
    resetPasswordActionButtonText: 'Reset',
    resetPasswordInstructionsText: 'Reset requested. Check your e-mail instructions.',

    // SignIn Tab
    signInTabText: 'Sign in',
    signInCardTitleText: 'Signing in',
    loginButtonText: 'Log In',
    forgotPasswordButtonText: 'Forgot Password ?',

    // Common
    nameText: 'Name',
    nameErrorRequiredText: 'Name is required',
    nameErrorMinLengthText: 'The name is too short!',
    nameErrorMaxLengthText: 'The name is too long!',

    emailText: 'E-mail',
    emailErrorRequiredText: 'E-mail is required',
    emailErrorPatternText: 'Please enter a valid e-mail address',

    passwordText: 'Password',
    passwordErrorRequiredText: 'Password is required',
    passwordErrorMinLengthText: 'The password is too short!',
    passwordErrorMaxLengthText: 'The password is too long!',

    // Register Tab
    registerTabText: 'Register',
    registerCardTitleText: 'Registration',
    registerButtonText: 'Register',
    guestButtonText: 'continue as guest',

    // email confirmation component
    emailConfirmationTitle: 'Confirm your e-mail address!',
    // tslint:disable-next-line:max-line-length
    emailConfirmationText: `A confirmation e-mail has been sent to you. Check your inbox and click on the link 'Confirm my e-mail' to confirm your e-mail address.`,
  };

  constructor() {
  }
}
