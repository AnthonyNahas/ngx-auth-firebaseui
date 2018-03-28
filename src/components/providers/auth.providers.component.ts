import {Component} from '@angular/core';
import {AuthProcess, AuthProvider} from '../../services/auth-process.service';

@Component({
    selector: 'ngx-auth-firebaseui-providers',
    templateUrl: 'auth.providers.component.html',
    styleUrls: ['auth.providers.component.scss']
})

export class AuthProvidersComponent {

    providers = AuthProvider;

    constructor(public authProcess: AuthProcess) {
    }

}