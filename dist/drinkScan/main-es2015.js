(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-app\">\n\n  <step1 *ngIf=\"step === 1\"></step1>\n  <step2 *ngIf=\"step === 2\"></step2>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/step1/step1.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/step1/step1.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-step1\">\n    <h2>Choisis ton modèle de chaussures</h2>\n    <div class=\"container-shoes\">\n        <div class=\"item-shoes\" [ngClass]=\"{'active': shoes.choose === true}\" *ngFor=\"let shoes of listShoes; let i = index\" (click)=\"setActive(i)\">\n            <img [src]=\"shoes.img\" alt=\"\">\n        </div>\n    </div>\n    <div class=\"button\" [ngClass]=\"{'disabled': !choice}\" (click)=\"appComponent.step = 2; appComponent.choice = choice\">\n        Suivant\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/step2/step2.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/step2/step2.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-container\" *ngIf=\"loading\">\n    <div class=\"loader\">\n        <svg class=\"circular\" viewBox=\"25 25 50 50\">\n          <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\"/>\n        </svg>\n      </div>\n    <h4 class=\"title\">Création du design en cours</h4>\n</div>\n<div class=\"buttonBack\" (click)=\"appComponent.step = 1\">\n    <div class=\"change-button left\">\n        <img src=\"./assets/icons/arrow.svg\" (click)=\"changeSide(sideNumber-1)\" alt=\"\">\n    </div>\n    Retour\n</div>\n<div class=\"container-models\">\n    <div class=\"controls\">\n      <div id=\"add\" class=\"button\" *ngIf=\"switch !== 'zones'\" (click)=\"addText()\">\n        <img src=\"./assets/icons/text.svg\" alt=\"\">\n        <span>Texte</span>\n      </div>\n      <div class=\"button\" *ngIf=\"switch === 'zones'\" (click)=\"displayBackgroundChoice()\">\n        <img src=\"./assets/icons/bg.svg\" alt=\"\">\n        <span>Fond</span>\n      </div>\n      <div class=\"button\" (click)=\"openModalLib()\">\n        <img src=\"./assets/icons/image.svg\" alt=\"\">\n        <span>Design</span>\n      </div>\n      <div class=\"button\" (click)=\"openModalImport()\">\n        <img src=\"./assets/icons/upload.svg\" alt=\"\">\n        <span>Import</span>\n      </div>\n    </div>\n    <div class=\"change-button left\">\n      <img src=\"./assets/icons/arrow.svg\" (click)=\"changeSide(sideNumber-1)\" alt=\"\">\n    </div>\n    <div class=\"container-canvas\">\n      <canvas id=\"c\" width=\"550\" height=\"280\" style=\"z-index: 1;\">\n      </canvas>\n      <div class=\"bg-zone\">\n        <img [class]=\"'bg-image' + listZones[sideNumber].name\" *ngIf=\"switch === 'zones'\" src=\"./assets/shoes/af1/out.png\"  alt=\"\">\n      </div>\n      <div class=\"list-side\" *ngIf=\"switch === 'shoes'\">\n        <div *ngFor=\"let side of listSide; let i = index\" class=\"item\">\n          <img [src]=\"side.img\" (click)=\"changeSide(i)\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"list-side\" *ngIf=\"switch === 'zones'\">\n        <div *ngFor=\"let side of listZones; let i = index\" class=\"item zone\">\n          <img [src]=\"side.imgZone\" (click)=\"changeSide(i);\" alt=\"\">\n        </div>\n      </div>\n    </div>\n    <div class=\"change-button\">\n      <img src=\"./assets/icons/arrow.svg\" (click)=\"changeSide(sideNumber+1)\" alt=\"\">\n    </div>\n    <div class=\"switch-zone\" *ngIf=\"this.choice.type === 'af1'\">\n      <div class=\"switch-item\" [ngClass]=\"{'active': switch === 'shoes'}\" (click)=\"switchZone('shoes')\">\n        <span>\n          Chaussure\n        </span>\n      </div>\n      <div class=\"switch-item\" [ngClass]=\"{'active': switch === 'zones'}\" (click)=\"switchZone('zones')\">\n        <span>\n          Zones\n        </span>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"item-selected\">\n    <div class=\"category-item\">\n      <div class=\"delete-icon\" *ngIf=\"activeObject\" (click)=\"deleteObject()\">\n        <img src=\"./assets/icons/delete.svg\" alt=\"\">\n      </div>\n      <span class=\"title\" *ngIf=\"generalDisplay\" contenteditable=\"true\" (blur)=\"blur($event)\">{{ activeObject.text }}</span>\n      <span class=\"title\" *ngIf=\"imgDisplay\">Image</span>\n    </div>\n    <div id=\"i-text\" class=\"item-panel\">\n      <div id=\"general-controls\" *ngIf=\"generalDisplay\">\n        <div class=\"style-panel\">\n          <span>Style</span>\n          <div id=\"text-controls-additional\">\n            <input type='checkbox' [(ngModel)]=\"isBold\" (ngModelChange)=\"textTransform()\" name='fonttype' id=\"text-cmd-bold\">\n            <label class=\"text-control\" for=\"text-cmd-bold\">\n              <b>B</b>\n            </label>\n            <input type='checkbox' [(ngModel)]=\"isItalic\" (ngModelChange)=\"textTransform()\" name='fonttype' id=\"text-cmd-italic\">\n            <label class=\"text-control\" for=\"text-cmd-italic\">\n              <i>I</i>\n            </label>\n            <input type='checkbox' name='fonttype' id=\"text-cmd-underline\">\n            <label class=\"text-control\" for=\"text-cmd-underline\">\n              <span style=\"text-decoration:underline\">U</span>\n            </label>\n            <select id=\"font-family\" (change)=\"changeFont($event.target.value)\">\n              <option value=\"arial\">Arial</option>\n              <option value=\"helvetica\">Helvetica</option>\n              <option value=\"comic sans ms\">Comic Sans MS</option>\n              <option value=\"anton\" selected>Anton</option>\n            </select>\n          </div>\n        </div>\n        <div id=\"color-controls\">\n          <span>Couleur</span>\n          <div id=\"color-list\">\n            <div *ngFor=\"let item of colorList\" class=\"color-item\" [id]=\"item\" [ngClass]=\"{active: activeColor === '#'+item}\" [ngStyle]=\"{'background-color': '#'+item}\" (click)=\"changeColor(item)\"></div>\n          </div>\n        </div>\n      </div>\n      <div id=\"image\" class=\"item-panel\" *ngIf=\"imgDisplay\">\n        <div class=\"style-panel\">\n          <span>Style</span>\n          <div id=\"img-controls-additional\">\n            <div (click)=\"bringForward()\">En avant </div>\n            <div (click)=\"bringBackward()\"> En arriere</div>\n            <!-- <div (click)=\"flipX()\">Flip X</div>\n            <div (click)=\"flipY()\">Flip Y</div> -->\n          </div>\n        </div>\n        <div id=\"color-controls\">\n          <span>Couleur</span>\n          <div id=\"color-list\">\n            <div *ngFor=\"let item of imgLib?.colors\" class=\"color-item\" [ngClass]=\"{active: activeObject.color === item.color}\" [ngStyle]=\"{'background-color': '#'+item.color}\" (click)=\"changeColorImg(item)\"></div>\n          </div>\n        </div>\n      </div>\n      <div id=\"color-controls\" *ngIf=\"backgroundColorDisplay\">\n        <span>Couleur</span>\n        <div id=\"color-list\">\n          <div *ngFor=\"let item of colorList\" class=\"color-item\" [id]=\"item\" [ngStyle]=\"{'background-color': '#'+item}\" (click)=\"changeBg(item)\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"price-panel\">\n        <div>\n            <span class=\"title\">\n              Total :\n              {{ totalPrice }}€\n            </span>\n        </div>\n        <div class=\"button-cart\" [ngClass]=\"{'disabled': totalPrice === 0}\"  (click)=\"respond()\">\n            Ajouter au panier\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/modals/blankModal/blank.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/modals/blankModal/blank.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/modals/modalImport/modalImport.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/modals/modalImport/modalImport.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"popup\">\n  <div class=\"header-container\">\n    <h2>Importer un design</h2>\n    <a class=\"close\" href=\"#\">&times;</a>\n  </div>\n  <div class=\"container-modal\">\n    <div class=\"import-zone\">\n      <div class=\"accept\">\n      <p class=\"warning\">\n        En important une image, vous confirmez qu’elle ne va ni à l’encontre de la loi ni des droits de tiers. Vous pouvez <a href=\"\">ici</a> en savoir davantage sur les motifs de refus de Sneakit.\n      </p>\n      <div class=\"toggle-contain\" (click)=\"onClick()\">\n        <div id=\"toggle\">\n          <div class=\"inner-container\">\n            <div class=\"toggle\">\n              <p>Oui</p>\n            </div>\n            <div class=\"toggle\">\n              <p>Non</p>\n            </div>\n          </div>\n          <div class=\"inner-container\" id='toggle-container'>\n            <div class=\"toggle\">\n              <p>Oui</p>\n            </div>\n            <div class=\"toggle\">\n              <p>Non</p>\n            </div>\n          </div>\n        </div>\n      </div> \n      </div>\n\n      <label id=\"largeFile\" for=\"file\">\n        <input type=\"file\" (change)=\"loadFile($event)\" id=\"file\" />\n        Importer un fichier\n      </label>\n\n    </div>\n    <div class=\"content-imported\">\n      <img id=\"output\"/>\n    </div>\n  </div>\n  <div class=\"container-button\">\n    <button (click)=\"uploadImage()\">Importer</button>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/modals/modalLib/modalLib.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/modals/modalLib/modalLib.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"popup\">\n    <div class=\"header-container\">\n      <h2>Selectionner un design</h2>\n      <div class=\"close\" (click)=\"closeDialog()\">&times;</div>\n    </div>\n    <div class=\"container-modal\">\n      <div class=\"category-list\">\n        <div class=\"category-item\" (click)=\"getCurrentCategory('photo')\">\n          <span>Images</span>\n        </div>\n        <div class=\"category-item\" (click)=\"getCurrentCategory('illu')\">\n          <span>Illustrations</span>\n        </div>\n        <div class=\"category-item\" (click)=\"getCurrentCategory('girly')\">\n          <span>Girly</span>\n        </div>\n      </div>\n      <div class=\"content\">\n        <ul class=\"assets\" id=\"list\">\n            <li class=\"item-modal\" *ngFor=\"let item of currentCat\">\n                <img class=\"img-stock\" [src]=\"item.img\" (click)=\"addStockImg($event, item)\" alt=\"image asset\" width=\"400\" height=\"500\"/>\n                <div *ngIf=\"item.colors.length > 0\">\n                  <img class=\"multi\" src=\"./assets/icons/color-wheel.svg\" alt=\"\">\n                </div>\n                <div class=\"infos-item\">\n                    <span class=\"name\">{{ item.name }}</span>\n                    <span class=\"price\">{{ item.price }}€</span>\n                </div>\n            </li>\n        </ul>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/modals/modalNike/modalNike.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/modals/modalNike/modalNike.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"popup\">\n    <div class=\"header-container\">\n      <h2>Selectionner un design nike</h2>\n      <div class=\"close\" (click)=\"closeDialog()\">&times;</div>\n    </div>\n    <div class=\"container-modal\">\n      <div class=\"category-list\">\n        <div class=\"category-item\" (click)=\"getCurrentCategory('photo')\">\n          <span>Swoosh</span>\n        </div>\n        <div class=\"category-item\" (click)=\"getCurrentCategory('illu')\">\n          <span>Empeigne</span>\n        </div>\n        <div class=\"category-item\" (click)=\"getCurrentCategory('girly')\">\n          <span>Trimestre</span>\n        </div>\n      </div>\n      <div class=\"content\">\n        <ul class=\"assets\" id=\"list\">\n            <li class=\"item-modal\" *ngFor=\"let item of currentCat\">\n                <img class=\"img-stock\" [src]=\"item.img\" (click)=\"addStockImg($event, item)\" alt=\"image asset\" width=\"400\" height=\"500\"/>\n                <div *ngIf=\"item.colors.length > 0\">\n                  <img class=\"multi\" src=\"./assets/icons/color-wheel.svg\" alt=\"\">\n                </div>\n                <div class=\"infos-item\">\n                    <span class=\"name\">{{ item.name }}</span>\n                    <span class=\"price\">{{ item.price }}€</span>\n                </div>\n            </li>\n        </ul>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #171717;\n}\n\n.container-app {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  max-width: 980px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbnNlcnJhbm8vY3VzdG9tU25lYWsvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlDQUFBO0VBQ0EsY0FBQTtBQ0RGOztBREdBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzE3MTcxN1xufVxuLmNvbnRhaW5lci1hcHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDk4MHB4O1xuICBtYXJnaW46IGF1dG87XG59IiwiKiB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzE3MTcxNztcbn1cblxuLmNvbnRhaW5lci1hcHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDk4MHB4O1xuICBtYXJnaW46IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_assetsLib_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/assetsLib.service */ "./src/services/assetsLib.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let AppComponent = class AppComponent {
    constructor(dialog, assetsLib, sanitizer) {
        this.dialog = dialog;
        this.assetsLib = assetsLib;
        this.sanitizer = sanitizer;
        this.step = 1;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _services_assetsLib_service__WEBPACK_IMPORTED_MODULE_3__["AssetsLibService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _step1_step1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./step1/step1.page */ "./src/app/step1/step1.page.ts");
/* harmony import */ var _step2_step2_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./step2/step2.page */ "./src/app/step2/step2.page.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/ngrx-store-devtools.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux */ "./src/redux/index.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/services.module */ "./src/services/services.module.ts");
/* harmony import */ var _components_modals_modal_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/modals/modal.module */ "./src/components/modals/modal.module.ts");









// ***** Redux *****



// ***** App *****


// ***** Components *****

let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _step1_step1_page__WEBPACK_IMPORTED_MODULE_6__["Step1Component"],
            _step2_step2_page__WEBPACK_IMPORTED_MODULE_7__["Step2Component"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _components_modals_modal_module__WEBPACK_IMPORTED_MODULE_14__["ModalModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            _services_services_module__WEBPACK_IMPORTED_MODULE_13__["ServiceModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot(_redux__WEBPACK_IMPORTED_MODULE_11__["reducers"], { initialState: _redux__WEBPACK_IMPORTED_MODULE_11__["INITIAL_STATE"] }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument({ maxAge: 10, name: '[SNEAKIT]' }),
        ],
        providers: [
            _step1_step1_page__WEBPACK_IMPORTED_MODULE_6__["Step1Component"],
            _step2_step2_page__WEBPACK_IMPORTED_MODULE_7__["Step2Component"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/shared.module.ts":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-inline-svg */ "./node_modules/ng-inline-svg/lib_esmodule/index.js");
// ####################################################################
// ######################## Externals #################################
// ####################################################################

// ***** @angular *****




// ***** Material *****

// ***** other *****

// ####################################################################
// ######################## Internal #################################
// ####################################################################
// ***** App *****
// ***** Pipe *****
let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"].forRoot(),
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"]
        ],
        providers: [],
        bootstrap: [],
        entryComponents: [],
        exports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/step1/step1.page.scss":
/*!***************************************!*\
  !*** ./src/app/step1/step1.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-step1 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nh2 {\n  font-family: \"anton\";\n  color: #171717;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.container-shoes {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.item-shoes {\n  margin: auto;\n  padding: 24px;\n  cursor: pointer;\n}\n\n.item-shoes img {\n  height: 135px;\n}\n\n.item-shoes:hover {\n  background-color: #FAFAFA;\n}\n\n.item-shoes.active {\n  background-color: #FAFAFA;\n}\n\n.button {\n  background-color: #171717;\n  padding: 8px 32px;\n  color: white;\n  margin: 16px 0 0 auto;\n  font-size: 14px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.button.disabled {\n  opacity: 0.5;\n  pointer-events: none;\n  cursor: auto;\n}\n\n@media only screen and (max-width: 768px) {\n  .container-shoes {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    padding: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbnNlcnJhbm8vY3VzdG9tU25lYWsvc3JjL2FwcC9zdGVwMS9zdGVwMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3N0ZXAxL3N0ZXAxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQUk7RUFDSSxhQUFBO0FDRVI7O0FEQUk7RUFDSSx5QkFBQTtBQ0VSOztBREFJO0VBQ0kseUJBQUE7QUNFUjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDQ0o7O0FEQUk7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDRVI7O0FERUE7RUFFSTtJQUNJLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLFlBQUE7RUNBTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3RlcDEvc3RlcDEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1zdGVwMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5oMiB7XG4gICAgZm9udC1mYW1pbHk6ICdhbnRvbic7XG4gICAgY29sb3I6ICMxNzE3MTc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jb250YWluZXItc2hvZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLml0ZW0tc2hvZXMge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDEzNXB4O1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgICB9XG4gICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICAgIH1cbn1cblxuLmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogICMxNzE3MTc7XG4gICAgcGFkZGluZzogOHB4IDMycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMTZweCAwIDAgYXV0bztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICYuZGlzYWJsZWQge1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBjdXJzb3I6IGF1dG87XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcblxuICAgIC5jb250YWluZXItc2hvZXMge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgfVxuICB9IiwiLmNvbnRhaW5lci1zdGVwMSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwiYW50b25cIjtcbiAgY29sb3I6ICMxNzE3MTc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNvbnRhaW5lci1zaG9lcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uaXRlbS1zaG9lcyB7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLml0ZW0tc2hvZXMgaW1nIHtcbiAgaGVpZ2h0OiAxMzVweDtcbn1cbi5pdGVtLXNob2VzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cbi5pdGVtLXNob2VzLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG59XG5cbi5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xuICBwYWRkaW5nOiA4cHggMzJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDE2cHggMCAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5idXR0b24uZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IGF1dG87XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lci1zaG9lcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiA4cHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/step1/step1.page.ts":
/*!*************************************!*\
  !*** ./src/app/step1/step1.page.ts ***!
  \*************************************/
/*! exports provided: Step1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1Component", function() { return Step1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");




let Step1Component = class Step1Component {
    constructor(snackBar, appComponent) {
        this.snackBar = snackBar;
        this.appComponent = appComponent;
        this.listShoes = [
            {
                type: "af1",
                img: "./assets/shoes/af1/out.png"
            },
            {
                type: "stan",
                img: "./assets/shoes/stan/in.png"
            }
        ];
    }
    ngOnInit() {
    }
    setActive(item) {
        for (let i = 0; i < this.listShoes.length; i++) {
            if (i === item) {
                this.listShoes[i].choose = true;
                this.choice = this.listShoes[i];
            }
            else
                this.listShoes[i].choose = false;
        }
    }
};
Step1Component.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] }
];
Step1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'step1',
        template: __webpack_require__(/*! raw-loader!./step1.page.html */ "./node_modules/raw-loader/index.js!./src/app/step1/step1.page.html"),
        styles: [__webpack_require__(/*! ./step1.page.scss */ "./src/app/step1/step1.page.scss")]
    })
], Step1Component);



