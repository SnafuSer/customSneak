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

module.exports = "<div class=\"loader-container\" *ngIf=\"loading\">\n    <div class=\"loader\">\n        <svg class=\"circular\" viewBox=\"25 25 50 50\">\n          <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\"/>\n        </svg>\n      </div>\n    <h4 class=\"title\">Création du design en cours</h4>\n</div>\n<div class=\"container-scroll\">\n  <div class=\"buttonBack\" (click)=\"appComponent.step = 1\">\n      <div class=\"change-button left\">\n          <img src=\"./assets/icons/arrow.svg\" (click)=\"changeSide(sideNumber-1)\" alt=\"\">\n      </div>\n      Retour\n  </div>\n  <div class=\"container-models\">\n      <div class=\"controls\">\n        <div id=\"add\" class=\"button\" *ngIf=\"switch !== 'zones'\" (click)=\"addText()\">\n          <img src=\"./assets/icons/text.svg\" alt=\"\">\n          <span>Texte</span>\n        </div>\n        <div class=\"button\" *ngIf=\"switch === 'zones'\" (click)=\"displayBackgroundChoice()\">\n          <img src=\"./assets/icons/bg.svg\" alt=\"\">\n          <span>Fond</span>\n        </div>\n        <div class=\"button\" (click)=\"openModalLib()\">\n          <img src=\"./assets/icons/image.svg\" alt=\"\">\n          <span>Design</span>\n        </div>\n        <div class=\"button\" (click)=\"openModalImport()\">\n          <img src=\"./assets/icons/upload.svg\" alt=\"\">\n          <span>Import</span>\n        </div>\n      </div>\n      <div class=\"change-button left\">\n        <img src=\"./assets/icons/arrow.svg\" (click)=\"changeSide(sideNumber-1)\" alt=\"\">\n      </div>\n      <div class=\"container-canvas\" [ngStyle]=\"{'transform' : scaleXY}\">\n        <canvas id=\"c\" width=\"550\" height=\"280\" style=\"z-index: 1;\">\n        </canvas>\n        <div class=\"bg-zone\">\n          <img [class]=\"'bg-image' + listZones[sideNumber].name\" *ngIf=\"switch === 'zones'\" src=\"./assets/shoes/af1/out.png\"  alt=\"\">\n        </div>\n        <div class=\"list-side\" *ngIf=\"switch === 'shoes'\">\n          <div *ngFor=\"let side of listSide; let i = index\" class=\"item\">\n            <img [src]=\"side.img\" (click)=\"changeSide(i)\" alt=\"\">\n          </div>\n        </div>\n        <div class=\"list-side\" *ngIf=\"switch === 'zones'\">\n          <div *ngFor=\"let side of listZones; let i = index\" class=\"item zone\">\n            <img [src]=\"side.imgZone\" (click)=\"changeSide(i);\" alt=\"\">\n          </div>\n        </div>\n      </div>\n      <div class=\"change-button\">\n        <img src=\"./assets/icons/arrow.svg\" (click)=\"changeSide(sideNumber+1)\" alt=\"\">\n      </div>\n      <div class=\"switch-zone\" *ngIf=\"this.choice.type === 'af1'\">\n        <div class=\"switch-item\" [ngClass]=\"{'active': switch === 'shoes'}\" (click)=\"switchZone('shoes')\">\n          <span>\n            Chaussure\n          </span>\n        </div>\n        <div class=\"switch-item\" [ngClass]=\"{'active': switch === 'zones'}\" (click)=\"switchZone('zones')\">\n          <span>\n            Zones\n          </span>\n        </div>\n      </div>\n  </div>\n  \n  <div class=\"item-selected\">\n    <div class=\"category-item\">\n      <div class=\"delete-icon\" *ngIf=\"activeObject\" (click)=\"deleteObject()\">\n        <img src=\"./assets/icons/delete.svg\" alt=\"\">\n      </div>\n      <span class=\"title\" *ngIf=\"generalDisplay\" contenteditable=\"true\" (blur)=\"blur($event)\">{{ activeObject.text }}</span>\n      <span class=\"title\" *ngIf=\"imgDisplay\">Image</span>\n    </div>\n    <div id=\"i-text\" class=\"item-panel\">\n      <div id=\"general-controls\" *ngIf=\"generalDisplay\">\n        <div class=\"style-panel\">\n          <span>Style</span>\n          <div id=\"text-controls-additional\">\n            <input type='checkbox' [(ngModel)]=\"isBold\" (ngModelChange)=\"textTransform()\" name='fonttype' id=\"text-cmd-bold\">\n            <label class=\"text-control\" for=\"text-cmd-bold\">\n              <b>B</b>\n            </label>\n            <input type='checkbox' [(ngModel)]=\"isItalic\" (ngModelChange)=\"textTransform()\" name='fonttype' id=\"text-cmd-italic\">\n            <label class=\"text-control\" for=\"text-cmd-italic\">\n              <i>I</i>\n            </label>\n            <input type='checkbox' name='fonttype' id=\"text-cmd-underline\">\n            <label class=\"text-control\" for=\"text-cmd-underline\">\n              <span style=\"text-decoration:underline\">U</span>\n            </label>\n            <select id=\"font-family\" (change)=\"changeFont($event.target.value)\">\n              <option value=\"arial\">Arial</option>\n              <option value=\"helvetica\">Helvetica</option>\n              <option value=\"comic sans ms\">Comic Sans MS</option>\n              <option value=\"anton\" selected>Anton</option>\n            </select>\n          </div>\n        </div>\n        <div id=\"color-controls\">\n          <span>Couleur</span>\n          <div id=\"color-list\">\n            <div *ngFor=\"let item of colorList\" class=\"color-item\" [id]=\"item\" [ngClass]=\"{active: activeColor === '#'+item}\" [ngStyle]=\"{'background-color': '#'+item}\" (click)=\"changeColor(item)\"></div>\n          </div>\n        </div>\n      </div>\n      <div id=\"image\" class=\"item-panel\" *ngIf=\"imgDisplay\">\n        <div class=\"style-panel\">\n          <span>Style</span>\n          <div id=\"img-controls-additional\">\n            <!-- <div (click)=\"bringForward()\">En avant </div>\n            <div (click)=\"bringBackward()\"> En arriere</div> -->\n            <div class=\"img-controller\" (click)=\"flipX()\"><img src=\"./assets/icons/left.svg\" alt=\"\"></div>\n            <div class=\"img-controller\" (click)=\"flipY()\"><img src=\"./assets/icons/flip.svg\" alt=\"\"></div>\n          </div>\n        </div>\n        <div id=\"color-controls\">\n          <span>Couleur</span>\n          <div id=\"color-list\">\n            <div *ngFor=\"let item of imgLib?.colors\" class=\"color-item\" [ngClass]=\"{active: activeObject.color === item.color}\" [ngStyle]=\"{'background-color': '#'+item.color}\" (click)=\"changeColorImg(item)\"></div>\n          </div>\n        </div>\n      </div>\n      <div id=\"color-controls\" *ngIf=\"backgroundColorDisplay\">\n        <span>Couleur</span>\n        <div id=\"color-list\">\n          <div *ngFor=\"let item of colorList\" class=\"color-item\" [id]=\"item\" [ngStyle]=\"{'background-color': '#'+item}\" (click)=\"changeBg(item)\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"price-panel\">\n        <div>\n            <span class=\"title\">\n              Total :\n              {{ totalPrice }}€\n            </span>\n        </div>\n        <div class=\"button-cart\" [ngClass]=\"{'disabled': totalPrice === 0}\"  (click)=\"respond()\">\n            Ajouter au panier\n        </div>\n    </div>\n  </div>\n</div>"

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

module.exports = "<div class=\"popup\">\n    <div class=\"header-container\">\n      <h2>Selectionner un design</h2>\n      <div class=\"close\" (click)=\"closeDialog()\">&times;</div>\n    </div>\n    <div class=\"container-modal\">\n      <h4 *ngIf=\"(isMobile && currentCat !== '')\" (click)=\"currentCat = ''\"><- Retour</h4>\n      <div class=\"category-list\" *ngIf=\"(isMobile && currentCat === '') || !isMobile\">\n        <!-- <div class=\"category-item\" (click)=\"getCurrentCategory('photo')\">\n          <span>Images</span>\n        </div> -->\n        <div class=\"category-item\" (click)=\"getCurrentCategory('food')\">\n          <span>Food</span>\n        </div>\n        <div class=\"category-item\" (click)=\"getCurrentCategory('girly')\">\n          <span>Girly</span>\n        </div>\n      </div>\n      <div class=\"content\" *ngIf=\"(isMobile && currentCat !== '') || !isMobile\">\n        <ul class=\"assets\" id=\"list\">\n            <li class=\"item-modal\" *ngFor=\"let item of assets\">\n              <div class=\"multi-indicator\" *ngIf=\"item.colors.length > 0\">\n                <img class=\"multi\" src=\"./assets/icons/color-wheel.svg\" alt=\"\">\n              </div>\n                <img class=\"img-stock\" [src]=\"item.img\" (click)=\"addStockImg($event, item)\" alt=\"image asset\" width=\"400\" height=\"500\"/>\n                <div class=\"infos-item\">\n                    <span class=\"name\">{{ item.name }}</span>\n                    <span class=\"price\">{{ item.price }}€</span>\n                </div>\n            </li>\n        </ul>\n      </div>\n    </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_assetsLib_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/assetsLib.service */ "./src/services/assetsLib.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(dialog, assetsLib, sanitizer) {
        this.dialog = dialog;
        this.assetsLib = assetsLib;
        this.sanitizer = sanitizer;
        this.step = 1;
    }
    AppComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _services_assetsLib_service__WEBPACK_IMPORTED_MODULE_3__["AssetsLibService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _step1_step1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./step1/step1.page */ "./src/app/step1/step1.page.ts");
/* harmony import */ var _step2_step2_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./step2/step2.page */ "./src/app/step2/step2.page.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/ngrx-store-devtools.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux */ "./src/redux/index.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/services.module */ "./src/services/services.module.ts");
/* harmony import */ var _components_modals_modal_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/modals/modal.module */ "./src/components/modals/modal.module.ts");









// ***** Redux *****



// ***** App *****


