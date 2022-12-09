(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! E:\workspace\dev\stockmarket\ui\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2yyg":
    /*!**************************************************************************!*\
      !*** ./src/app/views/login/forgot-password/forgot-password.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ForgotPasswordComponent */

    /***/
    function yyg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return ForgotPasswordComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "BpxE");
      /* harmony import */


      var _forgot_password_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forgot-password.component.scss */
      "KefB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _model_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../model/user */
      "kl1M");
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../service/auth.service */
      "6uu6");

      var ForgotPasswordComponent = /*#__PURE__*/function () {
        function ForgotPasswordComponent(authService, modalService, router) {
          _classCallCheck(this, ForgotPasswordComponent);

          this.authService = authService;
          this.modalService = modalService;
          this.router = router;
          this.user = new _model_user__WEBPACK_IMPORTED_MODULE_6__["User"]();
        }

        _createClass(ForgotPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getmsg = "";
          }
        }, {
          key: "openModal",
          value: function openModal(template) {
            this.modalRef = this.modalService.show(template);
          }
        }, {
          key: "gotoconfirm",
          value: function gotoconfirm() {
            var _this = this;

            this.authService.forgot(this.user.email).subscribe(function (response) {
              _this.getmsg = "Reset Link send to your" + _this.user.email;

              _this.router.navigate(['/login']);
            }, function (error) {
              _this.getmsg = "Mail is not send your" + _this.user.email;
            });
          }
        }, {
          key: "gotoback",
          value: function gotoback() {
            this.router.navigate(["login"]);
          }
        }]);

        return ForgotPasswordComponent;
      }();

      ForgotPasswordComponent.ctorParameters = function () {
        return [{
          type: _service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ForgotPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_password_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ForgotPasswordComponent);
      /***/
    },

    /***/
    "4XPS":
    /*!******************************************************!*\
      !*** ./src/app/views/register/register.component.ts ***!
      \******************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function XPS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.component.html */
      "bVw4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _model_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../model/user */
      "kl1M");
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../service/auth.service */
      "6uu6");

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(authservice, router) {
          _classCallCheck(this, RegisterComponent);

          this.authservice = authservice;
          this.router = router;
          this.user = new _model_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.selectedValue = "EnterRole";
            this.roleList = _model_user__WEBPACK_IMPORTED_MODULE_4__["User"].getRole();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            var _this$user = this.user,
                username = _this$user.username,
                email = _this$user.email,
                password = _this$user.password,
                role = _this$user.role;
            this.authservice.register(username, email, password, role).subscribe(function (data) {
              console.log(data);
              _this2.isSuccessful = true;

              _this2.router.navigate(['/login']);
            }, function (err) {
              console.log(err.response);
              _this2.signupFailed = true;
            });
          }
        }, {
          key: "getRole",
          value: function getRole(selectedValue) {
            this.rolevalue = Object(_model_user__WEBPACK_IMPORTED_MODULE_4__["getRoleValueByName"])(selectedValue);
            this.user.role = [];
            this.user.role = [].concat(_toConsumableArray(this.user.role), [this.rolevalue]);
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ctorParameters = function () {
        return [{
          type: _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], RegisterComponent);
      /***/
    },

    /***/
    "6uu6":
    /*!*****************************************!*\
      !*** ./src/app/service/auth.service.ts ***!
      \*****************************************/

    /*! exports provided: AuthService */

    /***/
    function uu6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var AUTH_API = 'http://localhost:8080/api/auth/';
      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Content-Type': 'application/json'
        })
      };

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http) {
          _classCallCheck(this, AuthService);

          this.http = http;
        }

        _createClass(AuthService, [{
          key: "register",
          value: function register(username, email, password, role) {
            return this.http.post(AUTH_API + 'signup', {
              username: username,
              email: email,
              password: password,
              role: role
            }, httpOptions);
          }
        }, {
          key: "login",
          value: function login(username, password) {
            return this.http.post(AUTH_API + 'login', {
              username: username,
              password: password
            }, httpOptions);
          }
        }, {
          key: "forgot",
          value: function forgot(email) {
            return this.http.post(AUTH_API + 'forgotpassword', {
              email: email
            }, httpOptions);
          }
        }, {
          key: "reset",
          value: function reset(reset_token, password) {
            return this.http.put(AUTH_API + 'resetpassword?token=' + reset_token, {
              password: password
            }, httpOptions);
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('token');
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], AuthService);
      /***/
    },

    /***/
    "8gg5":
    /*!**********************************************!*\
      !*** ./src/app/views/error/404.component.ts ***!
      \**********************************************/

    /*! exports provided: P404Component */

    /***/
    function gg5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P404Component", function () {
        return P404Component;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./404.component.html */
      "nAJl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var P404Component = /*#__PURE__*/_createClass(function P404Component() {
        _classCallCheck(this, P404Component);
      });

      P404Component.ctorParameters = function () {
        return [];
      };

      P404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], P404Component);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false
      };
      /***/
    },

    /***/
    "BpxE":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/forgot-password/forgot-password.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BpxE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n     <div class=\"container\" style=\"align-content: center\">\n        <br><br><br><br><br>\n        <br><br><br><br><br><br><br><br><br><br>\n        <div class=\"row\">\n           <div class=\"col-md-6 mx-auto\">\n              <div class=\"card-group\">\n                 <div class=\"card p-4\">\n                    <div class=\"card-body\">\n                       <form #loginform=\"ngForm\" (ngSubmit)=\"gotoconfirm()\">\n                       <h1>Forgot Password</h1>\n                       <p class=\"text-muted\">Forgot Password Account</p>\n                       <div class=\"controls\">\n                          <div class=\"input-prepend input-group\">\n                             <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"><i class=\"icon-envelope\"></i></span>\n                             </div>\n                             <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" name=\"email\"\n                             [(ngModel)]=\"user.email\" required ngModel #email=\"ngModel\" required\n                             pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\n                          </div>\n                          <div *ngIf=\"email.errors && (email.invalid && email.touched)\">\n                             <span class=\"text-danger\" *ngIf=\"email.required\">E-mail id required</span>\n                             <span class=\"text-danger\" *ngIf=\"email.errors?.pattern\"> Enter valid email id</span>\n                          </div>\n                       </div>\n                       <br>\n                       <div class=\"row\">\n                          <div class=\"col-6\">\n                             <button type=\"submit\" class=\"btn btn-primary px-4\" [disabled]=\"!loginform.valid\"\n                             (click)=\"openModal(template)\">Send Mail</button>\n                          </div>\n                          <div class=\"col-1 text-right\">\n                             <button type=\"button\" class=\"btn btn-primary px-4\" (click)=\"gotoback()\">Back</button>\n                          </div>\n                       </div>\n                       </form>\n                    </div>\n                 </div>\n                \n              </div>\n           </div>\n        </div>\n     </div>\n  </main>\n</div>\n<ng-template #template>\n  <div class=\"modal-body text-center \">\n     <h4>{{this.getmsg}} </h4>\n  </div>\n</ng-template>";
      /***/
    },

    /***/
    "DodC":
    /*!****************************************************!*\
      !*** ./src/app/containers/default-layout/index.ts ***!
      \****************************************************/

    /*! exports provided: DefaultLayoutComponent */

    /***/
    function DodC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _default_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./default-layout.component */
      "JPqG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
        return _default_layout_component__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"];
      });
      /***/

    },

    /***/
    "G/4p":
    /*!*************************************!*\
      !*** ./src/app/containers/index.ts ***!
      \*************************************/

    /*! exports provided: DefaultLayoutComponent */

    /***/
    function G4p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _default_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./default-layout */
      "DodC");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
        return _default_layout__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"];
      });
      /***/

    },

    /***/
    "GRPU":
    /*!*************************************************!*\
      !*** ./src/app/service/tokenstorage.service.ts ***!
      \*************************************************/

    /*! exports provided: TokenStorageService */

    /***/
    function GRPU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenStorageService", function () {
        return TokenStorageService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var TOKEN_KEY = 'auth-token';
      var USER_KEY = 'auth-user';

      var TokenStorageService = /*#__PURE__*/function () {
        function TokenStorageService() {
          _classCallCheck(this, TokenStorageService);
        }

        _createClass(TokenStorageService, [{
          key: "logout",
          value: function logout() {
            localStorage.clear();
          }
        }, {
          key: "saveToken",
          value: function saveToken(token) {
            localStorage.removeItem(TOKEN_KEY);
            localStorage.setItem(TOKEN_KEY, token);
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return localStorage.getItem(TOKEN_KEY);
          }
        }, {
          key: "saveUser",
          value: function saveUser(user) {
            localStorage.removeItem(USER_KEY);
            localStorage.setItem(USER_KEY, JSON.stringify(user));
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var user = localStorage.getItem(USER_KEY);

            if (user) {
              return JSON.parse(user);
            }

            return {};
          }
        }]);

        return TokenStorageService;
      }();

      TokenStorageService.ctorParameters = function () {
        return [];
      };

      TokenStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TokenStorageService);
      /***/
    },

    /***/
    "JPqG":
    /*!***********************************************************************!*\
      !*** ./src/app/containers/default-layout/default-layout.component.ts ***!
      \***********************************************************************/

    /*! exports provided: DefaultLayoutComponent */

    /***/
    function JPqG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
        return DefaultLayoutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./default-layout.component.html */
      "lm8q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../_nav */
      "c2Qq");

      var DefaultLayoutComponent = /*#__PURE__*/function () {
        function DefaultLayoutComponent() {
          _classCallCheck(this, DefaultLayoutComponent);

          this.sidebarMinimized = false;
          this.navItems = _nav__WEBPACK_IMPORTED_MODULE_3__["navItems"];
        }

        _createClass(DefaultLayoutComponent, [{
          key: "toggleMinimize",
          value: function toggleMinimize(e) {
            this.sidebarMinimized = e;
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.clear();
            localStorage.setItem('isLoggedIn', 'false');
          }
        }]);

        return DefaultLayoutComponent;
      }();

      DefaultLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], DefaultLayoutComponent);
      /***/
    },

    /***/
    "KefB":
    /*!****************************************************************************!*\
      !*** ./src/app/views/login/forgot-password/forgot-password.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function KefB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "Lrxh":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/500.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function Lrxh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\r\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\r\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n          </div>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-append\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "QB/w":
    /*!************************************************!*\
      !*** ./src/app/views/login/login.component.ts ***!
      \************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function QBW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "nSew");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _model_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../model/user */
      "kl1M");
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../service/auth.service */
      "6uu6");
      /* harmony import */


      var _service_tokenstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../service/tokenstorage.service */
      "GRPU");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router, authservice, tokenService) {
          _classCallCheck(this, LoginComponent);

          this.router = router;
          this.authservice = authservice;
          this.tokenService = tokenService;
          this.user = new _model_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "login",
          value: function login() {
            var _this3 = this;

            this.authservice.login(this.user.username, this.user.password).subscribe(function (data) {
              console.log(data);

              if (data != null) {
                localStorage.setItem('isLoggedIn', 'true');

                _this3.tokenService.saveToken(data.accessToken);

                _this3.tokenService.saveUser(data);

                _this3.roles = _this3.tokenService.getUser().roles;
                var role = _this3.roles[0];
                localStorage.setItem('role', role);

                _this3.router.navigate(['/dashboard']);
              }
            }, function (err) {
              localStorage.setItem('isLoggedIn', 'false');
            });
          }
        }, {
          key: "goToRegister",
          value: function goToRegister() {
            this.router.navigate(['/register']);
          }
        }, {
          key: "goToForgotPassword",
          value: function goToForgotPassword() {
            this.router.navigate(["/forgot"]);
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _service_tokenstorage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _service_tokenstorage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"]])], LoginComponent);
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @coreui/icons-angular */
      "rVqu");
      /* harmony import */


      var _coreui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @coreui/icons */
      "t17N");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, iconSet) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.iconSet = iconSet; // iconSet singleton

          iconSet.icons = Object.assign({}, _coreui_icons__WEBPACK_IMPORTED_MODULE_4__["freeSet"]);
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.router.events.subscribe(function (evt) {
              if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
              }

              window.scrollTo(0, 0);
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line
        selector: 'body',
        template: '<router-outlet></router-outlet>',
        providers: [_coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]])], AppComponent);
      /***/
    },

    /***/
    "VgmY":
    /*!**********************************************************************!*\
      !*** ./src/app/views/login/resetpassword/resetpassword.component.ts ***!
      \**********************************************************************/

    /*! exports provided: ResetpasswordComponent */

    /***/
    function VgmY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetpasswordComponent", function () {
        return ResetpasswordComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_resetpassword_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./resetpassword.component.html */
      "kKuK");
      /* harmony import */


      var _resetpassword_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./resetpassword.component.scss */
      "uf4q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _model_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../model/user */
      "kl1M");
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../service/auth.service */
      "6uu6");

      var ResetpasswordComponent = /*#__PURE__*/function () {
        function ResetpasswordComponent(activatedRoute, authService, router) {
          _classCallCheck(this, ResetpasswordComponent);

          this.activatedRoute = activatedRoute;
          this.authService = authService;
          this.router = router;
          this.user = new _model_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        }

        _createClass(ResetpasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.activatedRoute.queryParams.subscribe(function (params) {
              _this4.token = params; //params(token)

              var resettoken = Object.values(_this4.token); //valueoftoken

              _this4.value = resettoken.toString(); //object to string token

              _this4.reset = _this4.value.toString(); //string of resettoken
            });
          }
        }, {
          key: "resetuserpwd",
          value: function resetuserpwd() {
            var _this5 = this;

            this.authService.reset(this.reset, this.user.password).subscribe(function (data) {
              console.log(data);
              _this5.msg = true;

              _this5.router.navigate(['/login']);
            }, function (error) {
              _this5.failmsg = "Please try Forgotten password Again";
            });
          }
        }]);

        return ResetpasswordComponent;
      }();

      ResetpasswordComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ResetpasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-resetpassword',
        template: _raw_loader_resetpassword_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_resetpassword_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ResetpasswordComponent);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");
      /* harmony import */


      var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @coreui/icons-angular */
      "rVqu");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./containers */
      "G/4p");
      /* harmony import */


      var _views_error_404_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./views/error/404.component */
      "8gg5");
      /* harmony import */


      var _views_error_500_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./views/error/500.component */
      "dxhq");
      /* harmony import */


      var _views_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./views/login/login.component */
      "QB/w");
      /* harmony import */


      var _views_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./views/register/register.component */
      "4XPS");
      /* harmony import */


      var _coreui_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @coreui/angular */
      "Iluq");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./helpers/auth.interceptor */
      "cJIb");
      /* harmony import */


      var _service_users_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./service/users.service */
      "f2kA");
      /* harmony import */


      var _views_login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./views/login/forgot-password/forgot-password.component */
      "2yyg");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _views_login_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./views/login/resetpassword/resetpassword.component */
      "VgmY");

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true
      }; // Import containers

      var APP_CONTAINERS = [_containers__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutComponent"]]; // Import routing module
      // Import 3rd party components

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _app_routing__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_12__["AppAsideModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_12__["AppBreadcrumbModule"].forRoot(), _coreui_angular__WEBPACK_IMPORTED_MODULE_12__["AppFooterModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_12__["AppHeaderModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_12__["AppSidebarModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__["BsDropdownModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_15__["TabsModule"].forRoot(), ng2_charts__WEBPACK_IMPORTED_MODULE_16__["ChartsModule"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_5__["IconSetModule"].forRoot()],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]].concat(APP_CONTAINERS, [_views_error_404_component__WEBPACK_IMPORTED_MODULE_8__["P404Component"], _views_error_500_component__WEBPACK_IMPORTED_MODULE_9__["P500Component"], _views_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _views_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"], _views_login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_21__["ForgotPasswordComponent"], _views_login_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_23__["ResetpasswordComponent"]]),
        providers: [_helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_19__["authInterceptorProviders"], _service_users_service__WEBPACK_IMPORTED_MODULE_20__["UsersService"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_5__["IconSetService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_22__["BsModalService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "bVw4":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/register/register.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function bVw4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app-body\">\r\n   <main class=\"main d-flex align-items-center\">\r\n      <div class=\"container\">\r\n         <div class=\"row\">\r\n            <div class=\"col-md-6 mx-auto\">\r\n               <div class=\"card mx-4\">\r\n                  <div class=\"card-body p-4\">\r\n                     <form #registerform=\"ngForm\" (ngSubmit)=\"f.form.valid \" #f=\"ngForm\" novalidate >\r\n                     <h1>Register</h1>\r\n                     <p class=\"text-muted\">Create your account</p>\r\n                     <div class=\"input-group mb-3\">\r\n                        <div class=\"input-group-prepend\">\r\n                           <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n                        </div>\r\n                        <input type=\"text\" \r\n                        class=\"form-control \"\r\n                        placeholder=\"Username\" \r\n                        autocomplete=\"username\"\r\n                        [(ngModel)]=\"user.username\" \r\n                        [class.is-invalid]=\"username.invalid && username.touched\"\r\n                        name=\"username\"\r\n                        minlength=\"5\" maxlength=\"20\"\r\n                        #username=\"ngModel\" required  />\r\n                        <span>\r\n                           <div class=\"alert-danger\" *ngIf=\"username.errors  && f.submitted  && f.touched\">\r\n                              <div *ngIf=\"username.errors.required\">Username is required</div>\r\n                              <div *ngIf=\"username.errors.minlength\">\r\n                                 Username must be at least 5 characters\r\n                              </div>\r\n                              <div *ngIf=\"username.errors.maxlength\">\r\n                                 Username must be at most 20 characters\r\n                              </div>\r\n                           </div>\r\n                        </span>\r\n                     </div>\r\n                     <div class=\"input-group mb-3\">\r\n                        <div class=\"input-group-prepend\">\r\n                           <span class=\"input-group-text\">@</span>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\"  [class.is-invalid]=\"email.invalid && email.touched \" placeholder=\"Email\" autocomplete=\"email\" name=\"email\"\r\n                        [(ngModel)]=\"user.email\"   #email=\"ngModel\" email required>\r\n                        <div class=\"alert-danger\" *ngIf=\"email.errors && f.touched && f.submitted \">\r\n                           <div *ngIf=\"email.errors.required\">Email is required</div>\r\n                           <div *ngIf=\"email.errors.email\">\r\n                              Email must be a valid email address\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"input-group mb-3\">\r\n                        <div class=\"input-group-prepend\">\r\n                           <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                        </div>\r\n                        <input type=\"password\"\r\n                        class=\"form-control\" \r\n                        [class.is-invalid]=\"passwordVal.invalid && passwordVal.touched\"\r\n                        name=\"passwordVal\"\r\n                        placeholder=\"Enter Password\"\r\n                        [(ngModel)]=\"user.password\" required\r\n                        minlength=\"6\" maxlength=\"14\" \r\n                        #passwordVal=\"ngModel\"/>\r\n                        <div class=\"alert-danger\" *ngIf=\"passwordVal.errors && f.touched\">\r\n                           <div *ngIf=\"passwordVal.errors.required\">Password is required</div>\r\n                           <div *ngIf=\"passwordVal.errors.minlength\">\r\n                              Password must be at least 6 characters\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"input-group mb-3\">\r\n                        <div class=\"input-group-prepend\">\r\n                           <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                        </div>\r\n                        <input type=\"password\"\r\n                        class=\"form-control\" \r\n                        name=\"cpassword\"\r\n                        placeholder=\"Repeat Password\"\r\n                        minlength=\"6\" maxlength=\"14\" \r\n                        ngModel #cpassword=\"ngModel\" \r\n                        compare=\"passwordVal\" \r\n                        [class.is-invalid]=\"cpassword .invalid && cpassword .touched\"  required/>\r\n                        <div *ngIf=\"cpassword .errors && (cpassword .invalid && cpassword .touched)\" class=\"mt-1\"> \r\n                           <span class=\"text-danger\" *ngIf='cpassword .errors?.required'> Confirm password is required.</span> \r\n                           <span class=\"text-danger\" *ngIf=\"cpassword .errors?.compare\">Password Confirm do not match. </span> \r\n                           <span class=\"text-danger\" *ngIf=\"cpassword .errors?.minlength\">   Password must be at least 6 characters </span> \r\n                        </div>\r\n                     </div>\r\n                     <div class=\"input-group mb-3\">\r\n                        <div class=\"input-prepend input-group\">\r\n                           <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n                           </div>\r\n                           <select  [(ngModel)]=\"selectedValue\" \r\n                           placeholder=\"Enter Role\" \r\n                           class=\"form-control\" \r\n                           name=\"role\"\r\n                           (change)=\"getRole($event.target.value)\"  > \r\n                           <option  *ngFor =\"let role of roleList;\" >{{role}}</option>\r\n                           </select>\r\n                        </div>\r\n                     </div>\r\n                     <button type=\"button\" [disabled]=\"!registerform.valid\" (click)=\"onSubmit()\" class=\"btn btn-block btn-primary\">Create Account</button>\r\n                     </form>\r\n                     <div class=\"alert alert-info\" *ngIf=\"isSuccessful\">\r\n                        Your registration is successful!!!!!\r\n                     </div>\r\n                     <div class=\"alert alert-danger\" *ngIf=\"signupFailed\">\r\n                        username already exist or\r\n                        please check your details!!!\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </main>\r\n</div>";
      /***/
    },

    /***/
    "beVS":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: routes, AppRoutingModule */

    /***/
    function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./containers */
      "G/4p");
      /* harmony import */


      var _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./views/error/404.component */
      "8gg5");
      /* harmony import */


      var _views_error_500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./views/error/500.component */
      "dxhq");
      /* harmony import */


      var _views_login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./views/login/forgot-password/forgot-password.component */
      "2yyg");
      /* harmony import */


      var _views_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./views/login/login.component */
      "QB/w");
      /* harmony import */


      var _views_login_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./views/login/resetpassword/resetpassword.component */
      "VgmY");
      /* harmony import */


      var _views_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./views/register/register.component */
      "4XPS"); // Import Containers


      var routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: '404',
        component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"],
        data: {
          title: 'Page 404'
        }
      }, {
        path: '500',
        component: _views_error_500_component__WEBPACK_IMPORTED_MODULE_5__["P500Component"],
        data: {
          title: 'Page 500'
        }
      }, {
        path: 'login',
        component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        data: {
          title: 'Login Page'
        }
      }, {
        path: 'register',
        component: _views_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
        data: {
          title: 'Register Page'
        }
      }, {
        path: 'forgot',
        component: _views_login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"],
        data: {
          title: 'Forgot Password Page'
        }
      }, {
        path: 'resetpassword',
        component: _views_login_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_8__["ResetpasswordComponent"],
        data: {
          title: 'reset  Page'
        }
      }, {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutComponent"],
        data: {
          title: 'Home'
        },
        children: [{
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | views-dashboard-dashboard-module */
            "views-dashboard-dashboard-module").then(__webpack_require__.bind(null,
            /*! ./views/dashboard/dashboard.module */
            "6dU7")).then(function (m) {
              return m.DashboardModule;
            });
          }
        }, {
          path: 'users',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | views-users-users-module */
            "views-users-users-module").then(__webpack_require__.bind(null,
            /*! ./views/users/users.module */
            "QSsw")).then(function (m) {
              return m.UsersModule;
            });
          }
        }]
      }, {
        path: '**',
        component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"]
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "c2Qq":
    /*!*************************!*\
      !*** ./src/app/_nav.ts ***!
      \*************************/

    /*! exports provided: navItems */

    /***/
    function c2Qq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "navItems", function () {
        return navItems;
      });

      var navItems = [{
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer'
      }, {
        name: 'Users',
        url: '/users',
        icon: 'icon-user'
      }];
      /***/
    },

    /***/
    "cJIb":
    /*!*********************************************!*\
      !*** ./src/app/helpers/auth.interceptor.ts ***!
      \*********************************************/

    /*! exports provided: AuthInterceptor, authInterceptorProviders */

    /***/
    function cJIb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function () {
        return authInterceptorProviders;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _service_tokenstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/tokenstorage.service */
      "GRPU");

      var TOKEN_HEADER_KEY = 'Authorization'; // for Spring Boot back-end

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor(tokenService) {
          _classCallCheck(this, AuthInterceptor);

          this.tokenService = tokenService;
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var authReq = req;
            var token = this.tokenService.getToken();

            if (token != null) {
              // for Spring Boot back-end
              authReq = req.clone({
                headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)
              });
            }

            return next.handle(authReq);
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ctorParameters = function () {
        return [{
          type: _service_tokenstorage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
        }];
      };

      AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_tokenstorage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])], AuthInterceptor);
      var authInterceptorProviders = [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: AuthInterceptor,
        multi: true
      }];
      /***/
    },

    /***/
    "dxhq":
    /*!**********************************************!*\
      !*** ./src/app/views/error/500.component.ts ***!
      \**********************************************/

    /*! exports provided: P500Component */

    /***/
    function dxhq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P500Component", function () {
        return P500Component;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./500.component.html */
      "Lrxh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var P500Component = /*#__PURE__*/_createClass(function P500Component() {
        _classCallCheck(this, P500Component);
      });

      P500Component.ctorParameters = function () {
        return [];
      };

      P500Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], P500Component);
      /***/
    },

    /***/
    "f2kA":
    /*!******************************************!*\
      !*** ./src/app/service/users.service.ts ***!
      \******************************************/

    /*! exports provided: UsersService */

    /***/
    function f2kA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersService", function () {
        return UsersService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var UsersService = /*#__PURE__*/function () {
        function UsersService(http) {
          _classCallCheck(this, UsersService);

          this.http = http;
          this.baseURL = "http://localhost:8080/api/users";
        } //get all users


        _createClass(UsersService, [{
          key: "getAll",
          value: function getAll() {
            return this.http.get("".concat(this.baseURL));
          } //getbyuserid

        }, {
          key: "getbyId",
          value: function getbyId(id) {
            return this.http.get("".concat(this.baseURL, "/").concat(id));
          } //update users

        }, {
          key: "update",
          value: function update(user) {
            return this.http.put("".concat(this.baseURL), user);
          } //delete users

        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(this.baseURL, "/").concat(id));
          }
        }, {
          key: "changepassword",
          value: function changepassword(user) {
            return this.http.post("".concat(this.baseURL), user);
          }
        }]);

        return UsersService;
      }();

      UsersService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      UsersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], UsersService);
      /***/
    },

    /***/
    "kKuK":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/resetpassword/resetpassword.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kKuK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n     <div class=\"container\">\n        <br><br><br><br><br>\n        <br><br><br><br><br>\n        <br><br>\n        <div class=\"row\">\n           <div class=\"col-md-8 mx-auto\">\n              <div class=\"card-group\">\n                 <div class=\"card p-4\">\n                    <div class=\"card-body\">\n                       <form #resetpwd=\"ngForm\" (ngSubmit)=\"resetuserpwd()\">\n                       <span class=\"text-danger\">{{failmsg}}</span>\n                       <h1>Reset Password</h1>\n                       <div class=\"input-group mb-4\">\n                          <div class=\"input-group-prepend\">\n                             <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                          </div>\n                          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\"\n                          [(ngModel)]=\"user.password\" required #pwd>\n                       </div>\n                       <div class=\"controls\">\n                          <div class=\"input-prepend input-group\">\n                             <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                             </div>\n                             <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\" ngModel\n                                #cpassword=\"ngModel\" name=\"cpassword\" required compare=\"password\">\n                          </div>\n                          <div class=\"text-danger\" *ngIf=\"cpassword.invalid && (cpassword.dirty || cpassword.touched)\">\n                             <div *ngIf=\"cpassword.errors['required']\">*</div>\n                             <div *ngIf=\"cpassword.errors['compare']\">Password Confirm do not match</div>\n                          </div>\n                       </div>\n                       <br>\n                       <div class=\"row\">\n                          <div class=\"col-6\">\n                             <button type=\"submit\" class=\"btn btn-primary px-4\">Reset password</button>\n                          </div>\n                          <div class=\"col-6 text-right\">\n                             <button type=\"button\" class=\"btn btn-link px-0\"></button>\n                          </div>\n                       </div>\n                       </form>\n                    </div>\n                 </div>\n              </div>\n           </div>\n        </div>\n     </div>\n  </main>\n</div>\n<div *ngIf=this.msg class=\"alert alert-success\">\n  <strong>Success!</strong> Password Updated Successfully <a href=\"/login\" class=\"alert-link\">login</a>.\n</div>";
      /***/
    },

    /***/
    "kl1M":
    /*!*******************************!*\
      !*** ./src/app/model/user.ts ***!
      \*******************************/

    /*! exports provided: User, getRoleValueByName */

    /***/
    function kl1M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getRoleValueByName", function () {
        return getRoleValueByName;
      });

      var User = /*#__PURE__*/function () {
        function User() {
          _classCallCheck(this, User);
        }

        _createClass(User, null, [{
          key: "getRole",
          value: function getRole() {
            return User.role;
          }
        }]);

        return User;
      }();

      User.role = ["Admin", "User"];

      function getRoleValueByName(name) {
        var roleValue = "";

        switch (name) {
          case "User":
            return roleValue = "user";

          case "Admin":
            return roleValue = "admin";
        }
      }
      /***/

    },

    /***/
    "lm8q":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/default-layout/default-layout.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lm8q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header\r\n  [navbarBrandRouterLink]=\"['/dashboard']\"\r\n  [fixed]=\"true\"\r\n  [navbarBrandFull]=\"{src: 'assets/img/brand/logo.svg', width: 89, height: 25, alt: 'CoreUI Logo'}\"\r\n  [navbarBrandMinimized]=\"{src: 'assets/img/brand/sygnet.svg', width: 30, height: 30, alt: 'CoreUI Logo'}\"\r\n  [sidebarToggler]=\"'lg'\"\r\n  [asideMenuToggler]=\"'lg'\">\r\n  <ul class=\"nav navbar-nav d-md-down-none\">\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" href=\"#\">Dashboard</a>\r\n    </li>\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" href=\"#\">Users</a>\r\n    </li>\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" href=\"#\">Settings</a>\r\n    </li>\r\n  </ul>\r\n  <ul class=\"nav navbar-nav ml-auto\">\r\n    <li class=\"nav-item d-md-down-none\">\r\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-bell\"></i><span class=\"badge badge-pill badge-danger\">5</span></a>\r\n    </li>\r\n    <li class=\"nav-item d-md-down-none\">\r\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-list\"></i></a>\r\n    </li>\r\n    <li class=\"nav-item d-md-down-none\">\r\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-location-pin\"></i></a>\r\n    </li>\r\n    <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\">\r\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\r\n        <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\"/>\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\r\n        <div class=\"dropdown-header text-center\"><strong>Account</strong></div>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-bell-o\"></i> Updates<span class=\"badge badge-info\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-envelope-o\"></i> Messages<span class=\"badge badge-success\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-tasks\"></i> Tasks<span class=\"badge badge-danger\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-comments\"></i> Comment<span class=\"badge badge-warning\">42</span></a>\r\n        <div class=\"dropdown-header text-center\"><strong>Settings</strong></div>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-wrench\"></i> Setting</a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-usd\"></i> Payments<span class=\"badge badge-dark\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-file\"></i> Projects<span class=\"badge badge-primary\">42</span></a>\r\n        <div class=\"divider\"></div>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-shield\"></i> Lock account</a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-lock\" (click)=\"logout()\"></i> Logout</a>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</app-header>\r\n<div class=\"app-body\">\r\n  <app-sidebar #appSidebar [fixed]=\"true\" [display]=\"'lg'\" [minimized]=\"sidebarMinimized\" (minimizedChange)=\"toggleMinimize($event)\">\r\n    <app-sidebar-nav [navItems]=\"navItems\" [perfectScrollbar] [disabled]=\"appSidebar.minimized\"></app-sidebar-nav>\r\n    <app-sidebar-minimizer></app-sidebar-minimizer>\r\n  </app-sidebar>\r\n  <!-- Main content -->\r\n  <main class=\"main\">\r\n    <!-- Breadcrumb -->\r\n    <!-- breaking change 'cui-breadcrumb' -->\r\n    <cui-breadcrumb>\r\n      <!-- Breadcrumb Menu-->\r\n      <li class=\"breadcrumb-menu d-md-down-none\">\r\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n          <a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>\r\n          <a class=\"btn\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\r\n          <a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\r\n        </div>\r\n      </li>\r\n    </cui-breadcrumb>\r\n    <!-- deprecation warning for 'app-breadcrumb' -->\r\n    <!--<ol class=\"breadcrumb\">-->\r\n      <!--<app-breadcrumb></app-breadcrumb>-->\r\n      <!--&lt;!&ndash; Breadcrumb Menu&ndash;&gt;-->\r\n      <!--<li class=\"breadcrumb-menu d-md-down-none\">-->\r\n        <!--<div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">-->\r\n          <!--<a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>-->\r\n          <!--<a class=\"btn\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>-->\r\n          <!--<a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>-->\r\n        <!--</div>-->\r\n      <!--</li>-->\r\n    <!--</ol>-->\r\n    <div class=\"container-fluid\">\r\n      <router-outlet></router-outlet>\r\n    </div><!-- /.container-fluid -->\r\n  </main>\r\n  <app-aside [fixed]=\"true\" [display]=\"false\" [ngClass]=\"'test'\">\r\n    <tabset>\r\n      <tab>\r\n        <ng-template tabHeading><i class=\"icon-list\"></i></ng-template>\r\n        <div class=\"list-group list-group-accent\">\r\n          <div class=\"list-group-item list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small\">Today</div>\r\n          <div class=\"list-group-item list-group-item-accent-warning list-group-item-divider\">\r\n            <div class=\"avatar float-right\">\r\n              <img class=\"img-avatar\" src=\"assets/img/avatars/7.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div>Meeting with\r\n              <strong>Lucas</strong>\r\n            </div>\r\n            <small class=\"text-muted mr-3\">\r\n              <i class=\"icon-calendar\"></i>  1 - 3pm</small>\r\n            <small class=\"text-muted\">\r\n              <i class=\"icon-location-pin\"></i>  Palo Alto, CA</small>\r\n          </div>\r\n          <div class=\"list-group-item list-group-item-accent-info\">\r\n            <div class=\"avatar float-right\">\r\n              <img class=\"img-avatar\" src=\"assets/img/avatars/4.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div>Skype with\r\n              <strong>Megan</strong>\r\n            </div>\r\n            <small class=\"text-muted mr-3\">\r\n              <i class=\"icon-calendar\"></i>  4 - 5pm</small>\r\n            <small class=\"text-muted\">\r\n              <i class=\"icon-social-skype\"></i>  On-line</small>\r\n          </div>\r\n          <div class=\"list-group-item list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small\">Tomorrow</div>\r\n          <div class=\"list-group-item list-group-item-accent-danger list-group-item-divider\">\r\n            <div>New UI Project -\r\n              <strong>deadline</strong>\r\n            </div>\r\n            <small class=\"text-muted mr-3\">\r\n              <i class=\"icon-calendar\"></i>  10 - 11pm</small>\r\n            <small class=\"text-muted\">\r\n              <i class=\"icon-home\"></i>  creativeLabs HQ</small>\r\n            <div class=\"avatars-stack mt-2\">\r\n              <div class=\"avatar avatar-xs\">\r\n                <img class=\"img-avatar\" src=\"assets/img/avatars/2.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n              </div>\r\n              <div class=\"avatar avatar-xs\">\r\n                <img class=\"img-avatar\" src=\"assets/img/avatars/3.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n              </div>\r\n              <div class=\"avatar avatar-xs\">\r\n                <img class=\"img-avatar\" src=\"assets/img/avatars/4.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n              </div>\r\n              <div class=\"avatar avatar-xs\">\r\n                <img class=\"img-avatar\" src=\"assets/img/avatars/5.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n              </div>\r\n              <div class=\"avatar avatar-xs\">\r\n                <img class=\"img-avatar\" src=\"assets/img/avatars/6.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"list-group-item list-group-item-accent-success list-group-item-divider\">\r\n            <div>\r\n              <strong>#10 Startups.Garden</strong> Meetup</div>\r\n            <small class=\"text-muted mr-3\">\r\n              <i class=\"icon-calendar\"></i>  1 - 3pm</small>\r\n            <small class=\"text-muted\">\r\n              <i class=\"icon-location-pin\"></i>  Palo Alto, CA</small>\r\n          </div>\r\n          <div class=\"list-group-item list-group-item-accent-primary list-group-item-divider\">\r\n            <div>\r\n              <strong>Team meeting</strong>\r\n            </div>\r\n            <small class=\"text-muted mr-3\">\r\n              <i class=\"icon-calendar\"></i>  4 - 6pm</small>\r\n            <small class=\"text-muted\">\r\n              <i class=\"icon-home\"></i>  creativeLabs HQ</small>\r\n            <div class=\"avatars-stack mt-2\">\r\n              <div class=\"avatar avatar-xs\">\r\n                <img class=\"img-avatar\" src=\"assets/img/avatars/2.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n              </div>\r\n              <div class=\"avatar avatar-xs\">\r\n                <img class=\"img-avatar\" src=\"assets/img/avatars/3.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n              </div>\r\n              <div class=\"avatar avatar-xs\">\r\n                <img class=\"img-avatar\" src=\"assets/img/avatars/4.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n              </div>\r\n              <div class=\"avatar avatar-xs\">\r\n                <img class=\"img-avatar\" src=\"assets/img/avatars/5.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n              </div>\r\n              <div class=\"avatar avatar-xs\">\r\n                <img class=\"img-avatar\" src=\"assets/img/avatars/6.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n              </div>\r\n              <div class=\"avatar avatar-xs\">\r\n                <img class=\"img-avatar\" src=\"assets/img/avatars/7.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n              </div>\r\n              <div class=\"avatar avatar-xs\">\r\n                <img class=\"img-avatar\" src=\"assets/img/avatars/8.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </tab>\r\n      <tab>\r\n        <ng-template tabHeading><i class=\"icon-speech\"></i></ng-template>\r\n        <div class=\"p-3\">\r\n          <div class=\"message\">\r\n            <div class=\"py-3 pb-5 mr-3 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-3 pb-5 mr-3 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-3 pb-5 mr-3 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-3 pb-5 mr-3 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-3 pb-5 mr-3 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n        </div>\r\n      </tab>\r\n      <tab>\r\n        <ng-template tabHeading><i class=\"icon-settings\"></i></ng-template>\r\n        <div class=\"p-3\">\r\n          <h6>Settings</h6>\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-4\">\r\n              <small><b>Option 1</b></small>\r\n              <label class=\"switch switch-label switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\" checked>\r\n                <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n              </label>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\r\n            </div>\r\n          </div>\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-3\">\r\n              <small><b>Option 2</b></small>\r\n              <label class=\"switch switch-label switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\">\r\n                <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n              </label>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\r\n            </div>\r\n          </div>\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-3\">\r\n              <small><b>Option 3</b></small>\r\n              <label class=\"switch switch-label switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\">\r\n                <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n                <span class=\"switch-handle\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-3\">\r\n              <small><b>Option 4</b></small>\r\n              <label class=\"switch switch-label switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\" checked>\r\n                <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n          <h6>System Utilization</h6>\r\n          <div class=\"text-uppercase mb-1 mt-4\"><small><b>CPU Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\r\n          <div class=\"text-uppercase mb-1 mt-2\"><small><b>Memory Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">11444GB/16384MB</small>\r\n          <div class=\"text-uppercase mb-1 mt-2\"><small><b>SSD 1 Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">243GB/256GB</small>\r\n          <div class=\"text-uppercase mb-1 mt-2\"><small><b>SSD 2 Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">25GB/256GB</small>\r\n        </div>\r\n      </tab>\r\n    </tabset>\r\n  </app-aside>\r\n</div>\r\n<app-footer>\r\n  <span><a href=\"https://coreui.io\">CoreUI</a> &copy; 2021 creativeLabs.</span>\r\n  <span class=\"ml-auto\">Powered by <a href=\"https://coreui.io/angular\">CoreUI for Angular</a></span>\r\n</app-footer>\r\n";
      /***/
    },

    /***/
    "nAJl":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/404.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function nAJl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\r\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\r\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n          </div>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-append\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "nSew":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function nSew(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app-body\">\r\n  <main class=\"main d-flex align-items-center\">\r\n     <div class=\"container\">\r\n        <div class=\"row\">\r\n           <div class=\"col-md-8 mx-auto\">\r\n              <div class=\"card-group\">\r\n                 <div class=\"card p-4\">\r\n                    <div class=\"card-body\">\r\n                       <form   #loginform=\"ngForm\" (ngSubmit)=\"login()\" novalidate>\r\n                       <h1>Login</h1>\r\n                       <p class=\"text-muted\">Sign In to your account</p>\r\n                       <div class=\"input-group mb-3\">\r\n                          <div class=\"input-group-prepend\">\r\n                             <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n                          </div>\r\n                          <input type=\"text\" name=\"username\" [(ngModel)]=\"user.username\"class=\"form-control\" placeholder=\"Username\" autocomplete=\"username\" required>\r\n                       </div>\r\n                       <div class=\"input-group mb-4\">\r\n                          <div class=\"input-group-prepend\">\r\n                             <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                          </div>\r\n                          <input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"current-password\" required>\r\n                       </div>\r\n                       <div class=\"row\">\r\n                          <div class=\"col-6\">\r\n                             <button type=\"submit\" class=\"btn btn-primary px-4\">Login</button>\r\n                          </div>\r\n                          <div class=\"col-6 text-right\">\r\n                             <button type=\"button\" (click)=\"goToForgotPassword()\" class=\"btn btn-link px-0\">Forgot password?</button>\r\n                          </div>\r\n                       </div>\r\n                       </form>\r\n                    </div>\r\n                 </div>\r\n                 <div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\r\n                    <div class=\"card-body text-center\">\r\n                       <div>\r\n                          <h2>Sign up</h2>\r\n                          <p>Stock Management Data Analysis</p>\r\n                          <button type=\"button\" (click)=\"goToRegister()\"\r\n                             class=\"btn btn-primary active mt-3\">Register Now!\r\n                          </button>\r\n                       </div>\r\n                    </div>\r\n                 </div>\r\n              </div>\r\n           </div>\r\n        </div>\r\n     </div>\r\n  </main>\r\n</div>";
      /***/
    },

    /***/
    "uf4q":
    /*!************************************************************************!*\
      !*** ./src/app/views/login/resetpassword/resetpassword.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function uf4q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldHBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "wAiw");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
        useJit: true,
        preserveWhitespaces: true
      })["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map