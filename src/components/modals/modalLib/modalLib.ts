import { Component, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { AssetsLibService } from '../../../services/assetsLib.service'

@Component({
  selector: 'modalLib',
  templateUrl: 'modalLib.html',
  styleUrls: ['./modalLib.scss']
})
export class ModalLibDialog {
  constructor(private dialogRef: MatDialogRef<ModalLibDialog>,
    private snackBar: MatSnackBar,
    private assetsLib: AssetsLibService,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  public currentCat: string = "";
  public assets: Array<any>;
  public isMobile: boolean = false;
  public catActive: boolean = false;

  ngOnInit() {
    if (window.innerWidth < 768) {
      this.isMobile = true
    } else {
      this.currentCat = "food"
      this.getCurrentCategory("food")
    }
  }
  changeImgSrc(src) {
    this.currentCat = src
  }
  getCurrentCategory(src) {
    this.currentCat = src
    this.assets = this.assetsLib.getByCategory(src)
  }
  // use modal images
  addStockImg(e, item) {
    var imgObj = e.srcElement.currentSrc;
    this.closeDialog(imgObj, item)
  }
  closeDialog(img?, item?) {
    var result = {
      img: img,
      item: item
    }
    this.dialogRef.close(result);
  }
}
