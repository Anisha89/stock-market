(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-users-users-module"],{

/***/ "+L30":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/restArguments.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return restArguments; });
// Some functions take a variable number of arguments, or a few expected
// arguments at the beginning and then a variable number of values to operate
// on. This helper accumulates all remaining arguments past the function’s
// argument length (or an explicit `startIndex`), into an array that becomes
// the last argument. Similar to ES6’s "rest parameter".
function restArguments(func, startIndex) {
  startIndex = startIndex == null ? func.length - 1 : +startIndex;
  return function() {
    var length = Math.max(arguments.length - startIndex, 0),
        rest = Array(length),
        index = 0;
    for (; index < length; index++) {
      rest[index] = arguments[index + startIndex];
    }
    switch (startIndex) {
      case 0: return func.call(this, rest);
      case 1: return func.call(this, arguments[0], rest);
      case 2: return func.call(this, arguments[0], arguments[1], rest);
    }
    var args = Array(startIndex + 1);
    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index];
    }
    args[startIndex] = rest;
    return func.apply(this, args);
  };
}


/***/ }),

/***/ "+g8h":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/_getLength.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shallowProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_shallowProperty.js */ "bG0f");


// Internal helper to obtain the `length` property of an object.
/* harmony default export */ __webpack_exports__["default"] = (Object(_shallowProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])('length'));


/***/ }),

/***/ "+gt/":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/_flatten.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return flatten; });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ "+g8h");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ "PXqf");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ "XYRq");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArguments.js */ "qeMZ");





// Internal implementation of a recursive `flatten` function.
function flatten(input, depth, strict, output) {
  output = output || [];
  if (!depth && depth !== 0) {
    depth = Infinity;
  } else if (depth <= 0) {
    return output.concat(input);
  }
  var idx = output.length;
  for (var i = 0, length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input); i < length; i++) {
    var value = input[i];
    if (Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || Object(_isArguments_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value))) {
      // Flatten current level of array or arguments object.
      if (depth > 1) {
        flatten(value, depth - 1, strict, output);
        idx = output.length;
      } else {
        var j = 0, len = value.length;
        while (j < len) output[idx++] = value[j++];
      }
    } else if (!strict) {
      output[idx++] = value;
    }
  }
  return output;
}


/***/ }),

/***/ "+xCn":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/propertyOf.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return propertyOf; });
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop.js */ "7mzy");
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get.js */ "G/cX");



// Generates a function for a given object that returns a given property.
function propertyOf(obj) {
  if (obj == null) return _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  return function(path) {
    return Object(_get_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, path);
  };
}


/***/ }),

/***/ "/HDF":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/uniq.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uniq; });
/* harmony import */ var _isBoolean_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isBoolean.js */ "oB1/");
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_cb.js */ "ssMU");
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getLength.js */ "+g8h");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contains.js */ "rJva");





// Produce a duplicate-free version of the array. If the array has already
// been sorted, you have the option of using a faster algorithm.
// The faster algorithm will not work with an iteratee if the iteratee
// is not a one-to-one function, so providing an iteratee will disable
// the faster algorithm.
function uniq(array, isSorted, iteratee, context) {
  if (!Object(_isBoolean_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isSorted)) {
    context = iteratee;
    iteratee = isSorted;
    isSorted = false;
  }
  if (iteratee != null) iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iteratee, context);
  var result = [];
  var seen = [];
  for (var i = 0, length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_2__["default"])(array); i < length; i++) {
    var value = array[i],
        computed = iteratee ? iteratee(value, i, array) : value;
    if (isSorted && !iteratee) {
      if (!i || seen !== computed) result.push(value);
      seen = computed;
    } else if (iteratee) {
      if (!Object(_contains_js__WEBPACK_IMPORTED_MODULE_3__["default"])(seen, computed)) {
        seen.push(computed);
        result.push(value);
      }
    } else if (!Object(_contains_js__WEBPACK_IMPORTED_MODULE_3__["default"])(result, value)) {
      result.push(value);
    }
  }
  return result;
}


/***/ }),

/***/ "/R+O":
/*!*************************************************!*\
  !*** ./src/app/pagination/pagination.module.ts ***!
  \*************************************************/
/*! exports provided: PaginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return PaginationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination.component */ "hQTH");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "WmIe");






let PaginationModule = class PaginationModule {
};
PaginationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        ],
        declarations: [_pagination_component__WEBPACK_IMPORTED_MODULE_4__["PaginationComponent"]],
        exports: [
            _pagination_component__WEBPACK_IMPORTED_MODULE_4__["PaginationComponent"]
        ],
        providers: [
            _index__WEBPACK_IMPORTED_MODULE_5__["PaginationService"]
        ],
    })
], PaginationModule);



/***/ }),

/***/ "0+rK":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/indexOf.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sortedIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortedIndex.js */ "ZHc+");
/* harmony import */ var _findIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findIndex.js */ "2huT");
/* harmony import */ var _createIndexFinder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_createIndexFinder.js */ "h9Y/");




// Return the position of the first occurrence of an item in an array,
// or -1 if the item is not included in the array.
// If the array is large and already in sort order, pass `true`
// for **isSorted** to use binary search.
/* harmony default export */ __webpack_exports__["default"] = (Object(_createIndexFinder_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, _findIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"], _sortedIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"]));


/***/ }),

/***/ "09co":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/isWeakMap.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "OeF5");
/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stringTagBug.js */ "Qb8F");
/* harmony import */ var _methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_methodFingerprint.js */ "3PVY");




/* harmony default export */ __webpack_exports__["default"] = (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__["isIE11"] ? Object(_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__["ie11fingerprint"])(_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__["weakMapMethods"]) : Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('WeakMap'));


/***/ }),

/***/ "0CTw":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/values.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return values; });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ "kT3W");


// Retrieve the values of an object's properties.
function values(obj) {
  var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj);
  var length = _keys.length;
  var values = Array(length);
  for (var i = 0; i < length; i++) {
    values[i] = obj[_keys[i]];
  }
  return values;
}


/***/ }),

/***/ "0Xxi":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/tap.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tap; });
// Invokes `interceptor` with the `obj` and then returns `obj`.
// The primary purpose of this method is to "tap into" a method chain, in
// order to perform operations on intermediate results within the chain.
function tap(obj, interceptor) {
  interceptor(obj);
  return obj;
}


/***/ }),

/***/ "1quH":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/mixin.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mixin; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "UgGm");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ "SuqQ");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions.js */ "BesA");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_setup.js */ "L0c3");
/* harmony import */ var _chainResult_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_chainResult.js */ "HTCd");






// Add your own custom functions to the Underscore object.
function mixin(obj) {
  Object(_each_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_functions_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj), function(name) {
    var func = _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"][name] = obj[name];
    _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype[name] = function() {
      var args = [this._wrapped];
      _setup_js__WEBPACK_IMPORTED_MODULE_3__["push"].apply(args, arguments);
      return Object(_chainResult_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, func.apply(_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"], args));
    };
  });
  return _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"];
}


/***/ }),

/***/ "2AqP":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/isUndefined.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isUndefined; });
// Is a given variable undefined?
function isUndefined(obj) {
  return obj === void 0;
}


/***/ }),

/***/ "2hg8":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/indexBy.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_group.js */ "X+A/");


// Indexes the object's values by a criterion, similar to `_.groupBy`, but for
// when you know that your index values will be unique.
/* harmony default export */ __webpack_exports__["default"] = (Object(_group_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(result, value, key) {
  result[key] = value;
}));


/***/ }),

/***/ "2huT":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/findIndex.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createPredicateIndexFinder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createPredicateIndexFinder.js */ "mjQP");


// Returns the first index on an array-like that passes a truth test.
/* harmony default export */ __webpack_exports__["default"] = (Object(_createPredicateIndexFinder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1));


/***/ }),

/***/ "2kp3":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/last.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return last; });
/* harmony import */ var _rest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rest.js */ "Y4kH");


// Get the last element of an array. Passing **n** will return the last N
// values in the array.
function last(array, n, guard) {
  if (array == null || array.length < 1) return n == null || guard ? void 0 : [];
  if (n == null || guard) return array[array.length - 1];
  return Object(_rest_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, Math.max(0, array.length - n));
}


/***/ }),

/***/ "2oQQ":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/extend.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createAssigner.js */ "8Mtv");
/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allKeys.js */ "d3Uc");



// Extend a given object with all the properties in passed-in object(s).
/* harmony default export */ __webpack_exports__["default"] = (Object(_createAssigner_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_allKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "2rIJ":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isEqual.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isEqual; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "UgGm");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "L0c3");
/* harmony import */ var _getByteLength_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getByteLength.js */ "y+by");
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isTypedArray.js */ "xCQA");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isFunction.js */ "S9Yh");
/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_stringTagBug.js */ "Qb8F");
/* harmony import */ var _isDataView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isDataView.js */ "7ijN");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./keys.js */ "kT3W");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_has.js */ "hOqw");
/* harmony import */ var _toBufferView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_toBufferView.js */ "qysV");











// We use this string twice, so give it a name for minification.
var tagDataView = '[object DataView]';

// Internal recursive comparison function for `_.isEqual`.
function eq(a, b, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](https://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b;
  // `null` or `undefined` only equal to itself (strict comparison).
  if (a == null || b == null) return false;
  // `NaN`s are equivalent, but non-reflexive.
  if (a !== a) return b !== b;
  // Exhaust primitive checks
  var type = typeof a;
  if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
  return deepEq(a, b, aStack, bStack);
}

// Internal recursive comparison function for `_.isEqual`.
function deepEq(a, b, aStack, bStack) {
  // Unwrap any wrapped objects.
  if (a instanceof _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"]) a = a._wrapped;
  if (b instanceof _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"]) b = b._wrapped;
  // Compare `[[Class]]` names.
  var className = _setup_js__WEBPACK_IMPORTED_MODULE_1__["toString"].call(a);
  if (className !== _setup_js__WEBPACK_IMPORTED_MODULE_1__["toString"].call(b)) return false;
  // Work around a bug in IE 10 - Edge 13.
  if (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_5__["hasStringTagBug"] && className == '[object Object]' && Object(_isDataView_js__WEBPACK_IMPORTED_MODULE_6__["default"])(a)) {
    if (!Object(_isDataView_js__WEBPACK_IMPORTED_MODULE_6__["default"])(b)) return false;
    className = tagDataView;
  }
  switch (className) {
    // These types are compared by value.
    case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
    case '[object String]':
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return '' + a === '' + b;
    case '[object Number]':
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b;
      // An `egal` comparison is performed for other numeric values.
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case '[object Date]':
    case '[object Boolean]':
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;
    case '[object Symbol]':
      return _setup_js__WEBPACK_IMPORTED_MODULE_1__["SymbolProto"].valueOf.call(a) === _setup_js__WEBPACK_IMPORTED_MODULE_1__["SymbolProto"].valueOf.call(b);
    case '[object ArrayBuffer]':
    case tagDataView:
      // Coerce to typed array so we can fall through.
      return deepEq(Object(_toBufferView_js__WEBPACK_IMPORTED_MODULE_9__["default"])(a), Object(_toBufferView_js__WEBPACK_IMPORTED_MODULE_9__["default"])(b), aStack, bStack);
  }

  var areArrays = className === '[object Array]';
  if (!areArrays && Object(_isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(a)) {
      var byteLength = Object(_getByteLength_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a);
      if (byteLength !== Object(_getByteLength_js__WEBPACK_IMPORTED_MODULE_2__["default"])(b)) return false;
      if (a.buffer === b.buffer && a.byteOffset === b.byteOffset) return true;
      areArrays = true;
  }
  if (!areArrays) {
    if (typeof a != 'object' || typeof b != 'object') return false;

    // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_4__["default"])(aCtor) && aCtor instanceof aCtor &&
                             Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_4__["default"])(bCtor) && bCtor instanceof bCtor)
                        && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
  }
  // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.
  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;
  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  }

  // Add the first object to the stack of traversed objects.
  aStack.push(a);
  bStack.push(b);

  // Recursively compare objects and arrays.
  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false;
    // Deep compare the contents, ignoring non-numeric properties.
    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_7__["default"])(a), key;
    length = _keys.length;
    // Ensure that both objects contain the same number of properties before comparing deep equality.
    if (Object(_keys_js__WEBPACK_IMPORTED_MODULE_7__["default"])(b).length !== length) return false;
    while (length--) {
      // Deep compare each member
      key = _keys[length];
      if (!(Object(_has_js__WEBPACK_IMPORTED_MODULE_8__["default"])(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
    }
  }
  // Remove the first object from the stack of traversed objects.
  aStack.pop();
  bStack.pop();
  return true;
}

// Perform a deep comparison to check if two objects are equal.
function isEqual(a, b) {
  return eq(a, b);
}


/***/ }),

/***/ "2v0n":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/uniqueId.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uniqueId; });
// Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.
var idCounter = 0;
function uniqueId(prefix) {
  var id = ++idCounter + '';
  return prefix ? prefix + id : id;
}


/***/ }),

/***/ "2xOz":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/invoke.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "+L30");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "S9Yh");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.js */ "IDUA");
/* harmony import */ var _deepGet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_deepGet.js */ "3LU3");
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_toPath.js */ "qDlR");






// Invoke a method (with arguments) on every item in a collection.
/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(obj, path, args) {
  var contextPath, func;
  if (Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path)) {
    func = path;
  } else {
    path = Object(_toPath_js__WEBPACK_IMPORTED_MODULE_4__["default"])(path);
    contextPath = path.slice(0, -1);
    path = path[path.length - 1];
  }
  return Object(_map_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, function(context) {
    var method = func;
    if (!method) {
      if (contextPath && contextPath.length) {
        context = Object(_deepGet_js__WEBPACK_IMPORTED_MODULE_3__["default"])(context, contextPath);
      }
      if (context == null) return void 0;
      method = context[path];
    }
    return method == null ? method : method.apply(context, args);
  });
}));


/***/ }),

/***/ "3LU3":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/_deepGet.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deepGet; });
// Internal function to obtain a nested property in `obj` along `path`.
function deepGet(obj, path) {
  var length = path.length;
  for (var i = 0; i < length; i++) {
    if (obj == null) return void 0;
    obj = obj[path[i]];
  }
  return length ? obj : void 0;
}


/***/ }),

/***/ "3PVY":
/*!***************************************************************!*\
  !*** ./node_modules/underscore/modules/_methodFingerprint.js ***!
  \***************************************************************/
/*! exports provided: ie11fingerprint, mapMethods, weakMapMethods, setMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ie11fingerprint", function() { return ie11fingerprint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMethods", function() { return mapMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weakMapMethods", function() { return weakMapMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMethods", function() { return setMethods; });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ "+g8h");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "S9Yh");
/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allKeys.js */ "d3Uc");




// Since the regular `Object.prototype.toString` type tests don't work for
// some types in IE 11, we use a fingerprinting heuristic instead, based
// on the methods. It's not great, but it's the best we got.
// The fingerprint method lists are defined below.
function ie11fingerprint(methods) {
  var length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(methods);
  return function(obj) {
    if (obj == null) return false;
    // `Map`, `WeakMap` and `Set` have no enumerable keys.
    var keys = Object(_allKeys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj);
    if (Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(keys)) return false;
    for (var i = 0; i < length; i++) {
      if (!Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj[methods[i]])) return false;
    }
    // If we are testing against `WeakMap`, we need to ensure that
    // `obj` doesn't have a `forEach` method in order to distinguish
    // it from a regular `Map`.
    return methods !== weakMapMethods || !Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj[forEachName]);
  };
}

// In the interest of compact minification, we write
// each string in the fingerprints only once.
var forEachName = 'forEach',
    hasName = 'has',
    commonInit = ['clear', 'delete'],
    mapTail = ['get', hasName, 'set'];

// `Map`, `WeakMap` and `Set` each have slightly different
// combinations of the above sublists.
var mapMethods = commonInit.concat(forEachName, mapTail),
    weakMapMethods = commonInit.concat(mapTail),
    setMethods = ['add'].concat(commonInit, forEachName, hasName);


/***/ }),

/***/ "3ZkI":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/before.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return before; });
// Returns a function that will only be executed up to (but not including) the
// Nth call.
function before(times, func) {
  var memo;
  return function() {
    if (--times > 0) {
      memo = func.apply(this, arguments);
    }
    if (times <= 1) func = null;
    return memo;
  };
}


/***/ }),

/***/ "4bDf":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/find.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return find; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "PXqf");
/* harmony import */ var _findIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findIndex.js */ "2huT");
/* harmony import */ var _findKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./findKey.js */ "HIoN");




// Return the first value which passes a truth test.
function find(obj, predicate, context) {
  var keyFinder = Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) ? _findIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _findKey_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var key = keyFinder(obj, predicate, context);
  if (key !== void 0 && key !== -1) return obj[key];
}


/***/ }),

/***/ "58Of":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/memoize.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return memoize; });
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_has.js */ "hOqw");


// Memoize an expensive function by storing its results.
function memoize(func, hasher) {
  var memoize = function(key) {
    var cache = memoize.cache;
    var address = '' + (hasher ? hasher.apply(this, arguments) : key);
    if (!Object(_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])(cache, address)) cache[address] = func.apply(this, arguments);
    return cache[address];
  };
  memoize.cache = {};
  return memoize;
}


/***/ }),

/***/ "59zu":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/findLastIndex.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createPredicateIndexFinder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createPredicateIndexFinder.js */ "mjQP");


// Returns the last index on an array-like that passes a truth test.
/* harmony default export */ __webpack_exports__["default"] = (Object(_createPredicateIndexFinder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(-1));


/***/ }),

/***/ "5R7u":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/times.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return times; });
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_optimizeCb.js */ "udg+");


// Run a function **n** times.
function times(n, iteratee, context) {
  var accum = Array(Math.max(0, n));
  iteratee = Object(_optimizeCb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context, 1);
  for (var i = 0; i < n; i++) accum[i] = iteratee(i);
  return accum;
}


/***/ }),

/***/ "5RNJ":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/partial.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "+L30");
/* harmony import */ var _executeBound_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_executeBound.js */ "OTdZ");
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./underscore.js */ "UgGm");




// Partially apply a function by creating a version that has had some of its
// arguments pre-filled, without changing its dynamic `this` context. `_` acts
// as a placeholder by default, allowing any combination of arguments to be
// pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
var partial = Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(func, boundArgs) {
  var placeholder = partial.placeholder;
  var bound = function() {
    var position = 0, length = boundArgs.length;
    var args = Array(length);
    for (var i = 0; i < length; i++) {
      args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
    }
    while (position < arguments.length) args.push(arguments[position++]);
    return Object(_executeBound_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func, bound, this, this, args);
  };
  return bound;
});

partial.placeholder = _underscore_js__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (partial);


/***/ }),

/***/ "5Ryk":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isNumber.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "OeF5");


/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Number'));


/***/ }),

/***/ "5TfP":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_isBufferLike.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createSizePropertyCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createSizePropertyCheck.js */ "QjsW");
/* harmony import */ var _getByteLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getByteLength.js */ "y+by");



// Internal helper to determine whether we should spend extensive checks against
// `ArrayBuffer` et al.
/* harmony default export */ __webpack_exports__["default"] = (Object(_createSizePropertyCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_getByteLength_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "5glh":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/index.js ***!
  \**************************************************/
/*! exports provided: VERSION, restArguments, isObject, isNull, isUndefined, isBoolean, isElement, isString, isNumber, isDate, isRegExp, isError, isSymbol, isArrayBuffer, isDataView, isArray, isFunction, isArguments, isFinite, isNaN, isTypedArray, isEmpty, isMatch, isEqual, isMap, isWeakMap, isSet, isWeakSet, keys, allKeys, values, pairs, invert, functions, methods, extend, extendOwn, assign, defaults, create, clone, tap, get, has, mapObject, identity, constant, noop, toPath, property, propertyOf, matcher, matches, times, random, now, escape, unescape, templateSettings, template, result, uniqueId, chain, iteratee, partial, bind, bindAll, memoize, delay, defer, throttle, debounce, wrap, negate, compose, after, before, once, findKey, findIndex, findLastIndex, sortedIndex, indexOf, lastIndexOf, find, detect, findWhere, each, forEach, map, collect, reduce, foldl, inject, reduceRight, foldr, filter, select, reject, every, all, some, any, contains, includes, include, invoke, pluck, where, max, min, shuffle, sample, sortBy, groupBy, indexBy, countBy, partition, toArray, size, pick, omit, first, head, take, initial, last, rest, tail, drop, compact, flatten, without, uniq, unique, union, intersection, difference, unzip, transpose, zip, object, range, chunk, mixin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "L0c3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _setup_js__WEBPACK_IMPORTED_MODULE_0__["VERSION"]; });

/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restArguments.js */ "+L30");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restArguments", function() { return _restArguments_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObject.js */ "BXuq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _isObject_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _isNull_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isNull.js */ "D8uG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return _isNull_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _isUndefined_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isUndefined.js */ "2AqP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _isUndefined_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _isBoolean_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isBoolean.js */ "oB1/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _isBoolean_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _isElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isElement.js */ "AxJ3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return _isElement_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isString.js */ "Zjcy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _isString_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _isNumber_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./isNumber.js */ "5Ryk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _isNumber_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _isDate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isDate.js */ "kzDP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _isDate_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _isRegExp_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./isRegExp.js */ "TyRk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _isRegExp_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _isError_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./isError.js */ "Ei2I");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return _isError_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./isSymbol.js */ "xSzf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return _isSymbol_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _isArrayBuffer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./isArrayBuffer.js */ "PCS7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayBuffer", function() { return _isArrayBuffer_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _isDataView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./isDataView.js */ "7ijN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDataView", function() { return _isDataView_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./isArray.js */ "XYRq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _isArray_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./isFunction.js */ "S9Yh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _isFunction_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./isArguments.js */ "qeMZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArguments", function() { return _isArguments_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _isFinite_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./isFinite.js */ "dIyz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFinite", function() { return _isFinite_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _isNaN_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./isNaN.js */ "sjh4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return _isNaN_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./isTypedArray.js */ "xCQA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypedArray", function() { return _isTypedArray_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _isEmpty_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./isEmpty.js */ "YkI5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _isEmpty_js__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _isMatch_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./isMatch.js */ "Ejpt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMatch", function() { return _isMatch_js__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _isEqual_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./isEqual.js */ "2rIJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return _isEqual_js__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _isMap_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./isMap.js */ "L7/m");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMap", function() { return _isMap_js__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _isWeakMap_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./isWeakMap.js */ "09co");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWeakMap", function() { return _isWeakMap_js__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _isSet_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./isSet.js */ "ukPn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return _isSet_js__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _isWeakSet_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./isWeakSet.js */ "W1oq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWeakSet", function() { return _isWeakSet_js__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./keys.js */ "kT3W");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return _keys_js__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./allKeys.js */ "d3Uc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allKeys", function() { return _allKeys_js__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./values.js */ "0CTw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _values_js__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _pairs_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pairs.js */ "5hyF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _pairs_js__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _invert_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./invert.js */ "e8TK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return _invert_js__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./functions.js */ "BesA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "functions", function() { return _functions_js__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "methods", function() { return _functions_js__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _extend_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./extend.js */ "2oQQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _extend_js__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _extendOwn_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./extendOwn.js */ "MrXe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendOwn", function() { return _extendOwn_js__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _extendOwn_js__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./defaults.js */ "NH6z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _defaults_js__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./create.js */ "QmgM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _create_js__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _clone_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./clone.js */ "ZDZF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return _clone_js__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _tap_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./tap.js */ "0Xxi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return _tap_js__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./get.js */ "G/cX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _get_js__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./has.js */ "Ps0k");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "has", function() { return _has_js__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _mapObject_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./mapObject.js */ "F5TA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapObject", function() { return _mapObject_js__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./identity.js */ "hUUU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _identity_js__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./constant.js */ "OmtP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "constant", function() { return _constant_js__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./noop.js */ "7mzy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _noop_js__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./toPath.js */ "E7mu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPath", function() { return _toPath_js__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./property.js */ "hAGv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _property_js__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _propertyOf_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./propertyOf.js */ "+xCn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propertyOf", function() { return _propertyOf_js__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./matcher.js */ "EwgG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return _matcher_js__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return _matcher_js__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony import */ var _times_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./times.js */ "5R7u");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "times", function() { return _times_js__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony import */ var _random_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./random.js */ "ceLO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "random", function() { return _random_js__WEBPACK_IMPORTED_MODULE_51__["default"]; });

/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./now.js */ "TR2v");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return _now_js__WEBPACK_IMPORTED_MODULE_52__["default"]; });

