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
  public listShoes: Array<any> = [
    {
      type: "af1",
      img: "./assets/shoes/af1/out.png"
    },
    {
      type: "stan",
      img: "./assets/shoes/stan/in.png"
    }
  ]
  public choice: any
  ngOnInit() {

  }

  setActive(item) {
    for (let i = 0; i < this.listShoes.length; i++) {
      if (i === item) {this.listShoes[i].choose = true; this.choice = this.listShoes[i];}
      else this.listShoes[i].choose = false
    }
  }

}
