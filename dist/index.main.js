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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  text-decoration: none;\r\n  font-family: \"Courier New\", Courier, monospace;\r\n}\r\n\r\nbody {\r\n  background-color: #f0f0f0;\r\n}\r\n\r\n.header {\r\n  background-color: #fff;\r\n  border-bottom: 1px solid #e0e0e0;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.logo-container {\r\n  margin: 10px 0;\r\n  display: flex;\r\n  justify-content: left;\r\n  padding: 0 10px;\r\n  border: 2px solid #e0e0e0;\r\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);\r\n  border-radius: 10px;\r\n}\r\n\r\n.icon {\r\n  width: 40px;\r\n  height: 40px;\r\n  margin: 10px;\r\n}\r\n\r\n.header__title {\r\n  font-size: 3em;\r\n  font-weight: bold;\r\n  margin: 0 0 0 0;\r\n}\r\n\r\n.menu-container {\r\n  display: flex;\r\n  justify-content: right;\r\n  padding: 10px 40px;\r\n  margin: 10px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: darkgoldenrod;\r\n  font-size: 1.5em;\r\n  font-weight: bold;\r\n}\r\n\r\n.menu__item {\r\n  margin: 10px;\r\n  padding: 0 20px;\r\n}\r\n\r\nmain section.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  margin: 180px auto;\r\n  column-gap: 10px;\r\n  row-gap: 30px;\r\n}\r\n\r\nmain section.container .card1 {\r\n  height: 400px;\r\n  width: 250px;\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\nmain section.container .card1 img {\r\n  width: 100%;\r\n  height: 60%;\r\n}\r\n\r\nmain section.container .card1 .listepisods {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  color: black;\r\n  padding: 10px;\r\n  width: 100%;\r\n}\r\n\r\nmain section.container .card1 .listepisods h2 {\r\n  font-size: 20px;\r\n  color: black;\r\n}\r\n\r\nmain section.container .card1 .listepisods div button {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: auto;\r\n  gap: 10px;\r\n  background: none;\r\n  border: none;\r\n  color: black;\r\n}\r\n\r\nsection.popup .comment-modal .close-comment-bn i {\r\n  font-size: 20px;\r\n  color: black;\r\n}\r\n\r\nmain section.container .card1 .listepisods div button i {\r\n  font-size: 20px;\r\n}\r\n\r\nmain section.container .card1 .listepisods div button i:hover,\r\nmain section.container .card1 .listepisods div button i:focus {\r\n  color: black;\r\n}\r\n\r\nmain section.container .card1 .listepisods div button span {\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n}\r\n\r\nmain section.container .card1 .card1-summ {\r\n  padding: 0 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nsection.popup .comment-modal .card-details p {\r\n  color: black;\r\n  font-size: 15px;\r\n  font-weight: 300;\r\n  line-height: 25px;\r\n  padding: 0 20px;\r\n}\r\n\r\nmain section.container .card1 .card1-summ p {\r\n  color: black;\r\n  font-weight: 100;\r\n  font-size: 15px;\r\n  line-height: 18px;\r\n}\r\n\r\nmain section.container .card1 .comment-btn {\r\n  position: absolute;\r\n  bottom: 10px;\r\n  width: auto;\r\n  padding: 8px 20px;\r\n  font-size: 15px;\r\n  background: rgba(171, 218, 171, 0.548);\r\n  color: darkgoldenrod;\r\n  border: 1px solid black;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n  transition: all 0.6s;\r\n  margin-top: 30px;\r\n}\r\n\r\nmain section.container .card1 .comment-btn:hover {\r\n  background: darkgoldenrod;\r\n  color: #fff;\r\n}\r\n\r\n/* COMMENT POPUP */\r\n\r\nsection.popup {\r\n  display: none;\r\n  position: fixed;\r\n  background-color: white;\r\n  background-position: top center;\r\n  background-repeat: no-repeat;\r\n  backdrop-filter: blur(20px);\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n}\r\n\r\nsection.popup .comment-modal {\r\n  position: absolute;\r\n  transform: translate(-50%, -50%) scale(1);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  background: white;\r\n  border: 2px solid black;\r\n  width: 90%;\r\n  height: 95vh;\r\n  padding: 24px;\r\n  top: 50%;\r\n  left: 50%;\r\n}\r\n\r\nsection.popup .comment-modal .close-comment-bn {\r\n  position: absolute;\r\n  right: 20px;\r\n  top: 20px;\r\n  width: 25px;\r\n  background-color: darkgoldenrod;\r\n  cursor: pointer;\r\n  transition: all 0.5s;\r\n}\r\n\r\nsection.popup .comment-modal .card-details {\r\n  margin-top: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\nsection.popup .comment-modal .card-details img {\r\n  width: 100%;\r\n  height: 500px;\r\n}\r\n\r\nsection.popup .comment-modal .card-details h3 {\r\n  color: black;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 22px;\r\n  line-height: 25px;\r\n}\r\n\r\nsection.popup .comment-modal .card-details .more-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  width: 250px;\r\n  text-align: center;\r\n  padding: 20px;\r\n}\r\n\r\nsection.popup .comment-modal .card-details .more-info li {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  font-size: 15px;\r\n}\r\n\r\nsection.popup .comment-modal .card-details .more-info li span {\r\n  width: 100%;\r\n  color: black;\r\n}\r\n\r\nsection.popup .comment-modal .card-details .more-info li span strong {\r\n  color: darkgoldenrod;\r\n}\r\n\r\nsection.popup .comment-modal .card-details .card-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\nsection.popup .comment-modal .card-details .card-comment h3 {\r\n  font-size: 16px;\r\n}\r\n\r\nsection.popup .comment-modal .card-details .card-comment .comment-area {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-content: flex-start;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 10px;\r\n  color: #fff;\r\n  gap: 20px;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area .comment-list {\r\n  box-shadow: 3px 2px 10px #fff;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area .comment-list p {\r\n  font-size: 14px;\r\n  letter-spacing: 2px;\r\n  padding: 10px;\r\n  background-color: whitesmoke;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area .comment-list p:nth-child(even) {\r\n  background-color: black;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  width: 300px;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form input,\r\n.comment-modal .card-details .card-comment .comment-area form textarea {\r\n  width: 100%;\r\n  padding: 8px 10px;\r\n  font-size: 14px;\r\n  border: 1px solid black;\r\n  border-radius: 10px;\r\n  background-color: white;\r\n  color: darkgoldenrod;\r\n}\r\n\r\n.card-comment .comment-area form input::placeholder,\r\n.card-comment .comment-area form textarea::placeholder {\r\n  color: darkgoldenrod;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form button {\r\n  width: 100%;\r\n  padding: 8px 20px;\r\n  font-size: 15px;\r\n  background: darkgoldenrod;\r\n  color: black;\r\n  border: 1px solid black;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n  transition: all 0.6s;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form button:hover {\r\n  background: black;\r\n  color: darkgoldenrod;\r\n}\r\n\r\n.footer {\r\n  background-color: #fff;\r\n  border-top: 1px solid #e0e0e0;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 10px;\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .menu-container {\r\n    display: none;\r\n  }\r\n\r\n  .logo-container {\r\n    display: inline-block;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  text-decoration: none;\r\n  font-family: \"Courier New\", Courier, monospace;\r\n}\r\n\r\nbody {\r\n  background-color: #f0f0f0;\r\n}\r\n\r\n.header {\r\n  background-color: #fff;\r\n  border-bottom: 1px solid #e0e0e0;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.logo-container {\r\n  margin: 10px 0;\r\n  display: flex;\r\n  justify-content: left;\r\n  padding: 0 10px;\r\n  border: 2px solid #e0e0e0;\r\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);\r\n  border-radius: 10px;\r\n}\r\n\r\n.icon {\r\n  width: 40px;\r\n  height: 40px;\r\n  margin: 10px;\r\n}\r\n\r\n.header__title {\r\n  font-size: 3em;\r\n  font-weight: bold;\r\n  margin: 0 0 0 0;\r\n}\r\n\r\n.menu-container {\r\n  display: flex;\r\n  justify-content: right;\r\n  padding: 10px 40px;\r\n  margin: 10px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: darkgoldenrod;\r\n  font-size: 1.5em;\r\n  font-weight: bold;\r\n}\r\n\r\n.menu__item {\r\n  margin: 10px;\r\n  padding: 0 20px;\r\n}\r\n\r\nmain section.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  margin: 180px auto;\r\n  column-gap: 10px;\r\n  row-gap: 30px;\r\n}\r\n\r\nmain section.container .card1 {\r\n  height: 400px;\r\n  width: 250px;\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\nmain section.container .card1 img {\r\n  width: 100%;\r\n  height: 60%;\r\n}\r\n\r\nmain section.container .card1 .listepisods {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  color: black;\r\n  padding: 10px;\r\n  width: 100%;\r\n}\r\n\r\nmain section.container .card1 .listepisods h2 {\r\n  font-size: 20px;\r\n  color: black;\r\n}\r\n\r\nmain section.container .card1 .listepisods div button {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: auto;\r\n  gap: 10px;\r\n  background: none;\r\n  border: none;\r\n  color: black;\r\n}\r\n\r\nsection.popup .comment-modal .close-comment-bn i {\r\n  font-size: 20px;\r\n  color: black;\r\n}\r\n\r\nmain section.container .card1 .listepisods div button i {\r\n  font-size: 20px;\r\n}\r\n\r\nmain section.container .card1 .listepisods div button i:hover,\r\nmain section.container .card1 .listepisods div button i:focus {\r\n  color: black;\r\n}\r\n\r\nmain section.container .card1 .listepisods div button span {\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n}\r\n\r\nmain section.container .card1 .card1-summ {\r\n  padding: 0 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nsection.popup .comment-modal .card-details p {\r\n  color: black;\r\n  font-size: 15px;\r\n  font-weight: 300;\r\n  line-height: 25px;\r\n  padding: 0 20px;\r\n}\r\n\r\nmain section.container .card1 .card1-summ p {\r\n  color: black;\r\n  font-weight: 100;\r\n  font-size: 15px;\r\n  line-height: 18px;\r\n}\r\n\r\nmain section.container .card1 .comment-btn {\r\n  position: absolute;\r\n  bottom: 10px;\r\n  width: auto;\r\n  padding: 8px 20px;\r\n  font-size: 15px;\r\n  background: rgba(171, 218, 171, 0.548);\r\n  color: darkgoldenrod;\r\n  border: 1px solid black;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n  transition: all 0.6s;\r\n  margin-top: 30px;\r\n}\r\n\r\nmain section.container .card1 .comment-btn:hover {\r\n  background: darkgoldenrod;\r\n  color: #fff;\r\n}\r\n\r\n/* COMMENT POPUP */\r\n\r\nsection.popup {\r\n  display: none;\r\n  position: fixed;\r\n  background-color: white;\r\n  background-position: top center;\r\n  background-repeat: no-repeat;\r\n  backdrop-filter: blur(20px);\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n}\r\n\r\nsection.popup .comment-modal {\r\n  position: absolute;\r\n  transform: translate(-50%, -50%) scale(1);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  background: white;\r\n  border: 2px solid black;\r\n  width: 90%;\r\n  height: 95vh;\r\n  padding: 24px;\r\n  top: 50%;\r\n  left: 50%;\r\n}\r\n\r\nsection.popup .comment-modal .close-comment-bn {\r\n  position: absolute;\r\n  right: 20px;\r\n  top: 20px;\r\n  width: 25px;\r\n  background-color: darkgoldenrod;\r\n  cursor: pointer;\r\n  transition: all 0.5s;\r\n}\r\n\r\nsection.popup .comment-modal .card-details {\r\n  margin-top: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\nsection.popup .comment-modal .card-details img {\r\n  width: 100%;\r\n  height: 500px;\r\n}\r\n\r\nsection.popup .comment-modal .card-details h3 {\r\n  color: black;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 22px;\r\n  line-height: 25px;\r\n}\r\n\r\nsection.popup .comment-modal .card-details .more-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  width: 250px;\r\n  text-align: center;\r\n  padding: 20px;\r\n}\r\n\r\nsection.popup .comment-modal .card-details .more-info li {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  font-size: 15px;\r\n}\r\n\r\nsection.popup .comment-modal .card-details .more-info li span {\r\n  width: 100%;\r\n  color: black;\r\n}\r\n\r\nsection.popup .comment-modal .card-details .more-info li span strong {\r\n  color: darkgoldenrod;\r\n}\r\n\r\nsection.popup .comment-modal .card-details .card-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\nsection.popup .comment-modal .card-details .card-comment h3 {\r\n  font-size: 16px;\r\n}\r\n\r\nsection.popup .comment-modal .card-details .card-comment .comment-area {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-content: flex-start;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 10px;\r\n  color: #fff;\r\n  gap: 20px;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area .comment-list {\r\n  box-shadow: 3px 2px 10px #fff;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area .comment-list p {\r\n  font-size: 14px;\r\n  letter-spacing: 2px;\r\n  padding: 10px;\r\n  background-color: whitesmoke;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area .comment-list p:nth-child(even) {\r\n  background-color: black;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  width: 300px;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form input,\r\n.comment-modal .card-details .card-comment .comment-area form textarea {\r\n  width: 100%;\r\n  padding: 8px 10px;\r\n  font-size: 14px;\r\n  border: 1px solid black;\r\n  border-radius: 10px;\r\n  background-color: white;\r\n  color: darkgoldenrod;\r\n}\r\n\r\n.card-comment .comment-area form input::placeholder,\r\n.card-comment .comment-area form textarea::placeholder {\r\n  color: darkgoldenrod;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form button {\r\n  width: 100%;\r\n  padding: 8px 20px;\r\n  font-size: 15px;\r\n  background: darkgoldenrod;\r\n  color: black;\r\n  border: 1px solid black;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n  transition: all 0.6s;\r\n}\r\n\r\n.comment-modal .card-details .card-comment .comment-area form button:hover {\r\n  background: black;\r\n  color: darkgoldenrod;\r\n}\r\n\r\n.footer {\r\n  background-color: #fff;\r\n  border-top: 1px solid #e0e0e0;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 10px;\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .menu-container {\r\n    display: none;\r\n  }\r\n\r\n  .logo-container {\r\n    display: inline-block;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
const body = document.querySelector('body');
body.addEventListener('click', () => {
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

  counter.innerText = `(${count * 2})`;
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
/* harmony import */ var _episodes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./episodes.js */ "./src/modules/episodes.js");
/* harmony import */ var _postlikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postlikes.js */ "./src/modules/postlikes.js");
/* eslint-disable linebreak-style */



