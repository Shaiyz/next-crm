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

/***/ "./src/pages/api/hello.js":
/*!********************************!*\
  !*** ./src/pages/api/hello.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"del\": function() { return /* binding */ del; },\n/* harmony export */   \"get\": function() { return /* binding */ get; },\n/* harmony export */   \"post\": function() { return /* binding */ post; },\n/* harmony export */   \"put\": function() { return /* binding */ put; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nconst post = async (body)=>{\n    try {\n        await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"http://localhost:8000/api/v1/lead\", {\n            lead: body\n        });\n    } catch (err) {\n        console.log(err.message);\n    }\n};\nconst get = async ()=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"http://localhost:8000/api/v1/lead\");\n        return response.data.data;\n    } catch (err) {\n        console.log(err.message);\n    }\n};\nconst put = async (body, id)=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(\"http://localhost:8000/api/v1/lead/\".concat(id), {\n            lead: body\n        });\n        console.log(response);\n        return response.data.data;\n    } catch (err) {\n        console.log(err.message);\n    }\n};\nconst del = async (id)=>{\n    try {\n        await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"](\"http://localhost:8000/api/v1/lead/\".concat(id));\n    } catch (err) {\n        console.log(err.message);\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2hlbGxvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsNkVBQTZFO0FBQ25EO0FBQ25CLE1BQU1DLE9BQU8sT0FBT0MsT0FBUztJQUNsQyxJQUFJO1FBQ0YsTUFBTUYsa0RBQVUsQ0FBQyxxQ0FBcUM7WUFBRUcsTUFBTUQ7UUFBSztJQUNyRSxFQUFFLE9BQU9FLEtBQUs7UUFDWkMsUUFBUUMsR0FBRyxDQUFDRixJQUFJRyxPQUFPO0lBQ3pCO0FBQ0YsRUFBRTtBQUVLLE1BQU1DLE1BQU0sVUFBWTtJQUM3QixJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNVCxpREFBUyxDQUFFO1FBRWxDLE9BQU9TLFNBQVNDLElBQUksQ0FBQ0EsSUFBSTtJQUMzQixFQUFFLE9BQU9OLEtBQUs7UUFDWkMsUUFBUUMsR0FBRyxDQUFDRixJQUFJRyxPQUFPO0lBQ3pCO0FBQ0YsRUFBRTtBQUVLLE1BQU1JLE1BQU0sT0FBT1QsTUFBTVUsS0FBTztJQUNyQyxJQUFJO1FBQ0YsTUFBTUgsV0FBVyxNQUFNVCxpREFBUyxDQUM5QixxQ0FBd0MsT0FBSFksS0FDckM7WUFBRVQsTUFBTUQ7UUFBSztRQUVmRyxRQUFRQyxHQUFHLENBQUNHO1FBQ1osT0FBT0EsU0FBU0MsSUFBSSxDQUFDQSxJQUFJO0lBQzNCLEVBQUUsT0FBT04sS0FBSztRQUNaQyxRQUFRQyxHQUFHLENBQUNGLElBQUlHLE9BQU87SUFDekI7QUFDRixFQUFFO0FBRUssTUFBTU0sTUFBTSxPQUFPRCxLQUFPO0lBQy9CLElBQUk7UUFDRixNQUFNWix1REFBWSxDQUFDLHFDQUF3QyxPQUFIWTtJQUMxRCxFQUFFLE9BQU9SLEtBQUs7UUFDWkMsUUFBUUMsR0FBRyxDQUFDRixJQUFJRyxPQUFPO0lBQ3pCO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYXBpL2hlbGxvLmpzPzdmODAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmV4cG9ydCBjb25zdCBwb3N0ID0gYXN5bmMgKGJvZHkpID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS92MS9sZWFkXCIsIHsgbGVhZDogYm9keSB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0ID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3YxL2xlYWRgKTtcblxuICAgIHJldHVybiByZXNwb25zZS5kYXRhLmRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHB1dCA9IGFzeW5jIChib2R5LCBpZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucHV0KFxuICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdjEvbGVhZC8ke2lkfWAsXG4gICAgICB7IGxlYWQ6IGJvZHkgfVxuICAgICk7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhLmRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRlbCA9IGFzeW5jIChpZCkgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS92MS9sZWFkLyR7aWR9YCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsInBvc3QiLCJib2R5IiwibGVhZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwicHV0IiwiaWQiLCJkZWwiLCJkZWxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/hello.js\n"));

/***/ })

});