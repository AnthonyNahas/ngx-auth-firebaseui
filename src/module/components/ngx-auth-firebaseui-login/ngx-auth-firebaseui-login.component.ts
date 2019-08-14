import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-auth-firebaseui-login',
  templateUrl: './ngx-auth-firebaseui-login.component.html',
  styleUrls: ['./ngx-auth-firebaseui-login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NgxAuthFirebaseuiLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

}
