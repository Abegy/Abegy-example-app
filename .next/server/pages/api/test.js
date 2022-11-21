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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nasync function handler(req, res) {\n    console.log(req.query.testlabel);\n    //res.status(200).json(req.query.aaron)\n    const labelfromui = req.query.testlabel;\n    const result = await fetch(\"https://alt.edge.mile-two.com/api/tag/\" + labelfromui + \"/text\");\n    if (result) {\n        res.status(200).json(await result.json());\n    } else res.status(500);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGVzdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkVBQTZFO0FBTzlELGVBQWVBLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUEwQixFQUMxQjtJQUNBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDSSxLQUFLLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pDLHVDQUF1QztJQUN2QyxNQUFNQyxXQUFXLEdBQUdOLEdBQUcsQ0FBQ0ksS0FBSyxDQUFDQyxTQUFTO0lBQ3ZDLE1BQU1FLE1BQU0sR0FBRyxNQUFNQyxLQUFLLENBQ3hCLHdDQUF3QyxHQUFHRixXQUFXLEdBQUcsT0FBTyxDQUNqRTtJQUVELElBQUlDLE1BQU0sRUFBRTtRQUNWTixHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLE1BQU1ILE1BQU0sQ0FBQ0csSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM1QyxPQUFPVCxHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWJlZ3ktYXBwLy4vcGFnZXMvYXBpL3Rlc3QudHM/MzYxYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxudHlwZSBEYXRhID0ge1xuICBuYW1lOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPlxuKSB7XG4gIGNvbnNvbGUubG9nKHJlcS5xdWVyeS50ZXN0bGFiZWwpO1xuICAvL3Jlcy5zdGF0dXMoMjAwKS5qc29uKHJlcS5xdWVyeS5hYXJvbilcbiAgY29uc3QgbGFiZWxmcm9tdWkgPSByZXEucXVlcnkudGVzdGxhYmVsO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChcbiAgICBcImh0dHBzOi8vYWx0LmVkZ2UubWlsZS10d28uY29tL2FwaS90YWcvXCIgKyBsYWJlbGZyb211aSArIFwiL3RleHRcIlxuICApO1xuXG4gIGlmIChyZXN1bHQpIHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihhd2FpdCByZXN1bHQuanNvbigpKTtcbiAgfSBlbHNlIHJlcy5zdGF0dXMoNTAwKTtcbn1cbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwidGVzdGxhYmVsIiwibGFiZWxmcm9tdWkiLCJyZXN1bHQiLCJmZXRjaCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/test.ts\n");

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