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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = "div{\r\n   min-height: 630px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div>\n<router-outlet></router-outlet> \n</div> \n<app-footer></app-footer>"

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
        this.title = 'app';
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/shared/navigation/navigation.component */ "./src/app/components/shared/navigation/navigation.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/services/auth-service */ "./src/app/core/services/auth-service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/interceptors/jwt.interceptor */ "./src/app/core/interceptors/jwt.interceptor.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/interceptors/error.interceptor */ "./src/app/core/interceptors/error.interceptor.ts");
/* harmony import */ var _core_interceptors_success_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/interceptors/success.interceptor */ "./src/app/core/interceptors/success.interceptor.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_admin_users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin/users/users.component */ "./src/app/components/admin/users/users.component.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/services/user-service */ "./src/app/core/services/user-service.ts");
/* harmony import */ var _components_authentication_auth_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/authentication/auth.module */ "./src/app/components/authentication/auth.module.ts");
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"],
                _components_admin_users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"],
                _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
                _components_authentication_auth_module__WEBPACK_IMPORTED_MODULE_14__["AuthModule"]
            ],
            providers: [
                _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
                _core_services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: src_app_core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_7__["JwtInterceptor"],
                    multi: true
                }, {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: src_app_core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"],
                    multi: true
                }, {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: _core_interceptors_success_interceptor__WEBPACK_IMPORTED_MODULE_10__["SuccessInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_authentication_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/authentication/signin/signin.component */ "./src/app/components/authentication/signin/signin.component.ts");
/* harmony import */ var _components_authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/authentication/signup/signup.component */ "./src/app/components/authentication/signup/signup.component.ts");
/* harmony import */ var _components_admin_users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin/users/users.component */ "./src/app/components/admin/users/users.component.ts");
/* harmony import */ var _components_flats_flats_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/flats/flats.module */ "./src/app/components/flats/flats.module.ts");
/* harmony import */ var _components_brokers_broker_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/brokers/broker.module */ "./src/app/components/brokers/broker.module.ts");
/* harmony import */ var _core_guards_admin_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/guards/admin.guard */ "./src/app/core/guards/admin.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/signin' },
    { path: 'home', redirectTo: 'flats/sale/all' },
    { path: 'signin', component: _components_authentication_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"] },
    { path: 'signup', component: _components_authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'flats', loadChildren: function () { return _components_flats_flats_module__WEBPACK_IMPORTED_MODULE_5__["FlatModule"]; } },
    { path: 'brokers', loadChildren: function () { return _components_brokers_broker_module__WEBPACK_IMPORTED_MODULE_6__["BrokerModule"]; } },
    { path: 'users', canActivate: [_core_guards_admin_guard__WEBPACK_IMPORTED_MODULE_7__["AdminGuard"]], component: _components_admin_users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/admin/users/users.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/admin/users/users.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n    text-align: center;\r\n    \r\n}\r\nimg {\r\n    border: 3px solid pink;\r\n    border-radius: 5px;\r\n    width: 100%;\r\n}\r\n.col-md-6 {\r\n    position: absolute;\r\n    top: 70px;\r\n    left: 300px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/admin/users/users.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/admin/users/users.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <h1>All Users</h1>\n  <ul class=\"list-group\" *ngIf=\"users\">\n    <li class=\"list-group-item d-flex justify-content-between align-items-center\" [@list1] *ngFor=\"let user of users\">\n      {{user.username}}\n      <span>Member since {{user._kmd.ect | date}}</span>\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeUser(user._id)\">Ban</button>\n    </li>\n    <h5 *ngIf=\"users.length===0\">There are currently no users</h5>\n  </ul>\n  \n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/admin/users/users.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/admin/users/users.component.ts ***!
  \***********************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/user-service */ "./src/app/core/services/user-service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = /** @class */ (function () {
    function UsersComponent(service) {
        this.service = service;
    }
    UsersComponent.prototype.removeUser = function (id) {
        var itemToDelete = this.users.filter(function (x) { return x._id === id; })[0];
        var index = this.users.indexOf(itemToDelete);
        this.users.splice(index, 1);
        this.service.remove(id).subscribe();
    };
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAll().subscribe(function (data) { return _this.users = data.filter(function (x) { return x['username'] !== 'admin'; }); });
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/components/admin/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/components/admin/users/users.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('list1', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 0,
                            transform: 'translateX(-100px)'
                        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(600)]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(600, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'translateX(100px)',
                            opacity: 0
                        }))])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_core_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/components/authentication/auth.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/authentication/auth.module.ts ***!
  \**********************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/auth-service */ "./src/app/core/services/auth-service.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/components/authentication/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/components/authentication/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ],
            providers: [
                _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/components/authentication/signin/signin.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/authentication/signin/signin.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/authentication/signin/signin.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/authentication/signin/signin.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Sign In</h1>\n  <form (ngSubmit)=\"signIn(loginForm.value)\" #loginForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"email\">Username</label>\n      <input type=\"text\" class=\"form-control\" id=\"email\" name=\"username\" ngModel #username=\"ngModel\" pattern=\"^[A-Za-z]{4,}$\" required>\n\n      <div [hidden]=\"username.valid || username.pristine\" class=\"alert alert-dark\">\n        Username must contain only letters and be at least 4 symbols \n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" ngModel minlength=\"4\" #password=\"ngModel\" required>\n\n      <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-dark\">\n        Password must be at least 4 symbols\n      </div>\n    </div>\n    <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-dark\" >Sign In</button>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/authentication/signin/signin.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/authentication/signin/signin.component.ts ***!
  \**********************************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth-service */ "./src/app/core/services/auth-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigninComponent = /** @class */ (function () {
    function SigninComponent(service) {
        this.service = service;
    }
    SigninComponent.prototype.signIn = function (data) {
        this.service.login(data).subscribe();
    };
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/components/authentication/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/components/authentication/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/components/authentication/signup/signup.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/authentication/signup/signup.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/authentication/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/authentication/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Sign Up</h1>\n  <form (ngSubmit)=\"signUp(registerForm.value)\" #registerForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"name\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"name\" \n         name=\"username\" ngModel #username=\"ngModel\" pattern=\"^[A-Za-z]{4,}$\" required>\n\n         <div [hidden]=\"username.valid || username.pristine\" class=\"alert alert-dark\">\n          Username must contain only letters and be at least 4 symbols \n        </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"text\" class=\"form-control\" id=\"email\" \n      name=\"email\" ngModel email required #email=\"ngModel\">\n      <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-dark\">\n        Please provide valid email\n      </div>\n      \n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password\" \n     name=\"password\" ngModel minlength=\"4\" #password=\"ngModel\" required>\n\n     <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-dark\">\n      Password must be at least 4 symbols\n    </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Confirm password</label>\n      <input type=\"password\" class=\"form-control\" id=\"passwordC\" \n     name=\"Cpassword\" ngModel #cpass=\"ngModel\">\n\n     <div [hidden]=\"password.value===cpass.value || cpass.pristine\" class=\"alert alert-dark\">\n      Password must match\n     </div>\n    </div>\n    <button type=\"submit\" [disabled]=\"!registerForm.valid\" class=\"btn btn-dark\">Sign Up</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/authentication/signup/signup.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/authentication/signup/signup.component.ts ***!
  \**********************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth-service */ "./src/app/core/services/auth-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(service) {
        this.service = service;
    }
    SignupComponent.prototype.signUp = function (data) {
        delete data['Cpassword'];
        this.service.register(data).subscribe();
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/authentication/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/authentication/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/brokers/broker-details/broker-details.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/brokers/broker-details/broker-details.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/components/brokers/broker-details/broker-details.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/brokers/broker-details/broker-details.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"broker && flats\">\n    <div class=\"row space-top\">\n        <div class=\"col-md-12\">\n            <h1>Broker Details</h1>\n        </div>\n    </div>\n    <div class=\"row space-top\">\n        <div class=\"col-md-4\">\n            <div class=\"card text-white bg-primary\">\n                <div class=\"card-body\">\n                    <blockquote class=\"card-blockquote\">\n                        <img src=\"{{broker.imageUrl}}\" />\n                    </blockquote>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4\">\n            <p>Name: {{broker.name}}</p>\n            <p>Age: {{broker.age}}</p>\n            <p>Description: {{broker.description}}</p>\n            <h5>Offers</h5>\n            <a *ngFor=\"let flat of flats; let i = index\" href=\"/flats/details/{{flat._id}}\">Offer {{i+1}} <br /></a>\n        </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/components/brokers/broker-details/broker-details.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/brokers/broker-details/broker-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BrokerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokerDetailsComponent", function() { return BrokerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_broker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/broker-service */ "./src/app/core/services/broker-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_flat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/flat-service */ "./src/app/core/services/flat-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BrokerDetailsComponent = /** @class */ (function () {
    function BrokerDetailsComponent(brokerService, route, flatService) {
        this.brokerService = brokerService;
        this.route = route;
        this.flatService = flatService;
        this.id = this.route.snapshot.params['id'];
    }
    BrokerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.brokerService.getById(this.id).subscribe(function (data) { return _this.broker = data; });
        this.flatService.getAll().subscribe(function (data) { return _this.flats = data.filter(function (x) { return x['broker'] === _this.id; }); });
    };
    BrokerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-broker-details',
            template: __webpack_require__(/*! ./broker-details.component.html */ "./src/app/components/brokers/broker-details/broker-details.component.html"),
            styles: [__webpack_require__(/*! ./broker-details.component.css */ "./src/app/components/brokers/broker-details/broker-details.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services_broker_service__WEBPACK_IMPORTED_MODULE_1__["BrokerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _core_services_flat_service__WEBPACK_IMPORTED_MODULE_3__["FlatService"]])
    ], BrokerDetailsComponent);
    return BrokerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/brokers/broker-routing.ts":
/*!******************************************************!*\
  !*** ./src/app/components/brokers/broker-routing.ts ***!
  \******************************************************/
/*! exports provided: BrokerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokerRoutingModule", function() { return BrokerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _brokers_create_brokers_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brokers-create/brokers-create.component */ "./src/app/components/brokers/brokers-create/brokers-create.component.ts");
/* harmony import */ var _brokers_all_brokers_all_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brokers-all/brokers-all.component */ "./src/app/components/brokers/brokers-all/brokers-all.component.ts");
/* harmony import */ var _broker_details_broker_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./broker-details/broker-details.component */ "./src/app/components/brokers/broker-details/broker-details.component.ts");
/* harmony import */ var _core_guards_admin_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/guards/admin.guard */ "./src/app/core/guards/admin.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'create', canActivate: [_core_guards_admin_guard__WEBPACK_IMPORTED_MODULE_5__["AdminGuard"]], component: _brokers_create_brokers_create_component__WEBPACK_IMPORTED_MODULE_2__["BrokersCreateComponent"] },
    { path: 'all', component: _brokers_all_brokers_all_component__WEBPACK_IMPORTED_MODULE_3__["BrokersAllComponent"] },
    { path: 'details/:id', component: _broker_details_broker_details_component__WEBPACK_IMPORTED_MODULE_4__["BrokerDetailsComponent"] }
];
var BrokerRoutingModule = /** @class */ (function () {
    function BrokerRoutingModule() {
    }
    BrokerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BrokerRoutingModule);
    return BrokerRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/brokers/broker-single/broker-single.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/brokers/broker-single/broker-single.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    border: 3px solid pink;\r\n    border-radius: 5px;\r\n    width: 100%;\r\n}\r\ndiv .col-md-5{\r\n    display: inline-block;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/components/brokers/broker-single/broker-single.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/brokers/broker-single/broker-single.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"primary\" *ngIf=\"data\">\n    <div class=\"card text-white bg-primary\">\n        <div class=\"card-body\">\n            <blockquote class=\"card-blockquote\">\n              <div class=\"col-md-5\">\n                <img src=\"{{data.imageUrl}}\" />\n              </div>\n              <div class=\"col-md-5\">\n                Descripton - {{data.description}}\n                <br />\n                Age - {{data.age}}\n              </div>\n              <p>{{data.name}}</p>\n              <div class=\"pull-right\">\n                    <a routerLink=\"/brokers/details/{{data._id}}\" class=\"btn btn-info\">Details</a>\n              </div>\n            </blockquote>\n        </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/components/brokers/broker-single/broker-single.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/brokers/broker-single/broker-single.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BrokerSingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokerSingleComponent", function() { return BrokerSingleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_models_BrokerModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/models/BrokerModel */ "./src/app/core/models/BrokerModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrokerSingleComponent = /** @class */ (function () {
    function BrokerSingleComponent() {
    }
    BrokerSingleComponent.prototype.ngOnInit = function () {
        console.log('here');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('data'),
        __metadata("design:type", _core_models_BrokerModel__WEBPACK_IMPORTED_MODULE_1__["BrokerModel"])
    ], BrokerSingleComponent.prototype, "data", void 0);
    BrokerSingleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-broker-single',
            template: __webpack_require__(/*! ./broker-single.component.html */ "./src/app/components/brokers/broker-single/broker-single.component.html"),
            styles: [__webpack_require__(/*! ./broker-single.component.css */ "./src/app/components/brokers/broker-single/broker-single.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BrokerSingleComponent);
    return BrokerSingleComponent;
}());



/***/ }),