/***/ }),

/***/ "./src/app/step2/step2.page.scss":
/*!***************************************!*\
  !*** ./src/app/step2/step2.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-family: \"anton\";\n  font-size: 18px;\n}\n\n.buttonBack {\n  display: -webkit-box;\n  display: flex;\n  margin: 0 auto 8px 0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  cursor: pointer;\n  font-size: 14px;\n}\n\n.buttonBack .change-button {\n  margin-right: 4px;\n}\n\n.buttonBack .change-button img {\n  height: 10px;\n}\n\n.export-btn {\n  height: 52px;\n  border: none;\n  border-radius: 0;\n  background-color: #171717;\n  color: white;\n  padding: 0 24px;\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.export-btn:hover {\n  background-color: #056ffa;\n}\n\n.container-models {\n  background-color: #F7F7F7;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  padding: 16px;\n}\n\n.bg-zone {\n  position: absolute;\n  width: 550px;\n  height: 280px;\n  overflow: hidden;\n}\n\n.bg-imagebande {\n  position: relative;\n  height: auto;\n  width: 1110px;\n  left: -606px;\n  top: -80px;\n}\n\n.bg-imagepointe {\n  position: relative;\n  height: auto;\n  width: 1144px;\n  left: -19px;\n  top: -181px;\n}\n\n.bg-imageswoosh {\n  position: relative;\n  height: auto;\n  width: 1185px;\n  left: -572px;\n  top: -104px;\n}\n\n.bg-imagetrim {\n  position: relative;\n  height: auto;\n  width: 1175px;\n  left: -396px;\n  top: -129px;\n}\n\n.change-button {\n  margin: auto auto;\n  cursor: pointer;\n}\n\n.change-button.left {\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n}\n\n.change-button img {\n  height: 20px;\n}\n\n.container-canvas {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n}\n\n.container-canvas .list-side {\n  width: 100%;\n  margin: 16px auto 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  cursor: pointer;\n}\n\n.container-canvas .list-side .item {\n  padding: 8px;\n}\n\n.container-canvas .list-side .item img {\n  height: 50px;\n  width: auto;\n}\n\n.container-canvas .list-side .item:hover {\n  background-color: #f0f0f0;\n}\n\n.side-container {\n  position: absolute;\n  width: 550px;\n  top: 30px;\n  z-index: 0;\n  display: -webkit-box;\n  display: flex;\n  height: 280px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.shoes-bg {\n  margin: auto;\n  height: 100%;\n  max-height: 280px;\n  max-width: 550px;\n  width: auto;\n  margin: auto;\n}\n\n.svg-preview svg {\n  width: 108px;\n  height: 50px;\n}\n\n.controls {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 80px;\n  height: calc(3 * 80px);\n  margin: 0 auto auto 0;\n}\n\n.controls .button {\n  height: 80px;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 12px;\n  color: #171717;\n  border: none;\n  border-radius: 0px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.controls .button:hover {\n  background-color: #f0f0f0;\n}\n\n.controls .button img {\n  height: 16px;\n  margin: auto auto 4px;\n}\n\n.controls .button span {\n  margin: 0 auto auto;\n}\n\n.switch-zone {\n  width: 100px;\n  height: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: -16px -16px -16px 0;\n}\n\n.switch-zone .switch-item {\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  cursor: pointer;\n}\n\n.switch-zone .switch-item.active {\n  background-color: #171717;\n}\n\n.switch-zone .switch-item.active:hover {\n  background-color: #171717;\n}\n\n.switch-zone .switch-item.active span {\n  color: white;\n}\n\n.switch-zone .switch-item:hover {\n  background-color: #f0f0f0;\n}\n\n.switch-zone .switch-item span {\n  margin: auto;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 14px;\n  color: #171717;\n}\n\n.header-control {\n  display: -webkit-box;\n  display: flex;\n  border-bottom: 3px solid #131313;\n  padding-bottom: 16px;\n}\n\n.header-control p {\n  margin: 0 auto;\n}\n\n.header-control span {\n  cursor: pointer;\n}\n\n.item-panel {\n  padding-left: 16px;\n  -webkit-box-flex: 5;\n          flex: 5;\n  height: 150px;\n  display: -webkit-box;\n  display: flex;\n}\n\n.item-panel#image {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.item-selected {\n  border: 1px solid #fafafa;\n  padding: 16px;\n  width: calc(100% - 34px);\n  height: 150px;\n  display: -webkit-box;\n  display: flex;\n}\n\n.item-selected .category-item {\n  border-right: 1px solid #fafafa;\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  padding-right: 16px;\n  max-width: 160px;\n}\n\n.item-selected .category-item span {\n  margin: auto;\n}\n\n.item-selected .category-item .delete-icon {\n  position: absolute;\n  background-color: #f54e58;\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  display: -webkit-box;\n  display: flex;\n}\n\n.item-selected .category-item .delete-icon img {\n  height: 16px;\n  margin: auto;\n}\n\n#general-controls {\n  display: block;\n  -webkit-box-flex: 4;\n          flex: 4;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.price-panel {\n  -webkit-box-flex: 1;\n          flex: 1;\n  border-left: 1px solid #fafafa;\n  padding-left: 16px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  min-width: 175px;\n}\n\n.price-panel span {\n  margin: auto;\n  text-decoration: underline;\n}\n\n.price-panel .button-cart {\n  background-color: #171717;\n  padding: 8px 32px;\n  color: white;\n  margin: 16px 0 0 auto;\n  font-size: 14px;\n  cursor: pointer;\n  margin: auto;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.price-panel .button-cart.disabled {\n  opacity: 0.5;\n  pointer-events: none;\n  cursor: auto;\n}\n\n.style-panel {\n  margin: auto 0;\n}\n\n#color-controls {\n  display: block;\n  margin: auto 0;\n}\n\n#color-list {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin: auto 0;\n}\n\n#color-list .color-item {\n  height: 32px;\n  width: 32px;\n  margin: 8px;\n  cursor: pointer;\n  box-sizing: border-box;\n  border-radius: 50%;\n}\n\n#color-list .color-item.active {\n  border: 3px solid #056ffa !important;\n}\n\n#color-list .color-item#FFFFFF {\n  border: 1px solid #131313;\n}\n\n.caption {\n  font-size: 10px;\n  text-align: center;\n  color: #131313;\n}\n\n.color-select {\n  height: 40px;\n  width: 40px;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  cursor: pointer;\n}\n\n.color-select:hover {\n  background-color: #e2e2e2;\n}\n\n.color-select .color-item {\n  margin: auto auto 2px auto;\n  height: 16px;\n  width: 16px;\n}\n\n.color-select .caption {\n  margin: 0 auto auto auto;\n}\n\n#img-controls-additional {\n  display: -webkit-box;\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n#text-controls-additional {\n  display: -webkit-box;\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n}\n\ninput[type=checkbox] {\n  display: none;\n}\n\ninput[type=checkbox]:checked + .text-control {\n  background-color: #171717;\n  color: white !important;\n}\n\n.text-control {\n  height: 40px;\n  width: 40px;\n  text-align: center;\n  line-height: 40px;\n  display: block;\n  cursor: pointer;\n}\n\n.text-control:hover {\n  background-color: #e2e2e2;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  -webkit-transition: opacity 50ms;\n  transition: opacity 50ms;\n  display: none;\n  opacity: 0;\n}\n\n.overlay:target {\n  display: -webkit-box;\n  display: flex;\n  opacity: 1;\n}\n\n.header-container {\n  border-bottom: 4px solid #131313;\n  display: -webkit-box;\n  display: flex;\n}\n\n.container-button {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.container-button button {\n  height: 52px;\n  border: none;\n  border-radius: 0;\n  background-color: #131313;\n  color: white;\n  padding: 0 24px;\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.container-button button:hover {\n  background-color: #056ffa;\n}\n\n.imgColor.active {\n  color: red;\n}\n\n.loader-container {\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(5, 111, 250, 0.3);\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  z-index: 101;\n}\n\n.loader-container h4 {\n  margin: 24px auto auto auto;\n}\n\n.loader {\n  position: relative;\n  margin: auto auto 0;\n  width: 100px;\n}\n\n.loader:before {\n  content: \"\";\n  display: block;\n  padding-top: 100%;\n}\n\n.circular {\n  -webkit-animation: rotate 2s linear infinite;\n          animation: rotate 2s linear infinite;\n  height: 100%;\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.path {\n  stroke-dasharray: 1, 200;\n  stroke-dashoffset: 0;\n  -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;\n          animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;\n  stroke-linecap: round;\n}\n\n@-webkit-keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n\n@-webkit-keyframes color {\n  100%, 0% {\n    stroke: #d62d20;\n  }\n  40% {\n    stroke: #0057e7;\n  }\n  66% {\n    stroke: #008744;\n  }\n  80%, 90% {\n    stroke: #ffa700;\n  }\n}\n\n@keyframes color {\n  100%, 0% {\n    stroke: #d62d20;\n  }\n  40% {\n    stroke: #0057e7;\n  }\n  66% {\n    stroke: #008744;\n  }\n  80%, 90% {\n    stroke: #ffa700;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .container-canvas {\n    -webkit-transform: scale(0.65);\n            transform: scale(0.65);\n    margin-left: -110px;\n    margin-top: -30px;\n    -webkit-box-ordinal-group: 3;\n            order: 2;\n  }\n\n  .container-models {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n\n  .controls {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    width: calc(3 * 80px);\n    height: 80px;\n    margin-top: -50px;\n    -webkit-box-ordinal-group: 4;\n            order: 3;\n  }\n  .controls .button {\n    margin: 0 auto;\n  }\n\n  .change-button {\n    display: none;\n  }\n\n  .switch-zone {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    width: auto;\n    height: 50px;\n    -webkit-box-ordinal-group: 2;\n            order: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbnNlcnJhbm8vY3VzdG9tU25lYWsvc3JjL2FwcC9zdGVwMi9zdGVwMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3N0ZXAyL3N0ZXAyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREFJO0VBQ0ksaUJBQUE7QUNFUjs7QUREUTtFQUNJLFlBQUE7QUNHWjs7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQUk7RUFDSSx5QkFBQTtBQ0VSOztBREVBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNLSjs7QURIQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ01KOztBREpBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDT0o7O0FETkk7RUFDSSw2QkFBQTtVQUFBLHFCQUFBO0FDUVI7O0FETkk7RUFDSSxZQUFBO0FDUVI7O0FETEE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0FDUUo7O0FEUEk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNTUjs7QURSUTtFQUNJLFlBQUE7QUNVWjs7QURUWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDV2hCOztBRFRZO0VBQ0kseUJBQUE7QUNXaEI7O0FETkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7QUNTSjs7QURQQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDVUo7O0FEUEk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ1VSOztBRFBBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUNVSjs7QURUSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDV1I7O0FEVlE7RUFDSSx5QkFBQTtBQ1laOztBRFZRO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0FDWVo7O0FEVlE7RUFDSSxtQkFBQTtBQ1laOztBRFJBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSwyQkFBQTtBQ1dKOztBRFZJO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7QUNZUjs7QURYUTtFQUNJLHlCQUFBO0FDYVo7O0FEWlk7RUFDSSx5QkFBQTtBQ2NoQjs7QURaWTtFQUNJLFlBQUE7QUNjaEI7O0FEWFE7RUFDSSx5QkFBQTtBQ2FaOztBRFhRO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ2FaOztBRFRBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQ1lKOztBRFhJO0VBQ0ksY0FBQTtBQ2FSOztBRFhJO0VBQ0ksZUFBQTtBQ2FSOztBRFZBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDYUo7O0FEWkk7RUFDSSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNjUjs7QURYQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ2NKOztBRGJJO0VBQ0ksK0JBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDZVI7O0FEZFE7RUFDSSxZQUFBO0FDZ0JaOztBRGRRO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNnQlo7O0FEZlk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ2lCaEI7O0FEWkE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDZUo7O0FEYkE7RUFDSSxtQkFBQTtVQUFBLE9BQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNnQko7O0FEZkk7RUFDSSxZQUFBO0VBQ0EsMEJBQUE7QUNpQlI7O0FEZkk7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNpQlI7O0FEaEJRO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ2tCWjs7QURkQTtFQUNJLGNBQUE7QUNpQko7O0FEZkE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQ2tCSjs7QURiQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDZ0JKOztBRGZJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNpQlI7O0FEaEJRO0VBQ0ksb0NBQUE7QUNrQlo7O0FEaEJRO0VBQ0kseUJBQUE7QUNrQlo7O0FEZEE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDaUJKOztBRGZBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZUFBQTtBQ2tCSjs7QURqQkk7RUFDSSx5QkFBQTtBQ21CUjs7QURqQkk7RUFDSSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDbUJSOztBRGpCSTtFQUNJLHdCQUFBO0FDbUJSOztBRGhCQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ21CSjs7QURqQkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxjQUFBO0FDb0JKOztBRGxCQTtFQUNJLGFBQUE7QUNxQko7O0FEbkJRO0VBQ0kseUJBQUE7RUFDQSx1QkFBQTtBQ3FCWjs7QURqQkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ29CSjs7QURuQkk7RUFDSSx5QkFBQTtBQ3FCUjs7QURsQkE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFBQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDcUJKOztBRG5CQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFVBQUE7QUNzQko7O0FEbkJBO0VBQ0ksZ0NBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNzQko7O0FEcEJBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUN1Qko7O0FEdEJJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUN3QlI7O0FEdkJRO0VBQ0kseUJBQUE7QUN5Qlo7O0FEbkJJO0VBQ0ksVUFBQTtBQ3NCUjs7QURUQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0FDWUo7O0FEWEk7RUFDSSwyQkFBQTtBQ2FSOztBRFZBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBbEJNO0FDK0JSOztBRFpFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ2NKOztBRFZBO0VBQ0UsNENBQUE7VUFBQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUNhRjs7QURWQTtFQUNFLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnRkFBQTtVQUFBLHdFQUFBO0VBQ0EscUJBQUE7QUNhRjs7QURWQTtFQUNFO0lBQ0UsaUNBQUE7WUFBQSx5QkFBQTtFQ2FGO0FBQ0Y7O0FEaEJBO0VBQ0U7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0VDYUY7QUFDRjs7QURWQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxvQkFBQTtFQ1lGO0VEVkE7SUFDRSx5QkFBQTtJQUNBLHdCQUFBO0VDWUY7RURWQTtJQUNFLHlCQUFBO0lBQ0EseUJBQUE7RUNZRjtBQUNGOztBRHhCQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxvQkFBQTtFQ1lGO0VEVkE7SUFDRSx5QkFBQTtJQUNBLHdCQUFBO0VDWUY7RURWQTtJQUNFLHlCQUFBO0lBQ0EseUJBQUE7RUNZRjtBQUNGOztBRFRBO0VBQ0U7SUFFRSxlQTNFRTtFQ3FGSjtFRFJBO0lBQ0UsZUEvRUc7RUN5Rkw7RURSQTtJQUNFLGVBbkZJO0VDNkZOO0VEUkE7SUFFRSxlQXBGSztFQzZGUDtBQUNGOztBRHZCQTtFQUNFO0lBRUUsZUEzRUU7RUNxRko7RURSQTtJQUNFLGVBL0VHO0VDeUZMO0VEUkE7SUFDRSxlQW5GSTtFQzZGTjtFRFJBO0lBRUUsZUFwRks7RUM2RlA7QUFDRjs7QURKQTtFQUVJO0lBQ0ksOEJBQUE7WUFBQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSw0QkFBQTtZQUFBLFFBQUE7RUNLTjs7RURIRTtJQUNJLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtFQ01OOztFREpFO0lBQ0ksOEJBQUE7SUFBQSw2QkFBQTtZQUFBLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSw0QkFBQTtZQUFBLFFBQUE7RUNPTjtFRE5NO0lBQ0ksY0FBQTtFQ1FWOztFRExFO0lBQ0ksYUFBQTtFQ1FOOztFRE5FO0lBQ0ksOEJBQUE7SUFBQSw2QkFBQTtZQUFBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSw0QkFBQTtZQUFBLFFBQUE7RUNTTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3RlcDIvc3RlcDIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogXCJhbnRvblwiO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmJ1dHRvbkJhY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwIGF1dG8gOHB4IDA7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLmNoYW5nZS1idXR0b24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmV4cG9ydC1idG4ge1xuICAgIGhlaWdodDogNTJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwIDI0cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU2ZmZhO1xuICAgIH1cbn1cblxuLmNvbnRhaW5lci1tb2RlbHMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmc6IDE2cHg7XG59XG4uYmctem9uZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1NTBweDtcbiAgICBoZWlnaHQ6IDI4MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYmctaW1hZ2ViYW5kZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMTExMHB4O1xuICAgIGxlZnQ6IC02MDZweDtcbiAgICB0b3A6IC04MHB4O1xufVxuLmJnLWltYWdlcG9pbnRlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMTQ0cHg7XG4gICAgbGVmdDogLTE5cHg7XG4gICAgdG9wOiAtMTgxcHg7XG59XG4uYmctaW1hZ2Vzd29vc2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDExODVweDtcbiAgICBsZWZ0OiAtNTcycHg7XG4gICAgdG9wOiAtMTA0cHg7XG59XG4uYmctaW1hZ2V0cmltIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMTc1cHg7XG4gICAgbGVmdDogLTM5NnB4O1xuICAgIHRvcDogLTEyOXB4O1xufVxuLmNoYW5nZS1idXR0b24ge1xuICAgIG1hcmdpbjogYXV0byBhdXRvO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmLmxlZnQge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICB9XG59XG4uY29udGFpbmVyLWNhbnZhcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAubGlzdC1zaWRlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMTZweCBhdXRvIDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvcjogI2ZhZmFmYSwgJGFtb3VudDogNCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4uc2lkZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNTUwcHg7XG4gICAgdG9wOiAzMHB4O1xuICAgIHotaW5kZXg6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDI4MHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cbi5zaG9lcy1iZyB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAyODBweDtcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5zdmctcHJldmlldyB7XG4gICAgc3ZnIHtcbiAgICAgICAgd2lkdGg6IDEwOHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxufVxuLmNvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiBjYWxjKDMgKiA4MHB4KTtcbiAgICBtYXJnaW46IDAgYXV0byBhdXRvIDA7XG4gICAgLmJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjMTcxNzE3O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yOiAjZmFmYWZhLCAkYW1vdW50OiA0KTtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG8gNHB4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gYXV0bztcbiAgICAgICAgfVxuICAgIH1cbn1cbi5zd2l0Y2gtem9uZSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAtMTZweCAtMTZweCAtMTZweCAwO1xuICAgIC5zd2l0Y2gtaXRlbSB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvcjogI2ZhZmFmYSwgJGFtb3VudDogNCk7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzE3MTcxNztcbiAgICAgICAgfVxuICAgIH1cbn1cbi5oZWFkZXItY29udHJvbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzEzMTMxMztcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIHNwYW4ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuLml0ZW0tcGFuZWwge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBmbGV4OiA1O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAmI2ltYWdlIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG59XG4uaXRlbS1zZWxlY3RlZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZhZmFmYTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzNHB4KTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLmNhdGVnb3J5LWl0ZW0ge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmFmYWZhO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgICBtYXgtd2lkdGg6IDE2MHB4O1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuZGVsZXRlLWljb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1NGU1ODtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiNnZW5lcmFsLWNvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbGV4OiA0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5wcmljZS1wYW5lbCB7XG4gICAgZmxleDogMTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmYWZhZmE7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4td2lkdGg6IDE3NXB4O1xuICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgICAuYnV0dG9uLWNhcnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzE3MTcxNztcbiAgICAgICAgcGFkZGluZzogOHB4IDMycHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWFyZ2luOiAxNnB4IDAgMCBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgICAgfVxuICAgIH1cbn1cbi5zdHlsZS1wYW5lbCB7XG4gICAgbWFyZ2luOiBhdXRvIDA7XG59XG4jY29sb3ItY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0byAwO1xuICAgIC8vICYuZGlzcGxheSB7XG4gICAgLy8gICBkaXNwbGF5OiBibG9ja1xuICAgIC8vIH1cbn1cbiNjb2xvci1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW46IGF1dG8gMDtcbiAgICAuY29sb3ItaXRlbSB7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIG1hcmdpbjogOHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzA1NmZmYSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgICYjRkZGRkZGIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMzEzMTM7XG4gICAgICAgIH1cbiAgICB9XG59XG4uY2FwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzEzMTMxMztcbn1cbi5jb2xvci1zZWxlY3Qge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcbiAgICB9XG4gICAgLmNvbG9yLWl0ZW0ge1xuICAgICAgICBtYXJnaW46IGF1dG8gYXV0byAycHggYXV0bztcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICB9XG4gICAgLmNhcHRpb24ge1xuICAgICAgICBtYXJnaW46IDAgYXV0byBhdXRvIGF1dG87XG4gICAgfVxufVxuI2ltZy1jb250cm9scy1hZGRpdGlvbmFsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbiN0ZXh0LWNvbnRyb2xzLWFkZGl0aW9uYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgICY6Y2hlY2tlZCB7XG4gICAgICAgICsgLnRleHQtY29udHJvbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4udGV4dC1jb250cm9sIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcbiAgICB9XG59XG4ub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MG1zO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcbn1cbi5vdmVybGF5OnRhcmdldCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMxMzEzMTM7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5jb250YWluZXItYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzEzMTM7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMCAyNHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1NmZmYTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmltZ0NvbG9yIHtcbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxufVxuXG5cbiRncmVlbjogIzAwODc0NDtcbiRibHVlOiAjMDA1N2U3O1xuJHJlZDogI2Q2MmQyMDtcbiR5ZWxsb3c6ICNmZmE3MDA7XG4kd2hpdGU6ICNlZWU7XG5cbi8vIHNjYWxpbmcuLi4gYW55IHVuaXRzXG4kd2lkdGg6IDEwMHB4O1xuLmxvYWRlci1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDU2RkZBLCAkYWxwaGE6IDAuMyk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB6LWluZGV4OiAxMDE7XG4gICAgaDQge1xuICAgICAgICBtYXJnaW46IDI0cHggYXV0byBhdXRvIGF1dG87XG4gICAgfVxufVxuLmxvYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiBhdXRvIGF1dG8gMDtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmctdG9wOiAxMDAlO1xuICB9XG59XG5cbi5jaXJjdWxhciB7XG4gIGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnBhdGgge1xuICBzdHJva2UtZGFzaGFycmF5OiAxLCAyMDA7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICBhbmltYXRpb246IGRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSwgY29sb3IgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbn1cblxuQGtleWZyYW1lcyByb3RhdGUge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZGFzaCB7XG4gIDAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxLCAyMDA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiA4OSwgMjAwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMzVweDtcbiAgfVxuICAxMDAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiA4OSwgMjAwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTI0cHg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBjb2xvciB7XG4gIDEwMCUsXG4gIDAlIHtcbiAgICBzdHJva2U6ICRyZWQ7XG4gIH1cbiAgNDAlIHtcbiAgICBzdHJva2U6ICRibHVlO1xuICB9XG4gIDY2JSB7XG4gICAgc3Ryb2tlOiAkZ3JlZW47XG4gIH1cbiAgODAlLFxuICA5MCUge1xuICAgIHN0cm9rZTogJHllbGxvdztcbiAgfVxufVxuXG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XG5cbiAgICAuY29udGFpbmVyLWNhbnZhcyB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjY1KTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgICAgIG9yZGVyOiAyO1xuICAgIH1cbiAgICAuY29udGFpbmVyLW1vZGVscyB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5jb250cm9scyB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHdpZHRoOiBjYWxjKDMgKiA4MHB4KTtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICAgICAgb3JkZXI6IDM7XG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNoYW5nZS1idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuc3dpdGNoLXpvbmUge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBvcmRlcjogMTtcbiAgICB9XG59IiwiLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiYW50b25cIjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYnV0dG9uQmFjayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCBhdXRvIDhweCAwO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmJ1dHRvbkJhY2sgLmNoYW5nZS1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbi5idXR0b25CYWNrIC5jaGFuZ2UtYnV0dG9uIGltZyB7XG4gIGhlaWdodDogMTBweDtcbn1cblxuLmV4cG9ydC1idG4ge1xuICBoZWlnaHQ6IDUycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5leHBvcnQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1NmZmYTtcbn1cblxuLmNvbnRhaW5lci1tb2RlbHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uYmctem9uZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDU1MHB4O1xuICBoZWlnaHQ6IDI4MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmctaW1hZ2ViYW5kZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTExMHB4O1xuICBsZWZ0OiAtNjA2cHg7XG4gIHRvcDogLTgwcHg7XG59XG5cbi5iZy1pbWFnZXBvaW50ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTE0NHB4O1xuICBsZWZ0OiAtMTlweDtcbiAgdG9wOiAtMTgxcHg7XG59XG5cbi5iZy1pbWFnZXN3b29zaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTE4NXB4O1xuICBsZWZ0OiAtNTcycHg7XG4gIHRvcDogLTEwNHB4O1xufVxuXG4uYmctaW1hZ2V0cmltIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMTc1cHg7XG4gIGxlZnQ6IC0zOTZweDtcbiAgdG9wOiAtMTI5cHg7XG59XG5cbi5jaGFuZ2UtYnV0dG9uIHtcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jaGFuZ2UtYnV0dG9uLmxlZnQge1xuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG59XG4uY2hhbmdlLWJ1dHRvbiBpbWcge1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5jb250YWluZXItY2FudmFzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmNvbnRhaW5lci1jYW52YXMgLmxpc3Qtc2lkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDE2cHggYXV0byAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lci1jYW52YXMgLmxpc3Qtc2lkZSAuaXRlbSB7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5jb250YWluZXItY2FudmFzIC5saXN0LXNpZGUgLml0ZW0gaW1nIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogYXV0bztcbn1cbi5jb250YWluZXItY2FudmFzIC5saXN0LXNpZGUgLml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xufVxuXG4uc2lkZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1NTBweDtcbiAgdG9wOiAzMHB4O1xuICB6LWluZGV4OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDI4MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLnNob2VzLWJnIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDI4MHB4O1xuICBtYXgtd2lkdGg6IDU1MHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uc3ZnLXByZXZpZXcgc3ZnIHtcbiAgd2lkdGg6IDEwOHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IGNhbGMoMyAqIDgwcHgpO1xuICBtYXJnaW46IDAgYXV0byBhdXRvIDA7XG59XG4uY29udHJvbHMgLmJ1dHRvbiB7XG4gIGhlaWdodDogODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMTcxNzE3O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb250cm9scyAuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbn1cbi5jb250cm9scyAuYnV0dG9uIGltZyB7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luOiBhdXRvIGF1dG8gNHB4O1xufVxuLmNvbnRyb2xzIC5idXR0b24gc3BhbiB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG87XG59XG5cbi5zd2l0Y2gtem9uZSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IC0xNnB4IC0xNnB4IC0xNnB4IDA7XG59XG4uc3dpdGNoLXpvbmUgLnN3aXRjaC1pdGVtIHtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zd2l0Y2gtem9uZSAuc3dpdGNoLWl0ZW0uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcbn1cbi5zd2l0Y2gtem9uZSAuc3dpdGNoLWl0ZW0uYWN0aXZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcbn1cbi5zd2l0Y2gtem9uZSAuc3dpdGNoLWl0ZW0uYWN0aXZlIHNwYW4ge1xuICBjb2xvcjogd2hpdGU7XG59XG4uc3dpdGNoLXpvbmUgLnN3aXRjaC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbn1cbi5zd2l0Y2gtem9uZSAuc3dpdGNoLWl0ZW0gc3BhbiB7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMxNzE3MTc7XG59XG5cbi5oZWFkZXItY29udHJvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTMxMzEzO1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cbi5oZWFkZXItY29udHJvbCBwIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uaGVhZGVyLWNvbnRyb2wgc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLml0ZW0tcGFuZWwge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIGZsZXg6IDU7XG4gIGhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaXRlbS1wYW5lbCNpbWFnZSB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5pdGVtLXNlbGVjdGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZhZmFmYTtcbiAgcGFkZGluZzogMTZweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDM0cHgpO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLml0ZW0tc2VsZWN0ZWQgLmNhdGVnb3J5LWl0ZW0ge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmFmYWZhO1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDE2MHB4O1xufVxuLml0ZW0tc2VsZWN0ZWQgLmNhdGVnb3J5LWl0ZW0gc3BhbiB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5pdGVtLXNlbGVjdGVkIC5jYXRlZ29yeS1pdGVtIC5kZWxldGUtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1NGU1ODtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLml0ZW0tc2VsZWN0ZWQgLmNhdGVnb3J5LWl0ZW0gLmRlbGV0ZS1pY29uIGltZyB7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4jZ2VuZXJhbC1jb250cm9scyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4OiA0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucHJpY2UtcGFuZWwge1xuICBmbGV4OiAxO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmYWZhZmE7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAxNzVweDtcbn1cbi5wcmljZS1wYW5lbCBzcGFuIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5wcmljZS1wYW5lbCAuYnV0dG9uLWNhcnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xuICBwYWRkaW5nOiA4cHggMzJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDE2cHggMCAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IGF1dG87XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnByaWNlLXBhbmVsIC5idXR0b24tY2FydC5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGN1cnNvcjogYXV0bztcbn1cblxuLnN0eWxlLXBhbmVsIHtcbiAgbWFyZ2luOiBhdXRvIDA7XG59XG5cbiNjb2xvci1jb250cm9scyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG8gMDtcbn1cblxuI2NvbG9yLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbjogYXV0byAwO1xufVxuI2NvbG9yLWxpc3QgLmNvbG9yLWl0ZW0ge1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICBtYXJnaW46IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4jY29sb3ItbGlzdCAuY29sb3ItaXRlbS5hY3RpdmUge1xuICBib3JkZXI6IDNweCBzb2xpZCAjMDU2ZmZhICFpbXBvcnRhbnQ7XG59XG4jY29sb3ItbGlzdCAuY29sb3ItaXRlbSNGRkZGRkYge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTMxMzEzO1xufVxuXG4uY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzEzMTMxMztcbn1cblxuLmNvbG9yLXNlbGVjdCB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbG9yLXNlbGVjdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZTI7XG59XG4uY29sb3Itc2VsZWN0IC5jb2xvci1pdGVtIHtcbiAgbWFyZ2luOiBhdXRvIGF1dG8gMnB4IGF1dG87XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG59XG4uY29sb3Itc2VsZWN0IC5jYXB0aW9uIHtcbiAgbWFyZ2luOiAwIGF1dG8gYXV0byBhdXRvO1xufVxuXG4jaW1nLWNvbnRyb2xzLWFkZGl0aW9uYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbiN0ZXh0LWNvbnRyb2xzLWFkZGl0aW9uYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5pbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgLnRleHQtY29udHJvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1jb250cm9sIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50ZXh0LWNvbnRyb2w6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmUyO1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTBtcztcbiAgZGlzcGxheTogbm9uZTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm92ZXJsYXk6dGFyZ2V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzEzMTMxMztcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNvbnRhaW5lci1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5jb250YWluZXItYnV0dG9uIGJ1dHRvbiB7XG4gIGhlaWdodDogNTJweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzEzO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lci1idXR0b24gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1NmZmYTtcbn1cblxuLmltZ0NvbG9yLmFjdGl2ZSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5sb2FkZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUsIDExMSwgMjUwLCAwLjMpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgei1pbmRleDogMTAxO1xufVxuLmxvYWRlci1jb250YWluZXIgaDQge1xuICBtYXJnaW46IDI0cHggYXV0byBhdXRvIGF1dG87XG59XG5cbi5sb2FkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0byBhdXRvIDA7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5sb2FkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAxMDAlO1xufVxuXG4uY2lyY3VsYXIge1xuICBhbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5wYXRoIHtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMjAwO1xuICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgYW5pbWF0aW9uOiBkYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUsIGNvbG9yIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBkYXNoIHtcbiAgMCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDIwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgfVxuICA1MCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNXB4O1xuICB9XG4gIDEwMCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjRweDtcbiAgfVxufVxuQGtleWZyYW1lcyBjb2xvciB7XG4gIDEwMCUsIDAlIHtcbiAgICBzdHJva2U6ICNkNjJkMjA7XG4gIH1cbiAgNDAlIHtcbiAgICBzdHJva2U6ICMwMDU3ZTc7XG4gIH1cbiAgNjYlIHtcbiAgICBzdHJva2U6ICMwMDg3NDQ7XG4gIH1cbiAgODAlLCA5MCUge1xuICAgIHN0cm9rZTogI2ZmYTcwMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVyLWNhbnZhcyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjY1KTtcbiAgICBtYXJnaW4tbGVmdDogLTExMHB4O1xuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgIG9yZGVyOiAyO1xuICB9XG5cbiAgLmNvbnRhaW5lci1tb2RlbHMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuY29udHJvbHMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IGNhbGMoMyAqIDgwcHgpO1xuICAgIGhlaWdodDogODBweDtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICBvcmRlcjogMztcbiAgfVxuICAuY29udHJvbHMgLmJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuY2hhbmdlLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5zd2l0Y2gtem9uZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgb3JkZXI6IDE7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/step2/step2.page.ts":
/*!*************************************!*\
  !*** ./src/app/step2/step2.page.ts ***!
  \*************************************/