/* harmony import */ var _escape_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./escape.js */ "5h39");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return _escape_js__WEBPACK_IMPORTED_MODULE_53__["default"]; });

/* harmony import */ var _unescape_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./unescape.js */ "TkW4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unescape", function() { return _unescape_js__WEBPACK_IMPORTED_MODULE_54__["default"]; });

/* harmony import */ var _templateSettings_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./templateSettings.js */ "LDNx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateSettings", function() { return _templateSettings_js__WEBPACK_IMPORTED_MODULE_55__["default"]; });

/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./template.js */ "M+MJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "template", function() { return _template_js__WEBPACK_IMPORTED_MODULE_56__["default"]; });

/* harmony import */ var _result_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./result.js */ "8rRp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "result", function() { return _result_js__WEBPACK_IMPORTED_MODULE_57__["default"]; });

/* harmony import */ var _uniqueId_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./uniqueId.js */ "2v0n");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return _uniqueId_js__WEBPACK_IMPORTED_MODULE_58__["default"]; });

/* harmony import */ var _chain_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./chain.js */ "p3Xm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return _chain_js__WEBPACK_IMPORTED_MODULE_59__["default"]; });

/* harmony import */ var _iteratee_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./iteratee.js */ "KSgu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iteratee", function() { return _iteratee_js__WEBPACK_IMPORTED_MODULE_60__["default"]; });

/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./partial.js */ "5RNJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return _partial_js__WEBPACK_IMPORTED_MODULE_61__["default"]; });

/* harmony import */ var _bind_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./bind.js */ "G8Mm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return _bind_js__WEBPACK_IMPORTED_MODULE_62__["default"]; });

/* harmony import */ var _bindAll_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./bindAll.js */ "TRxL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindAll", function() { return _bindAll_js__WEBPACK_IMPORTED_MODULE_63__["default"]; });

/* harmony import */ var _memoize_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./memoize.js */ "58Of");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return _memoize_js__WEBPACK_IMPORTED_MODULE_64__["default"]; });

/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./delay.js */ "lTa4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _delay_js__WEBPACK_IMPORTED_MODULE_65__["default"]; });

/* harmony import */ var _defer_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./defer.js */ "kbih");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return _defer_js__WEBPACK_IMPORTED_MODULE_66__["default"]; });

/* harmony import */ var _throttle_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./throttle.js */ "QIZM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _throttle_js__WEBPACK_IMPORTED_MODULE_67__["default"]; });

/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./debounce.js */ "Fsf4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _debounce_js__WEBPACK_IMPORTED_MODULE_68__["default"]; });

/* harmony import */ var _wrap_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./wrap.js */ "Rfqy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _wrap_js__WEBPACK_IMPORTED_MODULE_69__["default"]; });

/* harmony import */ var _negate_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./negate.js */ "b9SO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return _negate_js__WEBPACK_IMPORTED_MODULE_70__["default"]; });

/* harmony import */ var _compose_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./compose.js */ "UeJw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _compose_js__WEBPACK_IMPORTED_MODULE_71__["default"]; });

/* harmony import */ var _after_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./after.js */ "t8x1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "after", function() { return _after_js__WEBPACK_IMPORTED_MODULE_72__["default"]; });

/* harmony import */ var _before_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./before.js */ "3ZkI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "before", function() { return _before_js__WEBPACK_IMPORTED_MODULE_73__["default"]; });

/* harmony import */ var _once_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./once.js */ "7ZNP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "once", function() { return _once_js__WEBPACK_IMPORTED_MODULE_74__["default"]; });

/* harmony import */ var _findKey_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./findKey.js */ "HIoN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findKey", function() { return _findKey_js__WEBPACK_IMPORTED_MODULE_75__["default"]; });

/* harmony import */ var _findIndex_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./findIndex.js */ "2huT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return _findIndex_js__WEBPACK_IMPORTED_MODULE_76__["default"]; });

/* harmony import */ var _findLastIndex_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./findLastIndex.js */ "59zu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findLastIndex", function() { return _findLastIndex_js__WEBPACK_IMPORTED_MODULE_77__["default"]; });

/* harmony import */ var _sortedIndex_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./sortedIndex.js */ "ZHc+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortedIndex", function() { return _sortedIndex_js__WEBPACK_IMPORTED_MODULE_78__["default"]; });

/* harmony import */ var _indexOf_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./indexOf.js */ "0+rK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return _indexOf_js__WEBPACK_IMPORTED_MODULE_79__["default"]; });

/* harmony import */ var _lastIndexOf_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./lastIndexOf.js */ "sZiM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() { return _lastIndexOf_js__WEBPACK_IMPORTED_MODULE_80__["default"]; });

/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./find.js */ "4bDf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _find_js__WEBPACK_IMPORTED_MODULE_81__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detect", function() { return _find_js__WEBPACK_IMPORTED_MODULE_81__["default"]; });

/* harmony import */ var _findWhere_js__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./findWhere.js */ "yrI0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findWhere", function() { return _findWhere_js__WEBPACK_IMPORTED_MODULE_82__["default"]; });

/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./each.js */ "SuqQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "each", function() { return _each_js__WEBPACK_IMPORTED_MODULE_83__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _each_js__WEBPACK_IMPORTED_MODULE_83__["default"]; });

/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./map.js */ "IDUA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _map_js__WEBPACK_IMPORTED_MODULE_84__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collect", function() { return _map_js__WEBPACK_IMPORTED_MODULE_84__["default"]; });

/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./reduce.js */ "a/Fg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return _reduce_js__WEBPACK_IMPORTED_MODULE_85__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "foldl", function() { return _reduce_js__WEBPACK_IMPORTED_MODULE_85__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return _reduce_js__WEBPACK_IMPORTED_MODULE_85__["default"]; });

/* harmony import */ var _reduceRight_js__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./reduceRight.js */ "Whtb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceRight", function() { return _reduceRight_js__WEBPACK_IMPORTED_MODULE_86__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "foldr", function() { return _reduceRight_js__WEBPACK_IMPORTED_MODULE_86__["default"]; });

/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./filter.js */ "SvpX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _filter_js__WEBPACK_IMPORTED_MODULE_87__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _filter_js__WEBPACK_IMPORTED_MODULE_87__["default"]; });

/* harmony import */ var _reject_js__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./reject.js */ "A5i9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return _reject_js__WEBPACK_IMPORTED_MODULE_88__["default"]; });

/* harmony import */ var _every_js__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./every.js */ "C1Fi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "every", function() { return _every_js__WEBPACK_IMPORTED_MODULE_89__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _every_js__WEBPACK_IMPORTED_MODULE_89__["default"]; });

/* harmony import */ var _some_js__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./some.js */ "pZ0j");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "some", function() { return _some_js__WEBPACK_IMPORTED_MODULE_90__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "any", function() { return _some_js__WEBPACK_IMPORTED_MODULE_90__["default"]; });

/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./contains.js */ "rJva");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _contains_js__WEBPACK_IMPORTED_MODULE_91__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return _contains_js__WEBPACK_IMPORTED_MODULE_91__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "include", function() { return _contains_js__WEBPACK_IMPORTED_MODULE_91__["default"]; });

/* harmony import */ var _invoke_js__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./invoke.js */ "2xOz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return _invoke_js__WEBPACK_IMPORTED_MODULE_92__["default"]; });

/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./pluck.js */ "AiSn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return _pluck_js__WEBPACK_IMPORTED_MODULE_93__["default"]; });

/* harmony import */ var _where_js__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./where.js */ "AoYG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "where", function() { return _where_js__WEBPACK_IMPORTED_MODULE_94__["default"]; });

/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./max.js */ "x10Y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _max_js__WEBPACK_IMPORTED_MODULE_95__["default"]; });

/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./min.js */ "SvAc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _min_js__WEBPACK_IMPORTED_MODULE_96__["default"]; });

/* harmony import */ var _shuffle_js__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./shuffle.js */ "KjQr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return _shuffle_js__WEBPACK_IMPORTED_MODULE_97__["default"]; });

/* harmony import */ var _sample_js__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./sample.js */ "c6cV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return _sample_js__WEBPACK_IMPORTED_MODULE_98__["default"]; });

/* harmony import */ var _sortBy_js__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./sortBy.js */ "ygRw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return _sortBy_js__WEBPACK_IMPORTED_MODULE_99__["default"]; });

/* harmony import */ var _groupBy_js__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./groupBy.js */ "rdef");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return _groupBy_js__WEBPACK_IMPORTED_MODULE_100__["default"]; });

/* harmony import */ var _indexBy_js__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./indexBy.js */ "2hg8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexBy", function() { return _indexBy_js__WEBPACK_IMPORTED_MODULE_101__["default"]; });

/* harmony import */ var _countBy_js__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./countBy.js */ "iLdE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countBy", function() { return _countBy_js__WEBPACK_IMPORTED_MODULE_102__["default"]; });

/* harmony import */ var _partition_js__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./partition.js */ "FMJX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return _partition_js__WEBPACK_IMPORTED_MODULE_103__["default"]; });

/* harmony import */ var _toArray_js__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./toArray.js */ "Em+s");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return _toArray_js__WEBPACK_IMPORTED_MODULE_104__["default"]; });

/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./size.js */ "bis8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "size", function() { return _size_js__WEBPACK_IMPORTED_MODULE_105__["default"]; });

/* harmony import */ var _pick_js__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./pick.js */ "qkpa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return _pick_js__WEBPACK_IMPORTED_MODULE_106__["default"]; });

/* harmony import */ var _omit_js__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./omit.js */ "QRxI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return _omit_js__WEBPACK_IMPORTED_MODULE_107__["default"]; });

/* harmony import */ var _first_js__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./first.js */ "H+Te");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "first", function() { return _first_js__WEBPACK_IMPORTED_MODULE_108__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "head", function() { return _first_js__WEBPACK_IMPORTED_MODULE_108__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _first_js__WEBPACK_IMPORTED_MODULE_108__["default"]; });

/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./initial.js */ "ULn8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initial", function() { return _initial_js__WEBPACK_IMPORTED_MODULE_109__["default"]; });

/* harmony import */ var _last_js__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./last.js */ "2kp3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "last", function() { return _last_js__WEBPACK_IMPORTED_MODULE_110__["default"]; });

/* harmony import */ var _rest_js__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./rest.js */ "Y4kH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rest", function() { return _rest_js__WEBPACK_IMPORTED_MODULE_111__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return _rest_js__WEBPACK_IMPORTED_MODULE_111__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return _rest_js__WEBPACK_IMPORTED_MODULE_111__["default"]; });

/* harmony import */ var _compact_js__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./compact.js */ "KQhT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return _compact_js__WEBPACK_IMPORTED_MODULE_112__["default"]; });

/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./flatten.js */ "9n2W");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _flatten_js__WEBPACK_IMPORTED_MODULE_113__["default"]; });

/* harmony import */ var _without_js__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./without.js */ "rk5D");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "without", function() { return _without_js__WEBPACK_IMPORTED_MODULE_114__["default"]; });

/* harmony import */ var _uniq_js__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./uniq.js */ "/HDF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return _uniq_js__WEBPACK_IMPORTED_MODULE_115__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return _uniq_js__WEBPACK_IMPORTED_MODULE_115__["default"]; });

/* harmony import */ var _union_js__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./union.js */ "hOBv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "union", function() { return _union_js__WEBPACK_IMPORTED_MODULE_116__["default"]; });

/* harmony import */ var _intersection_js__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./intersection.js */ "Yc1x");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intersection", function() { return _intersection_js__WEBPACK_IMPORTED_MODULE_117__["default"]; });

/* harmony import */ var _difference_js__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./difference.js */ "usA7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return _difference_js__WEBPACK_IMPORTED_MODULE_118__["default"]; });

/* harmony import */ var _unzip_js__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./unzip.js */ "iqdv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unzip", function() { return _unzip_js__WEBPACK_IMPORTED_MODULE_119__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return _unzip_js__WEBPACK_IMPORTED_MODULE_119__["default"]; });

/* harmony import */ var _zip_js__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./zip.js */ "BPR7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _zip_js__WEBPACK_IMPORTED_MODULE_120__["default"]; });

/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./object.js */ "pzJQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "object", function() { return _object_js__WEBPACK_IMPORTED_MODULE_121__["default"]; });

/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./range.js */ "kzNz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _range_js__WEBPACK_IMPORTED_MODULE_122__["default"]; });

/* harmony import */ var _chunk_js__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./chunk.js */ "NvUF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chunk", function() { return _chunk_js__WEBPACK_IMPORTED_MODULE_123__["default"]; });

/* harmony import */ var _mixin_js__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./mixin.js */ "1quH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return _mixin_js__WEBPACK_IMPORTED_MODULE_124__["default"]; });

/* harmony import */ var _underscore_array_methods_js__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./underscore-array-methods.js */ "YO08");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _underscore_array_methods_js__WEBPACK_IMPORTED_MODULE_125__["default"]; });

// Named Exports
// =============

//     Underscore.js 1.13.2
//     https://underscorejs.org
//     (c) 2009-2021 Jeremy Ashkenas, Julian Gonggrijp, and DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

// Baseline setup.



// Object Functions
// ----------------
// Our most fundamental functions operate on any JavaScript object.
// Most functions in Underscore depend on at least one function in this section.

// A group of functions that check the types of core JavaScript values.
// These are often informally referred to as the "isType" functions.



























// Functions that treat an object as a dictionary of key-value pairs.
















// Utility Functions
// -----------------
// A bit of a grab bag: Predicate-generating functions for use with filters and
// loops, string escaping and templating, create random numbers and unique ids,
// and functions that facilitate Underscore's chaining and iteration conventions.



















// Function (ahem) Functions
// -------------------------
// These functions take a function as an argument and return a new function
// as the result. Also known as higher-order functions.















// Finders
// -------
// Functions that extract (the position of) a single element from an object
// or array based on some criterion.









// Collection Functions
// --------------------
// Functions that work on any collection of elements: either an array, or
// an object of key-value pairs.
























// `_.pick` and `_.omit` are actually object functions, but we put
// them here in order to create a more natural reading order in the
// monolithic build as they depend on `_.contains`.



// Array Functions
// ---------------
// Functions that operate on arrays (and array-likes) only, because they’re
// expressed in terms of operations on an ordered list of values.

















// OOP
// ---
// These modules support the "object-oriented" calling style. See also
// `underscore.js` and `index-default.js`.




/***/ }),

/***/ "5h39":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/escape.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createEscaper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createEscaper.js */ "fPcu");
/* harmony import */ var _escapeMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_escapeMap.js */ "Vwl8");



// Function for escaping strings to HTML interpolation.
/* harmony default export */ __webpack_exports__["default"] = (Object(_createEscaper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_escapeMap_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "5hyF":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/pairs.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pairs; });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ "kT3W");


// Convert an object into a list of `[key, value]` pairs.
// The opposite of `_.object` with one argument.
function pairs(obj) {
  var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj);
  var length = _keys.length;
  var pairs = Array(length);
  for (var i = 0; i < length; i++) {
    pairs[i] = [_keys[i], obj[_keys[i]]];
  }
  return pairs;
}


/***/ }),

/***/ "7ZNP":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/once.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partial.js */ "5RNJ");
/* harmony import */ var _before_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./before.js */ "3ZkI");



// Returns a function that will be executed at most one time, no matter how
// often you call it. Useful for lazy initialization.
/* harmony default export */ __webpack_exports__["default"] = (Object(_partial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_before_js__WEBPACK_IMPORTED_MODULE_1__["default"], 2));


/***/ }),

/***/ "7ijN":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/isDataView.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "OeF5");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "S9Yh");
/* harmony import */ var _isArrayBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArrayBuffer.js */ "PCS7");
/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_stringTagBug.js */ "Qb8F");





var isDataView = Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('DataView');

// In IE 10 - Edge 13, we need a different heuristic
// to determine whether an object is a `DataView`.
function ie10IsDataView(obj) {
  return obj != null && Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj.getInt8) && Object(_isArrayBuffer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.buffer);
}

/* harmony default export */ __webpack_exports__["default"] = (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_3__["hasStringTagBug"] ? ie10IsDataView : isDataView);


/***/ }),

/***/ "7mzy":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/noop.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return noop; });
// Predicate-generating function. Often useful outside of Underscore.
function noop(){}


/***/ }),

/***/ "8EJJ":
/*!************************************************************!*\
  !*** ./src/app/views/users/adduser/adduser.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn btn-sm {\n  margin: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRkdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLFdBQUE7QUFDSCIsImZpbGUiOiJhZGR1c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biBidG4tc217XHJcbiAgIG1hcmdpbjogMnB4O1xyXG59Il19 */");

/***/ }),

/***/ "8Mtv":
/*!************************************************************!*\
  !*** ./node_modules/underscore/modules/_createAssigner.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createAssigner; });
// An internal function for creating assigner functions.
function createAssigner(keysFunc, defaults) {
  return function(obj) {
    var length = arguments.length;
    if (defaults) obj = Object(obj);
    if (length < 2 || obj == null) return obj;
    for (var index = 1; index < length; index++) {
      var source = arguments[index],
          keys = keysFunc(source),
          l = keys.length;
      for (var i = 0; i < l; i++) {
        var key = keys[i];
        if (!defaults || obj[key] === void 0) obj[key] = source[key];
      }
    }
    return obj;
  };
}


/***/ }),

/***/ "8rRp":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/result.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return result; });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction.js */ "S9Yh");
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_toPath.js */ "qDlR");



// Traverses the children of `obj` along `path`. If a child is a function, it
// is invoked with its parent as context. Returns the value of the final
// child, or `fallback` if any child is undefined.
function result(obj, path, fallback) {
  path = Object(_toPath_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path);
  var length = path.length;
  if (!length) {
    return Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fallback) ? fallback.call(obj) : fallback;
  }
  for (var i = 0; i < length; i++) {
    var prop = obj == null ? void 0 : obj[path[i]];
    if (prop === void 0) {
      prop = fallback;
      i = length; // Ensure we don't continue iterating.
    }
    obj = Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(prop) ? prop.call(obj) : prop;
  }
  return obj;
}


/***/ }),

/***/ "9n2W":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/flatten.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return flatten; });
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_flatten.js */ "+gt/");


// Flatten out an array, either recursively (by default), or up to `depth`.
// Passing `true` or `false` as `depth` means `1` or `Infinity`, respectively.
function flatten(array, depth) {
  return Object(_flatten_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, depth, false);
}


/***/ }),

/***/ "A5i9":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/reject.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reject; });
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.js */ "SvpX");
/* harmony import */ var _negate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./negate.js */ "b9SO");
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cb.js */ "ssMU");




// Return all the elements for which a truth test fails.
function reject(obj, predicate, context) {
  return Object(_filter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, Object(_negate_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_cb_js__WEBPACK_IMPORTED_MODULE_2__["default"])(predicate)), context);
}


/***/ }),

/***/ "AiSn":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/pluck.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pluck; });
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ "IDUA");
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property.js */ "hAGv");



// Convenience version of a common use case of `_.map`: fetching a property.
function pluck(obj, key) {
  return Object(_map_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, Object(_property_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key));
}


/***/ }),

/***/ "AoYG":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/where.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return where; });
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.js */ "SvpX");
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matcher.js */ "EwgG");



// Convenience version of a common use case of `_.filter`: selecting only
// objects containing specific `key:value` pairs.
function where(obj, attrs) {
  return Object(_filter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, Object(_matcher_js__WEBPACK_IMPORTED_MODULE_1__["default"])(attrs));
}


/***/ }),

/***/ "AxJ3":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/isElement.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isElement; });
// Is a given value a DOM element?
function isElement(obj) {
  return !!(obj && obj.nodeType === 1);
}


/***/ }),

/***/ "BPR7":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/zip.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "+L30");
/* harmony import */ var _unzip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unzip.js */ "iqdv");



// Zip together multiple lists into a single array -- elements that share
// an index go together.
/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_unzip_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "BXuq":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isObject.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isObject; });
// Is a given variable an object?
function isObject(obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
}


/***/ }),

/***/ "BesA":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/functions.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return functions; });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction.js */ "S9Yh");


// Return a sorted list of the function names available on the object.
function functions(obj) {
  var names = [];
  for (var key in obj) {
    if (Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj[key])) names.push(key);
  }
  return names.sort();
}


/***/ }),

/***/ "C1Fi":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/every.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return every; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "ssMU");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ "PXqf");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ "kT3W");




// Determine whether all of the elements pass a truth test.
function every(obj, predicate, context) {
  predicate = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(predicate, context);
  var _keys = !Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) && Object(_keys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj),
      length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (!predicate(obj[currentKey], currentKey, obj)) return false;
  }
  return true;
}


/***/ }),

/***/ "D8uG":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/isNull.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isNull; });
// Is a given value equal to null?
function isNull(obj) {
  return obj === null;
}


/***/ }),

/***/ "E7mu":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/toPath.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toPath; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "UgGm");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "XYRq");



// Normalize a (deep) property `path` to array.
// Like `_.iteratee`, this function can be customized.
function toPath(path) {
  return Object(_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path) ? path : [path];
}
_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].toPath = toPath;


/***/ }),

/***/ "Ei2I":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isError.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "OeF5");


/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Error'));


/***/ }),

/***/ "Ejpt":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isMatch.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isMatch; });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ "kT3W");


// Returns whether an object has a given set of `key:value` pairs.
function isMatch(object, attrs) {
  var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(attrs), length = _keys.length;
  if (object == null) return !length;
  var obj = Object(object);
  for (var i = 0; i < length; i++) {
    var key = _keys[i];
    if (attrs[key] !== obj[key] || !(key in obj)) return false;
  }
  return true;
}


