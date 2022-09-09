"use strict";
(self["webpackChunkcap1"] = self["webpackChunkcap1"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  list-style: none;\n  text-decoration: none;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\nbody {\n  background-color: #f0f0f0;\n}\n\n.header {\n  background-color: #fff;\n  border-bottom: 1px solid #e0e0e0;\n  display: flex;\n  justify-content: space-around;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n}\n\n.logo-container {\n  margin: 10px 0;\n  display: flex;\n  justify-content: left;\n  padding: 0 10px;\n  border: 2px solid #e0e0e0;\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n}\n\n.icon {\n  width: 40px;\n  height: 40px;\n  margin: 10px;\n}\n\n.header__title {\n  font-size: 3em;\n  font-weight: bold;\n  margin: 0 0 0 0;\n}\n\n.menu-container {\n  display: flex;\n  justify-content: right;\n  padding: 10px 40px;\n  margin: 10px;\n}\n\na {\n  text-decoration: none;\n  color: darkgoldenrod;\n  font-size: 1.5em;\n  font-weight: bold;\n}\n\n.menu__item {\n  margin: 10px;\n  padding: 0 20px;\n}\n\nmain section.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  margin: 180px auto;\n  column-gap: 10px;\n  row-gap: 30px;\n}\n\nmain section.container .card1 {\n  height: 400px;\n  width: 250px;\n  border: 1px solid black;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n}\n\nmain section.container .card1 img {\n  width: 100%;\n  height: 60%;\n}\n\nmain section.container .card1 .listepisods {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: black;\n  padding: 10px;\n  width: 100%;\n}\n\nmain section.container .card1 .listepisods h2 {\n  font-size: 20px;\n  color: black;\n}\n\nmain section.container .card1 .listepisods div button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: auto;\n  gap: 10px;\n  background: none;\n  border: none;\n  color: black;\n}\n\nsection.popup .comment-modal .close-comment-bn i {\n  font-size: 20px;\n  color: black;\n}\n\nmain section.container .card1 .listepisods div button i {\n  font-size: 20px;\n}\n\nmain section.container .card1 .listepisods div button i:hover,\nmain section.container .card1 .listepisods div button i:focus {\n  color: black;\n}\n\nmain section.container .card1 .listepisods div button span {\n  font-size: 20px;\n  font-weight: 300;\n}\n\nmain section.container .card1 .card1-summ {\n  padding: 0 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\nsection.popup .comment-modal .card-details p {\n  color: black;\n  font-size: 15px;\n  font-weight: 300;\n  line-height: 25px;\n  padding: 0 20px;\n}\n\nmain section.container .card1 .card1-summ p {\n  color: black;\n  font-weight: 100;\n  font-size: 15px;\n  line-height: 18px;\n}\n\nmain section.container .card1 .comment-btn {\n  position: absolute;\n  bottom: 10px;\n  width: auto;\n  padding: 8px 20px;\n  font-size: 15px;\n  background: rgba(171, 218, 171, 0.548);\n  color: darkgoldenrod;\n  border: 1px solid black;\n  font-weight: 700;\n  cursor: pointer;\n  margin-top: 0;\n  border-radius: 10px;\n  transition: all 0.6s;\n  margin-top: 30px;\n}\n\nmain section.container .card1 .comment-btn:hover {\n  background: darkgoldenrod;\n  color: #fff;\n}\n\n/* COMMENT POPUP */\n\nsection.popup {\n  display: none;\n  position: fixed;\n  background-color: white;\n  background-position: top center;\n  background-repeat: no-repeat;\n  backdrop-filter: blur(20px);\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n}\n\nsection.popup .comment-modal {\n  position: absolute;\n  transform: translate(-50%, -50%) scale(1);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: white;\n  border: 2px solid black;\n  width: 90%;\n  height: 95vh;\n  padding: 24px;\n  top: 50%;\n  left: 50%;\n}\n\nsection.popup .comment-modal .close-comment-bn {\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  width: 25px;\n  background-color: darkgoldenrod;\n  cursor: pointer;\n  transition: all 0.5s;\n}\n\nsection.popup .comment-modal .card-details {\n  margin-top: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  overflow: hidden;\n  overflow-y: scroll;\n}\n\nsection.popup .comment-modal .card-details img {\n  width: 100%;\n  height: 500px;\n}\n\nsection.popup .comment-modal .card-details h3 {\n  color: black;\n  width: 100%;\n  text-align: center;\n  font-size: 22px;\n  line-height: 25px;\n}\n\nsection.popup .comment-modal .card-details .more-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  width: 250px;\n  text-align: center;\n  padding: 20px;\n}\n\nsection.popup .comment-modal .card-details .more-info li {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  font-size: 15px;\n}\n\nsection.popup .comment-modal .card-details .more-info li span {\n  width: 100%;\n  color: black;\n}\n\nsection.popup .comment-modal .card-details .more-info li span strong {\n  color: darkgoldenrod;\n}\n\nsection.popup .comment-modal .card-details .card-comment {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 16px;\n  width: 100%;\n  margin-top: 10px;\n}\n\nsection.popup .comment-modal .card-details .card-comment h3 {\n  font-size: 16px;\n}\n\nsection.popup .comment-modal .card-details .card-comment .comment-area {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-content: flex-start;\n  align-items: center;\n  width: 100%;\n  padding: 10px;\n  color: #fff;\n  gap: 20px;\n}\n\n.comment-modal .card-details .card-comment .comment-area .comment-list {\n  box-shadow: 3px 2px 10px #fff;\n  width: 100%;\n  text-align: center;\n}\n\n.comment-modal .card-details .card-comment .comment-area .comment-list p {\n  font-size: 14px;\n  letter-spacing: 2px;\n  padding: 10px;\n  background-color: whitesmoke;\n}\n\n.comment-modal .card-details .card-comment .comment-area .comment-list p:nth-child(even) {\n  background-color: black;\n}\n\n.comment-modal .card-details .card-comment .comment-area form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  width: 300px;\n}\n\n.comment-modal .card-details .card-comment .comment-area form input,\n.comment-modal .card-details .card-comment .comment-area form textarea {\n  width: 100%;\n  padding: 8px 10px;\n  font-size: 14px;\n  border: 1px solid black;\n  border-radius: 10px;\n  background-color: white;\n  color: darkgoldenrod;\n}\n\n.card-comment .comment-area form input::placeholder,\n.card-comment .comment-area form textarea::placeholder {\n  color: darkgoldenrod;\n}\n\n.comment-modal .card-details .card-comment .comment-area form button {\n  width: 100%;\n  padding: 8px 20px;\n  font-size: 15px;\n  background: darkgoldenrod;\n  color: black;\n  border: 1px solid black;\n  font-weight: 700;\n  cursor: pointer;\n  border-radius: 10px;\n  transition: all 0.6s;\n}\n\n.comment-modal .card-details .card-comment .comment-area form button:hover {\n  background: black;\n  color: darkgoldenrod;\n}\n\n.footer {\n  background-color: #fff;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  z-index: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .menu-container {\n    display: none;\n  }\n\n  .logo-container {\n    display: inline-block;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  list-style: none;\n  text-decoration: none;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\nbody {\n  background-color: #f0f0f0;\n}\n\n.header {\n  background-color: #fff;\n  border-bottom: 1px solid #e0e0e0;\n  display: flex;\n  justify-content: space-around;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n}\n\n.logo-container {\n  margin: 10px 0;\n  display: flex;\n  justify-content: left;\n  padding: 0 10px;\n  border: 2px solid #e0e0e0;\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n}\n\n.icon {\n  width: 40px;\n  height: 40px;\n  margin: 10px;\n}\n\n.header__title {\n  font-size: 3em;\n  font-weight: bold;\n  margin: 0 0 0 0;\n}\n\n.menu-container {\n  display: flex;\n  justify-content: right;\n  padding: 10px 40px;\n  margin: 10px;\n}\n\na {\n  text-decoration: none;\n  color: darkgoldenrod;\n  font-size: 1.5em;\n  font-weight: bold;\n}\n\n.menu__item {\n  margin: 10px;\n  padding: 0 20px;\n}\n\nmain section.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  margin: 180px auto;\n  column-gap: 10px;\n  row-gap: 30px;\n}\n\nmain section.container .card1 {\n  height: 400px;\n  width: 250px;\n  border: 1px solid black;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n}\n\nmain section.container .card1 img {\n  width: 100%;\n  height: 60%;\n}\n\nmain section.container .card1 .listepisods {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: black;\n  padding: 10px;\n  width: 100%;\n}\n\nmain section.container .card1 .listepisods h2 {\n  font-size: 20px;\n  color: black;\n}\n\nmain section.container .card1 .listepisods div button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: auto;\n  gap: 10px;\n  background: none;\n  border: none;\n  color: black;\n}\n\nsection.popup .comment-modal .close-comment-bn i {\n  font-size: 20px;\n  color: black;\n}\n\nmain section.container .card1 .listepisods div button i {\n  font-size: 20px;\n}\n\nmain section.container .card1 .listepisods div button i:hover,\nmain section.container .card1 .listepisods div button i:focus {\n  color: black;\n}\n\nmain section.container .card1 .listepisods div button span {\n  font-size: 20px;\n  font-weight: 300;\n}\n\nmain section.container .card1 .card1-summ {\n  padding: 0 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\nsection.popup .comment-modal .card-details p {\n  color: black;\n  font-size: 15px;\n  font-weight: 300;\n  line-height: 25px;\n  padding: 0 20px;\n}\n\nmain section.container .card1 .card1-summ p {\n  color: black;\n  font-weight: 100;\n  font-size: 15px;\n  line-height: 18px;\n}\n\nmain section.container .card1 .comment-btn {\n  position: absolute;\n  bottom: 10px;\n  width: auto;\n  padding: 8px 20px;\n  font-size: 15px;\n  background: rgba(171, 218, 171, 0.548);\n  color: darkgoldenrod;\n  border: 1px solid black;\n  font-weight: 700;\n  cursor: pointer;\n  margin-top: 0;\n  border-radius: 10px;\n  transition: all 0.6s;\n  margin-top: 30px;\n}\n\nmain section.container .card1 .comment-btn:hover {\n  background: darkgoldenrod;\n  color: #fff;\n}\n\n/* COMMENT POPUP */\n\nsection.popup {\n  display: none;\n  position: fixed;\n  background-color: white;\n  background-position: top center;\n  background-repeat: no-repeat;\n  backdrop-filter: blur(20px);\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n}\n\nsection.popup .comment-modal {\n  position: absolute;\n  transform: translate(-50%, -50%) scale(1);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: white;\n  border: 2px solid black;\n  width: 90%;\n  height: 95vh;\n  padding: 24px;\n  top: 50%;\n  left: 50%;\n}\n\nsection.popup .comment-modal .close-comment-bn {\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  width: 25px;\n  background-color: darkgoldenrod;\n  cursor: pointer;\n  transition: all 0.5s;\n}\n\nsection.popup .comment-modal .card-details {\n  margin-top: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  overflow: hidden;\n  overflow-y: scroll;\n}\n\nsection.popup .comment-modal .card-details img {\n  width: 100%;\n  height: 500px;\n}\n\nsection.popup .comment-modal .card-details h3 {\n  color: black;\n  width: 100%;\n  text-align: center;\n  font-size: 22px;\n  line-height: 25px;\n}\n\nsection.popup .comment-modal .card-details .more-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  width: 250px;\n  text-align: center;\n  padding: 20px;\n}\n\nsection.popup .comment-modal .card-details .more-info li {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  font-size: 15px;\n}\n\nsection.popup .comment-modal .card-details .more-info li span {\n  width: 100%;\n  color: black;\n}\n\nsection.popup .comment-modal .card-details .more-info li span strong {\n  color: darkgoldenrod;\n}\n\nsection.popup .comment-modal .card-details .card-comment {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 16px;\n  width: 100%;\n  margin-top: 10px;\n}\n\nsection.popup .comment-modal .card-details .card-comment h3 {\n  font-size: 16px;\n}\n\nsection.popup .comment-modal .card-details .card-comment .comment-area {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-content: flex-start;\n  align-items: center;\n  width: 100%;\n  padding: 10px;\n  color: #fff;\n  gap: 20px;\n}\n\n.comment-modal .card-details .card-comment .comment-area .comment-list {\n  box-shadow: 3px 2px 10px #fff;\n  width: 100%;\n  text-align: center;\n}\n\n.comment-modal .card-details .card-comment .comment-area .comment-list p {\n  font-size: 14px;\n  letter-spacing: 2px;\n  padding: 10px;\n  background-color: whitesmoke;\n}\n\n.comment-modal .card-details .card-comment .comment-area .comment-list p:nth-child(even) {\n  background-color: black;\n}\n\n.comment-modal .card-details .card-comment .comment-area form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  width: 300px;\n}\n\n.comment-modal .card-details .card-comment .comment-area form input,\n.comment-modal .card-details .card-comment .comment-area form textarea {\n  width: 100%;\n  padding: 8px 10px;\n  font-size: 14px;\n  border: 1px solid black;\n  border-radius: 10px;\n  background-color: white;\n  color: darkgoldenrod;\n}\n\n.card-comment .comment-area form input::placeholder,\n.card-comment .comment-area form textarea::placeholder {\n  color: darkgoldenrod;\n}\n\n.comment-modal .card-details .card-comment .comment-area form button {\n  width: 100%;\n  padding: 8px 20px;\n  font-size: 15px;\n  background: darkgoldenrod;\n  color: black;\n  border: 1px solid black;\n  font-weight: 700;\n  cursor: pointer;\n  border-radius: 10px;\n  transition: all 0.6s;\n}\n\n.comment-modal .card-details .card-comment .comment-area form button:hover {\n  background: black;\n  color: darkgoldenrod;\n}\n\n.footer {\n  background-color: #fff;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  z-index: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .menu-container {\n    display: none;\n  }\n\n  .logo-container {\n    display: inline-block;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/content.js */ "./src/modules/content.js");
/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/likes.js */ "./src/modules/likes.js");



(0,_modules_content_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
const body = document.querySelector("body");
body.addEventListener("click", () => {
    (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});


/***/ }),

/***/ "./src/modules/content.js":
/*!********************************!*\
  !*** ./src/modules/content.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _episodes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./episodes.js */ "./src/modules/episodes.js");
/* harmony import */ var _episodelikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./episodelikes.js */ "./src/modules/episodelikes.js");