// ***** Components *****

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
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
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/step1/step1.page.scss":
/*!***************************************!*\
  !*** ./src/app/step1/step1.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-step1 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nh2 {\n  font-family: \"anton\";\n  color: #171717;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.container-shoes {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.item-shoes {\n  margin: auto;\n  padding: 24px;\n  cursor: pointer;\n}\n\n.item-shoes img {\n  height: 135px;\n}\n\n.item-shoes:hover {\n  background-color: #FAFAFA;\n}\n\n.item-shoes.active {\n  background-color: #FAFAFA;\n}\n\n.button {\n  background-color: #171717;\n  padding: 8px 32px;\n  color: white;\n  margin: 16px 0 0 auto;\n  font-size: 14px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.button.disabled {\n  opacity: 0.5;\n  pointer-events: none;\n  cursor: auto;\n}\n\n@media only screen and (max-width: 550px) {\n  .container-shoes {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n\n  .item-shoes {\n    padding: 24px 0;\n  }\n\n  .button {\n    margin-right: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbnNlcnJhbm8vY3VzdG9tU25lYWsvc3JjL2FwcC9zdGVwMS9zdGVwMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3N0ZXAxL3N0ZXAxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQUk7RUFDSSxhQUFBO0FDRVI7O0FEQUk7RUFDSSx5QkFBQTtBQ0VSOztBREFJO0VBQ0kseUJBQUE7QUNFUjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDQ0o7O0FEQUk7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDRVI7O0FERUE7RUFFSTtJQUNJLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtFQ0FOOztFREdFO0lBQ0ksZUFBQTtFQ0FOOztFREVFO0lBQ0ksa0JBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3RlcDEvc3RlcDEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1zdGVwMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5oMiB7XG4gICAgZm9udC1mYW1pbHk6ICdhbnRvbic7XG4gICAgY29sb3I6ICMxNzE3MTc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jb250YWluZXItc2hvZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLml0ZW0tc2hvZXMge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDEzNXB4O1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgICB9XG4gICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICAgIH1cbn1cblxuLmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogICMxNzE3MTc7XG4gICAgcGFkZGluZzogOHB4IDMycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMTZweCAwIDAgYXV0bztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICYuZGlzYWJsZWQge1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBjdXJzb3I6IGF1dG87XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KXtcblxuICAgIC5jb250YWluZXItc2hvZXMge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAvLyBwYWRkaW5nOiA4cHg7XG4gICAgfVxuICAgIC5pdGVtLXNob2VzIHtcbiAgICAgICAgcGFkZGluZzogMjRweCAwO1xuICAgIH1cbiAgICAuYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cbiAgfSIsIi5jb250YWluZXItc3RlcDEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBcImFudG9uXCI7XG4gIGNvbG9yOiAjMTcxNzE3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jb250YWluZXItc2hvZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLml0ZW0tc2hvZXMge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pdGVtLXNob2VzIGltZyB7XG4gIGhlaWdodDogMTM1cHg7XG59XG4uaXRlbS1zaG9lczpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG59XG4uaXRlbS1zaG9lcy5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufVxuXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcbiAgcGFkZGluZzogOHB4IDMycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxNnB4IDAgMCBhdXRvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uYnV0dG9uLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOiBhdXRvO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gIC5jb250YWluZXItc2hvZXMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuaXRlbS1zaG9lcyB7XG4gICAgcGFkZGluZzogMjRweCAwO1xuICB9XG5cbiAgLmJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICB9XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");




var Step1Component = /** @class */ (function () {
    function Step1Component(snackBar, appComponent) {
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
    Step1Component.prototype.ngOnInit = function () {
    };
    Step1Component.prototype.setActive = function (item) {
        for (var i = 0; i < this.listShoes.length; i++) {
            if (i === item) {
                this.listShoes[i].choose = true;
                this.choice = this.listShoes[i];
            }
            else
                this.listShoes[i].choose = false;
        }
    };
    Step1Component.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] }
    ]; };
    Step1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'step1',
            template: __webpack_require__(/*! raw-loader!./step1.page.html */ "./node_modules/raw-loader/index.js!./src/app/step1/step1.page.html"),
            styles: [__webpack_require__(/*! ./step1.page.scss */ "./src/app/step1/step1.page.scss")]
        })
    ], Step1Component);
    return Step1Component;
}());



/***/ }),

