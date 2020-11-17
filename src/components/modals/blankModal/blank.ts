import { Component, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'blank',
  templateUrl: 'blank.html',
  styleUrls: ['./blank.scss']
})
export class BlankDialog {
  constructor(private dialogRef: MatDialogRef<BlankDialog>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  ngOnInit() {

  }
 
  closeDialog() {
    this.dialogRef.close();
  }
}
