(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class =\"container\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">FB-Winner</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button> \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/fb-post']\">Facebook Post</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/ig-post']\">Instagram Post</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'fb-winner';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _fb_post_fb_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fb-post/fb-post.component */ "./src/app/fb-post/fb-post.component.ts");
/* harmony import */ var _ig_post_ig_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ig-post/ig-post.component */ "./src/app/ig-post/ig-post.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    {
        path: 'fb-post',
        component: _fb_post_fb_post_component__WEBPACK_IMPORTED_MODULE_6__["FbPostComponent"],
        data: { title: 'FB POST' }
    },
    {
        path: 'ig-post',
        component: _ig_post_ig_post_component__WEBPACK_IMPORTED_MODULE_7__["IgPostComponent"],
        data: { title: 'IG POST' }
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _fb_post_fb_post_component__WEBPACK_IMPORTED_MODULE_6__["FbPostComponent"],
                _ig_post_ig_post_component__WEBPACK_IMPORTED_MODULE_7__["IgPostComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/fb-post/fb-post.component.css":
/*!***********************************************!*\
  !*** ./src/app/fb-post/fb-post.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fb-post/fb-post.component.html":
/*!************************************************!*\
  !*** ./src/app/fb-post/fb-post.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- HEADER AND TODO COUNT -->\n<div class=\"jumbotron text-center\">\n  <h1>FACEBOOK POST<span class=\"label label-meteo\"></span></h1>\n</div>\n\n<!-- FORM TO CREATE TODOS -->\n<div id=\"todo-form\" class=\"row\">\n  <div class=\"col-sm-12 text-center\">\n      <form  novalidate name =\"ngForm\"  #formRef=\"ngForm\" (ngSubmit)=\"onSubmit(formRef.value)\">\n          <div class=\"form-group\">\n              <!-- BIND THIS VALUE TO formData.text IN ANGULAR -->\n              <input type=\"text\" class=\"form-control input-lg text-center\" placeholder=\"past your facebook app access token here\" name=\"page_access_token\" [(ngModel)]=\"page_access_token\" [ngModelOptions]=\"{updateOn: 'blur'}\" required>\n          </div>\n          <div class=\"form-group\">\n              <!-- BIND THIS VALUE TO formData.text IN ANGULAR -->\n              <input type=\"text\" class=\"form-control input-lg text-center\" placeholder=\"past your facebook post url here\" name=\"post_url\" [(ngModel)]=\"post_url\" [ngModelOptions]=\"{updateOn: 'blur'}\" required>\n          </div>\n          <div class=\"form-group\">\n              <!-- createToDo() WILL CREATE NEW TODOS -->\n              <button type=\"submit\" class=\"btn btn-primary btn-lg\" >Get Winner</button>\n          </div>\n\n          <div class=\"winner-element\"  [hidden]=\"submitted\">   \n              <div *ngIf=\"winner\" class=\"alert alert-success alert-dismissible\">\n                  <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n                  And the winner is ... <strong> {{winner}} </strong>\n              </div>\n\n              <div *ngIf=\"!winner\" class=\"alert alert-danger alert-dismissible\">\n                  <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n                  <strong>Oops!</strong> Make sure you have the wirght url and access token!\n              </div>\n          </div>\n\n      </form>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/fb-post/fb-post.component.ts":
/*!**********************************************!*\
  !*** ./src/app/fb-post/fb-post.component.ts ***!
  \**********************************************/
/*! exports provided: FbPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FbPostComponent", function() { return FbPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_fb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/fb.service */ "./src/app/services/fb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FbPostComponent = /** @class */ (function () {
    function FbPostComponent(http, router, _fb) {
        this.http = http;
        this.router = router;
        this._fb = _fb;
        this.submitted = true;
    }
    FbPostComponent.prototype.ngOnInit = function () {
    };
    FbPostComponent.prototype.onSubmit = function (formValue) {
        var _this = this;
        this.GetCommentators(formValue.post_url, formValue.page_access_token)
            .then(function (data) {
            console.log(data);
            _this.comments = data;
            _this.winner = _this.GetWinner(_this.comments);
            _this.submitted = false;
            console.log(_this.winner);
        });
    };
    FbPostComponent.prototype.GetCommentators = function (path, page_access_token) {
        var _this = this;
        var pathArray = path.split('/');
        var post_id = pathArray[6];
        return new Promise(function (resolve) {
            _this._fb.getPostComments(post_id, page_access_token)
                .subscribe(function (result) {
                resolve(result);
            }, function (error) {
                _this.submitted = false;
                _this.winner = null;
            });
        });
    };
    FbPostComponent.prototype.GetWinner = function (comments) {
        var i = 0;
        var people = [];
        var winner;
        comments.data.forEach(function (element) {
            people[i] = element.from.name;
            i++;
        });
        winner = people[Math.floor(Math.random() * people.length)];
        return winner;
    };
    FbPostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fb-post',
            template: __webpack_require__(/*! ./fb-post.component.html */ "./src/app/fb-post/fb-post.component.html"),
            styles: [__webpack_require__(/*! ./fb-post.component.css */ "./src/app/fb-post/fb-post.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_fb_service__WEBPACK_IMPORTED_MODULE_3__["FbService"]])
    ], FbPostComponent);
    return FbPostComponent;
}());