/***/ "./src/app/step2/step2.page.scss":
/*!***************************************!*\
  !*** ./src/app/step2/step2.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-family: \"anton\";\n  font-size: 18px;\n}\n\n.buttonBack {\n  display: -webkit-box;\n  display: flex;\n  margin: 0 auto 8px 0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  cursor: pointer;\n  font-size: 14px;\n}\n\n.buttonBack .change-button {\n  margin-right: 4px;\n}\n\n.buttonBack .change-button img {\n  height: 10px;\n}\n\n.export-btn {\n  height: 52px;\n  border: none;\n  border-radius: 0;\n  background-color: #171717;\n  color: white;\n  padding: 0 24px;\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.export-btn:hover {\n  background-color: #056ffa;\n}\n\n.container-models {\n  background-color: #F7F7F7;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  padding: 16px;\n}\n\n.bg-zone {\n  position: absolute;\n  width: 550px;\n  height: 280px;\n  overflow: hidden;\n}\n\n.bg-imagebande {\n  position: relative;\n  height: auto;\n  width: 1110px;\n  left: -606px;\n  top: -80px;\n}\n\n.bg-imagepointe {\n  position: relative;\n  height: auto;\n  width: 1144px;\n  left: -19px;\n  top: -181px;\n}\n\n.bg-imageswoosh {\n  position: relative;\n  height: auto;\n  width: 1185px;\n  left: -572px;\n  top: -104px;\n}\n\n.bg-imagetrim {\n  position: relative;\n  height: auto;\n  width: 1175px;\n  left: -396px;\n  top: -129px;\n}\n\n.change-button {\n  margin: auto auto;\n  cursor: pointer;\n}\n\n.change-button.left {\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n}\n\n.change-button img {\n  height: 20px;\n}\n\n.container-canvas {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n}\n\n.container-canvas .list-side {\n  width: 100%;\n  margin: 16px auto 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  cursor: pointer;\n}\n\n.container-canvas .list-side .item {\n  padding: 8px;\n}\n\n.container-canvas .list-side .item img {\n  height: 50px;\n  width: auto;\n}\n\n.container-canvas .list-side .item:hover {\n  background-color: #f0f0f0;\n}\n\n.side-container {\n  position: absolute;\n  width: 550px;\n  top: 30px;\n  z-index: 0;\n  display: -webkit-box;\n  display: flex;\n  height: 280px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.shoes-bg {\n  margin: auto;\n  height: 100%;\n  max-height: 280px;\n  max-width: 550px;\n  width: auto;\n  margin: auto;\n}\n\n.svg-preview svg {\n  width: 108px;\n  height: 50px;\n}\n\n.controls {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 80px;\n  height: calc(3 * 80px);\n  margin: 0 auto auto 0;\n}\n\n.controls .button {\n  height: 80px;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 12px;\n  color: #171717;\n  border: none;\n  border-radius: 0px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.controls .button:hover {\n  background-color: #f0f0f0;\n}\n\n.controls .button img {\n  height: 16px;\n  margin: auto auto 4px;\n}\n\n.controls .button span {\n  margin: 0 auto auto;\n}\n\n.switch-zone {\n  width: 100px;\n  height: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: -16px -16px -16px 0;\n}\n\n.switch-zone .switch-item {\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  cursor: pointer;\n}\n\n.switch-zone .switch-item.active {\n  background-color: #171717;\n}\n\n.switch-zone .switch-item.active:hover {\n  background-color: #171717;\n}\n\n.switch-zone .switch-item.active span {\n  color: white;\n}\n\n.switch-zone .switch-item:hover {\n  background-color: #f0f0f0;\n}\n\n.switch-zone .switch-item span {\n  margin: auto;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 14px;\n  color: #171717;\n}\n\n.header-control {\n  display: -webkit-box;\n  display: flex;\n  border-bottom: 3px solid #131313;\n  padding-bottom: 16px;\n}\n\n.header-control p {\n  margin: 0 auto;\n}\n\n.header-control span {\n  cursor: pointer;\n}\n\n.item-panel {\n  padding-left: 16px;\n  -webkit-box-flex: 5;\n          flex: 5;\n  height: 150px;\n  display: -webkit-box;\n  display: flex;\n}\n\n.item-panel#image {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.item-selected {\n  border: 1px solid #fafafa;\n  padding: 16px;\n  width: calc(100% - 34px);\n  height: 150px;\n  display: -webkit-box;\n  display: flex;\n}\n\n.item-selected .category-item {\n  border-right: 1px solid #fafafa;\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  padding-right: 16px;\n  max-width: 160px;\n}\n\n.item-selected .category-item span {\n  margin: auto;\n}\n\n.item-selected .category-item .delete-icon {\n  position: absolute;\n  background-color: #f54e58;\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  display: -webkit-box;\n  display: flex;\n}\n\n.item-selected .category-item .delete-icon img {\n  height: 16px;\n  margin: auto;\n}\n\n#general-controls {\n  display: block;\n  -webkit-box-flex: 4;\n          flex: 4;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.price-panel {\n  -webkit-box-flex: 1;\n          flex: 1;\n  border-left: 1px solid #fafafa;\n  padding-left: 16px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  min-width: 175px;\n}\n\n.price-panel span {\n  margin: auto;\n  text-decoration: underline;\n}\n\n.price-panel .button-cart {\n  background-color: #171717;\n  padding: 8px 32px;\n  color: white;\n  margin: 16px 0 0 auto;\n  font-size: 14px;\n  cursor: pointer;\n  margin: auto;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.price-panel .button-cart.disabled {\n  opacity: 0.5;\n  pointer-events: none;\n  cursor: auto;\n}\n\n.style-panel {\n  margin: auto 0;\n}\n\n#color-controls {\n  display: block;\n  margin: auto 0;\n}\n\n#color-list {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin: auto 0;\n}\n\n#color-list .color-item {\n  height: 32px;\n  width: 32px;\n  margin: 8px;\n  cursor: pointer;\n  box-sizing: border-box;\n  border-radius: 50%;\n}\n\n#color-list .color-item.active {\n  border: 3px solid #056ffa !important;\n}\n\n#color-list .color-item#FFFFFF {\n  border: 1px solid #131313;\n}\n\n.caption {\n  font-size: 10px;\n  text-align: center;\n  color: #131313;\n}\n\n.color-select {\n  height: 40px;\n  width: 40px;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  cursor: pointer;\n}\n\n.color-select:hover {\n  background-color: #e2e2e2;\n}\n\n.color-select .color-item {\n  margin: auto auto 2px auto;\n  height: 16px;\n  width: 16px;\n}\n\n.color-select .caption {\n  margin: 0 auto auto auto;\n}\n\n#img-controls-additional {\n  display: -webkit-box;\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n#text-controls-additional {\n  display: -webkit-box;\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto 0 0;\n}\n\ninput[type=checkbox] {\n  display: none;\n}\n\ninput[type=checkbox]:checked + .text-control {\n  background-color: #171717;\n  color: white !important;\n}\n\n.text-control {\n  height: 40px;\n  width: 40px;\n  text-align: center;\n  line-height: 40px;\n  display: block;\n  cursor: pointer;\n}\n\n.text-control:hover {\n  background-color: #e2e2e2;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  -webkit-transition: opacity 50ms;\n  transition: opacity 50ms;\n  display: none;\n  opacity: 0;\n}\n\n.overlay:target {\n  display: -webkit-box;\n  display: flex;\n  opacity: 1;\n}\n\n.header-container {\n  border-bottom: 4px solid #131313;\n  display: -webkit-box;\n  display: flex;\n}\n\n.container-button {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.container-button button {\n  height: 52px;\n  border: none;\n  border-radius: 0;\n  background-color: #131313;\n  color: white;\n  padding: 0 24px;\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.container-button button:hover {\n  background-color: #056ffa;\n}\n\n.imgColor.active {\n  color: red;\n}\n\n.img-controller {\n  height: 40px;\n  width: 40px;\n  display: -webkit-box;\n  display: flex;\n  margin: 0 4px 0 0;\n}\n\n.img-controller:hover {\n  background-color: #F7F7F7;\n}\n\n.img-controller img {\n  margin: auto;\n  width: 18px;\n}\n\n.loader-container {\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(5, 111, 250, 0.3);\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  z-index: 101;\n}\n\n.loader-container h4 {\n  margin: 24px auto auto auto;\n}\n\n.loader {\n  position: relative;\n  margin: auto auto 0;\n  width: 100px;\n}\n\n.loader:before {\n  content: \"\";\n  display: block;\n  padding-top: 100%;\n}\n\n.circular {\n  -webkit-animation: rotate 2s linear infinite;\n          animation: rotate 2s linear infinite;\n  height: 100%;\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.path {\n  stroke-dasharray: 1, 200;\n  stroke-dashoffset: 0;\n  -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;\n          animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;\n  stroke-linecap: round;\n}\n\n@-webkit-keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n\n@-webkit-keyframes color {\n  100%, 0% {\n    stroke: #d62d20;\n  }\n  40% {\n    stroke: #0057e7;\n  }\n  66% {\n    stroke: #008744;\n  }\n  80%, 90% {\n    stroke: #ffa700;\n  }\n}\n\n@keyframes color {\n  100%, 0% {\n    stroke: #d62d20;\n  }\n  40% {\n    stroke: #0057e7;\n  }\n  66% {\n    stroke: #008744;\n  }\n  80%, 90% {\n    stroke: #ffa700;\n  }\n}\n\n@media only screen and (max-width: 550px) {\n  .container-scroll {\n    height: 100vh;\n    overflow-y: scroll;\n  }\n\n  .container-canvas {\n    -webkit-transform-origin: left;\n            transform-origin: left;\n    -webkit-box-ordinal-group: 3;\n            order: 2;\n    margin-top: -20px;\n    margin-bottom: -20px;\n  }\n\n  .container-models {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    padding: 16px 0;\n  }\n\n  .controls {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    width: calc(3 * 80px);\n    height: 80px;\n    margin-top: -40px;\n    margin-bottom: -10px;\n    -webkit-box-ordinal-group: 4;\n            order: 3;\n  }\n  .controls .button {\n    margin: 0 auto;\n  }\n\n  .change-button {\n    display: none;\n  }\n\n  .switch-zone {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    width: 100%;\n    height: 50px;\n    -webkit-box-ordinal-group: 2;\n            order: 1;\n  }\n\n  .item-selected {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    margin-bottom: 16px;\n  }\n  .item-selected .category-item {\n    max-width: inherit;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    padding-right: 0;\n  }\n  .item-selected .category-item span {\n    margin: auto 0;\n  }\n  .item-selected .delete-icon {\n    -webkit-box-ordinal-group: 3;\n            order: 2;\n    position: relative !important;\n  }\n\n  #text-controls-additional {\n    margin: 4px 0;\n  }\n\n  .price-panel {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    padding-left: 0;\n    margin-top: 16px;\n    padding-bottom: 16px;\n  }\n\n  .item-panel {\n    padding-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbnNlcnJhbm8vY3VzdG9tU25lYWsvc3JjL2FwcC9zdGVwMi9zdGVwMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3N0ZXAyL3N0ZXAyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREFJO0VBQ0ksaUJBQUE7QUNFUjs7QUREUTtFQUNJLFlBQUE7QUNHWjs7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQUk7RUFDSSx5QkFBQTtBQ0VSOztBREVBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNLSjs7QURIQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ01KOztBREpBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDT0o7O0FETkk7RUFDSSw2QkFBQTtVQUFBLHFCQUFBO0FDUVI7O0FETkk7RUFDSSxZQUFBO0FDUVI7O0FETEE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0FDUUo7O0FEUEk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNTUjs7QURSUTtFQUNJLFlBQUE7QUNVWjs7QURUWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDV2hCOztBRFRZO0VBQ0kseUJBQUE7QUNXaEI7O0FETkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7QUNTSjs7QURQQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDVUo7O0FEUEk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ1VSOztBRFBBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUNVSjs7QURUSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDV1I7O0FEVlE7RUFDSSx5QkFBQTtBQ1laOztBRFZRO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0FDWVo7O0FEVlE7RUFDSSxtQkFBQTtBQ1laOztBRFJBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSwyQkFBQTtBQ1dKOztBRFZJO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7QUNZUjs7QURYUTtFQUNJLHlCQUFBO0FDYVo7O0FEWlk7RUFDSSx5QkFBQTtBQ2NoQjs7QURaWTtFQUNJLFlBQUE7QUNjaEI7O0FEWFE7RUFDSSx5QkFBQTtBQ2FaOztBRFhRO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ2FaOztBRFRBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQ1lKOztBRFhJO0VBQ0ksY0FBQTtBQ2FSOztBRFhJO0VBQ0ksZUFBQTtBQ2FSOztBRFZBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDYUo7O0FEWkk7RUFDSSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNjUjs7QURYQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ2NKOztBRGJJO0VBQ0ksK0JBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDZVI7O0FEZFE7RUFDSSxZQUFBO0FDZ0JaOztBRGRRO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNnQlo7O0FEZlk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ2lCaEI7O0FEWkE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDZUo7O0FEYkE7RUFDSSxtQkFBQTtVQUFBLE9BQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNnQko7O0FEZkk7RUFDSSxZQUFBO0VBQ0EsMEJBQUE7QUNpQlI7O0FEZkk7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNpQlI7O0FEaEJRO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ2tCWjs7QURkQTtFQUNJLGNBQUE7QUNpQko7O0FEZkE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQ2tCSjs7QURiQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDZ0JKOztBRGZJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNpQlI7O0FEaEJRO0VBQ0ksb0NBQUE7QUNrQlo7O0FEaEJRO0VBQ0kseUJBQUE7QUNrQlo7O0FEZEE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDaUJKOztBRGZBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZUFBQTtBQ2tCSjs7QURqQkk7RUFDSSx5QkFBQTtBQ21CUjs7QURqQkk7RUFDSSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDbUJSOztBRGpCSTtFQUNJLHdCQUFBO0FDbUJSOztBRGhCQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ21CSjs7QURqQkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtBQ29CSjs7QURsQkE7RUFDSSxhQUFBO0FDcUJKOztBRG5CUTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7QUNxQlo7O0FEakJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNvQko7O0FEbkJJO0VBQ0kseUJBQUE7QUNxQlI7O0FEbEJBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQUEsd0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ3FCSjs7QURuQkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxVQUFBO0FDc0JKOztBRG5CQTtFQUNJLGdDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDc0JKOztBRHBCQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDdUJKOztBRHRCSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDd0JSOztBRHZCUTtFQUNJLHlCQUFBO0FDeUJaOztBRG5CSTtFQUNJLFVBQUE7QUNzQlI7O0FEbkJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtBQ3NCSjs7QURyQkk7RUFDSSx5QkFBQTtBQ3VCUjs7QURyQkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ3VCUjs7QURYQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0FDY0o7O0FEYkk7RUFDSSwyQkFBQTtBQ2VSOztBRFpBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBbEJNO0FDaUNSOztBRGRFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ2dCSjs7QURaQTtFQUNFLDRDQUFBO1VBQUEsb0NBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDZUY7O0FEWkE7RUFDRSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0ZBQUE7VUFBQSx3RUFBQTtFQUNBLHFCQUFBO0FDZUY7O0FEWkE7RUFDRTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7RUNlRjtBQUNGOztBRGxCQTtFQUNFO0lBQ0UsaUNBQUE7WUFBQSx5QkFBQTtFQ2VGO0FBQ0Y7O0FEWkE7RUFDRTtJQUNFLHdCQUFBO0lBQ0Esb0JBQUE7RUNjRjtFRFpBO0lBQ0UseUJBQUE7SUFDQSx3QkFBQTtFQ2NGO0VEWkE7SUFDRSx5QkFBQTtJQUNBLHlCQUFBO0VDY0Y7QUFDRjs7QUQxQkE7RUFDRTtJQUNFLHdCQUFBO0lBQ0Esb0JBQUE7RUNjRjtFRFpBO0lBQ0UseUJBQUE7SUFDQSx3QkFBQTtFQ2NGO0VEWkE7SUFDRSx5QkFBQTtJQUNBLHlCQUFBO0VDY0Y7QUFDRjs7QURYQTtFQUNFO0lBRUUsZUEzRUU7RUN1Rko7RURWQTtJQUNFLGVBL0VHO0VDMkZMO0VEVkE7SUFDRSxlQW5GSTtFQytGTjtFRFZBO0lBRUUsZUFwRks7RUMrRlA7QUFDRjs7QUR6QkE7RUFDRTtJQUVFLGVBM0VFO0VDdUZKO0VEVkE7SUFDRSxlQS9FRztFQzJGTDtFRFZBO0lBQ0UsZUFuRkk7RUMrRk47RURWQTtJQUVFLGVBcEZLO0VDK0ZQO0FBQ0Y7O0FETkE7RUFDSTtJQUNJLGFBQUE7SUFDQSxrQkFBQTtFQ1FOOztFRE5FO0lBQ0ksOEJBQUE7WUFBQSxzQkFBQTtJQUNBLDRCQUFBO1lBQUEsUUFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7RUNTTjs7RURQRTtJQUNJLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLGVBQUE7RUNVTjs7RURSRTtJQUNJLDhCQUFBO0lBQUEsNkJBQUE7WUFBQSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSw0QkFBQTtZQUFBLFFBQUE7RUNXTjtFRFZNO0lBQ0ksY0FBQTtFQ1lWOztFRFRFO0lBQ0ksYUFBQTtFQ1lOOztFRFZFO0lBQ0ksOEJBQUE7SUFBQSw2QkFBQTtZQUFBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSw0QkFBQTtZQUFBLFFBQUE7RUNhTjs7RURYRTtJQUNJLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLG1CQUFBO0VDY047RURiTTtJQUNJLGtCQUFBO0lBQ0EseUJBQUE7WUFBQSw4QkFBQTtJQUNBLGdCQUFBO0VDZVY7RURkVTtJQUNJLGNBQUE7RUNnQmQ7RURiTTtJQUNJLDRCQUFBO1lBQUEsUUFBQTtJQUNBLDZCQUFBO0VDZVY7O0VEWEU7SUFDSSxhQUFBO0VDY047O0VEWkU7SUFDSSw4QkFBQTtJQUFBLDZCQUFBO1lBQUEsbUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxvQkFBQTtFQ2VOOztFRGJFO0lBQ0ksZUFBQTtFQ2dCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3RlcDIvc3RlcDIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogXCJhbnRvblwiO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmJ1dHRvbkJhY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwIGF1dG8gOHB4IDA7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLmNoYW5nZS1idXR0b24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmV4cG9ydC1idG4ge1xuICAgIGhlaWdodDogNTJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwIDI0cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU2ZmZhO1xuICAgIH1cbn1cblxuLmNvbnRhaW5lci1tb2RlbHMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmc6IDE2cHg7XG59XG4uYmctem9uZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1NTBweDtcbiAgICBoZWlnaHQ6IDI4MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYmctaW1hZ2ViYW5kZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMTExMHB4O1xuICAgIGxlZnQ6IC02MDZweDtcbiAgICB0b3A6IC04MHB4O1xufVxuLmJnLWltYWdlcG9pbnRlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMTQ0cHg7XG4gICAgbGVmdDogLTE5cHg7XG4gICAgdG9wOiAtMTgxcHg7XG59XG4uYmctaW1hZ2Vzd29vc2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDExODVweDtcbiAgICBsZWZ0OiAtNTcycHg7XG4gICAgdG9wOiAtMTA0cHg7XG59XG4uYmctaW1hZ2V0cmltIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMTc1cHg7XG4gICAgbGVmdDogLTM5NnB4O1xuICAgIHRvcDogLTEyOXB4O1xufVxuLmNoYW5nZS1idXR0b24ge1xuICAgIG1hcmdpbjogYXV0byBhdXRvO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmLmxlZnQge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICB9XG59XG4uY29udGFpbmVyLWNhbnZhcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAubGlzdC1zaWRlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMTZweCBhdXRvIDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvcjogI2ZhZmFmYSwgJGFtb3VudDogNCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4uc2lkZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNTUwcHg7XG4gICAgdG9wOiAzMHB4O1xuICAgIHotaW5kZXg6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDI4MHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cbi5zaG9lcy1iZyB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAyODBweDtcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5zdmctcHJldmlldyB7XG4gICAgc3ZnIHtcbiAgICAgICAgd2lkdGg6IDEwOHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxufVxuLmNvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiBjYWxjKDMgKiA4MHB4KTtcbiAgICBtYXJnaW46IDAgYXV0byBhdXRvIDA7XG4gICAgLmJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjMTcxNzE3O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yOiAjZmFmYWZhLCAkYW1vdW50OiA0KTtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG8gNHB4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gYXV0bztcbiAgICAgICAgfVxuICAgIH1cbn1cbi5zd2l0Y2gtem9uZSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAtMTZweCAtMTZweCAtMTZweCAwO1xuICAgIC5zd2l0Y2gtaXRlbSB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvcjogI2ZhZmFmYSwgJGFtb3VudDogNCk7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzE3MTcxNztcbiAgICAgICAgfVxuICAgIH1cbn1cbi5oZWFkZXItY29udHJvbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzEzMTMxMztcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIHNwYW4ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuLml0ZW0tcGFuZWwge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBmbGV4OiA1O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAmI2ltYWdlIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG59XG4uaXRlbS1zZWxlY3RlZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZhZmFmYTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzNHB4KTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLmNhdGVnb3J5LWl0ZW0ge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmFmYWZhO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgICBtYXgtd2lkdGg6IDE2MHB4O1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuZGVsZXRlLWljb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1NGU1ODtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiNnZW5lcmFsLWNvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbGV4OiA0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5wcmljZS1wYW5lbCB7XG4gICAgZmxleDogMTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmYWZhZmE7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4td2lkdGg6IDE3NXB4O1xuICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgICAuYnV0dG9uLWNhcnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzE3MTcxNztcbiAgICAgICAgcGFkZGluZzogOHB4IDMycHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWFyZ2luOiAxNnB4IDAgMCBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgICAgfVxuICAgIH1cbn1cbi5zdHlsZS1wYW5lbCB7XG4gICAgbWFyZ2luOiBhdXRvIDA7XG59XG4jY29sb3ItY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0byAwO1xuICAgIC8vICYuZGlzcGxheSB7XG4gICAgLy8gICBkaXNwbGF5OiBibG9ja1xuICAgIC8vIH1cbn1cbiNjb2xvci1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW46IGF1dG8gMDtcbiAgICAuY29sb3ItaXRlbSB7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIG1hcmdpbjogOHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzA1NmZmYSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgICYjRkZGRkZGIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMzEzMTM7XG4gICAgICAgIH1cbiAgICB9XG59XG4uY2FwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzEzMTMxMztcbn1cbi5jb2xvci1zZWxlY3Qge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcbiAgICB9XG4gICAgLmNvbG9yLWl0ZW0ge1xuICAgICAgICBtYXJnaW46IGF1dG8gYXV0byAycHggYXV0bztcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICB9XG4gICAgLmNhcHRpb24ge1xuICAgICAgICBtYXJnaW46IDAgYXV0byBhdXRvIGF1dG87XG4gICAgfVxufVxuI2ltZy1jb250cm9scy1hZGRpdGlvbmFsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbiN0ZXh0LWNvbnRyb2xzLWFkZGl0aW9uYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbjogMCBhdXRvIDAgMDtcbn1cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICAmOmNoZWNrZWQge1xuICAgICAgICArIC50ZXh0LWNvbnRyb2wge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuLnRleHQtY29udHJvbCB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZTI7XG4gICAgfVxufVxuLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTBtcztcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG59XG4ub3ZlcmxheTp0YXJnZXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMTMxMzEzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGFpbmVyLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogNTJweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzEzO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTZmZmE7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5pbWdDb2xvciB7XG4gICAgJi5hY3RpdmUge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgIH1cbn1cbi5pbWctY29udHJvbGxlciB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwIDRweCAwIDA7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgfVxufVxuXG4kZ3JlZW46ICMwMDg3NDQ7XG4kYmx1ZTogIzAwNTdlNztcbiRyZWQ6ICNkNjJkMjA7XG4keWVsbG93OiAjZmZhNzAwO1xuJHdoaXRlOiAjZWVlO1xuXG4vLyBzY2FsaW5nLi4uIGFueSB1bml0c1xuJHdpZHRoOiAxMDBweDtcbi5sb2FkZXItY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzA1NkZGQSwgJGFscGhhOiAwLjMpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgei1pbmRleDogMTAxO1xuICAgIGg0IHtcbiAgICAgICAgbWFyZ2luOiAyNHB4IGF1dG8gYXV0byBhdXRvO1xuICAgIH1cbn1cbi5sb2FkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0byBhdXRvIDA7XG4gIHdpZHRoOiAkd2lkdGg7XG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLXRvcDogMTAwJTtcbiAgfVxufVxuXG4uY2lyY3VsYXIge1xuICBhbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5wYXRoIHtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMjAwO1xuICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgYW5pbWF0aW9uOiBkYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUsIGNvbG9yIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRhc2gge1xuICAwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMjAwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1cHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNHB4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgY29sb3Ige1xuICAxMDAlLFxuICAwJSB7XG4gICAgc3Ryb2tlOiAkcmVkO1xuICB9XG4gIDQwJSB7XG4gICAgc3Ryb2tlOiAkYmx1ZTtcbiAgfVxuICA2NiUge1xuICAgIHN0cm9rZTogJGdyZWVuO1xuICB9XG4gIDgwJSxcbiAgOTAlIHtcbiAgICBzdHJva2U6ICR5ZWxsb3c7XG4gIH1cbn1cblxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpe1xuICAgIC5jb250YWluZXItc2Nyb2xsIHtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIH1cbiAgICAuY29udGFpbmVyLWNhbnZhcyB7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG4gICAgICAgIG9yZGVyOiAyO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XG4gICAgfVxuICAgIC5jb250YWluZXItbW9kZWxzIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZzogMTZweCAwO1xuICAgIH1cbiAgICAuY29udHJvbHMge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB3aWR0aDogY2FsYygzICogODBweCk7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTQwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICAgICAgICBvcmRlcjogMztcbiAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2hhbmdlLWJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5zd2l0Y2gtem9uZSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIG9yZGVyOiAxO1xuICAgIH1cbiAgICAuaXRlbS1zZWxlY3RlZCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgIC5jYXRlZ29yeS1pdGVtIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZGVsZXRlLWljb24ge1xuICAgICAgICAgICAgb3JkZXI6IDI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgICN0ZXh0LWNvbnRyb2xzLWFkZGl0aW9uYWwge1xuICAgICAgICBtYXJnaW46IDRweCAwO1xuICAgIH1cbiAgICAucHJpY2UtcGFuZWwge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIH1cbiAgICAuaXRlbS1wYW5lbCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB9XG5cbn0iLCIudGl0bGUge1xuICBmb250LWZhbWlseTogXCJhbnRvblwiO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5idXR0b25CYWNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIGF1dG8gOHB4IDA7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uYnV0dG9uQmFjayAuY2hhbmdlLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuLmJ1dHRvbkJhY2sgLmNoYW5nZS1idXR0b24gaW1nIHtcbiAgaGVpZ2h0OiAxMHB4O1xufVxuXG4uZXhwb3J0LWJ0biB7XG4gIGhlaWdodDogNTJweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmV4cG9ydC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU2ZmZhO1xufVxuXG4uY29udGFpbmVyLW1vZGVscyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5iZy16b25lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTUwcHg7XG4gIGhlaWdodDogMjgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5iZy1pbWFnZWJhbmRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMTEwcHg7XG4gIGxlZnQ6IC02MDZweDtcbiAgdG9wOiAtODBweDtcbn1cblxuLmJnLWltYWdlcG9pbnRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMTQ0cHg7XG4gIGxlZnQ6IC0xOXB4O1xuICB0b3A6IC0xODFweDtcbn1cblxuLmJnLWltYWdlc3dvb3NoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMTg1cHg7XG4gIGxlZnQ6IC01NzJweDtcbiAgdG9wOiAtMTA0cHg7XG59XG5cbi5iZy1pbWFnZXRyaW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDExNzVweDtcbiAgbGVmdDogLTM5NnB4O1xuICB0b3A6IC0xMjlweDtcbn1cblxuLmNoYW5nZS1idXR0b24ge1xuICBtYXJnaW46IGF1dG8gYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNoYW5nZS1idXR0b24ubGVmdCB7XG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbn1cbi5jaGFuZ2UtYnV0dG9uIGltZyB7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmNvbnRhaW5lci1jYW52YXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IGF1dG87XG59XG4uY29udGFpbmVyLWNhbnZhcyAubGlzdC1zaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTZweCBhdXRvIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyLWNhbnZhcyAubGlzdC1zaWRlIC5pdGVtIHtcbiAgcGFkZGluZzogOHB4O1xufVxuLmNvbnRhaW5lci1jYW52YXMgLmxpc3Qtc2lkZSAuaXRlbSBpbWcge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuLmNvbnRhaW5lci1jYW52YXMgLmxpc3Qtc2lkZSAuaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG59XG5cbi5zaWRlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDU1MHB4O1xuICB0b3A6IDMwcHg7XG4gIHotaW5kZXg6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMjgwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4uc2hvZXMtYmcge1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMjgwcHg7XG4gIG1heC13aWR0aDogNTUwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5zdmctcHJldmlldyBzdmcge1xuICB3aWR0aDogMTA4cHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogY2FsYygzICogODBweCk7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cbi5jb250cm9scyAuYnV0dG9uIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMxNzE3MTc7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbnRyb2xzIC5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xufVxuLmNvbnRyb2xzIC5idXR0b24gaW1nIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IGF1dG8gYXV0byA0cHg7XG59XG4uY29udHJvbHMgLmJ1dHRvbiBzcGFuIHtcbiAgbWFyZ2luOiAwIGF1dG8gYXV0bztcbn1cblxuLnN3aXRjaC16b25lIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogLTE2cHggLTE2cHggLTE2cHggMDtcbn1cbi5zd2l0Y2gtem9uZSAuc3dpdGNoLWl0ZW0ge1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN3aXRjaC16b25lIC5zd2l0Y2gtaXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xufVxuLnN3aXRjaC16b25lIC5zd2l0Y2gtaXRlbS5hY3RpdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xufVxuLnN3aXRjaC16b25lIC5zd2l0Y2gtaXRlbS5hY3RpdmUgc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zd2l0Y2gtem9uZSAuc3dpdGNoLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xufVxuLnN3aXRjaC16b25lIC5zd2l0Y2gtaXRlbSBzcGFuIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzE3MTcxNztcbn1cblxuLmhlYWRlci1jb250cm9sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxMzEzMTM7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuLmhlYWRlci1jb250cm9sIHAge1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5oZWFkZXItY29udHJvbCBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaXRlbS1wYW5lbCB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgZmxleDogNTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5pdGVtLXBhbmVsI2ltYWdlIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLml0ZW0tc2VsZWN0ZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmFmYWZhO1xuICBwYWRkaW5nOiAxNnB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzRweCk7XG4gIGhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaXRlbS1zZWxlY3RlZCAuY2F0ZWdvcnktaXRlbSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmYWZhZmE7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIG1heC13aWR0aDogMTYwcHg7XG59XG4uaXRlbS1zZWxlY3RlZCAuY2F0ZWdvcnktaXRlbSBzcGFuIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLml0ZW0tc2VsZWN0ZWQgLmNhdGVnb3J5LWl0ZW0gLmRlbGV0ZS1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU0ZTU4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaXRlbS1zZWxlY3RlZCAuY2F0ZWdvcnktaXRlbSAuZGVsZXRlLWljb24gaW1nIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbiNnZW5lcmFsLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXg6IDQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wcmljZS1wYW5lbCB7XG4gIGZsZXg6IDE7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZhZmFmYTtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDE3NXB4O1xufVxuLnByaWNlLXBhbmVsIHNwYW4ge1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnByaWNlLXBhbmVsIC5idXR0b24tY2FydCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XG4gIHBhZGRpbmc6IDhweCAzMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMTZweCAwIDAgYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ucHJpY2UtcGFuZWwgLmJ1dHRvbi1jYXJ0LmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOiBhdXRvO1xufVxuXG4uc3R5bGUtcGFuZWwge1xuICBtYXJnaW46IGF1dG8gMDtcbn1cblxuI2NvbG9yLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0byAwO1xufVxuXG4jY29sb3ItbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiBhdXRvIDA7XG59XG4jY29sb3ItbGlzdCAuY29sb3ItaXRlbSB7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIG1hcmdpbjogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiNjb2xvci1saXN0IC5jb2xvci1pdGVtLmFjdGl2ZSB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMwNTZmZmEgIWltcG9ydGFudDtcbn1cbiNjb2xvci1saXN0IC5jb2xvci1pdGVtI0ZGRkZGRiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMzEzMTM7XG59XG5cbi5jYXB0aW9uIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMTMxMzEzO1xufVxuXG4uY29sb3Itc2VsZWN0IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29sb3Itc2VsZWN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcbn1cbi5jb2xvci1zZWxlY3QgLmNvbG9yLWl0ZW0ge1xuICBtYXJnaW46IGF1dG8gYXV0byAycHggYXV0bztcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbn1cbi5jb2xvci1zZWxlY3QgLmNhcHRpb24ge1xuICBtYXJnaW46IDAgYXV0byBhdXRvIGF1dG87XG59XG5cbiNpbWctY29udHJvbHMtYWRkaXRpb25hbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuI3RleHQtY29udHJvbHMtYWRkaXRpb25hbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiAwIGF1dG8gMCAwO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5pbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgLnRleHQtY29udHJvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1jb250cm9sIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50ZXh0LWNvbnRyb2w6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmUyO1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTBtcztcbiAgZGlzcGxheTogbm9uZTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm92ZXJsYXk6dGFyZ2V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzEzMTMxMztcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNvbnRhaW5lci1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5jb250YWluZXItYnV0dG9uIGJ1dHRvbiB7XG4gIGhlaWdodDogNTJweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzEzO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lci1idXR0b24gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1NmZmYTtcbn1cblxuLmltZ0NvbG9yLmFjdGl2ZSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5pbWctY29udHJvbGxlciB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCA0cHggMCAwO1xufVxuLmltZy1jb250cm9sbGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcbn1cbi5pbWctY29udHJvbGxlciBpbWcge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxOHB4O1xufVxuXG4ubG9hZGVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1LCAxMTEsIDI1MCwgMC4zKTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHotaW5kZXg6IDEwMTtcbn1cbi5sb2FkZXItY29udGFpbmVyIGg0IHtcbiAgbWFyZ2luOiAyNHB4IGF1dG8gYXV0byBhdXRvO1xufVxuXG4ubG9hZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG8gYXV0byAwO1xuICB3aWR0aDogMTAwcHg7XG59XG4ubG9hZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogMTAwJTtcbn1cblxuLmNpcmN1bGFyIHtcbiAgYW5pbWF0aW9uOiByb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucGF0aCB7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDIwMDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIGFuaW1hdGlvbjogZGFzaCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlLCBjb2xvciA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZGFzaCB7XG4gIDAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxLCAyMDA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiA4OSwgMjAwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMzVweDtcbiAgfVxuICAxMDAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiA4OSwgMjAwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTI0cHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY29sb3Ige1xuICAxMDAlLCAwJSB7XG4gICAgc3Ryb2tlOiAjZDYyZDIwO1xuICB9XG4gIDQwJSB7XG4gICAgc3Ryb2tlOiAjMDA1N2U3O1xuICB9XG4gIDY2JSB7XG4gICAgc3Ryb2tlOiAjMDA4NzQ0O1xuICB9XG4gIDgwJSwgOTAlIHtcbiAgICBzdHJva2U6ICNmZmE3MDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgLmNvbnRhaW5lci1zY3JvbGwge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9XG5cbiAgLmNvbnRhaW5lci1jYW52YXMge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG4gICAgb3JkZXI6IDI7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XG4gIH1cblxuICAuY29udGFpbmVyLW1vZGVscyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxNnB4IDA7XG4gIH1cblxuICAuY29udHJvbHMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IGNhbGMoMyAqIDgwcHgpO1xuICAgIGhlaWdodDogODBweDtcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgICBvcmRlcjogMztcbiAgfVxuICAuY29udHJvbHMgLmJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuY2hhbmdlLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5zd2l0Y2gtem9uZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgb3JkZXI6IDE7XG4gIH1cblxuICAuaXRlbS1zZWxlY3RlZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG4gIC5pdGVtLXNlbGVjdGVkIC5jYXRlZ29yeS1pdGVtIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbiAgLml0ZW0tc2VsZWN0ZWQgLmNhdGVnb3J5LWl0ZW0gc3BhbiB7XG4gICAgbWFyZ2luOiBhdXRvIDA7XG4gIH1cbiAgLml0ZW0tc2VsZWN0ZWQgLmRlbGV0ZS1pY29uIHtcbiAgICBvcmRlcjogMjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgfVxuXG4gICN0ZXh0LWNvbnRyb2xzLWFkZGl0aW9uYWwge1xuICAgIG1hcmdpbjogNHB4IDA7XG4gIH1cblxuICAucHJpY2UtcGFuZWwge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIH1cblxuICAuaXRlbS1wYW5lbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_modals_modalLib_modalLib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modals/modalLib/modalLib */ "./src/components/modals/modalLib/modalLib.ts");
