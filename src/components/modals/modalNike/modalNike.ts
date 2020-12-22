import { Component, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { AssetsLibService } from '../../../services/assetsLib.service'

@Component({
  selector: 'modalNike',
  templateUrl: 'modalNike.html',
  styleUrls: ['./modalNike.scss']
})
export class ModalNikeDialog {
  constructor(private dialogRef: MatDialogRef<ModalNikeDialog>,
    private snackBar: MatSnackBar,
    private assetsLib: AssetsLibService,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  public currentCat: any;

  ngOnInit() {
    this.currentCat = "photo"
    this.getCurrentCategory("photo")
  }
  changeImgSrc(src) {
    this.currentCat = src
  }
  getCurrentCategory(src) {
    this.currentCat = this.assetsLib.getByCategory(src)
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