/***/ "./src/app/components/brokers/broker.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/brokers/broker.module.ts ***!
  \*****************************************************/
/*! exports provided: BrokerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokerModule", function() { return BrokerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_flat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/flat-service */ "./src/app/core/services/flat-service.ts");
/* harmony import */ var _core_services_broker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/broker-service */ "./src/app/core/services/broker-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _brokers_all_brokers_all_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brokers-all/brokers-all.component */ "./src/app/components/brokers/brokers-all/brokers-all.component.ts");
/* harmony import */ var _broker_details_broker_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./broker-details/broker-details.component */ "./src/app/components/brokers/broker-details/broker-details.component.ts");
/* harmony import */ var _broker_single_broker_single_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./broker-single/broker-single.component */ "./src/app/components/brokers/broker-single/broker-single.component.ts");
/* harmony import */ var _brokers_create_brokers_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./brokers-create/brokers-create.component */ "./src/app/components/brokers/brokers-create/brokers-create.component.ts");
/* harmony import */ var _broker_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./broker-routing */ "./src/app/components/brokers/broker-routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var BrokerModule = /** @class */ (function () {
    function BrokerModule() {
    }
    BrokerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _brokers_all_brokers_all_component__WEBPACK_IMPORTED_MODULE_5__["BrokersAllComponent"],
                _broker_details_broker_details_component__WEBPACK_IMPORTED_MODULE_6__["BrokerDetailsComponent"],
                _broker_single_broker_single_component__WEBPACK_IMPORTED_MODULE_7__["BrokerSingleComponent"],
                _brokers_create_brokers_create_component__WEBPACK_IMPORTED_MODULE_8__["BrokersCreateComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _broker_routing__WEBPACK_IMPORTED_MODULE_9__["BrokerRoutingModule"]
            ],
            providers: [
                _core_services_flat_service__WEBPACK_IMPORTED_MODULE_2__["FlatService"],
                _core_services_broker_service__WEBPACK_IMPORTED_MODULE_3__["BrokerService"]
            ]
        })
    ], BrokerModule);
    return BrokerModule;
}());