/*! exports provided: Step2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2Component", function() { return Step2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_modals_modalLib_modalLib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modals/modalLib/modalLib */ "./src/components/modals/modalLib/modalLib.ts");
/* harmony import */ var _components_modals_modalImport_modalImport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/modals/modalImport/modalImport */ "./src/components/modals/modalImport/modalImport.ts");
/* harmony import */ var _components_modals_modalNike_modalNike__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/modals/modalNike/modalNike */ "./src/components/modals/modalNike/modalNike.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_assetsLib_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/assetsLib.service */ "./src/services/assetsLib.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var async__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! async */ "./node_modules/async/dist/async.js");
/* harmony import */ var async__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(async__WEBPACK_IMPORTED_MODULE_10__);











let Step2Component = class Step2Component {
    constructor(dialog, assetsLib, sanitizer, appComponent) {
        this.dialog = dialog;
        this.assetsLib = assetsLib;
        this.sanitizer = sanitizer;
        this.appComponent = appComponent;
        this.colorDisplay = false;
        this.colorList = ["131313", "FFFFFF", "192F97", "D41C3B", "FF9090", "A92355", "E35110"];
        this.generalDisplay = false;
        this.imgDisplay = false;
        this.backgroundColorDisplay = false;
        this.isBold = false;
        this.isItalic = false;
        this.side = "";
        this.switch = "shoes";
        this.sideNumber = 0;
        this.totalPrice = 0;
        this.loading = false;
        this.choice = this.appComponent.choice;
    }
    // public choice: any = {type: "af1"}
    ngOnInit() {
        this.canvas = new fabric__WEBPACK_IMPORTED_MODULE_2__["fabric"].Canvas('c');
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
        ];
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
            ];
            this.jsonZone = {
                "version": "4.2.0", "objects": [
                    { "type": "image", "version": "4.2.0", "originX": "left", "originY": "top", "left": 12.4, "top": 120.79, "width": 550, "height": 194, "fill": "rgb(0,0,0)", "stroke": null, "strokeWidth": 0, "strokeDashArray": null, "strokeLineCap": "butt", "strokeDashOffset": 0, "strokeLineJoin": "miter", "strokeMiterLimit": 4, "scaleX": 0.49, "scaleY": 0.49, "angle": 0, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "backgroundColor": "", "fillRule": "nonzero", "paintFirst": "fill", "globalCompositeOperation": "source-atop", "skewX": 0, "skewY": 0, "cropX": 0, "cropY": 0, "id": "pointe", "selectable": false, "src": "http://localhost:4000/assets/illustration/pointe.svg", "crossOrigin": null, "filters": [] },
                    { "type": "image", "version": "4.2.0", "originX": "left", "originY": "top", "left": 221.64, "top": 76.15, "width": 394, "height": 280, "fill": "rgb(0,0,0)", "stroke": null, "strokeWidth": 0, "strokeDashArray": null, "strokeLineCap": "butt", "strokeDashOffset": 0, "strokeLineJoin": "miter", "strokeMiterLimit": 4, "scaleX": 0.47, "scaleY": 0.47, "angle": 0, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "backgroundColor": "", "fillRule": "nonzero", "paintFirst": "fill", "globalCompositeOperation": "source-atop", "skewX": 0, "skewY": 0, "cropX": 0, "cropY": 0, "id": "trim", "selectable": false, "src": "http://localhost:4000/assets/illustration/trim.svg", "crossOrigin": null, "filters": [] },
                    { "type": "image", "version": "4.2.0", "originX": "left", "originY": "top", "left": 324.41, "top": 56.44, "width": 447, "height": 281, "fill": "rgb(0,0,0)", "stroke": null, "strokeWidth": 0, "strokeDashArray": null, "strokeLineCap": "butt", "strokeDashOffset": 0, "strokeLineJoin": "miter", "strokeMiterLimit": 4, "scaleX": 0.49, "scaleY": 0.49, "angle": 0, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "backgroundColor": "", "fillRule": "nonzero", "paintFirst": "fill", "globalCompositeOperation": "source-atop", "skewX": 0, "skewY": 0, "cropX": 0, "cropY": 0, "id": "bande", "selectable": false, "src": "http://localhost:4000/assets/illustration/bande.svg", "crossOrigin": null, "filters": [] },
                    { "type": "image", "version": "4.2.0", "originX": "left", "originY": "top", "left": 243.21, "top": 90, "width": 550, "height": 159, "fill": "rgb(0,0,0)", "stroke": null, "strokeWidth": 0, "strokeDashArray": null, "strokeLineCap": "butt", "strokeDashOffset": 0, "strokeLineJoin": "miter", "strokeMiterLimit": 4, "scaleX": 0.5, "scaleY": 0.5, "angle": 0, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "backgroundColor": "", "fillRule": "nonzero", "paintFirst": "fill", "globalCompositeOperation": "source-atop", "skewX": 0, "skewY": 0, "cropX": 0, "cropY": 0, "id": "swoosh", "selectable": false, "src": "http://localhost:4000/assets/illustration/swoosh.svg", "crossOrigin": null, "filters": [] }
                ]
            };
        }
        this.init();
    }
    ngAfterViewInit() {
        this.canvas.on('selection:created', (e) => {
            this.onObjectSelected();
        });
        this.canvas.on('selection:cleared', (e) => {
            this.onObjectCleared();
        });
        this.canvas.on('selection:updated', (e) => {
            this.onObjectUpdated();
        });
    }
    onMessage(event) {
        this.loading = false;
        if (event.data.pay)
            this.receiveMessage(event);
    }
    receiveMessage(event) {
        // this.respond()
    }
    respond() {
        this.loading = true;
        this.exportToSvg();
        setTimeout(() => {
            var data = {
                svg: this.listSide,
                price: this.totalPrice
            };
            window.parent.postMessage(data, "*");
        }, 50);
    }
    init() {
        this.displayJson(0);
    }
    changeSide(src) {
        async__WEBPACK_IMPORTED_MODULE_10__["waterfall"]([
            callback => {
                this.exportToSvg();
                let ctx = this.canvas.getContext("2d");
                ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                callback();
            },
            (callback) => {
                this.displayJson(src);
                callback();
            },
        ], (error) => {
            if (error) {
                return console.log('error', error);
            }
        });
    }
    displayJson(src) {
        if (this.switch === "shoes") {
            if (src === 4)
                src = 0;
            if (src < 0)
                src = 3;
            if (this.listSide[src].svg === "") {
                let that = this;
                fabric__WEBPACK_IMPORTED_MODULE_2__["fabric"].Image.fromURL(this.listSide[src].img, function (objects, options) {
                    let background = objects;
                    let ratioHeight = that.canvas.height / background.getScaledHeight();
                    let ratioWidth = that.canvas.width / background.getScaledWidth();
                    let ratio = Math.min(ratioHeight, ratioWidth);
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
            this.sideNumber = src;
            this.loadJson(src);
        }
        if (this.switch === "zones") {
            if (src === 4)
                src = 0;
            if (src < 0)
                src = 3;
            if (this.listZones[src].svg === "") {
                let that = this;
                fabric__WEBPACK_IMPORTED_MODULE_2__["fabric"].Image.fromURL(this.listZones[src].img, function (objects, options) {
                    let background = objects;
                    let ratioHeight = that.canvas.height / background.getScaledHeight();
                    let ratioWidth = that.canvas.width / background.getScaledWidth();
                    let ratio = Math.min(ratioHeight, ratioWidth);
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
            this.sideNumber = src;
            this.loadJson(src);
        }
    }
    changeBg(color) {
        let that = this;
        this.canvas.getObjects().forEach(function (o) {
            if (o.id.includes("bgZone")) {
                var filter = new fabric__WEBPACK_IMPORTED_MODULE_2__["fabric"].Image.filters.BlendColor({
                    color: '#' + color,
                    mode: 'multiply'
                });
                o.filters.splice(0, 1, filter);
                o.applyFilters();
                that.canvas.renderAll();
            }
        });
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
        var rect = new fabric__WEBPACK_IMPORTED_MODULE_2__["fabric"].Rect({
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
        var itext = new fabric__WEBPACK_IMPORTED_MODULE_2__["fabric"].IText('Double clique pour modifier', {
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
        this.totalPrice += itext.price;
        this.canvas.add(itext);
    }
    exportToSvg() {
        var exportSvg = this.canvas.toSVG();
        var exportB64 = this.canvas.toDataURL();
        // this.canvas.toDataURL();
        var json_data = JSON.stringify(this.canvas.toObject(['price', 'id', 'selectable']));
        console.log('json_data', json_data);
        if (this.switch === "shoes") {
            this.listSide[this.sideNumber].svg = exportSvg;
            this.listSide[this.sideNumber].json = json_data;
            this.listSide[this.sideNumber].b64 = exportB64;
        }
        if (this.switch === "zones") {
            this.listZones[this.sideNumber].svg = exportSvg;
            this.listZones[this.sideNumber].json = json_data;
            this.listZones[this.sideNumber].b64 = exportB64;
        }
    }
    getByName(name) {
        /**
     * Item name is unique
     */
        // fabric.Canvas.prototype.getItemByName = function(name) {
        var object = null, objects = fabric__WEBPACK_IMPORTED_MODULE_2__["fabric"].Canvas.prototype.getObjects();
        for (var i = 0, len = fabric__WEBPACK_IMPORTED_MODULE_2__["fabric"].Canvas.prototype.size(); i < len; i++) {
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
        let oImg;
        let that = this;
        // console.log('this.canvas.getObjects()', this.canvas.getObjects())
        for (let index = 0; index < this.listZones.length; index++) {
            this.canvas.forEachObject(function (o) {
                console.log('oe', o);
                console.log('index', index);
                fabric__WEBPACK_IMPORTED_MODULE_2__["fabric"].Image.fromURL(that.listZones[index].b64, (img) => {
                    // img.scaleToWidth(300);
                    switch (index) {
                        case 0:
                            var oImg = img.set({ left: 301.71, top: 56.47, width: 550, height: 280, scaleX: 0.49, scaleY: 0.49, selectable: true, id: "bgZone" + index });
                            break;
                        case 1:
                            var oImg = img.set({ left: 11.22, top: 102.18, width: 550, height: 280, scaleX: 0.48, scaleY: 0.48, selectable: true, id: "bgZone" + index });
                            break;
                        case 2:
                            var oImg = img.set({ left: 264.06, top: 62.13, width: 550, height: 280, scaleX: 0.47, scaleY: 0.47, selectable: true, id: "bgZone" + index });
                            break;
                        case 3:
                            var oImg = img.set({ left: 185.61, top: 75.86, width: 550, height: 280, scaleX: 0.46, scaleY: 0.46, selectable: true, id: "bgZone" + index });
                            break;
                        default:
                            break;
                    }
                    that.canvas.add(oImg);
                    that.canvas.renderAll();
                });
                if (o.id === "bgZone" + index) {
                    console.log('isExist');
                    // o.set({src: that.listZones[index].b64})
                    o.setSrc(that.listZones[index].b64);
                    that.canvas.renderAll();
                }
                else {
                    console.log('nop');
                }
            });
        }
        let objects = that.canvas.getObjects()[1]; //return Array<objects>
        console.log('okok', objects);
    }
    // use modal images
    addStockImg(e) {
        fabric__WEBPACK_IMPORTED_MODULE_2__["fabric"].Image.fromURL(e.img, (img) => {
            img.scaleToWidth(100);
            var oImg = img.set({
                left: 225,
                top: 140,
                angle: 0,
                id: e.item.id,
                price: e.item.price,
                flipX: false,
                flipY: false,
            });
            oImg.globalCompositeOperation = 'source-atop';
            this.canvas.add(oImg);
            this.canvas.renderAll();
            this.totalPrice += oImg.price;
        }, null, { crossOrigin: 'Anonymous' });
    }
    blur(event) {
        this.canvas.getActiveObject().set("text", event.srcElement.innerText);
        this.canvas.add(this.canvas.getActiveObject()).renderAll();
    }
    // upload image
    importImg(e) {
        const fileReader = new FileReader();
        var oImg;
        fileReader.onloadend = (event) => {
            var data = fileReader.result;
            fabric__WEBPACK_IMPORTED_MODULE_2__["fabric"].Image.fromURL(data, (img) => {
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
                });
                oImg.globalCompositeOperation = 'source-atop';
                this.canvas.add(oImg).renderAll();
                this.totalPrice += oImg.price;
            });
        };
        fileReader.readAsDataURL(e);
    }
    onObjectSelected() {
        // check if type is a property of active element
        this.objType = (this.canvas.getActiveObject().type ? this.canvas.getActiveObject().type : "");
        this.activeObject = this.canvas.getActiveObject();
        this.switchDisplay(this.objType);
    }
    getImgById(id) {
        this.imgLib = this.assetsLib.getById(id);
    }
    onObjectCleared() {
        this.clear();
        this.exportToSvg();
        this.activeObject = null;
    }
    onObjectUpdated() {
        this.clear();
        this.exportToSvg();
        this.activeObject = this.canvas.getActiveObject();
        // check if type is a property of active element
        this.objType = (this.canvas.getActiveObject().type ? this.canvas.getActiveObject().type : "");
        this.switchDisplay(this.objType);
    }
    deleteObject() {
        this.totalPrice -= this.canvas.getActiveObject().price;
        this.canvas.remove(this.canvas.getActiveObject());
        this.canvas.renderAll();
    }
    clickColor() {
        this.generalDisplay = false;
        this.colorDisplay = true;
    }
    ;
    back() {
        this.objType = (this.canvas.getActiveObject().type ? this.canvas.getActiveObject().type : "");
        this.generalDisplay = true;
        this.colorDisplay = false;
        this.switchDisplay(this.objType);
    }
    clear() {
        this.generalDisplay = false;
        this.colorDisplay = false;
        this.imgDisplay = false;
    }
    textTransform() {
        if (this.isBold)
            this.canvas.getActiveObject().set("fontWeight", "bold");
        else
            this.canvas.getActiveObject().set("fontWeight", "");
        if (this.isItalic)
            this.canvas.getActiveObject().set("fontStyle", "italic");
        else
            this.canvas.getActiveObject().set("fontStyle", "");
        this.canvas.renderAll();
    }
    changeFont(event) {
        this.canvas.getActiveObject().set("fontFamily", event);
        this.canvas.renderAll();
    }
    displayBackgroundChoice() {
        this.generalDisplay = false;
        this.imgDisplay = false;
        this.backgroundColorDisplay = true;
    }
    switchDisplay(obj) {
        this.backgroundColorDisplay = false;
        switch (this.objType) {
            case 'i-text':
                var obj = this.canvas.getActiveObject();
                this.generalDisplay = true;
                this.activeColor = obj.fill;
                if (obj.fontWeight === 'bold') {
                    this.isBold = true;
                }
                else {
                    this.isBold = false;
                }
                if (obj.fontStyle === 'italic') {
                    this.isItalic = true;
                }
                else {
                    this.isItalic = false;
                }
                break;
            case 'image':
                this.imgDisplay = true;
                this.getImgById(this.activeObject.id);
                break;
            case 'rect':
                this.imgDisplay = true;
                break;
            default:
                console.log(`Sorry, we are out of`);
        }
    }
    switchZone(zone) {
        async__WEBPACK_IMPORTED_MODULE_10__["waterfall"]([
            callback => {
                this.exportToSvg();
                callback();
            },
            (callback) => {
                this.switch = zone;
                callback();
            },
            (callback) => {
                this.side = null;
                this.displayJson(0);
                callback();
            },
            (callback) => {
                if (zone === "shoes") {
                    this.addB64Zone();
                }
                callback();
            },
        ], (error) => {
            if (error) {
                return console.log('error', error);
            }
        });
    }
    bringForward() {
        let el = this.canvas.getActiveObject();
        this.canvas.bringForward(el);
        setTimeout(() => {
            this.canvas.renderAll();
        }, 150);
    }
    bringBackward() {
        let el = this.canvas.getActiveObject();
        this.canvas.sendBackwards(el);
        setTimeout(() => {
            this.canvas.renderAll();
        }, 150);
    }
    flipX() {
        let el = this.canvas.getActiveObject();
        this.canvas.set("flipX", !this.canvas.getActiveObject().flipX);
        setTimeout(() => {
            this.canvas.renderAll();
        }, 150);
    }
    flipY() {
        let el = this.canvas.getActiveObject();
        this.canvas.set("flipY", !this.canvas.getActiveObject().flipY);
        setTimeout(() => {
            this.canvas.renderAll();
        }, 150);
    }
    changeColor(color) {
        var elements = document.getElementsByClassName("color-item");
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove("active");
        }
        this.canvas.getActiveObject().set("fill", "#" + color);
        this.canvas.renderAll();
        var node = document.getElementById(color);
        node.classList.add("active");
    }
    changeColorImg(color) {
        let oImg;
        this.canvas.getActiveObject().setSrc(color.img, (img) => {
            img.scaleToWidth(300);
            oImg = img.set({
                color: color.color
            });
            this.canvas.renderAll();
        });
    }
    openModalLib() {
        const dialogRef = this.dialog.open(_components_modals_modalLib_modalLib__WEBPACK_IMPORTED_MODULE_3__["ModalLibDialog"], {
            maxWidth: '70vw',
            data: {
            // item: item, 
            },
            position: {
                top: '70px',
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.addStockImg(result);
        });
    }
    openModalNike() {
        const dialogRef = this.dialog.open(_components_modals_modalNike_modalNike__WEBPACK_IMPORTED_MODULE_5__["ModalNikeDialog"], {
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
            this.addStockImg(result);
        });
    }
    openModalImport() {
        const dialogRef = this.dialog.open(_components_modals_modalImport_modalImport__WEBPACK_IMPORTED_MODULE_4__["ModalImportDialog"], {
            maxWidth: '70vw',
            data: {
            // item: item, 
            },
            position: {
                top: '70px',
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.importImg(result);
        });
    }
};
Step2Component.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _services_assetsLib_service__WEBPACK_IMPORTED_MODULE_7__["AssetsLibService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:message', ['$event'])
], Step2Component.prototype, "onMessage", null);
Step2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'step2',
        template: __webpack_require__(/*! raw-loader!./step2.page.html */ "./node_modules/raw-loader/index.js!./src/app/step2/step2.page.html"),
        styles: [__webpack_require__(/*! ./step2.page.scss */ "./src/app/step2/step2.page.scss")]
    })
], Step2Component);



/***/ }),

/***/ "./src/components/modals/blankModal/blank.scss":
/*!*****************************************************!*\
  !*** ./src/components/modals/blankModal/blank.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9tb2RhbHMvYmxhbmtNb2RhbC9ibGFuay5zY3NzIn0= */"

/***/ }),

