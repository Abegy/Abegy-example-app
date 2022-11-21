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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    console.log(req.query.testid);\n    //res.status(200).json(req.query.aaron)\n    const idfromui = req.query.testid;\n    const result = await fetch(\"https://alt.edge.mile-two.com/api/text/\" + idfromui);\n    if (result) {\n        res.status(200).json(await result.json());\n    } else res.status(500);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaWR0ZXN0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFNZSxlQUFlQSxPQUFPLENBQ25DQyxHQUFtQixFQUNuQkMsR0FBMEIsRUFDMUI7SUFDQUMsT0FBTyxDQUFDQyxHQUFHLENBQUNILEdBQUcsQ0FBQ0ksS0FBSyxDQUFDQyxNQUFNLENBQUMsQ0FBQztJQUM5Qix1Q0FBdUM7SUFDdkMsTUFBTUMsUUFBUSxHQUFHTixHQUFHLENBQUNJLEtBQUssQ0FBQ0MsTUFBTTtJQUNqQyxNQUFNRSxNQUFNLEdBQUcsTUFBTUMsS0FBSyxDQUN4Qix5Q0FBeUMsR0FBR0YsUUFBUSxDQUNyRDtJQUVELElBQUlDLE1BQU0sRUFBRTtRQUNWTixHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLE1BQU1ILE1BQU0sQ0FBQ0csSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM1QyxPQUFPVCxHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWJlZ3ktYXBwLy4vcGFnZXMvYXBpL2lkdGVzdC50cz9jMDViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbnR5cGUgRGF0YSA9IHtcbiAgbmFtZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT5cbikge1xuICBjb25zb2xlLmxvZyhyZXEucXVlcnkudGVzdGlkKTtcbiAgLy9yZXMuc3RhdHVzKDIwMCkuanNvbihyZXEucXVlcnkuYWFyb24pXG4gIGNvbnN0IGlkZnJvbXVpID0gcmVxLnF1ZXJ5LnRlc3RpZDtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goXG4gICAgXCJodHRwczovL2FsdC5lZGdlLm1pbGUtdHdvLmNvbS9hcGkvdGV4dC9cIiArIGlkZnJvbXVpXG4gICk7XG5cbiAgaWYgKHJlc3VsdCkge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGF3YWl0IHJlc3VsdC5qc29uKCkpO1xuICB9IGVsc2UgcmVzLnN0YXR1cyg1MDApO1xufVxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJ0ZXN0aWQiLCJpZGZyb211aSIsInJlc3VsdCIsImZldGNoIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/idtest.ts\n");

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