/***/ }),

/***/ "./src/app/ig-post/ig-post.component.css":
/*!***********************************************!*\
  !*** ./src/app/ig-post/ig-post.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ig-post/ig-post.component.html":
/*!************************************************!*\
  !*** ./src/app/ig-post/ig-post.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- HEADER AND TODO COUNT -->\n<div class=\"jumbotron text-center\">\n  <h1>INSTAGRAM POST<span class=\"label label-meteo\"></span></h1>\n</div>\n\n<!-- FORM TO CREATE TODOS -->\n<div id=\"todo-form\" class=\"row\">\n  <div class=\"col-sm-8 col-sm-offset-2 text-center\">\n      <form  novalidate #formRef=\"ngForm\" (ngSubmit)=\"onSubmit(formRef.value)\">\n          <div class=\"form-group\">\n              <!-- BIND THIS VALUE TO formData.text IN ANGULAR -->\n              <input type=\"text\" class=\"form-control input-lg text-center\" placeholder=\"past instagram link here\" name=\"cityName\" [(ngModel)]=\"cityName\" [ngModelOptions]=\"{updateOn: 'blur'}\" required>\n          </div>\n          <div class=\"form-group\">\n              <!-- createToDo() WILL CREATE NEW TODOS -->\n              <button type=\"submit\" class=\"btn btn-primary btn-lg\" >Get Winner</button>\n          </div>\n      </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ig-post/ig-post.component.ts":
/*!**********************************************!*\
  !*** ./src/app/ig-post/ig-post.component.ts ***!
  \**********************************************/
/*! exports provided: IgPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IgPostComponent", function() { return IgPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IgPostComponent = /** @class */ (function () {
    function IgPostComponent() {
    }
    IgPostComponent.prototype.ngOnInit = function () {
    };
    IgPostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ig-post',
            template: __webpack_require__(/*! ./ig-post.component.html */ "./src/app/ig-post/ig-post.component.html"),
            styles: [__webpack_require__(/*! ./ig-post.component.css */ "./src/app/ig-post/ig-post.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IgPostComponent);
    return IgPostComponent;
}());



/***/ }),

/***/ "./src/app/services/fb.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/fb.service.ts ***!
  \****************************************/
/*! exports provided: FbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FbService", function() { return FbService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FbService = /** @class */ (function () {
    function FbService(http) {
        this.http = http;
    }
    /*getMeteos() {
      return this.http.get('/meteo');
    }*/
    FbService.prototype.getPostComments = function (post_id, page_access_token) {
        return this.http.get('/api/comments/' + post_id + '/' + page_access_token);
    };
    FbService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FbService);
    return FbService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\waads\Desktop\Malou\fb-winner\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map