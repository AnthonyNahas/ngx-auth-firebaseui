import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
    selector: 'your-snack-bar',
    templateUrl: 'response.snackbar.component.html'
})
export class ResponseSnackbarComponent {
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    }
}