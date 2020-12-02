import { Component, HostListener } from '@angular/core';
import { fabric } from 'fabric';
import { ModalLibDialog } from "../../components/modals/modalLib/modalLib";
import { ModalImportDialog } from "../../components/modals/modalImport/modalImport";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AssetsLibService } from '../../services/assetsLib.service'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AppComponent } from '../app.component'

export interface SideShoes {
  img: string;
  svg: string;
  json: string;
}

@Component({
  selector: 'step2',
  templateUrl: 'step2.page.html',
  styleUrls: ['./step2.page.scss']
})
export class Step2Component {
  constructor(
    private dialog: MatDialog,
    private assetsLib: AssetsLibService,
    public sanitizer: DomSanitizer,
    public appComponent: AppComponent,) {}
    
  public activeColor: string;  
  public activeObject: any;
  public canvas: any;  
  public colorDisplay = false
  public colorList = ["131313", "FFFFFF", "192F97", "D41C3B", "FF9090", "A92355", "E35110"]
  public generalDisplay = false
  public imgDisplay = false
  public imgLib: any;
  public isBold = false
  public isItalic = false
  public listSide: Array<SideShoes>;
  public objType: string;
  public side: string = "";
  public sideNumber: number = 0;
  public totalPrice: number = 0;

  ngOnInit() {
    this.canvas = new fabric.Canvas('c',);
    
    this.canvas.preserveObjectStacking = false;
    this.listSide = [
      {
        img: "./assets/shoes/af1out.png",
        svg: "",
        json: '{"version":"4.2.0","objects":[]}'
      },
      {
        img: "./assets/shoes/af1in.png",
        svg: "",
        json: '{"version":"4.2.0","objects":[]}'
      },
      {
        img: "./assets/shoes/af1top.png",
        svg: "",
        json: '{"version":"4.2.0","objects":[]}'
      },
      {
        img: "./assets/shoes/af1back.png",
        svg: "",
        json: '{"version":"4.2.0","objects":[]}'
      }
    ]
    this.init()
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
  @HostListener('window:message', ['$event'])
  onMessage(event) {
    if(event.data.pay)this.receiveMessage(event);
  }
  receiveMessage(event) {
    this.respond()
  }
  respond() {
    this.exportToSvg()
    setTimeout(() => {
      var data = {
        svg: this.listSide,
        price: this.totalPrice
      }
      window.parent.postMessage(data, "*");
    }, 50);
  }
  init() {
    this.side = this.listSide[0].img
    this.loadJson(0)
  }
  changeSide(src) {
    this.exportToSvg()
    let ctx = this.canvas.getContext("2d");
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    setTimeout(() => {
      if (src === 4) src = 0
      if (src < 0) src = 3
      this.side = this.listSide[src].img
      this.sideNumber = src
      this.loadJson(src)
    }, 10);
  }
  loadJson(src) {
    this.canvas.loadFromJSON(this.listSide[src].json);  
    this.canvas.renderAll();
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
    var itext = new fabric.IText('Double clique pour modifier', {
      left: 100,
      top: 150,
      width: 75,
      fill: '#131313',
      selectable: true, 
      fontSize: "22",
      fontFamily: "anton",
      price: 7
    });
    this.totalPrice += itext.price
    this.canvas.add(itext);
  }
  exportToSvg() {
    var exportSvg = this.canvas.toSVG();
    var json_data = JSON.stringify(this.canvas.toDatalessJSON()); 
    this.listSide[this.sideNumber].svg = exportSvg
    this.listSide[this.sideNumber].json = json_data
  }
  // use modal images
  addStockImg(e) {
    fabric.Image.fromURL(e.img, (img) => {
      img.scaleToWidth(300);
      var oImg = img.set({
        left: 0,
        top: 0,
        angle: 0,
        id: e.item.id,
        price: e.item.price,
        flipX: false,
        flipY: false,
      });
      this.canvas.add(oImg).renderAll();
      this.totalPrice += oImg.price
    });
  }
  blur(event) {
    this.canvas.getActiveObject().set("text", event.srcElement.innerText);
    this.canvas.add(this.canvas.getActiveObject()).renderAll();
  }
  // upload image
  importImg(e) {
    const fileReader: FileReader = new FileReader();
    var oImg
    fileReader.onloadend = (event: Event) => {
      var data = fileReader.result;    
      fabric.Image.fromURL(data, (img) => {
        img.scaleToWidth(300);
        oImg = img.set({
          left: 0, 
          top: 0, 
          angle: 0,
          price: 8,
          flipX: false,
          flipY: false,
        })
        this.canvas.add(oImg).renderAll();
        this.totalPrice += oImg.price
      });
    };
    fileReader.readAsDataURL(e);
  }

  onObjectSelected() {
    // check if type is a property of active element
    this.objType = (this.canvas.getActiveObject().type ? this.canvas.getActiveObject().type : "");
    this.activeObject = this.canvas.getActiveObject()
    this.switchDisplay(this.objType)
  }
  getImgById(id) {
    this.imgLib = this.assetsLib.getById(id)
  }
  onObjectCleared() {
    this.clear()
    this.exportToSvg()
    this.activeObject = null
  }
  onObjectUpdated() {
    this.clear()
    this.exportToSvg()
    this.activeObject = this.canvas.getActiveObject()
    // check if type is a property of active element
    this.objType = (this.canvas.getActiveObject().type ? this.canvas.getActiveObject().type : "");
    this.switchDisplay(this.objType)
  }
  deleteObject() {
    this.totalPrice -= this.canvas.getActiveObject().price
    this.canvas.remove(this.canvas.getActiveObject());
    this.canvas.renderAll();
  }
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
  changeFont(event) {
    this.canvas.getActiveObject().set("fontFamily", event);
    this.canvas.renderAll();
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
        this.getImgById(this.activeObject.id)
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
    setTimeout(() => {
      this.canvas.renderAll(); 
    }, 150);
  }
  bringBackward() {
    let el = this.canvas.getActiveObject()
    this.canvas.sendBackwards(el)
    setTimeout(() => {
      this.canvas.renderAll(); 
    }, 150);
  }
  flipX() {
    let el = this.canvas.getActiveObject()
    this.canvas.set("flipX", !this.canvas.getActiveObject().flipX)
    setTimeout(() => {
      this.canvas.renderAll(); 
    }, 150);
  }
  flipY() {
    let el = this.canvas.getActiveObject()
    this.canvas.set("flipY", !this.canvas.getActiveObject().flipY)
    setTimeout(() => {
      this.canvas.renderAll(); 
    }, 150);
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
  changeColorImg(color) {
    let oImg
    this.canvas.getActiveObject().setSrc(color.img, (img) => {
      img.scaleToWidth(300);
      oImg = img.set({
        color: color.color
      })
      this.canvas.add(oImg).renderAll();
    });
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
