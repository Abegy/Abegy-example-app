"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/entry/new/[name]",{

/***/ "./pages/entry/new/[name].tsx":
/*!************************************!*\
  !*** ./pages/entry/new/[name].tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/definition.module.css */ \"./styles/definition.module.css\");\n/* harmony import */ var _styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar New = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLoading = ref1[0], setLoading = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var name = router.query.name;\n    console.log(name);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"/api/test?testlabel=\" + name).then(function(res) {\n            return res.json();\n        }).then(function(responsedata) {\n            console.log(responsedata);\n            setData(responsedata);\n            console.log(data);\n            setLoading(false);\n        });\n    }, [\n        router\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/new/[name].tsx\",\n        lineNumber: 23,\n        columnNumber: 25\n    }, _this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No profile data, invalid id\"\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/new/[name].tsx\",\n        lineNumber: 24,\n        columnNumber: 21\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            data === null || data === void 0 ? void 0 : data.map(function(item) {\n                return item.texts.map(function(text) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" \",\n                            text.longName,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/new/[name].tsx\",\n                        lineNumber: 29,\n                        columnNumber: 39\n                    }, _this);\n                });\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_styles_definition_module_css__WEBPACK_IMPORTED_MODULE_3___default().tagborder),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return router.back();\n                    },\n                    children: \"Back\"\n                }, void 0, false, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/entry/new/[name].tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/abegy/Abegy-example-app/pages/entry/new/[name].tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/new/[name].tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(New, \"QeEVsX67u57h5G/55D+39m/35Xo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = New;\n/* harmony default export */ __webpack_exports__[\"default\"] = (New);\nvar _c;\n$RefreshReg$(_c, \"New\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lbnRyeS9uZXcvW25hbWVdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7O0FBQTJEO0FBQ2Y7QUFDSjtBQUV4QyxJQUFNSSxHQUFHLEdBQUcsV0FBTTs7SUFDaEIsSUFBd0JILEdBQW1CLEdBQW5CQSwrQ0FBUSxDQUFRLEVBQUUsQ0FBQyxFQUFwQ0ksSUFBSSxHQUFhSixHQUFtQixHQUFoQyxFQUFFSyxPQUFPLEdBQUlMLEdBQW1CLEdBQXZCO0lBQ3BCLElBQWdDQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXhDTSxTQUFTLEdBQWdCTixJQUFlLEdBQS9CLEVBQUVPLFVBQVUsR0FBSVAsSUFBZSxHQUFuQjtJQUM1QixJQUFNUSxNQUFNLEdBQUdOLHNEQUFTLEVBQUU7SUFDMUIsSUFBTSxJQUFNLEdBQUtNLE1BQU0sQ0FBQ0UsS0FBSyxDQUFyQkQsSUFBSTtJQUVaRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDLENBQUM7SUFDbEJSLGdEQUFTLENBQUMsV0FBTTtRQUNkWSxLQUFLLENBQUMsc0JBQXNCLEdBQUdKLElBQUksQ0FBQyxDQUNqQ0ssSUFBSSxDQUFDLFNBQUNDLEdBQUc7bUJBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO1NBQUEsQ0FBQyxDQUN6QkYsSUFBSSxDQUFDLFNBQUNHLFlBQVksRUFBSztZQUN0Qk4sT0FBTyxDQUFDQyxHQUFHLENBQUNLLFlBQVksQ0FBQyxDQUFDO1lBQzFCWixPQUFPLENBQUNZLFlBQVksQ0FBQyxDQUFDO1lBQ3RCTixPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsSUFBSSxDQUFDLENBQUM7WUFDbEJHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsRUFBRTtRQUFDQyxNQUFNO0tBQUMsQ0FBQyxDQUFDO0lBRWIsSUFBSUYsU0FBUyxFQUFFLHFCQUFPLDhEQUFDWSxHQUFDO2tCQUFDLFlBQVU7Ozs7O2FBQUksQ0FBQztJQUN4QyxJQUFJLENBQUNkLElBQUksRUFBRSxxQkFBTyw4REFBQ2MsR0FBQztrQkFBQyw2QkFBMkI7Ozs7O2FBQUksQ0FBQztJQUVyRCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVyQiwyRUFBVzs7WUFDeEJLLElBQUksYUFBSkEsSUFBSSxXQUFLLEdBQVRBLEtBQUFBLENBQVMsR0FBVEEsSUFBSSxDQUFFa0IsR0FBRyxDQUFDLFNBQUNDLElBQUk7dUJBQ2RBLElBQUksQ0FBQ0MsS0FBSyxDQUFDRixHQUFHLENBQUMsU0FBQ0csSUFBUzt5Q0FBSyw4REFBQ1AsR0FBQzs7NEJBQUMsR0FBQzs0QkFBQ08sSUFBSSxDQUFDQyxRQUFROzRCQUFDLEdBQUM7Ozs7Ozs2QkFBSTtpQkFBQSxDQUFDO2FBQUEsQ0FDeEQ7MEJBQ0QsOERBQUNDLFFBQU07Z0JBQUNQLFNBQVMsRUFBRXJCLGdGQUFnQjswQkFDakMsNEVBQUM4QixRQUFNO29CQUFDQyxPQUFPLEVBQUU7K0JBQU10QixNQUFNLENBQUN1QixJQUFJLEVBQUU7cUJBQUE7OEJBQUUsTUFBSTs7Ozs7eUJBQVM7Ozs7O3FCQUM1Qzs7Ozs7O2FBQ0wsQ0FDTjtBQUNKLENBQUM7R0EvQks1QixHQUFHOztRQUdRRCxrREFBUzs7O0FBSHBCQyxLQUFBQSxHQUFHO0FBaUNULCtEQUFlQSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW50cnkvbmV3L1tuYW1lXS50c3g/Y2I3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvZGVmaW5pdGlvbi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgTmV3ID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgbmFtZSB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnNvbGUubG9nKG5hbWUpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKFwiL2FwaS90ZXN0P3Rlc3RsYWJlbD1cIiArIG5hbWUpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZWRhdGEpO1xuICAgICAgICBzZXREYXRhKHJlc3BvbnNlZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9LCBbcm91dGVyXSk7XG5cbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoIWRhdGEpIHJldHVybiA8cD5ObyBwcm9maWxlIGRhdGEsIGludmFsaWQgaWQ8L3A+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgIHtkYXRhPy5tYXAoKGl0ZW0pID0+XG4gICAgICAgIGl0ZW0udGV4dHMubWFwKCh0ZXh0OiBhbnkpID0+IDxwPiB7dGV4dC5sb25nTmFtZX0gPC9wPilcbiAgICAgICl9XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLnRhZ2JvcmRlcn0+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0+QmFjazwvYnV0dG9uPlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXc7XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJOZXciLCJkYXRhIiwic2V0RGF0YSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJuYW1lIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3BvbnNlZGF0YSIsInAiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwibWFwIiwiaXRlbSIsInRleHRzIiwidGV4dCIsImxvbmdOYW1lIiwiaGVhZGVyIiwidGFnYm9yZGVyIiwiYnV0dG9uIiwib25DbGljayIsImJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/entry/new/[name].tsx\n"));

/***/ })

});