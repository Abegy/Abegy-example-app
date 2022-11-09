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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nasync function handler(req, res) {\n    console.log(req.query.testlabel);\n    //res.status(200).json(req.query.aaron)\n    const labelfromui = req.query.testlabel;\n    const result = await fetch(\"https://alt.edge.mile-two.com/api/tag/\" + labelfromui + \"/text\");\n    if (result) {\n        res.status(200).json(await result.json());\n    } else res.status(500).json(\"failure\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGVzdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkVBQTZFO0FBTzlELGVBQWVBLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUEwQixFQUMxQjtJQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDSSxLQUFLLENBQUNDLFNBQVMsQ0FBQztJQUNsQyx1Q0FBdUM7SUFDdkMsTUFBTUMsV0FBVyxHQUFHTixHQUFHLENBQUNJLEtBQUssQ0FBQ0MsU0FBUztJQUN2QyxNQUFNRSxNQUFNLEdBQUcsTUFBTUMsS0FBSyxDQUFDLHdDQUF3QyxHQUFHRixXQUFXLEdBQUcsT0FBTyxDQUFDO0lBRTFGLElBQUdDLE1BQU0sRUFBQztRQUNOTixHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLE1BQU1ILE1BQU0sQ0FBQ0csSUFBSSxFQUFFLENBQUM7SUFDN0MsT0FDQVQsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDbkMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FiZWd5LWFwcC8uL3BhZ2VzL2FwaS90ZXN0LnRzPzM2MWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5cbnR5cGUgRGF0YSA9IHtcbiAgbmFtZTogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+XG4pIHsgY29uc29sZS5sb2cocmVxLnF1ZXJ5LnRlc3RsYWJlbClcbiAgLy9yZXMuc3RhdHVzKDIwMCkuanNvbihyZXEucXVlcnkuYWFyb24pXG4gIGNvbnN0IGxhYmVsZnJvbXVpID0gcmVxLnF1ZXJ5LnRlc3RsYWJlbCAgXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKCdodHRwczovL2FsdC5lZGdlLm1pbGUtdHdvLmNvbS9hcGkvdGFnLycgKyBsYWJlbGZyb211aSArICcvdGV4dCcpXG4gIFxuICAgIGlmKHJlc3VsdCl7IFxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihhd2FpdCByZXN1bHQuanNvbigpKVxuICAgIH1lbHNlIFxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKCdmYWlsdXJlJylcbn1cbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwidGVzdGxhYmVsIiwibGFiZWxmcm9tdWkiLCJyZXN1bHQiLCJmZXRjaCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/test.ts\n");

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