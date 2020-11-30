import { Component, HostListener } from '@angular/core';
import { fabric } from 'fabric';
import { ModalLibDialog } from "../components/modals/modalLib/modalLib";
import { ModalImportDialog } from "../components/modals/modalImport/modalImport";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AssetsLibService } from '../services/assetsLib.service'

export interface SideShoes {
  img: string;
  svg: string;
  json: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private dialog: MatDialog,
    private assetsLib: AssetsLibService,) {
  }
  public canvas: any;
  // public ctx: any;
  public imgLib: any;
  public activeObject: any;
  public objType: any;
  public node: any;
  public listSide: Array<SideShoes>;
  public totalPrice: number = 0
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
  public url: any
  respond() {
    this.exportToSvg()
    setTimeout(() => {
      var data = {
        svg: this.listSide,
        price: this.totalPrice
      }
      window.parent.postMessage(data, "*");
    }, 100);
  }
  public side: string = ""
  public sideNumber: number = 0
  init() {
    this.side = this.listSide[0].img
  }
  changeSide(src) {
    console.log('list change', this.listSide)
    this.exportToSvg()
    let ctx = this.canvas.getContext("2d");
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    setTimeout(() => {
      console.log('list change timed', this.listSide)
      console.log('src', src)
      if (src === 4) src = 0
      if (src < 0) src = 3
      this.side = this.listSide[src].img
      this.sideNumber = src
      this.loadJson(src)
    }, 150);
  }
  // importJson() {
  //   var json = this.listSide[this.sideNumber].json
  //   //uploadJson(fileLoaded)
  //   var result
  //   var formatted
  //   var fr = new FileReader();
  //   fr.onload = function(e) { 
  //     console.log("2", e);
  //     result = JSON.parse(e.target.result);
  //     console.log("result", result);
  //     formatted = JSON.stringify(result, null, 2);
  //     console.log("formatted", formatted);
      
  //     loadJson(formatted)
  //   }
    
  //   fr.readAsText(json); 
  //   document.location.href = "#"
  // }
  loadJson(src) {
    console.log('src load', src)
    console.log('list load', this.listSide)
    console.log('this.listSide[src].json', this.listSide[src].json)
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
  exportToSvg() {
    var exportSvg = this.canvas.toSVG();
    // console.log("exportSvg", exportSvg)
    // localStorage.setItem('svg', exportSvg);
    var json_data = JSON.stringify(this.canvas.toDatalessJSON()); 
    this.listSide[this.sideNumber].svg = exportSvg
    this.listSide[this.sideNumber].json = json_data
    console.log('list export', this.listSide)
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
        price: e.item.price
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
          price: 8
        })
        this.canvas.add(oImg).renderAll();
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
    // this.canvas.requestRenderAll();
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
  changeFont(event) {
    console.log(event)
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
    // this.canvas.getActiveObject().setSrc(color.img);
    // setTimeout(() => {
    //   this.canvas.renderAll(); 
    // }, 50);
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