/***/ }),

/***/ "./src/app/components/brokers/brokers-all/brokers-all.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/brokers/brokers-all/brokers-all.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/brokers/brokers-all/brokers-all.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/brokers/brokers-all/brokers-all.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row space-top\">\n        <div class=\"col-md-12\">\n            <h1>Welcome to united real estates of Burgas</h1>\n            \n        </div>\n    </div>\n        <div class=\"row space-top\">\n            \n           <app-broker-single *ngFor=\"let broker of brokers\" [data]=\"broker\" class=\"col-md-10\" ></app-broker-single>\n          \n        </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/brokers/brokers-all/brokers-all.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/brokers/brokers-all/brokers-all.component.ts ***!
  \*************************************************************************/
/*! exports provided: BrokersAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokersAllComponent", function() { return BrokersAllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_broker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/broker-service */ "./src/app/core/services/broker-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrokersAllComponent = /** @class */ (function () {
    function BrokersAllComponent(service) {
        this.service = service;
    }
    BrokersAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAll().subscribe(function (data) { return _this.brokers = data; });
    };
    BrokersAllComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brokers-all',
            template: __webpack_require__(/*! ./brokers-all.component.html */ "./src/app/components/brokers/brokers-all/brokers-all.component.html"),
            styles: [__webpack_require__(/*! ./brokers-all.component.css */ "./src/app/components/brokers/brokers-all/brokers-all.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services_broker_service__WEBPACK_IMPORTED_MODULE_1__["BrokerService"]])
    ], BrokersAllComponent);
    return BrokersAllComponent;
}());



/***/ }),

/***/ "./src/app/components/brokers/brokers-create/brokers-create.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/brokers/brokers-create/brokers-create.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/brokers/brokers-create/brokers-create.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/brokers/brokers-create/brokers-create.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row space-top\">\n      <div class=\"col-md-12\">\n          <h1>Add New Broker</h1>\n    \n      </div>\n  </div>\n  <form #form=\"ngForm\" (ngSubmit)=\"create(form.value)\">\n      <div class=\"row space-top\">\n          <div class=\"col-md-8\">\n              <div class=\"form-group\">\n                  <label class=\"form-control-label\" >Name</label>\n                  <input class=\"form-control\" ngModel name=\"name\" type=\"text\" required pattern=\"^[A-Z][A-Za-z\\s]{4,}$\" #name=\"ngModel\" />\n                  <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-dark\">\n                    Name must contain only letters and be at least 4 symbols \n                  </div>\n              </div>\n              <div class=\"form-group has-success\">\n                  <label class=\"form-control-label\" >Age</label>\n                  <input class=\"form-control is-valid\"  ngModel name=\"age\" type=\"number\" required #age=\"ngModel\" >\n                  <div [hidden]=\"age.valid || age.pristine\" class=\"alert alert-dark\">\n                    Age is required\n                  </div>\n              </div>\n              <div class=\"form-group has-success\">\n                  <label class=\"form-control-label\" >Image</label>\n                  <input class=\"form-control is-valid\"  ngModel name=\"imageUrl\" type=\"text\" required #imageUrl=\"ngModel\">\n                  <div [hidden]=\"age.valid || age.pristine\" class=\"alert alert-dark\">\n                    Image is required\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                  <label class=\"form-control-label\" for=\"new-description\">Description</label>\n                  <input class=\"form-control\" ngModel name=\"description\" id=\"new-description\" #description=\"ngModel\" required minlength=\"5\" type=\"text\"  >\n                  <div [hidden]=\"description.valid || description.pristine\" class=\"alert alert-dark\">\n                    Description must be at least 5 symbols\n                  </div>\n                </div>\n              <input type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary\" value=\"Create\" />\n          </div>\n      </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/brokers/brokers-create/brokers-create.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/brokers/brokers-create/brokers-create.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BrokersCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokersCreateComponent", function() { return BrokersCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_broker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/broker-service */ "./src/app/core/services/broker-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrokersCreateComponent = /** @class */ (function () {
    function BrokersCreateComponent(service) {
        this.service = service;
    }
    BrokersCreateComponent.prototype.create = function (body) {
        this.service.create(body).subscribe();
    };
    BrokersCreateComponent.prototype.ngOnInit = function () {
    };
    BrokersCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brokers-create',
            template: __webpack_require__(/*! ./brokers-create.component.html */ "./src/app/components/brokers/brokers-create/brokers-create.component.html"),
            styles: [__webpack_require__(/*! ./brokers-create.component.css */ "./src/app/components/brokers/brokers-create/brokers-create.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services_broker_service__WEBPACK_IMPORTED_MODULE_1__["BrokerService"]])
    ], BrokersCreateComponent);
    return BrokersCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/flats/flat-single/flat-single.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/flats/flat-single/flat-single.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    width: 100%;\r\n   \r\n}\r\nblockquote{\r\n    min-height: 350px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/flats/flat-single/flat-single.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/flats/flat-single/flat-single.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"primary\" *ngIf=\"data\">\n  <div class=\"card text-white bg-primary\">\n      <div class=\"card-body\">\n          <blockquote class=\"card-blockquote\">\n              <img src=\"{{data.imageUrl}}\" />\n              <p>{{data.town}}-{{data.address}}</p>\n              \n              <footer>\n                  <cite *ngIf=\"data.category==='rent'\" title=\"Source Title\">Price - {{data.price}} {{data.period}}</cite>\n                  <cite *ngIf=\"data.category==='sale'\" title=\"Source Title\">Price - {{data.price}}</cite>\n              </footer>\n              <div class=\"pull-right\">\n                  <a routerLink=\"/flats/details/{{data._id}}\" class=\"btn btn-info\">Details</a>\n                  <a *ngIf=\"AuthService.isAdmin()\" routerLink=\"/flats/edit/{{data._id}}\" class=\"btn btn-danger\">Edit</a>\n                  <a (click)=\"deleteItem(data._id)\" *ngIf=\"AuthService.isAdmin()\" class=\"btn btn-danger\">Delete</a>\n                \n              </div>\n              \n              <i *ngIf=\"!include && AuthService.isLogged()\" class=\"fa fa-star fa-2x\"  appHighlight aria-hidden=\"true\" (click)=\"addToFav(data._id)\" ></i>\n              <i *ngIf=\"include && AuthService.isLogged()\" class=\"fa fa-star fa-2x text-warning\"  appHighlight aria-hidden=\"true\" (click)=\"addToFav(data._id)\" ></i>\n          </blockquote>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/flats/flat-single/flat-single.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/flats/flat-single/flat-single.component.ts ***!
  \***********************************************************************/
/*! exports provided: FlatSingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatSingleComponent", function() { return FlatSingleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_flat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/flat-service */ "./src/app/core/services/flat-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/auth-service */ "./src/app/core/services/auth-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlatSingleComponent = /** @class */ (function () {
    function FlatSingleComponent(service, router, AuthService) {
        this.service = service;
        this.router = router;
        this.AuthService = AuthService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeArray = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FlatSingleComponent.prototype.deleteItem = function (id) {
        this.service.delete(id).subscribe();
        this.onDelete.emit(id);
    };
    FlatSingleComponent.prototype.addToFav = function (id) {
        var _this = this;
        var username = sessionStorage.getItem('username');
        this.service.getById(id).subscribe(function (data) {
            if (data['users'].includes(username)) {
                var index = data['users'].indexOf(username);
                data['users'].splice(index, 1);
                data['removal'] = true;
                _this.include = false;
                if (_this.router.url.indexOf('mine') !== -1) {
                    _this.onDelete.emit(id);
                }
                _this.changeArray.emit(data);
            }
            else {
                data['removal'] = false;
                data['users'].push(username);
                _this.include = true;
                _this.changeArray.emit(data);
            }
            _this.service.edit(id, data).subscribe();
        });
    };
    FlatSingleComponent.prototype.ngOnInit = function () {
        console.log('ban ban');
        this.include = this.data['users'].includes(sessionStorage.getItem('username'));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('data'),
        __metadata("design:type", Object)
    ], FlatSingleComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FlatSingleComponent.prototype, "onDelete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FlatSingleComponent.prototype, "changeArray", void 0);
    FlatSingleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flat-single',
            template: __webpack_require__(/*! ./flat-single.component.html */ "./src/app/components/flats/flat-single/flat-single.component.html"),
            styles: [__webpack_require__(/*! ./flat-single.component.css */ "./src/app/components/flats/flat-single/flat-single.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services_flat_service__WEBPACK_IMPORTED_MODULE_1__["FlatService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], FlatSingleComponent);
    return FlatSingleComponent;
}());



/***/ }),