/***/ }),

/***/ "Em+s":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/toArray.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toArray; });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "XYRq");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "L0c3");
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isString.js */ "Zjcy");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isArrayLike.js */ "PXqf");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map.js */ "IDUA");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./identity.js */ "hUUU");
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./values.js */ "0CTw");








// Safely create a real, live array from anything iterable.
var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
function toArray(obj) {
  if (!obj) return [];
  if (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) return _setup_js__WEBPACK_IMPORTED_MODULE_1__["slice"].call(obj);
  if (Object(_isString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj)) {
    // Keep surrogate pair characters together.
    return obj.match(reStrSymbol);
  }
  if (Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj)) return Object(_map_js__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, _identity_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return Object(_values_js__WEBPACK_IMPORTED_MODULE_6__["default"])(obj);
}


/***/ }),

/***/ "EwgG":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/matcher.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return matcher; });
/* harmony import */ var _extendOwn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendOwn.js */ "MrXe");
/* harmony import */ var _isMatch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isMatch.js */ "Ejpt");



// Returns a predicate for checking whether an object has a given set of
// `key:value` pairs.
function matcher(attrs) {
  attrs = Object(_extendOwn_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attrs);
  return function(obj) {
    return Object(_isMatch_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, attrs);
  };
}


/***/ }),

/***/ "F5TA":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/mapObject.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mapObject; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "ssMU");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "kT3W");



// Returns the results of applying the `iteratee` to each element of `obj`.
// In contrast to `_.map` it returns an object.
function mapObject(obj, iteratee, context) {
  iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context);
  var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj),
      length = _keys.length,
      results = {};
  for (var index = 0; index < length; index++) {
    var currentKey = _keys[index];
    results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
  }
  return results;
}


/***/ }),

/***/ "FMJX":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/partition.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_group.js */ "X+A/");


// Split a collection into two arrays: one whose elements all pass the given
// truth test, and one whose elements all do not pass the truth test.
/* harmony default export */ __webpack_exports__["default"] = (Object(_group_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(result, value, pass) {
  result[pass ? 0 : 1].push(value);
}, true));


/***/ }),

/***/ "Fsf4":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/debounce.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "+L30");
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./now.js */ "TR2v");



// When a sequence of calls of the returned function ends, the argument
// function is triggered. The end of a sequence is defined by the `wait`
// parameter. If `immediate` is passed, the argument function will be
// triggered at the beginning of the sequence instead of at the end.
function debounce(func, wait, immediate) {
  var timeout, previous, args, result, context;

  var later = function() {
    var passed = Object(_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])() - previous;
    if (wait > passed) {
      timeout = setTimeout(later, wait - passed);
    } else {
      timeout = null;
      if (!immediate) result = func.apply(context, args);
      // This check is needed because `func` can recursively invoke `debounced`.
      if (!timeout) args = context = null;
    }
  };

  var debounced = Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(_args) {
    context = this;
    args = _args;
    previous = Object(_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    if (!timeout) {
      timeout = setTimeout(later, wait);
      if (immediate) result = func.apply(context, args);
    }
    return result;
  });

  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = args = context = null;
  };

  return debounced;
}


/***/ }),

/***/ "G/cX":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/get.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return get; });
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_toPath.js */ "qDlR");
/* harmony import */ var _deepGet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_deepGet.js */ "3LU3");
/* harmony import */ var _isUndefined_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isUndefined.js */ "2AqP");




// Get the value of the (deep) property on `path` from `object`.
// If any property in `path` does not exist or if the value is
// `undefined`, return `defaultValue` instead.
// The `path` is normalized through `_.toPath`.
function get(object, path, defaultValue) {
  var value = Object(_deepGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, Object(_toPath_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path));
  return Object(_isUndefined_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) ? defaultValue : value;
}


/***/ }),

/***/ "G8Mm":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/bind.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "+L30");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "S9Yh");
/* harmony import */ var _executeBound_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_executeBound.js */ "OTdZ");




// Create a function bound to a given object (assigning `this`, and arguments,
// optionally).
/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(func, context, args) {
  if (!Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func)) throw new TypeError('Bind must be called on a function');
  var bound = Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(callArgs) {
    return Object(_executeBound_js__WEBPACK_IMPORTED_MODULE_2__["default"])(func, bound, context, this, args.concat(callArgs));
  });
  return bound;
}));


/***/ }),

/***/ "H+Te":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/first.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return first; });
/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial.js */ "ULn8");


// Get the first element of an array. Passing **n** will return the first N
// values in the array. The **guard** check allows it to work with `_.map`.
function first(array, n, guard) {
  if (array == null || array.length < 1) return n == null || guard ? void 0 : [];
  if (n == null || guard) return array[0];
  return Object(_initial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, array.length - n);
}


/***/ }),

/***/ "HIoN":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/findKey.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return findKey; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "ssMU");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "kT3W");



// Returns the first key on an object that passes a truth test.
function findKey(obj, predicate, context) {
  predicate = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(predicate, context);
  var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj), key;
  for (var i = 0, length = _keys.length; i < length; i++) {
    key = _keys[i];
    if (predicate(obj[key], key, obj)) return key;
  }
}


/***/ }),

/***/ "HTCd":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/_chainResult.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chainResult; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "UgGm");


// Helper function to continue chaining intermediate results.
function chainResult(instance, obj) {
  return instance._chain ? Object(_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj).chain() : obj;
}


/***/ }),

/***/ "IDUA":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/map.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return map; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "ssMU");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ "PXqf");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ "kT3W");




// Return the results of applying the iteratee to each element.
function map(obj, iteratee, context) {
  iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context);
  var _keys = !Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) && Object(_keys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj),
      length = (_keys || obj).length,
      results = Array(length);
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    results[index] = iteratee(obj[currentKey], currentKey, obj);
  }
  return results;
}


/***/ }),

/***/ "J4Do":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_hasObjectTag.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "OeF5");


/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Object'));


/***/ }),

/***/ "JgYV":
/*!************************************************************!*\
  !*** ./src/app/views/users/edituser/edituser.component.ts ***!
  \************************************************************/
/*! exports provided: EdituserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdituserComponent", function() { return EdituserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edituser_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edituser.component.html */ "XroR");
/* harmony import */ var _edituser_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edituser.component.scss */ "iK6Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/user */ "kl1M");
/* harmony import */ var _service_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/users.service */ "f2kA");







let EdituserComponent = class EdituserComponent {
    constructor(route, userService, router) {
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
    }
    ngOnInit() {
        this.roleList = _model_user__WEBPACK_IMPORTED_MODULE_5__["User"].getRole();
        let id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.userService.getbyId(id).subscribe(data => {
            console.log(data);
            this.user = data;
        });
    }
    onUpdate() {
        console.log(this.user);
        this.userService.update(this.user).subscribe(data => {
            console.log(data);
            this.router.navigate([`/users/list`]);
        });
    }
    goBack() {
        this.router.navigate([`/users/list`]);
    }
    getRole(selectedValue) {
        this.roleValue = Object(_model_user__WEBPACK_IMPORTED_MODULE_5__["getRoleValueByName"])(selectedValue);
        this.user.role = [];
        this.user.roles = [...this.user.role, this.roleValue];
    }
};
EdituserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _service_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
EdituserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edituser',
        template: _raw_loader_edituser_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edituser_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _service_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], EdituserComponent);



/***/ }),

/***/ "KQhT":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/compact.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compact; });
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.js */ "SvpX");


// Trim out all falsy values from an array.
function compact(array) {
  return Object(_filter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, Boolean);
}


/***/ }),

/***/ "KSgu":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/iteratee.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return iteratee; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "UgGm");
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIteratee.js */ "oSI6");



// External wrapper for our callback generator. Users may customize
// `_.iteratee` if they want additional predicate/iteratee shorthand styles.
// This abstraction hides the internal-only `argCount` argument.
function iteratee(value, context) {
  return Object(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, context, Infinity);
}
_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].iteratee = iteratee;


/***/ }),

/***/ "KjQr":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/shuffle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shuffle; });
/* harmony import */ var _sample_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sample.js */ "c6cV");


// Shuffle a collection.
function shuffle(obj) {
  return Object(_sample_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, Infinity);
}


/***/ }),

/***/ "L0c3":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/_setup.js ***!
  \***************************************************/
/*! exports provided: VERSION, root, ArrayProto, ObjProto, SymbolProto, push, slice, toString, hasOwnProperty, supportsArrayBuffer, supportsDataView, nativeIsArray, nativeKeys, nativeCreate, nativeIsView, _isNaN, _isFinite, hasEnumBug, nonEnumerableProps, MAX_ARRAY_INDEX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayProto", function() { return ArrayProto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjProto", function() { return ObjProto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolProto", function() { return SymbolProto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "push", function() { return push; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwnProperty", function() { return hasOwnProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsArrayBuffer", function() { return supportsArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsDataView", function() { return supportsDataView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nativeIsArray", function() { return nativeIsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nativeKeys", function() { return nativeKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nativeCreate", function() { return nativeCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nativeIsView", function() { return nativeIsView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isNaN", function() { return _isNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isFinite", function() { return _isFinite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasEnumBug", function() { return hasEnumBug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nonEnumerableProps", function() { return nonEnumerableProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_ARRAY_INDEX", function() { return MAX_ARRAY_INDEX; });
// Current version.
var VERSION = '1.13.2';

// Establish the root object, `window` (`self`) in the browser, `global`
// on the server, or `this` in some virtual machines. We use `self`
// instead of `window` for `WebWorker` support.
var root = typeof self == 'object' && self.self === self && self ||
          typeof global == 'object' && global.global === global && global ||
          Function('return this')() ||
          {};

// Save bytes in the minified (but not gzipped) version:
var ArrayProto = Array.prototype, ObjProto = Object.prototype;
var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

// Create quick reference variables for speed access to core prototypes.
var push = ArrayProto.push,
    slice = ArrayProto.slice,
    toString = ObjProto.toString,
    hasOwnProperty = ObjProto.hasOwnProperty;

// Modern feature detection.
var supportsArrayBuffer = typeof ArrayBuffer !== 'undefined',
    supportsDataView = typeof DataView !== 'undefined';

// All **ECMAScript 5+** native function implementations that we hope to use
// are declared here.
var nativeIsArray = Array.isArray,
    nativeKeys = Object.keys,
    nativeCreate = Object.create,
    nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;

// Create references to these builtin functions because we override them.
var _isNaN = isNaN,
    _isFinite = isFinite;

// Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
  'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

// The largest integer that can be represented exactly.
var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;


/***/ }),

/***/ "L7/m":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/isMap.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "OeF5");
/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stringTagBug.js */ "Qb8F");
/* harmony import */ var _methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_methodFingerprint.js */ "3PVY");




/* harmony default export */ __webpack_exports__["default"] = (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__["isIE11"] ? Object(_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__["ie11fingerprint"])(_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__["mapMethods"]) : Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Map'));


/***/ }),

/***/ "LDNx":
/*!*************************************************************!*\
  !*** ./node_modules/underscore/modules/templateSettings.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "UgGm");


// By default, Underscore uses ERB-style template delimiters. Change the
// following template settings to use alternative delimiters.
/* harmony default export */ __webpack_exports__["default"] = (_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].templateSettings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g
});


/***/ }),

/***/ "M+MJ":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/template.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return template; });
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.js */ "NH6z");
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./underscore.js */ "UgGm");
/* harmony import */ var _templateSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templateSettings.js */ "LDNx");




// When customizing `_.templateSettings`, if you don't want to define an
// interpolation, evaluation or escaping regex, we need one that is
// guaranteed not to match.
var noMatch = /(.)^/;

// Certain characters need to be escaped so that they can be put into a
// string literal.
var escapes = {
  "'": "'",
  '\\': '\\',
  '\r': 'r',
  '\n': 'n',
  '\u2028': 'u2028',
  '\u2029': 'u2029'
};

var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

function escapeChar(match) {
  return '\\' + escapes[match];
}

// In order to prevent third-party code injection through
// `_.templateSettings.variable`, we test it against the following regular
// expression. It is intentionally a bit more liberal than just matching valid
// identifiers, but still prevents possible loopholes through defaults or
// destructuring assignment.
var bareIdentifier = /^\s*(\w|\$)+\s*$/;

// JavaScript micro-templating, similar to John Resig's implementation.
// Underscore templating handles arbitrary delimiters, preserves whitespace,
// and correctly escapes quotes within interpolated code.
// NB: `oldSettings` only exists for backwards compatibility.
function template(text, settings, oldSettings) {
  if (!settings && oldSettings) settings = oldSettings;
  settings = Object(_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, _underscore_js__WEBPACK_IMPORTED_MODULE_1__["default"].templateSettings);

  // Combine delimiters into one regular expression via alternation.
  var matcher = RegExp([
    (settings.escape || noMatch).source,
    (settings.interpolate || noMatch).source,
    (settings.evaluate || noMatch).source
  ].join('|') + '|$', 'g');

  // Compile the template source, escaping string literals appropriately.
  var index = 0;
  var source = "__p+='";
  text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
    source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
    index = offset + match.length;

    if (escape) {
      source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
    } else if (interpolate) {
      source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
    } else if (evaluate) {
      source += "';\n" + evaluate + "\n__p+='";
    }

    // Adobe VMs need the match returned to produce the correct offset.
    return match;
  });
  source += "';\n";

  var argument = settings.variable;
  if (argument) {
    // Insure against third-party code injection. (CVE-2021-23358)
    if (!bareIdentifier.test(argument)) throw new Error(
      'variable is not a bare identifier: ' + argument
    );
  } else {
    // If a variable is not specified, place data values in local scope.
    source = 'with(obj||{}){\n' + source + '}\n';
    argument = 'obj';
  }

  source = "var __t,__p='',__j=Array.prototype.join," +
    "print=function(){__p+=__j.call(arguments,'');};\n" +
    source + 'return __p;\n';

  var render;
  try {
    render = new Function(argument, '_', source);
  } catch (e) {
    e.source = source;
    throw e;
  }

  var template = function(data) {
    return render.call(this, data, _underscore_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
  };

  // Provide the compiled source as a convenience for precompilation.
  template.source = 'function(' + argument + '){\n' + source + '}';

  return template;
}


/***/ }),

/***/ "MrXe":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/extendOwn.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createAssigner.js */ "8Mtv");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "kT3W");



// Assigns a given object with all the own properties in the passed-in
// object(s).
// (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
/* harmony default export */ __webpack_exports__["default"] = (Object(_createAssigner_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "NH6z":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/defaults.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createAssigner.js */ "8Mtv");
/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allKeys.js */ "d3Uc");



// Fill in a given object with default properties.
/* harmony default export */ __webpack_exports__["default"] = (Object(_createAssigner_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_allKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"], true));


/***/ }),

/***/ "NvUF":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/chunk.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chunk; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "L0c3");


// Chunk a single array into multiple arrays, each containing `count` or fewer
// items.
function chunk(array, count) {
  if (count == null || count < 1) return [];
  var result = [];
  var i = 0, length = array.length;
  while (i < length) {
    result.push(_setup_js__WEBPACK_IMPORTED_MODULE_0__["slice"].call(array, i, i += count));
  }
  return result;
}


/***/ }),

/***/ "OTdZ":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_executeBound.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return executeBound; });
/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseCreate.js */ "hLjh");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ "BXuq");



// Internal function to execute `sourceFunc` bound to `context` with optional
// `args`. Determines whether to execute a function as a constructor or as a
// normal function.
function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
  if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
  var self = Object(_baseCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(sourceFunc.prototype);
  var result = sourceFunc.apply(self, args);
  if (Object(_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result)) return result;
  return self;
}


/***/ }),

/***/ "OeF5":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/_tagTester.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tagTester; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "L0c3");


// Internal function for creating a `toString`-based type tester.
function tagTester(name) {
  var tag = '[object ' + name + ']';
  return function(obj) {
    return _setup_js__WEBPACK_IMPORTED_MODULE_0__["toString"].call(obj) === tag;
  };
}


/***/ }),

/***/ "OmtP":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/constant.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return constant; });
// Predicate-generating function. Often useful outside of Underscore.
function constant(value) {
  return function() {
    return value;
  };
}


/***/ }),

/***/ "PCS7":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/isArrayBuffer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "OeF5");


/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('ArrayBuffer'));


/***/ }),

/***/ "PXqf":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/_isArrayLike.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createSizePropertyCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createSizePropertyCheck.js */ "QjsW");
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getLength.js */ "+g8h");



// Internal helper for collection methods to determine whether a collection
// should be iterated as an array or as an object.
// Related: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
// Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
/* harmony default export */ __webpack_exports__["default"] = (Object(_createSizePropertyCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_getLength_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "Ps0k":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/has.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return has; });
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_has.js */ "hOqw");
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_toPath.js */ "qDlR");



// Shortcut function for checking if an object has a given property directly on
// itself (in other words, not on a prototype). Unlike the internal `has`
// function, this public version can also traverse nested properties.
function has(obj, path) {
  path = Object(_toPath_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path);
  var length = path.length;
  for (var i = 0; i < length; i++) {
    var key = path[i];
    if (!Object(_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, key)) return false;
    obj = obj[key];
  }
  return !!length;
}


/***/ }),

/***/ "QIZM":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/throttle.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return throttle; });
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./now.js */ "TR2v");


// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function() {
    previous = options.leading === false ? 0 : Object(_now_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function() {
    var _now = Object(_now_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    if (!previous && options.leading === false) previous = _now;
    var remaining = wait - (_now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = _now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}


/***/ }),

/***/ "QRxI":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/omit.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "+L30");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "S9Yh");
/* harmony import */ var _negate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./negate.js */ "b9SO");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.js */ "IDUA");
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_flatten.js */ "+gt/");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contains.js */ "rJva");
/* harmony import */ var _pick_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pick.js */ "qkpa");








// Return a copy of the object without the disallowed properties.
/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(obj, keys) {
  var iteratee = keys[0], context;
  if (Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iteratee)) {
    iteratee = Object(_negate_js__WEBPACK_IMPORTED_MODULE_2__["default"])(iteratee);
    if (keys.length > 1) context = keys[1];
  } else {
    keys = Object(_map_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_flatten_js__WEBPACK_IMPORTED_MODULE_4__["default"])(keys, false, false), String);
    iteratee = function(value, key) {
      return !Object(_contains_js__WEBPACK_IMPORTED_MODULE_5__["default"])(keys, key);
    };
  }
  return Object(_pick_js__WEBPACK_IMPORTED_MODULE_6__["default"])(obj, iteratee, context);
}));


/***/ }),

/***/ "QSsw":
/*!*********************************************!*\
  !*** ./src/app/views/users/users.module.ts ***!
  \*********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-routing.module */ "VY+B");
/* harmony import */ var _service_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/users.service */ "f2kA");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users.component */ "xSMm");
/* harmony import */ var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/auth.interceptor */ "cJIb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pagination/pagination.module */ "/R+O");
/* harmony import */ var _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./adduser/adduser.component */ "WMTd");
/* harmony import */ var _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edituser/edituser.component */ "JgYV");












let UsersModule = class UsersModule {
};
UsersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"],
            _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_10__["AdduserComponent"],
            _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_11__["EdituserComponent"]
        ],
        exports: [
            _users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
            _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ],
        providers: [_service_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"], _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["authInterceptorProviders"]]
    })
], UsersModule);



/***/ }),

/***/ "Qb8F":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_stringTagBug.js ***!
  \**********************************************************/
/*! exports provided: hasStringTagBug, isIE11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasStringTagBug", function() { return hasStringTagBug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE11", function() { return isIE11; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "L0c3");
/* harmony import */ var _hasObjectTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hasObjectTag.js */ "J4Do");



// In IE 10 - Edge 13, `DataView` has string tag `'[object Object]'`.
// In IE 11, the most common among them, this problem also applies to
// `Map`, `WeakMap` and `Set`.
var hasStringTagBug = (
      _setup_js__WEBPACK_IMPORTED_MODULE_0__["supportsDataView"] && Object(_hasObjectTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(new DataView(new ArrayBuffer(8)))
    ),
    isIE11 = (typeof Map !== 'undefined' && Object(_hasObjectTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(new Map));


/***/ }),

/***/ "QjsW":
/*!*********************************************************************!*\
  !*** ./node_modules/underscore/modules/_createSizePropertyCheck.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSizePropertyCheck; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "L0c3");


// Common internal logic for `isArrayLike` and `isBufferLike`.
function createSizePropertyCheck(getSizeProperty) {
  return function(collection) {
    var sizeProperty = getSizeProperty(collection);
    return typeof sizeProperty == 'number' && sizeProperty >= 0 && sizeProperty <= _setup_js__WEBPACK_IMPORTED_MODULE_0__["MAX_ARRAY_INDEX"];
  }
}


/***/ }),

/***/ "QmgM":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/create.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return create; });
/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseCreate.js */ "hLjh");
/* harmony import */ var _extendOwn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extendOwn.js */ "MrXe");



// Creates an object that inherits from the given prototype object.
// If additional properties are provided then they will be added to the
// created object.
function create(prototype, props) {
  var result = Object(_baseCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(prototype);
  if (props) Object(_extendOwn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, props);
  return result;
}


/***/ }),

/***/ "Rfqy":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/wrap.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return wrap; });
/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partial.js */ "5RNJ");


// Returns the first function passed as an argument to the second,
// allowing you to adjust arguments, run code before and after, and
// conditionally execute the original function.
function wrap(func, wrapper) {
  return Object(_partial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(wrapper, func);
}


/***/ }),

/***/ "S9Yh":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/isFunction.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "OeF5");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "L0c3");



var isFunction = Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Function');

// Optimize `isFunction` if appropriate. Work around some `typeof` bugs in old
// v8, IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
var nodelist = _setup_js__WEBPACK_IMPORTED_MODULE_1__["root"].document && _setup_js__WEBPACK_IMPORTED_MODULE_1__["root"].document.childNodes;
if ( true && typeof Int8Array != 'object' && typeof nodelist != 'function') {
  isFunction = function(obj) {
    return typeof obj == 'function' || false;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (isFunction);


/***/ }),

/***/ "SmPd":
/*!**************************************************!*\
  !*** ./src/app/views/users/users.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-header {\n  height: auto;\n}\n.card-header .card-icons {\n  float: right;\n}\n.card-header .card-icons .icon-wrapper {\n  width: 30px;\n  height: 25px;\n  padding: 15px;\n  color: #23282c !important;\n  text-decoration: none;\n}\n.card-header .card-icons .icon-wrapper i {\n  font-size: large;\n}\n.addbutton {\n  padding: 0;\n  margin: 0;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtBQUVSO0FBRFE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBR1o7QUFGWTtFQUNJLGdCQUFBO0FBSWhCO0FBR0E7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7QUFBSiIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAuY2FyZC1pY29ucyB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIC5pY29uLXdyYXBwZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjMyODJjIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi5hZGRidXR0b257XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XHJcbiAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "SuqQ":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/each.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return each; });
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_optimizeCb.js */ "udg+");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ "PXqf");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ "kT3W");




