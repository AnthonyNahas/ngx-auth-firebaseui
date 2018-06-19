import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'ngx-dialog-tos',
  templateUrl: 'before-register.component.html',
})
export class BeforeRegisterComponent {

  dialogContent: string;
  constructor(
    public dialogRef: MatDialogRef<BeforeRegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
      this.dialogRef.close(false);
    }

    onCloseCancel() {
      this.dialogRef.close(false);
    }

    onCloseConfirm() {
      this.dialogRef.close(true);
    }
}