/***/ "./src/app/components/flats/flats-all/flats-all.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/flats/flats-all/flats-all.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/flats/flats-all/flats-all.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/flats/flats-all/flats-all.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row space-top\">\n      <div class=\"col-md-12\">\n          <h1>Welcome to united real estates of Burgas</h1>\n          <p>Select flat from the catalog to view details.</p>\n      </div>\n  </div>\n      <div class=\"row space-top\">\n          \n         <app-flat-single *ngFor=\"let flat of flats\" [@list1] [data]=\"flat\"  (onDelete)=\"delete($event)\" (changeArray)=\"changeArray($event)\" class=\"col-md-4\" ></app-flat-single>\n        \n      </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/flats/flats-all/flats-all.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/flats/flats-all/flats-all.component.ts ***!
  \*******************************************************************/
/*! exports provided: FlatsAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatsAllComponent", function() { return FlatsAllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_flat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/flat-service */ "./src/app/core/services/flat-service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlatsAllComponent = /** @class */ (function () {
    function FlatsAllComponent(service, router, route) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.route = route;
        router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.category = route.snapshot.params['category'];
                _this.type = route.snapshot.params['type'];
                if (_this.allFlats) {
                    _this.reArangeFlats();
                }
            }
        });
        this.delete = this.delete.bind(this);
        this.changeArray = this.changeArray.bind(this);
    }
    FlatsAllComponent.prototype.delete = function (id) {
        var itemToDelete = this.flats.filter(function (x) { return x._id === id; })[0];
        var index = this.flats.indexOf(itemToDelete);
        this.flats.splice(index, 1);
        if (this.router.url.indexOf('mine') === -1) {
            var othIndex = this.allFlats.indexOf(itemToDelete);
            this.allFlats.splice(index, 1);
        }
    };
    FlatsAllComponent.prototype.reArangeFlats = function () {
        var _this = this;
        if (this.allFlats) {
            if (this.router.url.indexOf('mine') !== -1) {
                this.flats = this.allFlats.filter(function (x) { return x['users'].includes(sessionStorage.getItem('username')); });
            }
            else {
                this.flats = this.allFlats.filter(function (x) { return x['category'] === _this.category; });
            }
        }
    };
    FlatsAllComponent.prototype.changeArray = function (data) {
        var obj = this.allFlats;
        var el = obj.filter(function (x) { return x._id === data._id; })[0];
        var index = obj.indexOf(el);
        obj[index] = data;
        this.allFlats = obj;
    };
    FlatsAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAll().subscribe(function (data) {
            _this.allFlats = data;
            _this.reArangeFlats();
        });
    };
    FlatsAllComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flats-all',
            template: __webpack_require__(/*! ./flats-all.component.html */ "./src/app/components/flats/flats-all/flats-all.component.html"),
            styles: [__webpack_require__(/*! ./flats-all.component.css */ "./src/app/components/flats/flats-all/flats-all.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('list1', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 0,
                            transform: 'translateX(-100px)'
                        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(600)]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(600, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'translateY(-100px)',
                            opacity: 0
                        }))])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_core_services_flat_service__WEBPACK_IMPORTED_MODULE_1__["FlatService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FlatsAllComponent);
    return FlatsAllComponent;
}());



/***/ }),

/***/ "./src/app/components/flats/flats-create/flats-create.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/flats/flats-create/flats-create.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/flats/flats-create/flats-create.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/flats/flats-create/flats-create.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row space-top\">\n      <div class=\"col-md-12\">\n          <h1>Create New Flat addvertisment</h1>\n      </div>\n  </div>\n  <form #form=\"ngForm\" (ngSubmit)=\"create(form.value)\">\n      <div class=\"row space-top\">\n          \n          <div class=\"col-md-5\">\n            <div class=\"form-group\">\n              <label class=\"form-control-label\" for=\"new-material\">Category</label>\n              <select name=\"\" id=\"\" ngModel name=\"category\" #category=\"ngModel\" required>\n                <option value=\"rent\">rent</option>\n                <option value=\"sale\">sale</option>\n              </select>\n              <div [hidden]=\"category.valid || category.pristine\" class=\"alert alert-dark\">\n                Please select category\n              </div>\n            </div>\n            <div class=\"form-group\">\n                  <label class=\"form-control-label\" >Town</label>\n                  <input class=\"form-control\" ngModel name=\"town\" #town=\"ngModel\" type=\"text\" pattern=\"^[A-Z][A-Za-z\\s]{4,}$\">\n                  <div [hidden]=\"town.valid || town.pristine\" class=\"alert alert-dark\">\n                    Town must contain only letters and be at least 4 symbols \n                  </div>\n            </div>\n            <div class=\"form-group has-success\">\n                  <label class=\"form-control-label\" >Address</label>\n                  <input class=\"form-control is-valid\"  ngModel name=\"address\" type=\"text\" #address=\"ngModel\" required minlength=\"5\">\n                  <div [hidden]=\"address.valid || address.pristine\" class=\"alert alert-dark\">\n                    Address must be at least 5 symbols \n                  </div>\n            </div>\n            <div class=\"form-group has-danger\">\n                  <label class=\"form-control-label\" for=\"new-year\">Price</label>\n                  <input class=\"form-control is-valid\" name=\"price\" ngModel id=\"new-year\" type=\"number\" #price=\"ngModel\" required>\n                  <div [hidden]=\"price.valid || price.pristine\" class=\"alert alert-dark\">\n                    Price is required\n                  </div>\n            </div>\n            <div class=\"form-group\">\n                  <label class=\"form-control-label\" for=\"new-description\">Description</label>\n                  <input class=\"form-control\" ngModel name=\"description\" id=\"new-description\" type=\"text\" #description=\"ngModel\" minlength=\"8\">\n                  <div [hidden]=\"description.valid || description.pristine\" class=\"alert alert-dark\">\n                    Description must be at least 8 symbols\n                  </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                  <label class=\"form-control-label\" for=\"new-price\">Size</label>\n                  <input class=\"form-control\" ngModel name=\"size\" id=\"new-price\" type=\"number\" #size=\"ngModel\" required>\n                  <div [hidden]=\"size.valid || size.pristine\" class=\"alert alert-dark\">\n                    Size is required\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                  <label class=\"form-control-label\" for=\"new-image\">ImageUrl</label>\n                  <input class=\"form-control\" ngModel name=\"imageUrl\" id=\"new-image\" type=\"text\" #imageUrl=\"ngModel\" required>\n                  <div [hidden]=\"imageUrl.valid || imageUrl.pristine\" class=\"alert alert-dark\">\n                    Image is required\n                  </div>\n              </div>\n              <div class=\"form-group\" >\n                    <label class=\"form-control-label\" for=\"new-material\">Broker</label>\n                    <select  name=\"\" id=\"\" ngModel name=\"broker\" #broker=\"ngModel\" required>\n                      <option *ngFor=\"let broker of brokers\" [value]=\"broker._id\">{{broker.name}}</option>\n                    </select>\n                    <div [hidden]=\"broker.valid || broker.pristine\" class=\"alert alert-dark\">\n                        Broker is required\n                    </div>\n              </div>\n              <div class=\"form-group\" *ngIf=\"category.value=='rent'\">\n                  <label class=\"form-control-label\" for=\"new-material\">Period for paying</label>\n                  <select name=\"\" id=\"\" ngModel name=\"period\" #period=\"ngModel\" required>\n                    <option value=\"per month\">per month</option>\n                    <option value=\"per night\">per night</option>\n                    <option value=\"per year\">per year</option>\n                  </select>\n                  <div [hidden]=\"period.valid || period.pristine\" class=\"alert alert-dark\">\n                    Period is required\n                </div>\n              </div>\n              <div *ngIf=\"category.value=='sale'\">\n                   <div class=\"form-group\">\n                      <input type=\"checkbox\" name=\"brick\" ngModel value=\"Bike\"> Brick<br>\n                   </div>\n                   <div class=\"form-group\">\n                    <input type=\"checkbox\" name=\"heating\" ngModel value=\"Bike\"> Local Heating<br>\n                   </div>\n                   <div class=\"form-group\">\n                      <input type=\"checkbox\" name=\"elevator\" ngModel  value=\"Bike\"> Elevator<br>\n                    </div>\n                  </div>\n              <input type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary\" value=\"Create\" />\n          </div>\n      </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/flats/flats-create/flats-create.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/flats/flats-create/flats-create.component.ts ***!
  \*************************************************************************/
