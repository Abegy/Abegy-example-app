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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    var _this = this;\n    var handleSubmit = function handleSubmit(event) {\n        // alert('A name was submitted: ' + label);\n        node_fetch__WEBPACK_IMPORTED_MODULE_4___default()(\"/api/test?testlabel=\" + label).then(function(res) {\n            return res.json();\n        }).then(function(responsedata) {\n            console.log(responsedata);\n            setData(responsedata);\n            console.log(data);\n            setLoading(false);\n        });\n        event.preventDefault();\n    };\n    var handleChange = function handleChange(event) {\n        setlabel(event.target.value);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isLoading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), label = ref2[0], setlabel = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setLoading(true);\n        node_fetch__WEBPACK_IMPORTED_MODULE_4___default()(\"/api/test\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            console.log(data);\n            setData(data);\n            setLoading(false);\n        });\n    }, []);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n        lineNumber: 50,\n        columnNumber: 25\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No profile data\"\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n        lineNumber: 51,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"welcome to abegy-app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data === null || data === void 0 ? void 0 : data.map(function(item) {\n                    return item.texts.map(function(text) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: text.longName\n                        }, void 0, false, {\n                            fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 5\n                        }, _this);\n                    });\n                })\n            }, void 0, false, {\n                fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                lineNumber: 64,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        children: \"Welcome to my Example App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().description),\n                        children: [\n                            \"Manually search the label intel in the \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"http://localhost:3000/api/test\",\n                                children: \"AltRestAPI\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 50\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: [\n                                    \"TAG NAME:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: label,\n                                        onChange: handleChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                lineNumber: 71,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().logo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16\n                            }, void 0, false, {\n                                fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"MmDEt3BUCHM4zagAlA5W04WhzcI=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFHLEVBQUMsYUFBYTtnQ0FBQ0MsS0FBSyxFQUFFLEVBQUU7Z0NBQUVDLE1BQU0sRUFBRSxFQUFFOzs7OztvQ0FBSTs7Ozs7Z0NBQy9EOzs7Ozs7d0JBQ0w7Ozs7O29CQUNHOzs7Ozs7WUFDTCxDQUNQO0FBQ0gsQ0FBQztHQXpGdUJsRCxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCB7IGNyZWF0ZVNlbWljb2xvbkNsYXNzRWxlbWVudCB9IGZyb20gJ3R5cGVzY3JpcHQnXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtsYWJlbCwgc2V0bGFiZWxdID0gdXNlU3RhdGUoXCJcIilcblxuXG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50OlJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSB7XG4gICAgLy8gYWxlcnQoJ0EgbmFtZSB3YXMgc3VibWl0dGVkOiAnICsgbGFiZWwpO1xuICAgIGZldGNoKCcvYXBpL3Rlc3Q/dGVzdGxhYmVsPScgKyBsYWJlbClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigocmVzcG9uc2VkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlZGF0YSlcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZWRhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIFxuICAgICAgfSlcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50OlJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgc2V0bGFiZWwoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgZmV0Y2goJy9hcGkvdGVzdCcpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgc2V0RGF0YShkYXRhKVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgfSlcbiAgfSwgW10pXG5cbiAgXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxuICBpZiAoIWRhdGEpIHJldHVybiA8cD5ObyBwcm9maWxlIGRhdGE8L3A+XG5cbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT53ZWxjb21lIHRvIGFiZWd5LWFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgey8qIHtkYXRhPy5tYXAoKGl0ZW0pID0+IChcbiAgIDxwPntpdGVtLm5hbWV9PC9wPlxuICkpfSAqL31cbjxkaXY+XG57ZGF0YT8ubWFwKChpdGVtKSA9PiAoXG4gICBpdGVtLnRleHRzLm1hcCgodGV4dDphbnkpID0+IChcbiAgICA8cD57dGV4dC5sb25nTmFtZX08L3A+XG4gICkpXG4gKSl9XG4gIDwvZGl2PlxuICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBXZWxjb21lIHRvIG15IEV4YW1wbGUgQXBwXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBNYW51YWxseSBzZWFyY2ggdGhlIGxhYmVsIGludGVsIGluIHRoZSA8YSBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS90ZXN0XCI+QWx0UmVzdEFQSTwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIFRBRyBOQU1FOiBcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bGFiZWx9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2PlxuICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5eycgJ31cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgd2lkdGg9ezcyfSBoZWlnaHQ9ezE2fSAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoIiwiUmVhY3QiLCJIb21lIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJsYWJlbCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzcG9uc2VkYXRhIiwiY29uc29sZSIsImxvZyIsInNldERhdGEiLCJkYXRhIiwic2V0TG9hZGluZyIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2hhbmdlIiwic2V0bGFiZWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlzTG9hZGluZyIsInAiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFwIiwiaXRlbSIsInRleHRzIiwidGV4dCIsImxvbmdOYW1lIiwibWFpbiIsImgxIiwiZGVzY3JpcHRpb24iLCJhIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJmb290ZXIiLCJzcGFuIiwibG9nbyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});