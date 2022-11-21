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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/definition.module.css */ \"./styles/definition.module.css\");\n/* harmony import */ var _styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Entry = ()=>{\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: uiid , 1: setid  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/idtest?testid=\" + id)// https://alt.edge.mile-two.com/api/text/13\n        .then((res)=>res.json()).then((responsedata)=>{\n            console.log(responsedata);\n            setData(responsedata);\n            console.log(data);\n            setLoading(false);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        fetch(\"/api/entry\")// https://alt.edge.mile-two.com/api/text/13\n        .then((res)=>res.json()).then((data)=>{\n            console.log(data);\n            setData(data);\n            setLoading(false);\n        });\n    }, []);\n    //   const displayfields = () => {\n    //     let html = \"\";\n    //     for (const property in data) {\n    //       html += `<div> ${property}: ${data[property]}</div>`;\n    //     }\n    //     return html;\n    //   };\n    //   {Object.values(data).map((value, index)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data !== undefined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                    children: data.abbreviation\n                }, void 0, false, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: data.longName\n                }, void 0, false, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: data.description\n                }, void 0, false, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"no data to display\"\n        }, void 0, false, {\n            fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n            lineNumber: 65,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Entry);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lbnRyeS9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUF3RDtBQUNaO0FBQ0o7QUFHeEMsTUFBTUksS0FBSyxHQUFHLElBQU07SUFDbEIsTUFBTSxLQUFDQyxJQUFJLE1BQUVDLE9BQU8sTUFBSUwsK0NBQVEsQ0FTOUJNLFNBQVMsQ0FBQztJQUNaLE1BQU0sS0FBQ0MsU0FBUyxNQUFFQyxVQUFVLE1BQUlSLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQy9DLE1BQU0sS0FBQ1MsSUFBSSxNQUFFQyxLQUFLLE1BQUlWLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ2xDLE1BQU1XLE1BQU0sR0FBR1Qsc0RBQVMsRUFBRTtJQUMxQixNQUFNLEVBQUVVLEVBQUUsR0FBRSxHQUFHRCxNQUFNLENBQUNFLEtBQUs7SUFFM0JaLGdEQUFTLENBQUMsSUFBTTtRQUNkYSxLQUFLLENBQUMscUJBQXFCLEdBQUdGLEVBQUUsQ0FBQyw0Q0FDYTtTQUMzQ0csSUFBSSxDQUFDLENBQUNDLEdBQUcsR0FBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUUsQ0FBQyxDQUN6QkYsSUFBSSxDQUFDLENBQUNHLFlBQVksR0FBSztZQUN0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFlBQVksQ0FBQyxDQUFDO1lBQzFCYixPQUFPLENBQUNhLFlBQVksQ0FBQyxDQUFDO1lBQ3RCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2hCLElBQUksQ0FBQyxDQUFDO1lBQ2xCSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUFAsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2RPLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQk0sS0FBSyxDQUFDLFlBQVksQ0FBQyw0Q0FDMkI7U0FDM0NDLElBQUksQ0FBQyxDQUFDQyxHQUFHLEdBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFLENBQUMsQ0FDekJGLElBQUksQ0FBQyxDQUFDWCxJQUFJLEdBQUs7WUFDZGUsT0FBTyxDQUFDQyxHQUFHLENBQUNoQixJQUFJLENBQUMsQ0FBQztZQUNsQkMsT0FBTyxDQUFDRCxJQUFJLENBQUMsQ0FBQztZQUNkSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLHFDQUFxQztJQUNyQyw4REFBOEQ7SUFDOUQsUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixPQUFPO0lBRVAsNENBQTRDO0lBRTVDLHFCQUNFLDhEQUFDYSxLQUFHO2tCQUNEakIsSUFBSSxLQUFLRSxTQUFTLGlCQUNqQjs7OEJBQ0UsOERBQUNnQixJQUFFO29CQUFDQyxTQUFTLEVBQUV4QiwyRUFBVzs4QkFBR0ssSUFBSSxDQUFDcUIsWUFBWTs7Ozs7NkJBQU07OEJBQ3BELDhEQUFDQyxJQUFFOzhCQUFFdEIsSUFBSSxDQUFDdUIsUUFBUTs7Ozs7NkJBQU07OEJBQ3hCLDhEQUFDQyxHQUFDOzhCQUFFeEIsSUFBSSxDQUFDeUIsV0FBVzs7Ozs7NkJBQUs7O3dCQUN4QixpQkFFSCw4REFBQ1AsSUFBRTtzQkFBQyxvQkFBa0I7Ozs7O3FCQUFLOzs7OztpQkFFekIsQ0FDTjtBQUNKLENBQUM7QUFFRCxpRUFBZW5CLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FiZWd5LWFwcC8uL3BhZ2VzL2VudHJ5L1tpZF0udHN4P2ExNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2RlZmluaXRpb24ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IEVudHJ5ID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxcbiAgICB8IHtcbiAgICAgICAgYWJicmV2aWF0aW9uOiBzdHJpbmc7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgICAgIGxvbmdOYW1lOiBzdHJpbmc7XG4gICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgIHRhZ3M6IFt7IGlkOiBudW1iZXI7IG5hbWU6IHN0cmluZyB9XTtcbiAgICAgIH1cbiAgICB8IHVuZGVmaW5lZFxuICA+KHVuZGVmaW5lZCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdWlpZCwgc2V0aWRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChcIi9hcGkvaWR0ZXN0P3Rlc3RpZD1cIiArIGlkKVxuICAgICAgLy8gaHR0cHM6Ly9hbHQuZWRnZS5taWxlLXR3by5jb20vYXBpL3RleHQvMTNcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigocmVzcG9uc2VkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlZGF0YSk7XG4gICAgICAgIHNldERhdGEocmVzcG9uc2VkYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgZmV0Y2goXCIvYXBpL2VudHJ5XCIpXG4gICAgICAvLyBodHRwczovL2FsdC5lZGdlLm1pbGUtdHdvLmNvbS9hcGkvdGV4dC8xM1xuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBzZXREYXRhKGRhdGEpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLy8gICBjb25zdCBkaXNwbGF5ZmllbGRzID0gKCkgPT4ge1xuICAvLyAgICAgbGV0IGh0bWwgPSBcIlwiO1xuICAvLyAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBkYXRhKSB7XG4gIC8vICAgICAgIGh0bWwgKz0gYDxkaXY+ICR7cHJvcGVydHl9OiAke2RhdGFbcHJvcGVydHldfTwvZGl2PmA7XG4gIC8vICAgICB9XG4gIC8vICAgICByZXR1cm4gaHRtbDtcbiAgLy8gICB9O1xuXG4gIC8vICAge09iamVjdC52YWx1ZXMoZGF0YSkubWFwKCh2YWx1ZSwgaW5kZXgpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2RhdGEgIT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+e2RhdGEuYWJicmV2aWF0aW9ufTwvaDE+XG4gICAgICAgICAgPGgyPntkYXRhLmxvbmdOYW1lfTwvaDI+XG4gICAgICAgICAgPHA+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxoMT5ubyBkYXRhIHRvIGRpc3BsYXk8L2gxPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVudHJ5O1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiRW50cnkiLCJkYXRhIiwic2V0RGF0YSIsInVuZGVmaW5lZCIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJ1aWlkIiwic2V0aWQiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3BvbnNlZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsIm1haW4iLCJhYmJyZXZpYXRpb24iLCJoMiIsImxvbmdOYW1lIiwicCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/entry/[id].tsx\n");

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