/*! exports provided: FlatsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatsCreateComponent", function() { return FlatsCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_flat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/flat-service */ "./src/app/core/services/flat-service.ts");
/* harmony import */ var _core_services_broker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/broker-service */ "./src/app/core/services/broker-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlatsCreateComponent = /** @class */ (function () {
    function FlatsCreateComponent(flatService, brokerService) {
        this.flatService = flatService;
        this.brokerService = brokerService;
    }
    FlatsCreateComponent.prototype.create = function (data) {
        data.users = [];
        this.flatService.create(data).subscribe();
    };
    FlatsCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.brokerService.getAll().subscribe(function (data) { return _this.brokers = data; });
    };
    FlatsCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flats-create',
            template: __webpack_require__(/*! ./flats-create.component.html */ "./src/app/components/flats/flats-create/flats-create.component.html"),
            styles: [__webpack_require__(/*! ./flats-create.component.css */ "./src/app/components/flats/flats-create/flats-create.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services_flat_service__WEBPACK_IMPORTED_MODULE_1__["FlatService"], _core_services_broker_service__WEBPACK_IMPORTED_MODULE_2__["BrokerService"]])
    ], FlatsCreateComponent);
    return FlatsCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/flats/flats-details/flats-details.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/flats/flats-details/flats-details.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/components/flats/flats-details/flats-details.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/flats/flats-details/flats-details.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"flat | async as flat\">\n    <div class=\"row space-top\">\n        <div class=\"col-md-12\">\n            <h1>Flat Details</h1>\n        </div>\n    </div>\n    <div class=\"row space-top\">\n        <div class=\"col-md-4\">\n            <div class=\"card text-white bg-primary\">\n                <div class=\"card-body\">\n                    <blockquote class=\"card-blockquote\">\n                        <img src=\"{{flat.imageUrl}}\" />\n                    </blockquote>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4\">\n            <p>For: {{flat.category}}</p>\n            <p>Address: {{flat.town}} - {{flat.address}}</p>\n            <p>Size: {{flat.size}}</p>\n            <p>Description: {{flat.description}}</p>\n            \n            <p *ngIf=\"flat.category==='sale'\"> Price: {{flat.price}}</p>\n            <p *ngIf=\"flat.category==='rent'\">Price: {{flat.price}} {{flat.period}}</p>\n            <ul *ngIf=\"flat.category==='sale'\">\n              <li>\n                Brick - {{flat.brick | yesorno}}\n              </li>\n              <li>\n                Elevator - {{flat.elevator | yesorno}}\n              </li>\n              <li>\n                 Local Heating - {{flat.heating | yesorno}}\n              </li>\n            </ul>\n            <a routerLink=\"/brokers/details/{{flat.broker}}\">Broker</a>\n        </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/components/flats/flats-details/flats-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/flats/flats-details/flats-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: FlatsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatsDetailsComponent", function() { return FlatsDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_flat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/flat-service */ "./src/app/core/services/flat-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlatsDetailsComponent = /** @class */ (function () {
    function FlatsDetailsComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    FlatsDetailsComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        this.flat = this.service.getById(id);
    };
    FlatsDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flats-details',
            template: __webpack_require__(/*! ./flats-details.component.html */ "./src/app/components/flats/flats-details/flats-details.component.html"),
            styles: [__webpack_require__(/*! ./flats-details.component.css */ "./src/app/components/flats/flats-details/flats-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _core_services_flat_service__WEBPACK_IMPORTED_MODULE_2__["FlatService"]])
    ], FlatsDetailsComponent);
    return FlatsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/flats/flats-edit/flats-edit.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/flats/flats-edit/flats-edit.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/flats/flats-edit/flats-edit.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/flats/flats-edit/flats-edit.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row space-top\">\n      <div class=\"col-md-12\">\n          <h1>Edit Flat addvertisment</h1>\n    \n      </div>\n  </div>\n  <form #form=\"ngForm\"  *ngIf=\"flat.category\" (ngSubmit)=\"edit()\" >\n      <div class=\"row space-top\">\n         \n          <div class=\"col-md-5\">\n            <div class=\"form-group\">\n              <label class=\"form-control-label\" for=\"new-material\">Category</label>\n              <select name=\"\" id=\"\" [(ngModel)]=\"flat.category\" name=\"category\" #category=\"ngModel\" required>\n                <option value=\"rent\">rent</option>\n                <option value=\"sale\">sale</option>\n              </select>\n              <div [hidden]=\"category.valid || category.pristine\" class=\"alert alert-dark\">\n                Please select category\n              </div>\n            </div>\n              <div class=\"form-group\">\n                  <label class=\"form-control-label\" >Town</label>\n                  <input class=\"form-control\" [(ngModel)]=\"flat.town\" name=\"town\" type=\"text\" #town=\"ngModel\" pattern=\"^[A-Z][A-Za-z\\s]{4,}$\">\n                  <div [hidden]=\"town.valid || town.pristine\" class=\"alert alert-dark\">\n                    Town must contain only letters and be at least 4 symbols \n                  </div>\n              </div>\n              <div class=\"form-group has-success\">\n                  <label class=\"form-control-label\" >Address</label>\n                  <input class=\"form-control is-valid\"  [(ngModel)]=\"flat.address\" name=\"address\" type=\"text\"  #address=\"ngModel\" required minlength=\"5\">\n                 <div [hidden]=\"address.valid || address.pristine\" class=\"alert alert-dark\">\n                    Address must be at least 5 symbols \n                  </div>\n              </div>\n              <div class=\"form-group has-danger\">\n                  <label class=\"form-control-label\" for=\"new-year\">Price</label>\n                  <input class=\"form-control is-valid\" name=\"price\" [(ngModel)]=\"flat.price\" id=\"new-year\" type=\"number\" #price=\"ngModel\" required>\n                  <div [hidden]=\"price.valid || price.pristine\" class=\"alert alert-dark\">\n                    Price is required\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                  <label class=\"form-control-label\" for=\"new-description\">Description</label>\n                  <input class=\"form-control\" [(ngModel)]=\"flat.description\" name=\"description\" id=\"new-description\" type=\"text\" #description=\"ngModel\" minlength=\"8\">\n                  <div [hidden]=\"description.valid || description.pristine\" class=\"alert alert-dark\">\n                    Description must be at least 8 symbols\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                  <label class=\"form-control-label\" for=\"new-price\">Size</label>\n                  <input class=\"form-control\" [(ngModel)]=\"flat.size\" name=\"size\" id=\"new-price\" type=\"number\" #size=\"ngModel\" required >\n                  <div [hidden]=\"size.valid || size.pristine\" class=\"alert alert-dark\">\n                    Size is required\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                  <label class=\"form-control-label\" for=\"new-image\">ImageUrl</label>\n                  <input class=\"form-control\" [(ngModel)]=\"flat.imageUrl\" name=\"imageUrl\" id=\"new-image\" type=\"text\" #imageUrl=\"ngModel\" required>\n                  <div [hidden]=\"imageUrl.valid || imageUrl.pristine\" class=\"alert alert-dark\">\n                    Image is required\n                  </div>\n              </div>\n              <div class=\"form-group\" >\n                    <label class=\"form-control-label\" for=\"new-material\">Broker</label>\n                    <select  name=\"\" id=\"\" [(ngModel)]=\"flat.broker\" name=\"broker\" #broker=\"ngModel\" required>\n                      <option *ngFor=\"let broker of brokers\" [value]=\"broker._id\">{{broker.name}}</option>\n                    </select>\n                    <div [hidden]=\"broker.valid || broker.pristine\" class=\"alert alert-dark\">\n                        Broker is required\n                    </div>\n              </div>\n              <div class=\"form-group\" *ngIf=\"category.value=='rent'\">\n                  <label class=\"form-control-label\" for=\"new-material\">Period for paying</label>\n                  <select name=\"\" id=\"\"  [(ngModel)]=\"flat.period\" name=\"period\" #period=\"ngModel\" required>\n                    <option value=\"per month\">per month</option>\n                    <option value=\"per night\">per night</option>\n                    <option value=\"per year\">per year</option>\n                  </select>\n                  <div [hidden]=\"period.valid || period.pristine\" class=\"alert alert-dark\">\n                    Period is required\n                </div>\n                </div>\n              <div *ngIf=\"category.value=='sale'\">\n                   <div class=\"form-group\">\n                      <input type=\"checkbox\" name=\"brick\" [(ngModel)]=\"flat.brick\" > Brick<br>\n                   </div>\n                   <div class=\"form-group\">\n                    <input type=\"checkbox\" name=\"heating\" [(ngModel)]=\"flat.heating\" > Local Heating<br>\n                   </div>\n                   <div class=\"form-group\">\n                      <input type=\"checkbox\" name=\"elevator\" [(ngModel)]=\"flat.elevator\"  > Elevator<br>\n                    </div>\n                  </div>\n              <input type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary\" value=\"Edit\" />\n          </div>\n      </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/flats/flats-edit/flats-edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/flats/flats-edit/flats-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: FlatsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatsEditComponent", function() { return FlatsEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_flat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/flat-service */ "./src/app/core/services/flat-service.ts");