/* harmony import */ var _components_modals_modalImport_modalImport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/modals/modalImport/modalImport */ "./src/components/modals/modalImport/modalImport.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_assetsLib_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/assetsLib.service */ "./src/services/assetsLib.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var async__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! async */ "./node_modules/async/dist/async.js");
/* harmony import */ var async__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(async__WEBPACK_IMPORTED_MODULE_9__);










var Step2Component = /** @class */ (function () {
    function Step2Component(dialog, assetsLib, sanitizer, appComponent) {
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
        this.basePage = {
            width: 550,
            height: 280,
            scale: 1,
            scaleX: 1,
            scaleY: 1
        };
        this.scalePages(window.innerWidth);
    }
    // public choice: any = {type: "af1"}
    Step2Component.prototype.ngOnInit = function () {
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
    };
    Step2Component.prototype.scalePages = function (maxWidth) {
        if (maxWidth < 550) {
            var scaleX = 1;
            scaleX = maxWidth / this.basePage.width;
            this.scaleXY = 'scale(' + scaleX + ')';
        }
        else {
            this.scaleXY = 'scale(1)';
        }
    };
    Step2Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.canvas.on('selection:created', function (e) {
            _this.onObjectSelected();
        });
        this.canvas.on('selection:cleared', function (e) {
            _this.onObjectCleared();
        });
        this.canvas.on('selection:updated', function (e) {
            _this.onObjectUpdated();
        });
    };
    Step2Component.prototype.onMessage = function (event) {
        this.loading = false;
        if (event.data.pay)
            this.receiveMessage(event);
    };
    Step2Component.prototype.onResize = function (event) {
        this.scalePages(window.innerWidth);
    };
    Step2Component.prototype.receiveMessage = function (event) {
        // this.respond()
    };
    Step2Component.prototype.respond = function () {
        var _this = this;
        this.loading = true;
        this.exportToSvg();
        setTimeout(function () {
            var data = {
                svg: _this.listSide,
                price: _this.totalPrice
            };
            window.parent.postMessage(data, "*");
        }, 50);
    };
    Step2Component.prototype.init = function () {
        this.displayJson(0);
    };
    Step2Component.prototype.changeSide = function (src) {
        var _this = this;
        async__WEBPACK_IMPORTED_MODULE_9__["waterfall"]([
            function (callback) {
                _this.exportToSvg();
                var ctx = _this.canvas.getContext("2d");
                ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
                callback();
            },
            function (callback) {
                _this.displayJson(src);
                callback();
            },
        ], function (error) {
            if (error) {
                return console.log('error', error);
            }
        });
    };
    Step2Component.prototype.displayJson = function (src) {
        if (this.switch === "shoes") {
            if (src === 4)
                src = 0;
            if (src < 0)
                src = 3;
            if (this.listSide[src].svg === "") {
                var that_1 = this;
                fabric__WEBPACK_IMPORTED_MODULE_2__["fabric"].Image.fromURL(this.listSide[src].img, function (objects, options) {
                    var background = objects;
                    var ratioHeight = that_1.canvas.height / background.getScaledHeight();
                    var ratioWidth = that_1.canvas.width / background.getScaledWidth();
                    var ratio = Math.min(ratioHeight, ratioWidth);
                    background.scale(ratio);
                    background.set({
                        selectable: false,
                        id: "bg",
                    });
                    that_1.canvas.centerObject(background);
                    that_1.canvas.add(background);
                    that_1.canvas.renderAll();
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
                var that_2 = this;
                fabric__WEBPACK_IMPORTED_MODULE_2__["fabric"].Image.fromURL(this.listZones[src].img, function (objects, options) {
                    var background = objects;
                    var ratioHeight = that_2.canvas.height / background.getScaledHeight();
                    var ratioWidth = that_2.canvas.width / background.getScaledWidth();
                    var ratio = Math.min(ratioHeight, ratioWidth);
                    background.scale(ratio);
                    background.set({
                        selectable: false,
                        id: "bgZone" + src,
                    });
                    that_2.canvas.centerObject(background);
                    that_2.canvas.add(background);
                    that_2.canvas.renderAll();
                });
            }
            this.sideNumber = src;
            this.loadJson(src);
        }
    };
    Step2Component.prototype.changeBg = function (color) {
        var that = this;
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
    };
    Step2Component.prototype.loadJson = function (src) {
        if (this.switch === "shoes") {
            this.canvas.loadFromJSON(this.listSide[src].json);
        }
        if (this.switch === "zones") {
            this.canvas.loadFromJSON(this.listZones[src].json);
        }
        this.canvas.renderAll();
    };
    // add rectangle
    Step2Component.prototype.addRect = function () {
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
    };
    // add text
    Step2Component.prototype.addText = function () {
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
    };
    Step2Component.prototype.exportToSvg = function () {
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
    };
    Step2Component.prototype.getByName = function (name) {
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
    };
    // use modal images
    Step2Component.prototype.addB64Zone = function () {
        var oImg;
        var that = this;
        // console.log('this.canvas.getObjects()', this.canvas.getObjects())
        console.log('this.listSide[0].json', this.listSide[0].json);
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
    };
    // use modal images
    Step2Component.prototype.addStockImg = function (e) {
        var _this = this;
        fabric__WEBPACK_IMPORTED_MODULE_2__["fabric"].Image.fromURL(e.img, function (img) {
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
            _this.canvas.add(oImg);
            _this.canvas.renderAll();
            _this.totalPrice += oImg.price;
        }, null, { crossOrigin: 'Anonymous' });
    };
    Step2Component.prototype.blur = function (event) {
        this.canvas.getActiveObject().set("text", event.srcElement.innerText);
        this.canvas.add(this.canvas.getActiveObject()).renderAll();
    };
    // upload image
    Step2Component.prototype.importImg = function (e) {
        var _this = this;
        var fileReader = new FileReader();
        var oImg;
        fileReader.onloadend = function (event) {
            var data = fileReader.result;
            fabric__WEBPACK_IMPORTED_MODULE_2__["fabric"].Image.fromURL(data, function (img) {
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
                _this.canvas.add(oImg).renderAll();
                _this.totalPrice += oImg.price;
            });
        };
        fileReader.readAsDataURL(e);
    };
    Step2Component.prototype.onObjectSelected = function () {
        // check if type is a property of active element
        this.objType = (this.canvas.getActiveObject().type ? this.canvas.getActiveObject().type : "");
        this.activeObject = this.canvas.getActiveObject();
        this.switchDisplay(this.objType);
    };
    Step2Component.prototype.getImgById = function (id) {
        this.imgLib = this.assetsLib.getById(id);
    };
    Step2Component.prototype.onObjectCleared = function () {
        this.clear();
        this.exportToSvg();
        this.activeObject = null;
    };
    Step2Component.prototype.onObjectUpdated = function () {
        this.clear();
        this.exportToSvg();
        this.activeObject = this.canvas.getActiveObject();
        // check if type is a property of active element
        this.objType = (this.canvas.getActiveObject().type ? this.canvas.getActiveObject().type : "");
        this.switchDisplay(this.objType);
    };
    Step2Component.prototype.deleteObject = function () {
        this.totalPrice -= this.canvas.getActiveObject().price;
        this.canvas.remove(this.canvas.getActiveObject());
        this.canvas.renderAll();
    };
    Step2Component.prototype.clickColor = function () {
        this.generalDisplay = false;
        this.colorDisplay = true;
    };
    ;
    Step2Component.prototype.back = function () {
        this.objType = (this.canvas.getActiveObject().type ? this.canvas.getActiveObject().type : "");
        this.generalDisplay = true;
        this.colorDisplay = false;
        this.switchDisplay(this.objType);
    };
    Step2Component.prototype.clear = function () {
        this.generalDisplay = false;
        this.colorDisplay = false;
        this.imgDisplay = false;
    };
    Step2Component.prototype.textTransform = function () {
        if (this.isBold)
            this.canvas.getActiveObject().set("fontWeight", "bold");
        else
            this.canvas.getActiveObject().set("fontWeight", "");
        if (this.isItalic)
            this.canvas.getActiveObject().set("fontStyle", "italic");
        else
            this.canvas.getActiveObject().set("fontStyle", "");
        this.canvas.renderAll();
    };
    Step2Component.prototype.changeFont = function (event) {
        this.canvas.getActiveObject().set("fontFamily", event);
        this.canvas.renderAll();
    };
    Step2Component.prototype.displayBackgroundChoice = function () {
        this.generalDisplay = false;
        this.imgDisplay = false;
        this.backgroundColorDisplay = true;
    };
    Step2Component.prototype.switchDisplay = function (obj) {
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
                console.log("Sorry, we are out of");
        }
    };
    Step2Component.prototype.switchZone = function (zone) {
        var _this = this;
        async__WEBPACK_IMPORTED_MODULE_9__["waterfall"]([
            function (callback) {
                _this.exportToSvg();
                callback();
            },
            function (callback) {
                _this.switch = zone;
                callback();
            },
            function (callback) {
                _this.side = null;
                _this.displayJson(0);
                callback();
            },
            function (callback) {
                if (zone === "shoes") {
                    _this.addB64Zone();
                }
                callback();
            },
        ], function (error) {
            if (error) {
                return console.log('error', error);
            }
        });
    };
    Step2Component.prototype.bringForward = function () {
        var _this = this;
        var el = this.canvas.getActiveObject();
        this.canvas.bringForward(el);
        setTimeout(function () {
            _this.canvas.renderAll();
        }, 150);
    };
    Step2Component.prototype.bringBackward = function () {
        var _this = this;
        var el = this.canvas.getActiveObject();
        this.canvas.sendBackwards(el);
        setTimeout(function () {
            _this.canvas.renderAll();
        }, 150);
    };
    Step2Component.prototype.flipX = function () {
        var _this = this;
        var el = this.canvas.getActiveObject();
        el.set("flipX", !el.flipX);
        setTimeout(function () {
            _this.canvas.renderAll();
        }, 15);
    };
    Step2Component.prototype.flipY = function () {
        var _this = this;
        var el = this.canvas.getActiveObject();
        el.set("flipY", !el.flipY);
        setTimeout(function () {
            _this.canvas.renderAll();
        }, 15);
    };
    Step2Component.prototype.changeColor = function (color) {
        var elements = document.getElementsByClassName("color-item");
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove("active");
        }
        this.canvas.getActiveObject().set("fill", "#" + color);
        this.canvas.renderAll();
        var node = document.getElementById(color);
        node.classList.add("active");
    };
    Step2Component.prototype.changeColorImg = function (color) {
        var _this = this;
        var oImg;
        this.canvas.getActiveObject().setSrc(color.img, function (img) {
            img.scaleToWidth(300);
            oImg = img.set({
                color: color.color
            });
            _this.canvas.renderAll();
        });
    };
    Step2Component.prototype.openModalLib = function () {
        var _this = this;
        var maxWidth, height, top;
        if (window.innerWidth < 768) {
            maxWidth = "100vw";
            top = "0";
            height = "100vh";
        }
        else {
            maxWidth = "70vw";
            top = "70px";
            height = "auto";
        }
        var dialogRef = this.dialog.open(_components_modals_modalLib_modalLib__WEBPACK_IMPORTED_MODULE_3__["ModalLibDialog"], {
            maxWidth: maxWidth,
            height: height,
            position: {
                top: top,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.addStockImg(result);
        });
    };
    Step2Component.prototype.openModalImport = function () {
        var _this = this;
        var maxWidth, height, top;
        if (window.innerWidth < 768) {
            maxWidth = "100vw";
            top = "0";
            height = "100vh";
        }
        else {
            maxWidth = "70vw";
            top = "70px";
            height = "auto";
        }
        var dialogRef = this.dialog.open(_components_modals_modalImport_modalImport__WEBPACK_IMPORTED_MODULE_4__["ModalImportDialog"], {
            maxWidth: maxWidth,
            height: height,
            position: {
                top: top,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.importImg(result);
        });
    };
    Step2Component.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _services_assetsLib_service__WEBPACK_IMPORTED_MODULE_6__["AssetsLibService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:message', ['$event'])
    ], Step2Component.prototype, "onMessage", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
    ], Step2Component.prototype, "onResize", null);
    Step2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'step2',
            template: __webpack_require__(/*! raw-loader!./step2.page.html */ "./node_modules/raw-loader/index.js!./src/app/step2/step2.page.html"),
            styles: [__webpack_require__(/*! ./step2.page.scss */ "./src/app/step2/step2.page.scss")]
        })
    ], Step2Component);
    return Step2Component;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var BlankDialog = /** @class */ (function () {
    function BlankDialog(dialogRef, snackBar, data) {
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.data = data;
    }
    BlankDialog.prototype.ngOnInit = function () {
    };
    BlankDialog.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    BlankDialog.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    BlankDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'blank',
            template: __webpack_require__(/*! raw-loader!./blank.html */ "./node_modules/raw-loader/index.js!./src/components/modals/blankModal/blank.html"),
            styles: [__webpack_require__(/*! ./blank.scss */ "./src/components/modals/blankModal/blank.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], BlankDialog);
    return BlankDialog;
}());



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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _blankModal_blank__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blankModal/blank */ "./src/components/modals/blankModal/blank.ts");
/* harmony import */ var _modalImport_modalImport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modalImport/modalImport */ "./src/components/modals/modalImport/modalImport.ts");
/* harmony import */ var _modalLib_modalLib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modalLib/modalLib */ "./src/components/modals/modalLib/modalLib.ts");
/* harmony import */ var _modalNike_modalNike__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modalNike/modalNike */ "./src/components/modals/modalNike/modalNike.ts");
/* harmony import */ var _app_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/shared.module */ "./src/app/shared.module.ts");




