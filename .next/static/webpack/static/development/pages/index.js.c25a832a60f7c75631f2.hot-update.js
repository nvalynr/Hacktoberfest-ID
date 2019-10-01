webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
false,

/***/ "./pages/src/profile.js":
/*!******************************!*\
  !*** ./pages/src/profile.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _comps_style_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comps/style/style */ "./pages/comps/style/style.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/_actions/user */ "./pages/redux/_actions/user.js");






var _jsxFileName = "E:\\Renext\\pages\\src\\profile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var Profile =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Profile, _Component);

  function Profile() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Profile);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Profile).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Profile, [{
    key: "getInitialProps",
    value: function getInitialProps() {
      this.props.dispatch(Object(_redux_actions_user__WEBPACK_IMPORTED_MODULE_10__["getUser"])());
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx("div", {
        style: styles.layout,
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("div", {
        style: styles.upText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("div", {
        style: styles.head,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Hi, ")), this.state.isChangeUser == false && __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, this.state.user)), this.state.isChangeUser == true && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        type: "name",
        placeholder: "What's is your name ?",
        onChange: function onChange(user) {
          _this.setState({
            user: user
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })), this.state.isChangeUser == false && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: function onClick() {
          _this.setState({
            isChangeUser: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "edit"), this.state.isChangeUser == true && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: function onClick() {
          return _this._addUser();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Done")), __jsx("h5", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.textHead, {
          color: _comps_style_style__WEBPACK_IMPORTED_MODULE_6__["default"].lightBlue
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Did anything suprise you today ?"), __jsx("div", {
        style: styles.form,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        row: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        type: "email",
        placeholder: "add a title here",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        row: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        type: "textarea",
        style: styles.textarea,
        placeholder: "how was your day ?",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        style: styles.button,
        className: "float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Send"))));
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(Profile));
var styles = {
  layout: {
    flex: 1,
    marginTop: 50,
    paddingTop: 20
  },
  textHead: {
    color: _comps_style_style__WEBPACK_IMPORTED_MODULE_6__["default"].black
  },
  upText: {
    display: 'flex',
    flexDirection: 'row',
    'justify-content': 'space-between'
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    'justify-content': 'space-evenly'
  },
  form: {
    marginTop: 50
  },
  textarea: {
    height: 200
  },
  button: {
    width: 100
  }
};

/***/ })

})
//# sourceMappingURL=index.js.c25a832a60f7c75631f2.hot-update.js.map