// The cornerstone for collection functions, an `each`
// implementation, aka `forEach`.
// Handles raw objects in addition to array-likes. Treats all
// sparse array-likes as if they were dense.
function each(obj, iteratee, context) {
  iteratee = Object(_optimizeCb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context);
  var i, length;
  if (Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj)) {
    for (i = 0, length = obj.length; i < length; i++) {
      iteratee(obj[i], i, obj);
    }
  } else {
    var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj);
    for (i = 0, length = _keys.length; i < length; i++) {
      iteratee(obj[_keys[i]], _keys[i], obj);
    }
  }
  return obj;
}


/***/ }),

/***/ "SvAc":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/min.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return min; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "PXqf");
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./values.js */ "0CTw");
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cb.js */ "ssMU");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./each.js */ "SuqQ");





// Return the minimum element (or element-based computation).
function min(obj, iteratee, context) {
  var result = Infinity, lastComputed = Infinity,
      value, computed;
  if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
    obj = Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) ? obj : Object(_values_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value < result) {
        result = value;
      }
    }
  } else {
    iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_2__["default"])(iteratee, context);
    Object(_each_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, function(v, index, list) {
      computed = iteratee(v, index, list);
      if (computed < lastComputed || computed === Infinity && result === Infinity) {
        result = v;
        lastComputed = computed;
      }
    });
  }
  return result;
}


/***/ }),

/***/ "SvpX":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/filter.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return filter; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "ssMU");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ "SuqQ");



// Return all the elements that pass a truth test.
function filter(obj, predicate, context) {
  var results = [];
  predicate = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(predicate, context);
  Object(_each_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, function(value, index, list) {
    if (predicate(value, index, list)) results.push(value);
  });
  return results;
}


/***/ }),

/***/ "TR2v":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/now.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// A (possibly faster) way to get the current timestamp as an integer.
/* harmony default export */ __webpack_exports__["default"] = (Date.now || function() {
  return new Date().getTime();
});


/***/ }),

/***/ "TRxL":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/bindAll.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "+L30");
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_flatten.js */ "+gt/");
/* harmony import */ var _bind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bind.js */ "G8Mm");




// Bind a number of an object's methods to that object. Remaining arguments
// are the method names to be bound. Useful for ensuring that all callbacks
// defined on an object belong to it.
/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(obj, keys) {
  keys = Object(_flatten_js__WEBPACK_IMPORTED_MODULE_1__["default"])(keys, false, false);
  var index = keys.length;
  if (index < 1) throw new Error('bindAll must be passed function names');
  while (index--) {
    var key = keys[index];
    obj[key] = Object(_bind_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj[key], obj);
  }
  return obj;
}));


/***/ }),

/***/ "TkW4":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/unescape.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createEscaper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createEscaper.js */ "fPcu");
/* harmony import */ var _unescapeMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_unescapeMap.js */ "b7GC");



// Function for unescaping strings from HTML interpolation.
/* harmony default export */ __webpack_exports__["default"] = (Object(_createEscaper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_unescapeMap_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "TyRk":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isRegExp.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "OeF5");


/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('RegExp'));


/***/ }),

/***/ "ULn8":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/initial.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initial; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "L0c3");


// Returns everything but the last entry of the array. Especially useful on
// the arguments object. Passing **n** will return all the values in
// the array, excluding the last N.
function initial(array, n, guard) {
  return _setup_js__WEBPACK_IMPORTED_MODULE_0__["slice"].call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
}


/***/ }),

/***/ "UeJw":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/compose.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compose; });
// Returns a function that is the composition of a list of functions, each
// consuming the return value of the function that follows.
function compose() {
  var args = arguments;
  var start = args.length - 1;
  return function() {
    var i = start;
    var result = args[start].apply(this, arguments);
    while (i--) result = args[i].call(this, result);
    return result;
  };
}


/***/ }),

/***/ "UgGm":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/underscore.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "L0c3");


// If Underscore is called as a function, it returns a wrapped object that can
// be used OO-style. This wrapper holds altered versions of all functions added
// through `_.mixin`. Wrapped objects may be chained.
function _(obj) {
  if (obj instanceof _) return obj;
  if (!(this instanceof _)) return new _(obj);
  this._wrapped = obj;
}

_.VERSION = _setup_js__WEBPACK_IMPORTED_MODULE_0__["VERSION"];

// Extracts the result from a wrapped and chained object.
_.prototype.value = function() {
  return this._wrapped;
};

// Provide unwrapping proxies for some methods used in engine operations
// such as arithmetic and JSON stringification.
_.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

_.prototype.toString = function() {
  return String(this._wrapped);
};


/***/ }),

/***/ "VY+B":
/*!*****************************************************!*\
  !*** ./src/app/views/users/users-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adduser/adduser.component */ "WMTd");
/* harmony import */ var _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edituser/edituser.component */ "JgYV");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users.component */ "xSMm");






const routes = [
    {
        path: '',
        data: {
            title: 'Users'
        },
        children: [
            {
                path: '',
                redirectTo: 'list'
            },
            {
                path: 'list',
                component: _users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"],
                data: {
                    title: 'list'
                }
            },
            {
                path: 'add',
                component: _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_3__["AdduserComponent"],
                data: {
                    title: 'add'
                }
            },
            {
                path: 'edit/:id',
                component: _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_4__["EdituserComponent"],
                data: {
                    title: 'edit'
                }
            }
        ]
    }
];
let UsersRoutingModule = class UsersRoutingModule {
};
UsersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UsersRoutingModule);



/***/ }),

/***/ "Vwl8":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/_escapeMap.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Internal list of HTML entities for escaping.
/* harmony default export */ __webpack_exports__["default"] = ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;'
});


/***/ }),

/***/ "W1oq":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/isWeakSet.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "OeF5");


/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('WeakSet'));


/***/ }),

/***/ "WMTd":
/*!**********************************************************!*\
  !*** ./src/app/views/users/adduser/adduser.component.ts ***!
  \**********************************************************/
/*! exports provided: AdduserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdduserComponent", function() { return AdduserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_adduser_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./adduser.component.html */ "tpVi");
/* harmony import */ var _adduser_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adduser.component.scss */ "8EJJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/user */ "kl1M");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/auth.service */ "6uu6");







let AdduserComponent = class AdduserComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
    }
    ngOnInit() {
        this.roleList = _model_user__WEBPACK_IMPORTED_MODULE_5__["User"].getRole();
    }
    onSubmit() {
        const { username, email, password, role } = this.user;
        this.service.register(username, email, password, role).subscribe(data => {
            console.log(data);
            this.router.navigate([`/users/list`]);
        });
    }
    goBack() {
        this.router.navigate([`/users/list`]);
    }
    getRole(selectedValue) {
        this.rolevalue = Object(_model_user__WEBPACK_IMPORTED_MODULE_5__["getRoleValueByName"])(selectedValue);
        this.user.role = [];
        this.user.role = [...this.user.role, this.rolevalue];
    }
};
AdduserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
AdduserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-adduser',
        template: _raw_loader_adduser_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_adduser_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
], AdduserComponent);



/***/ }),

/***/ "Whtb":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/reduceRight.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createReduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createReduce.js */ "q6hG");


// The right-associative version of reduce, also known as `foldr`.
/* harmony default export */ __webpack_exports__["default"] = (Object(_createReduce_js__WEBPACK_IMPORTED_MODULE_0__["default"])(-1));


/***/ }),

/***/ "WmIe":
/*!*************************************!*\
  !*** ./src/app/pagination/index.ts ***!
  \*************************************/
/*! exports provided: PaginationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagination_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.service */ "y5Ac");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return _pagination_service__WEBPACK_IMPORTED_MODULE_0__["PaginationService"]; });




/***/ }),

/***/ "X+A/":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/_group.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return group; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "ssMU");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ "SuqQ");



// An internal function used for aggregate "group by" operations.
function group(behavior, partition) {
  return function(obj, iteratee, context) {
    var result = partition ? [[], []] : {};
    iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context);
    Object(_each_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, function(value, index) {
      var key = iteratee(value, index, obj);
      behavior(result, value, key);
    });
    return result;
  };
}


/***/ }),

/***/ "XYRq":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isArray.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "L0c3");
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_tagTester.js */ "OeF5");



// Is a given value an array?
// Delegates to ECMA5's native `Array.isArray`.
/* harmony default export */ __webpack_exports__["default"] = (_setup_js__WEBPACK_IMPORTED_MODULE_0__["nativeIsArray"] || Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Array'));


/***/ }),

/***/ "XroR":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/users/edituser/edituser.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"EditUser col-md-6\">\n    <div class=\"card \">\n       <div class=\"card-header\">\n          Edit User\n       </div>\n       <div class=\"card-body\">\n          <form #userform=\"ngForm\" (ngSubmit)=\"f.form.valid \" #f=\"ngForm\" novalidate >\n          <div class=\"input-group mb-3\">\n             <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n             </div>\n             <input type=\"text\" class=\"form-control \"placeholder=\"Username\" autocomplete=\"username\"\n             [(ngModel)]=\"user.username\" name=\"username\"minlength=\"5\" maxlength=\"20\"\n             #username=\"ngModel\" required  />\n          </div>\n          <div class=\"input-group mb-3\">\n             <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">@</span>\n             </div>\n             <input type=\"text\" class=\"form-control\"  placeholder=\"Email\" autocomplete=\"email\" name=\"email\"\n             [(ngModel)]=\"user.email\"   #email=\"ngModel\" email required>\n          </div>\n          </form>\n       </div>\n       <div  class=\"card-footer\">\n          <button  type=\"submit\" [disabled]=\"!userform.valid\" (click)=\"onUpdate()\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Save Changes</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\" (click)=\"goBack()\"><i class=\"fa fa-ban\"></i> Back</button> \n       </div>\n    </div>\n </div>");

/***/ }),

/***/ "Y4kH":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/rest.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rest; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "L0c3");


// Returns everything but the first entry of the `array`. Especially useful on
// the `arguments` object. Passing an **n** will return the rest N values in the
// `array`.
function rest(array, n, guard) {
  return _setup_js__WEBPACK_IMPORTED_MODULE_0__["slice"].call(array, n == null || guard ? 1 : n);
}


/***/ }),

/***/ "YO08":
/*!*********************************************************************!*\
  !*** ./node_modules/underscore/modules/underscore-array-methods.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "UgGm");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ "SuqQ");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_setup.js */ "L0c3");
/* harmony import */ var _chainResult_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_chainResult.js */ "HTCd");





// Add all mutator `Array` functions to the wrapper.
Object(_each_js__WEBPACK_IMPORTED_MODULE_1__["default"])(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
  var method = _setup_js__WEBPACK_IMPORTED_MODULE_2__["ArrayProto"][name];
  _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype[name] = function() {
    var obj = this._wrapped;
    if (obj != null) {
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) {
        delete obj[0];
      }
    }
    return Object(_chainResult_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, obj);
  };
});

// Add all accessor `Array` functions to the wrapper.
Object(_each_js__WEBPACK_IMPORTED_MODULE_1__["default"])(['concat', 'join', 'slice'], function(name) {
  var method = _setup_js__WEBPACK_IMPORTED_MODULE_2__["ArrayProto"][name];
  _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype[name] = function() {
    var obj = this._wrapped;
    if (obj != null) obj = method.apply(obj, arguments);
    return Object(_chainResult_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, obj);
  };
});

/* harmony default export */ __webpack_exports__["default"] = (_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "Yc1x":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/intersection.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return intersection; });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ "+g8h");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contains.js */ "rJva");



// Produce an array that contains every item shared between all the
// passed-in arrays.
function intersection(array) {
  var result = [];
  var argsLength = arguments.length;
  for (var i = 0, length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array); i < length; i++) {
    var item = array[i];
    if (Object(_contains_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, item)) continue;
    var j;
    for (j = 1; j < argsLength; j++) {
      if (!Object(_contains_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arguments[j], item)) break;
    }
    if (j === argsLength) result.push(item);
  }
  return result;
}


/***/ }),

/***/ "YkI5":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isEmpty.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isEmpty; });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ "+g8h");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "XYRq");
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isString.js */ "Zjcy");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArguments.js */ "qeMZ");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keys.js */ "kT3W");






// Is a given array, string, or object empty?
// An "empty" object has no enumerable own-properties.
function isEmpty(obj) {
  if (obj == null) return true;
  // Skip the more expensive `toString`-based type checks if `obj` has no
  // `.length`.
  var length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj);
  if (typeof length == 'number' && (
    Object(_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) || Object(_isString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj) || Object(_isArguments_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj)
  )) return length === 0;
  return Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_keys_js__WEBPACK_IMPORTED_MODULE_4__["default"])(obj)) === 0;
}


/***/ }),

/***/ "ZDZF":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/clone.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return clone; });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "BXuq");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "XYRq");
/* harmony import */ var _extend_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extend.js */ "2oQQ");




// Create a (shallow-cloned) duplicate of an object.
function clone(obj) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) return obj;
  return Object(_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) ? obj.slice() : Object(_extend_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, obj);
}


/***/ }),

/***/ "ZHc+":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/sortedIndex.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortedIndex; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "ssMU");
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getLength.js */ "+g8h");



// Use a comparator function to figure out the smallest index at which
// an object should be inserted so as to maintain order. Uses binary search.
function sortedIndex(array, obj, iteratee, context) {
  iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context, 1);
  var value = iteratee(obj);
  var low = 0, high = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array);
  while (low < high) {
    var mid = Math.floor((low + high) / 2);
    if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
  }
  return low;
}


/***/ }),

/***/ "Zjcy":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isString.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "OeF5");


/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('String'));


/***/ }),

/***/ "a/Fg":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/reduce.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createReduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createReduce.js */ "q6hG");


// **Reduce** builds up a single result from a list of values, aka `inject`,
// or `foldl`.
/* harmony default export */ __webpack_exports__["default"] = (Object(_createReduce_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1));


/***/ }),

/***/ "b7GC":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/_unescapeMap.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invert.js */ "e8TK");
/* harmony import */ var _escapeMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_escapeMap.js */ "Vwl8");



// Internal list of HTML entities for unescaping.
/* harmony default export */ __webpack_exports__["default"] = (Object(_invert_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_escapeMap_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "b9SO":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/negate.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return negate; });
// Returns a negated version of the passed-in predicate.
function negate(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  };
}


/***/ }),

/***/ "bG0f":
/*!*************************************************************!*\
  !*** ./node_modules/underscore/modules/_shallowProperty.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shallowProperty; });
// Internal helper to generate a function to obtain property `key` from `obj`.
function shallowProperty(key) {
  return function(obj) {
    return obj == null ? void 0 : obj[key];
  };
}


/***/ }),

/***/ "bis8":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/size.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return size; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "PXqf");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "kT3W");



// Return the number of elements in a collection.
function size(obj) {
  if (obj == null) return 0;
  return Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) ? obj.length : Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj).length;
}


/***/ }),

/***/ "c6cV":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/sample.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sample; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "PXqf");
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./values.js */ "0CTw");
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getLength.js */ "+g8h");
/* harmony import */ var _random_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./random.js */ "ceLO");
/* harmony import */ var _toArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toArray.js */ "Em+s");






// Sample **n** random values from a collection using the modern version of the
// [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
// If **n** is not specified, returns a single random element.
// The internal `guard` argument allows it to work with `_.map`.
function sample(obj, n, guard) {
  if (n == null || guard) {
    if (!Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) obj = Object(_values_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj);
    return obj[Object(_random_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj.length - 1)];
  }
  var sample = Object(_toArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(obj);
  var length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_2__["default"])(sample);
  n = Math.max(Math.min(n, length), 0);
  var last = length - 1;
  for (var index = 0; index < n; index++) {
    var rand = Object(_random_js__WEBPACK_IMPORTED_MODULE_3__["default"])(index, last);
    var temp = sample[index];
    sample[index] = sample[rand];
    sample[rand] = temp;
  }
  return sample.slice(0, n);
}


/***/ }),

/***/ "c7o1":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/_keyInObj.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keyInObj; });
// Internal `_.pick` helper function to determine whether `key` is an enumerable
// property name of `obj`.
function keyInObj(value, key, obj) {
  return key in obj;
}


/***/ }),

/***/ "ceLO":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/random.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return random; });
// Return a random integer between `min` and `max` (inclusive).
function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}


/***/ }),

/***/ "d3Uc":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/allKeys.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return allKeys; });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "BXuq");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "L0c3");
/* harmony import */ var _collectNonEnumProps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_collectNonEnumProps.js */ "wSeY");




// Retrieve all the enumerable property names of an object.
function allKeys(obj) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) return [];
  var keys = [];
  for (var key in obj) keys.push(key);
  // Ahem, IE < 9.
  if (_setup_js__WEBPACK_IMPORTED_MODULE_1__["hasEnumBug"]) Object(_collectNonEnumProps_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, keys);
  return keys;
}


/***/ }),

/***/ "dIyz":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isFinite.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isFinite; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "L0c3");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isSymbol.js */ "xSzf");



// Is a given object a finite number?
function isFinite(obj) {
  return !Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) && Object(_setup_js__WEBPACK_IMPORTED_MODULE_0__["_isFinite"])(obj) && !isNaN(parseFloat(obj));
}


/***/ }),

/***/ "e8TK":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/invert.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return invert; });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ "kT3W");


// Invert the keys and values of an object. The values must be serializable.
function invert(obj) {
  var result = {};
  var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj);
  for (var i = 0, length = _keys.length; i < length; i++) {
    result[obj[_keys[i]]] = _keys[i];
  }
  return result;
}


/***/ }),

/***/ "fM56":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagination/pagination.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" *ngIf=\"viewSize === 12\">\r\n    <div class=\"col-md-5\">\r\n        <nav class=\"float-left\">\r\n            <ul class=\"pagination\" *ngIf=\"pager.pages && pager.pages.length\">\r\n                <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                    <a class=\"page-link\" (click)=\"valueChanged(1)\">First</a>\r\n                </li>\r\n                <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                    <a class=\"page-link\" (click)=\"valueChanged(pager.currentPage - 1)\">Previous</a>\r\n                </li>\r\n                <li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                    <a class=\"page-link\" (click)=\"valueChanged(page)\">{{page}}</a>\r\n                </li>\r\n                <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                    <a class=\"page-link\" (click)=\"valueChanged(pager.currentPage + 1)\">Next</a>\r\n                </li>\r\n                <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                    <a class=\"page-link\" (click)=\"valueChanged(pager.totalPages)\">Last</a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n    </div>\r\n    <div class=\"col-md-2 text-center\" style=\"margin-top: 6px;\"><span class=\"label info\">Total\r\n            Record:<b>{{totalData.length}}</b></span></div>\r\n    <div class=\"col-md-5\">\r\n        <div class=\"float-right\">\r\n            <select class=\"form-control float-right\" name=\"pageSize\" [(ngModel)]=\"pageSize\"\r\n                (ngModelChange)=\"changeTotalPage($event)\">\r\n                <option value=\"1\">1</option>\r\n                <option value=\"2\">2</option>\r\n                <option value=\"3\">3</option>\r\n                <option value=\"4\">4</option>\r\n                <option value=\"5\">5</option>\r\n                <option value=\"6\">6</option>\r\n                <option value=\"7\">7</option>\r\n                <option value=\"8\">8</option>\r\n                <option value=\"9\">9</option>\r\n                <option value=\"10\">10</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\"  *ngIf=\"viewSize === 3\">\r\n    <div class=\"col-sm-3\" style=\"display: flex;float: left;\" >\r\n        \r\n            <nav class=\"float-left\">\r\n                <ul class=\"pagination\" *ngIf=\"pager.pages && pager.pages.length\">\r\n                    <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                        <a class=\"page-link\" (click)=\"valueChanged(1)\">First</a>\r\n                    </li>\r\n                    <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                        <a class=\"page-link\" (click)=\"valueChanged(pager.currentPage - 1)\">Previous</a>\r\n                    </li>\r\n                    <li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                        <a class=\"page-link\" (click)=\"valueChanged(page)\">{{page}}</a>\r\n                    </li>\r\n                    <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                        <a class=\"page-link\" (click)=\"valueChanged(pager.currentPage + 1)\">Next</a>\r\n                    </li>\r\n                    <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                        <a class=\"page-link\" (click)=\"valueChanged(pager.totalPages)\">Last</a>\r\n                    </li>\r\n                </ul>\r\n            </nav>\r\n                <div style=\"margin-left:80px;\"  >\r\n                    <span  class=\"label1 info\">  Total  :{{totalData.length}}</span>\r\n                </div>  \r\n              \r\n                <div style=\"float: right;margin-left:90px;\">\r\n                    <select style=\"margin-left:45px;\" class=\"form-control float-right\" name=\"pageSize\" [(ngModel)]=\"pageSize\"\r\n                    (ngModelChange)=\"changeTotalPage($event)\">\r\n                    <option value=\"1\">1</option>\r\n                    <option value=\"2\">2</option>\r\n                    <option value=\"3\">3</option>\r\n                    <option value=\"4\">4</option>\r\n                    <option value=\"5\">5</option>\r\n                    <option value=\"6\">6</option>\r\n                    <option value=\"7\">7</option>\r\n                    <option value=\"8\">8</option>\r\n                    <option value=\"9\">9</option>\r\n                    <option value=\"10\">10</option>\r\n                </select>\r\n                </div>\r\n                    \r\n            \r\n  </div>\r\n    \r\n</div>");

/***/ }),

/***/ "fPcu":
/*!***********************************************************!*\
  !*** ./node_modules/underscore/modules/_createEscaper.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createEscaper; });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ "kT3W");


// Internal helper to generate functions for escaping and unescaping strings
// to/from HTML interpolation.
function createEscaper(map) {
  var escaper = function(match) {
    return map[match];
  };
  // Regexes for identifying a key that needs to be escaped.
  var source = '(?:' + Object(_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(map).join('|') + ')';
  var testRegexp = RegExp(source);
  var replaceRegexp = RegExp(source, 'g');
  return function(string) {
    string = string == null ? '' : '' + string;
    return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
  };
}


/***/ }),

/***/ "h9Y/":
/*!***************************************************************!*\
  !*** ./node_modules/underscore/modules/_createIndexFinder.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createIndexFinder; });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ "+g8h");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "L0c3");
/* harmony import */ var _isNaN_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNaN.js */ "sjh4");




// Internal function to generate the `_.indexOf` and `_.lastIndexOf` functions.
function createIndexFinder(dir, predicateFind, sortedIndex) {
  return function(array, item, idx) {
    var i = 0, length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array);
    if (typeof idx == 'number') {
      if (dir > 0) {
        i = idx >= 0 ? idx : Math.max(idx + length, i);
      } else {
        length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
      }
    } else if (sortedIndex && idx && length) {
      idx = sortedIndex(array, item);
      return array[idx] === item ? idx : -1;
    }
    if (item !== item) {
      idx = predicateFind(_setup_js__WEBPACK_IMPORTED_MODULE_1__["slice"].call(array, i, length), _isNaN_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
      return idx >= 0 ? idx + i : -1;
    }
    for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
      if (array[idx] === item) return idx;
    }
    return -1;
  };
}


/***/ }),

/***/ "hAGv":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/property.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return property; });
/* harmony import */ var _deepGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_deepGet.js */ "3LU3");
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_toPath.js */ "qDlR");



