import { Component, HostListener } from '@angular/core';
import { fabric } from 'fabric';
import { ModalLibDialog } from "../../components/modals/modalLib/modalLib";
import { ModalImportDialog } from "../../components/modals/modalImport/modalImport";
import { ModalNikeDialog } from "../../components/modals/modalNike/modalNike";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AssetsLibService } from '../../services/assetsLib.service'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AppComponent } from '../app.component'
import * as async from "async";

export interface SideShoes {
  img: string;
  svg: string;
  json: string;
}
export interface Zones {
  imgZone: string;
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
  public backgroundColorDisplay = false
  public imgLib: any;
  public isBold = false
  public isItalic = false
  public listSide: Array<SideShoes>;
  public listZones: Array<Zones>;
  public objType: string;
  public side: string = "";
  public switch: string = "shoes";
  public sideNumber: number = 0;
  public totalPrice: number = 0;
  public loading: boolean = false
  public choice: any = this.appComponent.choice
  // public choice: any = {type: "af1"}

  ngOnInit() {
    this.canvas = new fabric.Canvas('c',);
    this.canvas.preserveObjectStacking = false;
    this.listSide = [
      {
        img: "./assets/shoes/" + this.choice.type + "/out.png",
        svg: "",
        json: '{"version":"4.2.0","objects":[]}'
      },
      {
        img: "./assets/shoes/" + this.choice.type + "/in.png",
        svg: "",
        json: '{"version":"4.2.0","objects":[]}'
      },
      {
        img: "./assets/shoes/" + this.choice.type + "/top.png",
        svg: "",
        json: '{"version":"4.2.0","objects":[]}'
      },
      {
        img: "./assets/shoes/" + this.choice.type + "/back.png",
        svg: "",
        json: '{"version":"4.2.0","objects":[]}'
      }
    ]
    if (this.choice.type === "af1") {
      this.listZones = [
        {
          imgZone: "./assets/zones/" + this.choice.type + "/imgZone/imgBande.png",
          img: "./assets/zones/" + this.choice.type + "/svg/bande.svg",
          svg: "",
          json: '{"version":"4.2.0","objects":[]}'
        },
        {
          imgZone: "./assets/zones/" + this.choice.type + "/imgZone/imgEmpeigne.png",
          img: "./assets/zones/" + this.choice.type + "/svg/empeigne.svg",
          svg: "",
          json: '{"version":"4.2.0","objects":[]}'
        },
        {
          imgZone: "./assets/zones/" + this.choice.type + "/imgZone/imgPointe.png",
          img: "./assets/zones/" + this.choice.type + "/svg/pointe.svg",
          svg: "",
          json: '{"version":"4.2.0","objects":[]}'
        },
        {
          imgZone: "./assets/zones/" + this.choice.type + "/imgZone/imgSwoosh.png",
          img: "./assets/zones/" + this.choice.type + "/svg/swoosh.svg",
          svg: "",
          json: '{"version":"4.2.0","objects":[]}'
        },
        {
          imgZone: "./assets/zones/" + this.choice.type + "/imgZone/imgTrim.png",
          img: "./assets/zones/" + this.choice.type + "/svg/trim.svg",
          svg: "",
          json: '{"version":"4.2.0","objects":[]}'
        }
      ]
    }
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
    this.loading = false
    if(event.data.pay)this.receiveMessage(event);
  }
  receiveMessage(event) {
    // this.respond()
  }
  respond() {
    this.loading = true
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
    this.displayJson(0)
  }
  changeSide(src) {
    async.waterfall([
      callback => {
        this.exportToSvg()
        let ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        callback()
      },
      
      (callback) => {
        this.displayJson(src)
        callback()
      },
    ], (error) => {
      if (error) { return console.log('error', error)  }
    })
  }
  displayJson(src) {
    if (this.switch === "shoes") {
        if (src === 4) src = 0
        if (src < 0) src = 3
        if (this.listSide[src].svg === "") {
          let that = this
          fabric.Image.fromURL(this.listSide[src].img, function (objects, options) {
            let background = objects;
            let ratioHeight = that.canvas.height / background.getScaledHeight()
            let ratioWidth = that.canvas.width / background.getScaledWidth()
            let ratio = Math.min(ratioHeight, ratioWidth)
            background.scale(ratio);
            background.set({
                selectable: false,
                id: "bg",
            });
            that.canvas.centerObject(background);
            that.canvas.add(background);
            that.canvas.renderAll();
          });
        }     
        this.sideNumber = src
        this.loadJson(src)
    }
    if (this.switch === "zones") {
        if (src === 5) src = 0
        if (src < 0) src = 4
        if (this.listZones[src].svg === "") {
          let that = this
          fabric.loadSVGFromURL(this.listZones[src].img, function (objects, options) {
            let background = objects;
            var loadedObjects = fabric.util.groupSVGElements(background);
            loadedObjects.set({
                selectable: false,
                id: "bg",
            });
            that.canvas.centerObject(loadedObjects);
            that.canvas.add(loadedObjects);
            that.canvas.renderAll();
          });
        }        
        this.sideNumber = src
        this.loadJson(src)
    }
  }
  changeBg(color) {
    let that = this
    this.canvas.getObjects().forEach(function(o) {
      if(o.id === "bg") {
        o.set("fill", "#"+color);
        that.canvas.renderAll();
      }
    })
  }

