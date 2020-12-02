import { Component, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { AppComponent } from '../app.component'

@Component({
  selector: 'step1',
  templateUrl: 'step1.page.html',
  styleUrls: ['./step1.page.scss']
})
export class Step1Component {
  constructor(
    private snackBar: MatSnackBar,
    public appComponent: AppComponent,) {
  }

  ngOnInit() {

  }

}