/***/ "./src/components/modals/blankModal/blank.ts":
/*!***************************************************!*\
  !*** ./src/components/modals/blankModal/blank.ts ***!
  \***************************************************/
/*! exports provided: BlankDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankDialog", function() { return BlankDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let BlankDialog = class BlankDialog {
    constructor(dialogRef, snackBar, data) {
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.data = data;
    }
    ngOnInit() {
    }
    closeDialog() {
        this.dialogRef.close();
    }
};
BlankDialog.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
BlankDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'blank',
        template: __webpack_require__(/*! raw-loader!./blank.html */ "./node_modules/raw-loader/index.js!./src/components/modals/blankModal/blank.html"),
        styles: [__webpack_require__(/*! ./blank.scss */ "./src/components/modals/blankModal/blank.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], BlankDialog);



/***/ }),

/***/ "./src/components/modals/modal.module.ts":
/*!***********************************************!*\
  !*** ./src/components/modals/modal.module.ts ***!
  \***********************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _blankModal_blank__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blankModal/blank */ "./src/components/modals/blankModal/blank.ts");
/* harmony import */ var _modalImport_modalImport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modalImport/modalImport */ "./src/components/modals/modalImport/modalImport.ts");
/* harmony import */ var _modalLib_modalLib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modalLib/modalLib */ "./src/components/modals/modalLib/modalLib.ts");
/* harmony import */ var _modalNike_modalNike__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modalNike/modalNike */ "./src/components/modals/modalNike/modalNike.ts");
/* harmony import */ var _app_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/shared.module */ "./src/app/shared.module.ts");




