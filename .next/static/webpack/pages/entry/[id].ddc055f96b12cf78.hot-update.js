"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/entry/[id]",{

/***/ "./pages/entry/[id].tsx":
/*!******************************!*\
  !*** ./pages/entry/[id].tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Entry = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLoading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), uiid = ref2[0], setid = ref2[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = router.query.id;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"/api/idtest?testid=\" + id)// https://alt.edge.mile-two.com/api/text/13\n        .then(function(res) {\n            return res.json();\n        }).then(function(responsedata) {\n            console.log(responsedata);\n            setData(responsedata);\n            console.log(data);\n            setLoading(false);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setLoading(true);\n        fetch(\"/api/entry\")// https://alt.edge.mile-two.com/api/text/13\n        .then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            console.log(data);\n            setData(data);\n            setLoading(false);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: data.map(function(item) {\n                return item.name;\n            })\n        }, void 0, false, {\n            fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n            lineNumber: 38,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, _this);\n};\n_s(Entry, \"CVWchkNbsygpkpsOm0mgKwO0adU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Entry;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Entry);\nvar _c;\n$RefreshReg$(_c, \"Entry\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lbnRyeS9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUEyQztBQUNKO0FBRXZDLElBQU1HLEtBQUssR0FBRyxXQUFNOztJQUNwQixJQUF3QkgsR0FBbUIsR0FBbkJBLCtDQUFRLENBQVEsRUFBRSxDQUFDLEVBQXBDSSxJQUFJLEdBQWFKLEdBQW1CLEdBQWhDLEVBQUVLLE9BQU8sR0FBSUwsR0FBbUIsR0FBdkI7SUFDcEIsSUFBZ0NBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBeENNLFNBQVMsR0FBZ0JOLElBQWUsR0FBL0IsRUFBRU8sVUFBVSxHQUFJUCxJQUFlLEdBQW5CO0lBQzVCLElBQXNCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQTNCUSxJQUFJLEdBQVdSLElBQVksR0FBdkIsRUFBRVMsS0FBSyxHQUFJVCxJQUFZLEdBQWhCO0lBQ2xCLElBQU1VLE1BQU0sR0FBR1Isc0RBQVMsRUFBRTtJQUMxQixJQUFNLEVBQUksR0FBS1EsTUFBTSxDQUFDRSxLQUFLLENBQW5CRCxFQUFFO0lBRVZWLGdEQUFTLENBQUMsV0FBTTtRQUNoQlksS0FBSyxDQUFDLHFCQUFxQixHQUFHRixFQUFFLENBQUMsNENBQ1c7U0FDM0NHLElBQUksQ0FBQyxTQUFDQyxHQUFHO21CQUFLQSxHQUFHLENBQUNDLElBQUksRUFBRTtTQUFBLENBQUMsQ0FDekJGLElBQUksQ0FBQyxTQUFDRyxZQUFZLEVBQUs7WUFDcEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixZQUFZLENBQUM7WUFDekJaLE9BQU8sQ0FBQ1ksWUFBWSxDQUFDO1lBQ3JCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2YsSUFBSSxDQUFDO1lBQ2pCRyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ3JCLENBQUMsQ0FBQztJQUNGLENBQUMsRUFBRSxFQUFFLENBQUM7SUFFTk4sZ0RBQVMsQ0FBQyxXQUFNO1FBQ1pNLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDaEJNLEtBQUssQ0FBQyxZQUFZLENBQUMsNENBQ3lCO1NBQzNDQyxJQUFJLENBQUMsU0FBQ0MsR0FBRzttQkFBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUU7U0FBQSxDQUFDLENBQ3pCRixJQUFJLENBQUMsU0FBQ1YsSUFBSSxFQUFLO1lBQ1pjLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZixJQUFJLENBQUM7WUFDakJDLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDO1lBQ2JHLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDckIsQ0FBQyxDQUFDO0lBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUdWLHFCQUNJLDhEQUFDYSxNQUFJO2tCQUNELDRFQUFDQyxLQUFHO3NCQUNDakIsSUFBSSxDQUFDa0IsR0FBRyxDQUFDLFNBQUNDLElBQUk7dUJBQUtBLElBQUksQ0FBQ0MsSUFBSTthQUFBLENBQUM7Ozs7O2lCQUM1Qjs7Ozs7YUFDSCxDQUVWO0FBQUEsQ0FBQztHQXZDSXJCLEtBQUs7O1FBSUlELGtEQUFTOzs7QUFKbEJDLEtBQUFBLEtBQUs7QUEwQ1gsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9lbnRyeS9baWRdLnRzeD9hMTY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBFbnRyeSA9ICgpID0+IHtcbmNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPGFueVtdPihbXSlcbmNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5jb25zdCBbdWlpZCwgc2V0aWRdID0gdXNlU3RhdGUoXCJcIilcbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5jb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcblxudXNlRWZmZWN0KCgpID0+IHtcbmZldGNoKCcvYXBpL2lkdGVzdD90ZXN0aWQ9JyArIGlkKVxuLy8gaHR0cHM6Ly9hbHQuZWRnZS5taWxlLXR3by5jb20vYXBpL3RleHQvMTNcbi50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4udGhlbigocmVzcG9uc2VkYXRhKSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2VkYXRhKVxuICAgIHNldERhdGEocmVzcG9uc2VkYXRhKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgc2V0TG9hZGluZyhmYWxzZSlcbn0pXG59LCBbXSlcblxudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgZmV0Y2goJy9hcGkvZW50cnknKVxuICAgIC8vIGh0dHBzOi8vYWx0LmVkZ2UubWlsZS10d28uY29tL2FwaS90ZXh0LzEzXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICBzZXREYXRhKGRhdGEpXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfSlcbiAgICB9LCBbXSlcblxuXG5yZXR1cm4gKCBcbiAgICA8bWFpbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5uYW1lKX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuXG4pfVxuXG5cbmV4cG9ydCBkZWZhdWx0IEVudHJ5O1xuXG5cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkVudHJ5IiwiZGF0YSIsInNldERhdGEiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwidWlpZCIsInNldGlkIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXNwb25zZWRhdGEiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImRpdiIsIm1hcCIsIml0ZW0iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/entry/[id].tsx\n"));

/***/ })

});