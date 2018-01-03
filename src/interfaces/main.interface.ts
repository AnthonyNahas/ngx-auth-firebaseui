export interface ISignUpProcess {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirmation: string;

    signUp();
}

export interface ISignInProcess {
    email: string;
    password: string;

    resetPassword();

    signIn();
}