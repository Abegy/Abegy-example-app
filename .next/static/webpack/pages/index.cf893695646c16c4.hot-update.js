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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    var _this = this;\n    var handleSubmit = function handleSubmit(event) {\n        // alert('A name was submitted: ' + label);\n        node_fetch__WEBPACK_IMPORTED_MODULE_4___default()(\"/api/test?testlabel=\" + label).then(function(res) {\n            return res.json();\n        }).then(function(responsedata) {\n            console.log(responsedata);\n            setData(responsedata);\n            console.log(data);\n            setLoading(false);\n        });\n        event.preventDefault();\n    };\n    var handleChange = function handleChange(event) {\n        setlabel(event.target.value);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isLoading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), label = ref2[0], setlabel = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setLoading(true);\n        node_fetch__WEBPACK_IMPORTED_MODULE_4___default()(\"/api/test\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            console.log(data);\n            setData(data);\n            setLoading(false);\n        });\n    }, []);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n        lineNumber: 50,\n        columnNumber: 25\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No profile data\"\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n        lineNumber: 51,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"jsx-b5bc10af5c783f98\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main) || \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-b5bc10af5c783f98\" + \" \" + \"container\",\n                        children: \"Tag Search Tool\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        id: \"b5bc10af5c783f98\",\n                        children: \".container.jsx-b5bc10af5c783f98{margin:50px}.container.jsx-b5bc10af5c783f98 .btn{background:#000;color:#fff}\"\n                    }, void 0, false, void 0, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"jsx-b5bc10af5c783f98\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"jsx-b5bc10af5c783f98\",\n                                children: [\n                                    \"TAG NAME:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: label,\n                                        onChange: handleChange,\n                                        className: \"jsx-b5bc10af5c783f98\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Submit\",\n                                className: \"jsx-b5bc10af5c783f98\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-b5bc10af5c783f98\",\n                        children: data === null || data === void 0 ? void 0 : data.map(function(item) {\n                            return item.texts.map(function(text) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-b5bc10af5c783f98\",\n                                    children: text.longName\n                                }, void 0, false, {\n                                    fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 5\n                                }, _this);\n                            });\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                lineNumber: 57,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().logo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16\n                            }, void 0, false, {\n                                fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"MmDEt3BUCHM4zagAlA5W04WhzcI=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRyxLQUFHOztrQ0FFRFQsSUFBSSxhQUFKQSxJQUFJLFdBQUssR0FBVEEsS0FBQUEsQ0FBUyxHQUFUQSxJQUFJLENBQUVtQixHQUFHLENBQUMsU0FBQ0MsSUFBSTttQ0FDckJBLElBQUksQ0FBQ0MsS0FBSyxDQUFDRixHQUFHLENBQUMsU0FBQ0csSUFBUTtxREFDdkIsOERBQUNkLEdBQUM7OzhDQUFFYyxJQUFJLENBQUNDLFFBQVE7Ozs7O3lDQUFLOzZCQUN2QixDQUFDO3lCQUNGLENBQUM7Ozs7OzRCQUNPOzs7Ozs7b0JBQ0c7MEJBQ1AsOERBQUNDLFFBQU07Z0JBQUNkLFNBQVMsRUFBRTFCLHVFQUFhOzBCQUM5Qiw0RUFBQ3lDLEdBQUM7b0JBQ0FDLElBQUksRUFBQyx3R0FBd0c7b0JBQzdHckIsTUFBTSxFQUFDLFFBQVE7b0JBQ2ZzQixHQUFHLEVBQUMscUJBQXFCOzt3QkFDMUIsWUFDVzt3QkFBQyxHQUFHO3NDQUNkLDhEQUFDQyxNQUFJOzRCQUFDbEIsU0FBUyxFQUFFMUIscUVBQVc7c0NBQzFCLDRFQUFDRCxtREFBSztnQ0FBQytDLEdBQUcsRUFBQyxhQUFhO2dDQUFDQyxHQUFHLEVBQUMsYUFBYTtnQ0FBQ0MsS0FBSyxFQUFFLEVBQUU7Z0NBQUVDLE1BQU0sRUFBRSxFQUFFOzs7OztvQ0FBSTs7Ozs7Z0NBQy9EOzs7Ozs7d0JBQ0w7Ozs7O29CQUNHOzs7Ozs7WUFDTCxDQUNQO0FBQ0gsQ0FBQztHQXhGdUI1QyxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCB7IGNyZWF0ZVNlbWljb2xvbkNsYXNzRWxlbWVudCB9IGZyb20gJ3R5cGVzY3JpcHQnXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtsYWJlbCwgc2V0bGFiZWxdID0gdXNlU3RhdGUoXCJcIilcblxuXG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50OlJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSB7XG4gICAgLy8gYWxlcnQoJ0EgbmFtZSB3YXMgc3VibWl0dGVkOiAnICsgbGFiZWwpO1xuICAgIGZldGNoKCcvYXBpL3Rlc3Q/dGVzdGxhYmVsPScgKyBsYWJlbClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigocmVzcG9uc2VkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlZGF0YSlcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZWRhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIFxuICAgICAgfSlcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50OlJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgc2V0bGFiZWwoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgZmV0Y2goJy9hcGkvdGVzdCcpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgc2V0RGF0YShkYXRhKVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgfSlcbiAgfSwgW10pXG5cbiAgXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxuICBpZiAoIWRhdGEpIHJldHVybiA8cD5ObyBwcm9maWxlIGRhdGE8L3A+XG5cbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgIFxuICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17XCJjb250YWluZXJcIn0+XG4gICAgICAgICAgVGFnIFNlYXJjaCBUb29sXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXIgOmdsb2JhbCguYnRuKSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgICBcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBUQUcgTkFNRTogXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2xhYmVsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxkaXY+XG4gICAgICAgICAgXG4gICAgICAgIHtkYXRhPy5tYXAoKGl0ZW0pID0+IChcbiAgIGl0ZW0udGV4dHMubWFwKCh0ZXh0OmFueSkgPT4gKFxuICAgIDxwPnt0ZXh0LmxvbmdOYW1lfTwvcD5cbiAgKSlcbiApKX1cbiAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgUG93ZXJlZCBieXsnICd9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIHdpZHRoPXs3Mn0gaGVpZ2h0PXsxNn0gLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoIiwiUmVhY3QiLCJIb21lIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJsYWJlbCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzcG9uc2VkYXRhIiwiY29uc29sZSIsImxvZyIsInNldERhdGEiLCJkYXRhIiwic2V0TG9hZGluZyIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2hhbmdlIiwic2V0bGFiZWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlzTG9hZGluZyIsInAiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtYWluIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsIm1hcCIsIml0ZW0iLCJ0ZXh0cyIsInRleHQiLCJsb25nTmFtZSIsImZvb3RlciIsImEiLCJocmVmIiwicmVsIiwic3BhbiIsImxvZ28iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});