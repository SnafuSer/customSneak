import { Component, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'modalLib',
  templateUrl: 'modalLib.html',
  styleUrls: ['./modalLib.scss']
})
export class ModalLibDialog {
  constructor(private dialogRef: MatDialogRef<ModalLibDialog>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  public currentCat: any;
  public imgSrc = [
    {
      img: "https://unsplash.it/400/500?random",
      name: "Item 1",
      price: "4€"
    },
   {
      img: "https://unsplash.it/500/500?random",
      name: "Item 2",
      price: "4€"
    },
   {
      img: "https://unsplash.it/500/400?random",
      name: "Item 3",
      price: "4€"
    },
   {
      img: "https://unsplash.it/500/300?random",
      name: "Item 4",
      price: "3€"
    }];
  public girlSrc = [
  {
      img: "https://drawinghowtos.com/wp-content/uploads/2019/11/unicorn-colored.png",
      name: "Licorne",
      price: "5€"
    },
   {
      img: "https://i.pinimg.com/originals/69/64/94/69649494d972df188fbbd2f15988419c.png",
      name: "Papillon",
      price: "2€"
    },
   {
      img: "https://dbdzm869oupei.cloudfront.net/img/sticker/preview/12597.png",
      name: "Fleur de cerisier",
      price: "5€"
    }];
  public illuSrc = [
    {
      img: "https://isometric.online/wp-content/uploads/2020/05/people_svg.svg",
      name: "People",
      price: "5€"
    },
   {
      img: "https://isometric.online/wp-content/uploads/2020/04/fitness_svg.svg",
      name: "Fitness",
      price: "5€"
    },
   {
      img: "https://isometric.online/wp-content/uploads/2020/04/instagram_svg.svg",
      name: "Instagram",
      price: "4€"
    },
   {
      img: "https://isometric.online/wp-content/uploads/2020/04/tv_svg.svg",
      name: "Télévision",
      price: "3€"
    }];
  ngOnInit() {
    this.currentCat = this.imgSrc
  }
  changeImgSrc(src) {
    this.currentCat = src
  }
  // use modal images
  addStockImg(e) {
    var imgObj = e.srcElement.currentSrc;
    this.closeDialog(imgObj)
  }
  closeDialog(item) {
    this.dialogRef.close(item);
  }
}
