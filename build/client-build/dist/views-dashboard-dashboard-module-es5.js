(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-dashboard-dashboard-module"], {
    /***/
    "6dU7":
    /*!*****************************************************!*\
      !*** ./src/app/views/dashboard/dashboard.module.ts ***!
      \*****************************************************/

    /*! exports provided: DashboardModule */

    /***/
    function dU7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/buttons */
      "aHM3");
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dashboard.component */
      "l70X");
      /* harmony import */


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      "jUYC");

      var DashboardModule = /*#__PURE__*/_createClass(function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      });

      DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot()],
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]]
      })], DashboardModule);
      /***/
    },

    /***/
    "H++W":
    /*!************************************************************************************************!*\
      !*** ./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js ***!
      \************************************************************************************************/

    /*! no static exports found */

    /***/
    function HW(module, exports, __webpack_require__) {
      (function (global, factory) {
        true ? factory(exports) : undefined;
      })(this, function (exports) {
        'use strict';
        /**
         * --------------------------------------------------------------------------
         * CoreUI Plugins - Custom Tooltips for Chart.js (v1.3.1): custom-tooltips.js
         * Licensed under MIT (https://coreui.io/license)
         * --------------------------------------------------------------------------
         */

        function CustomTooltips(tooltipModel) {
          var _this = this; // Add unique id if not exist


          var _setCanvasId = function _setCanvasId() {
            var _idMaker = function _idMaker() {
              var _hex = 16;
              var _multiplier = 0x10000;
              return ((1 + Math.random()) * _multiplier | 0).toString(_hex);
            };

            var _canvasId = "_canvas-" + (_idMaker() + _idMaker());

            _this._chart.canvas.id = _canvasId;
            return _canvasId;
          };

          var ClassName = {
            ABOVE: 'above',
            BELOW: 'below',
            CHARTJS_TOOLTIP: 'chartjs-tooltip',
            NO_TRANSFORM: 'no-transform',
            TOOLTIP_BODY: 'tooltip-body',
            TOOLTIP_BODY_ITEM: 'tooltip-body-item',
            TOOLTIP_BODY_ITEM_COLOR: 'tooltip-body-item-color',
            TOOLTIP_BODY_ITEM_LABEL: 'tooltip-body-item-label',
            TOOLTIP_BODY_ITEM_VALUE: 'tooltip-body-item-value',
            TOOLTIP_HEADER: 'tooltip-header',
            TOOLTIP_HEADER_ITEM: 'tooltip-header-item'
          };
          var Selector = {
            DIV: 'div',
            SPAN: 'span',
            TOOLTIP: (this._chart.canvas.id || _setCanvasId()) + "-tooltip"
          };
          var tooltip = document.getElementById(Selector.TOOLTIP);

          if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.id = Selector.TOOLTIP;
            tooltip.className = ClassName.CHARTJS_TOOLTIP;

            this._chart.canvas.parentNode.appendChild(tooltip);
          } // Hide if no tooltip


          if (tooltipModel.opacity === 0) {
            tooltip.style.opacity = 0;
            return;
          } // Set caret Position


          tooltip.classList.remove(ClassName.ABOVE, ClassName.BELOW, ClassName.NO_TRANSFORM);

          if (tooltipModel.yAlign) {
            tooltip.classList.add(tooltipModel.yAlign);
          } else {
            tooltip.classList.add(ClassName.NO_TRANSFORM);
          } // Set Text


          if (tooltipModel.body) {
            var titleLines = tooltipModel.title || [];
            var tooltipHeader = document.createElement(Selector.DIV);
            tooltipHeader.className = ClassName.TOOLTIP_HEADER;
            titleLines.forEach(function (title) {
              var tooltipHeaderTitle = document.createElement(Selector.DIV);
              tooltipHeaderTitle.className = ClassName.TOOLTIP_HEADER_ITEM;
              tooltipHeaderTitle.innerHTML = title;
              tooltipHeader.appendChild(tooltipHeaderTitle);
            });
            var tooltipBody = document.createElement(Selector.DIV);
            tooltipBody.className = ClassName.TOOLTIP_BODY;
            var tooltipBodyItems = tooltipModel.body.map(function (item) {
              return item.lines;
            });
            tooltipBodyItems.forEach(function (item, i) {
              var tooltipBodyItem = document.createElement(Selector.DIV);
              tooltipBodyItem.className = ClassName.TOOLTIP_BODY_ITEM;
              var colors = tooltipModel.labelColors[i];
              var tooltipBodyItemColor = document.createElement(Selector.SPAN);
              tooltipBodyItemColor.className = ClassName.TOOLTIP_BODY_ITEM_COLOR;
              tooltipBodyItemColor.style.backgroundColor = colors.backgroundColor;
              tooltipBodyItem.appendChild(tooltipBodyItemColor);

              if (item[0].split(':').length > 1) {
                var tooltipBodyItemLabel = document.createElement(Selector.SPAN);
                tooltipBodyItemLabel.className = ClassName.TOOLTIP_BODY_ITEM_LABEL;
                tooltipBodyItemLabel.innerHTML = item[0].split(': ')[0];
                tooltipBodyItem.appendChild(tooltipBodyItemLabel);
                var tooltipBodyItemValue = document.createElement(Selector.SPAN);
                tooltipBodyItemValue.className = ClassName.TOOLTIP_BODY_ITEM_VALUE;
                tooltipBodyItemValue.innerHTML = item[0].split(': ').pop();
                tooltipBodyItem.appendChild(tooltipBodyItemValue);
              } else {
                var _tooltipBodyItemValue = document.createElement(Selector.SPAN);

                _tooltipBodyItemValue.className = ClassName.TOOLTIP_BODY_ITEM_VALUE;
                _tooltipBodyItemValue.innerHTML = item[0];
                tooltipBodyItem.appendChild(_tooltipBodyItemValue);
              }

              tooltipBody.appendChild(tooltipBodyItem);
            });
            tooltip.innerHTML = '';
            tooltip.appendChild(tooltipHeader);
            tooltip.appendChild(tooltipBody);
          }

          var position = this._chart.canvas.getBoundingClientRect();

          var positionY = this._chart.canvas.offsetTop;
          var positionX = this._chart.canvas.offsetLeft;
          var positionLeft = positionX + tooltipModel.caretX;
          var positionTop = positionY + tooltipModel.caretY; // eslint-disable-next-line

          var halfWidth = tooltipModel.width / 2;

          if (positionLeft + halfWidth > position.width) {
            positionLeft -= halfWidth;
          } else if (positionLeft < halfWidth) {
            positionLeft += halfWidth;
          } // Display, position, and set styles for font


          tooltip.style.opacity = 1;
          tooltip.style.left = positionLeft + "px";
          tooltip.style.top = positionTop + "px";
        }

        var customTooltips = CustomTooltips; // TODO: camel-case

        exports.CustomTooltips = CustomTooltips;
        exports.customTooltips = customTooltips;
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
      }); //# sourceMappingURL=custom-tooltips.js.map

      /***/

    },

    /***/
    "NuRj":
    /*!*****************************************************************!*\
      !*** ./node_modules/@coreui/coreui/dist/js/coreui-utilities.js ***!
      \*****************************************************************/

    /*! no static exports found */

    /***/
    function NuRj(module, exports, __webpack_require__) {
      /*!
        * CoreUI v2.1.16 (https://coreui.io)
        * Copyright 2019 ??ukasz Holeczek
        * Licensed under MIT (https://coreui.io)
        */
      (function (global, factory) {
        true ? factory(exports) : undefined;
      })(this, function (exports) {
        'use strict';
        /**
         * --------------------------------------------------------------------------
         * CoreUI Utilities (v2.1.16): classes.js
         * Licensed under MIT (https://coreui.io/license)
         * --------------------------------------------------------------------------
         */

        var sidebarCssClasses = ['sidebar-show', 'sidebar-sm-show', 'sidebar-md-show', 'sidebar-lg-show', 'sidebar-xl-show'];
        var asideMenuCssClasses = ['aside-menu-show', 'aside-menu-sm-show', 'aside-menu-md-show', 'aside-menu-lg-show', 'aside-menu-xl-show'];
        var validBreakpoints = ['sm', 'md', 'lg', 'xl'];

        function checkBreakpoint(breakpoint, list) {
          return list.indexOf(breakpoint) > -1;
        }

        var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

        function createCommonjsModule(fn, module) {
          return module = {
            exports: {}
          }, fn(module, module.exports), module.exports;
        }

        var check = function check(it) {
          return it && it.Math == Math && it;
        }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


        var global_1 = // eslint-disable-next-line no-undef
        check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func
        Function('return this')();

        var fails = function fails(exec) {
          try {
            return !!exec();
          } catch (error) {
            return true;
          }
        }; // Thank's IE8 for his funny defineProperty


        var descriptors = !fails(function () {
          return Object.defineProperty({}, 'a', {
            get: function get() {
              return 7;
            }
          }).a != 7;
        });
        var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

        var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
          1: 2
        }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
        // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable

        var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
          var descriptor = getOwnPropertyDescriptor(this, V);
          return !!descriptor && descriptor.enumerable;
        } : nativePropertyIsEnumerable;
        var objectPropertyIsEnumerable = {
          f: f
        };

        var createPropertyDescriptor = function createPropertyDescriptor(bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value
          };
        };

        var toString = {}.toString;

        var classofRaw = function classofRaw(it) {
          return toString.call(it).slice(8, -1);
        };

        var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

        var indexedObject = fails(function () {
          // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
          // eslint-disable-next-line no-prototype-builtins
          return !Object('z').propertyIsEnumerable(0);
        }) ? function (it) {
          return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
        } : Object; // `RequireObjectCoercible` abstract operation
        // https://tc39.github.io/ecma262/#sec-requireobjectcoercible

        var requireObjectCoercible = function requireObjectCoercible(it) {
          if (it == undefined) throw TypeError("Can't call method on " + it);
          return it;
        }; // toObject with fallback for non-array-like ES3 strings


        var toIndexedObject = function toIndexedObject(it) {
          return indexedObject(requireObjectCoercible(it));
        };

        var isObject = function isObject(it) {
          return typeof it === 'object' ? it !== null : typeof it === 'function';
        }; // `ToPrimitive` abstract operation
        // https://tc39.github.io/ecma262/#sec-toprimitive
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string


        var toPrimitive = function toPrimitive(input, PREFERRED_STRING) {
          if (!isObject(input)) return input;
          var fn, val;
          if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
          if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
          if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
          throw TypeError("Can't convert object to primitive value");
        };

        var hasOwnProperty = {}.hasOwnProperty;

        var has = function has(it, key) {
          return hasOwnProperty.call(it, key);
        };

        var document$1 = global_1.document; // typeof document.createElement is 'object' in old IE

        var EXISTS = isObject(document$1) && isObject(document$1.createElement);

        var documentCreateElement = function documentCreateElement(it) {
          return EXISTS ? document$1.createElement(it) : {};
        }; // Thank's IE8 for his funny defineProperty


        var ie8DomDefine = !descriptors && !fails(function () {
          return Object.defineProperty(documentCreateElement('div'), 'a', {
            get: function get() {
              return 7;
            }
          }).a != 7;
        });
        var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
        // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

        var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
          O = toIndexedObject(O);
          P = toPrimitive(P, true);
          if (ie8DomDefine) try {
            return nativeGetOwnPropertyDescriptor(O, P);
          } catch (error) {
            /* empty */
          }
          if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
        };
        var objectGetOwnPropertyDescriptor = {
          f: f$1
        };

        var anObject = function anObject(it) {
          if (!isObject(it)) {
            throw TypeError(String(it) + ' is not an object');
          }

          return it;
        };

        var nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method
        // https://tc39.github.io/ecma262/#sec-object.defineproperty

        var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
          anObject(O);
          P = toPrimitive(P, true);
          anObject(Attributes);
          if (ie8DomDefine) try {
            return nativeDefineProperty(O, P, Attributes);
          } catch (error) {
            /* empty */
          }
          if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
          if ('value' in Attributes) O[P] = Attributes.value;
          return O;
        };
        var objectDefineProperty = {
          f: f$2
        };
        var createNonEnumerableProperty = descriptors ? function (object, key, value) {
          return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
        } : function (object, key, value) {
          object[key] = value;
          return object;
        };

        var setGlobal = function setGlobal(key, value) {
          try {
            createNonEnumerableProperty(global_1, key, value);
          } catch (error) {
            global_1[key] = value;
          }

          return value;
        };

        var SHARED = '__core-js_shared__';
        var store = global_1[SHARED] || setGlobal(SHARED, {});
        var sharedStore = store;
        var shared = createCommonjsModule(function (module) {
          (module.exports = function (key, value) {
            return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
          })('versions', []).push({
            version: '3.3.4',
            mode: 'global',
            copyright: '?? 2019 Denis Pushkarev (zloirock.ru)'
          });
        });
        var functionToString = shared('native-function-to-string', Function.toString);
        var WeakMap = global_1.WeakMap;
        var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(functionToString.call(WeakMap));
        var id = 0;
        var postfix = Math.random();

        var uid = function uid(key) {
          return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
        };

        var keys = shared('keys');

        var sharedKey = function sharedKey(key) {
          return keys[key] || (keys[key] = uid(key));
        };

        var hiddenKeys = {};
        var WeakMap$1 = global_1.WeakMap;
        var set, get, has$1;

        var enforce = function enforce(it) {
          return has$1(it) ? get(it) : set(it, {});
        };

        var getterFor = function getterFor(TYPE) {
          return function (it) {
            var state;

            if (!isObject(it) || (state = get(it)).type !== TYPE) {
              throw TypeError('Incompatible receiver, ' + TYPE + ' required');
            }

            return state;
          };
        };

        if (nativeWeakMap) {
          var store$1 = new WeakMap$1();
          var wmget = store$1.get;
          var wmhas = store$1.has;
          var wmset = store$1.set;

          set = function set(it, metadata) {
            wmset.call(store$1, it, metadata);
            return metadata;
          };

          get = function get(it) {
            return wmget.call(store$1, it) || {};
          };

          has$1 = function has$1(it) {
            return wmhas.call(store$1, it);
          };
        } else {
          var STATE = sharedKey('state');
          hiddenKeys[STATE] = true;

          set = function set(it, metadata) {
            createNonEnumerableProperty(it, STATE, metadata);
            return metadata;
          };

          get = function get(it) {
            return has(it, STATE) ? it[STATE] : {};
          };

          has$1 = function has$1(it) {
            return has(it, STATE);
          };
        }

        var internalState = {
          set: set,
          get: get,
          has: has$1,
          enforce: enforce,
          getterFor: getterFor
        };
        var redefine = createCommonjsModule(function (module) {
          var getInternalState = internalState.get;
          var enforceInternalState = internalState.enforce;
          var TEMPLATE = String(functionToString).split('toString');
          shared('inspectSource', function (it) {
            return functionToString.call(it);
          });
          (module.exports = function (O, key, value, options) {
            var unsafe = options ? !!options.unsafe : false;
            var simple = options ? !!options.enumerable : false;
            var noTargetGet = options ? !!options.noTargetGet : false;

            if (typeof value == 'function') {
              if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
              enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
            }

            if (O === global_1) {
              if (simple) O[key] = value;else setGlobal(key, value);
              return;
            } else if (!unsafe) {
              delete O[key];
            } else if (!noTargetGet && O[key]) {
              simple = true;
            }

            if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
          })(Function.prototype, 'toString', function toString() {
            return typeof this == 'function' && getInternalState(this).source || functionToString.call(this);
          });
        });
        var path = global_1;

        var aFunction = function aFunction(variable) {
          return typeof variable == 'function' ? variable : undefined;
        };

        var getBuiltIn = function getBuiltIn(namespace, method) {
          return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace]) : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
        };

        var ceil = Math.ceil;
        var floor = Math.floor; // `ToInteger` abstract operation
        // https://tc39.github.io/ecma262/#sec-tointeger

        var toInteger = function toInteger(argument) {
          return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
        };

        var min = Math.min; // `ToLength` abstract operation
        // https://tc39.github.io/ecma262/#sec-tolength

        var toLength = function toLength(argument) {
          return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
        };

        var max = Math.max;
        var min$1 = Math.min; // Helper for a popular repeating case of the spec:
        // Let integer be ? ToInteger(index).
        // If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).

        var toAbsoluteIndex = function toAbsoluteIndex(index, length) {
          var integer = toInteger(index);
          return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
        }; // `Array.prototype.{ indexOf, includes }` methods implementation


        var createMethod = function createMethod(IS_INCLUDES) {
          return function ($this, el, fromIndex) {
            var O = toIndexedObject($this);
            var length = toLength(O.length);
            var index = toAbsoluteIndex(fromIndex, length);
            var value; // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare

            if (IS_INCLUDES && el != el) while (length > index) {
              value = O[index++]; // eslint-disable-next-line no-self-compare

              if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
            } else for (; length > index; index++) {
              if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
            }
            return !IS_INCLUDES && -1;
          };
        };

        var arrayIncludes = {
          // `Array.prototype.includes` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.includes
          includes: createMethod(true),
          // `Array.prototype.indexOf` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
          indexOf: createMethod(false)
        };
        var indexOf = arrayIncludes.indexOf;

        var objectKeysInternal = function objectKeysInternal(object, names) {
          var O = toIndexedObject(object);
          var i = 0;
          var result = [];
          var key;

          for (key in O) {
            !has(hiddenKeys, key) && has(O, key) && result.push(key);
          } // Don't enum bug & hidden keys


          while (names.length > i) {
            if (has(O, key = names[i++])) {
              ~indexOf(result, key) || result.push(key);
            }
          }

          return result;
        }; // IE8- don't enum bug keys


        var enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
        var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
        // https://tc39.github.io/ecma262/#sec-object.getownpropertynames

        var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
          return objectKeysInternal(O, hiddenKeys$1);
        };

        var objectGetOwnPropertyNames = {
          f: f$3
        };
        var f$4 = Object.getOwnPropertySymbols;
        var objectGetOwnPropertySymbols = {
          f: f$4
        }; // all object keys, includes non-enumerable and symbols

        var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
          var keys = objectGetOwnPropertyNames.f(anObject(it));
          var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
          return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
        };

        var copyConstructorProperties = function copyConstructorProperties(target, source) {
          var keys = ownKeys(source);
          var defineProperty = objectDefineProperty.f;
          var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
          }
        };

        var replacement = /#|\.prototype\./;

        var isForced = function isForced(feature, detection) {
          var value = data[normalize(feature)];
          return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
        };

        var normalize = isForced.normalize = function (string) {
          return String(string).replace(replacement, '.').toLowerCase();
        };

        var data = isForced.data = {};
        var NATIVE = isForced.NATIVE = 'N';
        var POLYFILL = isForced.POLYFILL = 'P';
        var isForced_1 = isForced;
        var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
        /*
          options.target      - name of the target object
          options.global      - target is the global object
          options.stat        - export as static methods of target
          options.proto       - export as prototype methods of target
          options.real        - real prototype method for the `pure` version
          options.forced      - export even if the native feature is available
          options.bind        - bind methods to the target, required for the `pure` version
          options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
          options.unsafe      - use the simple assignment of property instead of delete + defineProperty
          options.sham        - add a flag to not completely full polyfills
          options.enumerable  - export as enumerable property
          options.noTargetGet - prevent calling a getter on target
        */

        var _export = function _export(options, source) {
          var TARGET = options.target;
          var GLOBAL = options.global;
          var STATIC = options.stat;
          var FORCED, target, key, targetProperty, sourceProperty, descriptor;

          if (GLOBAL) {
            target = global_1;
          } else if (STATIC) {
            target = global_1[TARGET] || setGlobal(TARGET, {});
          } else {
            target = (global_1[TARGET] || {}).prototype;
          }

          if (target) for (key in source) {
            sourceProperty = source[key];

            if (options.noTargetGet) {
              descriptor = getOwnPropertyDescriptor$1(target, key);
              targetProperty = descriptor && descriptor.value;
            } else targetProperty = target[key];

            FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

            if (!FORCED && targetProperty !== undefined) {
              if (typeof sourceProperty === typeof targetProperty) continue;
              copyConstructorProperties(sourceProperty, targetProperty);
            } // add a flag to not completely full polyfills


            if (options.sham || targetProperty && targetProperty.sham) {
              createNonEnumerableProperty(sourceProperty, 'sham', true);
            } // extend global


            redefine(target, key, sourceProperty, options);
          }
        }; // `Object.keys` method
        // https://tc39.github.io/ecma262/#sec-object.keys


        var objectKeys = Object.keys || function keys(O) {
          return objectKeysInternal(O, enumBugKeys);
        }; // `ToObject` abstract operation
        // https://tc39.github.io/ecma262/#sec-toobject


        var toObject = function toObject(argument) {
          return Object(requireObjectCoercible(argument));
        };

        var nativeAssign = Object.assign; // `Object.assign` method
        // https://tc39.github.io/ecma262/#sec-object.assign
        // should work with symbols and should have deterministic property order (V8 bug)

        var objectAssign = !nativeAssign || fails(function () {
          var A = {};
          var B = {}; // eslint-disable-next-line no-undef

          var symbol = Symbol();
          var alphabet = 'abcdefghijklmnopqrst';
          A[symbol] = 7;
          alphabet.split('').forEach(function (chr) {
            B[chr] = chr;
          });
          return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
        }) ? function assign(target, source) {
          // eslint-disable-line no-unused-vars
          var T = toObject(target);
          var argumentsLength = arguments.length;
          var index = 1;
          var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
          var propertyIsEnumerable = objectPropertyIsEnumerable.f;

          while (argumentsLength > index) {
            var S = indexedObject(arguments[index++]);
            var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
            var length = keys.length;
            var j = 0;
            var key;

            while (length > j) {
              key = keys[j++];
              if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
            }
          }

          return T;
        } : nativeAssign; // `Object.assign` method
        // https://tc39.github.io/ecma262/#sec-object.assign

        _export({
          target: 'Object',
          stat: true,
          forced: Object.assign !== objectAssign
        }, {
          assign: objectAssign
        });

        var FAILS_ON_PRIMITIVES = fails(function () {
          objectKeys(1);
        }); // `Object.keys` method
        // https://tc39.github.io/ecma262/#sec-object.keys

        _export({
          target: 'Object',
          stat: true,
          forced: FAILS_ON_PRIMITIVES
        }, {
          keys: function keys(it) {
            return objectKeys(toObject(it));
          }
        });

        var deepObjectsMerge = function deepObjectsMerge(target, source) {
          // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
          for (var _i = 0, _Object$keys = Object.keys(source); _i < _Object$keys.length; _i++) {
            var key = _Object$keys[_i];

            if (source[key] instanceof Object) {
              Object.assign(source[key], deepObjectsMerge(target[key], source[key]));
            }
          } // Join `target` and modified `source`


          Object.assign(target || {}, source);
          return target;
        };

        var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
          // Chrome 38 Symbol has incorrect toString conversion
          // eslint-disable-next-line no-undef
          return !String(Symbol());
        });
        var Symbol$1 = global_1.Symbol;
        var store$2 = shared('wks');

        var wellKnownSymbol = function wellKnownSymbol(name) {
          return store$2[name] || (store$2[name] = nativeSymbol && Symbol$1[name] || (nativeSymbol ? Symbol$1 : uid)('Symbol.' + name));
        }; // `RegExp.prototype.flags` getter implementation
        // https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags


        var regexpFlags = function regexpFlags() {
          var that = anObject(this);
          var result = '';
          if (that.global) result += 'g';
          if (that.ignoreCase) result += 'i';
          if (that.multiline) result += 'm';
          if (that.dotAll) result += 's';
          if (that.unicode) result += 'u';
          if (that.sticky) result += 'y';
          return result;
        };

        var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
        // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
        // which loads this file before patching the method.

        var nativeReplace = String.prototype.replace;
        var patchedExec = nativeExec;

        var UPDATES_LAST_INDEX_WRONG = function () {
          var re1 = /a/;
          var re2 = /b*/g;
          nativeExec.call(re1, 'a');
          nativeExec.call(re2, 'a');
          return re1.lastIndex !== 0 || re2.lastIndex !== 0;
        }(); // nonparticipating capturing group, copied from es5-shim's String#split patch.


        var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
        var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

        if (PATCH) {
          patchedExec = function exec(str) {
            var re = this;
            var lastIndex, reCopy, match, i;

            if (NPCG_INCLUDED) {
              reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
            }

            if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
            match = nativeExec.call(re, str);

            if (UPDATES_LAST_INDEX_WRONG && match) {
              re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
            }

            if (NPCG_INCLUDED && match && match.length > 1) {
              // Fix browsers whose `exec` methods don't consistently return `undefined`
              // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
              nativeReplace.call(match[0], reCopy, function () {
                for (i = 1; i < arguments.length - 2; i++) {
                  if (arguments[i] === undefined) match[i] = undefined;
                }
              });
            }

            return match;
          };
        }

        var regexpExec = patchedExec;
        var SPECIES = wellKnownSymbol('species');
        var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
          // #replace needs built-in support for named groups.
          // #match works fine because it just return the exec results, even if it has
          // a "grops" property.
          var re = /./;

          re.exec = function () {
            var result = [];
            result.groups = {
              a: '7'
            };
            return result;
          };

          return ''.replace(re, '$<a>') !== '7';
        }); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
        // Weex JS has frozen built-in prototypes, so use try / catch wrapper

        var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
          var re = /(?:)/;
          var originalExec = re.exec;

          re.exec = function () {
            return originalExec.apply(this, arguments);
          };

          var result = 'ab'.split(re);
          return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
        });

        var fixRegexpWellKnownSymbolLogic = function fixRegexpWellKnownSymbolLogic(KEY, length, exec, sham) {
          var SYMBOL = wellKnownSymbol(KEY);
          var DELEGATES_TO_SYMBOL = !fails(function () {
            // String methods call symbol-named RegEp methods
            var O = {};

            O[SYMBOL] = function () {
              return 7;
            };

            return ''[KEY](O) != 7;
          });
          var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
            // Symbol-named RegExp methods call .exec
            var execCalled = false;
            var re = /a/;

            if (KEY === 'split') {
              // We can't use real regex here since it causes deoptimization
              // and serious performance degradation in V8
              // https://github.com/zloirock/core-js/issues/306
              re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
              // a new one. We need to return the patched regex when creating the new one.

              re.constructor = {};

              re.constructor[SPECIES] = function () {
                return re;
              };

              re.flags = '';
              re[SYMBOL] = /./[SYMBOL];
            }

            re.exec = function () {
              execCalled = true;
              return null;
            };

            re[SYMBOL]('');
            return !execCalled;
          });

          if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
            var nativeRegExpMethod = /./[SYMBOL];
            var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
              if (regexp.exec === regexpExec) {
                if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                  // The native String method already delegates to @@method (this
                  // polyfilled function), leasing to infinite recursion.
                  // We avoid it by directly calling the native @@method method.
                  return {
                    done: true,
                    value: nativeRegExpMethod.call(regexp, str, arg2)
                  };
                }

                return {
                  done: true,
                  value: nativeMethod.call(str, regexp, arg2)
                };
              }

              return {
                done: false
              };
            });
            var stringMethod = methods[0];
            var regexMethod = methods[1];
            redefine(String.prototype, KEY, stringMethod);
            redefine(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
            // 21.2.5.11 RegExp.prototype[@@split](string, limit)
            ? function (string, arg) {
              return regexMethod.call(string, this, arg);
            } // 21.2.5.6 RegExp.prototype[@@match](string)
            // 21.2.5.9 RegExp.prototype[@@search](string)
            : function (string) {
              return regexMethod.call(string, this);
            });
            if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
          }
        }; // `String.prototype.{ codePointAt, at }` methods implementation


        var createMethod$1 = function createMethod$1(CONVERT_TO_STRING) {
          return function ($this, pos) {
            var S = String(requireObjectCoercible($this));
            var position = toInteger(pos);
            var size = S.length;
            var first, second;
            if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
            first = S.charCodeAt(position);
            return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
          };
        };

        var stringMultibyte = {
          // `String.prototype.codePointAt` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
          codeAt: createMethod$1(false),
          // `String.prototype.at` method
          // https://github.com/mathiasbynens/String.prototype.at
          charAt: createMethod$1(true)
        };
        var charAt = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
        // https://tc39.github.io/ecma262/#sec-advancestringindex

        var advanceStringIndex = function advanceStringIndex(S, index, unicode) {
          return index + (unicode ? charAt(S, index).length : 1);
        }; // `RegExpExec` abstract operation
        // https://tc39.github.io/ecma262/#sec-regexpexec


        var regexpExecAbstract = function regexpExecAbstract(R, S) {
          var exec = R.exec;

          if (typeof exec === 'function') {
            var result = exec.call(R, S);

            if (typeof result !== 'object') {
              throw TypeError('RegExp exec method returned something other than an Object or null');
            }

            return result;
          }

          if (classofRaw(R) !== 'RegExp') {
            throw TypeError('RegExp#exec called on incompatible receiver');
          }

          return regexpExec.call(R, S);
        }; // @@match logic


        fixRegexpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
          return [// `String.prototype.match` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.match
          function match(regexp) {
            var O = requireObjectCoercible(this);
            var matcher = regexp == undefined ? undefined : regexp[MATCH];
            return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
          }, // `RegExp.prototype[@@match]` method
          // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
          function (regexp) {
            var res = maybeCallNative(nativeMatch, regexp, this);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            if (!rx.global) return regexpExecAbstract(rx, S);
            var fullUnicode = rx.unicode;
            rx.lastIndex = 0;
            var A = [];
            var n = 0;
            var result;

            while ((result = regexpExecAbstract(rx, S)) !== null) {
              var matchStr = String(result[0]);
              A[n] = matchStr;
              if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
              n++;
            }

            return n === 0 ? null : A;
          }];
        });
        var max$1 = Math.max;
        var min$2 = Math.min;
        var floor$1 = Math.floor;
        var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
        var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

        var maybeToString = function maybeToString(it) {
          return it === undefined ? it : String(it);
        }; // @@replace logic


        fixRegexpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
          return [// `String.prototype.replace` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.replace
          function replace(searchValue, replaceValue) {
            var O = requireObjectCoercible(this);
            var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
            return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
          }, // `RegExp.prototype[@@replace]` method
          // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
          function (regexp, replaceValue) {
            var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            var functionalReplace = typeof replaceValue === 'function';
            if (!functionalReplace) replaceValue = String(replaceValue);
            var global = rx.global;

            if (global) {
              var fullUnicode = rx.unicode;
              rx.lastIndex = 0;
            }

            var results = [];

            while (true) {
              var result = regexpExecAbstract(rx, S);
              if (result === null) break;
              results.push(result);
              if (!global) break;
              var matchStr = String(result[0]);
              if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            }

            var accumulatedResult = '';
            var nextSourcePosition = 0;

            for (var i = 0; i < results.length; i++) {
              result = results[i];
              var matched = String(result[0]);
              var position = max$1(min$2(toInteger(result.index), S.length), 0);
              var captures = []; // NOTE: This is equivalent to
              //   captures = result.slice(1).map(maybeToString)
              // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
              // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
              // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

              for (var j = 1; j < result.length; j++) {
                captures.push(maybeToString(result[j]));
              }

              var namedCaptures = result.groups;

              if (functionalReplace) {
                var replacerArgs = [matched].concat(captures, position, S);
                if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
                var replacement = String(replaceValue.apply(undefined, replacerArgs));
              } else {
                replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
              }

              if (position >= nextSourcePosition) {
                accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                nextSourcePosition = position + matched.length;
              }
            }

            return accumulatedResult + S.slice(nextSourcePosition);
          }]; // https://tc39.github.io/ecma262/#sec-getsubstitution

          function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
            var tailPos = position + matched.length;
            var m = captures.length;
            var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

            if (namedCaptures !== undefined) {
              namedCaptures = toObject(namedCaptures);
              symbols = SUBSTITUTION_SYMBOLS;
            }

            return nativeReplace.call(replacement, symbols, function (match, ch) {
              var capture;

              switch (ch.charAt(0)) {
                case '$':
                  return '$';

                case '&':
                  return matched;

                case '`':
                  return str.slice(0, position);

                case "'":
                  return str.slice(tailPos);

                case '<':
                  capture = namedCaptures[ch.slice(1, -1)];
                  break;

                default:
                  // \d\d?
                  var n = +ch;
                  if (n === 0) return match;

                  if (n > m) {
                    var f = floor$1(n / 10);
                    if (f === 0) return match;
                    if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                    return match;
                  }

                  capture = captures[n - 1];
              }

              return capture === undefined ? '' : capture;
            });
          }
        });
        var MATCH = wellKnownSymbol('match'); // `IsRegExp` abstract operation
        // https://tc39.github.io/ecma262/#sec-isregexp

        var isRegexp = function isRegexp(it) {
          var isRegExp;
          return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
        };

        var aFunction$1 = function aFunction$1(it) {
          if (typeof it != 'function') {
            throw TypeError(String(it) + ' is not a function');
          }

          return it;
        };

        var SPECIES$1 = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
        // https://tc39.github.io/ecma262/#sec-speciesconstructor

        var speciesConstructor = function speciesConstructor(O, defaultConstructor) {
          var C = anObject(O).constructor;
          var S;
          return C === undefined || (S = anObject(C)[SPECIES$1]) == undefined ? defaultConstructor : aFunction$1(S);
        };

        var arrayPush = [].push;
        var min$3 = Math.min;
        var MAX_UINT32 = 0xFFFFFFFF; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError

        var SUPPORTS_Y = !fails(function () {
          return !RegExp(MAX_UINT32, 'y');
        }); // @@split logic

        fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
          var internalSplit;

          if ('abbc'.split(/(b)*/)[1] == 'c' || 'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
            // based on es5-shim implementation, need to rework it
            internalSplit = function internalSplit(separator, limit) {
              var string = String(requireObjectCoercible(this));
              var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
              if (lim === 0) return [];
              if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

              if (!isRegexp(separator)) {
                return nativeSplit.call(string, separator, lim);
              }

              var output = [];
              var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
              var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

              var separatorCopy = new RegExp(separator.source, flags + 'g');
              var match, lastIndex, lastLength;

              while (match = regexpExec.call(separatorCopy, string)) {
                lastIndex = separatorCopy.lastIndex;

                if (lastIndex > lastLastIndex) {
                  output.push(string.slice(lastLastIndex, match.index));
                  if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
                  lastLength = match[0].length;
                  lastLastIndex = lastIndex;
                  if (output.length >= lim) break;
                }

                if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
              }

              if (lastLastIndex === string.length) {
                if (lastLength || !separatorCopy.test('')) output.push('');
              } else output.push(string.slice(lastLastIndex));

              return output.length > lim ? output.slice(0, lim) : output;
            }; // Chakra, V8

          } else if ('0'.split(undefined, 0).length) {
            internalSplit = function internalSplit(separator, limit) {
              return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
            };
          } else internalSplit = nativeSplit;

          return [// `String.prototype.split` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.split
          function split(separator, limit) {
            var O = requireObjectCoercible(this);
            var splitter = separator == undefined ? undefined : separator[SPLIT];
            return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
          }, // `RegExp.prototype[@@split]` method
          // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
          //
          // NOTE: This cannot be properly polyfilled in engines that don't support
          // the 'y' flag.
          function (regexp, limit) {
            var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            var C = speciesConstructor(rx, RegExp);
            var unicodeMatching = rx.unicode;
            var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
            // simulate the 'y' flag.

            var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
            var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
            if (lim === 0) return [];
            if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
            var p = 0;
            var q = 0;
            var A = [];

            while (q < S.length) {
              splitter.lastIndex = SUPPORTS_Y ? q : 0;
              var z = regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
              var e;

              if (z === null || (e = min$3(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
                q = advanceStringIndex(S, q, unicodeMatching);
              } else {
                A.push(S.slice(p, q));
                if (A.length === lim) return A;

                for (var i = 1; i <= z.length - 1; i++) {
                  A.push(z[i]);
                  if (A.length === lim) return A;
                }

                q = p = e;
              }
            }

            A.push(S.slice(p));
            return A;
          }];
        }, !SUPPORTS_Y); // a string of all valid unicode whitespaces
        // eslint-disable-next-line max-len

        var whitespaces = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
        var whitespace = '[' + whitespaces + ']';
        var ltrim = RegExp('^' + whitespace + whitespace + '*');
        var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

        var createMethod$2 = function createMethod$2(TYPE) {
          return function ($this) {
            var string = String(requireObjectCoercible($this));
            if (TYPE & 1) string = string.replace(ltrim, '');
            if (TYPE & 2) string = string.replace(rtrim, '');
            return string;
          };
        };

        var stringTrim = {
          // `String.prototype.{ trimLeft, trimStart }` methods
          // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
          start: createMethod$2(1),
          // `String.prototype.{ trimRight, trimEnd }` methods
          // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
          end: createMethod$2(2),
          // `String.prototype.trim` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.trim
          trim: createMethod$2(3)
        };
        var non = "\u200B\x85\u180E"; // check that a method works with the correct list
        // of whitespaces and has a correct name

        var forcedStringTrimMethod = function forcedStringTrimMethod(METHOD_NAME) {
          return fails(function () {
            return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
          });
        };

        var $trim = stringTrim.trim; // `String.prototype.trim` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.trim

        _export({
          target: 'String',
          proto: true,
          forced: forcedStringTrimMethod('trim')
        }, {
          trim: function trim() {
            return $trim(this);
          }
        }); // iterable DOM collections
        // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods


        var domIterables = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0
        }; // optional / simple context binding

        var bindContext = function bindContext(fn, that, length) {
          aFunction$1(fn);
          if (that === undefined) return fn;

          switch (length) {
            case 0:
              return function () {
                return fn.call(that);
              };

            case 1:
              return function (a) {
                return fn.call(that, a);
              };

            case 2:
              return function (a, b) {
                return fn.call(that, a, b);
              };

            case 3:
              return function (a, b, c) {
                return fn.call(that, a, b, c);
              };
          }

          return function () {
            return fn.apply(that, arguments);
          };
        }; // `IsArray` abstract operation
        // https://tc39.github.io/ecma262/#sec-isarray


        var isArray = Array.isArray || function isArray(arg) {
          return classofRaw(arg) == 'Array';
        };

        var SPECIES$2 = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
        // https://tc39.github.io/ecma262/#sec-arrayspeciescreate

        var arraySpeciesCreate = function arraySpeciesCreate(originalArray, length) {
          var C;

          if (isArray(originalArray)) {
            C = originalArray.constructor; // cross-realm fallback

            if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
              C = C[SPECIES$2];
              if (C === null) C = undefined;
            }
          }

          return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
        };

        var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation

        var createMethod$3 = function createMethod$3(TYPE) {
          var IS_MAP = TYPE == 1;
          var IS_FILTER = TYPE == 2;
          var IS_SOME = TYPE == 3;
          var IS_EVERY = TYPE == 4;
          var IS_FIND_INDEX = TYPE == 6;
          var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
          return function ($this, callbackfn, that, specificCreate) {
            var O = toObject($this);
            var self = indexedObject(O);
            var boundFunction = bindContext(callbackfn, that, 3);
            var length = toLength(self.length);
            var index = 0;
            var create = specificCreate || arraySpeciesCreate;
            var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
            var value, result;

            for (; length > index; index++) {
              if (NO_HOLES || index in self) {
                value = self[index];
                result = boundFunction(value, index, O);

                if (TYPE) {
                  if (IS_MAP) target[index] = result; // map
                  else if (result) switch (TYPE) {
                    case 3:
                      return true;
                    // some

                    case 5:
                      return value;
                    // find

                    case 6:
                      return index;
                    // findIndex

                    case 2:
                      push.call(target, value);
                    // filter
                  } else if (IS_EVERY) return false; // every
                }
              }
            }

            return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
          };
        };

        var arrayIteration = {
          // `Array.prototype.forEach` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
          forEach: createMethod$3(0),
          // `Array.prototype.map` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.map
          map: createMethod$3(1),
          // `Array.prototype.filter` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.filter
          filter: createMethod$3(2),
          // `Array.prototype.some` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.some
          some: createMethod$3(3),
          // `Array.prototype.every` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.every
          every: createMethod$3(4),
          // `Array.prototype.find` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.find
          find: createMethod$3(5),
          // `Array.prototype.findIndex` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
          findIndex: createMethod$3(6)
        };

        var sloppyArrayMethod = function sloppyArrayMethod(METHOD_NAME, argument) {
          var method = [][METHOD_NAME];
          return !method || !fails(function () {
            // eslint-disable-next-line no-useless-call,no-throw-literal
            method.call(null, argument || function () {
              throw 1;
            }, 1);
          });
        };

        var $forEach = arrayIteration.forEach; // `Array.prototype.forEach` method implementation
        // https://tc39.github.io/ecma262/#sec-array.prototype.foreach

        var arrayForEach = sloppyArrayMethod('forEach') ? function forEach(callbackfn
        /* , thisArg */
        ) {
          return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        } : [].forEach;

        for (var COLLECTION_NAME in domIterables) {
          var Collection = global_1[COLLECTION_NAME];
          var CollectionPrototype = Collection && Collection.prototype; // some Chrome versions have non-configurable methods on DOMTokenList

          if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
            createNonEnumerableProperty(CollectionPrototype, 'forEach', arrayForEach);
          } catch (error) {
            CollectionPrototype.forEach = arrayForEach;
          }
        }
        /**
         * --------------------------------------------------------------------------
         * CoreUI Utilities (v2.1.16): get-css-custom-properties.js
         * Licensed under MIT (https://coreui.io/license)
         * @returns {string} css custom property name
         * --------------------------------------------------------------------------
         */


        var getCssCustomProperties = function getCssCustomProperties() {
          var cssCustomProperties = {};
          var sheets = document.styleSheets;
          var cssText = '';

          for (var i = sheets.length - 1; i > -1; i--) {
            var rules = sheets[i].cssRules;

            for (var j = rules.length - 1; j > -1; j--) {
              if (rules[j].selectorText === '.ie-custom-properties') {
                cssText = rules[j].cssText;
                break;
              }
            }

            if (cssText) {
              break;
            }
          }

          cssText = cssText.substring(cssText.lastIndexOf('{') + 1, cssText.lastIndexOf('}'));
          cssText.split(';').forEach(function (property) {
            if (property) {
              var name = property.split(': ')[0];
              var value = property.split(': ')[1];

              if (name && value) {
                cssCustomProperties["--" + name.trim()] = value.trim();
              }
            }
          });
          return cssCustomProperties;
        };

        var minIEVersion = 10;

        var isIE1x = function isIE1x() {
          return Boolean(document.documentMode) && document.documentMode >= minIEVersion;
        };

        var isCustomProperty = function isCustomProperty(property) {
          return property.match(/^--.*/i);
        };

        var getStyle = function getStyle(property, element) {
          if (element === void 0) {
            element = document.body;
          }

          var style;

          if (isCustomProperty(property) && isIE1x()) {
            var cssCustomProperties = getCssCustomProperties();
            style = cssCustomProperties[property];
          } else {
            style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '');
          }

          return style;
        };
        /**
         * --------------------------------------------------------------------------
         * CoreUI Utilities (v2.1.16): get-color.js
         * Licensed under MIT (https://coreui.io/license)
         * --------------------------------------------------------------------------
         */


        var getColor = function getColor(rawProperty, element) {
          if (element === void 0) {
            element = document.body;
          }

          var property = "--" + rawProperty;
          var style = getStyle(property, element);
          return style ? style : rawProperty;
        };
        /**
         * --------------------------------------------------------------------------
         * CoreUI Utilities (v2.1.16): hex-to-rgb.js
         * Licensed under MIT (https://coreui.io/license)
         * --------------------------------------------------------------------------
         */

        /* eslint-disable no-magic-numbers */


        var hexToRgb = function hexToRgb(color) {
          if (typeof color === 'undefined') {
            throw new Error('Hex color is not defined');
          }

          var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

          if (!hex) {
            throw new Error(color + " is not a valid hex color");
          }

          var r;
          var g;
          var b;

          if (color.length === 7) {
            r = parseInt(color.substring(1, 3), 16);
            g = parseInt(color.substring(3, 5), 16);
            b = parseInt(color.substring(5, 7), 16);
          } else {
            r = parseInt(color.substring(1, 2), 16);
            g = parseInt(color.substring(2, 3), 16);
            b = parseInt(color.substring(3, 5), 16);
          }

          return "rgba(" + r + ", " + g + ", " + b + ")";
        };
        /**
         * --------------------------------------------------------------------------
         * CoreUI Utilities (v2.1.16): hex-to-rgba.js
         * Licensed under MIT (https://coreui.io/license)
         * --------------------------------------------------------------------------
         */

        /* eslint-disable no-magic-numbers */


        var hexToRgba = function hexToRgba(color, opacity) {
          if (opacity === void 0) {
            opacity = 100;
          }

          if (typeof color === 'undefined') {
            throw new Error('Hex color is not defined');
          }

          var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

          if (!hex) {
            throw new Error(color + " is not a valid hex color");
          }

          var r;
          var g;
          var b;

          if (color.length === 7) {
            r = parseInt(color.substring(1, 3), 16);
            g = parseInt(color.substring(3, 5), 16);
            b = parseInt(color.substring(5, 7), 16);
          } else {
            r = parseInt(color.substring(1, 2), 16);
            g = parseInt(color.substring(2, 3), 16);
            b = parseInt(color.substring(3, 5), 16);
          }

          return "rgba(" + r + ", " + g + ", " + b + ", " + opacity / 100 + ")";
        };

        var createProperty = function createProperty(object, key, value) {
          var propertyKey = toPrimitive(key);
          if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
        };

        var userAgent = getBuiltIn('navigator', 'userAgent') || '';
        var process = global_1.process;
        var versions = process && process.versions;
        var v8 = versions && versions.v8;
        var match, version;

        if (v8) {
          match = v8.split('.');
          version = match[0] + match[1];
        } else if (userAgent) {
          match = userAgent.match(/Chrome\/(\d+)/);
          if (match) version = match[1];
        }

        var v8Version = version && +version;
        var SPECIES$3 = wellKnownSymbol('species');

        var arrayMethodHasSpeciesSupport = function arrayMethodHasSpeciesSupport(METHOD_NAME) {
          // We can't use this feature detection in V8 since it causes
          // deoptimization and serious performance degradation
          // https://github.com/zloirock/core-js/issues/677
          return v8Version >= 51 || !fails(function () {
            var array = [];
            var constructor = array.constructor = {};

            constructor[SPECIES$3] = function () {
              return {
                foo: 1
              };
            };

            return array[METHOD_NAME](Boolean).foo !== 1;
          });
        };

        var SPECIES$4 = wellKnownSymbol('species');
        var nativeSlice = [].slice;
        var max$2 = Math.max; // `Array.prototype.slice` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.slice
        // fallback for not array-like ES3 strings and DOM objects

        _export({
          target: 'Array',
          proto: true,
          forced: !arrayMethodHasSpeciesSupport('slice')
        }, {
          slice: function slice(start, end) {
            var O = toIndexedObject(this);
            var length = toLength(O.length);
            var k = toAbsoluteIndex(start, length);
            var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

            var Constructor, result, n;

            if (isArray(O)) {
              Constructor = O.constructor; // cross-realm fallback

              if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
                Constructor = undefined;
              } else if (isObject(Constructor)) {
                Constructor = Constructor[SPECIES$4];
                if (Constructor === null) Constructor = undefined;
              }

              if (Constructor === Array || Constructor === undefined) {
                return nativeSlice.call(O, k, fin);
              }
            }

            result = new (Constructor === undefined ? Array : Constructor)(max$2(fin - k, 0));

            for (n = 0; k < fin; k++, n++) {
              if (k in O) createProperty(result, n, O[k]);
            }

            result.length = n;
            return result;
          }
        });

        var TO_STRING_TAG = wellKnownSymbol('toStringTag'); // ES3 wrong here

        var CORRECT_ARGUMENTS = classofRaw(function () {
          return arguments;
        }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

        var tryGet = function tryGet(it, key) {
          try {
            return it[key];
          } catch (error) {
            /* empty */
          }
        }; // getting tag from ES6+ `Object.prototype.toString`


        var classof = function classof(it) {
          var O, tag, result;
          return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
          : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
          : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
          : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
        };

        var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
        var test = {};
        test[TO_STRING_TAG$1] = 'z'; // `Object.prototype.toString` method implementation
        // https://tc39.github.io/ecma262/#sec-object.prototype.tostring

        var objectToString = String(test) !== '[object z]' ? function toString() {
          return '[object ' + classof(this) + ']';
        } : test.toString;
        var ObjectPrototype = Object.prototype; // `Object.prototype.toString` method
        // https://tc39.github.io/ecma262/#sec-object.prototype.tostring

        if (objectToString !== ObjectPrototype.toString) {
          redefine(ObjectPrototype, 'toString', objectToString, {
            unsafe: true
          });
        }

        var TO_STRING = 'toString';
        var RegExpPrototype = RegExp.prototype;
        var nativeToString = RegExpPrototype[TO_STRING];
        var NOT_GENERIC = fails(function () {
          return nativeToString.call({
            source: 'a',
            flags: 'b'
          }) != '/a/b';
        }); // FF44- RegExp#toString has a wrong name

        var INCORRECT_NAME = nativeToString.name != TO_STRING; // `RegExp.prototype.toString` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring

        if (NOT_GENERIC || INCORRECT_NAME) {
          redefine(RegExp.prototype, TO_STRING, function toString() {
            var R = anObject(this);
            var p = String(R.source);
            var rf = R.flags;
            var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? regexpFlags.call(R) : rf);
            return '/' + p + '/' + f;
          }, {
            unsafe: true
          });
        }
        /**
         * --------------------------------------------------------------------------
         * CoreUI (v2.1.16): rgb-to-hex.js
         * Licensed under MIT (https://coreui.io/license)
         * --------------------------------------------------------------------------
         */

        /* eslint-disable no-magic-numbers */


        var rgbToHex = function rgbToHex(color) {
          if (typeof color === 'undefined') {
            throw new Error('Hex color is not defined');
          }

          if (color === 'transparent') {
            return '#00000000';
          }

          var rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

          if (!rgb) {
            throw new Error(color + " is not a valid rgb color");
          }

          var r = "0" + parseInt(rgb[1], 10).toString(16);
          var g = "0" + parseInt(rgb[2], 10).toString(16);
          var b = "0" + parseInt(rgb[3], 10).toString(16);
          return "#" + r.slice(-2) + g.slice(-2) + b.slice(-2);
        };

        exports.asideMenuCssClasses = asideMenuCssClasses;
        exports.checkBreakpoint = checkBreakpoint;
        exports.deepObjectsMerge = deepObjectsMerge;
        exports.getColor = getColor;
        exports.getStyle = getStyle;
        exports.hexToRgb = hexToRgb;
        exports.hexToRgba = hexToRgba;
        exports.rgbToHex = rgbToHex;
        exports.sidebarCssClasses = sidebarCssClasses;
        exports.validBreakpoints = validBreakpoints;
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
      }); //# sourceMappingURL=coreui-utilities.js.map

      /***/

    },

    /***/
    "P3Bu":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/dashboard/dashboard.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function P3Bu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card text-white bg-info\">\r\n        <div class=\"card-body pb-0\">\r\n          <button type=\"button\" class=\"btn btn-transparent p-0 float-right\">\r\n            <i class=\"icon-location-pin\"></i>\r\n          </button>\r\n          <div class=\"text-value\">9.823</div>\r\n          <div>Members online</div>\r\n        </div>\r\n        <div class=\"chart-wrapper mt-3 mx-3\" style=\"height:70px;\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"lineChart2Data\"\r\n          [labels]=\"lineChart2Labels\"\r\n          [options]=\"lineChart2Options\"\r\n          [colors]=\"lineChart2Colours\"\r\n          [legend]=\"lineChart2Legend\"\r\n          [chartType]=\"lineChart2Type\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card text-white bg-primary\">\r\n        <div class=\"card-body pb-0\">\r\n          <div class=\"btn-group float-right\" dropdown>\r\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\r\n              <i class=\"icon-settings\"></i>\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"text-value\">9.823</div>\r\n          <div>Members online</div>\r\n        </div>\r\n        <div class=\"chart-wrapper mt-3 mx-3\" style=\"height:70px;\">\r\n          <canvas baseChart class=\"chart\"\r\n                  [datasets]=\"lineChart1Data\"\r\n                  [labels]=\"lineChart1Labels\"\r\n                  [options]=\"lineChart1Options\"\r\n                  [colors]=\"lineChart1Colours\"\r\n                  [legend]=\"lineChart1Legend\"\r\n                  [chartType]=\"lineChart1Type\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card text-white bg-warning\">\r\n        <div class=\"card-body pb-0\">\r\n          <div class=\"btn-group float-right\" dropdown>\r\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\r\n              <i class=\"icon-settings\"></i>\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"text-value\">9.823</div>\r\n          <div>Members online</div>\r\n        </div>\r\n        <div class=\"chart-wrapper mt-3\" style=\"height:70px;\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"lineChart3Data\"\r\n          [labels]=\"lineChart3Labels\"\r\n          [options]=\"lineChart3Options\"\r\n          [colors]=\"lineChart3Colours\"\r\n          [legend]=\"lineChart3Legend\"\r\n          [chartType]=\"lineChart3Type\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card text-white bg-danger\">\r\n        <div class=\"card-body pb-0\">\r\n          <div class=\"btn-group float-right\" dropdown>\r\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\r\n              <i class=\"icon-settings\"></i>\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"text-value\">9.823</div>\r\n          <div>Members online</div>\r\n        </div>\r\n        <div class=\"chart-wrapper mt-3 mx-3\" style=\"height:70px;\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"barChart1Data\"\r\n          [labels]=\"barChart1Labels\"\r\n          [options]=\"barChart1Options\"\r\n          [colors]=\"barChart1Colours\"\r\n          [legend]=\"barChart1Legend\"\r\n          [chartType]=\"barChart1Type\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-5\">\r\n          <h4 class=\"card-title mb-0\">Traffic</h4>\r\n          <div class=\"small text-muted\">November 2017</div>\r\n        </div><!--/.col-->\r\n        <div class=\"col-sm-7 d-none d-md-block\">\r\n          <button type=\"button\" class=\"btn btn-primary float-right\"><i class=\"icon-cloud-download\"></i></button>\r\n          <div class=\"btn-group btn-group-toggle float-right mr-3\" data-toggle=\"buttons\">\r\n            <label class=\"btn btn-outline-secondary\" [(ngModel)]=\"radioModel\" btnRadio=\"Day\" id=\"option1\">Day</label>\r\n            <label class=\"btn btn-outline-secondary\" [(ngModel)]=\"radioModel\" btnRadio=\"Month\" id=\"option2\">Month</label>\r\n            <label class=\"btn btn-outline-secondary\" [(ngModel)]=\"radioModel\" btnRadio=\"Year\" id=\"option3\">Year</label>\r\n          </div>\r\n        </div><!--/.col-->\r\n      </div><!--/.row-->\r\n      <div class=\"chart-wrapper\" style=\"height:300px;margin-top:40px;\">\r\n        <canvas baseChart class=\"chart\"\r\n        [datasets]=\"mainChartData\"\r\n        [labels]=\"mainChartLabels\"\r\n        [options]=\"mainChartOptions\"\r\n        [colors]=\"mainChartColours\"\r\n        [legend]=\"mainChartLegend\"\r\n        [chartType]=\"mainChartType\"></canvas>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n      <div class=\"row text-center\">\r\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\r\n          <div class=\"text-muted\">Visits</div>\r\n          <strong>29.703 Users (40%)</strong>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\r\n          <div class=\"text-muted\">Unique</div>\r\n          <strong>24.093 Users (20%)</strong>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\r\n          <div class=\"text-muted\">Pageviews</div>\r\n          <strong>78.706 Views (60%)</strong>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 60%\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\r\n          <div class=\"text-muted\">New Users</div>\r\n          <strong>22.123 Users (80%)</strong>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\r\n          <div class=\"text-muted\">Bounce Rate</div>\r\n          <strong>40.15%</strong>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--/.card-->\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"brand-card\">\r\n        <div class=\"brand-card-header bg-facebook\">\r\n          <i class=\"fa fa-facebook\"></i>\r\n          <div class=\"chart-wrapper\">\r\n            <canvas baseChart class=\"chart\"\r\n            [datasets]=\"brandBoxChartData1\"\r\n            [labels]=\"brandBoxChartLabels\"\r\n            [options]=\"brandBoxChartOptions\"\r\n            [colors]=\"brandBoxChartColours\"\r\n            [legend]=\"brandBoxChartLegend\"\r\n            [chartType]=\"brandBoxChartType\"></canvas>\r\n          </div>\r\n        </div>\r\n        <div class=\"brand-card-body\">\r\n          <div>\r\n            <div class=\"text-value\">89k</div>\r\n            <div class=\"text-uppercase text-muted small\">friends</div>\r\n          </div>\r\n          <div>\r\n            <div class=\"text-value\">459</div>\r\n            <div class=\"text-uppercase text-muted small\">feeds</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"brand-card\">\r\n        <div class=\"brand-card-header bg-twitter\">\r\n          <i class=\"fa fa-twitter\"></i>\r\n          <div class=\"chart-wrapper\">\r\n            <canvas baseChart class=\"chart\"\r\n            [datasets]=\"brandBoxChartData2\"\r\n            [labels]=\"brandBoxChartLabels\"\r\n            [options]=\"brandBoxChartOptions\"\r\n            [colors]=\"brandBoxChartColours\"\r\n            [legend]=\"brandBoxChartLegend\"\r\n            [chartType]=\"brandBoxChartType\"></canvas>\r\n          </div>\r\n        </div>\r\n        <div class=\"brand-card-body\">\r\n          <div>\r\n            <div class=\"text-value\">973k</div>\r\n            <div class=\"text-uppercase text-muted small\">followers</div>\r\n          </div>\r\n          <div>\r\n            <div class=\"text-value\">1.792</div>\r\n            <div class=\"text-uppercase text-muted small\">tweets</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"brand-card\">\r\n        <div class=\"brand-card-header bg-linkedin\">\r\n          <i class=\"fa fa-linkedin\"></i>\r\n          <div class=\"chart-wrapper\">\r\n            <canvas baseChart class=\"chart\"\r\n            [datasets]=\"brandBoxChartData3\"\r\n            [labels]=\"brandBoxChartLabels\"\r\n            [options]=\"brandBoxChartOptions\"\r\n            [colors]=\"brandBoxChartColours\"\r\n            [legend]=\"brandBoxChartLegend\"\r\n            [chartType]=\"brandBoxChartType\"></canvas>\r\n          </div>\r\n        </div>\r\n        <div class=\"brand-card-body\">\r\n          <div>\r\n            <div class=\"text-value\">500+</div>\r\n            <div class=\"text-uppercase text-muted small\">contacts</div>\r\n          </div>\r\n          <div>\r\n            <div class=\"text-value\">292</div>\r\n            <div class=\"text-uppercase text-muted small\">feeds</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"brand-card\">\r\n        <div class=\"brand-card-header bg-google-plus\">\r\n          <i class=\"fa fa-google-plus\"></i>\r\n          <div class=\"chart-wrapper\">\r\n            <canvas baseChart class=\"chart\"\r\n            [datasets]=\"brandBoxChartData4\"\r\n            [labels]=\"brandBoxChartLabels\"\r\n            [options]=\"brandBoxChartOptions\"\r\n            [colors]=\"brandBoxChartColours\"\r\n            [legend]=\"brandBoxChartLegend\"\r\n            [chartType]=\"brandBoxChartType\"></canvas>\r\n          </div>\r\n        </div>\r\n        <div class=\"brand-card-body\">\r\n          <div>\r\n            <div class=\"text-value\">894</div>\r\n            <div class=\"text-uppercase text-muted small\">followers</div>\r\n          </div>\r\n          <div>\r\n            <div class=\"text-value\">92</div>\r\n            <div class=\"text-uppercase text-muted small\">circles</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Traffic &amp; Sales\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"callout callout-info\">\r\n                    <small class=\"text-muted\">New Clients</small>\r\n                    <br>\r\n                    <strong class=\"h4\">9,123</strong>\r\n                  </div>\r\n                </div><!--/.col-->\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"callout callout-danger\">\r\n                    <small class=\"text-muted\">Recuring Clients</small>\r\n                    <br>\r\n                    <strong class=\"h4\">22,643</strong>\r\n                  </div>\r\n                </div><!--/.col-->\r\n              </div><!--/.row-->\r\n              <hr class=\"mt-0\">\r\n              <div class=\"progress-group mb-4\">\r\n                <div class=\"progress-group-prepend\">\r\n                  <span class=\"progress-group-text\">\r\n                    Monday\r\n                  </span>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 34%\" aria-valuenow=\"34\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 78%\" aria-valuenow=\"78\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-group mb-4\">\r\n                <div class=\"progress-group-prepend\">\r\n                  <span class=\"progress-group-text\">\r\n                    Tuesday\r\n                  </span>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 56%\" aria-valuenow=\"56\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 94%\" aria-valuenow=\"94\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-group mb-4\">\r\n                <div class=\"progress-group-prepend\">\r\n                  <span class=\"progress-group-text\">\r\n                    Wednesday\r\n                  </span>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 12%\" aria-valuenow=\"12\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 67%\" aria-valuenow=\"67\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-group mb-4\">\r\n                <div class=\"progress-group-prepend\">\r\n                  <span class=\"progress-group-text\">\r\n                    Thursday\r\n                  </span>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 91%\" aria-valuenow=\"91\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-group mb-4\">\r\n                <div class=\"progress-group-prepend\">\r\n                  <span class=\"progress-group-text\">\r\n                    Friday\r\n                  </span>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 22%\" aria-valuenow=\"22\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 73%\" aria-valuenow=\"73\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-group mb-4\">\r\n                <div class=\"progress-group-prepend\">\r\n                  <span class=\"progress-group-text\">\r\n                    Saturday\r\n                  </span>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 53%\" aria-valuenow=\"53\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 82%\" aria-valuenow=\"82\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-group mb-4\">\r\n                <div class=\"progress-group-prepend\">\r\n                  <span class=\"progress-group-text\">\r\n                    Sunday\r\n                  </span>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 9%\" aria-valuenow=\"9\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 69%\" aria-valuenow=\"69\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div><!--/.col-->\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"callout callout-warning\">\r\n                    <small class=\"text-muted\">Pageviews</small>\r\n                    <br>\r\n                    <strong class=\"h4\">78,623</strong>\r\n                  </div>\r\n                </div><!--/.col-->\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"callout callout-success\">\r\n                    <small class=\"text-muted\">Organic</small>\r\n                    <br>\r\n                    <strong class=\"h4\">49,123</strong>\r\n                  </div>\r\n                </div><!--/.col-->\r\n              </div><!--/.row-->\r\n              <hr class=\"mt-0\">\r\n              <div class=\"progress-group\">\r\n                <div class=\"progress-group-header\">\r\n                  <i class=\"icon-user progress-group-icon\"></i>\r\n                  <div>Male</div>\r\n                  <div class=\"ml-auto font-weight-bold\">43%</div>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-group mb-5\">\r\n                <div class=\"progress-group-header\">\r\n                  <i class=\"icon-user-female progress-group-icon\"></i>\r\n                  <div>Female</div>\r\n                  <div class=\"ml-auto font-weight-bold\">37%</div>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-group\">\r\n                <div class=\"progress-group-header align-items-end\">\r\n                  <i class=\"icon-globe progress-group-icon\"></i>\r\n                  <div>Organic Search</div>\r\n                  <div class=\"ml-auto font-weight-bold mr-2\">191.235</div>\r\n                  <div class=\"text-muted small\">(56%)</div>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 56%\" aria-valuenow=\"56\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-group\">\r\n                <div class=\"progress-group-header align-items-end\">\r\n                  <i class=\"icon-social-facebook progress-group-icon\"></i>\r\n                  <div>Facebook</div>\r\n                  <div class=\"ml-auto font-weight-bold mr-2\">51.223</div>\r\n                  <div class=\"text-muted small\">(15%)</div>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 15%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-group\">\r\n                <div class=\"progress-group-header align-items-end\">\r\n                  <i class=\"icon-social-twitter progress-group-icon\"></i>\r\n                  <div>Twitter</div>\r\n                  <div class=\"ml-auto font-weight-bold mr-2\">37.564</div>\r\n                  <div class=\"text-muted small\">(11%)</div>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 11%\" aria-valuenow=\"11\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-group\">\r\n                <div class=\"progress-group-header align-items-end\">\r\n                  <i class=\"icon-social-linkedin progress-group-icon\"></i>\r\n                  <div>LinkedIn</div>\r\n                  <div class=\"ml-auto font-weight-bold mr-2\">27.319</div>\r\n                  <div class=\"text-muted small\">(8%)</div>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 8%\" aria-valuenow=\"8\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div><!--/.col-->\r\n          </div><!--/.row-->\r\n          <br>\r\n          <table class=\"table table-responsive-sm table-hover table-outline mb-0\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th class=\"text-center\"><i class=\"icon-people\"></i></th>\r\n                <th>User</th>\r\n                <th class=\"text-center\">Country</th>\r\n                <th>Usage</th>\r\n                <th class=\"text-center\">Payment Method</th>\r\n                <th>Activity</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/1.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                    <span class=\"avatar-status badge-success\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>Yiorgos Avraamu</div>\r\n                  <div class=\"small text-muted\">\r\n                    <span>New</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"flag-icon flag-icon-us h4 mb-0\" title=\"us\" id=\"us\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>50%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-cc-mastercard\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>10 sec ago</strong>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                    <span class=\"avatar-status badge-danger\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>Avram Tarasios</div>\r\n                  <div class=\"small text-muted\">\r\n\r\n                    <span>Recurring</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"flag-icon flag-icon-br h4 mb-0\" title=\"br\" id=\"br\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>10%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-cc-visa\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>5 minutes ago</strong>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                    <span class=\"avatar-status badge-warning\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>Quintin Ed</div>\r\n                  <div class=\"small text-muted\">\r\n                    <span>New</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"flag-icon flag-icon-in h4 mb-0\" title=\"in\" id=\"in\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>74%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 74%\" aria-valuenow=\"74\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-cc-stripe\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>1 hour ago</strong>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                    <span class=\"avatar-status badge-secondary\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>En??as Kwadwo</div>\r\n                  <div class=\"small text-muted\">\r\n                    <span>New</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"flag-icon flag-icon-fr h4 mb-0\" title=\"fr\" id=\"fr\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>98%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 98%\" aria-valuenow=\"98\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-paypal\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>Last month</strong>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                    <span class=\"avatar-status badge-success\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>Agapetus Tade????</div>\r\n                  <div class=\"small text-muted\">\r\n                    <span>New</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"flag-icon flag-icon-es h4 mb-0\" title=\"es\" id=\"es\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>22%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 22%\" aria-valuenow=\"22\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-google-wallet\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>Last week</strong>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                    <span class=\"avatar-status badge-danger\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>Friderik D??vid</div>\r\n                  <div class=\"small text-muted\">\r\n                    <span>New</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"flag-icon flag-icon-pl h4 mb-0\" title=\"pl\" id=\"pl\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>43%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-cc-amex\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>Yesterday</strong>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n</div>\r\n";
      /***/
    },

    /***/
    "aHM3":
    /*!******************************************************************************!*\
      !*** ./node_modules/ngx-bootstrap/buttons/fesm2015/ngx-bootstrap-buttons.js ***!
      \******************************************************************************/

    /*! exports provided: ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective, ButtonsModule, ??a, ??b, ??c */

    /***/
    function aHM3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonCheckboxDirective", function () {
        return ButtonCheckboxDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonRadioDirective", function () {
        return ButtonRadioDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonRadioGroupDirective", function () {
        return ButtonRadioGroupDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonsModule", function () {
        return ButtonsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??a", function () {
        return CHECKBOX_CONTROL_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??b", function () {
        return RADIO_CONTROL_VALUE_ACCESSOR$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??c", function () {
        return RADIO_CONTROL_VALUE_ACCESSOR;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // TODO: config: activeClass - Class to apply to the checked buttons

      /** @type {?} */


      var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],

        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return ButtonCheckboxDirective;
        }),
        multi: true
      };
      /**
       * Add checkbox functionality to any element
       */

      var ButtonCheckboxDirective = /*#__PURE__*/function () {
        function ButtonCheckboxDirective() {
          _classCallCheck(this, ButtonCheckboxDirective);

          /**
           * Truthy value, will be set to ngModel
           */
          this.btnCheckboxTrue = true;
          /**
           * Falsy value, will be set to ngModel
           */

          this.btnCheckboxFalse = false;
          this.state = false;
          this.onChange = Function.prototype;
          this.onTouched = Function.prototype;
        } // view -> model

        /**
         * @return {?}
         */


        _createClass(ButtonCheckboxDirective, [{
          key: "onClick",
          value: function onClick() {
            if (this.isDisabled) {
              return;
            }

            this.toggle(!this.state);
            this.onChange(this.value);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.toggle(this.trueValue === this.value);
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "trueValue",
          get: function get() {
            return typeof this.btnCheckboxTrue !== 'undefined' ? this.btnCheckboxTrue : true;
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "falseValue",
          get: function get() {
            return typeof this.btnCheckboxFalse !== 'undefined' ? this.btnCheckboxFalse : false;
          }
          /**
           * @param {?} state
           * @return {?}
           */

        }, {
          key: "toggle",
          value: function toggle(state) {
            this.state = state;
            this.value = this.state ? this.trueValue : this.falseValue;
          } // ControlValueAccessor
          // model -> view

          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.state = this.trueValue === value;
            this.value = value ? this.trueValue : this.falseValue;
          }
          /**
           * @param {?} isDisabled
           * @return {?}
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.isDisabled = isDisabled;
          }
          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
        }]);

        return ButtonCheckboxDirective;
      }();

      ButtonCheckboxDirective.??fac = function ButtonCheckboxDirective_Factory(t) {
        return new (t || ButtonCheckboxDirective)();
      };

      ButtonCheckboxDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: ButtonCheckboxDirective,
        selectors: [["", "btnCheckbox", ""]],
        hostVars: 3,
        hostBindings: function ButtonCheckboxDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ButtonCheckboxDirective_click_HostBindingHandler() {
              return ctx.onClick();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-pressed", ctx.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("active", ctx.state);
          }
        },
        inputs: {
          btnCheckboxTrue: "btnCheckboxTrue",
          btnCheckboxFalse: "btnCheckboxFalse"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([CHECKBOX_CONTROL_VALUE_ACCESSOR])]
      });
      ButtonCheckboxDirective.propDecorators = {
        btnCheckboxTrue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        btnCheckboxFalse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.active']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.aria-pressed']
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ButtonCheckboxDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[btnCheckbox]',
            providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
          }]
        }], function () {
          return [];
        }, {
          btnCheckboxTrue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          btnCheckboxFalse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.active']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-pressed']
          }],
          // view -> model

          /**
           * @return {?}
           */
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var RADIO_CONTROL_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],

        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return ButtonRadioDirective;
        }),
        multi: true
      };
      /**
       * Create radio buttons or groups of buttons.
       * A value of a selected button is bound to a variable specified via ngModel.
       */

      var ButtonRadioDirective = /*#__PURE__*/function () {
        /**
         * @param {?} el
         * @param {?} cdr
         * @param {?} renderer
         * @param {?} group
         */
        function ButtonRadioDirective(el, cdr, renderer, group) {
          _classCallCheck(this, ButtonRadioDirective);

          this.el = el;
          this.cdr = cdr;
          this.renderer = renderer;
          this.group = group;
          this.onChange = Function.prototype;
          this.onTouched = Function.prototype;
          this.role = 'radio';
          this._hasFocus = false;
        }
        /**
         * Current value of radio component or group
         * @return {?}
         */


        _createClass(ButtonRadioDirective, [{
          key: "value",
          get: function get() {
            return this.group ? this.group.value : this._value;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            if (this.group) {
              this.group.value = value;
              return;
            }

            this._value = value;
          }
          /**
           * If `true` ??? radio button is disabled
           * @return {?}
           */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          }
          /**
           * @param {?} disabled
           * @return {?}
           */
          ,
          set: function set(disabled) {
            this.setDisabledState(disabled);
          }
          /**
           * @return {?}
           */

        }, {
          key: "controlOrGroupDisabled",
          get: function get() {
            return this.disabled || this.group && this.group.disabled ? true : undefined;
          }
          /**
           * @return {?}
           */

        }, {
          key: "hasDisabledClass",
          get: function get() {
            // Although the radio is disabled the active radio should still stand out.
            // The disabled class will prevent this so don't add it on the active radio
            return this.controlOrGroupDisabled && !this.isActive;
          }
          /**
           * @return {?}
           */

        }, {
          key: "isActive",
          get: function get() {
            return this.btnRadio === this.value;
          }
          /**
           * @return {?}
           */

        }, {
          key: "tabindex",
          get: function get() {
            if (this.controlOrGroupDisabled) {
              // Disabled radio buttons should not receive focus
              return undefined;
            } else if (this.isActive || this.group == null) {
              return 0;
            } else {
              return -1;
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "hasFocus",
          get: function get() {
            return this._hasFocus;
          }
          /**
           * @return {?}
           */

        }, {
          key: "toggleIfAllowed",
          value: function toggleIfAllowed() {
            if (!this.canToggle()) {
              return;
            }

            this.value = this.uncheckable && this.btnRadio === this.value ? undefined : this.btnRadio;

            this._onChange(this.value);
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onSpacePressed",
          value: function onSpacePressed(event) {
            this.toggleIfAllowed();
            event.preventDefault();
          }
          /**
           * @return {?}
           */

        }, {
          key: "focus",
          value: function focus() {
            this.el.nativeElement.focus();
          }
          /**
           * @return {?}
           */

        }, {
          key: "onFocus",
          value: function onFocus() {
            this._hasFocus = true;
          }
          /**
           * @return {?}
           */

        }, {
          key: "onBlur",
          value: function onBlur() {
            this._hasFocus = false;
            this.onTouched();
          }
          /**
           * @return {?}
           */

        }, {
          key: "canToggle",
          value: function canToggle() {
            return !this.controlOrGroupDisabled && (this.uncheckable || this.btnRadio !== this.value);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.uncheckable = typeof this.uncheckable !== 'undefined';
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "_onChange",
          value: function _onChange(value) {
            if (this.group) {
              this.group.value = value;
              return;
            }

            this.onTouched();
            this.onChange(value);
          } // ControlValueAccessor
          // model -> view

          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.value = value;
            this.cdr.markForCheck();
          }
          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * @param {?} disabled
           * @return {?}
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(disabled) {
            this._disabled = disabled;

            if (disabled) {
              this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
              return;
            }

            this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
          }
        }]);

        return ButtonRadioDirective;
      }();

      ButtonRadioDirective.??fac = function ButtonRadioDirective_Factory(t) {
        return new (t || ButtonRadioDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return ButtonRadioGroupDirective;
        }), 8));
      };

      ButtonRadioDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: ButtonRadioDirective,
        selectors: [["", "btnRadio", ""]],
        hostVars: 8,
        hostBindings: function ButtonRadioDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ButtonRadioDirective_click_HostBindingHandler() {
              return ctx.toggleIfAllowed();
            })("keydown.space", function ButtonRadioDirective_keydown_space_HostBindingHandler($event) {
              return ctx.onSpacePressed($event);
            })("focus", function ButtonRadioDirective_focus_HostBindingHandler() {
              return ctx.onFocus();
            })("blur", function ButtonRadioDirective_blur_HostBindingHandler() {
              return ctx.onBlur();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("role", ctx.role)("aria-disabled", ctx.controlOrGroupDisabled)("aria-checked", ctx.isActive)("tabindex", ctx.tabindex);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("disabled", ctx.hasDisabledClass)("active", ctx.isActive);
          }
        },
        inputs: {
          value: "value",
          disabled: "disabled",
          uncheckable: "uncheckable",
          btnRadio: "btnRadio"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([RADIO_CONTROL_VALUE_ACCESSOR])]
      });
      /** @nocollapse */

      ButtonRadioDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: ButtonRadioGroupDirective,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return ButtonRadioGroupDirective;
            })]
          }]
        }];
      };

      ButtonRadioDirective.propDecorators = {
        btnRadio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        uncheckable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        controlOrGroupDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.aria-disabled']
        }],
        hasDisabledClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.disabled']
        }],
        isActive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.active']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.aria-checked']
        }],
        role: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.role']
        }],
        tabindex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.tabindex']
        }],
        toggleIfAllowed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }],
        onSpacePressed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.space', ['$event']]
        }],
        onFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['focus']
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['blur']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ButtonRadioDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[btnRadio]',
            providers: [RADIO_CONTROL_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: ButtonRadioGroupDirective,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
              /**
              * @return {?}
              */
              function () {
                return ButtonRadioGroupDirective;
              })]
            }]
          }];
        }, {
          role: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.role']
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          controlOrGroupDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-disabled']
          }],
          hasDisabledClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.disabled']
          }],
          isActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.active']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-checked']
          }],
          tabindex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.tabindex']
          }],

          /**
           * @return {?}
           */
          toggleIfAllowed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onSpacePressed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown.space', ['$event']]
          }],

          /**
           * @return {?}
           */
          onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focus']
          }],

          /**
           * @return {?}
           */
          onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['blur']
          }],
          uncheckable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          btnRadio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var RADIO_CONTROL_VALUE_ACCESSOR$1 = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],

        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return ButtonRadioGroupDirective;
        }),
        multi: true
      };
      /**
       * A group of radio buttons.
       * A value of a selected button is bound to a variable specified via ngModel.
       */

      var ButtonRadioGroupDirective = /*#__PURE__*/function () {
        /**
         * @param {?} cdr
         */
        function ButtonRadioGroupDirective(cdr) {
          _classCallCheck(this, ButtonRadioGroupDirective);

          this.cdr = cdr;
          this.onChange = Function.prototype;
          this.onTouched = Function.prototype;
          this.role = 'radiogroup';
        }
        /**
         * @return {?}
         */


        _createClass(ButtonRadioGroupDirective, [{
          key: "value",
          get: function get() {
            return this._value;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._value = value;
            this.onChange(value);
          }
          /**
           * @return {?}
           */

        }, {
          key: "tabindex",
          get: function get() {
            if (this._disabled) {
              return null;
            } else {
              return 0;
            }
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this._value = value;
            this.cdr.markForCheck();
          }
          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * @param {?} disabled
           * @return {?}
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(disabled) {
            if (this.radioButtons) {
              this._disabled = disabled;
              this.radioButtons.forEach(
              /**
              * @param {?} buttons
              * @return {?}
              */
              function (buttons) {
                buttons.setDisabledState(disabled);
              });
              this.cdr.markForCheck();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onFocus",
          value: function onFocus() {
            if (this._disabled) {
              return;
            }
            /** @type {?} */


            var activeRadio = this.getActiveOrFocusedRadio();

            if (activeRadio) {
              activeRadio.focus();
            } else {
              /** @type {?} */
              var firstEnabled = this.radioButtons.find(
              /**
              * @param {?} r
              * @return {?}
              */
              function (r) {
                return !r.disabled;
              });

              if (firstEnabled) {
                firstEnabled.focus();
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onBlur",
          value: function onBlur() {
            if (this.onTouched) {
              this.onTouched();
            }
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "selectNext",
          value: function selectNext(event) {
            this.selectInDirection('next');
            event.preventDefault();
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "selectPrevious",
          value: function selectPrevious(event) {
            this.selectInDirection('previous');
            event.preventDefault();
          }
          /**
           * @return {?}
           */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          }
          /**
           * @private
           * @param {?} direction
           * @return {?}
           */

        }, {
          key: "selectInDirection",
          value: function selectInDirection(direction) {
            if (this._disabled) {
              return;
            }
            /**
             * @param {?} currentIndex
             * @param {?} buttonRadioDirectives
             * @return {?}
             */


            function nextIndex(currentIndex, buttonRadioDirectives) {
              /** @type {?} */
              var step = direction === 'next' ? 1 : -1;
              /** @type {?} */

              var calcIndex = (currentIndex + step) % buttonRadioDirectives.length;

              if (calcIndex < 0) {
                calcIndex = buttonRadioDirectives.length - 1;
              }

              return calcIndex;
            }
            /** @type {?} */


            var activeRadio = this.getActiveOrFocusedRadio();

            if (activeRadio) {
              /** @type {?} */
              var buttonRadioDirectives = this.radioButtons.toArray();
              /** @type {?} */

              var currentActiveIndex = buttonRadioDirectives.indexOf(activeRadio);

              for (var i = nextIndex(currentActiveIndex, buttonRadioDirectives); i !== currentActiveIndex; i = nextIndex(i, buttonRadioDirectives)) {
                if (buttonRadioDirectives[i].canToggle()) {
                  buttonRadioDirectives[i].toggleIfAllowed();
                  buttonRadioDirectives[i].focus();
                  break;
                }
              }
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "getActiveOrFocusedRadio",
          value: function getActiveOrFocusedRadio() {
            return this.radioButtons.find(
            /**
            * @param {?} button
            * @return {?}
            */
            function (button) {
              return button.isActive;
            }) || this.radioButtons.find(
            /**
            * @param {?} button
            * @return {?}
            */
            function (button) {
              return button.hasFocus;
            });
          }
        }]);

        return ButtonRadioGroupDirective;
      }();

      ButtonRadioGroupDirective.??fac = function ButtonRadioGroupDirective_Factory(t) {
        return new (t || ButtonRadioGroupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      ButtonRadioGroupDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: ButtonRadioGroupDirective,
        selectors: [["", "btnRadioGroup", ""]],
        contentQueries: function ButtonRadioGroupDirective_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????contentQuery"](dirIndex, ButtonRadioDirective, 0);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.radioButtons = _t);
          }
        },
        hostVars: 2,
        hostBindings: function ButtonRadioGroupDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("focus", function ButtonRadioGroupDirective_focus_HostBindingHandler() {
              return ctx.onFocus();
            })("blur", function ButtonRadioGroupDirective_blur_HostBindingHandler() {
              return ctx.onBlur();
            })("keydown.ArrowRight", function ButtonRadioGroupDirective_keydown_ArrowRight_HostBindingHandler($event) {
              return ctx.selectNext($event);
            })("keydown.ArrowDown", function ButtonRadioGroupDirective_keydown_ArrowDown_HostBindingHandler($event) {
              return ctx.selectNext($event);
            })("keydown.ArrowLeft", function ButtonRadioGroupDirective_keydown_ArrowLeft_HostBindingHandler($event) {
              return ctx.selectPrevious($event);
            })("keydown.ArrowUp", function ButtonRadioGroupDirective_keydown_ArrowUp_HostBindingHandler($event) {
              return ctx.selectPrevious($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("role", ctx.role)("tabindex", ctx.tabindex);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([RADIO_CONTROL_VALUE_ACCESSOR$1])]
      });
      /** @nocollapse */

      ButtonRadioGroupDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      ButtonRadioGroupDirective.propDecorators = {
        role: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.role']
        }],
        radioButtons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return ButtonRadioDirective;
          })]
        }],
        tabindex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.tabindex']
        }],
        onFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['focus']
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['blur']
        }],
        selectNext: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.ArrowRight', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.ArrowDown', ['$event']]
        }],
        selectPrevious: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.ArrowLeft', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.ArrowUp', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ButtonRadioGroupDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[btnRadioGroup]',
            providers: [RADIO_CONTROL_VALUE_ACCESSOR$1]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          role: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.role']
          }],
          tabindex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.tabindex']
          }],

          /**
           * @return {?}
           */
          onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focus']
          }],

          /**
           * @return {?}
           */
          onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['blur']
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          selectNext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown.ArrowRight', ['$event']]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown.ArrowDown', ['$event']]
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          selectPrevious: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown.ArrowLeft', ['$event']]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown.ArrowUp', ['$event']]
          }],
          radioButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return ButtonRadioDirective;
            })]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ButtonsModule = /*#__PURE__*/function () {
        function ButtonsModule() {
          _classCallCheck(this, ButtonsModule);
        }

        _createClass(ButtonsModule, null, [{
          key: "forRoot",
          value:
          /**
           * @return {?}
           */
          function forRoot() {
            return {
              ngModule: ButtonsModule,
              providers: []
            };
          }
        }]);

        return ButtonsModule;
      }();

      ButtonsModule.??fac = function ButtonsModule_Factory(t) {
        return new (t || ButtonsModule)();
      };

      ButtonsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ButtonsModule
      });
      ButtonsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({});

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ButtonsModule, {
          declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
          exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ButtonsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
            exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-bootstrap-buttons.js.map

      /***/

    },

    /***/
    "jUYC":
    /*!*************************************************************!*\
      !*** ./src/app/views/dashboard/dashboard-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: DashboardRoutingModule */

    /***/
    function jUYC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
        return DashboardRoutingModule;
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


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard.component */
      "l70X");

      var routes = [{
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        data: {
          title: 'Dashboard'
        }
      }];

      var DashboardRoutingModule = /*#__PURE__*/_createClass(function DashboardRoutingModule() {
        _classCallCheck(this, DashboardRoutingModule);
      });

      DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DashboardRoutingModule);
      /***/
    },

    /***/
    "l70X":
    /*!********************************************************!*\
      !*** ./src/app/views/dashboard/dashboard.component.ts ***!
      \********************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function l70X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "P3Bu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @coreui/coreui/dist/js/coreui-utilities */
      "NuRj");
      /* harmony import */


      var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @coreui/coreui-plugin-chartjs-custom-tooltips */
      "H++W");
      /* harmony import */


      var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4__);

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);

          this.radioModel = 'Month'; // lineChart1

          this.lineChart1Data = [{
            data: [65, 59, 84, 84, 51, 55, 40],
            label: 'Series A'
          }];
          this.lineChart1Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
          this.lineChart1Options = {
            tooltips: {
              enabled: false,
              custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                gridLines: {
                  color: 'transparent',
                  zeroLineColor: 'transparent'
                },
                ticks: {
                  fontSize: 2,
                  fontColor: 'transparent'
                }
              }],
              yAxes: [{
                display: false,
                ticks: {
                  display: false,
                  min: 40 - 5,
                  max: 84 + 5
                }
              }]
            },
            elements: {
              line: {
                borderWidth: 1
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
              }
            },
            legend: {
              display: false
            }
          };
          this.lineChart1Colours = [{
            backgroundColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__["getStyle"])('--primary'),
            borderColor: 'rgba(255,255,255,.55)'
          }];
          this.lineChart1Legend = false;
          this.lineChart1Type = 'line'; // lineChart2

          this.lineChart2Data = [{
            data: [1, 18, 9, 17, 34, 22, 11],
            label: 'Series A'
          }];
          this.lineChart2Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
          this.lineChart2Options = {
            tooltips: {
              enabled: false,
              custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                gridLines: {
                  color: 'transparent',
                  zeroLineColor: 'transparent'
                },
                ticks: {
                  fontSize: 2,
                  fontColor: 'transparent'
                }
              }],
              yAxes: [{
                display: false,
                ticks: {
                  display: false,
                  min: 1 - 5,
                  max: 34 + 5
                }
              }]
            },
            elements: {
              line: {
                tension: 0.00001,
                borderWidth: 1
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
              }
            },
            legend: {
              display: false
            }
          };
          this.lineChart2Colours = [{
            backgroundColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__["getStyle"])('--info'),
            borderColor: 'rgba(255,255,255,.55)'
          }];
          this.lineChart2Legend = false;
          this.lineChart2Type = 'line'; // lineChart3

          this.lineChart3Data = [{
            data: [78, 81, 80, 45, 34, 12, 40],
            label: 'Series A'
          }];
          this.lineChart3Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
          this.lineChart3Options = {
            tooltips: {
              enabled: false,
              custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                display: false
              }],
              yAxes: [{
                display: false
              }]
            },
            elements: {
              line: {
                borderWidth: 2
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4
              }
            },
            legend: {
              display: false
            }
          };
          this.lineChart3Colours = [{
            backgroundColor: 'rgba(255,255,255,.2)',
            borderColor: 'rgba(255,255,255,.55)'
          }];
          this.lineChart3Legend = false;
          this.lineChart3Type = 'line'; // barChart1

          this.barChart1Data = [{
            data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
            label: 'Series A',
            barPercentage: 0.6
          }];
          this.barChart1Labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
          this.barChart1Options = {
            tooltips: {
              enabled: false,
              custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                display: false
              }],
              yAxes: [{
                display: false
              }]
            },
            legend: {
              display: false
            }
          };
          this.barChart1Colours = [{
            backgroundColor: 'rgba(255,255,255,.3)',
            borderWidth: 0
          }];
          this.barChart1Legend = false;
          this.barChart1Type = 'bar'; // mainChart

          this.mainChartElements = 27;
          this.mainChartData1 = [];
          this.mainChartData2 = [];
          this.mainChartData3 = [];
          this.mainChartData = [{
            data: this.mainChartData1,
            label: 'Current'
          }, {
            data: this.mainChartData2,
            label: 'Previous'
          }, {
            data: this.mainChartData3,
            label: 'BEP'
          }];
          /* tslint:disable:max-line-length */

          this.mainChartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
          /* tslint:enable:max-line-length */

          this.mainChartOptions = {
            tooltips: {
              enabled: false,
              custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4__["CustomTooltips"],
              intersect: true,
              mode: 'index',
              position: 'nearest',
              callbacks: {
                labelColor: function labelColor(tooltipItem, chart) {
                  return {
                    backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor
                  };
                }
              }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                gridLines: {
                  drawOnChartArea: false
                },
                ticks: {
                  callback: function callback(value) {
                    return value.charAt(0);
                  }
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  maxTicksLimit: 5,
                  stepSize: Math.ceil(250 / 5),
                  max: 250
                }
              }]
            },
            elements: {
              line: {
                borderWidth: 2
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3
              }
            },
            legend: {
              display: false
            }
          };
          this.mainChartColours = [{
            backgroundColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__["hexToRgba"])(Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__["getStyle"])('--info'), 10),
            borderColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__["getStyle"])('--info'),
            pointHoverBackgroundColor: '#fff'
          }, {
            backgroundColor: 'transparent',
            borderColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__["getStyle"])('--success'),
            pointHoverBackgroundColor: '#fff'
          }, {
            backgroundColor: 'transparent',
            borderColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_3__["getStyle"])('--danger'),
            pointHoverBackgroundColor: '#fff',
            borderWidth: 1,
            borderDash: [8, 5]
          }];
          this.mainChartLegend = false;
          this.mainChartType = 'line'; // social box charts

          this.brandBoxChartData1 = [{
            data: [65, 59, 84, 84, 51, 55, 40],
            label: 'Facebook'
          }];
          this.brandBoxChartData2 = [{
            data: [1, 13, 9, 17, 34, 41, 38],
            label: 'Twitter'
          }];
          this.brandBoxChartData3 = [{
            data: [78, 81, 80, 45, 34, 12, 40],
            label: 'LinkedIn'
          }];
          this.brandBoxChartData4 = [{
            data: [35, 23, 56, 22, 97, 23, 64],
            label: 'Google+'
          }];
          this.brandBoxChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
          this.brandBoxChartOptions = {
            tooltips: {
              enabled: false,
              custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_4__["CustomTooltips"]
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                display: false
              }],
              yAxes: [{
                display: false
              }]
            },
            elements: {
              line: {
                borderWidth: 2
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3
              }
            },
            legend: {
              display: false
            }
          };
          this.brandBoxChartColours = [{
            backgroundColor: 'rgba(255,255,255,.1)',
            borderColor: 'rgba(255,255,255,.55)',
            pointHoverBackgroundColor: '#fff'
          }];
          this.brandBoxChartLegend = false;
          this.brandBoxChartType = 'line';
        }

        _createClass(DashboardComponent, [{
          key: "random",
          value: function random(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            // generate random values for mainChart
            for (var i = 0; i <= this.mainChartElements; i++) {
              this.mainChartData1.push(this.random(50, 200));
              this.mainChartData2.push(this.random(80, 100));
              this.mainChartData3.push(65);
            }
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], DashboardComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-dashboard-dashboard-module-es5.js.map