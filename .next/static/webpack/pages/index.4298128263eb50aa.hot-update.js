"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    var _this = this;\n    var handleSubmit = function handleSubmit(event) {\n        // alert('A name was submitted: ' + label);\n        node_fetch__WEBPACK_IMPORTED_MODULE_2___default()(\"/api/test?testlabel=\" + label).then(function(res) {\n            return res.json();\n        }).then(function(responsedata) {\n            console.log(responsedata);\n            setData(responsedata);\n            console.log(data);\n            setLoading(false);\n        });\n        event.preventDefault();\n    };\n    var handleChange = function handleChange(event) {\n        setlabel(event.target.value);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLoading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), label = ref2[0], setlabel = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setLoading(true);\n        node_fetch__WEBPACK_IMPORTED_MODULE_2___default()(\"/api/test\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            console.log(data);\n            setData(data);\n            setLoading(false);\n        });\n    }, []);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n        lineNumber: 50,\n        columnNumber: 25\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No profile data\"\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n        lineNumber: 51,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default()),\n                    children: \"Tag Search Tool\"\n                }, void 0, false, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().border),\n                            children: [\n                                \"TAG NAME:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: label,\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"submit\",\n                            value: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: data === null || data === void 0 ? void 0 : data.map(function(item) {\n                        return item.texts.map(function(text) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: text.longName\n                            }, void 0, false, {\n                                fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 5\n                            }, _this);\n                        });\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n            lineNumber: 57,\n            columnNumber: 6\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"MmDEt3BUCHM4zagAlA5W04WhzcI=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVE7Ozs7O2dDQUFHOzs7Ozs7d0JBQ2pDOzhCQUNQLDhEQUFDRyxLQUFHOzhCQUNEVCxJQUFJLGFBQUpBLElBQUksV0FBSyxHQUFUQSxLQUFBQSxDQUFTLEdBQVRBLElBQUksQ0FBRW9CLEdBQUcsQ0FBQyxTQUFDQyxJQUFJOytCQUNyQkEsSUFBSSxDQUFDQyxLQUFLLENBQUNGLEdBQUcsQ0FBQyxTQUFDRyxJQUFRO2lEQUN2Qiw4REFBQ2YsR0FBQzswQ0FBRWUsSUFBSSxDQUFDQyxRQUFROzs7OztxQ0FBSzt5QkFDdkIsQ0FBQztxQkFDRixDQUFDOzs7Ozt3QkFDTzs7Ozs7O2dCQUNHOzs7OztZQUNILENBQ1A7QUFDSCxDQUFDO0dBakV1Qm5DLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuaW1wb3J0IHsgY3JlYXRlU2VtaWNvbG9uQ2xhc3NFbGVtZW50IH0gZnJvbSAndHlwZXNjcmlwdCdcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPGFueVtdPihbXSlcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2xhYmVsLCBzZXRsYWJlbF0gPSB1c2VTdGF0ZShcIlwiKVxuXG5cblxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQ6UmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pIHtcbiAgICAvLyBhbGVydCgnQSBuYW1lIHdhcyBzdWJtaXR0ZWQ6ICcgKyBsYWJlbCk7XG4gICAgZmV0Y2goJy9hcGkvdGVzdD90ZXN0bGFiZWw9JyArIGxhYmVsKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXNwb25zZWRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VkYXRhKVxuICAgICAgICBzZXREYXRhKHJlc3BvbnNlZGF0YSlcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgXG4gICAgICB9KVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQ6UmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcbiAgICBzZXRsYWJlbChldmVudC50YXJnZXQudmFsdWUpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBmZXRjaCgnL2FwaS90ZXN0JylcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICBzZXREYXRhKGRhdGEpXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICB9KVxuICB9LCBbXSlcblxuICBcbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+XG4gIGlmICghZGF0YSkgcmV0dXJuIDxwPk5vIHByb2ZpbGUgZGF0YTwvcD5cblxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgXG4gICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXN9PlxuICAgICAgICAgIFRhZyBTZWFyY2ggVG9vbFxuICAgICAgICA8L2gxPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmJvcmRlcn0+XG4gICAgICAgICAgVEFHIE5BTUU6IFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtsYWJlbH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2PlxuICAgICAgICB7ZGF0YT8ubWFwKChpdGVtKSA9PiAoXG4gICBpdGVtLnRleHRzLm1hcCgodGV4dDphbnkpID0+IChcbiAgICA8cD57dGV4dC5sb25nTmFtZX08L3A+XG4gICkpXG4gKSl9XG4gICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoIiwiUmVhY3QiLCJIb21lIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJsYWJlbCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzcG9uc2VkYXRhIiwiY29uc29sZSIsImxvZyIsInNldERhdGEiLCJkYXRhIiwic2V0TG9hZGluZyIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2hhbmdlIiwic2V0bGFiZWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlzTG9hZGluZyIsInAiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtYWluIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJib3JkZXIiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsIm1hcCIsIml0ZW0iLCJ0ZXh0cyIsInRleHQiLCJsb25nTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});