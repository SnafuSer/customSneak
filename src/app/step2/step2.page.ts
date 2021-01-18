import { Component, HostListener } from '@angular/core';
import { fabric } from 'fabric';
import { ModalLibDialog } from "../../components/modals/modalLib/modalLib";
import { ModalImportDialog } from "../../components/modals/modalImport/modalImport";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AssetsLibService } from '../../services/assetsLib.service'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AppComponent } from '../app.component'
import * as async from "async";
import FontPicker from "font-picker";
import { Cloudinary } from '@cloudinary/angular-5.x'; 

// import { BADNAME } from 'dns';

export interface SideShoes {
  img: string;
  svg: string;
  json: string;
  b64: string;
}
export interface Zones {
  name: string;
  imgZone: string;
  img: string;
  svg: string;
  json: string;
  b64: string;
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
    public cloudinary: Cloudinary,
    public appComponent: AppComponent,) {
      this.scalePages(window.innerWidth)
    }
    
  public activeColor: string;  
  public activeObject: any;
  public canvas: any;  
  public colorDisplay = false
  public colorList = ["131313", "FFFFFF", "192F97", "D41C3B", "FF9090", "A92355", "E35110"]
  public imgColors = [
    {
      name: "black",
      color: "000000"
    },
    {
      name: "red",
      color: "E71D0A"
    },
    {
      name: "orange",
      color: "E78D00"
    },
    {
      name: "pink",
      color: "FD4B8E"
    },
    {
      name: "green",
      color: "35D24D"
    },
    {
      name: "blue",
      color: "00BFFF"
    },
  ]
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

  public fontPicker
  ngOnInit() {
    this.canvas = new fabric.Canvas('c',);
    this.canvas.preserveObjectStacking = false;
    this.listSide = [
      {
        img: "./assets/shoes/" + this.choice.type + "/out.png",
        svg: "",
        json: '{"version":"4.2.0","objects":[]}',
        b64: ""
      },
      {
        img: "./assets/shoes/" + this.choice.type + "/in.png",
        svg: "",
        json: '{"version":"4.2.0","objects":[]}',
        b64: ""
      },
      {
        img: "./assets/shoes/" + this.choice.type + "/top.png",
        svg: "",
        json: '{"version":"4.2.0","objects":[]}',
        b64: ""
      },
      {
        img: "./assets/shoes/" + this.choice.type + "/back.png",
        svg: "",
        json: '{"version":"4.2.0","objects":[]}',
        b64: ""
      }
    ]
    if (this.choice.type === "af1") {
      this.listZones = [
        { 
          name: "bande",
          imgZone: "./assets/zones/" + this.choice.type + "/imgZone/imgBande.png",
          img: "./assets/zones/" + this.choice.type + "/svg/bande.png",
          svg: "",
          json: '{"version":"4.2.0","objects":[]}',
          b64: ""
        },
        // {
        //   name: "empeigne",
        //   imgZone: "./assets/zones/" + this.choice.type + "/imgZone/imgEmpeigne.png",
        //   img: "./assets/zones/" + this.choice.type + "/svg/empeigne.svg",
        //   svg: "",
        //   json: '{"version":"4.2.0","objects":[]}',
        //   b64: ""
        // },
        {
          name: "pointe",
          imgZone: "./assets/zones/" + this.choice.type + "/imgZone/imgPointe.png",
          img: "./assets/zones/" + this.choice.type + "/svg/pointe.png",
          svg: "",
          json: '{"version":"4.2.0","objects":[]}',
          b64: ""
        },
        {
          name: "swoosh",
          imgZone: "./assets/zones/" + this.choice.type + "/imgZone/imgSwoosh.png",
          img: "./assets/zones/" + this.choice.type + "/svg/swoosh.png",
          svg: "",
          json: '{"version":"4.2.0","objects":[]}',
          b64: ""
        },
        {
          name: "trim",
          imgZone: "./assets/zones/" + this.choice.type + "/imgZone/imgTrim.png",
          img: "./assets/zones/" + this.choice.type + "/svg/trim.png",
          svg: "",
          json: '{"version":"4.2.0","objects":[]}',
          b64: ""
        }
      ]
      this.jsonZone = {
        "version":"4.2.0","objects":[
        {"type":"image","version":"4.2.0","originX":"left","originY":"top","left":12.4,"top":120.79,"width":550,"height":194,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":0.49,"scaleY":0.49,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-atop","skewX":0,"skewY":0,"cropX":0,"cropY":0,"id":"pointe","selectable":false,"src":"http://localhost:4000/assets/illustration/pointe.svg","crossOrigin":null,"filters":[]},
        {"type":"image","version":"4.2.0","originX":"left","originY":"top","left":221.64,"top":76.15,"width":394,"height":280,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":0.47,"scaleY":0.47,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-atop","skewX":0,"skewY":0,"cropX":0,"cropY":0,"id":"trim","selectable":false,"src":"http://localhost:4000/assets/illustration/trim.svg","crossOrigin":null,"filters":[]},
        {"type":"image","version":"4.2.0","originX":"left","originY":"top","left":324.41,"top":56.44,"width":447,"height":281,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":0.49,"scaleY":0.49,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-atop","skewX":0,"skewY":0,"cropX":0,"cropY":0,"id":"bande","selectable":false,"src":"http://localhost:4000/assets/illustration/bande.svg","crossOrigin":null,"filters":[]},
        {"type":"image","version":"4.2.0","originX":"left","originY":"top","left":243.21,"top":90,"width":550,"height":159,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":0.5,"scaleY":0.5,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-atop","skewX":0,"skewY":0,"cropX":0,"cropY":0,"id":"swoosh","selectable":false,"src":"http://localhost:4000/assets/illustration/swoosh.svg","crossOrigin":null,"filters":[]}]}
    }
    this.init()
  }
  public jsonZone

  public basePage = {
    width: 550,
    height: 280,
    scale: 1,
    scaleX: 1,
    scaleY: 1
  };
  public scaleXY

  scalePages(maxWidth) {
    if (maxWidth < 550) {
      let scaleX = 1                  
      scaleX = maxWidth / this.basePage.width;
      this.scaleXY = 'scale(' +scaleX+ ')';
    } else {
      this.scaleXY = 'scale(1)'
    }      
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
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.scalePages(window.innerWidth)
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
        if (src === 4) src = 0
        if (src < 0) src = 3
        if (this.listZones[src].svg === "") {
          let that = this
          fabric.Image.fromURL(this.listZones[src].img, function (objects, options) {
            let background = objects;
            let ratioHeight = that.canvas.height / background.getScaledHeight()
            let ratioWidth = that.canvas.width / background.getScaledWidth()
            let ratio = Math.min(ratioHeight, ratioWidth)
            background.scale(ratio);
            background.set({
                selectable: false,
                id: "bgZone" + src,
            });
            that.canvas.centerObject(background);
            that.canvas.add(background);
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
      if(o.id.includes("bgZone")) {
        var filter = new fabric.Image.filters.BlendColor({
          color: '#' + color,
          mode: 'multiply'
        });
        o.filters.splice(0, 1, filter);
        o.applyFilters();
        that.canvas.renderAll();
      }
    })
  }

  loadJson(src) {
    if (this.switch === "shoes") {
      this.canvas.loadFromJSON(this.listSide[src].json);  
    }
    if (this.switch === "zones") {
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
    var exportB64 = this.canvas.toDataURL()
    // this.canvas.toDataURL();
    var json_data = JSON.stringify(this.canvas.toObject(['price', 'id', 'selectable']));
    // console.log('json_data', json_data)
    if (this.switch === "shoes") {
      this.listSide[this.sideNumber].svg = exportSvg
      this.listSide[this.sideNumber].json = json_data
      this.listSide[this.sideNumber].b64 = exportB64
    }
    if (this.switch === "zones") {
      this.listZones[this.sideNumber].svg = exportSvg
      this.listZones[this.sideNumber].json = json_data
      this.listZones[this.sideNumber].b64 = exportB64
    }
  }
  getByName(name) {
      /**
   * Item name is unique
   */
  // fabric.Canvas.prototype.getItemByName = function(name) {
      var object = null,
          objects = fabric.Canvas.prototype.getObjects();

      for (var i = 0, len = fabric.Canvas.prototype.size(); i < len; i++) {
        if (objects[i].name && objects[i].name === name) {
          object = objects[i];
          break;
        }
      }

      return object;
    // };
  }
  // use modal images
  addB64Zone() {
    let oImg
    let that = this
    // console.log('this.canvas.getObjects()', this.canvas.getObjects())
    // console.log('this.listSide[0].json', this.listSide[0].json)
    // for (let index = 0; index < this.listZones.length; index++) {
    //   this.canvas.forEachObject(function(o) {
    //     console.log('oe', o)
    //     console.log('index', index)
    //     fabric.Image.fromURL(that.listZones[index].b64, (img) => {
    //       // img.scaleToWidth(300);
    //       switch (index) {
    //         case 0:
    //           var oImg = img.set({ left: 301.71,  top: 56.47, width: 550, height: 280, scaleX: 0.49, scaleY: 0.49, selectable: true, id: "bgZone" + index});
    //           break;
    //         case 1:
    //           var oImg = img.set({ left: 11.22,  top: 102.18, width: 550, height: 280, scaleX: 0.48, scaleY: 0.48, selectable: true, id: "bgZone" + index});
    //           break;
    //         case 2:
    //           var oImg = img.set({ left: 264.06,  top: 62.13, width: 550, height: 280, scaleX: 0.47, scaleY: 0.47, selectable: true, id: "bgZone" + index});
    //           break;
    //         case 3:
    //           var oImg = img.set({ left: 185.61,  top: 75.86, width: 550, height: 280, scaleX: 0.46, scaleY: 0.46, selectable: true, id: "bgZone" + index});
    //           break;
          
    //         default:
    //           break;
    //       }
    //       that.canvas.add(oImg);
    //       that.canvas.renderAll();
    //     });
    //       if(o.id === "bgZone" + index) {
    //         console.log('isExist')
    //         // o.set({src: that.listZones[index].b64})
    //         o.setSrc(that.listZones[index].b64);
    //         that.canvas.renderAll();
    //       } else {
    //         console.log('nop')
    //       }
    //   })
    // }
  
  }
  // use modal images
  addStockImg(e) {
    // console.log('e', e)
    let color = null
    fabric.Image.fromURL(e.img, (img) => {
      img.scaleToWidth(100);
      if (e.item.context) color = e.item.context.custom.colors
      var oImg = img.set({
        left: 225,
        top: 140,
        angle: 0,
        id: e.item.public_id,
        color: color,
        price: e.item.price,
        flipX: false,
        flipY: false,
        borderColor: "#171717",
        cornerColor: "#171717",
        cornerSize: 6,
      });
      // oImg.crossOrigin = 'use-credentials';
      oImg.globalCompositeOperation = 'source-atop';
      this.canvas.add(oImg)
      this.canvas.renderAll();
      this.totalPrice += oImg.price
    }, {crossOrigin: 'anonymous'});
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
          // selectable but not moveable
          // hasBorders: false,
          // hasControls: false,
          // hasRotatingPoint: false,
          // lockMovementX: true,
          // lockMovementY: true,
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
    // console.log('activeObject', this.activeObject)
    this.switchDisplay(this.objType)
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
    // console.log('e', this.fontPicker.getActiveFont().family)
    
    this.canvas.getActiveObject().set("fontFamily", this.fontPicker.getActiveFont().family);
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
        setTimeout(() => {
          this.fontPicker = new FontPicker(
            "AIzaSyAB_8iUhpGP-7Iagd-pT00dzjAF2Zy1SV8", // Google API key
            obj.fontFamily || "Open Sans", // Default font
            { categories: ["handwriting"], limit: 250 }, // Additional options
          );
        }, 50);
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
      (callback) => {
        if (zone === "shoes") {
          this.addB64Zone()
        }
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
    el.set("flipX", !el.flipX)
    setTimeout(() => {
      this.canvas.renderAll(); 
    }, 15);
  }
  flipY() {
    let el = this.canvas.getActiveObject()
    el.set("flipY", !el.flipY)
    setTimeout(() => {
      this.canvas.renderAll(); 
    }, 15);
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
    let split = this.canvas.getActiveObject().id.split('/')
    split[split.length - 1] = color.name
    split = split.join('/')
    this.canvas.getActiveObject().setSrc('https://res.cloudinary.com/deck4daxl/image/upload/' + split, (img) => {
      oImg = img.set({
        color: color.color
      })
      this.canvas.renderAll();
    },{crossOrigin:'annonymous'});
  }
  openModalLib() {
    let maxWidth, height, top
    if (window.innerWidth < 768) {
      maxWidth = "100vw"
      top = "0"
      height = "100vh"
    } else {
      maxWidth = "70vw"
      top = "70px"
      height = "auto"
    }
    const dialogRef = this.dialog.open(ModalLibDialog, {
      maxWidth: maxWidth,
      height: height,
      position: {
        top: top,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addStockImg(result)
    });

  }
  openModalImport() {
    let maxWidth, height, top
    if (window.innerWidth < 768) {
      maxWidth = "100vw"
      top = "0"
      height = "100vh"
    } else {
      maxWidth = "70vw"
      top = "70px"
      height = "auto"
    } 
    const dialogRef = this.dialog.open(ModalImportDialog, {
      maxWidth: maxWidth,
      height: height,
      position: {
        top: top,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.importImg(result)
    });

  }
}
