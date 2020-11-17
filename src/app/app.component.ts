import { Component, HostListener } from '@angular/core';
import { fabric } from 'fabric';
import { ModalLibDialog } from "../components/modals/modalLib/modalLib";
import { ModalImportDialog } from "../components/modals/modalImport/modalImport";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private dialog: MatDialog,) {
  }
  public canvas: any;
  public objType: any;
  public node: any;
  ngOnInit() {
    this.canvas = new fabric.Canvas('c',);
  }
  ngAfterViewInit() {
    this.canvas.on('selection:created', (e) => {
      this.onObjectSelected()
    });
    this.canvas.on('selection:cleared', (e) => {
      this.onObjectCleared()
    });
    this.canvas.on('selection:updated', (e) => {
      this.onObjectUpdated()
    });
  }
  // add rectangle
  addRect() {
    var rect = new fabric.Rect({
      left: 100,
      top: 50,
      fill: 'yellow',
      width: 200,
      height: 100,
      objectCaching: false,
      strokeWidth: 4,
    });

    this.canvas.add(rect);
    this.canvas.setActiveObject(rect);
  }
  // add text
  addText() {
    var itext = new fabric.IText('This is a IText object', {
      left: 100,
      top: 150,
      fill: '#131313',
      selectable: true
    });

    this.canvas.add(itext);
  }

  // upload image
  // uploadImage(e) {
  //   console.log('ee', e)
  //   var file = e.target.files[0];
  //   var reader = new FileReader();
  //   reader.onload = function (f) {
  //     var data = f.target.result;                    
  //     fabric.Image.fromURL(data, function (img) {
  //       img.scaleToWidth(300);
  //       var oImg = img.set({
  //         left: 0, 
  //         top: 0, 
  //         angle: 0, 
  //       });

  //       this.canvas.add(oImg).renderAll();
  //       var a = this.canvas.setActiveObject(oImg);
  //       var dataURL = this.canvas.toDataURL({format: 'png', quality: 0.8});

  //     });
  //   };
  //   reader.readAsDataURL(file);
  // }
  // use modal images
  addStockImg(e) {
    fabric.Image.fromURL(e, (img) => {
      img.scaleToWidth(300);
      var oImg = img.set({
        left: 0,
        top: 0,
        angle: 0,
      });

      this.canvas.add(oImg).renderAll();
    });
  }
  
  // upload image
  importImg(e) {
    const fileReader: FileReader = new FileReader();
    // var reader = new FileReader();
    var oImg
    fileReader.onloadend = (event: Event) => {
      var data = fileReader.result;    
      fabric.Image.fromURL(data, (img) => {
        img.scaleToWidth(300);
        oImg = img.set({
          left: 0, 
          top: 0, 
          angle: 0, 
        })
        this.canvas.add(oImg).renderAll();
      });
    };
    fileReader.readAsDataURL(e);
  }
  onObjectSelected() {
    // check if type is a property of active element
    this.objType = (this.canvas.getActiveObject().type ? this.canvas.getActiveObject().type : "");
    this.switchDisplay(this.objType)
  }
  onObjectCleared() {
    this.clear()
  }
  onObjectUpdated() {
    this.clear()
    // check if type is a property of active element
    this.objType = (this.canvas.getActiveObject().type ? this.canvas.getActiveObject().type : "");
    this.switchDisplay(this.objType)
  }

  public activeColor: string
  public colorDisplay = false
  public isBold = false
  public isItalic = false
  public generalDisplay = false
  public imgDisplay = false
  public colorList = ["131313", "FFFFFF", "192F97", "D41C3B", "FF9090", "A92355", "E35110"]

  clickColor() {
    this.generalDisplay = false
    this.colorDisplay = true
  };
  back() {
    this.objType = (this.canvas.getActiveObject().type ? this.canvas.getActiveObject().type : "");
    this.generalDisplay = true
    this.colorDisplay = false
    this.switchDisplay(this.objType)
  }
  clear() {
    this.generalDisplay = false
    this.colorDisplay = false
    this.imgDisplay = false
  }
  textTransform() {
    if (this.isBold) this.canvas.getActiveObject().set("fontWeight", "bold");
    else this.canvas.getActiveObject().set("fontWeight", "");
    if (this.isItalic) this.canvas.getActiveObject().set("fontStyle", "italic");
    else this.canvas.getActiveObject().set("fontStyle", "");
    this.canvas.renderAll()
  }
  switchDisplay(obj) {
    switch (this.objType) {
      case 'i-text':
        var obj = this.canvas.getActiveObject()
        this.generalDisplay = true
        this.activeColor = obj.fill
        if (obj.fontWeight === 'bold') { this.isBold = true }
        else { this.isBold = false }
        if (obj.fontStyle === 'italic') { this.isItalic = true }
        else { this.isItalic = false }
        break;
      case 'image':
        this.imgDisplay = true
        break;
      case 'rect':
        this.imgDisplay = true
        break;
      default:
        console.log(`Sorry, we are out of`);
    }
  }
  bringForward() {
    let el = this.canvas.getActiveObject()
    this.canvas.bringForward(el)
  }
  bringBackward() {
    let el = this.canvas.getActiveObject()
    this.canvas.sendBackwards(el)
  }
  changeColor(color) {
    var elements = document.getElementsByClassName("color-item")
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove("active");
    }
    this.canvas.getActiveObject().set("fill", "#" + color);
    this.canvas.renderAll();
    var node = document.getElementById(color);
    node.classList.add("active")
  }

  openModalLib() {

    const dialogRef = this.dialog.open(ModalLibDialog, {
      maxWidth: '70vw',
      data: {
        // item: item, 
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addStockImg(result)
    });

  }
  openModalImport() {

    const dialogRef = this.dialog.open(ModalImportDialog, {
      maxWidth: '70vw',
      data: {
        // item: item, 
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.importImg(result)
    });

  }
}
