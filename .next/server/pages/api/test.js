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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nasync function handler(req, res) {\n    console.log(req.query.testlabel);\n    //res.status(200).json(req.query.aaron)\n    const labelfromui = req.query.testlabel;\n    const result = await fetch(\"https://alt.edge.mile-two.com/api/tag/\" + labelfromui + \"/text\");\n    if (result) {\n        res.status(200).json(await result.json());\n    } else res.status(500);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGVzdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkVBQTZFO0FBTzlELGVBQWVBLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUEwQixFQUMxQjtJQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDSSxLQUFLLENBQUNDLFNBQVMsQ0FBQztJQUNsQyx1Q0FBdUM7SUFDdkMsTUFBTUMsV0FBVyxHQUFHTixHQUFHLENBQUNJLEtBQUssQ0FBQ0MsU0FBUztJQUN2QyxNQUFNRSxNQUFNLEdBQUcsTUFBTUMsS0FBSyxDQUFDLHdDQUF3QyxHQUFHRixXQUFXLEdBQUcsT0FBTyxDQUFDO0lBRTFGLElBQUdDLE1BQU0sRUFBQztRQUNOTixHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLE1BQU1ILE1BQU0sQ0FBQ0csSUFBSSxFQUFFLENBQUM7SUFDN0MsT0FDQVQsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDO0FBQ25CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYmVneS1hcHAvLi9wYWdlcy9hcGkvdGVzdC50cz8zNjFiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuXG50eXBlIERhdGEgPSB7XG4gIG5hbWU6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPlxuKSB7IGNvbnNvbGUubG9nKHJlcS5xdWVyeS50ZXN0bGFiZWwpXG4gIC8vcmVzLnN0YXR1cygyMDApLmpzb24ocmVxLnF1ZXJ5LmFhcm9uKVxuICBjb25zdCBsYWJlbGZyb211aSA9IHJlcS5xdWVyeS50ZXN0bGFiZWwgIFxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hbHQuZWRnZS5taWxlLXR3by5jb20vYXBpL3RhZy8nICsgbGFiZWxmcm9tdWkgKyAnL3RleHQnKVxuICBcbiAgICBpZihyZXN1bHQpeyBcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYXdhaXQgcmVzdWx0Lmpzb24oKSlcbiAgICB9ZWxzZSBcbiAgICByZXMuc3RhdHVzKDUwMClcbn1cbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwidGVzdGxhYmVsIiwibGFiZWxmcm9tdWkiLCJyZXN1bHQiLCJmZXRjaCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/test.ts\n");

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