// ***** Dialogs *****





var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
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
    return ModalModule;
}());



/***/ }),

/***/ "./src/components/modals/modalImport/modalImport.scss":
/*!************************************************************!*\
  !*** ./src/components/modals/modalImport/modalImport.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popup {\n  background: #fff;\n  position: relative;\n  -webkit-transition: all 5s ease-in-out;\n  transition: all 5s ease-in-out;\n}\n\n.header-container {\n  border-bottom: 4px solid #131313;\n  display: -webkit-box;\n  display: flex;\n}\n\n.popup h2 {\n  margin: 0 0 20px;\n  color: #333;\n  font-family: Arial, sans-serif;\n  text-transform: uppercase;\n}\n\n.popup .close {\n  margin: 0 0 0 auto;\n  -webkit-transition: all 200ms;\n  transition: all 200ms;\n  font-size: 24px;\n  font-weight: bold;\n  text-decoration: none;\n  color: #333;\n}\n\n.popup .close:hover {\n  color: #056FFA;\n}\n\n.popup .content {\n  max-height: 30%;\n  overflow: auto;\n}\n\n.container-modal {\n  display: -webkit-box;\n  display: flex;\n}\n\n.container-button {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.container-button button {\n  height: 52px;\n  border: none;\n  border-radius: 0;\n  background-color: #131313;\n  color: white;\n  padding: 0 24px;\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.container-button button:hover {\n  background-color: #056FFA;\n}\n\n.import-zone {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 2;\n          flex: 2;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.import-zone .warning {\n  font-size: 14px;\n  color: #131313;\n}\n\n.content-imported {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 4;\n          flex: 4;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.toggle-container {\n  background-color: #131313;\n}\n\n.toggle-contain {\n  position: relative;\n}\n\n#toggle {\n  width: 160px;\n  height: 36px;\n  position: relative;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  border: 3px solid #131313;\n  margin-top: 8px;\n}\n\n.inner-container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: inherit;\n  height: inherit;\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 0.2em;\n}\n\n.inner-container:first-child {\n  background: #FFF;\n  color: #131313;\n}\n\n.inner-container:nth-child(2) {\n  background: #131313;\n  color: white;\n  -webkit-clip-path: inset(0 50% -1px -1px);\n          clip-path: inset(0 50% -1px -1px);\n  -webkit-transition: 0.3s cubic-bezier(0, 0, 0, 1);\n  transition: 0.3s cubic-bezier(0, 0, 0, 1);\n}\n\n.toggle {\n  width: 50%;\n  position: absolute;\n  height: inherit;\n  display: -webkit-box;\n  display: flex;\n  box-sizing: border-box;\n  font-weight: bold;\n}\n\n.toggle p {\n  margin: auto;\n}\n\n.toggle:nth-child(1) {\n  right: 0;\n}\n\nlabel#largeFile {\n  margin-top: 16px;\n  content: \"Importer votre fichier\";\n  left: 0;\n  right: 0;\n  text-align: center;\n  padding: 50px 0px 50px 0px;\n  border: 3px dashed #131313;\n  color: #131313;\n  font-size: 18px;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\nlabel#largeFile:hover {\n  cursor: pointer;\n}\n\nlabel#largeFile input#file {\n  width: 0px;\n  height: 0px;\n}\n\n.content-imported {\n  margin: 16px;\n  display: -webkit-box;\n  display: flex;\n}\n\n#output {\n  height: auto;\n  max-height: 500px;\n  max-width: 100%;\n  margin: auto;\n}\n\n.item-panel {\n  visibility: hidden;\n}\n\n.item-panel.visible {\n  visibility: visible;\n}\n\n@media only screen and (max-width: 768px) {\n  .container-modal {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n\n  ::ng-deep.mat-dialog-container {\n    width: 100vw;\n  }\n\n  .item-modal {\n    display: -webkit-box;\n    display: flex;\n  }\n\n  .assets {\n    padding: 0;\n  }\n  .assets img {\n    height: auto;\n    width: 50%;\n    margin: auto 0;\n  }\n  .assets .multi {\n    top: 5px;\n    margin-left: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbnNlcnJhbm8vY3VzdG9tU25lYWsvc3JjL2NvbXBvbmVudHMvbW9kYWxzL21vZGFsSW1wb3J0L21vZGFsSW1wb3J0LnNjc3MiLCJzcmMvY29tcG9uZW50cy9tb2RhbHMvbW9kYWxJbXBvcnQvbW9kYWxJbXBvcnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUFBLDhCQUFBO0FDQUo7O0FERUU7RUFDRSxnQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0NKOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQ0VKOztBREFFO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUFBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDR0o7O0FEREU7RUFDRSxjQUFBO0FDSUo7O0FERkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0tKOztBREhFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDTUo7O0FESkU7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtBQ09KOztBRE5JO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNRTjs7QURQTTtFQUNFLHlCQUFBO0FDU1I7O0FESkU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNPSjs7QUROSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDUU47O0FETEU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNRSjs7QURKRTtFQUNFLHlCQUFBO0FDT0o7O0FETEU7RUFDRSxrQkFBQTtBQ1FKOztBRE5FO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDU0o7O0FETkU7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ1NKOztBRE5FO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDU0o7O0FETkU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0EsaURBQUE7RUFBQSx5Q0FBQTtBQ1NKOztBRE5FO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNTSjs7QURORTtFQUNFLFlBQUE7QUNTSjs7QURORTtFQUNFLFFBQUE7QUNTSjs7QURORTtFQUNFLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQ1NKOztBRE5FO0VBQ0UsZUFBQTtBQ1NKOztBRE5FO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNTTjs7QURQRTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNVSjs7QURSRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDV0o7O0FEUkU7RUFDRSxrQkFBQTtBQ1dKOztBRFZJO0VBQ0UsbUJBQUE7QUNZTjs7QURURTtFQUVFO0lBQ0ksNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VDV047O0VEVEU7SUFDRSxZQUFBO0VDWUo7O0VEVkU7SUFDRSxvQkFBQTtJQUFBLGFBQUE7RUNhSjs7RURYRTtJQUNFLFVBQUE7RUNjSjtFRGJJO0lBQ0UsWUFBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0VDZU47RURiSTtJQUNFLFFBQUE7SUFDQSxnQkFBQTtFQ2VOO0FBQ0YiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvbW9kYWxzL21vZGFsSW1wb3J0L21vZGFsSW1wb3J0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5wb3B1cCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDVzIGVhc2UtaW4tb3V0O1xuICB9XG4gIC5oZWFkZXItY29udGFpbmVyIHtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzEzMTMxMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5wb3B1cCBoMiB7XG4gICAgbWFyZ2luOiAwIDAgMjBweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAucG9wdXAgLmNsb3NlIHtcbiAgICBtYXJnaW46IDAgMCAwIGF1dG87XG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbiAgLnBvcHVwIC5jbG9zZTpob3ZlciB7XG4gICAgY29sb3I6ICMwNTZGRkE7XG4gIH1cbiAgLnBvcHVwIC5jb250ZW50IHtcbiAgICBtYXgtaGVpZ2h0OiAzMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbiAgLmNvbnRhaW5lci1tb2RhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuY29udGFpbmVyLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6IDUycHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTMxMztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU2RkZBXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmltcG9ydC16b25lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAud2FybmluZyB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzEzMTMxM1xuICAgIH1cbiAgfVxuICAuY29udGVudC1pbXBvcnRlZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiA0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgXG4gIC8vIFRvZ2dsZSBidXR0b24gaHR0cHM6Ly9jb2RlcGVuLmlvL2phcmVrbzk5OS9wZW4vZUJheVlMP2VkaXRvcnM9MTExMVxuICAudG9nZ2xlLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTMxMztcbiAgfVxuICAudG9nZ2xlLWNvbnRhaW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICB9XG4gICN0b2dnbGUge1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICMxMzEzMTM7XG4gICAgbWFyZ2luLXRvcDogOHB4XG4gIH1cbiAgXG4gIC5pbm5lci1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4yZW07XG4gIH1cbiAgXG4gIC5pbm5lci1jb250YWluZXI6Zmlyc3QtY2hpbGQge1xuICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgY29sb3I6ICMxMzEzMTM7XG4gIH1cbiAgXG4gIC5pbm5lci1jb250YWluZXI6bnRoLWNoaWxkKDIpIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTMxMzEzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDAgNTAlIC0xcHggLTFweCk7XG4gICAgdHJhbnNpdGlvbjogLjNzIGN1YmljLWJlemllcigwLDAsMCwxKTtcbiAgfVxuICBcbiAgLnRvZ2dsZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLnRvZ2dsZSBwIHtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgXG4gIC50b2dnbGU6bnRoLWNoaWxkKDEpIHtcbiAgICByaWdodDogMDtcbiAgfVxuICBcbiAgbGFiZWwjbGFyZ2VGaWxlIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIGNvbnRlbnQ6XCJJbXBvcnRlciB2b3RyZSBmaWNoaWVyXCI7XG4gICAgbGVmdDowO1xuICAgIHJpZ2h0OjA7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgcGFkZGluZzo1MHB4IDBweCA1MHB4IDBweDtcbiAgICBib3JkZXI6M3B4IGRhc2hlZCAjMTMxMzEzO1xuICAgIGNvbG9yOiMxMzEzMTM7XG4gICAgZm9udC1zaXplOjE4cHg7IFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gIFxuICBsYWJlbCNsYXJnZUZpbGU6aG92ZXIge1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICB9XG4gIFxuICBsYWJlbCNsYXJnZUZpbGUgaW5wdXQjZmlsZSB7XG4gICAgICB3aWR0aDogMHB4O1xuICAgICAgaGVpZ2h0OiAwcHg7XG4gIH1cbiAgLmNvbnRlbnQtaW1wb3J0ZWQge1xuICAgIG1hcmdpbjogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gICNvdXRwdXQge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvXG4gIH1cbiAgXG4gIC5pdGVtLXBhbmVsIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgJi52aXNpYmxlIHtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGVcbiAgICB9XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XG5cbiAgICAuY29udGFpbmVyLW1vZGFsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgfVxuICAgIDo6bmctZGVlcC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTAwdnc7XG4gICAgfVxuICAgIC5pdGVtLW1vZGFsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC5hc3NldHMge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvIDAgO1xuICAgICAgfVxuICAgICAgLm11bHRpIHtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICB9XG4gICAgfVxuICB9IiwiLnBvcHVwIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMxMzEzMTM7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wb3B1cCBoMiB7XG4gIG1hcmdpbjogMCAwIDIwcHg7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5wb3B1cCAuY2xvc2Uge1xuICBtYXJnaW46IDAgMCAwIGF1dG87XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzMzMztcbn1cblxuLnBvcHVwIC5jbG9zZTpob3ZlciB7XG4gIGNvbG9yOiAjMDU2RkZBO1xufVxuXG4ucG9wdXAgLmNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiAzMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uY29udGFpbmVyLW1vZGFsIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNvbnRhaW5lci1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5jb250YWluZXItYnV0dG9uIGJ1dHRvbiB7XG4gIGhlaWdodDogNTJweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzEzO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lci1idXR0b24gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1NkZGQTtcbn1cblxuLmltcG9ydC16b25lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5pbXBvcnQtem9uZSAud2FybmluZyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMxMzEzMTM7XG59XG5cbi5jb250ZW50LWltcG9ydGVkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogNDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRvZ2dsZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzEzO1xufVxuXG4udG9nZ2xlLWNvbnRhaW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiN0b2dnbGUge1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMzZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDNweCBzb2xpZCAjMTMxMzEzO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5pbm5lci1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG59XG5cbi5pbm5lci1jb250YWluZXI6Zmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBjb2xvcjogIzEzMTMxMztcbn1cblxuLmlubmVyLWNvbnRhaW5lcjpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kOiAjMTMxMzEzO1xuICBjb2xvcjogd2hpdGU7XG4gIGNsaXAtcGF0aDogaW5zZXQoMCA1MCUgLTFweCAtMXB4KTtcbiAgdHJhbnNpdGlvbjogMC4zcyBjdWJpYy1iZXppZXIoMCwgMCwgMCwgMSk7XG59XG5cbi50b2dnbGUge1xuICB3aWR0aDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50b2dnbGUgcCB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnRvZ2dsZTpudGgtY2hpbGQoMSkge1xuICByaWdodDogMDtcbn1cblxubGFiZWwjbGFyZ2VGaWxlIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgY29udGVudDogXCJJbXBvcnRlciB2b3RyZSBmaWNoaWVyXCI7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUwcHggMHB4IDUwcHggMHB4O1xuICBib3JkZXI6IDNweCBkYXNoZWQgIzEzMTMxMztcbiAgY29sb3I6ICMxMzEzMTM7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5sYWJlbCNsYXJnZUZpbGU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmxhYmVsI2xhcmdlRmlsZSBpbnB1dCNmaWxlIHtcbiAgd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG59XG5cbi5jb250ZW50LWltcG9ydGVkIHtcbiAgbWFyZ2luOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jb3V0cHV0IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5pdGVtLXBhbmVsIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLml0ZW0tcGFuZWwudmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lci1tb2RhbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIDo6bmctZGVlcC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICB9XG5cbiAgLml0ZW0tbW9kYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAuYXNzZXRzIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC5hc3NldHMgaW1nIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IGF1dG8gMDtcbiAgfVxuICAuYXNzZXRzIC5tdWx0aSB7XG4gICAgdG9wOiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ModalImportDialog = /** @class */ (function () {
    function ModalImportDialog(dialogRef, snackBar, data) {
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.data = data;
        this.toggle = document.getElementById('toggle');
        this.toggleContainer = document.getElementById('toggle-container');
        this.importInput = document.getElementById('largeFile');
    }
    ModalImportDialog.prototype.ngOnInit = function () {
        this.toggle = document.getElementById('toggle');
        this.toggleContainer = document.getElementById('toggle-container');
        this.importInput = document.getElementById('largeFile');
    };
    ModalImportDialog.prototype.onClick = function () {
        this.toggleNumber = !this.toggleNumber;
        if (this.toggleNumber) {
            this.toggleContainer.style.clipPath = 'inset(0 -1px -1px 50%)';
            this.importInput.style.pointerEvents = 'auto';
        }
        else {
            this.toggleContainer.style.clipPath = 'inset(0 50% -1px -1px)';
            this.importInput.style.pointerEvents = 'none';
        }
    };
    ModalImportDialog.prototype.loadFile = function (event) {
        this.fileLoaded = event;
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src); // free memory
        };
    };
    ;
    // upload image
    ModalImportDialog.prototype.uploadImage = function () {
        var file = this.fileLoaded.target.files[0];
        this.closeDialog(file);
    };
    ModalImportDialog.prototype.closeDialog = function (item) {
        this.dialogRef.close(item);
    };
    ModalImportDialog.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ModalImportDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'modalImport',
            template: __webpack_require__(/*! raw-loader!./modalImport.html */ "./node_modules/raw-loader/index.js!./src/components/modals/modalImport/modalImport.html"),
            styles: [__webpack_require__(/*! ./modalImport.scss */ "./src/components/modals/modalImport/modalImport.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], ModalImportDialog);
    return ModalImportDialog;
}());