// ***** Dialogs *****





let ModalModule = class ModalModule {
};
ModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _blankModal_blank__WEBPACK_IMPORTED_MODULE_4__["BlankDialog"],
            _modalImport_modalImport__WEBPACK_IMPORTED_MODULE_5__["ModalImportDialog"],
            _modalLib_modalLib__WEBPACK_IMPORTED_MODULE_6__["ModalLibDialog"],
            _modalNike_modalNike__WEBPACK_IMPORTED_MODULE_7__["ModalNikeDialog"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _app_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        ],
        providers: [],
        bootstrap: [],
        entryComponents: [
            _blankModal_blank__WEBPACK_IMPORTED_MODULE_4__["BlankDialog"],
            _modalImport_modalImport__WEBPACK_IMPORTED_MODULE_5__["ModalImportDialog"],
            _modalLib_modalLib__WEBPACK_IMPORTED_MODULE_6__["ModalLibDialog"],
            _modalNike_modalNike__WEBPACK_IMPORTED_MODULE_7__["ModalNikeDialog"],
        ],
        exports: [
            _blankModal_blank__WEBPACK_IMPORTED_MODULE_4__["BlankDialog"],
            _modalImport_modalImport__WEBPACK_IMPORTED_MODULE_5__["ModalImportDialog"],
            _modalLib_modalLib__WEBPACK_IMPORTED_MODULE_6__["ModalLibDialog"],
            _modalNike_modalNike__WEBPACK_IMPORTED_MODULE_7__["ModalNikeDialog"],
        ]
    })
], ModalModule);



