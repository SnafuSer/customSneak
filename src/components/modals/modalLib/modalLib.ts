import { Component, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { AssetsLibService } from '../../../services/assetsLib.service'
import { Cloudinary } from '@cloudinary/angular-5.x'; 

@Component({
  selector: 'modalLib',
  templateUrl: 'modalLib.html',
  styleUrls: ['./modalLib.scss']
})
export class ModalLibDialog {
  constructor(private dialogRef: MatDialogRef<ModalLibDialog>,
    private snackBar: MatSnackBar,
    private assetsLib: AssetsLibService,
    public cloudinary: Cloudinary,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  public currentCat: string = "";
  public assets: Array<any>;
  public images: Array<any>;
  public isMobile: boolean = false;
  public catActive: boolean = false;
  public searchText: string = '';

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
    this.searchText = ''
    this.getCloudinary(src)
  }  
  search(searchText) {
    console.log('e', this.searchText)
    this.getCloudinary(searchText)
  }
  getCloudinary(src) {
    this.assetsLib.getCloudinary(src).subscribe(
      (response) => {
        console.log('response', response.resources)
        this.images = response.resources
      },
      (error) => { return console.log('error', error)});
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
