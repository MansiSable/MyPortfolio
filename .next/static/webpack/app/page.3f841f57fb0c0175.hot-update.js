"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/ProjectsSection.jsx":
/*!************************************************!*\
  !*** ./src/app/components/ProjectsSection.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard */ \"(app-pages-browser)/./src/app/components/ProjectCard.jsx\");\n/* harmony import */ var _ProjectTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectTag */ \"(app-pages-browser)/./src/app/components/ProjectTag.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-in-view.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst projectsData = [\n    {\n        id: 1,\n        title: \"AGENT RIDER\",\n        description: \"Agent Rider is a sophisticated application tailored for real estate agents operating in the Canadian market. Within this platform, users have the capability to either post job listings or apply for real estate-related positions. My role primarily involved backend development, where I adeptly utilized a combination of technologies and methodologies to ensure optimal functionality and performance. We utilized the Express.js framework and TypeScript language for backend development. \",\n        image: \"/images/projects/1.webp\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 2,\n        title: \"FANTOM PLAY\",\n        description: \"Fantom Play is a gaming app where users can participate in various contests to win and earn money, akin to the popular Dream11 platform. As a backend developer for this project, I played a key role in its development. \",\n        image: \"/images/projects/2.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 3,\n        title: \"Guest Management System\",\n        description: \"GMS was a comprehensive web and mobile application designed for restaurant reservations and management of statistical data regarding profits and clients. My primary role in this project was backend development. Leveraging Node.js and Express.js with TypeScript, we adhered to clean architecture principles. MongoDB served as our database solution. Within this project, I undertook tasks including database model design, CRUD operations, implementation of filters, sorting mechanisms, pagination, and more. \",\n        image: \"/images/projects/3.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    }\n];\nconst ProjectsSection = ()=>{\n    _s();\n    const [tag, setTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView)(ref, {\n        once: true\n    });\n    const handleTagChange = (newTag)=>{\n        setTag(newTag);\n    };\n    const filteredProjects = projectsData.filter((project)=>project.tag.includes(tag));\n    const cardVariants = {\n        initial: {\n            y: 50,\n            opacity: 0\n        },\n        animate: {\n            y: 0,\n            opacity: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12\",\n                children: \"My Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/jatinpatil/Desktop/MyPortfolio/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                ref: ref,\n                className: \"grid md:grid-cols-2 lg: w-[80%] mx-auto gap-8 md:gap-12\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                        variants: cardVariants,\n                        initial: \"initial\",\n                        animate: isInView ? \"animate\" : \"initial\",\n                        transition: {\n                            duration: 0.3,\n                            delay: index * 0.4\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: project.title,\n                            description: project.description,\n                            imgUrl: project.image,\n                            gitUrl: project.gitUrl,\n                            previewUrl: project.previewUrl,\n                            id: project.id\n                        }, project.id, false, {\n                            fileName: \"/Users/jatinpatil/Desktop/MyPortfolio/src/app/components/ProjectsSection.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/jatinpatil/Desktop/MyPortfolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/jatinpatil/Desktop/MyPortfolio/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jatinpatil/Desktop/MyPortfolio/src/app/components/ProjectsSection.jsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsSection, \"ewpVNcDKztYQKj1IVUkFVZNx3ec=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = ProjectsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDZ0Q7QUFDUjtBQUNGO0FBQ1k7QUFFbEQsTUFBTU8sZUFBZTtJQUNuQjtRQUNFQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFDRTtRQUNGQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQU07UUFDbkJDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQ0U7UUFDRkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztTQUFNO1FBQ25CQyxRQUFRO1FBQ1JDLFlBQVk7SUFDZDtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUNFO1FBQ0ZDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBTTtRQUNuQkMsUUFBUTtRQUNSQyxZQUFZO0lBQ2Q7Q0FDRDtBQUVELE1BQU1DLGtCQUFrQjs7SUFDdEIsTUFBTSxDQUFDSCxLQUFLSSxPQUFPLEdBQUdmLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU1nQixNQUFNZiw2Q0FBTUEsQ0FBQztJQUNuQixNQUFNZ0IsV0FBV1osd0RBQVNBLENBQUNXLEtBQUs7UUFBRUUsTUFBTTtJQUFLO0lBRTdDLE1BQU1DLGtCQUFrQixDQUFDQztRQUN2QkwsT0FBT0s7SUFDVDtJQUVBLE1BQU1DLG1CQUFtQmYsYUFBYWdCLE1BQU0sQ0FBQyxDQUFDQyxVQUM1Q0EsUUFBUVosR0FBRyxDQUFDYSxRQUFRLENBQUNiO0lBR3ZCLE1BQU1jLGVBQWU7UUFDbkJDLFNBQVM7WUFBRUMsR0FBRztZQUFJQyxTQUFTO1FBQUU7UUFDN0JDLFNBQVM7WUFBRUYsR0FBRztZQUFHQyxTQUFTO1FBQUU7SUFDOUI7SUFFQSxxQkFDRSw4REFBQ0U7UUFBUXZCLElBQUc7OzBCQUNWLDhEQUFDd0I7Z0JBQUdDLFdBQVU7MEJBQStEOzs7Ozs7MEJBb0I3RSw4REFBQ0M7Z0JBQUdqQixLQUFLQTtnQkFBS2dCLFdBQVU7MEJBQ3JCWCxpQkFBaUJhLEdBQUcsQ0FBQyxDQUFDWCxTQUFTWSxzQkFDOUIsOERBQUMvQixpREFBTUEsQ0FBQ2dDLEVBQUU7d0JBRVJDLFVBQVVaO3dCQUNWQyxTQUFRO3dCQUNSRyxTQUFTWixXQUFXLFlBQVk7d0JBQ2hDcUIsWUFBWTs0QkFBRUMsVUFBVTs0QkFBS0MsT0FBT0wsUUFBUTt3QkFBSTtrQ0FFaEQsNEVBQUNqQyxvREFBV0E7NEJBRVZNLE9BQU9lLFFBQVFmLEtBQUs7NEJBQ3BCQyxhQUFhYyxRQUFRZCxXQUFXOzRCQUNoQ2dDLFFBQVFsQixRQUFRYixLQUFLOzRCQUNyQkUsUUFBUVcsUUFBUVgsTUFBTTs0QkFDdEJDLFlBQVlVLFFBQVFWLFVBQVU7NEJBQzlCTixJQUFJZ0IsUUFBUWhCLEVBQUU7MkJBTlRnQixRQUFRaEIsRUFBRTs7Ozs7dUJBUFo0Qjs7Ozs7Ozs7Ozs7Ozs7OztBQW9CakI7R0EvRE1yQjs7UUFHYVQsb0RBQVNBOzs7S0FIdEJTO0FBaUVOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4PzM3MGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2plY3RDYXJkIGZyb20gXCIuL1Byb2plY3RDYXJkXCI7XG5pbXBvcnQgUHJvamVjdFRhZyBmcm9tIFwiLi9Qcm9qZWN0VGFnXCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZUluVmlldyB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IHByb2plY3RzRGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiBcIkFHRU5UIFJJREVSXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkFnZW50IFJpZGVyIGlzIGEgc29waGlzdGljYXRlZCBhcHBsaWNhdGlvbiB0YWlsb3JlZCBmb3IgcmVhbCBlc3RhdGUgYWdlbnRzIG9wZXJhdGluZyBpbiB0aGUgQ2FuYWRpYW4gbWFya2V0LiBXaXRoaW4gdGhpcyBwbGF0Zm9ybSwgdXNlcnMgaGF2ZSB0aGUgY2FwYWJpbGl0eSB0byBlaXRoZXIgcG9zdCBqb2IgbGlzdGluZ3Mgb3IgYXBwbHkgZm9yIHJlYWwgZXN0YXRlLXJlbGF0ZWQgcG9zaXRpb25zLiBNeSByb2xlIHByaW1hcmlseSBpbnZvbHZlZCBiYWNrZW5kIGRldmVsb3BtZW50LCB3aGVyZSBJIGFkZXB0bHkgdXRpbGl6ZWQgYSBjb21iaW5hdGlvbiBvZiB0ZWNobm9sb2dpZXMgYW5kIG1ldGhvZG9sb2dpZXMgdG8gZW5zdXJlIG9wdGltYWwgZnVuY3Rpb25hbGl0eSBhbmQgcGVyZm9ybWFuY2UuIFdlIHV0aWxpemVkIHRoZSBFeHByZXNzLmpzIGZyYW1ld29yayBhbmQgVHlwZVNjcmlwdCBsYW5ndWFnZSBmb3IgYmFja2VuZCBkZXZlbG9wbWVudC4gXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy8xLndlYnBcIixcbiAgICB0YWc6IFtcIkFsbFwiLCBcIldlYlwiXSxcbiAgICBnaXRVcmw6IFwiL1wiLFxuICAgIHByZXZpZXdVcmw6IFwiL1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6IFwiRkFOVE9NIFBMQVlcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRmFudG9tIFBsYXkgaXMgYSBnYW1pbmcgYXBwIHdoZXJlIHVzZXJzIGNhbiBwYXJ0aWNpcGF0ZSBpbiB2YXJpb3VzIGNvbnRlc3RzIHRvIHdpbiBhbmQgZWFybiBtb25leSwgYWtpbiB0byB0aGUgcG9wdWxhciBEcmVhbTExIHBsYXRmb3JtLiBBcyBhIGJhY2tlbmQgZGV2ZWxvcGVyIGZvciB0aGlzIHByb2plY3QsIEkgcGxheWVkIGEga2V5IHJvbGUgaW4gaXRzIGRldmVsb3BtZW50LiBcIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzLzIucG5nXCIsXG4gICAgdGFnOiBbXCJBbGxcIiwgXCJXZWJcIl0sXG4gICAgZ2l0VXJsOiBcIi9cIixcbiAgICBwcmV2aWV3VXJsOiBcIi9cIixcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiBcIkd1ZXN0IE1hbmFnZW1lbnQgU3lzdGVtXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkdNUyB3YXMgYSBjb21wcmVoZW5zaXZlIHdlYiBhbmQgbW9iaWxlIGFwcGxpY2F0aW9uIGRlc2lnbmVkIGZvciByZXN0YXVyYW50IHJlc2VydmF0aW9ucyBhbmQgbWFuYWdlbWVudCBvZiBzdGF0aXN0aWNhbCBkYXRhIHJlZ2FyZGluZyBwcm9maXRzIGFuZCBjbGllbnRzLiBNeSBwcmltYXJ5IHJvbGUgaW4gdGhpcyBwcm9qZWN0IHdhcyBiYWNrZW5kIGRldmVsb3BtZW50LiBMZXZlcmFnaW5nIE5vZGUuanMgYW5kIEV4cHJlc3MuanMgd2l0aCBUeXBlU2NyaXB0LCB3ZSBhZGhlcmVkIHRvIGNsZWFuIGFyY2hpdGVjdHVyZSBwcmluY2lwbGVzLiBNb25nb0RCIHNlcnZlZCBhcyBvdXIgZGF0YWJhc2Ugc29sdXRpb24uIFdpdGhpbiB0aGlzIHByb2plY3QsIEkgdW5kZXJ0b29rIHRhc2tzIGluY2x1ZGluZyBkYXRhYmFzZSBtb2RlbCBkZXNpZ24sIENSVUQgb3BlcmF0aW9ucywgaW1wbGVtZW50YXRpb24gb2YgZmlsdGVycywgc29ydGluZyBtZWNoYW5pc21zLCBwYWdpbmF0aW9uLCBhbmQgbW9yZS4gXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy8zLnBuZ1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiV2ViXCJdLFxuICAgIGdpdFVybDogXCIvXCIsXG4gICAgcHJldmlld1VybDogXCIvXCIsXG4gIH0sXG5dO1xuXG5jb25zdCBQcm9qZWN0c1NlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFt0YWcsIHNldFRhZ10gPSB1c2VTdGF0ZShcIkFsbFwiKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBpc0luVmlldyA9IHVzZUluVmlldyhyZWYsIHsgb25jZTogdHJ1ZSB9KTtcblxuICBjb25zdCBoYW5kbGVUYWdDaGFuZ2UgPSAobmV3VGFnKSA9PiB7XG4gICAgc2V0VGFnKG5ld1RhZyk7XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyZWRQcm9qZWN0cyA9IHByb2plY3RzRGF0YS5maWx0ZXIoKHByb2plY3QpID0+XG4gICAgcHJvamVjdC50YWcuaW5jbHVkZXModGFnKVxuICApO1xuXG4gIGNvbnN0IGNhcmRWYXJpYW50cyA9IHtcbiAgICBpbml0aWFsOiB7IHk6IDUwLCBvcGFjaXR5OiAwIH0sXG4gICAgYW5pbWF0ZTogeyB5OiAwLCBvcGFjaXR5OiAxIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cInByb2plY3RzXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC00eGwgZm9udC1ib2xkIHRleHQtd2hpdGUgbXQtNCBtYi04IG1kOm1iLTEyXCI+XG4gICAgICAgIE15IFByb2plY3RzXG4gICAgICA8L2gyPlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtMiBweS02XCI+XG4gICAgICAgIDxQcm9qZWN0VGFnXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVGFnQ2hhbmdlfVxuICAgICAgICAgIG5hbWU9XCJBbGxcIlxuICAgICAgICAgIGlzU2VsZWN0ZWQ9e3RhZyA9PT0gXCJBbGxcIn1cbiAgICAgICAgLz5cbiAgICAgICAgPFByb2plY3RUYWdcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUYWdDaGFuZ2V9XG4gICAgICAgICAgbmFtZT1cIldlYlwiXG4gICAgICAgICAgaXNTZWxlY3RlZD17dGFnID09PSBcIldlYlwifVxuICAgICAgICAvPlxuICAgICAgICA8UHJvamVjdFRhZ1xuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRhZ0NoYW5nZX1cbiAgICAgICAgICBuYW1lPVwiTW9iaWxlXCJcbiAgICAgICAgICBpc1NlbGVjdGVkPXt0YWcgPT09IFwiTW9iaWxlXCJ9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICA8dWwgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6IHctWzgwJV0gbXgtYXV0byBnYXAtOCBtZDpnYXAtMTJcIj5cbiAgICAgICAge2ZpbHRlcmVkUHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxtb3Rpb24ubGlcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICB2YXJpYW50cz17Y2FyZFZhcmlhbnRzfVxuICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgICAgICAgYW5pbWF0ZT17aXNJblZpZXcgPyBcImFuaW1hdGVcIiA6IFwiaW5pdGlhbFwifVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zLCBkZWxheTogaW5kZXggKiAwLjQgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UHJvamVjdENhcmRcbiAgICAgICAgICAgICAga2V5PXtwcm9qZWN0LmlkfVxuICAgICAgICAgICAgICB0aXRsZT17cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb2plY3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIGltZ1VybD17cHJvamVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgZ2l0VXJsPXtwcm9qZWN0LmdpdFVybH1cbiAgICAgICAgICAgICAgcHJldmlld1VybD17cHJvamVjdC5wcmV2aWV3VXJsfVxuICAgICAgICAgICAgICBpZD17cHJvamVjdC5pZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9tb3Rpb24ubGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1NlY3Rpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIlByb2plY3RDYXJkIiwiUHJvamVjdFRhZyIsIm1vdGlvbiIsInVzZUluVmlldyIsInByb2plY3RzRGF0YSIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwidGFnIiwiZ2l0VXJsIiwicHJldmlld1VybCIsIlByb2plY3RzU2VjdGlvbiIsInNldFRhZyIsInJlZiIsImlzSW5WaWV3Iiwib25jZSIsImhhbmRsZVRhZ0NoYW5nZSIsIm5ld1RhZyIsImZpbHRlcmVkUHJvamVjdHMiLCJmaWx0ZXIiLCJwcm9qZWN0IiwiaW5jbHVkZXMiLCJjYXJkVmFyaWFudHMiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwic2VjdGlvbiIsImgyIiwiY2xhc3NOYW1lIiwidWwiLCJtYXAiLCJpbmRleCIsImxpIiwidmFyaWFudHMiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsImltZ1VybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProjectsSection.jsx\n"));

/***/ })

});