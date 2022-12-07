/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/entry/new/[name]";
exports.ids = ["pages/entry/new/[name]"];
exports.modules = {

/***/ "./styles/definition.module.css":
/*!**************************************!*\
  !*** ./styles/definition.module.css ***!
  \**************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"definition_main__lim1x\",\n\t\"description\": \"definition_description__wwKtT\",\n\t\"tagborder\": \"definition_tagborder__Xo1XV\",\n\t\"tagdescription\": \"definition_tagdescription__fMs3q\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvZGVmaW5pdGlvbi5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWJlZ3ktYXBwLy4vc3R5bGVzL2RlZmluaXRpb24ubW9kdWxlLmNzcz9hNjY4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJkZWZpbml0aW9uX21haW5fX2xpbTF4XCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJkZWZpbml0aW9uX2Rlc2NyaXB0aW9uX193d0t0VFwiLFxuXHRcInRhZ2JvcmRlclwiOiBcImRlZmluaXRpb25fdGFnYm9yZGVyX19YbzFYVlwiLFxuXHRcInRhZ2Rlc2NyaXB0aW9uXCI6IFwiZGVmaW5pdGlvbl90YWdkZXNjcmlwdGlvbl9fZk1zM3FcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/definition.module.css\n");

/***/ }),

/***/ "./pages/entry/new/[name].tsx":
/*!************************************!*\
  !*** ./pages/entry/new/[name].tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/definition.module.css */ \"./styles/definition.module.css\");\n/* harmony import */ var _styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst New = ()=>{\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { name  } = router.query;\n    console.log(name);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/test?testlabel=\" + name).then((res)=>res.json()).then((responsedata)=>{\n            console.log(responsedata);\n            setData(responsedata);\n            console.log(data);\n            setLoading(false);\n        });\n    }, [\n        router\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/new/[name].tsx\",\n        lineNumber: 23,\n        columnNumber: 25\n    }, undefined);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No profile data, invalid id\"\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/new/[name].tsx\",\n        lineNumber: 24,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            data?.map((item)=>item.texts.map((text)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" \",\n                            text.longName,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/new/[name].tsx\",\n                        lineNumber: 29,\n                        columnNumber: 39\n                    }, undefined))),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3___default().tagborder),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>router.back(),\n                    children: \"Back\"\n                }, void 0, false, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/entry/new/[name].tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/abegy/Abegy-example-app/pages/entry/new/[name].tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/new/[name].tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (New);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lbnRyeS9uZXcvW25hbWVdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUEyRDtBQUNmO0FBQ0o7QUFFeEMsTUFBTUksR0FBRyxHQUFHLElBQU07SUFDaEIsTUFBTSxLQUFDQyxJQUFJLE1BQUVDLE9BQU8sTUFBSUwsK0NBQVEsQ0FBUSxFQUFFLENBQUM7SUFDM0MsTUFBTSxLQUFDTSxTQUFTLE1BQUVDLFVBQVUsTUFBSVAsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFDL0MsTUFBTVEsTUFBTSxHQUFHTixzREFBUyxFQUFFO0lBQzFCLE1BQU0sRUFBRU8sSUFBSSxHQUFFLEdBQUdELE1BQU0sQ0FBQ0UsS0FBSztJQUU3QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQyxDQUFDO0lBQ2xCUixnREFBUyxDQUFDLElBQU07UUFDZFksS0FBSyxDQUFDLHNCQUFzQixHQUFHSixJQUFJLENBQUMsQ0FDakNLLElBQUksQ0FBQyxDQUFDQyxHQUFHLEdBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFLENBQUMsQ0FDekJGLElBQUksQ0FBQyxDQUFDRyxZQUFZLEdBQUs7WUFDdEJOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxZQUFZLENBQUMsQ0FBQztZQUMxQlosT0FBTyxDQUFDWSxZQUFZLENBQUMsQ0FBQztZQUN0Qk4sT0FBTyxDQUFDQyxHQUFHLENBQUNSLElBQUksQ0FBQyxDQUFDO1lBQ2xCRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLEVBQUU7UUFBQ0MsTUFBTTtLQUFDLENBQUMsQ0FBQztJQUViLElBQUlGLFNBQVMsRUFBRSxxQkFBTyw4REFBQ1ksR0FBQztrQkFBQyxZQUFVOzs7OztpQkFBSSxDQUFDO0lBQ3hDLElBQUksQ0FBQ2QsSUFBSSxFQUFFLHFCQUFPLDhEQUFDYyxHQUFDO2tCQUFDLDZCQUEyQjs7Ozs7aUJBQUksQ0FBQztJQUVyRCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVyQiwyRUFBVzs7WUFDeEJLLElBQUksRUFBRWtCLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLEdBQ2RBLElBQUksQ0FBQ0MsS0FBSyxDQUFDRixHQUFHLENBQUMsQ0FBQ0csSUFBUyxpQkFBSyw4REFBQ1AsR0FBQzs7NEJBQUMsR0FBQzs0QkFBQ08sSUFBSSxDQUFDQyxRQUFROzRCQUFDLEdBQUM7Ozs7OztpQ0FBSSxDQUFDLENBQ3hEOzBCQUNELDhEQUFDQyxRQUFNO2dCQUFDUCxTQUFTLEVBQUVyQixnRkFBZ0I7MEJBQ2pDLDRFQUFDOEIsUUFBTTtvQkFBQ0MsT0FBTyxFQUFFLElBQU10QixNQUFNLENBQUN1QixJQUFJLEVBQUU7OEJBQUUsTUFBSTs7Ozs7NkJBQVM7Ozs7O3lCQUM1Qzs7Ozs7O2lCQUNMLENBQ047QUFDSixDQUFDO0FBRUQsaUVBQWU1QixHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYmVneS1hcHAvLi9wYWdlcy9lbnRyeS9uZXcvW25hbWVdLnRzeD9jYjcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9kZWZpbml0aW9uLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBOZXcgPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBuYW1lIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc29sZS5sb2cobmFtZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goXCIvYXBpL3Rlc3Q/dGVzdGxhYmVsPVwiICsgbmFtZSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigocmVzcG9uc2VkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlZGF0YSk7XG4gICAgICAgIHNldERhdGEocmVzcG9uc2VkYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gIH0sIFtyb3V0ZXJdKTtcblxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmICghZGF0YSkgcmV0dXJuIDxwPk5vIHByb2ZpbGUgZGF0YSwgaW52YWxpZCBpZDwvcD47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAge2RhdGE/Lm1hcCgoaXRlbSkgPT5cbiAgICAgICAgaXRlbS50ZXh0cy5tYXAoKHRleHQ6IGFueSkgPT4gPHA+IHt0ZXh0LmxvbmdOYW1lfSA8L3A+KVxuICAgICAgKX1cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMudGFnYm9yZGVyfT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIuYmFjaygpfT5CYWNrPC9idXR0b24+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ldztcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIk5ldyIsImRhdGEiLCJzZXREYXRhIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsIm5hbWUiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzcG9uc2VkYXRhIiwicCIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJtYXAiLCJpdGVtIiwidGV4dHMiLCJ0ZXh0IiwibG9uZ05hbWUiLCJoZWFkZXIiLCJ0YWdib3JkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiYmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/entry/new/[name].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/entry/new/[name].tsx"));
module.exports = __webpack_exports__;

})();