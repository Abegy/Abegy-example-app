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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_definition_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/definition.module.css */ \"./styles/definition.module.css\");\n/* harmony import */ var _styles_definition_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_definition_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Entry = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLoading = ref1[0], setLoading = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = router.query.id;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"/api/idtest?testid=\" + id).then(function(res) {\n            return res.json();\n        }).then(function(responsedata) {\n            console.log(responsedata);\n            setData(responsedata);\n            console.log(data);\n            setLoading(false);\n        });\n    }, [\n        router\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n        lineNumber: 32,\n        columnNumber: 25\n    }, _this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No profile data, invalid id\"\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n        lineNumber: 33,\n        columnNumber: 21\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_definition_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n        children: data !== undefined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"Abbreviation: \",\n                        data.abbreviation\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: [\n                        \"Long name: \",\n                        data.longName\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Description: \",\n                        data.description\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_styles_definition_module_css__WEBPACK_IMPORTED_MODULE_4___default().description),\n                    children: [\n                        \"Associated Tags\",\n                        data.tags.map(function(tag, idx) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_definition_module_css__WEBPACK_IMPORTED_MODULE_4___default().tagborder),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaBeer, {}, void 0, false, {\n                                        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"new/\".concat(tag.name),\n                                        children: tag.name\n                                    }, \"link-\".concat(idx), false, {\n                                        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"no data to display\"\n        }, void 0, false, {\n            fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n            lineNumber: 55,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/abegy/Abegy-example-app/pages/entry/[id].tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, _this);\n};\n_s(Entry, \"FOE6WGMAKk5ASwlGbEQgdLy9gHw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Entry;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Entry);\nvar _c;\n$RefreshReg$(_c, \"Entry\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9kZWZpbml0aW9uLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IEZhQmVlciB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmludGVyZmFjZSBEYXRhTW9kZWwge1xuICBhYmJyZXZpYXRpb246IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgbG9uZ05hbWU6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbiAgdGFnczogW3sgaWQ6IG51bWJlcjsgbmFtZTogc3RyaW5nIH1dO1xufVxuXG5jb25zdCBFbnRyeSA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8RGF0YU1vZGVsIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKFwiL2FwaS9pZHRlc3Q/dGVzdGlkPVwiICsgaWQpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZWRhdGEpO1xuICAgICAgICBzZXREYXRhKHJlc3BvbnNlZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9LCBbcm91dGVyXSk7XG5cbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoIWRhdGEpIHJldHVybiA8cD5ObyBwcm9maWxlIGRhdGEsIGludmFsaWQgaWQ8L3A+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgIHtkYXRhICE9PSB1bmRlZmluZWQgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGgxPkFiYnJldmlhdGlvbjoge2RhdGEuYWJicmV2aWF0aW9ufTwvaDE+XG4gICAgICAgICAgPGgyPkxvbmcgbmFtZToge2RhdGEubG9uZ05hbWV9PC9oMj5cbiAgICAgICAgICA8cD5EZXNjcmlwdGlvbjoge2RhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIEFzc29jaWF0ZWQgVGFnc1xuICAgICAgICAgICAge2RhdGEudGFncy5tYXAoKHRhZywgaWR4KSA9PiAoXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRhZ2JvcmRlcn0+XG4gICAgICAgICAgICAgICAgPEZhQmVlciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT17YGxpbmstJHtpZHh9YH0gaHJlZj17YG5ldy8ke3RhZy5uYW1lfWB9PlxuICAgICAgICAgICAgICAgICAge3RhZy5uYW1lfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxoMT5ubyBkYXRhIHRvIGRpc3BsYXk8L2gxPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVudHJ5O1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkZhQmVlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTGluayIsIkVudHJ5IiwidW5kZWZpbmVkIiwiZGF0YSIsInNldERhdGEiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXNwb25zZWRhdGEiLCJjb25zb2xlIiwibG9nIiwicCIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJoMSIsImFiYnJldmlhdGlvbiIsImgyIiwibG9uZ05hbWUiLCJkZXNjcmlwdGlvbiIsInRhZ3MiLCJtYXAiLCJ0YWciLCJpZHgiLCJ0YWdib3JkZXIiLCJocmVmIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/entry/[id].tsx\n"));

/***/ })

});