  loadJson(src) {
    if (this.switch === "shoes") {
      console.log('this.listSide[src].json', this.listSide[src].json)
      this.canvas.loadFromJSON(this.listSide[src].json);  
    }
    if (this.switch === "zones") {
      console.log('this.listZones[src].json', this.listZones[src].json)
      this.canvas.loadFromJSON(this.listZones[src].json);  
    }
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
    itext.globalCompositeOperation = 'source-atop';
    this.totalPrice += itext.price
    this.canvas.add(itext);
  }
  exportToSvg() {
    var exportSvg = this.canvas.toSVG();
    var exportData = this.canvas.toDataURL()
    console.log('exportData', exportData)
    var json_data = JSON.stringify(this.canvas.toObject(['price', 'id', 'selectable'])); 
    if (this.switch === "shoes") {
      this.listSide[this.sideNumber].svg = exportSvg
      this.listSide[this.sideNumber].json = json_data
    }
    if (this.switch === "zones") {
      this.listZones[this.sideNumber].svg = exportSvg
      this.listZones[this.sideNumber].json = json_data
    }
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
      oImg.globalCompositeOperation = 'source-atop';
      this.canvas.add(oImg).renderAll();
      this.totalPrice += oImg.price
    }, null, {crossOrigin: 'anonymous'});
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
        oImg.globalCompositeOperation = 'source-atop';
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
  displayBackgroundChoice() {
    this.generalDisplay = false
    this.imgDisplay = false
    this.backgroundColorDisplay = true
  }
  switchDisplay(obj) {
    this.backgroundColorDisplay = false
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
  switchZone(zone) {
    async.waterfall([
      callback => {
        this.exportToSvg()
        callback()
      },
      
      (callback) => {
        this.switch = zone
        callback()
      },

      (callback) => {
        this.side = null
        this.displayJson(0)
        callback()
      },
    ], (error) => {
      if (error) { return console.log('error', error)  }
    })
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
      this.canvas.renderAll();
    });
  }
  openModalLib() {

    const dialogRef = this.dialog.open(ModalLibDialog, {
      maxWidth: '70vw',
      data: {
        // item: item, 
      },
      position: {
        top: '70px',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addStockImg(result)
    });

  }
  openModalNike() {

    const dialogRef = this.dialog.open(ModalNikeDialog, {
      width: '100%',
      height: '100%',
      data: {
        // item: item, 
      },
      position: {
        top: '70px',
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
      },
      position: {
        top: '70px',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.importImg(result)
    });

  }
}