/* harmony import */ var _core_services_broker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/broker-service */ "./src/app/core/services/broker-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlatsEditComponent = /** @class */ (function () {
    function FlatsEditComponent(route, flatService, brokerService) {
        this.route = route;
        this.flatService = flatService;
        this.brokerService = brokerService;
        this.id = this.route.snapshot.params['id'];
    }
    FlatsEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flatService.getById(this.id).subscribe(function (data) { return _this.flat = data; });
        this.brokerService.getAll().subscribe(function (data) { return _this.brokers = data; });
    };
    FlatsEditComponent.prototype.edit = function () {
        this.flatService.edit(this.id, this.flat).subscribe();
    };
    FlatsEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flats-edit',
            template: __webpack_require__(/*! ./flats-edit.component.html */ "./src/app/components/flats/flats-edit/flats-edit.component.html"),
            styles: [__webpack_require__(/*! ./flats-edit.component.css */ "./src/app/components/flats/flats-edit/flats-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _core_services_flat_service__WEBPACK_IMPORTED_MODULE_2__["FlatService"], _core_services_broker_service__WEBPACK_IMPORTED_MODULE_3__["BrokerService"]])
    ], FlatsEditComponent);
    return FlatsEditComponent;
}());



/***/ }),

/***/ "./src/app/components/flats/flats.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/flats/flats.module.ts ***!
  \**************************************************/
/*! exports provided: FlatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatModule", function() { return FlatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _flats_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flats.routing */ "./src/app/components/flats/flats.routing.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _flats_all_flats_all_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flats-all/flats-all.component */ "./src/app/components/flats/flats-all/flats-all.component.ts");
/* harmony import */ var _flats_edit_flats_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flats-edit/flats-edit.component */ "./src/app/components/flats/flats-edit/flats-edit.component.ts");
/* harmony import */ var _flats_details_flats_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./flats-details/flats-details.component */ "./src/app/components/flats/flats-details/flats-details.component.ts");
/* harmony import */ var _flats_create_flats_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./flats-create/flats-create.component */ "./src/app/components/flats/flats-create/flats-create.component.ts");
/* harmony import */ var _flat_single_flat_single_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./flat-single/flat-single.component */ "./src/app/components/flats/flat-single/flat-single.component.ts");
/* harmony import */ var _core_services_flat_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/services/flat-service */ "./src/app/core/services/flat-service.ts");
/* harmony import */ var _core_services_broker_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/services/broker-service */ "./src/app/core/services/broker-service.ts");
/* harmony import */ var _core_pipes_yesorno_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/pipes/yesorno.pipe */ "./src/app/core/pipes/yesorno.pipe.ts");
/* harmony import */ var _core_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/directives/highlight.directive */ "./src/app/core/directives/highlight.directive.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/services/auth-service */ "./src/app/core/services/auth-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var FlatModule = /** @class */ (function () {
    function FlatModule() {
    }
    FlatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _flats_all_flats_all_component__WEBPACK_IMPORTED_MODULE_5__["FlatsAllComponent"],
                _flats_details_flats_details_component__WEBPACK_IMPORTED_MODULE_7__["FlatsDetailsComponent"],
                _flats_edit_flats_edit_component__WEBPACK_IMPORTED_MODULE_6__["FlatsEditComponent"],
                _flat_single_flat_single_component__WEBPACK_IMPORTED_MODULE_9__["FlatSingleComponent"],
                _flats_create_flats_create_component__WEBPACK_IMPORTED_MODULE_8__["FlatsCreateComponent"],
                _core_pipes_yesorno_pipe__WEBPACK_IMPORTED_MODULE_12__["YesornoPipe"],
                _core_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_13__["HighlightDirective"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_2__["AngularFontAwesomeModule"],
                _flats_routing__WEBPACK_IMPORTED_MODULE_3__["FlatsRoutingModule"],
            ],
            providers: [
                _core_services_flat_service__WEBPACK_IMPORTED_MODULE_10__["FlatService"],
                _core_services_broker_service__WEBPACK_IMPORTED_MODULE_11__["BrokerService"],
                _core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"]
            ]
        })
    ], FlatModule);
    return FlatModule;
}());