// Creates a function that, when passed an object, will traverse that object’s
// properties down the given `path`, specified as an array of keys or indices.
function property(path) {
  path = Object(_toPath_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path);
  return function(obj) {
    return Object(_deepGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, path);
  };
}


/***/ }),

/***/ "hLjh":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/_baseCreate.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return baseCreate; });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "BXuq");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "L0c3");



// Create a naked function reference for surrogate-prototype-swapping.
function ctor() {
  return function(){};
}

// An internal function for creating a new object that inherits from another.
function baseCreate(prototype) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(prototype)) return {};
  if (_setup_js__WEBPACK_IMPORTED_MODULE_1__["nativeCreate"]) return Object(_setup_js__WEBPACK_IMPORTED_MODULE_1__["nativeCreate"])(prototype);
  var Ctor = ctor();
  Ctor.prototype = prototype;
  var result = new Ctor;
  Ctor.prototype = null;
  return result;
}


/***/ }),

/***/ "hOBv":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/union.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "+L30");
/* harmony import */ var _uniq_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uniq.js */ "/HDF");
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_flatten.js */ "+gt/");




// Produce an array that contains the union: each distinct element from all of
// the passed-in arrays.
/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(arrays) {
  return Object(_uniq_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_flatten_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arrays, true, true));
}));


/***/ }),

/***/ "hOqw":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/_has.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return has; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "L0c3");


// Internal function to check whether `key` is an own property name of `obj`.
function has(obj, key) {
  return obj != null && _setup_js__WEBPACK_IMPORTED_MODULE_0__["hasOwnProperty"].call(obj, key);
}


/***/ }),

/***/ "hQTH":
/*!****************************************************!*\
  !*** ./src/app/pagination/pagination.component.ts ***!
  \****************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pagination_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pagination.component.html */ "fM56");
/* harmony import */ var _pagination_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.component.scss */ "qiXs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "WmIe");





let PaginationComponent = class PaginationComponent {
    constructor(pagerService) {
        this.pagerService = pagerService;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.totalData = [];
        this.pageSize = 10;
        this.viewSize = 12; // 12 is default 
        this.pager = {};
        this.totalPage = 10;
    }
    ngOnInit() {
        console.log(this.totalData);
        this.valueChanged(1);
    }
    changeTotalPage(event) {
        console.log(event);
        this.valueChanged(1);
    }
    valueChanged(page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        console.log("this.totalPage>>", this.totalPage);
        console.log("this.page>>", page);
        this.pager = this.pagerService.getPager(this.totalData.length, page, this.pageSize);
        this.pagedItems = this.totalData.slice(this.pager.startIndex, this.pager.endIndex + 1);
        this.valueChange.emit(this.pagedItems);
    }
};
PaginationComponent.ctorParameters = () => [
    { type: _index__WEBPACK_IMPORTED_MODULE_4__["PaginationService"] }
];
PaginationComponent.propDecorators = {
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    totalData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    viewSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PaginationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pagination',
        template: _raw_loader_pagination_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pagination_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_index__WEBPACK_IMPORTED_MODULE_4__["PaginationService"]])
], PaginationComponent);



/***/ }),

/***/ "hUUU":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/identity.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return identity; });
// Keep the identity function around for default iteratees.
function identity(value) {
  return value;
}


/***/ }),

/***/ "iK6Y":
/*!**************************************************************!*\
  !*** ./src/app/views/users/edituser/edituser.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0dXNlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "iLdE":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/countBy.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_group.js */ "X+A/");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_has.js */ "hOqw");



// Counts instances of an object that group by a certain criterion. Pass
// either a string attribute to count by, or a function that returns the
// criterion.
/* harmony default export */ __webpack_exports__["default"] = (Object(_group_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(result, value, key) {
  if (Object(_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, key)) result[key]++; else result[key] = 1;
}));


/***/ }),

/***/ "iqdv":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/unzip.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return unzip; });
/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./max.js */ "x10Y");
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getLength.js */ "+g8h");
/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pluck.js */ "AiSn");




// Complement of zip. Unzip accepts an array of arrays and groups
// each array's elements on shared indices.
function unzip(array) {
  var length = array && Object(_max_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, _getLength_js__WEBPACK_IMPORTED_MODULE_1__["default"]).length || 0;
  var result = Array(length);

  for (var index = 0; index < length; index++) {
    result[index] = Object(_pluck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(array, index);
  }
  return result;
}


/***/ }),

/***/ "kT3W":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/keys.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keys; });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "BXuq");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "L0c3");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_has.js */ "hOqw");
/* harmony import */ var _collectNonEnumProps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_collectNonEnumProps.js */ "wSeY");





// Retrieve the names of an object's own properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`.
function keys(obj) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) return [];
  if (_setup_js__WEBPACK_IMPORTED_MODULE_1__["nativeKeys"]) return Object(_setup_js__WEBPACK_IMPORTED_MODULE_1__["nativeKeys"])(obj);
  var keys = [];
  for (var key in obj) if (Object(_has_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, key)) keys.push(key);
  // Ahem, IE < 9.
  if (_setup_js__WEBPACK_IMPORTED_MODULE_1__["hasEnumBug"]) Object(_collectNonEnumProps_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, keys);
  return keys;
}


/***/ }),

/***/ "kbih":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/defer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partial.js */ "5RNJ");
/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delay.js */ "lTa4");
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./underscore.js */ "UgGm");




// Defers a function, scheduling it to run after the current call stack has
// cleared.
/* harmony default export */ __webpack_exports__["default"] = (Object(_partial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_delay_js__WEBPACK_IMPORTED_MODULE_1__["default"], _underscore_js__WEBPACK_IMPORTED_MODULE_2__["default"], 1));


/***/ }),

/***/ "kzDP":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/isDate.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "OeF5");


/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Date'));


/***/ }),

/***/ "kzNz":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/range.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return range; });
// Generate an integer Array containing an arithmetic progression. A port of
// the native Python `range()` function. See
// [the Python documentation](https://docs.python.org/library/functions.html#range).
function range(start, stop, step) {
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  if (!step) {
    step = stop < start ? -1 : 1;
  }

  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range = Array(length);

  for (var idx = 0; idx < length; idx++, start += step) {
    range[idx] = start;
  }

  return range;
}


/***/ }),

/***/ "lTa4":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/delay.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "+L30");


// Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.
/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(func, wait, args) {
  return setTimeout(function() {
    return func.apply(null, args);
  }, wait);
}));


/***/ }),

/***/ "mjQP":
/*!************************************************************************!*\
  !*** ./node_modules/underscore/modules/_createPredicateIndexFinder.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createPredicateIndexFinder; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "ssMU");
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getLength.js */ "+g8h");



// Internal function to generate `_.findIndex` and `_.findLastIndex`.
function createPredicateIndexFinder(dir) {
  return function(array, predicate, context) {
    predicate = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(predicate, context);
    var length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array);
    var index = dir > 0 ? 0 : length - 1;
    for (; index >= 0 && index < length; index += dir) {
      if (predicate(array[index], index, array)) return index;
    }
    return -1;
  };
}


/***/ }),

/***/ "oB1/":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/isBoolean.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isBoolean; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "L0c3");


// Is a given value a boolean?
function isBoolean(obj) {
  return obj === true || obj === false || _setup_js__WEBPACK_IMPORTED_MODULE_0__["toString"].call(obj) === '[object Boolean]';
}


/***/ }),

/***/ "oOf3":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js ***!
  \*************************************************************************/
/*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DEFAULT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function() { return NgxPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function() { return PaginationControlsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function() { return PaginationControlsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatePipe", function() { return PaginatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");






function PaginationControlsComponent_ul_2_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_2_li_1_a_1_Template_a_keyup_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.previous(); })("click", function PaginationControlsComponent_ul_2_li_1_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.previous(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r5.previousLabel + " " + ctx_r5.screenReaderPageLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.previousLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.screenReaderPageLabel);
} }
function PaginationControlsComponent_ul_2_li_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.previousLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.screenReaderPageLabel);
} }
function PaginationControlsComponent_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_1_a_1_Template, 4, 3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_li_1_span_2_Template, 4, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r0.isFirstPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 1 < _r0.getCurrent());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.isFirstPage());
} }
function PaginationControlsComponent_ul_2_li_4_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_2_li_4_a_1_Template_a_keyup_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.setCurrent(page_r10.value); })("click", function PaginationControlsComponent_ul_2_li_4_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.setCurrent(page_r10.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r11.screenReaderPageLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r10.label === "..." ? page_r10.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, page_r10.label, ""));
} }
function PaginationControlsComponent_ul_2_li_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r12.screenReaderCurrentLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r10.label === "..." ? page_r10.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, page_r10.label, ""));
} }
function PaginationControlsComponent_ul_2_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_4_a_1_Template, 6, 5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_li_4_ng_container_2_Template, 6, 5, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var page_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current", _r0.getCurrent() === page_r10.value)("ellipsis", page_r10.label === "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.getCurrent() !== page_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.getCurrent() === page_r10.value);
} }
function PaginationControlsComponent_ul_2_li_5_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_2_li_5_a_1_Template_a_keyup_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.next(); })("click", function PaginationControlsComponent_ul_2_li_5_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r20.nextLabel + " " + ctx_r20.screenReaderPageLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r20.nextLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.screenReaderPageLabel);
} }
function PaginationControlsComponent_ul_2_li_5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r21.nextLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.screenReaderPageLabel);
} }
function PaginationControlsComponent_ul_2_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_5_a_1_Template, 4, 3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_li_5_span_2_Template, 4, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r0.isLastPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r0.isLastPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.isLastPage());
} }
function PaginationControlsComponent_ul_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_1_Template, 3, 4, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationControlsComponent_ul_2_li_4_Template, 3, 6, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationControlsComponent_ul_2_li_5_Template, 3, 4, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("responsive", ctx_r1.responsive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.screenReaderPaginationLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.directionLinks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _r0.getCurrent(), " / ", _r0.getLastPage(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.pages)("ngForTrackBy", ctx_r1.trackByIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.directionLinks);
} }
var PaginationService = /** @class */ (function () {
    function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    /**
     * Register a PaginationInstance with this service. Returns a
     * boolean value signifying whether the instance is new or
     * updated (true = new or updated, false = unchanged).
     */
    PaginationService.prototype.register = function (instance) {
        if (instance.id == null) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            return true;
        }
        else {
            return this.updateInstance(instance);
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
PaginationService.ɵfac = function PaginationService_Factory(t) { return new (t || PaginationService)(); };
PaginationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaginationService, factory: function (t) { return PaginationService.ɵfac(t); } });

    return PaginationService;
}());

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = /** @class */ (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId();
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        var emitChange = this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        else {
            if (emitChange) {
                this.service.change.emit(id);
            }
            // save the state for server-side collection to avoid null
            // flash as new data loads.
            this.saveState(id, collection, collection, start, end);
            return collection;
        }
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, config) {
        this.checkConfig(config);
        return {
            id: config.id != null ? config.id : this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe = __decorate$1([ __metadata("design:paramtypes", [PaginationService])
    ], PaginatePipe);
PaginatePipe.ɵfac = function PaginatePipe_Factory(t) { return new (t || PaginatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationService)); };
PaginatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "paginate", type: PaginatePipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'paginate',
                pure: false
            }]
    }], function () { return [{ type: PaginationService }]; }, null); })();
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\"\n                         (pageBoundsCorrection)=\"pageBoundsCorrection.emit($event)\">\n    <ul class=\"ngx-pagination\"\n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages; trackBy: trackByIndex\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function coerceToBoolean(input) {
    return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = /** @class */ (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (value) {
            this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    PaginationControlsComponent.prototype.trackByIndex = function (index) {
        return index;
    };
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "id", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Number)
    ], PaginationControlsComponent.prototype, "maxSize", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "directionLinks", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "autoHide", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "responsive", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "previousLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "nextLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderPaginationLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderPageLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderCurrentLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsComponent.prototype, "pageChange", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsComponent.prototype, "pageBoundsCorrection", void 0);