/***/ }),

/***/ "./src/components/modals/modalLib/modalLib.scss":
/*!******************************************************!*\
  !*** ./src/components/modals/modalLib/modalLib.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popup {\n  background: #fff;\n  position: relative;\n  -webkit-transition: all 5s ease-in-out;\n  transition: all 5s ease-in-out;\n}\n\n.header-container {\n  border-bottom: 4px solid #171717;\n  display: -webkit-box;\n  display: flex;\n}\n\n.popup h2 {\n  margin: 0 0 20px;\n  color: #333;\n  font-family: \"anton\", Arial, sans-serif;\n  text-transform: uppercase;\n}\n\n.popup .close {\n  margin: 0 0 0 auto;\n  -webkit-transition: all 200ms;\n  transition: all 200ms;\n  font-size: 24px;\n  font-weight: bold;\n  text-decoration: none;\n  color: #171717;\n  cursor: pointer;\n}\n\n.popup .close:hover {\n  color: #056FFA;\n}\n\n.popup .content {\n  max-height: 30%;\n  overflow: auto;\n}\n\n.container-modal {\n  display: -webkit-box;\n  display: flex;\n  max-height: 500px;\n}\n\n.container-button {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.container-button button {\n  height: 52px;\n  border: none;\n  border-radius: 0;\n  background-color: #171717;\n  color: white;\n  padding: 0 24px;\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.container-button button:hover {\n  background-color: #056FFA;\n}\n\n.category-list {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 16px 16px 16px 0;\n}\n\n.category-item {\n  line-height: 56px;\n  background-color: #171717;\n  padding: 0 16px;\n  margin: 4px 0;\n  text-align: center;\n  font-family: arial;\n  color: white;\n  font-size: 18px;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-family: \"anton\";\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.category-item:hover {\n  background-color: #056FFA;\n}\n\nul {\n  margin: 0 !important;\n  -webkit-margin-before: 0;\n          margin-block-start: 0;\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\n\n.assets {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n  margin: 0 !important;\n  padding: 16px;\n  overflow-y: scroll;\n}\n\n.assets img {\n  height: 150px;\n  width: auto;\n  margin: auto 16px;\n}\n\n.assets .multi {\n  position: absolute;\n  width: 25px;\n  top: 70px;\n  margin-left: 25px;\n}\n\n.item-modal {\n  margin: 8px 0;\n  cursor: pointer;\n}\n\n.item-modal:hover .img-stock {\n  background-color: #FAFAFA;\n}\n\n.img-stock {\n  background-color: #F6F7FB;\n  padding: 8px;\n}\n\n.infos-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin: auto 16px;\n  text-transform: uppercase;\n}\n\n.infos-item .name {\n  padding: 4px;\n  font-size: 12px;\n}\n\n.infos-item .price {\n  background-color: #171717;\n  padding: 4px;\n  color: white;\n  font-size: 12px;\n}\n\n.multi-indicator {\n  position: relative;\n}\n\n@media only screen and (max-width: 768px) {\n  .container-modal {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n\n  ::ng-deep.mat-dialog-container {\n    width: 100vw;\n  }\n\n  .item-modal {\n    display: -webkit-box;\n    display: flex;\n  }\n\n  .assets {\n    padding: 0;\n  }\n  .assets img {\n    height: auto;\n    width: 50%;\n    margin: auto 0;\n  }\n  .assets .multi {\n    top: 5px;\n    margin-left: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbnNlcnJhbm8vY3VzdG9tU25lYWsvc3JjL2NvbXBvbmVudHMvbW9kYWxzL21vZGFsTGliL21vZGFsTGliLnNjc3MiLCJzcmMvY29tcG9uZW50cy9tb2RhbHMvbW9kYWxMaWIvbW9kYWxMaWIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUFBLDhCQUFBO0FDQUo7O0FERUU7RUFDRSxnQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0NKOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSx5QkFBQTtBQ0VKOztBREFFO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUFBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0dKOztBRERFO0VBQ0UsY0FBQTtBQ0lKOztBREZFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNLSjs7QURIRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0FDTUo7O0FESkU7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtBQ09KOztBRE5JO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNRTjs7QURQTTtFQUNFLHlCQUFBO0FDU1I7O0FETEU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtBQ1FKOztBRE5FO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDU0o7O0FEUkk7RUFDRSx5QkFBQTtBQ1VOOztBRFBFO0VBQ0Usb0JBQUE7RUFDQSx3QkFBQTtVQUFBLHFCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ1VKOztBRFJFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNXSjs7QURWSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNZTjs7QURWSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ1lOOztBRFRFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNZSjs7QURWTTtFQUNFLHlCQUFBO0FDWVI7O0FEUkU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNXSjs7QURURTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDWUo7O0FEWEk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ2FOOztBRFhJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNhTjs7QURWRTtFQUNFLGtCQUFBO0FDYUo7O0FEWEU7RUFFRTtJQUNJLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtFQ2FOOztFRFhFO0lBQ0UsWUFBQTtFQ2NKOztFRFpFO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0VDZUo7O0VEYkU7SUFDRSxVQUFBO0VDZ0JKO0VEZkk7SUFDRSxZQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUNpQk47RURmSTtJQUNFLFFBQUE7SUFDQSxnQkFBQTtFQ2lCTjtBQUNGIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL21vZGFscy9tb2RhbExpYi9tb2RhbExpYi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucG9wdXAge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IGFsbCA1cyBlYXNlLWluLW91dDtcbiAgfVxuICAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMxNzE3MTc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAucG9wdXAgaDIge1xuICAgIG1hcmdpbjogMCAwIDIwcHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udC1mYW1pbHk6ICdhbnRvbicsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLnBvcHVwIC5jbG9zZSB7XG4gICAgbWFyZ2luOiAwIDAgMCBhdXRvO1xuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMTcxNzE3O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAucG9wdXAgLmNsb3NlOmhvdmVyIHtcbiAgICBjb2xvcjogIzA1NkZGQTtcbiAgfVxuICAucG9wdXAgLmNvbnRlbnQge1xuICAgIG1heC1oZWlnaHQ6IDMwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuICAuY29udGFpbmVyLW1vZGFsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICB9XG4gIC5jb250YWluZXItYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYnV0dG9uIHtcbiAgICAgIGhlaWdodDogNTJweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMCAyNHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTZGRkFcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmNhdGVnb3J5LWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggMTZweCAwO1xuICB9XG4gIC5jYXRlZ29yeS1pdGVtIHtcbiAgICBsaW5lLWhlaWdodDogNTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBtYXJnaW46IDRweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogYXJpYWw7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiAnYW50b24nO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTZGRkE7XG4gICAgfVxuICB9XG4gIHVsIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBcbiAgfVxuICAuYXNzZXRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodCA6IDE1MHB4O1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBtYXJnaW46IGF1dG8gMTZweDtcbiAgICB9XG4gICAgLm11bHRpIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgdG9wOiA3MHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgfVxuICB9XG4gIC5pdGVtLW1vZGFsIHtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIC5pbWctc3RvY2sge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuaW1nLXN0b2NrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGN0ZCO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuICAuaW5mb3MtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiBhdXRvIDE2cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAubmFtZSB7XG4gICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICBmb250LXNpemU6IDEycHhcbiAgICB9XG4gICAgLnByaWNlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XG4gICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDEycHhcbiAgICB9XG4gIH1cbiAgLm11bHRpLWluZGljYXRvciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xuXG4gICAgLmNvbnRhaW5lci1tb2RhbCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgIH1cbiAgICA6Om5nLWRlZXAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgIH1cbiAgICAuaXRlbS1tb2RhbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuYXNzZXRzIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIG1hcmdpbjogYXV0byAwIDtcbiAgICAgIH1cbiAgICAgIC5tdWx0aSB7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfSIsIi5wb3B1cCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDVzIGVhc2UtaW4tb3V0O1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMTcxNzE3O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucG9wdXAgaDIge1xuICBtYXJnaW46IDAgMCAyMHB4O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1mYW1pbHk6IFwiYW50b25cIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5wb3B1cCAuY2xvc2Uge1xuICBtYXJnaW46IDAgMCAwIGF1dG87XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzE3MTcxNztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucG9wdXAgLmNsb3NlOmhvdmVyIHtcbiAgY29sb3I6ICMwNTZGRkE7XG59XG5cbi5wb3B1cCAuY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDMwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5jb250YWluZXItbW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cblxuLmNvbnRhaW5lci1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5jb250YWluZXItYnV0dG9uIGJ1dHRvbiB7XG4gIGhlaWdodDogNTJweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lci1idXR0b24gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1NkZGQTtcbn1cblxuLmNhdGVnb3J5LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxNnB4IDE2cHggMTZweCAwO1xufVxuXG4uY2F0ZWdvcnktaXRlbSB7XG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIG1hcmdpbjogNHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcImFudG9uXCI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uY2F0ZWdvcnktaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTZGRkE7XG59XG5cbnVsIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG59XG5cbi5hc3NldHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5hc3NldHMgaW1nIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogYXV0byAxNnB4O1xufVxuLmFzc2V0cyAubXVsdGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNXB4O1xuICB0b3A6IDcwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuXG4uaXRlbS1tb2RhbCB7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pdGVtLW1vZGFsOmhvdmVyIC5pbWctc3RvY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufVxuXG4uaW1nLXN0b2NrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjdGQjtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uaW5mb3MtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiBhdXRvIDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uaW5mb3MtaXRlbSAubmFtZSB7XG4gIHBhZGRpbmc6IDRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmluZm9zLWl0ZW0gLnByaWNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcbiAgcGFkZGluZzogNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm11bHRpLWluZGljYXRvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVyLW1vZGFsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgOjpuZy1kZWVwLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gIH1cblxuICAuaXRlbS1tb2RhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIC5hc3NldHMge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLmFzc2V0cyBpbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogYXV0byAwO1xuICB9XG4gIC5hc3NldHMgLm11bHRpIHtcbiAgICB0b3A6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_assetsLib_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/assetsLib.service */ "./src/services/assetsLib.service.ts");




