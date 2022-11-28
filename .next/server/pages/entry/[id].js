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
exports.id = "pages/entry/[id]";
exports.ids = ["pages/entry/[id]"];
exports.modules = {

/***/ "./styles/definition.module.css":
/*!**************************************!*\
  !*** ./styles/definition.module.css ***!
  \**************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"definition_main__lim1x\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvZGVmaW5pdGlvbi5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWJlZ3ktYXBwLy4vc3R5bGVzL2RlZmluaXRpb24ubW9kdWxlLmNzcz9hNjY4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJkZWZpbml0aW9uX21haW5fX2xpbTF4XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/definition.module.css\n");

/***/ }),

/***/ "./pages/entry/[id].tsx":
/*!******************************!*\
  !*** ./pages/entry/[id].tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/definition.module.css */ \"./styles/definition.module.css\");\n/* harmony import */ var _styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Entry = ()=>{\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/idtest?testid=\" + id).then((res)=>res.json()).then((responsedata)=>{\n            console.log(responsedata);\n            setData(responsedata);\n            console.log(data);\n            setLoading(false);\n        });\n    }, [\n        router\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n        lineNumber: 30,\n        columnNumber: 25\n    }, undefined);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No profile data, invalid id\"\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n        lineNumber: 31,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: data !== undefined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: data.abbreviation\n                }, void 0, false, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: data.longName\n                }, void 0, false, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: data.description\n                }, void 0, false, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"no data to display\"\n        }, void 0, false, {\n            fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n            lineNumber: 42,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Entry);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lbnRyeS9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUF3RDtBQUNaO0FBQ0o7QUFVeEMsTUFBTUksS0FBSyxHQUFHLElBQU07SUFDbEIsTUFBTSxLQUFDQyxJQUFJLE1BQUVDLE9BQU8sTUFBSUwsK0NBQVEsQ0FBd0JNLFNBQVMsQ0FBQztJQUNsRSxNQUFNLEtBQUNDLFNBQVMsTUFBRUMsVUFBVSxNQUFJUiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUMvQyxNQUFNUyxNQUFNLEdBQUdQLHNEQUFTLEVBQUU7SUFDMUIsTUFBTSxFQUFFUSxFQUFFLEdBQUUsR0FBR0QsTUFBTSxDQUFDRSxLQUFLO0lBRTNCVixnREFBUyxDQUFDLElBQU07UUFDZFcsS0FBSyxDQUFDLHFCQUFxQixHQUFHRixFQUFFLENBQUMsQ0FDOUJHLElBQUksQ0FBQyxDQUFDQyxHQUFHLEdBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFLENBQUMsQ0FDekJGLElBQUksQ0FBQyxDQUFDRyxZQUFZLEdBQUs7WUFDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixZQUFZLENBQUMsQ0FBQztZQUMxQlgsT0FBTyxDQUFDVyxZQUFZLENBQUMsQ0FBQztZQUN0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNkLElBQUksQ0FBQyxDQUFDO1lBQ2xCSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLEVBQUU7UUFBQ0MsTUFBTTtLQUFDLENBQUMsQ0FBQztJQUViLElBQUlGLFNBQVMsRUFBRSxxQkFBTyw4REFBQ1ksR0FBQztrQkFBQyxZQUFVOzs7OztpQkFBSSxDQUFDO0lBQ3hDLElBQUksQ0FBQ2YsSUFBSSxFQUFFLHFCQUFPLDhEQUFDZSxHQUFDO2tCQUFDLDZCQUEyQjs7Ozs7aUJBQUksQ0FBQztJQUVyRCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUV0QiwyRUFBVztrQkFDeEJLLElBQUksS0FBS0UsU0FBUyxpQkFDakI7OzhCQUNFLDhEQUFDaUIsSUFBRTs4QkFBRW5CLElBQUksQ0FBQ29CLFlBQVk7Ozs7OzZCQUFNOzhCQUM1Qiw4REFBQ0MsSUFBRTs4QkFBRXJCLElBQUksQ0FBQ3NCLFFBQVE7Ozs7OzZCQUFNOzhCQUN4Qiw4REFBQ1AsR0FBQzs4QkFBRWYsSUFBSSxDQUFDdUIsV0FBVzs7Ozs7NkJBQUs7O3dCQUN4QixpQkFFSCw4REFBQ0osSUFBRTtzQkFBQyxvQkFBa0I7Ozs7O3FCQUFLOzs7OztpQkFFekIsQ0FDTjtBQUNKLENBQUM7QUFFRCxpRUFBZXBCLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FiZWd5LWFwcC8uL3BhZ2VzL2VudHJ5L1tpZF0udHN4P2ExNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2RlZmluaXRpb24ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmludGVyZmFjZSBEYXRhTW9kZWwge1xuICBhYmJyZXZpYXRpb246IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgbG9uZ05hbWU6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbiAgdGFnczogW3sgaWQ6IG51bWJlcjsgbmFtZTogc3RyaW5nIH1dO1xufVxuXG5jb25zdCBFbnRyeSA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8RGF0YU1vZGVsIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKFwiL2FwaS9pZHRlc3Q/dGVzdGlkPVwiICsgaWQpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZWRhdGEpO1xuICAgICAgICBzZXREYXRhKHJlc3BvbnNlZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9LCBbcm91dGVyXSk7XG5cbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoIWRhdGEpIHJldHVybiA8cD5ObyBwcm9maWxlIGRhdGEsIGludmFsaWQgaWQ8L3A+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgIHtkYXRhICE9PSB1bmRlZmluZWQgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGgxPntkYXRhLmFiYnJldmlhdGlvbn08L2gxPlxuICAgICAgICAgIDxoMj57ZGF0YS5sb25nTmFtZX08L2gyPlxuICAgICAgICAgIDxwPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8aDE+bm8gZGF0YSB0byBkaXNwbGF5PC9oMT5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbnRyeTtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkVudHJ5IiwiZGF0YSIsInNldERhdGEiLCJ1bmRlZmluZWQiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXNwb25zZWRhdGEiLCJjb25zb2xlIiwibG9nIiwicCIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJoMSIsImFiYnJldmlhdGlvbiIsImgyIiwibG9uZ05hbWUiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/entry/[id].tsx\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/entry/[id].tsx"));
module.exports = __webpack_exports__;

})();