PaginationControlsComponent.ɵfac = function PaginationControlsComponent_Factory(t) { return new (t || PaginationControlsComponent)(); };
PaginationControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationControlsComponent, selectors: [["pagination-controls"]], inputs: { maxSize: "maxSize", previousLabel: "previousLabel", nextLabel: "nextLabel", screenReaderPaginationLabel: "screenReaderPaginationLabel", screenReaderPageLabel: "screenReaderPageLabel", screenReaderCurrentLabel: "screenReaderCurrentLabel", directionLinks: "directionLinks", autoHide: "autoHide", responsive: "responsive", id: "id" }, outputs: { pageChange: "pageChange", pageBoundsCorrection: "pageBoundsCorrection" }, decls: 3, vars: 3, consts: [[3, "id", "maxSize", "pageChange", "pageBoundsCorrection"], ["p", "paginationApi"], ["class", "ngx-pagination", 3, "responsive", 4, "ngIf"], [1, "ngx-pagination"], ["class", "pagination-previous", 3, "disabled", 4, "ngIf"], [1, "small-screen"], [3, "current", "ellipsis", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "pagination-next", 3, "disabled", 4, "ngIf"], [1, "pagination-previous"], ["tabindex", "0", 3, "keyup.enter", "click", 4, "ngIf"], [4, "ngIf"], ["tabindex", "0", 3, "keyup.enter", "click"], [1, "show-for-sr"], [1, "pagination-next"]], template: function PaginationControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-template", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationControlsComponent_Template_pagination_template_pageChange_0_listener($event) { return ctx.pageChange.emit($event); })("pageBoundsCorrection", function PaginationControlsComponent_Template_pagination_template_pageBoundsCorrection_0_listener($event) { return ctx.pageBoundsCorrection.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_Template, 6, 9, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("maxSize", ctx.maxSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.autoHide && _r0.pages.length <= 1));
    } }, directives: function () { return [PaginationControlsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]]; }, styles: ["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pagination-controls',
                template: DEFAULT_TEMPLATE,
                styles: [DEFAULT_STYLES],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], previousLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nextLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], screenReaderPaginationLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], screenReaderPageLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], screenReaderCurrentLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageBoundsCorrection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], responsive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return PaginationControlsComponent;
}());

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = /** @class */ (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (this.service.getInstance(this.id).id == null) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.pageBoundsCorrection.emit(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        // Return 1 as default page number
        // Make sense to show 1 instead of empty when there are no items
        var totalPages = Math.max(Math.ceil(totalItems / itemsPerPage), 1);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$2("design:type", String)
    ], PaginationControlsDirective.prototype, "id", void 0);
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$2("design:type", Number)
    ], PaginationControlsDirective.prototype, "maxSize", void 0);
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsDirective.prototype, "pageChange", void 0);
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsDirective.prototype, "pageBoundsCorrection", void 0);
    PaginationControlsDirective = __decorate$3([ __metadata$2("design:paramtypes", [PaginationService,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], PaginationControlsDirective);
PaginationControlsDirective.ɵfac = function PaginationControlsDirective_Factory(t) { return new (t || PaginationControlsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
PaginationControlsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PaginationControlsDirective, selectors: [["pagination-template"], ["", "pagination-template", ""]], inputs: { maxSize: "maxSize", id: "id" }, outputs: { pageChange: "pageChange", pageBoundsCorrection: "pageBoundsCorrection" }, exportAs: ["paginationApi"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationControlsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'pagination-template,[pagination-template]',
                exportAs: 'paginationApi'
            }]
    }], function () { return [{ type: PaginationService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageBoundsCorrection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return PaginationControlsDirective;
}());

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NgxPaginationModule = /** @class */ (function () {
    function NgxPaginationModule() {
    }
NgxPaginationModule.ɵfac = function NgxPaginationModule_Factory(t) { return new (t || NgxPaginationModule)(); };
NgxPaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxPaginationModule });
NgxPaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [PaginationService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxPaginationModule, { declarations: function () { return [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPaginationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [
                    PaginatePipe,
                    PaginationControlsComponent,
                    PaginationControlsDirective
                ],
                providers: [PaginationService],
                exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
            }]
    }], function () { return []; }, null); })();
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBhZ2luYXRpb24uanMiLCJzb3VyY2VzIjpbIm5neC1wYWdpbmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FLTztBQUNQOzs7Ozs7Ozs7MkVBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFTb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBS087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztvQkFBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztnREFZNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE5nTW9kdWxlLCBPdXRwdXQsIFBpcGUsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG52YXIgUGFnaW5hdGlvblNlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQYWdpbmF0aW9uU2VydmljZSgpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuREVGQVVMVF9JRCA9ICdERUZBVUxUX1BBR0lOQVRJT05fSUQnO1xyXG4gICAgfVxyXG4gICAgUGFnaW5hdGlvblNlcnZpY2UucHJvdG90eXBlLmRlZmF1bHRJZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuREVGQVVMVF9JRDsgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBQYWdpbmF0aW9uSW5zdGFuY2Ugd2l0aCB0aGlzIHNlcnZpY2UuIFJldHVybnMgYVxyXG4gICAgICogYm9vbGVhbiB2YWx1ZSBzaWduaWZ5aW5nIHdoZXRoZXIgdGhlIGluc3RhbmNlIGlzIG5ldyBvclxyXG4gICAgICogdXBkYXRlZCAodHJ1ZSA9IG5ldyBvciB1cGRhdGVkLCBmYWxzZSA9IHVuY2hhbmdlZCkuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG4gICAgICAgIGlmIChpbnN0YW5jZS5pZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLmlkID0gdGhpcy5ERUZBVUxUX0lEO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLmlkXSkge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5pZF0gPSBpbnN0YW5jZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVJbnN0YW5jZShpbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgZWFjaCBwcm9wZXJ0eSBvZiB0aGUgaW5zdGFuY2UgYW5kIHVwZGF0ZSBhbnkgdGhhdCBoYXZlIGNoYW5nZWQuIFJldHVyblxyXG4gICAgICogdHJ1ZSBpZiBhbnkgY2hhbmdlcyB3ZXJlIG1hZGUsIGVsc2UgcmV0dXJuIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUudXBkYXRlSW5zdGFuY2UgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuICAgICAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UuaWRdKSB7XHJcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZVtwcm9wXSAhPT0gdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UuaWRdW3Byb3BdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5pZF1bcHJvcF0gPSBpbnN0YW5jZVtwcm9wXTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGFuZ2VkO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBwYWdlIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvblNlcnZpY2UucHJvdG90eXBlLmdldEN1cnJlbnRQYWdlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2VzW2lkXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbaWRdLmN1cnJlbnRQYWdlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGN1cnJlbnQgcGFnZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLnByb3RvdHlwZS5zZXRDdXJyZW50UGFnZSA9IGZ1bmN0aW9uIChpZCwgcGFnZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlc1tpZF0pIHtcclxuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNbaWRdO1xyXG4gICAgICAgICAgICB2YXIgbWF4UGFnZSA9IE1hdGguY2VpbChpbnN0YW5jZS50b3RhbEl0ZW1zIC8gaW5zdGFuY2UuaXRlbXNQZXJQYWdlKTtcclxuICAgICAgICAgICAgaWYgKHBhZ2UgPD0gbWF4UGFnZSAmJiAxIDw9IHBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzW2lkXS5jdXJyZW50UGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIGluc3RhbmNlLnRvdGFsSXRlbXNcclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvblNlcnZpY2UucHJvdG90eXBlLnNldFRvdGFsSXRlbXMgPSBmdW5jdGlvbiAoaWQsIHRvdGFsSXRlbXMpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZXNbaWRdICYmIDAgPD0gdG90YWxJdGVtcykge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlc1tpZF0udG90YWxJdGVtcyA9IHRvdGFsSXRlbXM7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIGluc3RhbmNlLml0ZW1zUGVyUGFnZS5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvblNlcnZpY2UucHJvdG90eXBlLnNldEl0ZW1zUGVyUGFnZSA9IGZ1bmN0aW9uIChpZCwgaXRlbXNQZXJQYWdlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2VzW2lkXSkge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlc1tpZF0uaXRlbXNQZXJQYWdlID0gaXRlbXNQZXJQYWdlO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgY2xvbmUgb2YgdGhlIHBhZ2luYXRpb24gaW5zdGFuY2Ugb2JqZWN0IG1hdGNoaW5nIHRoZSBpZC4gSWYgbm9cclxuICAgICAqIGlkIHNwZWNpZmllZCwgcmV0dXJucyB0aGUgaW5zdGFuY2UgY29ycmVzcG9uZGluZyB0byB0aGUgZGVmYXVsdCBpZC5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvblNlcnZpY2UucHJvdG90eXBlLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgaWYgKGlkID09PSB2b2lkIDApIHsgaWQgPSB0aGlzLkRFRkFVTFRfSUQ7IH1cclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZXNbaWRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsb25lKHRoaXMuaW5zdGFuY2VzW2lkXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFBlcmZvcm0gYSBzaGFsbG93IGNsb25lIG9mIGFuIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvblNlcnZpY2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBpIGluIG9iaikge1xyXG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRbaV0gPSBvYmpbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUGFnaW5hdGlvblNlcnZpY2U7XHJcbn0oKSk7XG5cbnZhciBfX2RlY29yYXRlJDEgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIExBUkdFX05VTUJFUiA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xyXG52YXIgUGFnaW5hdGVQaXBlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGFnaW5hdGVQaXBlKHNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xyXG4gICAgICAgIC8vIHN0b3JlIHRoZSB2YWx1ZXMgZnJvbSB0aGUgbGFzdCB0aW1lIHRoZSBwaXBlIHdhcyBpbnZva2VkXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xyXG4gICAgfVxyXG4gICAgUGFnaW5hdGVQaXBlLnByb3RvdHlwZS50cmFuc2Zvcm0gPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgYXJncykge1xyXG4gICAgICAgIC8vIFdoZW4gYW4gb2JzZXJ2YWJsZSBpcyBwYXNzZWQgdGhyb3VnaCB0aGUgQXN5bmNQaXBlLCBpdCB3aWxsIG91dHB1dFxyXG4gICAgICAgIC8vIGBudWxsYCB1bnRpbCB0aGUgc3Vic2NyaXB0aW9uIHJlc29sdmVzLiBJbiB0aGlzIGNhc2UsIHdlIHdhbnQgdG9cclxuICAgICAgICAvLyB1c2UgdGhlIGNhY2hlZCBkYXRhIGZyb20gdGhlIGBzdGF0ZWAgb2JqZWN0IHRvIHByZXZlbnQgdGhlIE5nRm9yXHJcbiAgICAgICAgLy8gZnJvbSBmbGFzaGluZyBlbXB0eSB1bnRpbCB0aGUgcmVhbCB2YWx1ZXMgYXJyaXZlLlxyXG4gICAgICAgIGlmICghKGNvbGxlY3Rpb24gaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgdmFyIF9pZCA9IGFyZ3MuaWQgfHwgdGhpcy5zZXJ2aWNlLmRlZmF1bHRJZCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZVtfaWRdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVtfaWRdLnNsaWNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNlcnZlclNpZGVNb2RlID0gYXJncy50b3RhbEl0ZW1zICYmIGFyZ3MudG90YWxJdGVtcyAhPT0gY29sbGVjdGlvbi5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5jcmVhdGVJbnN0YW5jZShjb2xsZWN0aW9uLCBhcmdzKTtcclxuICAgICAgICB2YXIgaWQgPSBpbnN0YW5jZS5pZDtcclxuICAgICAgICB2YXIgc3RhcnQsIGVuZDtcclxuICAgICAgICB2YXIgcGVyUGFnZSA9IGluc3RhbmNlLml0ZW1zUGVyUGFnZTtcclxuICAgICAgICB2YXIgZW1pdENoYW5nZSA9IHRoaXMuc2VydmljZS5yZWdpc3RlcihpbnN0YW5jZSk7XHJcbiAgICAgICAgaWYgKCFzZXJ2ZXJTaWRlTW9kZSAmJiBjb2xsZWN0aW9uIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgcGVyUGFnZSA9ICtwZXJQYWdlIHx8IExBUkdFX05VTUJFUjtcclxuICAgICAgICAgICAgc3RhcnQgPSAoaW5zdGFuY2UuY3VycmVudFBhZ2UgLSAxKSAqIHBlclBhZ2U7XHJcbiAgICAgICAgICAgIGVuZCA9IHN0YXJ0ICsgcGVyUGFnZTtcclxuICAgICAgICAgICAgdmFyIGlzSWRlbnRpY2FsID0gdGhpcy5zdGF0ZUlzSWRlbnRpY2FsKGlkLCBjb2xsZWN0aW9uLCBzdGFydCwgZW5kKTtcclxuICAgICAgICAgICAgaWYgKGlzSWRlbnRpY2FsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVtpZF0uc2xpY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpY2UgPSBjb2xsZWN0aW9uLnNsaWNlKHN0YXJ0LCBlbmQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlU3RhdGUoaWQsIGNvbGxlY3Rpb24sIHNsaWNlLCBzdGFydCwgZW5kKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZS5jaGFuZ2UuZW1pdChpZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2xpY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChlbWl0Q2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UuY2hhbmdlLmVtaXQoaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHNhdmUgdGhlIHN0YXRlIGZvciBzZXJ2ZXItc2lkZSBjb2xsZWN0aW9uIHRvIGF2b2lkIG51bGxcclxuICAgICAgICAgICAgLy8gZmxhc2ggYXMgbmV3IGRhdGEgbG9hZHMuXHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZVN0YXRlKGlkLCBjb2xsZWN0aW9uLCBjb2xsZWN0aW9uLCBzdGFydCwgZW5kKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIFBhZ2luYXRpb25JbnN0YW5jZSBvYmplY3QsIHVzaW5nIGRlZmF1bHRzIGZvciBhbnkgb3B0aW9uYWwgcHJvcGVydGllcyBub3Qgc3VwcGxpZWQuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRlUGlwZS5wcm90b3R5cGUuY3JlYXRlSW5zdGFuY2UgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja0NvbmZpZyhjb25maWcpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBjb25maWcuaWQgIT0gbnVsbCA/IGNvbmZpZy5pZCA6IHRoaXMuc2VydmljZS5kZWZhdWx0SWQoKSxcclxuICAgICAgICAgICAgaXRlbXNQZXJQYWdlOiArY29uZmlnLml0ZW1zUGVyUGFnZSB8fCAwLFxyXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogK2NvbmZpZy5jdXJyZW50UGFnZSB8fCAxLFxyXG4gICAgICAgICAgICB0b3RhbEl0ZW1zOiArY29uZmlnLnRvdGFsSXRlbXMgfHwgY29sbGVjdGlvbi5sZW5ndGhcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogRW5zdXJlIHRoZSBhcmd1bWVudCBwYXNzZWQgdG8gdGhlIGZpbHRlciBjb250YWlucyB0aGUgcmVxdWlyZWQgcHJvcGVydGllcy5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGVQaXBlLnByb3RvdHlwZS5jaGVja0NvbmZpZyA9IGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgICAgICB2YXIgcmVxdWlyZWQgPSBbJ2l0ZW1zUGVyUGFnZScsICdjdXJyZW50UGFnZSddO1xyXG4gICAgICAgIHZhciBtaXNzaW5nID0gcmVxdWlyZWQuZmlsdGVyKGZ1bmN0aW9uIChwcm9wKSB7IHJldHVybiAhKHByb3AgaW4gY29uZmlnKTsgfSk7XHJcbiAgICAgICAgaWYgKDAgPCBtaXNzaW5nLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYWdpbmF0ZVBpcGU6IEFyZ3VtZW50IGlzIG1pc3NpbmcgdGhlIGZvbGxvd2luZyByZXF1aXJlZCBwcm9wZXJ0aWVzOiBcIiArIG1pc3Npbmcuam9pbignLCAnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVG8gYXZvaWQgcmV0dXJuaW5nIGEgYnJhbmQgbmV3IGFycmF5IGVhY2ggdGltZSB0aGUgcGlwZSBpcyBydW4sIHdlIHN0b3JlIHRoZSBzdGF0ZSBvZiB0aGUgc2xpY2VkXHJcbiAgICAgKiBhcnJheSBmb3IgYSBnaXZlbiBpZC4gVGhpcyBtZWFucyB0aGF0IHRoZSBuZXh0IHRpbWUgdGhlIHBpcGUgaXMgcnVuIG9uIHRoaXMgY29sbGVjdGlvbiAmIGlkLCB3ZSBqdXN0XHJcbiAgICAgKiBuZWVkIHRvIGNoZWNrIHRoYXQgdGhlIGNvbGxlY3Rpb24sIHN0YXJ0IGFuZCBlbmQgcG9pbnRzIGFyZSBhbGwgaWRlbnRpY2FsLCBhbmQgaWYgc28sIHJldHVybiB0aGVcclxuICAgICAqIGxhc3Qgc2xpY2VkIGFycmF5LlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0ZVBpcGUucHJvdG90eXBlLnNhdmVTdGF0ZSA9IGZ1bmN0aW9uIChpZCwgY29sbGVjdGlvbiwgc2xpY2UsIHN0YXJ0LCBlbmQpIHtcclxuICAgICAgICB0aGlzLnN0YXRlW2lkXSA9IHtcclxuICAgICAgICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbixcclxuICAgICAgICAgICAgc2l6ZTogY29sbGVjdGlvbi5sZW5ndGgsXHJcbiAgICAgICAgICAgIHNsaWNlOiBzbGljZSxcclxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxyXG4gICAgICAgICAgICBlbmQ6IGVuZFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBGb3IgYSBnaXZlbiBpZCwgcmV0dXJucyB0cnVlIGlmIHRoZSBjb2xsZWN0aW9uLCBzaXplLCBzdGFydCBhbmQgZW5kIHZhbHVlcyBhcmUgaWRlbnRpY2FsLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0ZVBpcGUucHJvdG90eXBlLnN0YXRlSXNJZGVudGljYWwgPSBmdW5jdGlvbiAoaWQsIGNvbGxlY3Rpb24sIHN0YXJ0LCBlbmQpIHtcclxuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlW2lkXTtcclxuICAgICAgICBpZiAoIXN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGlzTWV0YURhdGFJZGVudGljYWwgPSBzdGF0ZS5zaXplID09PSBjb2xsZWN0aW9uLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICBzdGF0ZS5zdGFydCA9PT0gc3RhcnQgJiZcclxuICAgICAgICAgICAgc3RhdGUuZW5kID09PSBlbmQ7XHJcbiAgICAgICAgaWYgKCFpc01ldGFEYXRhSWRlbnRpY2FsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlLnNsaWNlLmV2ZXJ5KGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkgeyByZXR1cm4gZWxlbWVudCA9PT0gY29sbGVjdGlvbltzdGFydCArIGluZGV4XTsgfSk7XHJcbiAgICB9O1xyXG4gICAgUGFnaW5hdGVQaXBlID0gX19kZWNvcmF0ZSQxKFtcclxuICAgICAgICBQaXBlKHtcclxuICAgICAgICAgICAgbmFtZTogJ3BhZ2luYXRlJyxcclxuICAgICAgICAgICAgcHVyZTogZmFsc2VcclxuICAgICAgICB9KSxcclxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW1BhZ2luYXRpb25TZXJ2aWNlXSlcclxuICAgIF0sIFBhZ2luYXRlUGlwZSk7XHJcbiAgICByZXR1cm4gUGFnaW5hdGVQaXBlO1xyXG59KCkpO1xuXG4vKipcclxuICogVGhlIGRlZmF1bHQgdGVtcGxhdGUgYW5kIHN0eWxlcyBmb3IgdGhlIHBhZ2luYXRpb24gbGlua3MgYXJlIGJvcnJvd2VkIGRpcmVjdGx5XHJcbiAqIGZyb20gWnVyYiBGb3VuZGF0aW9uIDY6IGh0dHA6Ly9mb3VuZGF0aW9uLnp1cmIuY29tL3NpdGVzL2RvY3MvcGFnaW5hdGlvbi5odG1sXHJcbiAqL1xyXG52YXIgREVGQVVMVF9URU1QTEFURSA9IFwiXFxuICAgIDxwYWdpbmF0aW9uLXRlbXBsYXRlICAjcD1cXFwicGFnaW5hdGlvbkFwaVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cXFwiaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIFttYXhTaXplXT1cXFwibWF4U2l6ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgKHBhZ2VDaGFuZ2UpPVxcXCJwYWdlQ2hhbmdlLmVtaXQoJGV2ZW50KVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgKHBhZ2VCb3VuZHNDb3JyZWN0aW9uKT1cXFwicGFnZUJvdW5kc0NvcnJlY3Rpb24uZW1pdCgkZXZlbnQpXFxcIj5cXG4gICAgPHVsIGNsYXNzPVxcXCJuZ3gtcGFnaW5hdGlvblxcXCJcXG4gICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVxcXCJzY3JlZW5SZWFkZXJQYWdpbmF0aW9uTGFiZWxcXFwiIFxcbiAgICAgICAgW2NsYXNzLnJlc3BvbnNpdmVdPVxcXCJyZXNwb25zaXZlXFxcIlxcbiAgICAgICAgKm5nSWY9XFxcIiEoYXV0b0hpZGUgJiYgcC5wYWdlcy5sZW5ndGggPD0gMSlcXFwiPlxcblxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJwYWdpbmF0aW9uLXByZXZpb3VzXFxcIiBbY2xhc3MuZGlzYWJsZWRdPVxcXCJwLmlzRmlyc3RQYWdlKClcXFwiICpuZ0lmPVxcXCJkaXJlY3Rpb25MaW5rc1xcXCI+IFxcbiAgICAgICAgICAgIDxhIHRhYmluZGV4PVxcXCIwXFxcIiAqbmdJZj1cXFwiMSA8IHAuZ2V0Q3VycmVudCgpXFxcIiAoa2V5dXAuZW50ZXIpPVxcXCJwLnByZXZpb3VzKClcXFwiIChjbGljayk9XFxcInAucHJldmlvdXMoKVxcXCIgW2F0dHIuYXJpYS1sYWJlbF09XFxcInByZXZpb3VzTGFiZWwgKyAnICcgKyBzY3JlZW5SZWFkZXJQYWdlTGFiZWxcXFwiPlxcbiAgICAgICAgICAgICAgICB7eyBwcmV2aW91c0xhYmVsIH19IDxzcGFuIGNsYXNzPVxcXCJzaG93LWZvci1zclxcXCI+e3sgc2NyZWVuUmVhZGVyUGFnZUxhYmVsIH19PC9zcGFuPlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwicC5pc0ZpcnN0UGFnZSgpXFxcIj5cXG4gICAgICAgICAgICAgICAge3sgcHJldmlvdXNMYWJlbCB9fSA8c3BhbiBjbGFzcz1cXFwic2hvdy1mb3Itc3JcXFwiPnt7IHNjcmVlblJlYWRlclBhZ2VMYWJlbCB9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICA8L2xpPiBcXG5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwic21hbGwtc2NyZWVuXFxcIj5cXG4gICAgICAgICAgICB7eyBwLmdldEN1cnJlbnQoKSB9fSAvIHt7IHAuZ2V0TGFzdFBhZ2UoKSB9fVxcbiAgICAgICAgPC9saT5cXG5cXG4gICAgICAgIDxsaSBbY2xhc3MuY3VycmVudF09XFxcInAuZ2V0Q3VycmVudCgpID09PSBwYWdlLnZhbHVlXFxcIiBcXG4gICAgICAgICAgICBbY2xhc3MuZWxsaXBzaXNdPVxcXCJwYWdlLmxhYmVsID09PSAnLi4uJ1xcXCJcXG4gICAgICAgICAgICAqbmdGb3I9XFxcImxldCBwYWdlIG9mIHAucGFnZXM7IHRyYWNrQnk6IHRyYWNrQnlJbmRleFxcXCI+XFxuICAgICAgICAgICAgPGEgdGFiaW5kZXg9XFxcIjBcXFwiIChrZXl1cC5lbnRlcik9XFxcInAuc2V0Q3VycmVudChwYWdlLnZhbHVlKVxcXCIgKGNsaWNrKT1cXFwicC5zZXRDdXJyZW50KHBhZ2UudmFsdWUpXFxcIiAqbmdJZj1cXFwicC5nZXRDdXJyZW50KCkgIT09IHBhZ2UudmFsdWVcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic2hvdy1mb3Itc3JcXFwiPnt7IHNjcmVlblJlYWRlclBhZ2VMYWJlbCB9fSA8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IChwYWdlLmxhYmVsID09PSAnLi4uJykgPyBwYWdlLmxhYmVsIDogKHBhZ2UubGFiZWwgfCBudW1iZXI6JycpIH19PC9zcGFuPlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVxcXCJwLmdldEN1cnJlbnQoKSA9PT0gcGFnZS52YWx1ZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzaG93LWZvci1zclxcXCI+e3sgc2NyZWVuUmVhZGVyQ3VycmVudExhYmVsIH19IDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgKHBhZ2UubGFiZWwgPT09ICcuLi4nKSA/IHBhZ2UubGFiZWwgOiAocGFnZS5sYWJlbCB8IG51bWJlcjonJykgfX08L3NwYW4+IFxcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxcbiAgICAgICAgPC9saT5cXG5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwicGFnaW5hdGlvbi1uZXh0XFxcIiBbY2xhc3MuZGlzYWJsZWRdPVxcXCJwLmlzTGFzdFBhZ2UoKVxcXCIgKm5nSWY9XFxcImRpcmVjdGlvbkxpbmtzXFxcIj5cXG4gICAgICAgICAgICA8YSB0YWJpbmRleD1cXFwiMFxcXCIgKm5nSWY9XFxcIiFwLmlzTGFzdFBhZ2UoKVxcXCIgKGtleXVwLmVudGVyKT1cXFwicC5uZXh0KClcXFwiIChjbGljayk9XFxcInAubmV4dCgpXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwibmV4dExhYmVsICsgJyAnICsgc2NyZWVuUmVhZGVyUGFnZUxhYmVsXFxcIj5cXG4gICAgICAgICAgICAgICAgIHt7IG5leHRMYWJlbCB9fSA8c3BhbiBjbGFzcz1cXFwic2hvdy1mb3Itc3JcXFwiPnt7IHNjcmVlblJlYWRlclBhZ2VMYWJlbCB9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcInAuaXNMYXN0UGFnZSgpXFxcIj5cXG4gICAgICAgICAgICAgICAgIHt7IG5leHRMYWJlbCB9fSA8c3BhbiBjbGFzcz1cXFwic2hvdy1mb3Itc3JcXFwiPnt7IHNjcmVlblJlYWRlclBhZ2VMYWJlbCB9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICA8L2xpPlxcblxcbiAgICA8L3VsPlxcbiAgICA8L3BhZ2luYXRpb24tdGVtcGxhdGU+XFxuICAgIFwiO1xyXG52YXIgREVGQVVMVF9TVFlMRVMgPSBcIlxcbi5uZ3gtcGFnaW5hdGlvbiB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXG4gIC5uZ3gtcGFnaW5hdGlvbjo6YmVmb3JlLCAubmd4LXBhZ2luYXRpb246OmFmdGVyIHtcXG4gICAgY29udGVudDogJyAnO1xcbiAgICBkaXNwbGF5OiB0YWJsZTsgfVxcbiAgLm5neC1wYWdpbmF0aW9uOjphZnRlciB7XFxuICAgIGNsZWFyOiBib3RoOyB9XFxuICAubmd4LXBhZ2luYXRpb24gbGkge1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogMC4wNjI1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICAubmd4LXBhZ2luYXRpb24gbGkge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG4gIC5uZ3gtcGFnaW5hdGlvbiBhLFxcbiAgLm5neC1wYWdpbmF0aW9uIGJ1dHRvbiB7XFxuICAgIGNvbG9yOiAjMGEwYTBhOyBcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAuMTg3NXJlbSAwLjYyNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgICAubmd4LXBhZ2luYXRpb24gYTpob3ZlcixcXG4gICAgLm5neC1wYWdpbmF0aW9uIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogI2U2ZTZlNjsgfVxcbiAgLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcXG4gICAgcGFkZGluZzogMC4xODc1cmVtIDAuNjI1cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjE5OWU4O1xcbiAgICBjb2xvcjogI2ZlZmVmZTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuICAubmd4LXBhZ2luYXRpb24gLmRpc2FibGVkIHtcXG4gICAgcGFkZGluZzogMC4xODc1cmVtIDAuNjI1cmVtO1xcbiAgICBjb2xvcjogI2NhY2FjYTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0OyB9IFxcbiAgICAubmd4LXBhZ2luYXRpb24gLmRpc2FibGVkOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxcbiAgLm5neC1wYWdpbmF0aW9uIGEsIC5uZ3gtcGFnaW5hdGlvbiBidXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMgYTo6YmVmb3JlLFxcbi5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cy5kaXNhYmxlZDo6YmVmb3JlIHsgXFxuICBjb250ZW50OiAnXFx1MDBBQic7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTsgfVxcblxcbi5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0IGE6OmFmdGVyLFxcbi5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0LmRpc2FibGVkOjphZnRlciB7XFxuICBjb250ZW50OiAnXFx1MDBCQic7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtOyB9XFxuXFxuLm5neC1wYWdpbmF0aW9uIC5zaG93LWZvci1zciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApOyB9XFxuLm5neC1wYWdpbmF0aW9uIC5zbWFsbC1zY3JlZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMXB4KSB7XFxuICAubmd4LXBhZ2luYXRpb24ucmVzcG9uc2l2ZSAuc21hbGwtc2NyZWVuIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9IFxcbiAgLm5neC1wYWdpbmF0aW9uLnJlc3BvbnNpdmUgbGk6bm90KC5zbWFsbC1zY3JlZW4pOm5vdCgucGFnaW5hdGlvbi1wcmV2aW91cyk6bm90KC5wYWdpbmF0aW9uLW5leHQpIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbn1cXG4gIFwiO1xuXG52YXIgX19kZWNvcmF0ZSQyID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSQxID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuZnVuY3Rpb24gY29lcmNlVG9Cb29sZWFuKGlucHV0KSB7XHJcbiAgICByZXR1cm4gISFpbnB1dCAmJiBpbnB1dCAhPT0gJ2ZhbHNlJztcclxufVxyXG4vKipcclxuICogVGhlIGRlZmF1bHQgcGFnaW5hdGlvbiBjb250cm9scyBjb21wb25lbnQuIEFjdHVhbGx5IGp1c3QgYSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIGEgY3VzdG9tIHRlbXBsYXRlLlxyXG4gKi9cclxudmFyIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudCgpIHtcclxuICAgICAgICB0aGlzLm1heFNpemUgPSA3O1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNMYWJlbCA9ICdQcmV2aW91cyc7XHJcbiAgICAgICAgdGhpcy5uZXh0TGFiZWwgPSAnTmV4dCc7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5SZWFkZXJQYWdpbmF0aW9uTGFiZWwgPSAnUGFnaW5hdGlvbic7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5SZWFkZXJQYWdlTGFiZWwgPSAncGFnZSc7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5SZWFkZXJDdXJyZW50TGFiZWwgPSBcIllvdSdyZSBvbiBwYWdlXCI7XHJcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIHRoaXMucGFnZUJvdW5kc0NvcnJlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uTGlua3MgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2F1dG9IaWRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcmVzcG9uc2l2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwiZGlyZWN0aW9uTGlua3NcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uTGlua3M7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9kaXJlY3Rpb25MaW5rcyA9IGNvZXJjZVRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJhdXRvSGlkZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hdXRvSGlkZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2F1dG9IaWRlID0gY29lcmNlVG9Cb29sZWFuKHZhbHVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcInJlc3BvbnNpdmVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2l2ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc3BvbnNpdmUgPSBjb2VyY2VUb0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZS50cmFja0J5SW5kZXggPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICB9O1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwiaWRcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgSW5wdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcIm1heFNpemVcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgSW5wdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbQm9vbGVhbl0pXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcImRpcmVjdGlvbkxpbmtzXCIsIG51bGwpO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtCb29sZWFuXSlcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwiYXV0b0hpZGVcIiwgbnVsbCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbiksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0Jvb2xlYW5dKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJyZXNwb25zaXZlXCIsIG51bGwpO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwicHJldmlvdXNMYWJlbFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwibmV4dExhYmVsXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJzY3JlZW5SZWFkZXJQYWdpbmF0aW9uTGFiZWxcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgSW5wdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcInNjcmVlblJlYWRlclBhZ2VMYWJlbFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwic2NyZWVuUmVhZGVyQ3VycmVudExhYmVsXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIE91dHB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIEV2ZW50RW1pdHRlcilcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwicGFnZUNoYW5nZVwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBPdXRwdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBFdmVudEVtaXR0ZXIpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcInBhZ2VCb3VuZHNDb3JyZWN0aW9uXCIsIHZvaWQgMCk7XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQgPSBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIENvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAncGFnaW5hdGlvbi1jb250cm9scycsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiBERUZBVUxUX1RFTVBMQVRFLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtERUZBVUxUX1NUWUxFU10sXHJcbiAgICAgICAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgICAgICAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbiAgICAgICAgfSlcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50O1xyXG59KCkpO1xuXG52YXIgX19kZWNvcmF0ZSQzID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSQyID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuLyoqXHJcbiAqIFRoaXMgZGlyZWN0aXZlIGlzIHdoYXQgcG93ZXJzIGFsbCBwYWdpbmF0aW9uIGNvbnRyb2xzIGNvbXBvbmVudHMsIGluY2x1ZGluZyB0aGUgZGVmYXVsdCBvbmUuXHJcbiAqIEl0IGV4cG9zZXMgYW4gQVBJIHdoaWNoIGlzIGhvb2tlZCB1cCB0byB0aGUgUGFnaW5hdGlvblNlcnZpY2UgdG8ga2VlcCB0aGUgUGFnaW5hdGVQaXBlIGluIHN5bmNcclxuICogd2l0aCB0aGUgcGFnaW5hdGlvbiBjb250cm9scy5cclxuICovXHJcbnZhciBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUoc2VydmljZSwgY2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZiA9IGNoYW5nZURldGVjdG9yUmVmO1xyXG4gICAgICAgIHRoaXMubWF4U2l6ZSA9IDc7XHJcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIHRoaXMucGFnZUJvdW5kc0NvcnJlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgdGhpcy5wYWdlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlU3ViID0gdGhpcy5zZXJ2aWNlLmNoYW5nZVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVQYWdlTGlua3MoKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMuc2VydmljZS5kZWZhdWx0SWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlTGlua3MoKTtcclxuICAgIH07XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VMaW5rcygpO1xyXG4gICAgfTtcclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdvIHRvIHRoZSBwcmV2aW91cyBwYWdlXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUucHJldmlvdXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja1ZhbGlkSWQoKTtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnQodGhpcy5nZXRDdXJyZW50KCkgLSAxKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdvIHRvIHRoZSBuZXh0IHBhZ2VcclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tWYWxpZElkKCk7XHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50KHRoaXMuZ2V0Q3VycmVudCgpICsgMSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgY3VycmVudCBwYWdlIGlzIGZpcnN0IHBhZ2VcclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5pc0ZpcnN0UGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50KCkgPT09IDE7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgY3VycmVudCBwYWdlIGlzIGxhc3QgcGFnZVxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmlzTGFzdFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGFzdFBhZ2UoKSA9PT0gdGhpcy5nZXRDdXJyZW50KCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGN1cnJlbnQgcGFnZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUuc2V0Q3VycmVudCA9IGZ1bmN0aW9uIChwYWdlKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQocGFnZSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgcGFnZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUuZ2V0Q3VycmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmdldEN1cnJlbnRQYWdlKHRoaXMuaWQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgbGFzdCBwYWdlIG51bWJlclxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmdldExhc3RQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbnN0ID0gdGhpcy5zZXJ2aWNlLmdldEluc3RhbmNlKHRoaXMuaWQpO1xyXG4gICAgICAgIGlmIChpbnN0LnRvdGFsSXRlbXMgPCAxKSB7XHJcbiAgICAgICAgICAgIC8vIHdoZW4gdGhlcmUgYXJlIDAgb3IgZmV3ZXIgKGFuIGVycm9yIGNhc2UpIGl0ZW1zLCB0aGVyZSBhcmUgbm8gXCJwYWdlc1wiIGFzIHN1Y2gsXHJcbiAgICAgICAgICAgIC8vIGJ1dCBpdCBtYWtlcyBzZW5zZSB0byBjb25zaWRlciBhIHNpbmdsZSwgZW1wdHkgcGFnZSBhcyB0aGUgbGFzdCBwYWdlLlxyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChpbnN0LnRvdGFsSXRlbXMgLyBpbnN0Lml0ZW1zUGVyUGFnZSk7XHJcbiAgICB9O1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5nZXRUb3RhbEl0ZW1zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZ2V0SW5zdGFuY2UodGhpcy5pZCkudG90YWxJdGVtcztcclxuICAgIH07XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmNoZWNrVmFsaWRJZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLmdldEluc3RhbmNlKHRoaXMuaWQpLmlkID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlOiB0aGUgc3BlY2lmaWVkIGlkIFxcXCJcIiArIHRoaXMuaWQgKyBcIlxcXCIgZG9lcyBub3QgbWF0Y2ggYW55IHJlZ2lzdGVyZWQgUGFnaW5hdGlvbkluc3RhbmNlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIHBhZ2UgbGlua3MgYW5kIGNoZWNrcyB0aGF0IHRoZSBjdXJyZW50IHBhZ2UgaXMgdmFsaWQuIFNob3VsZCBydW4gd2hlbmV2ZXIgdGhlXHJcbiAgICAgKiBQYWdpbmF0aW9uU2VydmljZS5jaGFuZ2Ugc3RyZWFtIGVtaXRzIGEgdmFsdWUgbWF0Y2hpbmcgdGhlIGN1cnJlbnQgSUQsIG9yIHdoZW4gYW55IG9mIHRoZVxyXG4gICAgICogaW5wdXQgdmFsdWVzIGNoYW5nZXMuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUudXBkYXRlUGFnZUxpbmtzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGluc3QgPSB0aGlzLnNlcnZpY2UuZ2V0SW5zdGFuY2UodGhpcy5pZCk7XHJcbiAgICAgICAgdmFyIGNvcnJlY3RlZEN1cnJlbnRQYWdlID0gdGhpcy5vdXRPZkJvdW5kQ29ycmVjdGlvbihpbnN0KTtcclxuICAgICAgICBpZiAoY29ycmVjdGVkQ3VycmVudFBhZ2UgIT09IGluc3QuY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wYWdlQm91bmRzQ29ycmVjdGlvbi5lbWl0KGNvcnJlY3RlZEN1cnJlbnRQYWdlKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnBhZ2VzID0gX3RoaXMuY3JlYXRlUGFnZUFycmF5KGluc3QuY3VycmVudFBhZ2UsIGluc3QuaXRlbXNQZXJQYWdlLCBpbnN0LnRvdGFsSXRlbXMsIF90aGlzLm1heFNpemUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZXMgPSB0aGlzLmNyZWF0ZVBhZ2VBcnJheShpbnN0LmN1cnJlbnRQYWdlLCBpbnN0Lml0ZW1zUGVyUGFnZSwgaW5zdC50b3RhbEl0ZW1zLCB0aGlzLm1heFNpemUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB0aGF0IHRoZSBpbnN0YW5jZS5jdXJyZW50UGFnZSBwcm9wZXJ0eSBpcyB3aXRoaW4gYm91bmRzIGZvciB0aGUgY3VycmVudCBwYWdlIHJhbmdlLlxyXG4gICAgICogSWYgbm90LCByZXR1cm4gYSBjb3JyZWN0IHZhbHVlIGZvciBjdXJyZW50UGFnZSwgb3IgdGhlIGN1cnJlbnQgdmFsdWUgaWYgT0suXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUub3V0T2ZCb3VuZENvcnJlY3Rpb24gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuICAgICAgICB2YXIgdG90YWxQYWdlcyA9IE1hdGguY2VpbChpbnN0YW5jZS50b3RhbEl0ZW1zIC8gaW5zdGFuY2UuaXRlbXNQZXJQYWdlKTtcclxuICAgICAgICBpZiAodG90YWxQYWdlcyA8IGluc3RhbmNlLmN1cnJlbnRQYWdlICYmIDAgPCB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b3RhbFBhZ2VzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpbnN0YW5jZS5jdXJyZW50UGFnZSA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5jdXJyZW50UGFnZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgUGFnZSBvYmplY3RzIHRvIHVzZSBpbiB0aGUgcGFnaW5hdGlvbiBjb250cm9scy5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5jcmVhdGVQYWdlQXJyYXkgPSBmdW5jdGlvbiAoY3VycmVudFBhZ2UsIGl0ZW1zUGVyUGFnZSwgdG90YWxJdGVtcywgcGFnaW5hdGlvblJhbmdlKSB7XHJcbiAgICAgICAgLy8gcGFnaW5hdGlvblJhbmdlIGNvdWxkIGJlIGEgc3RyaW5nIGlmIHBhc3NlZCBmcm9tIGF0dHJpYnV0ZSwgc28gY2FzdCB0byBudW1iZXIuXHJcbiAgICAgICAgcGFnaW5hdGlvblJhbmdlID0gK3BhZ2luYXRpb25SYW5nZTtcclxuICAgICAgICB2YXIgcGFnZXMgPSBbXTtcclxuICAgICAgICAvLyBSZXR1cm4gMSBhcyBkZWZhdWx0IHBhZ2UgbnVtYmVyXHJcbiAgICAgICAgLy8gTWFrZSBzZW5zZSB0byBzaG93IDEgaW5zdGVhZCBvZiBlbXB0eSB3aGVuIHRoZXJlIGFyZSBubyBpdGVtc1xyXG4gICAgICAgIHZhciB0b3RhbFBhZ2VzID0gTWF0aC5tYXgoTWF0aC5jZWlsKHRvdGFsSXRlbXMgLyBpdGVtc1BlclBhZ2UpLCAxKTtcclxuICAgICAgICB2YXIgaGFsZldheSA9IE1hdGguY2VpbChwYWdpbmF0aW9uUmFuZ2UgLyAyKTtcclxuICAgICAgICB2YXIgaXNTdGFydCA9IGN1cnJlbnRQYWdlIDw9IGhhbGZXYXk7XHJcbiAgICAgICAgdmFyIGlzRW5kID0gdG90YWxQYWdlcyAtIGhhbGZXYXkgPCBjdXJyZW50UGFnZTtcclxuICAgICAgICB2YXIgaXNNaWRkbGUgPSAhaXNTdGFydCAmJiAhaXNFbmQ7XHJcbiAgICAgICAgdmFyIGVsbGlwc2VzTmVlZGVkID0gcGFnaW5hdGlvblJhbmdlIDwgdG90YWxQYWdlcztcclxuICAgICAgICB2YXIgaSA9IDE7XHJcbiAgICAgICAgd2hpbGUgKGkgPD0gdG90YWxQYWdlcyAmJiBpIDw9IHBhZ2luYXRpb25SYW5nZSkge1xyXG4gICAgICAgICAgICB2YXIgbGFiZWwgPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHZhciBwYWdlTnVtYmVyID0gdGhpcy5jYWxjdWxhdGVQYWdlTnVtYmVyKGksIGN1cnJlbnRQYWdlLCBwYWdpbmF0aW9uUmFuZ2UsIHRvdGFsUGFnZXMpO1xyXG4gICAgICAgICAgICB2YXIgb3BlbmluZ0VsbGlwc2VzTmVlZGVkID0gKGkgPT09IDIgJiYgKGlzTWlkZGxlIHx8IGlzRW5kKSk7XHJcbiAgICAgICAgICAgIHZhciBjbG9zaW5nRWxsaXBzZXNOZWVkZWQgPSAoaSA9PT0gcGFnaW5hdGlvblJhbmdlIC0gMSAmJiAoaXNNaWRkbGUgfHwgaXNTdGFydCkpO1xyXG4gICAgICAgICAgICBpZiAoZWxsaXBzZXNOZWVkZWQgJiYgKG9wZW5pbmdFbGxpcHNlc05lZWRlZCB8fCBjbG9zaW5nRWxsaXBzZXNOZWVkZWQpKSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCA9ICcuLi4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwgPSBwYWdlTnVtYmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhZ2VzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHBhZ2VOdW1iZXJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhZ2VzO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR2l2ZW4gdGhlIHBvc2l0aW9uIGluIHRoZSBzZXF1ZW5jZSBvZiBwYWdpbmF0aW9uIGxpbmtzIFtpXSxcclxuICAgICAqIGZpZ3VyZSBvdXQgd2hhdCBwYWdlIG51bWJlciBjb3JyZXNwb25kcyB0byB0aGF0IHBvc2l0aW9uLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmNhbGN1bGF0ZVBhZ2VOdW1iZXIgPSBmdW5jdGlvbiAoaSwgY3VycmVudFBhZ2UsIHBhZ2luYXRpb25SYW5nZSwgdG90YWxQYWdlcykge1xyXG4gICAgICAgIHZhciBoYWxmV2F5ID0gTWF0aC5jZWlsKHBhZ2luYXRpb25SYW5nZSAvIDIpO1xyXG4gICAgICAgIGlmIChpID09PSBwYWdpbmF0aW9uUmFuZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRvdGFsUGFnZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGkgPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBhZ2luYXRpb25SYW5nZSA8IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRvdGFsUGFnZXMgLSBoYWxmV2F5IDwgY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b3RhbFBhZ2VzIC0gcGFnaW5hdGlvblJhbmdlICsgaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChoYWxmV2F5IDwgY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50UGFnZSAtIGhhbGZXYXkgKyBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlJDMoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQyKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJpZFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQzKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMihcImRlc2lnbjp0eXBlXCIsIE51bWJlcilcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUsIFwibWF4U2l6ZVwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQzKFtcclxuICAgICAgICBPdXRwdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDIoXCJkZXNpZ246dHlwZVwiLCBFdmVudEVtaXR0ZXIpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLCBcInBhZ2VDaGFuZ2VcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMyhbXHJcbiAgICAgICAgT3V0cHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQyKFwiZGVzaWduOnR5cGVcIiwgRXZlbnRFbWl0dGVyKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJwYWdlQm91bmRzQ29ycmVjdGlvblwiLCB2b2lkIDApO1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlID0gX19kZWNvcmF0ZSQzKFtcclxuICAgICAgICBEaXJlY3RpdmUoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ3BhZ2luYXRpb24tdGVtcGxhdGUsW3BhZ2luYXRpb24tdGVtcGxhdGVdJyxcclxuICAgICAgICAgICAgZXhwb3J0QXM6ICdwYWdpbmF0aW9uQXBpJ1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMihcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtQYWdpbmF0aW9uU2VydmljZSxcclxuICAgICAgICAgICAgQ2hhbmdlRGV0ZWN0b3JSZWZdKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlKTtcclxuICAgIHJldHVybiBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmU7XHJcbn0oKSk7XG5cbnZhciBfX2RlY29yYXRlID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgTmd4UGFnaW5hdGlvbk1vZHVsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE5neFBhZ2luYXRpb25Nb2R1bGUoKSB7XHJcbiAgICB9XHJcbiAgICBOZ3hQYWdpbmF0aW9uTW9kdWxlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgTmdNb2R1bGUoe1xyXG4gICAgICAgICAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICBQYWdpbmF0ZVBpcGUsXHJcbiAgICAgICAgICAgICAgICBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmVcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbUGFnaW5hdGlvblNlcnZpY2VdLFxyXG4gICAgICAgICAgICBleHBvcnRzOiBbUGFnaW5hdGVQaXBlLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQsIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZV1cclxuICAgICAgICB9KVxyXG4gICAgXSwgTmd4UGFnaW5hdGlvbk1vZHVsZSk7XHJcbiAgICByZXR1cm4gTmd4UGFnaW5hdGlvbk1vZHVsZTtcclxufSgpKTtcblxuLyoqXHJcbiAqIEdlbmVyYXRlZCBidW5kbGUgaW5kZXguIERvIG5vdCBlZGl0LlxyXG4gKi9cblxuZXhwb3J0IHsgREVGQVVMVF9TVFlMRVMgYXMgybViLCBERUZBVUxUX1RFTVBMQVRFIGFzIMm1YSwgTmd4UGFnaW5hdGlvbk1vZHVsZSwgUGFnaW5hdGlvblNlcnZpY2UsIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudCwgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLCBQYWdpbmF0ZVBpcGUgfTtcbiJdfQ==