var ModalLibDialog = /** @class */ (function () {
    function ModalLibDialog(dialogRef, snackBar, assetsLib, data) {
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.assetsLib = assetsLib;
        this.data = data;
        this.currentCat = "";
        this.isMobile = false;
        this.catActive = false;
    }
    ModalLibDialog.prototype.ngOnInit = function () {
        if (window.innerWidth < 768) {
            this.isMobile = true;
        }
        else {
            this.currentCat = "food";
            this.getCurrentCategory("food");
        }
    };
    ModalLibDialog.prototype.changeImgSrc = function (src) {
        this.currentCat = src;
    };
    ModalLibDialog.prototype.getCurrentCategory = function (src) {
        this.currentCat = src;
        this.assets = this.assetsLib.getByCategory(src);
    };
    // use modal images
    ModalLibDialog.prototype.addStockImg = function (e, item) {
        var imgObj = e.srcElement.currentSrc;
        this.closeDialog(imgObj, item);
    };
    ModalLibDialog.prototype.closeDialog = function (img, item) {
        var result = {
            img: img,
            item: item
        };
        this.dialogRef.close(result);
    };
    ModalLibDialog.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: _services_assetsLib_service__WEBPACK_IMPORTED_MODULE_3__["AssetsLibService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ModalLibDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'modalLib',
            template: __webpack_require__(/*! raw-loader!./modalLib.html */ "./node_modules/raw-loader/index.js!./src/components/modals/modalLib/modalLib.html"),
            styles: [__webpack_require__(/*! ./modalLib.scss */ "./src/components/modals/modalLib/modalLib.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], ModalLibDialog);
    return ModalLibDialog;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_assetsLib_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/assetsLib.service */ "./src/services/assetsLib.service.ts");




var ModalNikeDialog = /** @class */ (function () {
    function ModalNikeDialog(dialogRef, snackBar, assetsLib, data) {
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.assetsLib = assetsLib;
        this.data = data;
    }
    ModalNikeDialog.prototype.ngOnInit = function () {
        this.currentCat = "photo";
        this.getCurrentCategory("photo");
    };
    ModalNikeDialog.prototype.changeImgSrc = function (src) {
        this.currentCat = src;
    };
    ModalNikeDialog.prototype.getCurrentCategory = function (src) {
        this.currentCat = this.assetsLib.getByCategory(src);
    };
    // use modal images
    ModalNikeDialog.prototype.addStockImg = function (e, item) {
        var imgObj = e.srcElement.currentSrc;
        this.closeDialog(imgObj, item);
    };
    ModalNikeDialog.prototype.closeDialog = function (img, item) {
        var result = {
            img: img,
            item: item
        };
        this.dialogRef.close(result);
    };
    ModalNikeDialog.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: _services_assetsLib_service__WEBPACK_IMPORTED_MODULE_3__["AssetsLibService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ModalNikeDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'modalNike',
            template: __webpack_require__(/*! raw-loader!./modalNike.html */ "./node_modules/raw-loader/index.js!./src/components/modals/modalNike/modalNike.html"),
            styles: [__webpack_require__(/*! ./modalNike.scss */ "./src/components/modals/modalNike/modalNike.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], ModalNikeDialog);
    return ModalNikeDialog;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


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

var reducers = {
    user: _user__WEBPACK_IMPORTED_MODULE_0__["userReducer"],
};
var INITIAL_STATE = {
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
var CREATE_USER = 'CREATE_USER';
var SELECT_USER = 'SELECT_USER';
// ***** Initial data *****
var userInitial = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AssetsLibService = /** @class */ (function () {
    function AssetsLibService() {
        this.lib = [
            {
                img: "./assets/illustration/peperoni.png",
                name: "Peperoni",
                category: "food",
                price: 5,
                id: "1",
                colors: []
            },
            {
                img: "./assets/illustration/popcorn.png",
                name: "Popcorn",
                category: "food",
                price: 5,
                id: "2",
                colors: []
            },
            {
                img: "./assets/illustration/waleFront.png",
                name: "Baleine",
                category: "girly",
                price: 5,
                id: "3",
                colors: []
            },
            {
                img: "./assets/illustration/waleback.png",
                name: "Baleine",
                category: "girly",
                price: 5,
                id: "4",
                colors: []
            },
            {
                img: "./assets/illustration/cherry.png",
                name: "Cerises",
                category: "food",
                price: 5,
                id: "5",
                colors: []
            },
            {
                img: "./assets/illustration/roses.png",
                name: "Roses",
                category: "girly",
                price: 5,
                id: "6",
                colors: []
            },
            {
                img: "./assets/illustration/papBlue.png",
                name: "Papillon",
                category: "girly",
                price: 2,
                id: "7",
                colors: [
                    {
                        img: "./assets/illustration/papBlue.png",
                        color: "00BFFF",
                    },
                    {
                        img: "./assets/illustration/papGreen.png",
                        color: "35D24D",
                    },
                    {
                        img: "./assets/illustration/papOrange.png",
                        color: "E78D00",
                    },
                    {
                        img: "./assets/illustration/papRed.png",
                        color: "E71D0A",
                    },
                    {
                        img: "./assets/illustration/papPink.png",
                        color: "FD4B8E",
                    }
                ]
            },
            {
                img: "./assets/illustration/sakuraPink.png",
                name: "Fleur de cerisier",
                category: "girly",
                price: 5,
                id: "8",
                colors: [
                    {
                        img: "./assets/illustration/sakuraBlue.png",
                        color: "00BFFF",
                    },
                    {
                        img: "./assets/illustration/sakuraPink.png",
                        color: "FD4B8E",
                    }
                ]
            },
            {
                img: "./assets/illustration/donutPink.png",
                name: "Donuts",
                category: "food",
                price: 5,
                id: "9",
                colors: [
                    {
                        img: "./assets/illustration/donutPink.png",
                        color: "FD4B8E",
                    },
                    {
                        img: "./assets/illustration/donutGreen.png",
                        color: "35D24D",
                    }
                ]
            },
        ];
    }
    AssetsLibService.prototype.getByCategory = function (category) {
        return this.lib.filter(function (img) { return img.category === category; });
    };
    AssetsLibService.prototype.getById = function (id) {
        return this.lib.find(function (img) { return img.id === id; });
    };
    AssetsLibService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AssetsLibService);
    return AssetsLibService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/services/auth.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthGuardService);
    return AuthGuardService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");



var AuthService = /** @class */ (function () {
    function AuthService(jwtHelper) {
        this.jwtHelper = jwtHelper;
    }
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService.ctorParameters = function () { return [
        { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthService);
    return AuthService;
}());



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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth-guard.service */ "./src/services/auth-guard.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _services_assetsLib_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/assetsLib.service */ "./src/services/assetsLib.service.ts");
// ####################################################################
// ######################## Externals #################################
// ####################################################################

// ***** @angular *****



// ***** Services *****



var ServiceModule = /** @class */ (function () {
    function ServiceModule() {
    }
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
    return ServiceModule;
}());



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
//# sourceMappingURL=main-es5.js.map