const commpopup = document.getElementById('popup');
let count = 0;
const counter = document.getElementById('count');
const episodecards = document.getElementById('container');
let currentValue = 0;
const appId = 'KM960h36MEAZF5DO9Wvb';
const url1 = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;

const getcomm = async (itemId) => {
  try {
    const comments = await fetch(`${url1}?item_id=${itemId}`);
    const data = await comments.json();
    const startcomment = document.querySelector('.comm1');
    const listAllComments = document.querySelector('.comment-list');
    if (data.length > 0) {
      startcomment.innerHTML = `Comments(${data.length})`;
      listAllComments.innerHTML = '';
      data.forEach((comm) => {
        const itemtocomment = `        
        <p>${comm.creation_date} ${comm.username}: ${comm.comment}</p>
      `;
        listAllComments.innerHTML += itemtocomment;
      });
    } else {
      startcomment.innerHTML = 'Comments(0)';
      const noComment = `
      <p>No comment on this post</p>
      `;
      listAllComments.innerHTML = noComment;
    }
  } catch (err) {
    throw new Error('Request error: ', err);
  }
};

const postComment = async (itemId) => {
  const username = document.querySelector('.username');
  const comment = document.querySelector('.usermassage');

  if (username.value !== '' || comment.value !== '') {
    try {
      const response = await fetch(url1, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          item_id: itemId,
          username: username.value,
          comment: comment.value,
        }),
      });
      const data = response.text();
      if (response.ok) {
        username.value = '';
        comment.value = '';
        getcomm(itemId);
        return data;
      }
    } catch (err) {
      throw new Error('Request error: ', err);
    }
    return true;
  }
  return false;
};

