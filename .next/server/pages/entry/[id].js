"use strict";
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

/***/ "./pages/entry/[id].tsx":
/*!******************************!*\
  !*** ./pages/entry/[id].tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Entry = ()=>{\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: uiid , 1: setid  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/idtest?testid=\" + id)// https://alt.edge.mile-two.com/api/text/13\n        .then((res)=>res.json()).then((responsedata)=>{\n            console.log(responsedata);\n            setData(responsedata);\n            console.log(data);\n            setLoading(false);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        fetch(\"/api/entry\")// https://alt.edge.mile-two.com/api/text/13\n        .then((res)=>res.json()).then((data)=>{\n            console.log(data);\n            setData(data);\n            setLoading(false);\n        });\n    }, []);\n    //   const displayfields = () => {\n    //     let html = \"\";\n    //     for (const property in data) {\n    //       html += `<div> ${property}: ${data[property]}</div>`;\n    //     }\n    //     return html;\n    //   };\n    //   {Object.values(data).map((value, index)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"return\",\n            \" \",\n            Object.values(data).map((value, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: value\n                        }, void 0, false, {\n                            fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Entry);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lbnRyeS9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBNEM7QUFDSjtBQUd4QyxNQUFNRyxLQUFLLEdBQUcsSUFBTTtJQUNsQixNQUFNLEtBQUNDLElBQUksTUFBRUMsT0FBTyxNQUFJTCwrQ0FBUSxDQUFRLEVBQUUsQ0FBQztJQUMzQyxNQUFNLEtBQUNNLFNBQVMsTUFBRUMsVUFBVSxNQUFJUCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUMvQyxNQUFNLEtBQUNRLElBQUksTUFBRUMsS0FBSyxNQUFJVCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUNsQyxNQUFNVSxNQUFNLEdBQUdSLHNEQUFTLEVBQUU7SUFDMUIsTUFBTSxFQUFFUyxFQUFFLEdBQUUsR0FBR0QsTUFBTSxDQUFDRSxLQUFLO0lBRTNCWCxnREFBUyxDQUFDLElBQU07UUFDZFksS0FBSyxDQUFDLHFCQUFxQixHQUFHRixFQUFFLENBQUMsNENBQ2E7U0FDM0NHLElBQUksQ0FBQyxDQUFDQyxHQUFHLEdBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFLENBQUMsQ0FDekJGLElBQUksQ0FBQyxDQUFDRyxZQUFZLEdBQUs7WUFDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixZQUFZLENBQUMsQ0FBQztZQUMxQlosT0FBTyxDQUFDWSxZQUFZLENBQUMsQ0FBQztZQUN0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNmLElBQUksQ0FBQyxDQUFDO1lBQ2xCRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUE4sZ0RBQVMsQ0FBQyxJQUFNO1FBQ2RNLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQk0sS0FBSyxDQUFDLFlBQVksQ0FBQyw0Q0FDMkI7U0FDM0NDLElBQUksQ0FBQyxDQUFDQyxHQUFHLEdBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFLENBQUMsQ0FDekJGLElBQUksQ0FBQyxDQUFDVixJQUFJLEdBQUs7WUFDZGMsT0FBTyxDQUFDQyxHQUFHLENBQUNmLElBQUksQ0FBQyxDQUFDO1lBQ2xCQyxPQUFPLENBQUNELElBQUksQ0FBQyxDQUFDO1lBQ2RHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLGtDQUFrQztJQUNsQyxxQkFBcUI7SUFDckIscUNBQXFDO0lBQ3JDLDhEQUE4RDtJQUM5RCxRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLE9BQU87SUFFUCw0Q0FBNEM7SUFFNUMscUJBQ0UsOERBQUNhLEtBQUc7O1lBQUMsUUFDRztZQUFDLEdBQUc7WUFDVEMsTUFBTSxDQUFDQyxNQUFNLENBQUNsQixJQUFJLENBQUMsQ0FBQ21CLEdBQUcsQ0FBQyxDQUFDQyxLQUFLLEVBQUVDLEtBQUssaUJBQ3BDLDhEQUFDTCxLQUFHOztzQ0FDRiw4REFBQ00sSUFBRTtzQ0FBRUYsS0FBSzs7Ozs7cUNBQU07c0NBQ2hCLDhEQUFDRyxJQUFFOzs7O3FDQUFHOzttQkFGRUYsS0FBSzs7Ozs2QkFHVCxDQUNOOzs7Ozs7aUJBQ0UsQ0FDTjtBQUNKLENBQUM7QUFFRCxpRUFBZXRCLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FiZWd5LWFwcC8uL3BhZ2VzL2VudHJ5L1tpZF0udHN4P2ExNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IEVudHJ5ID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VpaWQsIHNldGlkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goXCIvYXBpL2lkdGVzdD90ZXN0aWQ9XCIgKyBpZClcbiAgICAgIC8vIGh0dHBzOi8vYWx0LmVkZ2UubWlsZS10d28uY29tL2FwaS90ZXh0LzEzXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZWRhdGEpO1xuICAgICAgICBzZXREYXRhKHJlc3BvbnNlZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGZldGNoKFwiL2FwaS9lbnRyeVwiKVxuICAgICAgLy8gaHR0cHM6Ly9hbHQuZWRnZS5taWxlLXR3by5jb20vYXBpL3RleHQvMTNcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgc2V0RGF0YShkYXRhKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIC8vICAgY29uc3QgZGlzcGxheWZpZWxkcyA9ICgpID0+IHtcbiAgLy8gICAgIGxldCBodG1sID0gXCJcIjtcbiAgLy8gICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gZGF0YSkge1xuICAvLyAgICAgICBodG1sICs9IGA8ZGl2PiAke3Byb3BlcnR5fTogJHtkYXRhW3Byb3BlcnR5XX08L2Rpdj5gO1xuICAvLyAgICAgfVxuICAvLyAgICAgcmV0dXJuIGh0bWw7XG4gIC8vICAgfTtcblxuICAvLyAgIHtPYmplY3QudmFsdWVzKGRhdGEpLm1hcCgodmFsdWUsIGluZGV4KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHJldHVybntcIiBcIn1cbiAgICAgIHtPYmplY3QudmFsdWVzKGRhdGEpLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgPGgyPnt2YWx1ZX08L2gyPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW50cnk7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJFbnRyeSIsImRhdGEiLCJzZXREYXRhIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsInVpaWQiLCJzZXRpZCIsInJvdXRlciIsImlkIiwicXVlcnkiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzcG9uc2VkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsInZhbHVlIiwiaW5kZXgiLCJoMiIsImhyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/entry/[id].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

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