/***/ }),

/***/ "./src/components/modals/modalImport/modalImport.scss":
/*!************************************************************!*\
  !*** ./src/components/modals/modalImport/modalImport.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popup {\n  background: #fff;\n  position: relative;\n  -webkit-transition: all 5s ease-in-out;\n  transition: all 5s ease-in-out;\n}\n\n.header-container {\n  border-bottom: 4px solid #131313;\n  display: -webkit-box;\n  display: flex;\n}\n\n.popup h2 {\n  margin: 0 0 20px;\n  color: #333;\n  font-family: Arial, sans-serif;\n  text-transform: uppercase;\n}\n\n.popup .close {\n  margin: 0 0 0 auto;\n  -webkit-transition: all 200ms;\n  transition: all 200ms;\n  font-size: 24px;\n  font-weight: bold;\n  text-decoration: none;\n  color: #333;\n}\n\n.popup .close:hover {\n  color: #056FFA;\n}\n\n.popup .content {\n  max-height: 30%;\n  overflow: auto;\n}\n\n.container-modal {\n  display: -webkit-box;\n  display: flex;\n}\n\n.container-button {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.container-button button {\n  height: 52px;\n  border: none;\n  border-radius: 0;\n  background-color: #131313;\n  color: white;\n  padding: 0 24px;\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.container-button button:hover {\n  background-color: #056FFA;\n}\n\n.import-zone {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 2;\n          flex: 2;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.import-zone .warning {\n  font-size: 14px;\n  color: #131313;\n}\n\n.content-imported {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 4;\n          flex: 4;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.toggle-container {\n  background-color: #131313;\n}\n\n.toggle-contain {\n  position: relative;\n}\n\n#toggle {\n  width: 160px;\n  height: 36px;\n  position: relative;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  border: 3px solid #131313;\n  margin-top: 8px;\n}\n\n.inner-container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: inherit;\n  height: inherit;\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 0.2em;\n}\n\n.inner-container:first-child {\n  background: #FFF;\n  color: #131313;\n}\n\n.inner-container:nth-child(2) {\n  background: #131313;\n  color: white;\n  -webkit-clip-path: inset(0 50% -1px -1px);\n          clip-path: inset(0 50% -1px -1px);\n  -webkit-transition: 0.3s cubic-bezier(0, 0, 0, 1);\n  transition: 0.3s cubic-bezier(0, 0, 0, 1);\n}\n\n.toggle {\n  width: 50%;\n  position: absolute;\n  height: inherit;\n  display: -webkit-box;\n  display: flex;\n  box-sizing: border-box;\n  font-weight: bold;\n}\n\n.toggle p {\n  margin: auto;\n}\n\n.toggle:nth-child(1) {\n  right: 0;\n}\n\nlabel#largeFile {\n  margin-top: 16px;\n  content: \"Importer votre fichier\";\n  left: 0;\n  right: 0;\n  text-align: center;\n  padding: 50px 0px 50px 0px;\n  border: 3px dashed #131313;\n  color: #131313;\n  font-size: 18px;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\nlabel#largeFile:hover {\n  cursor: pointer;\n}\n\nlabel#largeFile input#file {\n  width: 0px;\n  height: 0px;\n}\n\n.content-imported {\n  margin: 16px;\n  display: -webkit-box;\n  display: flex;\n}\n\n#output {\n  height: auto;\n  max-height: 500px;\n  max-width: 100%;\n  margin: auto;\n}\n\n.item-panel {\n  visibility: hidden;\n}\n\n.item-panel.visible {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbnNlcnJhbm8vY3VzdG9tU25lYWsvc3JjL2NvbXBvbmVudHMvbW9kYWxzL21vZGFsSW1wb3J0L21vZGFsSW1wb3J0LnNjc3MiLCJzcmMvY29tcG9uZW50cy9tb2RhbHMvbW9kYWxJbXBvcnQvbW9kYWxJbXBvcnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUFBLDhCQUFBO0FDQUo7O0FERUU7RUFDRSxnQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0NKOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQ0VKOztBREFFO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUFBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDR0o7O0FEREU7RUFDRSxjQUFBO0FDSUo7O0FERkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0tKOztBREhFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDTUo7O0FESkU7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtBQ09KOztBRE5JO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNRTjs7QURQTTtFQUNFLHlCQUFBO0FDU1I7O0FESkU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNPSjs7QUROSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDUU47O0FETEU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNRSjs7QURKRTtFQUNFLHlCQUFBO0FDT0o7O0FETEU7RUFDRSxrQkFBQTtBQ1FKOztBRE5FO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDU0o7O0FETkU7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ1NKOztBRE5FO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDU0o7O0FETkU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0EsaURBQUE7RUFBQSx5Q0FBQTtBQ1NKOztBRE5FO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNTSjs7QURORTtFQUNFLFlBQUE7QUNTSjs7QURORTtFQUNFLFFBQUE7QUNTSjs7QURORTtFQUNFLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQ1NKOztBRE5FO0VBQ0UsZUFBQTtBQ1NKOztBRE5FO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNTTjs7QURQRTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNVSjs7QURSRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDV0o7O0FEUkU7RUFDRSxrQkFBQTtBQ1dKOztBRFZJO0VBQ0UsbUJBQUE7QUNZTiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9tb2RhbHMvbW9kYWxJbXBvcnQvbW9kYWxJbXBvcnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnBvcHVwIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLmhlYWRlci1jb250YWluZXIge1xuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMTMxMzEzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLnBvcHVwIGgyIHtcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5wb3B1cCAuY2xvc2Uge1xuICAgIG1hcmdpbjogMCAwIDAgYXV0bztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxuICAucG9wdXAgLmNsb3NlOmhvdmVyIHtcbiAgICBjb2xvcjogIzA1NkZGQTtcbiAgfVxuICAucG9wdXAgLmNvbnRlbnQge1xuICAgIG1heC1oZWlnaHQ6IDMwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuICAuY29udGFpbmVyLW1vZGFsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5jb250YWluZXItYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYnV0dG9uIHtcbiAgICAgIGhlaWdodDogNTJweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzEzO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMCAyNHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTZGRkFcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaW1wb3J0LXpvbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC53YXJuaW5nIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjMTMxMzEzXG4gICAgfVxuICB9XG4gIC5jb250ZW50LWltcG9ydGVkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBcbiAgLy8gVG9nZ2xlIGJ1dHRvbiBodHRwczovL2NvZGVwZW4uaW8vamFyZWtvOTk5L3Blbi9lQmF5WUw/ZWRpdG9ycz0xMTExXG4gIC50b2dnbGUtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzEzO1xuICB9XG4gIC50b2dnbGUtY29udGFpbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG4gIH1cbiAgI3RvZ2dsZSB7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzEzMTMxMztcbiAgICBtYXJnaW4tdG9wOiA4cHhcbiAgfVxuICBcbiAgLmlubmVyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjJlbTtcbiAgfVxuICBcbiAgLmlubmVyLWNvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICBjb2xvcjogIzEzMTMxMztcbiAgfVxuICBcbiAgLmlubmVyLWNvbnRhaW5lcjpudGgtY2hpbGQoMikge1xuICAgIGJhY2tncm91bmQ6ICMxMzEzMTM7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoMCA1MCUgLTFweCAtMXB4KTtcbiAgICB0cmFuc2l0aW9uOiAuM3MgY3ViaWMtYmV6aWVyKDAsMCwwLDEpO1xuICB9XG4gIFxuICAudG9nZ2xlIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAudG9nZ2xlIHAge1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICBcbiAgLnRvZ2dsZTpudGgtY2hpbGQoMSkge1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIFxuICBsYWJlbCNsYXJnZUZpbGUge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgY29udGVudDpcIkltcG9ydGVyIHZvdHJlIGZpY2hpZXJcIjtcbiAgICBsZWZ0OjA7XG4gICAgcmlnaHQ6MDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBwYWRkaW5nOjUwcHggMHB4IDUwcHggMHB4O1xuICAgIGJvcmRlcjozcHggZGFzaGVkICMxMzEzMTM7XG4gICAgY29sb3I6IzEzMTMxMztcbiAgICBmb250LXNpemU6MThweDsgXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgXG4gIGxhYmVsI2xhcmdlRmlsZTpob3ZlciB7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG4gIH1cbiAgXG4gIGxhYmVsI2xhcmdlRmlsZSBpbnB1dCNmaWxlIHtcbiAgICAgIHdpZHRoOiAwcHg7XG4gICAgICBoZWlnaHQ6IDBweDtcbiAgfVxuICAuY29udGVudC1pbXBvcnRlZCB7XG4gICAgbWFyZ2luOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgI291dHB1dCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG9cbiAgfVxuICBcbiAgLml0ZW0tcGFuZWwge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAmLnZpc2libGUge1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZVxuICAgIH1cbiAgfSIsIi5wb3B1cCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDVzIGVhc2UtaW4tb3V0O1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMTMxMzEzO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucG9wdXAgaDIge1xuICBtYXJnaW46IDAgMCAyMHB4O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ucG9wdXAgLmNsb3NlIHtcbiAgbWFyZ2luOiAwIDAgMCBhdXRvO1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5wb3B1cCAuY2xvc2U6aG92ZXIge1xuICBjb2xvcjogIzA1NkZGQTtcbn1cblxuLnBvcHVwIC5jb250ZW50IHtcbiAgbWF4LWhlaWdodDogMzAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmNvbnRhaW5lci1tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250YWluZXItYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uY29udGFpbmVyLWJ1dHRvbiBidXR0b24ge1xuICBoZWlnaHQ6IDUycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTMxMztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXItYnV0dG9uIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTZGRkE7XG59XG5cbi5pbXBvcnQtem9uZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaW1wb3J0LXpvbmUgLndhcm5pbmcge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMTMxMzEzO1xufVxuXG4uY29udGVudC1pbXBvcnRlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50b2dnbGUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTMxMztcbn1cblxuLnRvZ2dsZS1jb250YWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jdG9nZ2xlIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAzcHggc29saWQgIzEzMTMxMztcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uaW5uZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xufVxuXG4uaW5uZXItY29udGFpbmVyOmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgY29sb3I6ICMxMzEzMTM7XG59XG5cbi5pbm5lci1jb250YWluZXI6bnRoLWNoaWxkKDIpIHtcbiAgYmFja2dyb3VuZDogIzEzMTMxMztcbiAgY29sb3I6IHdoaXRlO1xuICBjbGlwLXBhdGg6IGluc2V0KDAgNTAlIC0xcHggLTFweCk7XG4gIHRyYW5zaXRpb246IDAuM3MgY3ViaWMtYmV6aWVyKDAsIDAsIDAsIDEpO1xufVxuXG4udG9nZ2xlIHtcbiAgd2lkdGg6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udG9nZ2xlIHAge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi50b2dnbGU6bnRoLWNoaWxkKDEpIHtcbiAgcmlnaHQ6IDA7XG59XG5cbmxhYmVsI2xhcmdlRmlsZSB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGNvbnRlbnQ6IFwiSW1wb3J0ZXIgdm90cmUgZmljaGllclwiO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1MHB4IDBweCA1MHB4IDBweDtcbiAgYm9yZGVyOiAzcHggZGFzaGVkICMxMzEzMTM7XG4gIGNvbG9yOiAjMTMxMzEzO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxubGFiZWwjbGFyZ2VGaWxlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5sYWJlbCNsYXJnZUZpbGUgaW5wdXQjZmlsZSB7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xufVxuXG4uY29udGVudC1pbXBvcnRlZCB7XG4gIG1hcmdpbjogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI291dHB1dCB7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaXRlbS1wYW5lbCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5pdGVtLXBhbmVsLnZpc2libGUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/components/modals/modalImport/modalImport.ts":
/*!**********************************************************!*\
  !*** ./src/components/modals/modalImport/modalImport.ts ***!
  \**********************************************************/