/***/ }),

/***/ "./src/app/components/flats/flats.routing.ts":
/*!***************************************************!*\
  !*** ./src/app/components/flats/flats.routing.ts ***!
  \***************************************************/
/*! exports provided: FlatsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatsRoutingModule", function() { return FlatsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _flats_details_flats_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flats-details/flats-details.component */ "./src/app/components/flats/flats-details/flats-details.component.ts");
/* harmony import */ var _flats_edit_flats_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flats-edit/flats-edit.component */ "./src/app/components/flats/flats-edit/flats-edit.component.ts");
/* harmony import */ var _flats_all_flats_all_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flats-all/flats-all.component */ "./src/app/components/flats/flats-all/flats-all.component.ts");
/* harmony import */ var _flats_create_flats_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flats-create/flats-create.component */ "./src/app/components/flats/flats-create/flats-create.component.ts");
/* harmony import */ var _core_guards_user_guard_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/guards/user-guard.guard */ "./src/app/core/guards/user-guard.guard.ts");
/* harmony import */ var _core_guards_admin_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/guards/admin.guard */ "./src/app/core/guards/admin.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'details/:id', component: _flats_details_flats_details_component__WEBPACK_IMPORTED_MODULE_2__["FlatsDetailsComponent"] },
    { path: 'edit/:id', canActivate: [_core_guards_admin_guard__WEBPACK_IMPORTED_MODULE_7__["AdminGuard"]], component: _flats_edit_flats_edit_component__WEBPACK_IMPORTED_MODULE_3__["FlatsEditComponent"] },
    { path: ':category/:type', canActivate: [_core_guards_user_guard_guard__WEBPACK_IMPORTED_MODULE_6__["UserGuardGuard"]], component: _flats_all_flats_all_component__WEBPACK_IMPORTED_MODULE_4__["FlatsAllComponent"] },
    { path: 'create', canActivate: [_core_guards_admin_guard__WEBPACK_IMPORTED_MODULE_7__["AdminGuard"]], component: _flats_create_flats_create_component__WEBPACK_IMPORTED_MODULE_5__["FlatsCreateComponent"] },
];
var FlatsRoutingModule = /** @class */ (function () {
    function FlatsRoutingModule() {
    }
    FlatsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FlatsRoutingModule);
    return FlatsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{\r\n    background-color: rgba(173, 76, 157, 0.979);\r\n    flex-shrink: 0;\r\n    text-align: center;\r\n}\r\nimg{\r\n    \r\n    width: 70px;\r\n}"

/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"col-md-12\">\n  <img src=\"https://angular.io/assets/images/logos/angular/angular.svg\"/>\n  \n</footer>\n"

/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/navigation/navigation.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/shared/navigation/navigation.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:hover {\r\n    background-color: pink;\r\n}\r\nspan {\r\n    float: right;\r\n}"

/***/ }),

/***/ "./src/app/components/shared/navigation/navigation.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/shared/navigation/navigation.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" href=\"#\">Flats</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"home\">Home <span class=\"sr-only\"></span></a>\n      </li>\n      <li class=\"nav-item\" >\n          <a class=\"nav-link\"  routerLink=\"/flats/sale/all\">For sale <span class=\"sr-only\"></span></a>\n      </li>\n      <li class=\"nav-item\" >\n          <a class=\"nav-link\" routerLink=\"/flats/rent/all\">For rent <span class=\"sr-only\"></span></a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"service.isLogged()\">\n          <a class=\"nav-link\" routerLink=\"/flats/all/mine\">Favourites <span class=\"sr-only\"></span></a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"service.isAdmin()\">\n          <a class=\"nav-link\" routerLink=\"/users\">All Users</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"service.isAdmin()\">\n          <a class=\"nav-link\" routerLink=\"/flats/create\">Create Flat</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"service.isAdmin()\">\n          <a class=\"nav-link\" routerLink=\"/brokers/create\">Add Broker</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\"  routerLink=\"/brokers/all\">All Brokers</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!service.isLogged()\">\n        <a class=\"nav-link\" routerLink=\"/signin\">Login</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!service.isLogged()\">\n        <a class=\"nav-link\" routerLink=\"/signup\">Register</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" *ngIf=\"service.isLogged()\" (click)=\"logout()\">Logout</a>\n      </li>\n      <span class=\"nav-item\" *ngIf=\"service.isLogged()\">\n        <i class=\"nav-link\">Hi {{service.getUsername()}}</i>\n      </span>\n    </ul>\n    \n   \n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/shared/navigation/navigation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/shared/navigation/navigation.component.ts ***!
  \**********************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth-service */ "./src/app/core/services/auth-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(service) {
        this.service = service;
    }
    NavigationComponent.prototype.logout = function () {
        this.service.logout().subscribe();
    };
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/shared/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/shared/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/core/directives/highlight.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/core/directives/highlight.directive.ts ***!
  \********************************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
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

var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(el) {
        this.el = el;
    }
    HighlightDirective.prototype.highlight = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    HighlightDirective.prototype.onMouseEnter = function () {
        this.highlight('yellow');
    };
    HighlightDirective.prototype.onMouseLeave = function () {
        this.highlight(null);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "onMouseLeave", null);
    HighlightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHighlight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/core/guards/admin.guard.ts":
/*!********************************************!*\
  !*** ./src/app/core/guards/admin.guard.ts ***!
  \********************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth-service */ "./src/app/core/services/auth-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isAdmin()) {
            return true;
        }
        this.router.navigate(['/signin']);
        return false;
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/core/guards/user-guard.guard.ts":
/*!*************************************************!*\
  !*** ./src/app/core/guards/user-guard.guard.ts ***!
  \*************************************************/
/*! exports provided: UserGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuardGuard", function() { return UserGuardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth-service */ "./src/app/core/services/auth-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserGuardGuard = /** @class */ (function () {
    function UserGuardGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    UserGuardGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isLogged()) {
            return true;
        }
        else if (state.url.indexOf('mine') === -1) {
            return true;
        }
        this.router.navigate(['/signin']);
        return false;
    };
    UserGuardGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserGuardGuard);
    return UserGuardGuard;
}());



/***/ }),

