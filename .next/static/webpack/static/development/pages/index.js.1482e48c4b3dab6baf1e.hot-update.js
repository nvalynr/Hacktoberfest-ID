webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/redux/_reducers/user.js":
/*!***************************************!*\
  !*** ./pages/redux/_reducers/user.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

var initialState = {
  isLoading: true,
  contributor: [{
    name: 'Abdul Hakim'
  }],
  error: null
};

var user = function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'GET_USER':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        contributor: state.contributor
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (user);

/***/ })

})
//# sourceMappingURL=index.js.1482e48c4b3dab6baf1e.hot-update.js.map