/*! exports provided: ModalImportDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalImportDialog", function() { return ModalImportDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ModalImportDialog = class ModalImportDialog {
    constructor(dialogRef, snackBar, data) {
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.data = data;
        this.toggle = document.getElementById('toggle');
        this.toggleContainer = document.getElementById('toggle-container');
        this.importInput = document.getElementById('largeFile');
    }
    ngOnInit() {
        this.toggle = document.getElementById('toggle');
        this.toggleContainer = document.getElementById('toggle-container');
        this.importInput = document.getElementById('largeFile');
    }
    onClick() {
        this.toggleNumber = !this.toggleNumber;
        if (this.toggleNumber) {
            this.toggleContainer.style.clipPath = 'inset(0 -1px -1px 50%)';
            this.importInput.style.pointerEvents = 'auto';
        }
        else {
            this.toggleContainer.style.clipPath = 'inset(0 50% -1px -1px)';
            this.importInput.style.pointerEvents = 'none';
        }
    }
    loadFile(event) {
        this.fileLoaded = event;
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src); // free memory
        };
    }
    ;
    // upload image
    uploadImage() {
        var file = this.fileLoaded.target.files[0];
        this.closeDialog(file);
    }
    closeDialog(item) {
        this.dialogRef.close(item);
    }
};
ModalImportDialog.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ModalImportDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'modalImport',
        template: __webpack_require__(/*! raw-loader!./modalImport.html */ "./node_modules/raw-loader/index.js!./src/components/modals/modalImport/modalImport.html"),
        styles: [__webpack_require__(/*! ./modalImport.scss */ "./src/components/modals/modalImport/modalImport.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ModalImportDialog);



/***/ }),

/***/ "./src/components/modals/modalLib/modalLib.scss":
/*!******************************************************!*\
  !*** ./src/components/modals/modalLib/modalLib.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popup {\n  background: #fff;\n  position: relative;\n  -webkit-transition: all 5s ease-in-out;\n  transition: all 5s ease-in-out;\n}\n\n.header-container {\n  border-bottom: 4px solid #171717;\n  display: -webkit-box;\n  display: flex;\n}\n\n.popup h2 {\n  margin: 0 0 20px;\n  color: #333;\n  font-family: \"anton\", Arial, sans-serif;\n  text-transform: uppercase;\n}\n\n.popup .close {\n  margin: 0 0 0 auto;\n  -webkit-transition: all 200ms;\n  transition: all 200ms;\n  font-size: 24px;\n  font-weight: bold;\n  text-decoration: none;\n  color: #171717;\n  cursor: pointer;\n}\n\n.popup .close:hover {\n  color: #056FFA;\n}\n\n.popup .content {\n  max-height: 30%;\n  overflow: auto;\n}\n\n.container-modal {\n  display: -webkit-box;\n  display: flex;\n  max-height: 500px;\n}\n\n.container-button {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.container-button button {\n  height: 52px;\n  border: none;\n  border-radius: 0;\n  background-color: #171717;\n  color: white;\n  padding: 0 24px;\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.container-button button:hover {\n  background-color: #056FFA;\n}\n\n.category-list {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 16px 16px 16px 0;\n}\n\n.category-item {\n  line-height: 56px;\n  background-color: #171717;\n  padding: 0 16px;\n  margin: 4px 0;\n  text-align: center;\n  font-family: arial;\n  color: white;\n  font-size: 18px;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-family: \"anton\";\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.category-item:hover {\n  background-color: #056FFA;\n}\n\nul {\n  margin: 0 !important;\n  -webkit-margin-before: 0;\n          margin-block-start: 0;\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\n\n.assets {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n  margin: 0 !important;\n  padding: 16px;\n  overflow-y: scroll;\n}\n\n.assets img {\n  height: 150px;\n  width: auto;\n  margin: auto 16px;\n}\n\n.assets .multi {\n  position: absolute;\n  width: 25px;\n  top: 25px;\n  margin-left: 25px;\n}\n\n.item-modal {\n  margin: 8px 0;\n  cursor: pointer;\n}\n\n.item-modal:hover .img-stock {\n  background-color: #FAFAFA;\n}\n\n.img-stock {\n  background-color: #F6F7FB;\n  padding: 8px;\n}\n\n.infos-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin: auto 16px;\n  text-transform: uppercase;\n}\n\n.infos-item .name {\n  padding: 4px;\n  font-size: 12px;\n}\n\n.infos-item .price {\n  background-color: #171717;\n  padding: 4px;\n  color: white;\n  font-size: 12px;\n}\n\n@media only screen and (max-width: 768px) {\n  .container-modal {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbnNlcnJhbm8vY3VzdG9tU25lYWsvc3JjL2NvbXBvbmVudHMvbW9kYWxzL21vZGFsTGliL21vZGFsTGliLnNjc3MiLCJzcmMvY29tcG9uZW50cy9tb2RhbHMvbW9kYWxMaWIvbW9kYWxMaWIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUFBLDhCQUFBO0FDQUo7O0FERUU7RUFDRSxnQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0NKOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSx5QkFBQTtBQ0VKOztBREFFO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUFBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0dKOztBRERFO0VBQ0UsY0FBQTtBQ0lKOztBREZFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNLSjs7QURIRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0FDTUo7O0FESkU7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtBQ09KOztBRE5JO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNRTjs7QURQTTtFQUNFLHlCQUFBO0FDU1I7O0FETEU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtBQ1FKOztBRE5FO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDU0o7O0FEUkk7RUFDRSx5QkFBQTtBQ1VOOztBRFBFO0VBQ0Usb0JBQUE7RUFDQSx3QkFBQTtVQUFBLHFCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ1VKOztBRFJFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNXSjs7QURWSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNZTjs7QURWSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ1lOOztBRFRFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNZSjs7QURWTTtFQUNFLHlCQUFBO0FDWVI7O0FEUkU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNXSjs7QURURTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDWUo7O0FEWEk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ2FOOztBRFhJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNhTjs7QURURTtFQUVFO0lBQ0ksNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VDV047QUFDRiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9tb2RhbHMvbW9kYWxMaWIvbW9kYWxMaWIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnBvcHVwIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLmhlYWRlci1jb250YWluZXIge1xuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMTcxNzE3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLnBvcHVwIGgyIHtcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtZmFtaWx5OiAnYW50b24nLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5wb3B1cCAuY2xvc2Uge1xuICAgIG1hcmdpbjogMCAwIDAgYXV0bztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzE3MTcxNztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLnBvcHVwIC5jbG9zZTpob3ZlciB7XG4gICAgY29sb3I6ICMwNTZGRkE7XG4gIH1cbiAgLnBvcHVwIC5jb250ZW50IHtcbiAgICBtYXgtaGVpZ2h0OiAzMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbiAgLmNvbnRhaW5lci1tb2RhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgfVxuICAuY29udGFpbmVyLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6IDUycHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU2RkZBXG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5jYXRlZ29yeS1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMTZweCAxNnB4IDE2cHggMDtcbiAgfVxuICAuY2F0ZWdvcnktaXRlbSB7XG4gICAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgbWFyZ2luOiA0cHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogJ2FudG9uJztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU2RkZBO1xuICAgIH1cbiAgfVxuICB1bCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwXG4gIH1cbiAgLmFzc2V0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGltZyB7XG4gICAgICBoZWlnaHQgOiAxNTBweDtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgbWFyZ2luOiBhdXRvIDE2cHg7XG4gICAgfVxuICAgIC5tdWx0aSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIHRvcDogMjVweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIH1cbiAgfVxuICAuaXRlbS1tb2RhbCB7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjpob3ZlciB7XG4gICAgICAuaW1nLXN0b2NrIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmltZy1zdG9jayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjdGQjtcbiAgICBwYWRkaW5nOiA4cHg7XG4gIH1cbiAgLmluZm9zLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogYXV0byAxNnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgLm5hbWUge1xuICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4XG4gICAgfVxuICAgIC5wcmljZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xuICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAxMnB4XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XG5cbiAgICAuY29udGFpbmVyLW1vZGFsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgXG4gICAgfVxuICB9IiwiLnBvcHVwIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMxNzE3MTc7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wb3B1cCBoMiB7XG4gIG1hcmdpbjogMCAwIDIwcHg7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LWZhbWlseTogXCJhbnRvblwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnBvcHVwIC5jbG9zZSB7XG4gIG1hcmdpbjogMCAwIDAgYXV0bztcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMTcxNzE3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cCAuY2xvc2U6aG92ZXIge1xuICBjb2xvcjogIzA1NkZGQTtcbn1cblxuLnBvcHVwIC5jb250ZW50IHtcbiAgbWF4LWhlaWdodDogMzAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmNvbnRhaW5lci1tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xufVxuXG4uY29udGFpbmVyLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmNvbnRhaW5lci1idXR0b24gYnV0dG9uIHtcbiAgaGVpZ2h0OiA1MnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyLWJ1dHRvbiBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU2RkZBO1xufVxuXG4uY2F0ZWdvcnktbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDA7XG59XG5cbi5jYXRlZ29yeS1pdGVtIHtcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgbWFyZ2luOiA0cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogYXJpYWw7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiYW50b25cIjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5jYXRlZ29yeS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1NkZGQTtcbn1cblxudWwge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbn1cblxuLmFzc2V0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTZweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLmFzc2V0cyBpbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiBhdXRvIDE2cHg7XG59XG4uYXNzZXRzIC5tdWx0aSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1cHg7XG4gIHRvcDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG5cbi5pdGVtLW1vZGFsIHtcbiAgbWFyZ2luOiA4cHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLml0ZW0tbW9kYWw6aG92ZXIgLmltZy1zdG9jayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG59XG5cbi5pbWctc3RvY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGN0ZCO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5pbmZvcy1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IGF1dG8gMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5pbmZvcy1pdGVtIC5uYW1lIHtcbiAgcGFkZGluZzogNHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4uaW5mb3MtaXRlbSAucHJpY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xuICBwYWRkaW5nOiA0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXItbW9kYWwge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/components/modals/modalLib/modalLib.ts":
/*!****************************************************!*\
  !*** ./src/components/modals/modalLib/modalLib.ts ***!
  \****************************************************/
/*! exports provided: ModalLibDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalLibDialog", function() { return ModalLibDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_assetsLib_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/assetsLib.service */ "./src/services/assetsLib.service.ts");




