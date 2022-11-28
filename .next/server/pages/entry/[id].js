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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/definition.module.css */ \"./styles/definition.module.css\");\n/* harmony import */ var _styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Entry = ()=>{\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //   const [uiid, setid] = useState(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/idtest?testid=\" + id)// https://alt.edge.mile-two.com/api/text/13\n        .then((res)=>res.json()).then((responsedata)=>{\n            console.log(responsedata);\n            setData(responsedata);\n            console.log(data);\n            setLoading(false);\n        });\n    }, [\n        router\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n        lineNumber: 33,\n        columnNumber: 25\n    }, undefined);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No profile data\"\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n        lineNumber: 34,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: data !== undefined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: data.abbreviation\n                }, void 0, false, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: data.longName\n                }, void 0, false, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: data.description\n                }, void 0, false, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"no data to display\"\n        }, void 0, false, {\n            fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n            lineNumber: 45,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Entry);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lbnRyeS9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUF3RDtBQUNaO0FBQ0o7QUFXeEMsTUFBTUksS0FBSyxHQUFHLElBQU07SUFDbEIsTUFBTSxLQUFDQyxJQUFJLE1BQUVDLE9BQU8sTUFBSUwsK0NBQVEsQ0FBd0JNLFNBQVMsQ0FBQztJQUNsRSxNQUFNLEtBQUNDLFNBQVMsTUFBRUMsVUFBVSxNQUFJUiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUMvQyx3Q0FBd0M7SUFDeEMsTUFBTVMsTUFBTSxHQUFHUCxzREFBUyxFQUFFO0lBQzFCLE1BQU0sRUFBRVEsRUFBRSxHQUFFLEdBQUdELE1BQU0sQ0FBQ0UsS0FBSztJQUUzQlYsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2RXLEtBQUssQ0FBQyxxQkFBcUIsR0FBR0YsRUFBRSxDQUFDLDRDQUNhO1NBQzNDRyxJQUFJLENBQUMsQ0FBQ0MsR0FBRyxHQUFLQSxHQUFHLENBQUNDLElBQUksRUFBRSxDQUFDLENBQ3pCRixJQUFJLENBQUMsQ0FBQ0csWUFBWSxHQUFLO1lBQ3RCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsWUFBWSxDQUFDLENBQUM7WUFDMUJYLE9BQU8sQ0FBQ1csWUFBWSxDQUFDLENBQUM7WUFDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZCxJQUFJLENBQUMsQ0FBQztZQUNsQkksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxFQUFFO1FBQUNDLE1BQU07S0FBQyxDQUFDLENBQUM7SUFFYixJQUFJRixTQUFTLEVBQUUscUJBQU8sOERBQUNZLEdBQUM7a0JBQUMsWUFBVTs7Ozs7aUJBQUksQ0FBQztJQUN4QyxJQUFJLENBQUNmLElBQUksRUFBRSxxQkFBTyw4REFBQ2UsR0FBQztrQkFBQyxpQkFBZTs7Ozs7aUJBQUksQ0FBQztJQUV6QyxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUV0QiwyRUFBVztrQkFDeEJLLElBQUksS0FBS0UsU0FBUyxpQkFDakI7OzhCQUNFLDhEQUFDaUIsSUFBRTs4QkFBRW5CLElBQUksQ0FBQ29CLFlBQVk7Ozs7OzZCQUFNOzhCQUM1Qiw4REFBQ0MsSUFBRTs4QkFBRXJCLElBQUksQ0FBQ3NCLFFBQVE7Ozs7OzZCQUFNOzhCQUN4Qiw4REFBQ1AsR0FBQzs4QkFBRWYsSUFBSSxDQUFDdUIsV0FBVzs7Ozs7NkJBQUs7O3dCQUN4QixpQkFFSCw4REFBQ0osSUFBRTtzQkFBQyxvQkFBa0I7Ozs7O3FCQUFLOzs7OztpQkFFekIsQ0FDTjtBQUNKLENBQUM7QUFFRCxpRUFBZXBCLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FiZWd5LWFwcC8uL3BhZ2VzL2VudHJ5L1tpZF0udHN4P2ExNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2RlZmluaXRpb24ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmludGVyZmFjZSBEYXRhTW9kZWwge1xuICBhYmJyZXZpYXRpb246IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgbG9uZ05hbWU6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbiAgdGFnczogW3sgaWQ6IG51bWJlcjsgbmFtZTogc3RyaW5nIH1dO1xufVxuXG5jb25zdCBFbnRyeSA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8RGF0YU1vZGVsIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gICBjb25zdCBbdWlpZCwgc2V0aWRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChcIi9hcGkvaWR0ZXN0P3Rlc3RpZD1cIiArIGlkKVxuICAgICAgLy8gaHR0cHM6Ly9hbHQuZWRnZS5taWxlLXR3by5jb20vYXBpL3RleHQvMTNcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigocmVzcG9uc2VkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlZGF0YSk7XG4gICAgICAgIHNldERhdGEocmVzcG9uc2VkYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gIH0sIFtyb3V0ZXJdKTtcblxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmICghZGF0YSkgcmV0dXJuIDxwPk5vIHByb2ZpbGUgZGF0YTwvcD47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAge2RhdGEgIT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8aDE+e2RhdGEuYWJicmV2aWF0aW9ufTwvaDE+XG4gICAgICAgICAgPGgyPntkYXRhLmxvbmdOYW1lfTwvaDI+XG4gICAgICAgICAgPHA+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxoMT5ubyBkYXRhIHRvIGRpc3BsYXk8L2gxPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVudHJ5O1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiRW50cnkiLCJkYXRhIiwic2V0RGF0YSIsInVuZGVmaW5lZCIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3BvbnNlZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsImgxIiwiYWJicmV2aWF0aW9uIiwiaDIiLCJsb25nTmFtZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/entry/[id].tsx\n");

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