import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'ngx-auth-firebaseui-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    editMode: boolean;

    constructor(public auth: AngularFireAuth,
                private snackBar: MatSnackBar) {
    }

    ngOnInit() {
    }

    // todo: 31.3.18
    save() {
        const user = this.auth.auth.currentUser;
        // user.updateProfile()
        // user.updateEmail()
        this.snackBar.open('Sorry! This feature is under development', 'Ok');
    }

}
