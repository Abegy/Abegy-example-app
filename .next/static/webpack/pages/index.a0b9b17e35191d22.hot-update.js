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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    var _this = this;\n    var handleSubmit = function handleSubmit(event) {\n        // alert('A name was submitted: ' + label);\n        node_fetch__WEBPACK_IMPORTED_MODULE_4___default()(\"/api/test?testlabel=\" + label).then(function(res) {\n            return res.json();\n        }).then(function(responsedata) {\n            console.log(responsedata);\n            setData(responsedata);\n            console.log(data);\n            setLoading(false);\n        });\n        event.preventDefault();\n    };\n    var handleChange = function handleChange(event) {\n        setlabel(event.target.value);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isLoading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), label = ref2[0], setlabel = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setLoading(true);\n        node_fetch__WEBPACK_IMPORTED_MODULE_4___default()(\"/api/test\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            console.log(data);\n            setData(data);\n            setLoading(false);\n        });\n    }, []);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n        lineNumber: 50,\n        columnNumber: 25\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No profile data\"\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n        lineNumber: 51,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"welcome to abegy-app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        children: \"Tag Search Tool\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: [\n                                    \"TAG NAME:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: label,\n                                        onChange: handleChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: data === null || data === void 0 ? void 0 : data.map(function(item) {\n                            return item.texts.map(function(text) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: text.longName\n                                }, void 0, false, {\n                                    fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 5\n                                }, _this);\n                            });\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                lineNumber: 65,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().logo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16\n                            }, void 0, false, {\n                                fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/index.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"MmDEt3BUCHM4zagAlA5W04WhzcI=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgeyBjcmVhdGVTZW1pY29sb25DbGFzc0VsZW1lbnQgfSBmcm9tICd0eXBlc2NyaXB0J1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8YW55W10+KFtdKVxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbbGFiZWwsIHNldGxhYmVsXSA9IHVzZVN0YXRlKFwiXCIpXG5cblxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudDpSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pikge1xuICAgIC8vIGFsZXJ0KCdBIG5hbWUgd2FzIHN1Ym1pdHRlZDogJyArIGxhYmVsKTtcbiAgICBmZXRjaCgnL2FwaS90ZXN0P3Rlc3RsYWJlbD0nICsgbGFiZWwpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZWRhdGEpXG4gICAgICAgIHNldERhdGEocmVzcG9uc2VkYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICBcbiAgICAgIH0pXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudDpSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xuICAgIHNldGxhYmVsKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIGZldGNoKCcvYXBpL3Rlc3QnKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIHNldERhdGEoZGF0YSlcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIH0pXG4gIH0sIFtdKVxuXG4gIFxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD5cbiAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm8gcHJvZmlsZSBkYXRhPC9wPlxuXG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+d2VsY29tZSB0byBhYmVneS1hcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHsvKiB7ZGF0YT8ubWFwKChpdGVtKSA9PiAoXG4gICA8cD57aXRlbS5uYW1lfTwvcD5cbiApKX0gKi99XG4gIFxuICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBUYWcgU2VhcmNoIFRvb2xcbiAgICAgICAgPC9oMT5cbiAgICAgICAgXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgVEFHIE5BTUU6IFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtsYWJlbH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2PlxuICAgICAgICAgIFxuICAgICAgICB7ZGF0YT8ubWFwKChpdGVtKSA9PiAoXG4gICBpdGVtLnRleHRzLm1hcCgodGV4dDphbnkpID0+IChcbiAgICA8cD57dGV4dC5sb25nTmFtZX08L3A+XG4gICkpXG4gKSl9XG4gICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7JyAnfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiB3aWR0aD17NzJ9IGhlaWdodD17MTZ9IC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJSZWFjdCIsIkhvbWUiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsImxhYmVsIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXNwb25zZWRhdGEiLCJjb25zb2xlIiwibG9nIiwic2V0RGF0YSIsImRhdGEiLCJzZXRMb2FkaW5nIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDaGFuZ2UiLCJzZXRsYWJlbCIsInRhcmdldCIsInZhbHVlIiwiaXNMb2FkaW5nIiwicCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsIm1hcCIsIml0ZW0iLCJ0ZXh0cyIsInRleHQiLCJsb25nTmFtZSIsImZvb3RlciIsImEiLCJzcGFuIiwibG9nbyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});