/***/ }),

/***/ "oSI6":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_baseIteratee.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return baseIteratee; });
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ "hUUU");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "S9Yh");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObject.js */ "BXuq");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArray.js */ "XYRq");
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./matcher.js */ "EwgG");
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./property.js */ "hAGv");
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_optimizeCb.js */ "udg+");








// An internal function to generate callbacks that can be applied to each
// element in a collection, returning the desired result — either `_.identity`,
// an arbitrary callback, a property matcher, or a property accessor.
function baseIteratee(value, context, argCount) {
  if (value == null) return _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  if (Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) return Object(_optimizeCb_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value, context, argCount);
  if (Object(_isObject_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) && !Object(_isArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) return Object(_matcher_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value);
  return Object(_property_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value);
}


/***/ }),

/***/ "p3Xm":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/chain.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chain; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "UgGm");


// Start chaining a wrapped Underscore object.
function chain(obj) {
  var instance = Object(_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj);
  instance._chain = true;
  return instance;
}


/***/ }),

/***/ "pZ0j":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/some.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return some; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "ssMU");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ "PXqf");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ "kT3W");




// Determine if at least one element in the object passes a truth test.
function some(obj, predicate, context) {
  predicate = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(predicate, context);
  var _keys = !Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) && Object(_keys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj),
      length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (predicate(obj[currentKey], currentKey, obj)) return true;
  }
  return false;
}


/***/ }),

/***/ "pzJQ":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/object.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return object; });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ "+g8h");


// Converts lists into objects. Pass either a single array of `[key, value]`
// pairs, or two parallel arrays of the same length -- one of keys, and one of
// the corresponding values. Passing by pairs is the reverse of `_.pairs`.
function object(list, values) {
  var result = {};
  for (var i = 0, length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(list); i < length; i++) {
    if (values) {
      result[list[i]] = values[i];
    } else {
      result[list[i][0]] = list[i][1];
    }
  }
  return result;
}


/***/ }),

/***/ "q6hG":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_createReduce.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createReduce; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "PXqf");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "kT3W");
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_optimizeCb.js */ "udg+");




// Internal helper to create a reducing function, iterating left or right.
function createReduce(dir) {
  // Wrap code that reassigns argument variables in a separate function than
  // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
  var reducer = function(obj, iteratee, memo, initial) {
    var _keys = !Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) && Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj),
        length = (_keys || obj).length,
        index = dir > 0 ? 0 : length - 1;
    if (!initial) {
      memo = obj[_keys ? _keys[index] : index];
      index += dir;
    }
    for (; index >= 0 && index < length; index += dir) {
      var currentKey = _keys ? _keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  return function(obj, iteratee, memo, context) {
    var initial = arguments.length >= 3;
    return reducer(obj, Object(_optimizeCb_js__WEBPACK_IMPORTED_MODULE_2__["default"])(iteratee, context, 4), memo, initial);
  };
}


/***/ }),

/***/ "qDlR":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/_toPath.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toPath; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "UgGm");
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPath.js */ "E7mu");



// Internal wrapper for `_.toPath` to enable minification.
// Similar to `cb` for `_.iteratee`.
function toPath(path) {
  return _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].toPath(path);
}


/***/ }),

/***/ "qeMZ":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/isArguments.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "OeF5");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_has.js */ "hOqw");



var isArguments = Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Arguments');

// Define a fallback version of the method in browsers (ahem, IE < 9), where
// there isn't any inspectable "Arguments" type.
(function() {
  if (!isArguments(arguments)) {
    isArguments = function(obj) {
      return Object(_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'callee');
    };
  }
}());

/* harmony default export */ __webpack_exports__["default"] = (isArguments);


/***/ }),

/***/ "qiXs":
/*!******************************************************!*\
  !*** ./src/app/pagination/pagination.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label {\n  color: white;\n  padding: 0.5rem 0.75rem;\n  font-family: Arial;\n  border-radius: 4px;\n}\n\n.success {\n  background-color: #4CAF50;\n}\n\n/* Green */\n\n.info {\n  background-color: #42a9d8;\n}\n\n/* Blue */\n\n.warning {\n  background-color: #ff9800;\n}\n\n/* Orange */\n\n.danger {\n  background-color: #f44336;\n}\n\n/* Red */\n\n.other {\n  background-color: #e7e7e7;\n  color: black;\n}\n\n.label1 {\n  color: white;\n  padding: 10px 10px;\n  font-family: Arial;\n  display: flex;\n  flex-wrap: wrap;\n  width: 70px;\n  border-radius: 4px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0U7RUFBVSx5QkFBQTtBQUdaOztBQUh3QyxVQUFBOztBQUN0QztFQUFPLHlCQUFBO0FBT1Q7O0FBUHFDLFNBQUE7O0FBQ25DO0VBQVUseUJBQUE7QUFXWjs7QUFYd0MsV0FBQTs7QUFDdEM7RUFBUyx5QkFBQTtBQWVYOztBQWZ1QyxRQUFBOztBQUNyQztFQUFRLHlCQUFBO0VBQTJCLFlBQUE7QUFvQnJDOztBQW5CRTtFQUNFLFlBQUE7RUFDRCxrQkFBQTtFQUNDLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQXNCSiIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICAuc3VjY2VzcyB7YmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDt9IC8qIEdyZWVuICovXHJcbiAgLmluZm8ge2JhY2tncm91bmQtY29sb3I6ICM0MmE5ZDg7fSAvKiBCbHVlICovXHJcbiAgLndhcm5pbmcge2JhY2tncm91bmQtY29sb3I6ICNmZjk4MDA7fSAvKiBPcmFuZ2UgKi9cclxuICAuZGFuZ2VyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O30gLyogUmVkICovIFxyXG4gIC5vdGhlciB7YmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNzsgY29sb3I6IGJsYWNrO31cclxuICAubGFiZWwxIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgd2lkdGg6NzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7O1xyXG4gIH1cclxuXHJcbiAgIl19 */");

/***/ }),

/***/ "qkpa":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/pick.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "+L30");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "S9Yh");
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_optimizeCb.js */ "udg+");
/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allKeys.js */ "d3Uc");
/* harmony import */ var _keyInObj_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_keyInObj.js */ "c7o1");
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_flatten.js */ "+gt/");







// Return a copy of the object only containing the allowed properties.
/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(obj, keys) {
  var result = {}, iteratee = keys[0];
  if (obj == null) return result;
  if (Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iteratee)) {
    if (keys.length > 1) iteratee = Object(_optimizeCb_js__WEBPACK_IMPORTED_MODULE_2__["default"])(iteratee, keys[1]);
    keys = Object(_allKeys_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj);
  } else {
    iteratee = _keyInObj_js__WEBPACK_IMPORTED_MODULE_4__["default"];
    keys = Object(_flatten_js__WEBPACK_IMPORTED_MODULE_5__["default"])(keys, false, false);
    obj = Object(obj);
  }
  for (var i = 0, length = keys.length; i < length; i++) {
    var key = keys[i];
    var value = obj[key];
    if (iteratee(value, key, obj)) result[key] = value;
  }
  return result;
}));


/***/ }),

/***/ "qysV":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_toBufferView.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toBufferView; });
/* harmony import */ var _getByteLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getByteLength.js */ "y+by");


// Internal function to wrap or shallow-copy an ArrayBuffer,
// typed array or DataView to a new view, reusing the buffer.
function toBufferView(bufferSource) {
  return new Uint8Array(
    bufferSource.buffer || bufferSource,
    bufferSource.byteOffset || 0,
    Object(_getByteLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bufferSource)
  );
}


/***/ }),

/***/ "rJva":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/contains.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contains; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "PXqf");
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./values.js */ "0CTw");
/* harmony import */ var _indexOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indexOf.js */ "0+rK");




// Determine if the array or object contains a given item (using `===`).
function contains(obj, item, fromIndex, guard) {
  if (!Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) obj = Object(_values_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj);
  if (typeof fromIndex != 'number' || guard) fromIndex = 0;
  return Object(_indexOf_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, item, fromIndex) >= 0;
}


/***/ }),

/***/ "rdef":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/groupBy.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_group.js */ "X+A/");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_has.js */ "hOqw");



// Groups the object's values by a criterion. Pass either a string attribute
// to group by, or a function that returns the criterion.
/* harmony default export */ __webpack_exports__["default"] = (Object(_group_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(result, value, key) {
  if (Object(_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, key)) result[key].push(value); else result[key] = [value];
}));


/***/ }),

/***/ "rk5D":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/without.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "+L30");
/* harmony import */ var _difference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./difference.js */ "usA7");



