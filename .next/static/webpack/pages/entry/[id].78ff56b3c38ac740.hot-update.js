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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_definition_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/definition.module.css */ \"./styles/definition.module.css\");\n/* harmony import */ var _styles_definition_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_definition_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Entry = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLoading = ref1[0], setLoading = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = router.query.id;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"/api/idtest?testid=\" + id).then(function(res) {\n            return res.json();\n        }).then(function(responsedata) {\n            console.log(responsedata);\n            setData(responsedata);\n            console.log(data);\n            setLoading(false);\n        });\n    }, [\n        router\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n        lineNumber: 31,\n        columnNumber: 25\n    }, _this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No profile data, invalid id\"\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n        lineNumber: 32,\n        columnNumber: 21\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_definition_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n        children: data !== undefined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: data.abbreviation\n                }, void 0, false, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: data.longName\n                }, void 0, false, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: data.description\n                }, void 0, false, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Associated Tags\",\n                        data.tags.map(function(tag, idx) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_definition_module_css__WEBPACK_IMPORTED_MODULE_4___default().description),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"new/\".concat(tag.name),\n                                    children: tag.name\n                                }, \"link-\".concat(idx), false, {\n                                    fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                                lineNumber: 44,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"no data to display\"\n        }, void 0, false, {\n            fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n            lineNumber: 53,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(Entry, \"FOE6WGMAKk5ASwlGbEQgdLy9gHw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Entry;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Entry);\nvar _c;\n$RefreshReg$(_c, \"Entry\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lbnRyeS9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7QUFBd0Q7QUFDWjtBQUNKO0FBQ1g7QUFVN0IsSUFBTUssS0FBSyxHQUFHLFdBQU07O0lBQ2xCLElBQXdCSixHQUEwQyxHQUExQ0EsK0NBQVEsQ0FBd0JLLFNBQVMsQ0FBQyxFQUEzREMsSUFBSSxHQUFhTixHQUEwQyxHQUF2RCxFQUFFTyxPQUFPLEdBQUlQLEdBQTBDLEdBQTlDO0lBQ3BCLElBQWdDQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXhDUSxTQUFTLEdBQWdCUixJQUFlLEdBQS9CLEVBQUVTLFVBQVUsR0FBSVQsSUFBZSxHQUFuQjtJQUM1QixJQUFNVSxNQUFNLEdBQUdSLHNEQUFTLEVBQUU7SUFDMUIsSUFBTSxFQUFJLEdBQUtRLE1BQU0sQ0FBQ0UsS0FBSyxDQUFuQkQsRUFBRTtJQUVWVixnREFBUyxDQUFDLFdBQU07UUFDZFksS0FBSyxDQUFDLHFCQUFxQixHQUFHRixFQUFFLENBQUMsQ0FDOUJHLElBQUksQ0FBQyxTQUFDQyxHQUFHO21CQUFLQSxHQUFHLENBQUNDLElBQUksRUFBRTtTQUFBLENBQUMsQ0FDekJGLElBQUksQ0FBQyxTQUFDRyxZQUFZLEVBQUs7WUFDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixZQUFZLENBQUMsQ0FBQztZQUMxQlYsT0FBTyxDQUFDVSxZQUFZLENBQUMsQ0FBQztZQUN0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNiLElBQUksQ0FBQyxDQUFDO1lBQ2xCRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLEVBQUU7UUFBQ0MsTUFBTTtLQUFDLENBQUMsQ0FBQztJQUViLElBQUlGLFNBQVMsRUFBRSxxQkFBTyw4REFBQ1ksR0FBQztrQkFBQyxZQUFVOzs7OzthQUFJLENBQUM7SUFDeEMsSUFBSSxDQUFDZCxJQUFJLEVBQUUscUJBQU8sOERBQUNjLEdBQUM7a0JBQUMsNkJBQTJCOzs7OzthQUFJLENBQUM7SUFFckQscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFdkIsMkVBQVc7a0JBQ3hCTyxJQUFJLEtBQUtELFNBQVMsaUJBQ2pCOzs4QkFDRSw4REFBQ21CLElBQUU7OEJBQUVsQixJQUFJLENBQUNtQixZQUFZOzs7Ozt5QkFBTTs4QkFDNUIsOERBQUNDLElBQUU7OEJBQUVwQixJQUFJLENBQUNxQixRQUFROzs7Ozt5QkFBTTs4QkFDeEIsOERBQUNQLEdBQUM7OEJBQUVkLElBQUksQ0FBQ3NCLFdBQVc7Ozs7O3lCQUFLOzhCQUN6Qiw4REFBQ1IsR0FBQzs7d0JBQUMsaUJBRUQ7d0JBQUNkLElBQUksQ0FBQ3VCLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLEdBQUcsRUFBRUMsR0FBRztpREFDdEIsOERBQUNaLEdBQUM7Z0NBQUNFLFNBQVMsRUFBRXZCLGtGQUFrQjswQ0FDOUIsNEVBQUNJLGtEQUFJO29DQUFxQjhCLElBQUksRUFBRSxNQUFLLENBQVcsT0FBVEYsR0FBRyxDQUFDRyxJQUFJLENBQUU7OENBQzlDSCxHQUFHLENBQUNHLElBQUk7bUNBREEsT0FBTSxDQUFNLE9BQUpGLEdBQUcsQ0FBRTs7Ozt5Q0FFakI7Ozs7O3FDQUNMO3lCQUNMLENBQUM7Ozs7Ozt5QkFDQTs7d0JBQ0gsaUJBRUgsOERBQUNSLElBQUU7c0JBQUMsb0JBQWtCOzs7OztpQkFBSzs7Ozs7YUFFekIsQ0FDTjtBQUNKLENBQUM7R0EzQ0twQixLQUFLOztRQUdNRixrREFBUzs7O0FBSHBCRSxLQUFBQSxLQUFLO0FBNkNYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW50cnkvW2lkXS50c3g/YTE2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvZGVmaW5pdGlvbi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW50ZXJmYWNlIERhdGFNb2RlbCB7XG4gIGFiYnJldmlhdGlvbjogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBsb25nTmFtZTogc3RyaW5nO1xuICBpZDogbnVtYmVyO1xuICB0YWdzOiBbeyBpZDogbnVtYmVyOyBuYW1lOiBzdHJpbmcgfV07XG59XG5cbmNvbnN0IEVudHJ5ID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxEYXRhTW9kZWwgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goXCIvYXBpL2lkdGVzdD90ZXN0aWQ9XCIgKyBpZClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigocmVzcG9uc2VkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlZGF0YSk7XG4gICAgICAgIHNldERhdGEocmVzcG9uc2VkYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gIH0sIFtyb3V0ZXJdKTtcblxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmICghZGF0YSkgcmV0dXJuIDxwPk5vIHByb2ZpbGUgZGF0YSwgaW52YWxpZCBpZDwvcD47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAge2RhdGEgIT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8aDE+e2RhdGEuYWJicmV2aWF0aW9ufTwvaDE+XG4gICAgICAgICAgPGgyPntkYXRhLmxvbmdOYW1lfTwvaDI+XG4gICAgICAgICAgPHA+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQXNzb2NpYXRlZCBUYWdzXG4gICAgICAgICAgICB7ZGF0YS50YWdzLm1hcCgodGFnLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT17YGxpbmstJHtpZHh9YH0gaHJlZj17YG5ldy8ke3RhZy5uYW1lfWB9PlxuICAgICAgICAgICAgICAgICAge3RhZy5uYW1lfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxoMT5ubyBkYXRhIHRvIGRpc3BsYXk8L2gxPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVudHJ5O1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTGluayIsIkVudHJ5IiwidW5kZWZpbmVkIiwiZGF0YSIsInNldERhdGEiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXNwb25zZWRhdGEiLCJjb25zb2xlIiwibG9nIiwicCIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJoMSIsImFiYnJldmlhdGlvbiIsImgyIiwibG9uZ05hbWUiLCJkZXNjcmlwdGlvbiIsInRhZ3MiLCJtYXAiLCJ0YWciLCJpZHgiLCJocmVmIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/entry/[id].tsx\n"));

/***/ })

});