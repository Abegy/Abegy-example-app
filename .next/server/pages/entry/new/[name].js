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

eval("// Exports\nmodule.exports = {\n\t\"main\": \"definition_main__lim1x\",\n\t\"description\": \"definition_description__wwKtT\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvZGVmaW5pdGlvbi5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYmVneS1hcHAvLi9zdHlsZXMvZGVmaW5pdGlvbi5tb2R1bGUuY3NzP2E2NjgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcImRlZmluaXRpb25fbWFpbl9fbGltMXhcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcImRlZmluaXRpb25fZGVzY3JpcHRpb25fX3d3S3RUXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/definition.module.css\n");

/***/ }),

/***/ "./pages/entry/new/[name].tsx":
/*!************************************!*\
  !*** ./pages/entry/new/[name].tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/definition.module.css */ \"./styles/definition.module.css\");\n/* harmony import */ var _styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst New = ()=>{\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { name  } = router.query;\n    console.log(name);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/test?testlabel=\" + name).then((res)=>res.json()).then((responsedata)=>{\n            console.log(responsedata);\n            setData(responsedata);\n            console.log(data);\n            setLoading(false);\n        });\n    }, [\n        router\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/new/[name].tsx\",\n        lineNumber: 23,\n        columnNumber: 25\n    }, undefined);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No profile data, invalid id\"\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/new/[name].tsx\",\n        lineNumber: 24,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: data?.map((item)=>item.texts.map((text)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \" \",\n                        text.longName,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/entry/new/[name].tsx\",\n                    lineNumber: 29,\n                    columnNumber: 39\n                }, undefined)))\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/new/[name].tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (New);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lbnRyeS9uZXcvW25hbWVdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUEyRDtBQUNmO0FBQ0o7QUFFeEMsTUFBTUksR0FBRyxHQUFHLElBQU07SUFDaEIsTUFBTSxLQUFDQyxJQUFJLE1BQUVDLE9BQU8sTUFBSUwsK0NBQVEsQ0FBUSxFQUFFLENBQUM7SUFDM0MsTUFBTSxLQUFDTSxTQUFTLE1BQUVDLFVBQVUsTUFBSVAsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFDL0MsTUFBTVEsTUFBTSxHQUFHTixzREFBUyxFQUFFO0lBQzFCLE1BQU0sRUFBRU8sSUFBSSxHQUFFLEdBQUdELE1BQU0sQ0FBQ0UsS0FBSztJQUU3QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQyxDQUFDO0lBQ2xCUixnREFBUyxDQUFDLElBQU07UUFDZFksS0FBSyxDQUFDLHNCQUFzQixHQUFHSixJQUFJLENBQUMsQ0FDakNLLElBQUksQ0FBQyxDQUFDQyxHQUFHLEdBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFLENBQUMsQ0FDekJGLElBQUksQ0FBQyxDQUFDRyxZQUFZLEdBQUs7WUFDdEJOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxZQUFZLENBQUMsQ0FBQztZQUMxQlosT0FBTyxDQUFDWSxZQUFZLENBQUMsQ0FBQztZQUN0Qk4sT0FBTyxDQUFDQyxHQUFHLENBQUNSLElBQUksQ0FBQyxDQUFDO1lBQ2xCRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLEVBQUU7UUFBQ0MsTUFBTTtLQUFDLENBQUMsQ0FBQztJQUViLElBQUlGLFNBQVMsRUFBRSxxQkFBTyw4REFBQ1ksR0FBQztrQkFBQyxZQUFVOzs7OztpQkFBSSxDQUFDO0lBQ3hDLElBQUksQ0FBQ2QsSUFBSSxFQUFFLHFCQUFPLDhEQUFDYyxHQUFDO2tCQUFDLDZCQUEyQjs7Ozs7aUJBQUksQ0FBQztJQUVyRCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVyQiwyRUFBVztrQkFDeEJLLElBQUksRUFBRWtCLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLEdBQ2RBLElBQUksQ0FBQ0MsS0FBSyxDQUFDRixHQUFHLENBQUMsQ0FBQ0csSUFBUyxpQkFBSyw4REFBQ1AsR0FBQzs7d0JBQUMsR0FBQzt3QkFBQ08sSUFBSSxDQUFDQyxRQUFRO3dCQUFDLEdBQUM7Ozs7Ozs2QkFBSSxDQUFDLENBQ3hEOzs7OztpQkFDRyxDQUNOO0FBQ0osQ0FBQztBQUVELGlFQUFldkIsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWJlZ3ktYXBwLy4vcGFnZXMvZW50cnkvbmV3L1tuYW1lXS50c3g/Y2I3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvZGVmaW5pdGlvbi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgTmV3ID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgbmFtZSB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnNvbGUubG9nKG5hbWUpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKFwiL2FwaS90ZXN0P3Rlc3RsYWJlbD1cIiArIG5hbWUpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZWRhdGEpO1xuICAgICAgICBzZXREYXRhKHJlc3BvbnNlZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9LCBbcm91dGVyXSk7XG5cbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoIWRhdGEpIHJldHVybiA8cD5ObyBwcm9maWxlIGRhdGEsIGludmFsaWQgaWQ8L3A+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgIHtkYXRhPy5tYXAoKGl0ZW0pID0+XG4gICAgICAgIGl0ZW0udGV4dHMubWFwKCh0ZXh0OiBhbnkpID0+IDxwPiB7dGV4dC5sb25nTmFtZX0gPC9wPilcbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXc7XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJOZXciLCJkYXRhIiwic2V0RGF0YSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJuYW1lIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3BvbnNlZGF0YSIsInAiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwibWFwIiwiaXRlbSIsInRleHRzIiwidGV4dCIsImxvbmdOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/entry/new/[name].tsx\n");

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