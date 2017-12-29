import {Component} from '@angular/core';
import {AbstractControl, FormControl, Validators} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
    selector: 'ngx-auth-firebaseui',
    templateUrl: 'auth.component.html',
    styleUrls: ['auth.component.css']
})

export class AuthComponent {

    errorMessageExample1;
    emailFormControl: AbstractControl = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]);

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry
            .addSvgIcon('google',
                sanitizer.bypassSecurityTrustResourceUrl('/assets/google.svg'))
            .addSvgIcon('facebook',
                sanitizer.bypassSecurityTrustResourceUrl('/assets/facebook.svg'))
    }

}
