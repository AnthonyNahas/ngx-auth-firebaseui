import {MatSnackBar} from '@angular/material';

export abstract class ExampleBaseComponent {

  constructor(public snackBar: MatSnackBar) {
  }

  showCopyMessage(content: string) {
    this.snackBar.open(`${content} copied`, 'OK', {
      duration: 3000
    });
  }
}
