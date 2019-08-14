import {Component, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatFormFieldAppearance} from '@angular/material';
import {AuthProvider} from '../../..';

@Component({
  selector: 'ngx-auth-firebaseui-login',
  templateUrl: './ngx-auth-firebaseui-login.component.html',
  styleUrls: ['./ngx-auth-firebaseui-login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NgxAuthFirebaseuiLoginComponent implements OnInit {

  logoUrl: string;
  loginForm: FormGroup;

  @Input() providers: string[] | string = AuthProvider.ALL; //  google, facebook, twitter, github as array or all as one single string
  @Input() appearance: MatFormFieldAppearance;
  @Input() resetPasswordEnabled = true;

  // i18n
  @Input() titleText = 'LOGIN TO YOUR ACCOUNT';
  @Input() rememberMeText = 'Remember Me';
  @Input() loginButtonText = 'LOGIN';
  @Input() orLabelText = 'OR';
  @Input() forgotPasswordText = 'Forgot Password?';
  @Input() dontHaveAnAccountText = 'Don\'t have an account?';
  @Input() createAccountButtonText = 'Create an account';

  // Events
  @Output() onSuccess: any;
  @Output() onError: any;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

}
