exports.id = 607;
exports.ids = [607];
exports.modules = {

/***/ 3607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2192);
/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const Navbar = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)(); // console.log('route: ', router.pathname);

  const {
    0: path,
    1: setPath
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.pathname);
  console.log('path: ', path);
  const {
    0: admin,
    1: setAdmin
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // document not available outside useEffect
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      let el = null;

      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        (el = document.getElementById("navbar")) && (el.style.height = "50px");
        (el = document.getElementById("navimg")) && (el.style.transform = "scale(0.5)");
        (el = document.getElementById("aside-id")) && (el.style.top = "50px");
      } else {
        (el = document.getElementById("navbar")) && (el.style.height = "90px");
        (el = document.getElementById("navimg")) && (el.style.transform = "scale(1)");
        (el = document.getElementById("aside-id")) && (el.style.top = "50px");
      }
    }
  });

  const logOut = async () => {
    localStorage.removeItem('token');
    setAdmin(false);
    await router.push('/');
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    id: "navbar",
    className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().navbar),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().brand),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
        onClick: () => router.push('/'),
        className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().navimg),
        width: "236",
        height: "35",
        viewBox: "0 0 236 35",
        fill: "black",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
          fill: "black",
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M197.66 24.5158H196.633C196.633 24.5158 177.834 14.9694 170.357 11.1727C169.675 10.8264 169.186 10.1175 169.049 9.27737C168.912 8.43727 169.145 7.57384 169.672 6.96903C169.896 6.71137 170.13 6.44345 170.369 6.16919C173.81 2.21916 178.479 0 183.346 0H235.592L227.191 9.64216H185.54L214.103 24.5158L209.287 30.0423C206.991 32.6775 203.877 34.1579 200.63 34.1579H145.853L154.255 24.5158H197.66Z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
          fill: "black",
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M72.5156 34.159L92.9054 10.3242C100.29 1.6915 104.284 0.0635986 118.188 0.0635986H168.132L157.996 11.6858H120.363C110.11 11.6858 107.469 12.6397 102.42 18.4964L88.9437 34.159H72.5156Z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
          fill: "black",
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M121.379 14.9146C111.126 14.9146 109.145 15.4596 104.524 20.8623L93.2217 34.1645H108.446L112.058 29.8515C114.194 27.2636 115.088 26.6278 120.175 26.6278H145.069L155.206 14.9146H121.379Z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
          fill: "black",
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M95.4001 0.330872L65.7625 34.2839H49.0036C49.0036 34.2839 59.2237 22.5756 64.8668 16.1109C65.2366 15.6873 65.2982 15.0255 65.0147 14.5221C64.7313 14.0187 64.1796 13.8101 63.6903 14.0214C50.8493 19.5655 16.7588 34.2839 16.7588 34.2839H0C0 34.2839 62.2683 7.39982 75.9885 1.47634C77.7428 0.718922 79.602 0.330872 81.4768 0.330872C86.256 0.330872 95.4004 0.330872 95.4004 0.330872H95.4001Z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
          fill: "black",
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M49.8138 30.8966H29.926C29.926 30.8966 44.7389 24.1625 48.8934 22.2739C49.6015 21.952 50.3564 21.7866 51.1181 21.7866C53.2887 21.7866 57.7658 21.7866 57.7658 21.7866L49.8138 30.8966Z"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().menu),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
        href: "/",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
          className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ml15) + ' ' + (path == '/' ? (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active) : ''),
          children: "\u0413\u041B\u0410\u0412\u041D\u0410\u042F"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
        href: "/spare-parts/maschio",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
          className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ml15) + ' ' + (path.includes('/spare-parts') ? (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active) : ''),
          children: "\u0417\u0410\u041F\u0427\u0410\u0421\u0422\u0418"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
        href: "/address",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
          className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ml15) + ' ' + (path == '/address' ? (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active) : ''),
          children: "\u0421\u0425\u0415\u041C\u0410 \u041F\u0420\u041E\u0415\u0417\u0414\u0410"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
        href: "/contacts",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
          className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ml15) + ' ' + (path == '/contacts' ? (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active) : ''),
          children: "\u041A\u041E\u041D\u0422\u0410\u041A\u0422\u042B"
        })
      })]
    }), admin ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
      onClick: logOut,
      className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().signout),
      href: "#",
      children: "\u0412\u044B\u0439\u0442\u0438"
    }) : null]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ 2192:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "Navbar_navbar__8zuE1",
	"brand": "Navbar_brand__W3VWp",
	"navimg": "Navbar_navimg__uasLF",
	"ml15": "Navbar_ml15__esoe9",
	"active": "Navbar_active__QtIhH",
	"signout": "Navbar_signout__J2yQe",
	"menu": "Navbar_menu__YHvaO",
	"menu-top": "Navbar_menu-top__4ioJ_",
	"menu-bottom": "Navbar_menu-bottom__Bjk0x",
	"dropdown": "Navbar_dropdown___Aq5D",
	"dropdown_content": "Navbar_dropdown_content__rTTD0",
	"line": "Navbar_line__DYyG_"
};


/***/ })

};
;