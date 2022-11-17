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
exports.id = "pages/api/idtest";
exports.ids = ["pages/api/idtest"];
exports.modules = {

/***/ "(api)/./pages/api/idtest.ts":
/*!*****************************!*\
  !*** ./pages/api/idtest.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    console.log(req.query.testid);\n    //res.status(200).json(req.query.aaron)\n    const idfromui = req.query.testid;\n    const result = await fetch(\"https://alt.edge.mile-two.com/api/text/\" + idfromui);\n    if (result) {\n        res.status(200).json(await result.json());\n    } else res.status(500);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaWR0ZXN0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFPZSxlQUFlQSxPQUFPLENBQ25DQyxHQUFtQixFQUNuQkMsR0FBMEIsRUFDMUI7SUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNILEdBQUcsQ0FBQ0ksS0FBSyxDQUFDQyxNQUFNLENBQUM7SUFDL0IsdUNBQXVDO0lBQ3ZDLE1BQU1DLFFBQVEsR0FBR04sR0FBRyxDQUFDSSxLQUFLLENBQUNDLE1BQU07SUFDakMsTUFBTUUsTUFBTSxHQUFHLE1BQU1DLEtBQUssQ0FBQyx5Q0FBeUMsR0FBR0YsUUFBUSxDQUFDO0lBRTlFLElBQUdDLE1BQU0sRUFBQztRQUNOTixHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLE1BQU1ILE1BQU0sQ0FBQ0csSUFBSSxFQUFFLENBQUM7SUFDN0MsT0FDQVQsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDO0FBQ25CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYmVneS1hcHAvLi9wYWdlcy9hcGkvaWR0ZXN0LnRzP2MwNWIiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuXG50eXBlIERhdGEgPSB7XG4gIG5hbWU6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPlxuKSB7IGNvbnNvbGUubG9nKHJlcS5xdWVyeS50ZXN0aWQpXG4gIC8vcmVzLnN0YXR1cygyMDApLmpzb24ocmVxLnF1ZXJ5LmFhcm9uKVxuICBjb25zdCBpZGZyb211aSA9IHJlcS5xdWVyeS50ZXN0aWQgIFxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hbHQuZWRnZS5taWxlLXR3by5jb20vYXBpL3RleHQvJyArIGlkZnJvbXVpKVxuICBcbiAgICBpZihyZXN1bHQpeyBcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYXdhaXQgcmVzdWx0Lmpzb24oKSlcbiAgICB9ZWxzZSBcbiAgICByZXMuc3RhdHVzKDUwMClcbn0iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsInRlc3RpZCIsImlkZnJvbXVpIiwicmVzdWx0IiwiZmV0Y2giLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/idtest.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/idtest.ts"));
module.exports = __webpack_exports__;

})();