/***/ "./src/app/core/interceptors/error.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/error.interceptor.ts ***!
  \********************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(router, toastr) {
        this.router = router;
        this.toastr = toastr;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            _this.toastr.error(err.error.description, 'Warning!');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err.error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/core/interceptors/jwt.interceptor.ts":
/*!******************************************************!*\
  !*** ./src/app/core/interceptors/jwt.interceptor.ts ***!
  \******************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var appKey = 'kid_rk6IN3LUm';
var appSecret = 'e1d95d34d9294f1085042343ebda7dc9';
var masterSecret = '357a6a9d511b49509aa578acf39e1cb7';
var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(router, toastr) {
        this.router = router;
        this.toastr = toastr;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        if ((request.url.endsWith('login') || request.url.endsWith(appKey)) && request.method === "POST") {
            request = request.clone({
                setHeaders: {
                    'Authorization': "Basic " + btoa(appKey + ':' + appSecret)
                }
            });
        }
        else if (((request.url.indexOf('user') !== -1 && request.method === 'DELETE') || (this.router.url.indexOf('all') !== -1 || this.router.url.indexOf('details') !== -1)) && request.url.indexOf('_logout') === -1) {
            request = request.clone({
                setHeaders: {
                    'Authorization': "Basic " + btoa(appKey + ':' + masterSecret)
                }
            });
        }
        else if (sessionStorage.getItem('username')) {
            request = request.clone({
                setHeaders: {
                    'Authorization': "Kinvey " + sessionStorage.getItem('authtoken')
                }
            });
        }
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (response) {
            if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"] && response['body']['_kmd']) {
                if (response['body']['_kmd']['authtoken']) {
                    sessionStorage.setItem('authtoken', response['body']['_kmd']['authtoken']);
                    sessionStorage.setItem('username', response['body']['username']);
                    sessionStorage.setItem('userId', response['body']['_id']);
                }
            }
        }));
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/core/interceptors/success.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/success.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: SuccessInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessInterceptor", function() { return SuccessInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var appKey = 'kid_rk6IN3LUm';
var appSecret = 'e1d95d34d9294f1085042343ebda7dc9';
var SuccessInterceptor = /** @class */ (function () {
    function SuccessInterceptor(toastr, router) {
        this.toastr = toastr;
        this.router = router;
    }
    SuccessInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] && request.url.endsWith('login')) {
                _this.toastr.success('Login Successful!');
                _this.router.navigate(['/home']);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] && request.url.endsWith(appKey) && request.method === "POST") {
                _this.toastr.success('Register Successful!');
                _this.router.navigate(['/home']);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] && request.url.endsWith('flats') && request.method === "POST") {
                _this.toastr.success('Flat created successfully!');
                _this.router.navigate(['/home']);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] && request.method === 'DELETE' && request.url.indexOf('user') === -1) {
                _this.toastr.success('item deleted successfully');
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] && request.method === "PUT" && request.url.indexOf('flats') !== -1 && _this.router.url.indexOf('all') === -1) {
                _this.toastr.success('Add edited successfully');
                _this.router.navigate(['/home']);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] && request.method === "PUT" && request.url.indexOf('flats') !== -1 && !request.body['removal']) {
                _this.toastr.success('Flat Added to favourites');
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] && request.method === "PUT" && request.url.indexOf('flats') !== -1 && request.body['removal']) {
                _this.toastr.success('Flat Removed from favourites');
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] && request.url.endsWith('brokers') && request.method === "POST") {
                _this.toastr.success('Broker created successfully!');
                _this.router.navigate(['/brokers/all']);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] && request.method === 'DELETE' && request.url.indexOf('user') !== -1) {
                _this.toastr.success('User baned successfully!');
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] && request.url.indexOf('_logout') !== -1) {
                sessionStorage.clear();
                _this.toastr.success('Logout successful!');
                _this.router.navigate(['/signin']);
            }
        }));
    };
    SuccessInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SuccessInterceptor);
    return SuccessInterceptor;
}());



/***/ }),

/***/ "./src/app/core/models/BrokerModel.ts":
/*!********************************************!*\
  !*** ./src/app/core/models/BrokerModel.ts ***!
  \********************************************/
/*! exports provided: BrokerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokerModel", function() { return BrokerModel; });
var BrokerModel = /** @class */ (function () {
    function BrokerModel(name, age, description, imageUrl) {
        this.name = name;
        this.age = age;
        this.description = description;
        this.imageUrl = imageUrl;
    }
    return BrokerModel;
}());



/***/ }),

/***/ "./src/app/core/pipes/yesorno.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/core/pipes/yesorno.pipe.ts ***!
  \********************************************/
/*! exports provided: YesornoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YesornoPipe", function() { return YesornoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var YesornoPipe = /** @class */ (function () {
    function YesornoPipe() {
    }
    YesornoPipe.prototype.transform = function (value, args) {
        if (value) {
            return 'yes';
        }
        else {
            return 'no';
        }
    };
    YesornoPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'yesorno'
        })
    ], YesornoPipe);
    return YesornoPipe;
}());



/***/ }),

/***/ "./src/app/core/services/auth-service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth-service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var appKey = "kid_rk6IN3LUm";
var appSecret = "e1d95d34d9294f1085042343ebda7dc9";
var kinveyBaseUrl = "https://baas.kinvey.com/";
var loginUrl = kinveyBaseUrl + 'user' + "/" + appKey + '/login';
var logoutUrl = kinveyBaseUrl + 'user' + "/" + appKey + '/_logout';
var registerUrl = kinveyBaseUrl + 'user' + "/" + appKey;
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.login = function (body) {
        return this.http.post(loginUrl, body);
    };
    AuthService.prototype.register = function (body) {
        return this.http.post(registerUrl, body);
    };
    AuthService.prototype.logout = function () {
        return this.http.post(logoutUrl, '');
    };
    AuthService.prototype.isLogged = function () {
        if (sessionStorage.getItem('username')) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.isAdmin = function () {
        if (sessionStorage.getItem('username') === "admin") {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.getUsername = function () {
        return sessionStorage.getItem('username');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/broker-service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/broker-service.ts ***!
  \*************************************************/
/*! exports provided: BrokerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokerService", function() { return BrokerService; });
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


var appKey = "kid_rk6IN3LUm";
var appSecret = "e1d95d34d9294f1085042343ebda7dc9";
var kinveyBaseUrl = "https://baas.kinvey.com/";
var getAllUrl = kinveyBaseUrl + 'appdata' + "/" + appKey + '/brokers';
var BrokerService = /** @class */ (function () {
    function BrokerService(http) {
        this.http = http;
    }
    BrokerService.prototype.getAll = function () {
        return this.http.get(getAllUrl);
    };
    BrokerService.prototype.create = function (body) {
        return this.http.post(getAllUrl, body);
    };
    BrokerService.prototype.getById = function (id) {
        return this.http.get(getAllUrl + '/' + id);
    };
    BrokerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BrokerService);
    return BrokerService;
}());



/***/ }),

/***/ "./src/app/core/services/flat-service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/flat-service.ts ***!
  \***********************************************/
/*! exports provided: FlatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatService", function() { return FlatService; });
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


var appKey = "kid_rk6IN3LUm";
var appSecret = "e1d95d34d9294f1085042343ebda7dc9";
var kinveyBaseUrl = "https://baas.kinvey.com/";
var getAllUrl = kinveyBaseUrl + 'appdata' + "/" + appKey + '/flats';
var FlatService = /** @class */ (function () {
    function FlatService(http) {
        this.http = http;
    }
    FlatService.prototype.getAll = function () {
        return this.http.get(getAllUrl);
    };
    FlatService.prototype.create = function (body) {
        return this.http.post(getAllUrl, body);
    };
    FlatService.prototype.delete = function (id) {
        return this.http.delete(getAllUrl + '/' + id);
    };
    FlatService.prototype.getById = function (id) {
        return this.http.get(getAllUrl + '/' + id);
    };
    FlatService.prototype.edit = function (id, body) {
        return this.http.put(getAllUrl + '/' + id, body);
    };
    FlatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FlatService);
    return FlatService;
}());



/***/ }),

/***/ "./src/app/core/services/user-service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/user-service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
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


var appKey = "kid_rk6IN3LUm";
var appSecret = "e1d95d34d9294f1085042343ebda7dc9";
var kinveyBaseUrl = "https://baas.kinvey.com/";
var getAllUrl = kinveyBaseUrl + 'user' + "/" + appKey;
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(getAllUrl);
    };
    UserService.prototype.remove = function (id) {
        return this.http.delete(getAllUrl + '/' + id + '?hard=true');
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\AngularJS Fundamentals\Project\outlet\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map