const closepopupModal = () => {
  const closebtn = document.querySelector('#close');
  closebtn.addEventListener('click', (e) => {
    e.preventDefault();
    commpopup.style.display = 'none';
  });
};

const showcommpopup = async () => {
  const episodeArray = await (0,_episodes_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const commentBtns = document.querySelectorAll('.comment-btn');
  commentBtns.forEach((commentBtn) => {
    const btnId = commentBtn.getAttribute('id');
    const episodedet = episodeArray[btnId];
    commentBtn.addEventListener('click', () => {
      getcomm(btnId);
      const modal = `          
      <div class="comment-modal">
      <button type="button" id="close" class="close-comment-bn">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div class="card-details">
        <img src="${episodedet.image.original}" alt="Card original image" />
        <h3>${episodedet.name}</h3>
        <ul class="more-info">
          <li>
            <span><strong> Runtime </strong>: ${episodedet.runtime} minutes</span>
          </li>
        </ul>
        <p class="summary">${episodedet.summary}</p>
        <div class="card-comment">
          <h3 class="comm1"></h3>
          <div class="comment-area">
            <div class="comment-list">
            </div>
            <form autocomplete="off" id="comment-form">
              <input type="text" class="username" name="name" id="name" placeholder="Your name"/>
              <textarea name="message" class="usermassage" id="" cols="30" rows="5" placeholder="Your Insight" ></textarea>
              <button class="new-comment" id="${btnId}" type="button">Comment</button>
            </form>
          </div>
        </div>
      </div>
    </div>
      `;

      commpopup.innerHTML = modal;
      commpopup.style.display = 'block';
      closepopupModal();

      const cmntBtn = document.querySelector('.new-comment');
      cmntBtn.addEventListener('click', () => {
        postComment(btnId);
      });
    });
  });
};

// Render all episodes card
const episodestats = async () => {
  const episodeArray = await (0,_episodes_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  episodeArray.slice(0, 10).forEach((episode) => {
    (0,_episodelikes_js__WEBPACK_IMPORTED_MODULE_1__["default"])().then((res) => {
      currentValue = res;
      let assignLike = 0;

      const like = currentValue.filter(
        (element) => element.item_id === episode.name,
      );
      if (like.length === 0) {
        assignLike = 0;
      } else {
        assignLike = like[0].likes;
      }
      episodecards.innerHTML += `
        <div class="card1" id="${episodeArray.indexOf(episode)}">
          <img src="${episode.image.medium}" alt="${episode.name}" />
          <div class="listepisods">
            <h2 class="title">${`${episode.name.substring(0, 15)}`}</h2>
            <div>
              <button type="button" class="like"><i class="fa-solid fa-thumbs-up"></i><span id="count-like">${assignLike}</span></button>
            </div>
          </div>
          <div class="card1-summ">        
            <p>${`${episode.summary.substring(0, 80)} ...`}</p>
          </div>
            <button type="button" class="comment-btn" id="${episodeArray.indexOf(
        episode,
      )}">Read more & comments</button>
        </div>`;
      showcommpopup();
    });

    count += 1;
  });

  //counter.innerText = `(${count * 2})`;
  counter.style.color = 'red';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (episodestats);


/***/ }),

/***/ "./src/modules/episodelikes.js":
/*!*************************************!*\
  !*** ./src/modules/episodelikes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable linebreak-style */
const episodelikes = async () => {
  let items = [];
  fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3JCbf01gnYHumdJ2UWFM/likes',
  )
    .then((response) => response.json())
    .then((res) => {
      items = res;
      return items;
    });
  return items;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (episodelikes);


/***/ }),