let ModalLibDialog = class ModalLibDialog {
    constructor(dialogRef, snackBar, assetsLib, data) {
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.assetsLib = assetsLib;
        this.data = data;
    }
    ngOnInit() {
        this.currentCat = "photo";
        this.getCurrentCategory("photo");
    }
    changeImgSrc(src) {
        this.currentCat = src;
    }
    getCurrentCategory(src) {
        this.currentCat = this.assetsLib.getByCategory(src);
    }
    // use modal images
    addStockImg(e, item) {
        var imgObj = e.srcElement.currentSrc;
        this.closeDialog(imgObj, item);
    }
    closeDialog(img, item) {
        var result = {
            img: img,
            item: item
        };
        this.dialogRef.close(result);
    }
};
ModalLibDialog.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _services_assetsLib_service__WEBPACK_IMPORTED_MODULE_3__["AssetsLibService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ModalLibDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'modalLib',
        template: __webpack_require__(/*! raw-loader!./modalLib.html */ "./node_modules/raw-loader/index.js!./src/components/modals/modalLib/modalLib.html"),
        styles: [__webpack_require__(/*! ./modalLib.scss */ "./src/components/modals/modalLib/modalLib.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ModalLibDialog);



/***/ }),

/***/ "./src/components/modals/modalNike/modalNike.scss":
/*!********************************************************!*\
  !*** ./src/components/modals/modalNike/modalNike.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popup {\n  background: #fff;\n  position: relative;\n  -webkit-transition: all 5s ease-in-out;\n  transition: all 5s ease-in-out;\n}\n\n.header-container {\n  border-bottom: 4px solid #171717;\n  display: -webkit-box;\n  display: flex;\n}\n\n.popup h2 {\n  margin: 0 0 20px;\n  color: #333;\n  font-family: \"anton\", Arial, sans-serif;\n  text-transform: uppercase;\n}\n\n.popup .close {\n  margin: 0 0 0 auto;\n  -webkit-transition: all 200ms;\n  transition: all 200ms;\n  font-size: 24px;\n  font-weight: bold;\n  text-decoration: none;\n  color: #171717;\n  cursor: pointer;\n}\n\n.popup .close:hover {\n  color: #056FFA;\n}\n\n.popup .content {\n  max-height: 30%;\n  overflow: auto;\n}\n\n.container-modal {\n  display: -webkit-box;\n  display: flex;\n}\n\n.container-button {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.container-button button {\n  height: 52px;\n  border: none;\n  border-radius: 0;\n  background-color: #171717;\n  color: white;\n  padding: 0 24px;\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.container-button button:hover {\n  background-color: #056FFA;\n}\n\n.category-list {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 16px 16px 16px 0;\n}\n\n.category-item {\n  line-height: 56px;\n  background-color: #171717;\n  padding: 0 16px;\n  margin: 4px 0;\n  text-align: center;\n  font-family: arial;\n  color: white;\n  font-size: 18px;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-family: \"anton\";\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.category-item:hover {\n  background-color: #056FFA;\n}\n\nul {\n  margin: 0 !important;\n  -webkit-margin-before: 0;\n          margin-block-start: 0;\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\n\n.assets {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n  margin: 0 !important;\n  padding: 16px;\n  overflow-y: scroll;\n}\n\n.assets img {\n  height: 150px;\n  width: auto;\n  margin: auto 16px;\n}\n\n.assets .multi {\n  position: absolute;\n  width: 25px;\n  top: 25px;\n  margin-left: 25px;\n}\n\n.item-modal {\n  margin: 8px 0;\n  cursor: pointer;\n}\n\n.item-modal:hover .img-stock {\n  background-color: #FAFAFA;\n}\n\n.img-stock {\n  background-color: #F6F7FB;\n  padding: 8px;\n}\n\n.infos-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin: auto 16px;\n  text-transform: uppercase;\n}\n\n.infos-item .name {\n  padding: 4px;\n  font-size: 12px;\n}\n\n.infos-item .price {\n  background-color: #171717;\n  padding: 4px;\n  color: white;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbnNlcnJhbm8vY3VzdG9tU25lYWsvc3JjL2NvbXBvbmVudHMvbW9kYWxzL21vZGFsTmlrZS9tb2RhbE5pa2Uuc2NzcyIsInNyYy9jb21wb25lbnRzL21vZGFscy9tb2RhbE5pa2UvbW9kYWxOaWtlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFBQSw4QkFBQTtBQ0FKOztBREVFO0VBQ0UsZ0NBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNDSjs7QURDRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EseUJBQUE7QUNFSjs7QURBRTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFBQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNHSjs7QURERTtFQUNFLGNBQUE7QUNJSjs7QURGRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDS0o7O0FESEU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNNSjs7QURKRTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDT0o7O0FETkk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ1FOOztBRFBNO0VBQ0UseUJBQUE7QUNTUjs7QURMRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO0FDUUo7O0FETkU7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNTSjs7QURSSTtFQUNFLHlCQUFBO0FDVU47O0FEUEU7RUFDRSxvQkFBQTtFQUNBLHdCQUFBO1VBQUEscUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDVUo7O0FEUkU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ1dKOztBRFZJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ1lOOztBRFZJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDWU47O0FEVEU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ1lKOztBRFZNO0VBQ0UseUJBQUE7QUNZUjs7QURSRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ1dKOztBRFRFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNZSjs7QURYSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDYU47O0FEWEk7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ2FOIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL21vZGFscy9tb2RhbE5pa2UvbW9kYWxOaWtlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5wb3B1cCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDVzIGVhc2UtaW4tb3V0O1xuICB9XG4gIC5oZWFkZXItY29udGFpbmVyIHtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzE3MTcxNztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5wb3B1cCBoMiB7XG4gICAgbWFyZ2luOiAwIDAgMjBweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LWZhbWlseTogJ2FudG9uJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAucG9wdXAgLmNsb3NlIHtcbiAgICBtYXJnaW46IDAgMCAwIGF1dG87XG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMxNzE3MTc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5wb3B1cCAuY2xvc2U6aG92ZXIge1xuICAgIGNvbG9yOiAjMDU2RkZBO1xuICB9XG4gIC5wb3B1cCAuY29udGVudCB7XG4gICAgbWF4LWhlaWdodDogMzAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIC5jb250YWluZXItbW9kYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmNvbnRhaW5lci1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBidXR0b24ge1xuICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBwYWRkaW5nOiAwIDI0cHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1NkZGQVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAuY2F0ZWdvcnktbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDA7XG4gIH1cbiAgLmNhdGVnb3J5LWl0ZW0ge1xuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIG1hcmdpbjogNHB4IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6ICdhbnRvbic7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1NkZGQTtcbiAgICB9XG4gIH1cbiAgdWwge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMFxuICB9XG4gIC5hc3NldHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBpbWcge1xuICAgICAgaGVpZ2h0IDogMTUwcHg7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIG1hcmdpbjogYXV0byAxNnB4O1xuICAgIH1cbiAgICAubXVsdGkge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICB0b3A6IDI1cHg7XG4gICAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICB9XG4gIH1cbiAgLml0ZW0tbW9kYWwge1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6aG92ZXIge1xuICAgICAgLmltZy1zdG9jayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5pbWctc3RvY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY3RkI7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG4gIC5pbmZvcy1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IGF1dG8gMTZweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIC5uYW1lIHtcbiAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweFxuICAgIH1cbiAgICAucHJpY2Uge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcbiAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweFxuICAgIH1cbiAgfVxuIiwiLnBvcHVwIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMxNzE3MTc7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wb3B1cCBoMiB7XG4gIG1hcmdpbjogMCAwIDIwcHg7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LWZhbWlseTogXCJhbnRvblwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnBvcHVwIC5jbG9zZSB7XG4gIG1hcmdpbjogMCAwIDAgYXV0bztcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMTcxNzE3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cCAuY2xvc2U6aG92ZXIge1xuICBjb2xvcjogIzA1NkZGQTtcbn1cblxuLnBvcHVwIC5jb250ZW50IHtcbiAgbWF4LWhlaWdodDogMzAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmNvbnRhaW5lci1tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250YWluZXItYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uY29udGFpbmVyLWJ1dHRvbiBidXR0b24ge1xuICBoZWlnaHQ6IDUycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXItYnV0dG9uIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTZGRkE7XG59XG5cbi5jYXRlZ29yeS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTZweCAxNnB4IDE2cHggMDtcbn1cblxuLmNhdGVnb3J5LWl0ZW0ge1xuICBsaW5lLWhlaWdodDogNTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcbiAgcGFkZGluZzogMCAxNnB4O1xuICBtYXJnaW46IDRweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJhbnRvblwiO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLmNhdGVnb3J5LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU2RkZBO1xufVxuXG51bCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xufVxuXG4uYXNzZXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxNnB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4uYXNzZXRzIGltZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IGF1dG8gMTZweDtcbn1cbi5hc3NldHMgLm11bHRpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjVweDtcbiAgdG9wOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogMjVweDtcbn1cblxuLml0ZW0tbW9kYWwge1xuICBtYXJnaW46IDhweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaXRlbS1tb2RhbDpob3ZlciAuaW1nLXN0b2NrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cblxuLmltZy1zdG9jayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNkY3RkI7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmluZm9zLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogYXV0byAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmluZm9zLWl0ZW0gLm5hbWUge1xuICBwYWRkaW5nOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5pbmZvcy1pdGVtIC5wcmljZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XG4gIHBhZGRpbmc6IDRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"

/***/ }),

/***/ "./src/components/modals/modalNike/modalNike.ts":
/*!******************************************************!*\
  !*** ./src/components/modals/modalNike/modalNike.ts ***!
  \******************************************************/
/*! exports provided: ModalNikeDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalNikeDialog", function() { return ModalNikeDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_assetsLib_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/assetsLib.service */ "./src/services/assetsLib.service.ts");




let ModalNikeDialog = class ModalNikeDialog {
    constructor(dialogRef, snackBar, assetsLib, data) {
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.assetsLib = assetsLib;
        this.data = data;
    }
    ngOnInit() {
        this.currentCat = "photo";
        this.getCurrentCategory("photo");
    }
    changeImgSrc(src) {
        this.currentCat = src;
    }
    getCurrentCategory(src) {
        this.currentCat = this.assetsLib.getByCategory(src);
    }
    // use modal images
    addStockImg(e, item) {
        var imgObj = e.srcElement.currentSrc;
        this.closeDialog(imgObj, item);
    }
    closeDialog(img, item) {
        var result = {
            img: img,
            item: item
        };
        this.dialogRef.close(result);
    }
};
ModalNikeDialog.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _services_assetsLib_service__WEBPACK_IMPORTED_MODULE_3__["AssetsLibService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ModalNikeDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'modalNike',
        template: __webpack_require__(/*! raw-loader!./modalNike.html */ "./node_modules/raw-loader/index.js!./src/components/modals/modalNike/modalNike.html"),
        styles: [__webpack_require__(/*! ./modalNike.scss */ "./src/components/modals/modalNike/modalNike.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ModalNikeDialog);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/redux/index.ts":
/*!****************************!*\
  !*** ./src/redux/index.ts ***!
  \****************************/
/*! exports provided: reducers, INITIAL_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/redux/user.ts");

const reducers = {
    user: _user__WEBPACK_IMPORTED_MODULE_0__["userReducer"],
};
const INITIAL_STATE = {
    user: _user__WEBPACK_IMPORTED_MODULE_0__["userInitial"],
};


/***/ }),

/***/ "./src/redux/user.ts":
/*!***************************!*\
  !*** ./src/redux/user.ts ***!
  \***************************/
/*! exports provided: CREATE_USER, SELECT_USER, userInitial, userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_USER", function() { return CREATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_USER", function() { return SELECT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userInitial", function() { return userInitial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
// ***** Actions *****
const CREATE_USER = 'CREATE_USER';
const SELECT_USER = 'SELECT_USER';
// ***** Initial data *****
const userInitial = {
    id: null,
    firstname: null,
    lastname: null,
    email: null,
    tel: null,
    description: null,
};
// ***** Reducer *****
function userReducer(state, action) {
    switch (action.type) {
        case CREATE_USER:
            action.payload.createdAt = new Date();
            return action.payload;
        case SELECT_USER:
            return action.payload;
        default: return state;
    }
}


/***/ }),

/***/ "./src/services/assetsLib.service.ts":
/*!*******************************************!*\
  !*** ./src/services/assetsLib.service.ts ***!
  \*******************************************/
/*! exports provided: AssetsLibService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsLibService", function() { return AssetsLibService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AssetsLibService = class AssetsLibService {
    constructor() {
        this.lib = [
            {
                img: "https://unsplash.it/400/500?random",
                name: "Item 1",
                category: "photo",
                price: 4,
                id: "1",
                colors: []
            },
            {
                img: "https://unsplash.it/500/500?random",
                name: "Item 2",
                category: "photo",
                price: 4,
                id: "2",
                colors: []
            },
            {
                img: "https://unsplash.it/500/400?random",
                name: "Item 3",
                category: "photo",
                price: 4,
                id: "3",
                colors: []
            },
            {
                img: "https://unsplash.it/500/300?random",
                name: "Item 4",
                category: "photo",
                price: 3,
                id: "4",
                colors: []
            },
            {
                img: "https://drawinghowtos.com/wp-content/uploads/2019/11/unicorn-colored.png",
                name: "Licorne",
                category: "girly",
                price: 5,
                id: "5",
                colors: []
            },
            {
                img: "./assets/illustration/butterflyBlue.png",
                name: "Papillon",
                category: "girly",
                price: 2,
                id: "6",
                colors: [
                    {
                        img: "./assets/illustration/butterflyBlue.png",
                        color: "00BFFF",
                    },
                    {
                        img: "./assets/illustration/butterflyBw.jpg",
                        color: "000000",
                    },
                    {
                        img: "./assets/illustration/butterflyYellow.png",
                        color: "FFD700",
                    }
                ]
            },
            {
                img: "./assets/illustration/shoes.png",
                name: "shoes",
                category: "girly",
                price: 5,
                id: "22",
                colors: []
            },
            {
                img: "./assets/illustration/empeigne.svg",
                name: "empeigne",
                category: "girly",
                price: 5,
                id: "23",
                colors: []
            },
            {
                img: "./assets/illustration/pointe.svg",
                name: "pointe",
                category: "girly",
                price: 5,
                id: "24",
                colors: []
            },
            {
                img: "./assets/illustration/swoosh.svg",
                name: "swoosh",
                category: "girly",
                price: 5,
                id: "25",
                colors: []
            },
            {
                img: "./assets/illustration/trim.svg",
                name: "trim",
                category: "girly",
                price: 5,
                id: "26",
                colors: []
            },
            {
                img: "./assets/illustration/bande.svg",
                name: "bande",
                category: "girly",
                price: 5,
                id: "27",
                colors: []
            },
            {
                img: "https://dbdzm869oupei.cloudfront.net/img/sticker/preview/12597.png",
                name: "Fleur de cerisier",
                category: "girly",
                price: 5,
                id: "7",
                colors: []
            },
            {
                img: "https://isometric.online/wp-content/uploads/2020/05/people_svg.svg",
                name: "People",
                category: "illu",
                price: 5,
                id: "8",
                colors: []
            },
            {
                img: "https://isometric.online/wp-content/uploads/2020/04/fitness_svg.svg",
                name: "Fitness",
                category: "illu",
                price: 4,
                id: "9",
                colors: []
            },
            {
                img: "https://isometric.online/wp-content/uploads/2020/04/instagram_svg.svg",
                name: "Instagram",
                category: "illu",
                price: 5,
                id: "10",
                colors: []
            },
            {
                img: "https://isometric.online/wp-content/uploads/2020/04/tv_svg.svg",
                name: "Télévision",
                category: "illu",
                price: 3,
                id: "11",
                colors: []
            }
        ];
    }
    getByCategory(category) {
        return this.lib.filter(img => img.category === category);
    }
    getById(id) {
        return this.lib.find(img => img.id === id);
    }
};
AssetsLibService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AssetsLibService);



/***/ }),

/***/ "./src/services/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/services/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/services/auth.service.ts");




let AuthGuardService = class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuardService);



/***/ }),

/***/ "./src/services/auth.service.ts":
/*!**************************************!*\
  !*** ./src/services/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");



let AuthService = class AuthService {
    constructor(jwtHelper) {
        this.jwtHelper = jwtHelper;
    }
    isAuthenticated() {
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }
};
AuthService.ctorParameters = () => [
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/services/services.module.ts":
/*!*****************************************!*\
  !*** ./src/services/services.module.ts ***!
  \*****************************************/
/*! exports provided: ServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth-guard.service */ "./src/services/auth-guard.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _services_assetsLib_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/assetsLib.service */ "./src/services/assetsLib.service.ts");
// ####################################################################
// ######################## Externals #################################
// ####################################################################

// ***** @angular *****



// ***** Services *****



let ServiceModule = class ServiceModule {
};
ServiceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        ],
        providers: [
            _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_assetsLib_service__WEBPACK_IMPORTED_MODULE_6__["AssetsLibService"]
        ],
        bootstrap: [],
        entryComponents: [],
        exports: []
    })
], ServiceModule);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/simonserrano/customSneak/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!***********************!*\
  !*** jsdom (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************************************************!*\
  !*** jsdom/lib/jsdom/living/generated/utils (ignored) ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!***************************************!*\
  !*** jsdom/lib/jsdom/utils (ignored) ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map