const likepisode = async () => {
  const allepisodes = await (0,_episodes_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZ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QTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDZDVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWM0I7QUFDeUM7QUFDSDtBQUN0QztBQUNBO0FBQ0EsNEJBQTRCLHdEQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx5REFBUTtBQUNkO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3BCMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG9DQUFvQztBQUNyRDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXAxLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9jYXAxLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYXAxLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2FwMS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9jYXAxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhcDEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NhcDEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2FwMS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYXAxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2FwMS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NhcDEvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FwMS8uL3NyYy9tb2R1bGVzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vY2FwMS8uL3NyYy9tb2R1bGVzL2VwaXNvZGVsaWtlcy5qcyIsIndlYnBhY2s6Ly9jYXAxLy4vc3JjL21vZHVsZXMvZXBpc29kZXMuanMiLCJ3ZWJwYWNrOi8vY2FwMS8uL3NyYy9tb2R1bGVzL2xpa2VzLmpzIiwid2VicGFjazovL2NhcDEvLi9zcmMvbW9kdWxlcy9wb3N0bGlrZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkNvdXJpZXIgTmV3XFxcIiwgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcbiAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2UwZTBlMDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9fdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAzZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIG1hcmdpbjogMCAwIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcclxcbiAgcGFkZGluZzogMTBweCA0MHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBkYXJrZ29sZGVucm9kO1xcclxcbiAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9faXRlbSB7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIG1hcmdpbjogMTgwcHggYXV0bztcXHJcXG4gIGNvbHVtbi1nYXA6IDEwcHg7XFxyXFxuICByb3ctZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5jYXJkMSB7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLmNhcmQxIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjAlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5jYXJkMSAubGlzdGVwaXNvZHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLmNhcmQxIC5saXN0ZXBpc29kcyBoMiB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLmNhcmQxIC5saXN0ZXBpc29kcyBkaXYgYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLnBvcHVwIC5jb21tZW50LW1vZGFsIC5jbG9zZS1jb21tZW50LWJuIGkge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5jYXJkMSAubGlzdGVwaXNvZHMgZGl2IGJ1dHRvbiBpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAuY2FyZDEgLmxpc3RlcGlzb2RzIGRpdiBidXR0b24gaTpob3ZlcixcXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5jYXJkMSAubGlzdGVwaXNvZHMgZGl2IGJ1dHRvbiBpOmZvY3VzIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAuY2FyZDEgLmxpc3RlcGlzb2RzIGRpdiBidXR0b24gc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5jYXJkMSAuY2FyZDEtc3VtbSB7XFxyXFxuICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIHAge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcclxcbiAgcGFkZGluZzogMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5jYXJkMSAuY2FyZDEtc3VtbSBwIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMThweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAuY2FyZDEgLmNvbW1lbnQtYnRuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMTBweDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgcGFkZGluZzogOHB4IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE3MSwgMjE4LCAxNzEsIDAuNTQ4KTtcXHJcXG4gIGNvbG9yOiBkYXJrZ29sZGVucm9kO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzO1xcclxcbiAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAuY2FyZDEgLmNvbW1lbnQtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IGRhcmtnb2xkZW5yb2Q7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ09NTUVOVCBQT1BVUCAqL1xcclxcblxcclxcbnNlY3Rpb24ucG9wdXAge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLnBvcHVwIC5jb21tZW50LW1vZGFsIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogOTV2aDtcXHJcXG4gIHBhZGRpbmc6IDI0cHg7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5wb3B1cCAuY29tbWVudC1tb2RhbCAuY2xvc2UtY29tbWVudC1ibiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMjBweDtcXHJcXG4gIHRvcDogMjBweDtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dvbGRlbnJvZDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLnBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMge1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24ucG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyBoMyB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLnBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLm1vcmUtaW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLnBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLm1vcmUtaW5mbyBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24ucG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAubW9yZS1pbmZvIGxpIHNwYW4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24ucG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAubW9yZS1pbmZvIGxpIHNwYW4gc3Ryb25nIHtcXHJcXG4gIGNvbG9yOiBkYXJrZ29sZGVucm9kO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLnBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24ucG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IGgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIC5jb21tZW50LWxpc3Qge1xcclxcbiAgYm94LXNoYWRvdzogM3B4IDJweCAxMHB4ICNmZmY7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgLmNvbW1lbnQtbGlzdCBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgLmNvbW1lbnQtbGlzdCBwOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSBpbnB1dCxcXHJcXG4uY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSBmb3JtIHRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogOHB4IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGNvbG9yOiBkYXJrZ29sZGVucm9kO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIsXFxyXFxuLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIGZvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiBkYXJrZ29sZGVucm9kO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSBmb3JtIGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDhweCAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogZGFya2dvbGRlbnJvZDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSBidXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxuICBjb2xvcjogZGFya2dvbGRlbnJvZDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubWVudS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxvZ28tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLE1BQU07RUFDTixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QiwyQ0FBMkM7RUFDM0MsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNC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RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJDb3VyaWVyIE5ld1xcXCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlMGUwZTA7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX3RpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogM2VtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW46IDAgMCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogZGFya2dvbGRlbnJvZDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2l0ZW0ge1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBtYXJnaW46IDE4MHB4IGF1dG87XFxyXFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcbiAgcm93LWdhcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAuY2FyZDEge1xcclxcbiAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5jYXJkMSBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDYwJTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAuY2FyZDEgLmxpc3RlcGlzb2RzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5jYXJkMSAubGlzdGVwaXNvZHMgaDIge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY29udGFpbmVyIC5jYXJkMSAubGlzdGVwaXNvZHMgZGl2IGJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5wb3B1cCAuY29tbWVudC1tb2RhbCAuY2xvc2UtY29tbWVudC1ibiBpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAuY2FyZDEgLmxpc3RlcGlzb2RzIGRpdiBidXR0b24gaSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLmNhcmQxIC5saXN0ZXBpc29kcyBkaXYgYnV0dG9uIGk6aG92ZXIsXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAuY2FyZDEgLmxpc3RlcGlzb2RzIGRpdiBidXR0b24gaTpmb2N1cyB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLmNhcmQxIC5saXN0ZXBpc29kcyBkaXYgYnV0dG9uIHNwYW4ge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAuY2FyZDEgLmNhcmQxLXN1bW0ge1xcclxcbiAgcGFkZGluZzogMCA1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24ucG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyBwIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBsaW5lLWhlaWdodDogMjVweDtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvbnRhaW5lciAuY2FyZDEgLmNhcmQxLXN1bW0gcCB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLmNhcmQxIC5jb21tZW50LWJ0biB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDEwcHg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDhweCAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgxNzEsIDIxOCwgMTcxLCAwLjU0OCk7XFxyXFxuICBjb2xvcjogZGFya2dvbGRlbnJvZDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcXHJcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb250YWluZXIgLmNhcmQxIC5jb21tZW50LWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiBkYXJrZ29sZGVucm9kO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi8qIENPTU1FTlQgUE9QVVAgKi9cXHJcXG5cXHJcXG5zZWN0aW9uLnBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5wb3B1cCAuY29tbWVudC1tb2RhbCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IDk1dmg7XFxyXFxuICBwYWRkaW5nOiAyNHB4O1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24ucG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNsb3NlLWNvbW1lbnQtYm4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDIwcHg7XFxyXFxuICB0b3A6IDIwcHg7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtnb2xkZW5yb2Q7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIHtcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24ucG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLnBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgaDMge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5tb3JlLWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5tb3JlLWluZm8gbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLnBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLm1vcmUtaW5mbyBsaSBzcGFuIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLnBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLm1vcmUtaW5mbyBsaSBzcGFuIHN0cm9uZyB7XFxyXFxuICBjb2xvcjogZGFya2dvbGRlbnJvZDtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5wb3B1cCAuY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLnBvcHVwIC5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCBoMyB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24ucG9wdXAgLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1tb2RhbCAuY2FyZC1kZXRhaWxzIC5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSAuY29tbWVudC1saXN0IHtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAycHggMTBweCAjZmZmO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIC5jb21tZW50LWxpc3QgcCB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIC5jb21tZW50LWxpc3QgcDpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIGZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIGZvcm0gaW5wdXQsXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogZGFya2dvbGRlbnJvZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxcclxcbi5jYXJkLWNvbW1lbnQgLmNvbW1lbnQtYXJlYSBmb3JtIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogZGFya2dvbGRlbnJvZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbW9kYWwgLmNhcmQtZGV0YWlscyAuY2FyZC1jb21tZW50IC5jb21tZW50LWFyZWEgZm9ybSBidXR0b24ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA4cHggMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGJhY2tncm91bmQ6IGRhcmtnb2xkZW5yb2Q7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LW1vZGFsIC5jYXJkLWRldGFpbHMgLmNhcmQtY29tbWVudCAuY29tbWVudC1hcmVhIGZvcm0gYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgY29sb3I6IGRhcmtnb2xkZW5yb2Q7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1lbnUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2dvLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBlcGlzb2Rlc3RhdHMgZnJvbSAnLi9tb2R1bGVzL2NvbnRlbnQuanMnO1xuaW1wb3J0IGxpa2VwaXNvZGUgZnJvbSAnLi9tb2R1bGVzL2xpa2VzLmpzJztcblxuZXBpc29kZXN0YXRzKCk7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbGlrZXBpc29kZSgpO1xufSk7XG4iLCJpbXBvcnQgZmV0Y2hBUElkYXRhIGZyb20gJy4vZXBpc29kZXMuanMnO1xuaW1wb3J0IGVwaXNvZGVsaWtlcyBmcm9tICcuL2VwaXNvZGVsaWtlcy5qcyc7XG5cbmNvbnN0IGNvbW1wb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cCcpO1xubGV0IGNvdW50ID0gMDtcbmNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQnKTtcbmNvbnN0IGVwaXNvZGVjYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbmxldCBjdXJyZW50VmFsdWUgPSAwO1xuY29uc3QgYXBwSWQgPSAnS005NjBoMzZNRUFaRjVETzlXdmInO1xuY29uc3QgdXJsMSA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2FwcElkfS9jb21tZW50c2A7XG5cbmNvbnN0IGdldGNvbW0gPSBhc3luYyAoaXRlbUlkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBmZXRjaChgJHt1cmwxfT9pdGVtX2lkPSR7aXRlbUlkfWApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjb21tZW50cy5qc29uKCk7XG4gICAgY29uc3Qgc3RhcnRjb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW0xJyk7XG4gICAgY29uc3QgbGlzdEFsbENvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtbGlzdCcpO1xuICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIHN0YXJ0Y29tbWVudC5pbm5lckhUTUwgPSBgQ29tbWVudHMoJHtkYXRhLmxlbmd0aH0pYDtcbiAgICAgIGxpc3RBbGxDb21tZW50cy5pbm5lckhUTUwgPSAnJztcbiAgICAgIGRhdGEuZm9yRWFjaCgoY29tbSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtdG9jb21tZW50ID0gYCAgICAgICAgXG4gICAgICAgIDxwPiR7Y29tbS5jcmVhdGlvbl9kYXRlfSAke2NvbW0udXNlcm5hbWV9OiAke2NvbW0uY29tbWVudH08L3A+XG4gICAgICBgO1xuICAgICAgICBsaXN0QWxsQ29tbWVudHMuaW5uZXJIVE1MICs9IGl0ZW10b2NvbW1lbnQ7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRjb21tZW50LmlubmVySFRNTCA9ICdDb21tZW50cygwKSc7XG4gICAgICBjb25zdCBub0NvbW1lbnQgPSBgXG4gICAgICA8cD5ObyBjb21tZW50IG9uIHRoaXMgcG9zdDwvcD5cbiAgICAgIGA7XG4gICAgICBsaXN0QWxsQ29tbWVudHMuaW5uZXJIVE1MID0gbm9Db21tZW50O1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1ZXN0IGVycm9yOiAnLCBlcnIpO1xuICB9XG59O1xuXG5jb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChpdGVtSWQpID0+IHtcbiAgY29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlcm5hbWUnKTtcbiAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VybWFzc2FnZScpO1xuXG4gIGlmICh1c2VybmFtZS52YWx1ZSAhPT0gJycgfHwgY29tbWVudC52YWx1ZSAhPT0gJycpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwxLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGl0ZW1faWQ6IGl0ZW1JZCxcbiAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUudmFsdWUsXG4gICAgICAgICAgY29tbWVudDogY29tbWVudC52YWx1ZSxcbiAgICAgICAgfSksXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS50ZXh0KCk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgdXNlcm5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgY29tbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICBnZXRjb21tKGl0ZW1JZCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1ZXN0IGVycm9yOiAnLCBlcnIpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBjbG9zZXBvcHVwTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGNsb3NlYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlJyk7XG4gIGNsb3NlYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29tbXBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xufTtcblxuY29uc3Qgc2hvd2NvbW1wb3B1cCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZXBpc29kZUFycmF5ID0gYXdhaXQgZmV0Y2hBUElkYXRhKCk7XG4gIGNvbnN0IGNvbW1lbnRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnQtYnRuJyk7XG4gIGNvbW1lbnRCdG5zLmZvckVhY2goKGNvbW1lbnRCdG4pID0+IHtcbiAgICBjb25zdCBidG5JZCA9IGNvbW1lbnRCdG4uZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIGNvbnN0IGVwaXNvZGVkZXQgPSBlcGlzb2RlQXJyYXlbYnRuSWRdO1xuICAgIGNvbW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBnZXRjb21tKGJ0bklkKTtcbiAgICAgIGNvbnN0IG1vZGFsID0gYCAgICAgICAgICBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LW1vZGFsXCI+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNsb3NlXCIgY2xhc3M9XCJjbG9zZS1jb21tZW50LWJuXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEteG1hcmtcIj48L2k+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWRldGFpbHNcIj5cbiAgICAgICAgPGltZyBzcmM9XCIke2VwaXNvZGVkZXQuaW1hZ2Uub3JpZ2luYWx9XCIgYWx0PVwiQ2FyZCBvcmlnaW5hbCBpbWFnZVwiIC8+XG4gICAgICAgIDxoMz4ke2VwaXNvZGVkZXQubmFtZX08L2gzPlxuICAgICAgICA8dWwgY2xhc3M9XCJtb3JlLWluZm9cIj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3Bhbj48c3Ryb25nPiBSdW50aW1lIDwvc3Ryb25nPjogJHtlcGlzb2RlZGV0LnJ1bnRpbWV9IG1pbnV0ZXM8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHAgY2xhc3M9XCJzdW1tYXJ5XCI+JHtlcGlzb2RlZGV0LnN1bW1hcnl9PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb21tZW50XCI+XG4gICAgICAgICAgPGgzIGNsYXNzPVwiY29tbTFcIj48L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWFyZWFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWxpc3RcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGZvcm0gYXV0b2NvbXBsZXRlPVwib2ZmXCIgaWQ9XCJjb21tZW50LWZvcm1cIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ1c2VybmFtZVwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIi8+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZVwiIGNsYXNzPVwidXNlcm1hc3NhZ2VcIiBpZD1cIlwiIGNvbHM9XCIzMFwiIHJvd3M9XCI1XCIgcGxhY2Vob2xkZXI9XCJZb3VyIEluc2lnaHRcIiA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5ldy1jb21tZW50XCIgaWQ9XCIke2J0bklkfVwiIHR5cGU9XCJidXR0b25cIj5Db21tZW50PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgICBgO1xuXG4gICAgICBjb21tcG9wdXAuaW5uZXJIVE1MID0gbW9kYWw7XG4gICAgICBjb21tcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBjbG9zZXBvcHVwTW9kYWwoKTtcblxuICAgICAgY29uc3QgY21udEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctY29tbWVudCcpO1xuICAgICAgY21udEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcG9zdENvbW1lbnQoYnRuSWQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy8gUmVuZGVyIGFsbCBlcGlzb2RlcyBjYXJkXG5jb25zdCBlcGlzb2Rlc3RhdHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGVwaXNvZGVBcnJheSA9IGF3YWl0IGZldGNoQVBJZGF0YSgpO1xuICBlcGlzb2RlQXJyYXkuc2xpY2UoMCwgMTApLmZvckVhY2goKGVwaXNvZGUpID0+IHtcbiAgICBlcGlzb2RlbGlrZXMoKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGN1cnJlbnRWYWx1ZSA9IHJlcztcbiAgICAgIGxldCBhc3NpZ25MaWtlID0gMDtcblxuICAgICAgY29uc3QgbGlrZSA9IGN1cnJlbnRWYWx1ZS5maWx0ZXIoXG4gICAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50Lml0ZW1faWQgPT09IGVwaXNvZGUubmFtZSxcbiAgICAgICk7XG4gICAgICBpZiAobGlrZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYXNzaWduTGlrZSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhc3NpZ25MaWtlID0gbGlrZVswXS5saWtlcztcbiAgICAgIH1cbiAgICAgIGVwaXNvZGVjYXJkcy5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZDFcIiBpZD1cIiR7ZXBpc29kZUFycmF5LmluZGV4T2YoZXBpc29kZSl9XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIke2VwaXNvZGUuaW1hZ2UubWVkaXVtfVwiIGFsdD1cIiR7ZXBpc29kZS5uYW1lfVwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RlcGlzb2RzXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPiR7YCR7ZXBpc29kZS5uYW1lLnN1YnN0cmluZygwLCAxNSl9YH08L2gyPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJsaWtlXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10aHVtYnMtdXBcIj48L2k+PHNwYW4gaWQ9XCJjb3VudC1saWtlXCI+JHthc3NpZ25MaWtlfTwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkMS1zdW1tXCI+ICAgICAgICBcbiAgICAgICAgICAgIDxwPiR7YCR7ZXBpc29kZS5zdW1tYXJ5LnN1YnN0cmluZygwLCA4MCl9IC4uLmB9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjb21tZW50LWJ0blwiIGlkPVwiJHtlcGlzb2RlQXJyYXkuaW5kZXhPZihcbiAgICBlcGlzb2RlLFxuICApfVwiPlJlYWQgbW9yZSAmIGNvbW1lbnRzPC9idXR0b24+XG4gICAgICAgIDwvZGl2PmA7XG4gICAgICBzaG93Y29tbXBvcHVwKCk7XG4gICAgfSk7XG5cbiAgICBjb3VudCArPSAxO1xuICB9KTtcblxuICBjb3VudGVyLmlubmVyVGV4dCA9IGAoJHtjb3VudCAqIDJ9KWA7XG4gIGNvdW50ZXIuc3R5bGUuY29sb3IgPSAncmVkJztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVwaXNvZGVzdGF0cztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5jb25zdCBlcGlzb2RlbGlrZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgbGV0IGl0ZW1zID0gW107XHJcbiAgZmV0Y2goXHJcbiAgICAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvM0pDYmYwMWduWUh1bWRKMlVXRk0vbGlrZXMnLFxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpdGVtcyA9IHJlcztcclxuICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfSk7XHJcbiAgcmV0dXJuIGl0ZW1zO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXBpc29kZWxpa2VzO1xyXG4iLCJjb25zdCBmZXRjaEFQSWRhdGEgPSBhc3luYyAoKSA9PiB7XG4gIGxldCBlcGlzb2RlcyA9IFtdO1xuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFzb25zLzEvZXBpc29kZXMnKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgZXBpc29kZXMgPSByZXNwb25zZTtcbiAgICB9KTtcbiAgcmV0dXJuIGVwaXNvZGVzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hBUElkYXRhOyIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5pbXBvcnQgZmV0Y2hBUElkYXRhIGZyb20gJy4vZXBpc29kZXMuanMnO1xyXG5pbXBvcnQgcG9zdExpa2UgZnJvbSAnLi9wb3N0bGlrZXMuanMnO1xyXG5cclxuY29uc3QgbGlrZXBpc29kZSA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBhbGxlcGlzb2RlcyA9IGF3YWl0IGZldGNoQVBJZGF0YSgpO1xyXG5cclxuICBjb25zdCBidG5hZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZScpO1xyXG4gIGNvbnN0IHNwYW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvdW50LWxpa2UnKTtcclxuICBidG5hZGQuZm9yRWFjaCgoYSwgaSkgPT4ge1xyXG4gICAgbGV0IG5ldzExMSA9IEpTT04ucGFyc2Uoc3BhbnNbaV0uaW5uZXJIVE1MKTtcclxuXHJcbiAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBwb3N0TGlrZShhbGxlcGlzb2Rlc1tpXS5uYW1lKTtcclxuICAgICAgbmV3MTExICs9IDE7XHJcbiAgICAgIHNwYW5zW2ldLmlubmVySFRNTCA9IG5ldzExMTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGlrZXBpc29kZTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmNvbnN0IHBvc3RMaWtlID0gKGVwaXNvZGUpID0+IHtcclxuICBmZXRjaChcclxuICAgICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8zSkNiZjAxZ25ZSHVtZEoyVVdGTS9saWtlcycsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGl0ZW1faWQ6IGVwaXNvZGUsXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9zdExpa2U7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==