// Return a version of the array that does not contain the specified value(s).
/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(array, otherArrays) {
  return Object(_difference_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array, otherArrays);
}));


/***/ }),

/***/ "sQPo":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/index-default.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "5glh");
// Default Export
// ==============
// In this module, we mix our bundled exports into the `_` object and export
// the result. This is analogous to setting `module.exports = _` in CommonJS.
// Hence, this module is also the entry point of our UMD bundle and the package
// entry point for CommonJS and AMD users. In other words, this is (the source
// of) the module you are interfacing with when you do any of the following:
//
// ```js
// // CommonJS
// var _ = require('underscore');
//
// // AMD
// define(['underscore'], function(_) {...});
//
// // UMD in the browser
// // _ is available as a global variable
// ```



// Add all of the Underscore functions to the wrapper object.
var _ = Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["mixin"])(_index_js__WEBPACK_IMPORTED_MODULE_0__);
// Legacy Node.js API.
_._ = _;
// Export the Underscore API.
/* harmony default export */ __webpack_exports__["default"] = (_);


/***/ }),

/***/ "sZiM":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/lastIndexOf.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _findLastIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findLastIndex.js */ "59zu");
/* harmony import */ var _createIndexFinder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_createIndexFinder.js */ "h9Y/");



// Return the position of the last occurrence of an item in an array,
// or -1 if the item is not included in the array.
/* harmony default export */ __webpack_exports__["default"] = (Object(_createIndexFinder_js__WEBPACK_IMPORTED_MODULE_1__["default"])(-1, _findLastIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"]));


/***/ }),

/***/ "sjh4":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/isNaN.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isNaN; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "L0c3");
/* harmony import */ var _isNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNumber.js */ "5Ryk");



// Is the given value `NaN`?
function isNaN(obj) {
  return Object(_isNumber_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) && Object(_setup_js__WEBPACK_IMPORTED_MODULE_0__["_isNaN"])(obj);
}


/***/ }),

/***/ "ssMU":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/_cb.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cb; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "UgGm");
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIteratee.js */ "oSI6");
/* harmony import */ var _iteratee_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iteratee.js */ "KSgu");




// The function we call internally to generate a callback. It invokes
// `_.iteratee` if overridden, otherwise `baseIteratee`.
function cb(value, context, argCount) {
  if (_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].iteratee !== _iteratee_js__WEBPACK_IMPORTED_MODULE_2__["default"]) return _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].iteratee(value, context);
  return Object(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, context, argCount);
}


/***/ }),

/***/ "t8x1":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/after.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return after; });
// Returns a function that will only be executed on and after the Nth call.
function after(times, func) {
  return function() {
    if (--times < 1) {
      return func.apply(this, arguments);
    }
  };
}


/***/ }),

/***/ "tpVi":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/users/adduser/adduser.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"AddUser\">\n   <div class=\"col-md-6\">\n      <div class=\"card \">\n         <div class=\"card-header\">\n            Add User\n         </div>\n         <div class=\"card-body\">\n            <form #userform=\"ngForm\" (ngSubmit)=\"f.form.valid \" #f=\"ngForm\" novalidate >\n            <div class=\"input-group mb-3\">\n               <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n               </div>\n               <input type=\"text\" \n               class=\"form-control \"\n               placeholder=\"Username\" \n               autocomplete=\"username\"\n               [(ngModel)]=\"user.username\" \n               [class.is-invalid]=\"username.invalid && username.touched\"\n               name=\"username\"\n               minlength=\"5\" maxlength=\"20\"\n               #username=\"ngModel\" required  />\n               <span>\n                  <div class=\"alert-danger\" *ngIf=\"username.errors  && f.submitted  && f.touched\">\n                     <div *ngIf=\"username.errors.required\">Username is required</div>\n                     <div *ngIf=\"username.errors.minlength\">\n                        Username must be at least 5 characters\n                     </div>\n                     <div *ngIf=\"username.errors.maxlength\">\n                        Username must be at most 20 characters\n                     </div>\n                  </div>\n               </span>\n            </div>\n            <div class=\"input-group mb-3\">\n               <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">@</span>\n               </div>\n               <input type=\"text\" class=\"form-control\"  [class.is-invalid]=\"email.invalid && email.touched \" placeholder=\"Email\" autocomplete=\"email\" name=\"email\"\n               [(ngModel)]=\"user.email\"   #email=\"ngModel\" email required>\n               <div class=\"alert-danger\" *ngIf=\"email.errors && f.touched && f.submitted \">\n                  <div *ngIf=\"email.errors.required\">Email is required</div>\n                  <div *ngIf=\"email.errors.email\">\n                     Email must be a valid email address\n                  </div>\n               </div>\n            </div>\n            <div class=\"input-group mb-3\">\n               <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n               </div>\n               <input type=\"password\"\n               class=\"form-control\" \n               [class.is-invalid]=\"passwordVal.invalid && passwordVal.touched\"\n               name=\"passwordVal\"\n               placeholder=\"Enter Password\"\n               [(ngModel)]=\"user.password\" required\n               minlength=\"6\" maxlength=\"14\" \n               #passwordVal=\"ngModel\"/>\n               <div class=\"alert-danger\" *ngIf=\"passwordVal.errors && f.touched\">\n                  <div *ngIf=\"passwordVal.errors.required\">Password is required</div>\n                  <div *ngIf=\"passwordVal.errors.minlength\">\n                     Password must be at least 6 characters\n                  </div>\n               </div>\n            </div>\n            <div class=\"input-group mb-3\">\n               <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n               </div>\n               <input type=\"password\"\n               class=\"form-control\" \n               name=\"cpassword\"\n               placeholder=\"Repeat Password\"\n               minlength=\"6\" maxlength=\"14\" \n               ngModel #cpassword=\"ngModel\" \n               compare=\"passwordVal\" \n               [class.is-invalid]=\"cpassword .invalid && cpassword .touched\"  required/>\n               <div *ngIf=\"cpassword .errors && (cpassword .invalid && cpassword .touched)\" class=\"mt-1\"> \n                  <span class=\"text-danger\" *ngIf='cpassword .errors?.required'> Confirm password is required.</span> \n                  <span class=\"text-danger\" *ngIf=\"cpassword .errors?.compare\">Password Confirm do not match. </span> \n                  <span class=\"text-danger\" *ngIf=\"cpassword .errors?.minlength\">   Password must be at least 6 characters </span> \n               </div>\n            </div>\n            <div class=\"input-group mb-3\">\n               <div class=\"input-prepend input-group\">\n                  <div class=\"input-group-prepend\">\n                     <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                  </div>\n                  <select  [(ngModel)]=\"selectedValue\" \n                  placeholder=\"Enter Role\" \n                  class=\"form-control\" \n                  name=\"role\"\n                  (change)=\"getRole($event.target.value)\"  > \n                  <option  *ngFor =\"let role of roleList;\" >{{role}}</option>\n                  </select>\n               </div>\n            </div>\n            </form>\n         </div>\n         <div class=\"card-footer\">\n            <button  type=\"submit\" [disabled]=\"!userform.valid\" (click)=\"onSubmit()\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n            <button type=\"reset\" class=\"btn btn-sm btn-danger\" (click)=\"goBack()\"><i class=\"fa fa-ban\"></i> Back</button> \n         </div>\n      </div>\n   </div>\n</div>");

/***/ }),

/***/ "tvqY":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/users/users.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n     <div class=\"col-lg-12\">\n        <div class=\"card\">\n           <div class=\"card-header\">\n              <i class=\"fa fa-user\"></i> Users\n              <div class=\"card-icons\">\n                 <button type=\"button\" class=\"icon-wrapper\"  (click)=\"addUser($event)\" class=\"btn btn-block btn-primary\">Add</button>\n              </div>\n           </div>\n           <div class=\"card-body\">\n              <table class=\"table  table-bordered table-striped table-sm\">\n                 <thead>\n                    <tr>\n                       <th>Username</th>\n                       <th>Email</th>\n                       <th>Role</th>\n                       <td>Action</td>\n                    </tr>\n                 </thead>\n                 <tbody>\n                    <tr *ngFor=\"let user of usersList  | paginate : { itemsPerPage: 10, currentPage: page }\" >\n                       <td>\n                          <button\n                             type=\"button\"\n                             class=\"btn btn-block btn-link active btn-md\"\n                             (click)=\"edituser(user.id)\">\n                          {{user.username.toUpperCase(0,1) }}\n                          </button>\n                       </td>\n                       <td>{{user.email}}</td>\n                       <td>{{user.roles[0].name}}</td>\n                       <td>\n                          <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"changebyId(user.id)\" data-toggle=\"modal\" data-target=\"#exampleModal\">Change Password</button>\n                          <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"deleteUser(user)\"> <i class=\"fa fa-trash\"></i></button>\n                       </td>\n                 </tbody>\n              </table>\n              <div style=\"text-align: center;\">\n                 <pagination-controls class=\"my-pagination\"\n                    (pageChange)=\"page=$event\"></pagination-controls>\n              </div>\n           </div>\n        </div>\n     </div>\n  </div>\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n     <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n           <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Change Password</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n              </button>\n           </div>\n           <div class=\"modal-body\">\n              <form #changepasswordform=\"ngForm\">\n                 <div class=\"mb-3\">\n                    <label>Username </label>\n                    <input type=\"text\"  #username=\"ngModel\"  [(ngModel)]=\"user.username\"  class=\"form-control\" id=\"name\" name=\"username\" [disabled]=\"notEditMode\">\n                 </div>\n                 <div class=\"mb-3\">\n                    <label  class=\"form-label\">Password </label>\n                    <input type=\"text\" [(ngModel)]=\"user.password\" class=\"form-control\" name=\"oldPassword\" >\n                 </div>\n                 <div class=\"mb-3\">\n                    <label  class=\"form-label\">NewPassword </label>\n                    <input type=\"text\"  name=\"newPassword\" [(ngModel)]=\"user.newpassword\" class=\"form-control\" id=\"name\" aria-describedby=\"emailHelp\">\n                 </div>\n              </form>\n           </div>\n           <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" (click)=\"changePassword(user)\" class=\"btn btn-primary\">Save changes</button>\n           </div>\n        </div>\n     </div>\n  </div>");

/***/ }),

/***/ "udg+":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/_optimizeCb.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return optimizeCb; });
// Internal function that returns an efficient (for current engines) version
// of the passed-in callback, to be repeatedly applied in other Underscore
// functions.
function optimizeCb(func, context, argCount) {
  if (context === void 0) return func;
  switch (argCount == null ? 3 : argCount) {
    case 1: return function(value) {
      return func.call(context, value);
    };
    // The 2-argument case is omitted because we’re not using it.
    case 3: return function(value, index, collection) {
      return func.call(context, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(context, accumulator, value, index, collection);
    };
  }
  return function() {
    return func.apply(context, arguments);
  };
}


/***/ }),

/***/ "ukPn":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/isSet.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "OeF5");
/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stringTagBug.js */ "Qb8F");
/* harmony import */ var _methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_methodFingerprint.js */ "3PVY");




/* harmony default export */ __webpack_exports__["default"] = (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__["isIE11"] ? Object(_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__["ie11fingerprint"])(_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__["setMethods"]) : Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Set'));


/***/ }),

/***/ "usA7":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/difference.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "+L30");
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_flatten.js */ "+gt/");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.js */ "SvpX");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contains.js */ "rJva");





// Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.
/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(array, rest) {
  rest = Object(_flatten_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rest, true, true);
  return Object(_filter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(array, function(value){
    return !Object(_contains_js__WEBPACK_IMPORTED_MODULE_3__["default"])(rest, value);
  });
}));


/***/ }),

/***/ "wSeY":
/*!*****************************************************************!*\
  !*** ./node_modules/underscore/modules/_collectNonEnumProps.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return collectNonEnumProps; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "L0c3");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "S9Yh");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_has.js */ "hOqw");




// Internal helper to create a simple lookup structure.
// `collectNonEnumProps` used to depend on `_.contains`, but this led to
// circular imports. `emulatedSet` is a one-off solution that only works for
// arrays of strings.
function emulatedSet(keys) {
  var hash = {};
  for (var l = keys.length, i = 0; i < l; ++i) hash[keys[i]] = true;
  return {
    contains: function(key) { return hash[key] === true; },
    push: function(key) {
      hash[key] = true;
      return keys.push(key);
    }
  };
}

// Internal helper. Checks `keys` for the presence of keys in IE < 9 that won't
// be iterated by `for key in ...` and thus missed. Extends `keys` in place if
// needed.
function collectNonEnumProps(obj, keys) {
  keys = emulatedSet(keys);
  var nonEnumIdx = _setup_js__WEBPACK_IMPORTED_MODULE_0__["nonEnumerableProps"].length;
  var constructor = obj.constructor;
  var proto = Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(constructor) && constructor.prototype || _setup_js__WEBPACK_IMPORTED_MODULE_0__["ObjProto"];

  // Constructor is a special case.
  var prop = 'constructor';
  if (Object(_has_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, prop) && !keys.contains(prop)) keys.push(prop);

  while (nonEnumIdx--) {
    prop = _setup_js__WEBPACK_IMPORTED_MODULE_0__["nonEnumerableProps"][nonEnumIdx];
    if (prop in obj && obj[prop] !== proto[prop] && !keys.contains(prop)) {
      keys.push(prop);
    }
  }
}


/***/ }),

/***/ "x10Y":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/max.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return max; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "PXqf");
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./values.js */ "0CTw");
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cb.js */ "ssMU");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./each.js */ "SuqQ");





// Return the maximum element (or element-based computation).
function max(obj, iteratee, context) {
  var result = -Infinity, lastComputed = -Infinity,
      value, computed;
  if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
    obj = Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) ? obj : Object(_values_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value > result) {
        result = value;
      }
    }
  } else {
    iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_2__["default"])(iteratee, context);
    Object(_each_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, function(v, index, list) {
      computed = iteratee(v, index, list);
      if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
        result = v;
        lastComputed = computed;
      }
    });
  }
  return result;
}


/***/ }),

/***/ "xCQA":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/isTypedArray.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "L0c3");
/* harmony import */ var _isDataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isDataView.js */ "7ijN");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ "OmtP");
/* harmony import */ var _isBufferLike_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isBufferLike.js */ "5TfP");





// Is a given value a typed array?
var typedArrayPattern = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
function isTypedArray(obj) {
  // `ArrayBuffer.isView` is the most future-proof, so use it when available.
  // Otherwise, fall back on the above regular expression.
  return _setup_js__WEBPACK_IMPORTED_MODULE_0__["nativeIsView"] ? (Object(_setup_js__WEBPACK_IMPORTED_MODULE_0__["nativeIsView"])(obj) && !Object(_isDataView_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj)) :
                Object(_isBufferLike_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj) && typedArrayPattern.test(_setup_js__WEBPACK_IMPORTED_MODULE_0__["toString"].call(obj));
}

/* harmony default export */ __webpack_exports__["default"] = (_setup_js__WEBPACK_IMPORTED_MODULE_0__["supportsArrayBuffer"] ? isTypedArray : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(false));


/***/ }),

/***/ "xG9w":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/index-all.js ***!
  \******************************************************/
/*! exports provided: default, VERSION, restArguments, isObject, isNull, isUndefined, isBoolean, isElement, isString, isNumber, isDate, isRegExp, isError, isSymbol, isArrayBuffer, isDataView, isArray, isFunction, isArguments, isFinite, isNaN, isTypedArray, isEmpty, isMatch, isEqual, isMap, isWeakMap, isSet, isWeakSet, keys, allKeys, values, pairs, invert, functions, methods, extend, extendOwn, assign, defaults, create, clone, tap, get, has, mapObject, identity, constant, noop, toPath, property, propertyOf, matcher, matches, times, random, now, escape, unescape, templateSettings, template, result, uniqueId, chain, iteratee, partial, bind, bindAll, memoize, delay, defer, throttle, debounce, wrap, negate, compose, after, before, once, findKey, findIndex, findLastIndex, sortedIndex, indexOf, lastIndexOf, find, detect, findWhere, each, forEach, map, collect, reduce, foldl, inject, reduceRight, foldr, filter, select, reject, every, all, some, any, contains, includes, include, invoke, pluck, where, max, min, shuffle, sample, sortBy, groupBy, indexBy, countBy, partition, toArray, size, pick, omit, first, head, take, initial, last, rest, tail, drop, compact, flatten, without, uniq, unique, union, intersection, difference, unzip, transpose, zip, object, range, chunk, mixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_default_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-default.js */ "sQPo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _index_default_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "5glh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["VERSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restArguments", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["restArguments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isSymbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayBuffer", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isArrayBuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDataView", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isDataView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArguments", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isArguments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFinite", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isFinite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isNaN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypedArray", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isTypedArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMatch", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isMatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMap", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWeakMap", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isWeakMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWeakSet", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isWeakSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["keys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allKeys", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["allKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["values"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["pairs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["invert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "functions", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["functions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "methods", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["methods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendOwn", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["extendOwn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["assign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["defaults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["create"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["clone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["tap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["get"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "has", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["has"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapObject", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["mapObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["identity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "constant", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["constant"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPath", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["toPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["property"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propertyOf", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["propertyOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["matcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["matches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "times", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["times"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "random", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["random"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["now"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["escape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unescape", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["unescape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateSettings", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["templateSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "template", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["template"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "result", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["result"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["uniqueId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["chain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iteratee", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["iteratee"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["partial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["bind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindAll", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["bindAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["memoize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["delay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["defer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["throttle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["debounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["wrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["negate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["compose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "after", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["after"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "before", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["before"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "once", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["once"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findKey", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["findKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["findIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findLastIndex", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["findLastIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortedIndex", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["sortedIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["indexOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["lastIndexOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["find"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detect", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["detect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findWhere", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["findWhere"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "each", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["each"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["forEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collect", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["collect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["reduce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "foldl", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["foldl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["inject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceRight", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["reduceRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "foldr", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["foldr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["reject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "every", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["every"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["all"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "some", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["some"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "any", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["any"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["contains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["includes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "include", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["include"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["invoke"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["pluck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "where", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["where"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["max"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["min"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["shuffle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["sample"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["sortBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["groupBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexBy", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["indexBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countBy", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["countBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["partition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["toArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "size", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["size"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["pick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["omit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "first", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["first"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "head", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["head"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["take"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initial", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["initial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "last", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["last"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rest", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["rest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["tail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["drop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["compact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["flatten"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "without", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["without"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["uniq"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["unique"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "union", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["union"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intersection", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["intersection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["difference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unzip", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["unzip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["transpose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["zip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "object", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["object"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["range"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chunk", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["chunk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["mixin"]; });

// ESM Exports
// ===========
// This module is the package entry point for ES module users. In other words,
// it is the module they are interfacing with when they import from the whole
// package instead of from a submodule, like this:
//
// ```js
// import { map } from 'underscore';
// ```
//
// The difference with `./index-default`, which is the package entry point for
// CommonJS, AMD and UMD users, is purely technical. In ES modules, named and
// default exports are considered to be siblings, so when you have a default
// export, its properties are not automatically available as named exports. For
// this reason, we re-export the named exports in addition to providing the same
// default export as in `./index-default`.




/***/ }),

/***/ "xSMm":
/*!************************************************!*\
  !*** ./src/app/views/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_users_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./users.component.html */ "tvqY");
/* harmony import */ var _users_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.component.scss */ "SmPd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/user */ "kl1M");
/* harmony import */ var _service_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/users.service */ "f2kA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");







let UsersComponent = class UsersComponent {
    constructor(usersService, router) {
        this.usersService = usersService;
        this.router = router;
        this.usersList = [];
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.page = 1;
    }
    ngOnInit() {
        this.getAllUsers();
    }
    getAllUsers() {
        this.usersService.getAll().subscribe(res => {
            this.usersList = res;
            console.log(this.usersList);
        }, err => {
            console.log("error while fetching data.");
        });
    }
    addUser() {
        console.log("button clicked");
        this.router.navigate(['/users/add']);
    }
    edituser(id) {
        console.log("id :" + id);
        this.router.navigate([`/users/edit`, id]);
    }
    deleteUser(user) {
        this.usersService.delete(user.id).subscribe(res => {
            console.log(res);
            alert('user deleted successfully');
            this.getAllUsers();
        }, err => {
            console.log(err);
        });
    }
    changebyId(id) {
        this.usersService.getbyId(id).subscribe(data => {
            this.user.username = data.username;
        });
    }
    changePassword(user) {
        console.log(user);
        this.usersService.changepassword(user).subscribe(data => {
            alert("Password Updated SuccessFully");
            this.router.navigate([`users/list`]);
        });
    }
    reload() {
        this.router.navigate([`/users/list`]);
    }
};
UsersComponent.ctorParameters = () => [
    { type: _service_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
UsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-users',
        template: _raw_loader_users_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_users_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], UsersComponent);



/***/ }),

/***/ "xSzf":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isSymbol.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "OeF5");


/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Symbol'));


/***/ }),

/***/ "y+by":
/*!***********************************************************!*\
  !*** ./node_modules/underscore/modules/_getByteLength.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shallowProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_shallowProperty.js */ "bG0f");


// Internal helper to obtain the `byteLength` property of an object.
/* harmony default export */ __webpack_exports__["default"] = (Object(_shallowProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])('byteLength'));


/***/ }),

/***/ "y5Ac":
/*!**************************************************!*\
  !*** ./src/app/pagination/pagination.service.ts ***!
  \**************************************************/
/*! exports provided: PaginationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ "xG9w");

class PaginationService {
    getPager(totalItems, currentPage, page_Size) {
        // calculate total pages
        let pageSize = parseInt(page_Size);
        let totalPages = Math.ceil(totalItems / pageSize);
        let startPage, endPage;
        if (totalPages <= 5) {
            startPage = 1;
            endPage = totalPages;
        }
        else {
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            }
            else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }
        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        let pages = underscore__WEBPACK_IMPORTED_MODULE_0__["range"](startPage, endPage + 1);
        console.log({
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        });
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
}


/***/ }),

/***/ "ygRw":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/sortBy.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortBy; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "ssMU");
/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pluck.js */ "AiSn");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.js */ "IDUA");




// Sort the object's values by a criterion produced by an iteratee.
function sortBy(obj, iteratee, context) {
  var index = 0;
  iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context);
  return Object(_pluck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_map_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, function(value, key, list) {
    return {
      value: value,
      index: index++,
      criteria: iteratee(value, key, list)
    };
  }).sort(function(left, right) {
    var a = left.criteria;
    var b = right.criteria;
    if (a !== b) {
      if (a > b || a === void 0) return 1;
      if (a < b || b === void 0) return -1;
    }
    return left.index - right.index;
  }), 'value');
}


/***/ }),

/***/ "yrI0":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/findWhere.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return findWhere; });
/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find.js */ "4bDf");
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matcher.js */ "EwgG");



// Convenience version of a common use case of `_.find`: getting the first
// object containing specific `key:value` pairs.
function findWhere(obj, attrs) {
  return Object(_find_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, Object(_matcher_js__WEBPACK_IMPORTED_MODULE_1__["default"])(attrs));
}


/***/ })

}]);
//# sourceMappingURL=views-users-users-module-es2015.js.map