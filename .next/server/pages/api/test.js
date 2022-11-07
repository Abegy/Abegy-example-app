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
exports.id = "pages/api/test";
exports.ids = ["pages/api/test"];
exports.modules = {

/***/ "(api)/./pages/api/test.ts":
/*!***************************!*\
  !*** ./pages/api/test.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nasync function handler(req, res) {\n    const result = await fetch(\"https://alt.edge.mile-two.com/api/tag/intel/text\");\n    if (result) {\n        res.status(200).json(await result.json());\n    } else res.status(500).json(\"failure\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGVzdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkVBQTZFO0FBTzlELGVBQWVBLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUEwQixFQUMxQjtJQUNFLE1BQU1DLE1BQU0sR0FBRyxNQUFNQyxLQUFLLENBQUMsa0RBQWtELENBQUM7SUFDOUUsSUFBR0QsTUFBTSxFQUFDO1FBQ05ELEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsTUFBTUgsTUFBTSxDQUFDRyxJQUFJLEVBQUUsQ0FBQztJQUM3QyxPQUNBSixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUNuQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWJlZ3ktYXBwLy4vcGFnZXMvYXBpL3Rlc3QudHM/MzYxYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcblxudHlwZSBEYXRhID0ge1xuICBuYW1lOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT5cbikge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKCdodHRwczovL2FsdC5lZGdlLm1pbGUtdHdvLmNvbS9hcGkvdGFnL2ludGVsL3RleHQnKVxuICAgIGlmKHJlc3VsdCl7IFxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihhd2FpdCByZXN1bHQuanNvbigpKVxuICAgIH1lbHNlIFxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKCdmYWlsdXJlJylcbn1cbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwicmVzdWx0IiwiZmV0Y2giLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/test.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/test.ts"));
module.exports = __webpack_exports__;

})();