/***/ "./src/modules/episodes.js":
/*!*********************************!*\
  !*** ./src/modules/episodes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fetchAPIdata = async () => {
  let episodes = [];
  await fetch('https://api.tvmaze.com/seasons/1/episodes')
    .then((response) => response.json())
    .then((response) => {
      episodes = response;
    });
  return episodes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchAPIdata);

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _episodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./episodes */ "./src/modules/episodes.js");
/* harmony import */ var _postlikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postlikes.js */ "./src/modules/postlikes.js");
/* eslint-disable linebreak-style */



const likepisode = async () => {
  const allepisodes = await (0,_episodes__WEBPACK_IMPORTED_MODULE_0__["default"])();

  const btnadd = document.querySelectorAll('.like');
  const spans = document.querySelectorAll('#count-like');
  btnadd.forEach((a, i) => {
    let new111 = JSON.parse(spans[i].innerHTML);

    a.addEventListener('click', () => {
      (0,_postlikes_js__WEBPACK_IMPORTED_MODULE_1__["default"])(allepisodes[i].name);
      new111 += 1;
      spans[i].innerHTML = new111;
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likepisode);


/***/ }),

/***/ "./src/modules/postlikes.js":
/*!**********************************!*\
  !*** ./src/modules/postlikes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable linebreak-style */
const postLike = (episode) => {
  fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3JCbf01gnYHumdJ2UWFM/likes',
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        item_id: episode,
      }),
    },
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLike);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcs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Ozs7Ozs7Ozs7QUNkNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7OztBQ1YzQjtBQUNzQztBQUNBOztBQUV0QztBQUNBLDRCQUE0QixxREFBWTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLHlEQUFRO0FBQ2Q7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNwQjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvQ0FBb0M7QUFDckQ7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXAxLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9jYXAxLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYXAxLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2FwMS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9jYXAxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhcDEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NhcDEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2FwMS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYXAxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2FwMS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NhcDEvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FwMS8uL3NyYy9tb2R1bGVzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vY2FwMS8uL3NyYy9tb2R1bGVzL2VwaXNvZGVsaWtlcy5qcyIsIndlYnBhY2s6Ly9jYXAxLy4vc3JjL21vZHVsZXMvZXBpc29kZXMuanMiLCJ3ZWJwYWNrOi8vY2FwMS8uL3NyYy9tb2R1bGVzL2xpa2VzLmpzIiwid2VicGFjazovL2NhcDEvLi9zcmMvbW9kdWxlcy9wb3N0bGlrZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIkNvdXJpZXIgTmV3XFxcIiwgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubG9nby1jb250YWluZXIge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2UwZTBlMDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uaWNvbiB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmhlYWRlcl9fdGl0bGUge1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMCAwIDAgMDtcXG59XFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbiAgcGFkZGluZzogMTBweCA0MHB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBkYXJrZ29sZGVucm9kO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWVudV9faXRlbSB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxufVxcblxcbm1haW4gc2VjdGlvbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbjogMTgwcHggYXV0bztcXG4gIGNvbHVtbi1nYXA6IDEwcHg7XFxuICByb3ctZ2FwOiAzMHB4O1xcbn1cXG5cXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5jYXJkMSB7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLmNhcmQxIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjAlO1xcbn1cXG5cXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5jYXJkMSAubGlzdGVwaXNvZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLmNhcmQxIC5saXN0ZXBpc29kcyBoMiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLmNhcmQxIC5saXN0ZXBpc29kcyBkaXYgYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IGF1dG87XFxuICBnYXA6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5zZWN0aW9uLnBvcHVwIC5jb21tZW50LW1vZGFsIC5jbG9zZS1jb21tZW50LWJuIGkge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5jYXJkMSAubGlzdGVwaXNvZHMgZGl2IGJ1dHRvbiBpIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAuY2FyZDEgLmxpc3RlcGlzb2RzIGRpdiBidXR0b24gaTpob3ZlcixcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5jYXJkMSAubGlzdGVwaXNvZHMgZGl2IGJ1dHRvbiBpOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAuY2FyZDEgLmxpc3RlcGlzb2RzIGRpdiBidXR0b24gc3BhbiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5jYXJkMSAuY2FyZDEtc3VtbSB7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuc2VjdGlvbi5wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIHAge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5jYXJkMSAuY2FyZDEtc3VtbSBwIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG59XFxuXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAuY2FyZDEgLmNvbW1lbnQtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgcGFkZGluZzogOHB4IDIwcHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE3MSwgMjE4LCAxNzEsIDAuNTQ4KTtcXG4gIGNvbG9yOiBkYXJrZ29sZGVucm9kO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLmNhcmQxIC5jb21tZW50LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBkYXJrZ29sZGVucm9kO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi8qIENPTU1FTlQgUE9QVVAgKi9cXG5cXG5zZWN0aW9uLnBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuc2VjdGlvbi5wb3B1cCAuY29tbWVudC1tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDk1dmg7XFxuICBwYWRkaW5nOiAyNHB4O1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxufVxcblxcbnNlY3Rpb24ucG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNsb3NlLWNvbW1lbnQtYm4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDIwcHg7XFxuICB0b3A6IDIwcHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtnb2xkZW5yb2Q7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxuXFxuc2VjdGlvbi5wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbnNlY3Rpb24ucG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbn1cXG5cXG5zZWN0aW9uLnBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgaDMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG59XFxuXFxuc2VjdGlvbi5wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5tb3JlLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuc2VjdGlvbi5wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5tb3JlLWluZm8gbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG5zZWN0aW9uLnBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLm1vcmUtaW5mbyBsaSBzcGFuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5zZWN0aW9uLnBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLm1vcmUtaW5mbyBsaSBzcGFuIHN0cm9uZyB7XFxuICBjb2xvcjogZGFya2dvbGRlbnJvZDtcXG59XFxuXFxuc2VjdGlvbi5wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5zZWN0aW9uLnBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCBoMyB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbnNlY3Rpb24ucG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSAuY29tbWVudC1saXN0IHtcXG4gIGJveC1zaGFkb3c6IDNweCAycHggMTBweCAjZmZmO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIC5jb21tZW50LWxpc3QgcCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIC5jb21tZW50LWxpc3QgcDpudGgtY2hpbGQoZXZlbikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxufVxcblxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIGZvcm0gaW5wdXQsXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogZGFya2dvbGRlbnJvZDtcXG59XFxuXFxuLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbi5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSBmb3JtIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogZGFya2dvbGRlbnJvZDtcXG59XFxuXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA4cHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJhY2tncm91bmQ6IGRhcmtnb2xkZW5yb2Q7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XFxufVxcblxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIGZvcm0gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgY29sb3I6IGRhcmtnb2xkZW5yb2Q7XFxufVxcblxcbi5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLm1lbnUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5sb2dvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixNQUFNO0VBQ04sV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsMkNBQTJDO0VBQzNDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qixt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V0FBVztFQUNYLGFBQWE7RUFDYixXQUFXO0VBQ1gsU0FBUztBQUNYOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUUsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIkNvdXJpZXIgTmV3XFxcIiwgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubG9nby1jb250YWluZXIge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2UwZTBlMDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uaWNvbiB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmhlYWRlcl9fdGl0bGUge1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMCAwIDAgMDtcXG59XFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbiAgcGFkZGluZzogMTBweCA0MHB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBkYXJrZ29sZGVucm9kO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWVudV9faXRlbSB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxufVxcblxcbm1haW4gc2VjdGlvbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbjogMTgwcHggYXV0bztcXG4gIGNvbHVtbi1nYXA6IDEwcHg7XFxuICByb3ctZ2FwOiAzMHB4O1xcbn1cXG5cXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5jYXJkMSB7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLmNhcmQxIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjAlO1xcbn1cXG5cXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5jYXJkMSAubGlzdGVwaXNvZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLmNhcmQxIC5saXN0ZXBpc29kcyBoMiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLmNhcmQxIC5saXN0ZXBpc29kcyBkaXYgYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IGF1dG87XFxuICBnYXA6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5zZWN0aW9uLnBvcHVwIC5jb21tZW50LW1vZGFsIC5jbG9zZS1jb21tZW50LWJuIGkge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5jYXJkMSAubGlzdGVwaXNvZHMgZGl2IGJ1dHRvbiBpIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAuY2FyZDEgLmxpc3RlcGlzb2RzIGRpdiBidXR0b24gaTpob3ZlcixcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5jYXJkMSAubGlzdGVwaXNvZHMgZGl2IGJ1dHRvbiBpOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAuY2FyZDEgLmxpc3RlcGlzb2RzIGRpdiBidXR0b24gc3BhbiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5jYXJkMSAuY2FyZDEtc3VtbSB7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuc2VjdGlvbi5wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIHAge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5jYXJkMSAuY2FyZDEtc3VtbSBwIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG59XFxuXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAuY2FyZDEgLmNvbW1lbnQtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgcGFkZGluZzogOHB4IDIwcHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE3MSwgMjE4LCAxNzEsIDAuNTQ4KTtcXG4gIGNvbG9yOiBkYXJrZ29sZGVucm9kO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLmNhcmQxIC5jb21tZW50LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBkYXJrZ29sZGVucm9kO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi8qIENPTU1FTlQgUE9QVVAgKi9cXG5cXG5zZWN0aW9uLnBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuc2VjdGlvbi5wb3B1cCAuY29tbWVudC1tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDk1dmg7XFxuICBwYWRkaW5nOiAyNHB4O1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxufVxcblxcbnNlY3Rpb24ucG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNsb3NlLWNvbW1lbnQtYm4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDIwcHg7XFxuICB0b3A6IDIwcHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtnb2xkZW5yb2Q7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxuXFxuc2VjdGlvbi5wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbnNlY3Rpb24ucG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbn1cXG5cXG5zZWN0aW9uLnBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgaDMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG59XFxuXFxuc2VjdGlvbi5wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5tb3JlLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuc2VjdGlvbi5wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5tb3JlLWluZm8gbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG5zZWN0aW9uLnBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLm1vcmUtaW5mbyBsaSBzcGFuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5zZWN0aW9uLnBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLm1vcmUtaW5mbyBsaSBzcGFuIHN0cm9uZyB7XFxuICBjb2xvcjogZGFya2dvbGRlbnJvZDtcXG59XFxuXFxuc2VjdGlvbi5wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5zZWN0aW9uLnBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCBoMyB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbnNlY3Rpb24ucG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSAuY29tbWVudC1saXN0IHtcXG4gIGJveC1zaGFkb3c6IDNweCAycHggMTBweCAjZmZmO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIC5jb21tZW50LWxpc3QgcCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIC5jb21tZW50LWxpc3QgcDpudGgtY2hpbGQoZXZlbikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxufVxcblxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIGZvcm0gaW5wdXQsXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogZGFya2dvbGRlbnJvZDtcXG59XFxuXFxuLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbi5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSBmb3JtIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogZGFya2dvbGRlbnJvZDtcXG59XFxuXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA4cHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJhY2tncm91bmQ6IGRhcmtnb2xkZW5yb2Q7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XFxufVxcblxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIGZvcm0gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgY29sb3I6IGRhcmtnb2xkZW5yb2Q7XFxufVxcblxcbi5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLm1lbnUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5sb2dvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBlcGlzb2Rlc3RhdHMgZnJvbSBcIi4vbW9kdWxlcy9jb250ZW50LmpzXCI7XG5pbXBvcnQgbGlrZXBpc29kZSBmcm9tIFwiLi9tb2R1bGVzL2xpa2VzLmpzXCI7XG5lcGlzb2Rlc3RhdHMoKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsaWtlcGlzb2RlKCk7XG59KTtcbiIsImltcG9ydCBmZXRjaEFQSWRhdGEgZnJvbSAnLi9lcGlzb2Rlcy5qcyc7XG5pbXBvcnQgZXBpc29kZWxpa2VzIGZyb20gJy4vZXBpc29kZWxpa2VzLmpzJztcblxuY29uc3QgY29tbXBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwJyk7XG5sZXQgY291bnQgPSAwO1xuY29uc3QgY291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudCcpO1xuY29uc3QgZXBpc29kZWNhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xubGV0IGN1cnJlbnRWYWx1ZSA9IDA7XG5jb25zdCBhcHBJZCA9ICdLTTk2MGgzNk1FQVpGNURPOVd2Yic7XG5jb25zdCB1cmwxID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7YXBwSWR9L2NvbW1lbnRzYDtcblxuY29uc3QgZ2V0Y29tbSA9IGFzeW5jIChpdGVtSWQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGZldGNoKGAke3VybDF9P2l0ZW1faWQ9JHtpdGVtSWR9YCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGNvbW1lbnRzLmpzb24oKTtcbiAgICBjb25zdCBzdGFydGNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbTEnKTtcbiAgICBjb25zdCBsaXN0QWxsQ29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1saXN0Jyk7XG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgc3RhcnRjb21tZW50LmlubmVySFRNTCA9IGBDb21tZW50cygke2RhdGEubGVuZ3RofSlgO1xuICAgICAgbGlzdEFsbENvbW1lbnRzLmlubmVySFRNTCA9ICcnO1xuICAgICAgZGF0YS5mb3JFYWNoKChjb21tKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW10b2NvbW1lbnQgPSBgICAgICAgICBcbiAgICAgICAgPHA+JHtjb21tLmNyZWF0aW9uX2RhdGV9ICR7Y29tbS51c2VybmFtZX06ICR7Y29tbS5jb21tZW50fTwvcD5cbiAgICAgIGA7XG4gICAgICAgIGxpc3RBbGxDb21tZW50cy5pbm5lckhUTUwgKz0gaXRlbXRvY29tbWVudDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydGNvbW1lbnQuaW5uZXJIVE1MID0gJ0NvbW1lbnRzKDApJztcbiAgICAgIGNvbnN0IG5vQ29tbWVudCA9IGBcbiAgICAgIDxwPk5vIGNvbW1lbnQgb24gdGhpcyBwb3N0PC9wPlxuICAgICAgYDtcbiAgICAgIGxpc3RBbGxDb21tZW50cy5pbm5lckhUTUwgPSBub0NvbW1lbnQ7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVlc3QgZXJyb3I6ICcsIGVycik7XG4gIH1cbn07XG5cbmNvbnN0IHBvc3RDb21tZW50ID0gYXN5bmMgKGl0ZW1JZCkgPT4ge1xuICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VybmFtZScpO1xuICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXJtYXNzYWdlJyk7XG5cbiAgaWYgKHVzZXJuYW1lLnZhbHVlICE9PSAnJyB8fCBjb21tZW50LnZhbHVlICE9PSAnJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybDEsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaXRlbV9pZDogaXRlbUlkLFxuICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZS52YWx1ZSxcbiAgICAgICAgICBjb21tZW50OiBjb21tZW50LnZhbHVlLFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICB1c2VybmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICBjb21tZW50LnZhbHVlID0gJyc7XG4gICAgICAgIGdldGNvbW0oaXRlbUlkKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVlc3QgZXJyb3I6ICcsIGVycik7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGNsb3NlcG9wdXBNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgY2xvc2VidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UnKTtcbiAgY2xvc2VidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb21tcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG59O1xuXG5jb25zdCBzaG93Y29tbXBvcHVwID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBlcGlzb2RlQXJyYXkgPSBhd2FpdCBmZXRjaEFQSWRhdGEoKTtcbiAgY29uc3QgY29tbWVudEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1idG4nKTtcbiAgY29tbWVudEJ0bnMuZm9yRWFjaCgoY29tbWVudEJ0bikgPT4ge1xuICAgIGNvbnN0IGJ0bklkID0gY29tbWVudEJ0bi5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgY29uc3QgZXBpc29kZWRldCA9IGVwaXNvZGVBcnJheVtidG5JZF07XG4gICAgY29tbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGdldGNvbW0oYnRuSWQpO1xuICAgICAgY29uc3QgbW9kYWwgPSBgICAgICAgICAgIFxuICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtbW9kYWxcIj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2xvc2VcIiBjbGFzcz1cImNsb3NlLWNvbW1lbnQtYm5cIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14bWFya1wiPjwvaT5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZGV0YWlsc1wiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7ZXBpc29kZWRldC5pbWFnZS5vcmlnaW5hbH1cIiBhbHQ9XCJDYXJkIG9yaWdpbmFsIGltYWdlXCIgLz5cbiAgICAgICAgPGgzPiR7ZXBpc29kZWRldC5uYW1lfTwvaDM+XG4gICAgICAgIDx1bCBjbGFzcz1cIm1vcmUtaW5mb1wiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxzcGFuPjxzdHJvbmc+IFJ1bnRpbWUgPC9zdHJvbmc+OiAke2VwaXNvZGVkZXQucnVudGltZX0gbWludXRlczwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8cCBjbGFzcz1cInN1bW1hcnlcIj4ke2VwaXNvZGVkZXQuc3VtbWFyeX08L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbW1lbnRcIj5cbiAgICAgICAgICA8aDMgY2xhc3M9XCJjb21tMVwiPjwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtYXJlYVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtbGlzdFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Zm9ybSBhdXRvY29tcGxldGU9XCJvZmZcIiBpZD1cImNvbW1lbnQtZm9ybVwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInVzZXJuYW1lXCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiLz5cbiAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJtZXNzYWdlXCIgY2xhc3M9XCJ1c2VybWFzc2FnZVwiIGlkPVwiXCIgY29scz1cIjMwXCIgcm93cz1cIjVcIiBwbGFjZWhvbGRlcj1cIllvdXIgSW5zaWdodFwiID48L3RleHRhcmVhPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmV3LWNvbW1lbnRcIiBpZD1cIiR7YnRuSWR9XCIgdHlwZT1cImJ1dHRvblwiPkNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgIGA7XG5cbiAgICAgIGNvbW1wb3B1cC5pbm5lckhUTUwgPSBtb2RhbDtcbiAgICAgIGNvbW1wb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGNsb3NlcG9wdXBNb2RhbCgpO1xuXG4gICAgICBjb25zdCBjbW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1jb21tZW50Jyk7XG4gICAgICBjbW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwb3N0Q29tbWVudChidG5JZCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vLyBSZW5kZXIgYWxsIGVwaXNvZGVzIGNhcmRcbmNvbnN0IGVwaXNvZGVzdGF0cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZXBpc29kZUFycmF5ID0gYXdhaXQgZmV0Y2hBUElkYXRhKCk7XG4gIGVwaXNvZGVBcnJheS5zbGljZSgwLCAxMCkuZm9yRWFjaCgoZXBpc29kZSkgPT4ge1xuICAgIGVwaXNvZGVsaWtlcygpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgY3VycmVudFZhbHVlID0gcmVzO1xuICAgICAgbGV0IGFzc2lnbkxpa2UgPSAwO1xuXG4gICAgICBjb25zdCBsaWtlID0gY3VycmVudFZhbHVlLmZpbHRlcihcbiAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQuaXRlbV9pZCA9PT0gZXBpc29kZS5uYW1lLFxuICAgICAgKTtcbiAgICAgIGlmIChsaWtlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhc3NpZ25MaWtlID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFzc2lnbkxpa2UgPSBsaWtlWzBdLmxpa2VzO1xuICAgICAgfVxuICAgICAgZXBpc29kZWNhcmRzLmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkMVwiIGlkPVwiJHtlcGlzb2RlQXJyYXkuaW5kZXhPZihlcGlzb2RlKX1cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIiR7ZXBpc29kZS5pbWFnZS5tZWRpdW19XCIgYWx0PVwiJHtlcGlzb2RlLm5hbWV9XCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdGVwaXNvZHNcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInRpdGxlXCI+JHtgJHtlcGlzb2RlLm5hbWUuc3Vic3RyaW5nKDAsIDE1KX1gfTwvaDI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImxpa2VcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRodW1icy11cFwiPjwvaT48c3BhbiBpZD1cImNvdW50LWxpa2VcIj4ke2Fzc2lnbkxpa2V9PC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQxLXN1bW1cIj4gICAgICAgIFxuICAgICAgICAgICAgPHA+JHtgJHtlcGlzb2RlLnN1bW1hcnkuc3Vic3RyaW5nKDAsIDgwKX0gLi4uYH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNvbW1lbnQtYnRuXCIgaWQ9XCIke2VwaXNvZGVBcnJheS5pbmRleE9mKFxuICAgICAgICBlcGlzb2RlLFxuICAgICAgKX1cIj5SZWFkIG1vcmUgJiBjb21tZW50czwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5gO1xuICAgICAgc2hvd2NvbW1wb3B1cCgpO1xuICAgIH0pO1xuXG4gICAgY291bnQgKz0gMTtcbiAgfSk7XG5cbiAgLy9jb3VudGVyLmlubmVyVGV4dCA9IGAoJHtjb3VudCAqIDJ9KWA7XG4gIGNvdW50ZXIuc3R5bGUuY29sb3IgPSAncmVkJztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVwaXNvZGVzdGF0cztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuY29uc3QgZXBpc29kZWxpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBsZXQgaXRlbXMgPSBbXTtcbiAgZmV0Y2goXG4gICAgJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzNKQ2JmMDFnbllIdW1kSjJVV0ZNL2xpa2VzJyxcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIGl0ZW1zID0gcmVzO1xuICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH0pO1xuICByZXR1cm4gaXRlbXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlcGlzb2RlbGlrZXM7XG4iLCJjb25zdCBmZXRjaEFQSWRhdGEgPSBhc3luYyAoKSA9PiB7XG4gIGxldCBlcGlzb2RlcyA9IFtdO1xuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFzb25zLzEvZXBpc29kZXMnKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgZXBpc29kZXMgPSByZXNwb25zZTtcbiAgICB9KTtcbiAgcmV0dXJuIGVwaXNvZGVzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hBUElkYXRhOyIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuaW1wb3J0IGZldGNoQVBJZGF0YSBmcm9tICcuL2VwaXNvZGVzJztcbmltcG9ydCBwb3N0TGlrZSBmcm9tICcuL3Bvc3RsaWtlcy5qcyc7XG5cbmNvbnN0IGxpa2VwaXNvZGUgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFsbGVwaXNvZGVzID0gYXdhaXQgZmV0Y2hBUElkYXRhKCk7XG5cbiAgY29uc3QgYnRuYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2UnKTtcbiAgY29uc3Qgc3BhbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY291bnQtbGlrZScpO1xuICBidG5hZGQuZm9yRWFjaCgoYSwgaSkgPT4ge1xuICAgIGxldCBuZXcxMTEgPSBKU09OLnBhcnNlKHNwYW5zW2ldLmlubmVySFRNTCk7XG5cbiAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcG9zdExpa2UoYWxsZXBpc29kZXNbaV0ubmFtZSk7XG4gICAgICBuZXcxMTEgKz0gMTtcbiAgICAgIHNwYW5zW2ldLmlubmVySFRNTCA9IG5ldzExMTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsaWtlcGlzb2RlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG5jb25zdCBwb3N0TGlrZSA9IChlcGlzb2RlKSA9PiB7XG4gIGZldGNoKFxuICAgICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8zSkNiZjAxZ25ZSHVtZEoyVVdGTS9saWtlcycsXG4gICAge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogZXBpc29kZSxcbiAgICAgIH0pLFxuICAgIH0sXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3N0TGlrZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==