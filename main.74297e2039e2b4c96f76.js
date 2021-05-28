(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n  <app-user-list>\n    \n  </app-user-list>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hover-title/hover-title.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hover-title/hover-title.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <ng-content >\n\n    </ng-content>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table (mouseleave)=\"onMouseTableOut()\" (click)=\"onClick()\">\n    <thead>\n      <tr>\n        <th>id</th>\n        <th>name</th>\n        <th>username</th>\n        <th>address</th>\n      </tr>\n    </thead>\n    <tbody\n    (mouseleave)=\"onMouseOut()\"\n    (mouseenter)=\"onMouseEnter($event)\">\n    <!-- (mouseout)=\"onMouseOut()\"\n    (mouseover)=\"onMouseEnter()\"> -->\n        <app-user-row *ngFor=\"let user of this.users; index as i\"\n         (mousemove)=\"onHover($event, user)\" [user]=\"user\">\n        </app-user-row>\n        <!-- <tr app-user-row *ngFor=\"let user of this.users\" [user]=\"user\"></tr> -->\n    </tbody>\n  </table>\n  <app-hover-title *ngIf=\"currentHoverUser\" #titleElement [data]=\"currentHoverUser\" [top]=\"titleTop\" [left]=\"titleLeft\">\n    <div>{{currentHoverUser.address?.street}}</div>\n    <div>{{currentHoverUser.address?.suite}}</div>\n    <div>{{currentHoverUser.address?.city}}</div>\n  </app-hover-title>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-row/address-cell/address-cell.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-row/address-cell/address-cell.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    {{address.street}}\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-row/user-row.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-row/user-row.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<td>\n    {{user.id}}\n</td>\n<td>\n    {{user.name}}\n</td>\n<td>\n    {{user.username}}\n</td>\n<app-address-cell [address]=\"user.address\">\n\n</app-address-cell>");

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 8px;\n  }\n\n  .toolbar #youtube-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover,\n  .toolbar #youtube-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\n  svg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #125699;\n  }\n\n  .terminal {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer a {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n  /* Responsive Styles */\n\n  @media screen and (max-width: 767px) {\n\n    .card-container > *:not(.circle-link) ,\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwSkFBMEo7SUFDMUosZUFBZTtJQUNmLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLGtDQUFrQztFQUNwQzs7RUFFQTs7Ozs7O0lBTUUsYUFBYTtFQUNmOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsT0FBTztFQUNUOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0lBQ1osY0FBYztFQUNoQjs7RUFFQTs7SUFFRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSwyQkFBMkI7SUFDM0IsMENBQTBDO0VBQzVDOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtFQUNaOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTs7O0lBR0UsY0FBYztJQUNkLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxvRUFBb0U7SUFDcEUsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysd0VBQXdFO0lBQ3hFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLCtCQUErQjtJQUMvQiwyQ0FBMkM7RUFDN0M7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLDhEQUE4RDtJQUM5RCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtJQUFrSTtFQUNwSTs7RUFFQTtJQUNFLDhEQUE4RDtJQUM5RCxnQ0FBZ0M7SUFDaEMsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUdBLHNCQUFzQjs7RUFDdEI7O0lBRUU7O01BRUUsV0FBVztJQUNiOztJQUVBO01BQ0UsWUFBWTtNQUNaLGFBQWE7SUFDZjs7SUFFQTtNQUNFLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLFlBQVk7TUFDWix3QkFBd0I7SUFDMUI7RUFDRjs7RUFFQTtJQUNFO01BQ0UsYUFBYTtNQUNiLGtCQUFrQjtJQUNwQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIH1cblxuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2IHtcbiAgICBtYXJnaW46IDhweCAwO1xuICB9XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLnNwYWNlciB7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gIC50b29sYmFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgLnRvb2xiYXIgaW1nIHtcbiAgICBtYXJnaW46IDAgMTZweDtcbiAgfVxuXG4gIC50b29sYmFyICN0d2l0dGVyLWxvZ28ge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDAgOHB4O1xuICB9XG5cbiAgLnRvb2xiYXIgI3lvdXR1YmUtbG9nbyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMCAxNnB4O1xuICB9XG5cbiAgLnRvb2xiYXIgI3R3aXR0ZXItbG9nbzpob3ZlcixcbiAgLnRvb2xiYXIgI3lvdXR1YmUtbG9nbzpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiA4MnB4IGF1dG8gMzJweDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICBzdmcubWF0ZXJpYWwtaWNvbnMge1xuICAgIGhlaWdodDogMjRweDtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gIHN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxuXG4gIC5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcbiAgICBmaWxsOiAjODg4O1xuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5cbiAgLmNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW46IDAgOHB4IDE2cHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgfVxuXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cblxuICAuY2FyZC5jYXJkLXNtYWxsIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE2OHB4O1xuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xuICAgIGZpbGw6IHJnYigxMDUsIDEwMywgMTAzKTtcbiAgfVxuXG4gIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtaW4td2lkdGg6IDMwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICB9XG5cbiAgc3ZnI3JvY2tldCB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0xMHB4O1xuICAgIHRvcDogLTI0cHg7XG4gIH1cblxuICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxODBweDtcbiAgICB6LWluZGV4OiAtMTA7XG4gIH1cblxuICBhLFxuICBhOnZpc2l0ZWQsXG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMTk3NmQyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMTI1Njk5O1xuICB9XG5cbiAgLnRlcm1pbmFsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XG4gIH1cblxuICAudGVybWluYWw6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDIwMjIgXFwyMDIyIFxcMjAyMlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XG4gICAgY29sb3I6ICNjMmMzYzQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDE0cHggMDtcbiAgICB0ZXh0LWluZGVudDogNHB4O1xuICB9XG5cbiAgLnRlcm1pbmFsIHByZSB7XG4gICAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5jaXJjbGUtbGluayB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcbiAgfVxuXG4gIC5jaXJjbGUtbGluazpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG5cbiAgZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG5cbiAgZm9vdGVyIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5naXRodWItc3Rhci1iYWRnZSB7XG4gICAgY29sb3I6ICMyNDI5MmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LDMxLDM1LC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2ZhZmJmYywjZWZmM2Y2IDkwJSk7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2w7XG4gIH1cblxuICAuZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmMGYzZjYsI2U2ZWJmMSA5MCUpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNywzMSwzNSwuMzUpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xuICB9XG5cbiAgLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICB9XG5cbiAgc3ZnI2Nsb3VkcyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogLTE2MHB4O1xuICAgIGxlZnQ6IC0yMzBweDtcbiAgICB6LWluZGV4OiAtMTA7XG4gICAgd2lkdGg6IDE5MjBweDtcbiAgfVxuXG5cbiAgLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblxuICAgIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluaykgLFxuICAgIC50ZXJtaW5hbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBtYXJnaW46IDhweCAwO1xuICAgIH1cblxuICAgIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDcycHg7XG4gICAgfVxuXG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgICByaWdodDogMTIwcHg7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICB9Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-test';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
/* harmony import */ var _user_list_user_row_user_row_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-list/user-row/user-row.component */ "./src/app/user-list/user-row/user-row.component.ts");
/* harmony import */ var _user_list_user_row_address_cell_address_cell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-list/user-row/address-cell/address-cell.component */ "./src/app/user-list/user-row/address-cell/address-cell.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _hover_title_hover_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hover-title/hover-title.component */ "./src/app/hover-title/hover-title.component.ts");










let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"],
            _user_list_user_row_user_row_component__WEBPACK_IMPORTED_MODULE_6__["UserRowComponent"],
            _user_list_user_row_address_cell_address_cell_component__WEBPACK_IMPORTED_MODULE_7__["AddressCellComponent"],
            _hover_title_hover_title_component__WEBPACK_IMPORTED_MODULE_9__["HoverTitleComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/domain-model/Address.ts":
/*!*****************************************!*\
  !*** ./src/app/domain-model/Address.ts ***!
  \*****************************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
class Address {
    constructor(street, suite, city) {
        this.street = street;
        this.suite = suite;
        this.city = city;
    }
}


/***/ }),

/***/ "./src/app/domain-model/user.ts":
/*!**************************************!*\
  !*** ./src/app/domain-model/user.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(id, name, username, address) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.address = address;
    }
}


/***/ }),

/***/ "./src/app/hover-title/hover-title.component.css":
/*!*******************************************************!*\
  !*** ./src/app/hover-title/hover-title.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n    /* top: {{top}} */\n    position: absolute;\n    left: 0;\n    top: 0;\n    background: #fff;\n    padding: 10px;\n    border: 1px solid #000;\n    transition: .1s top;\n    white-space: nowrap;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG92ZXItdGl0bGUvaG92ZXItdGl0bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaG92ZXItdGl0bGUvaG92ZXItdGl0bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAvKiB0b3A6IHt7dG9wfX0gKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgdHJhbnNpdGlvbjogLjFzIHRvcDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/hover-title/hover-title.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hover-title/hover-title.component.ts ***!
  \******************************************************/
/*! exports provided: HoverTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoverTitleComponent", function() { return HoverTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");



let HoverTitleComponent = class HoverTitleComponent {
    constructor() { }
    setTop(value) {
        this.top = value;
    }
    setLeft(value) {
        this.left = value;
    }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HoverTitleComponent.prototype, "data", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HoverTitleComponent.prototype, "top", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HoverTitleComponent.prototype, "left", void 0);
HoverTitleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hover-title',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./hover-title.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hover-title/hover-title.component.html")).default,
        host: {
            '[style.top.px]': 'top',
            '[style.left.px]': 'left',
            '[@show]': "'visible'",
            '[@resize]': "data"
        },
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('show', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateX(50px)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateX(0px)',
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter, :leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.1s')
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('resize', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* <=> *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.15s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            height: '*',
                            width: '*'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('div', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.15s linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, offset: 1 })
                            ]))
                        ])
                    ])
                ])
            ])
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./hover-title.component.css */ "./src/app/hover-title/hover-title.component.css")).default]
    })
], HoverTitleComponent);



/***/ }),

/***/ "./src/app/user-list/user-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-list/user-list.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host{\n    position: relative;\n}\ntable {\n    border-collapse: collapse;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG50YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/user-list/user-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hover_title_hover_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hover-title/hover-title.component */ "./src/app/hover-title/hover-title.component.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");




let UserListComponent = class UserListComponent {
    constructor(usersService) {
        this.usersService = usersService;
        this.titleLeft = 0;
        this.titleTop = 0;
        this.currentHoverUser = null;
    }
    getUsers() {
        this.usersService.getUsers().subscribe((users) => {
            this.users = users;
        });
    }
    onHover(event, user) {
        let target = event.currentTarget;
        this.titleLeft = event.x;
        this.titleTop = target.offsetTop + target.offsetHeight;
        this.currentHoverUser = user;
    }
    onMouseEnter(event) {
        this.titleLeft = event.x;
        this.titleTop = event.y;
    }
    onMouseOut() {
    }
    onMouseTableOut() {
        this.currentHoverUser = null;
    }
    onClick() {
        var _a;
        (_a = this.titleElement) === null || _a === void 0 ? void 0 : _a.setTop(0);
    }
    ngOnInit() {
        this.getUsers();
    }
    ngAfterViewInit() {
    }
};
UserListComponent.ctorParameters = () => [
    { type: _users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_hover_title_hover_title_component__WEBPACK_IMPORTED_MODULE_2__["HoverTitleComponent"])
], UserListComponent.prototype, "titleElement", void 0);
UserListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-list.component.css */ "./src/app/user-list/user-list.component.css")).default]
    })
], UserListComponent);



/***/ }),

/***/ "./src/app/user-list/user-row/address-cell/address-cell.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/user-list/user-row/address-cell/address-cell.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host{\n    display: table-cell;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1saXN0L3VzZXItcm93L2FkZHJlc3MtY2VsbC9hZGRyZXNzLWNlbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbGlzdC91c2VyLXJvdy9hZGRyZXNzLWNlbGwvYWRkcmVzcy1jZWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/user-list/user-row/address-cell/address-cell.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/user-list/user-row/address-cell/address-cell.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddressCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressCellComponent", function() { return AddressCellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AddressCellComponent = class AddressCellComponent {
    constructor() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddressCellComponent.prototype, "address", void 0);
AddressCellComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-address-cell',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./address-cell.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-row/address-cell/address-cell.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./address-cell.component.css */ "./src/app/user-list/user-row/address-cell/address-cell.component.css")).default]
    })
], AddressCellComponent);



/***/ }),

/***/ "./src/app/user-list/user-row/user-row.component.css":
/*!***********************************************************!*\
  !*** ./src/app/user-list/user-row/user-row.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n    display: table-row;\n}\ntd {\n    padding: 10px 0;;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1saXN0L3VzZXItcm93L3VzZXItcm93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC91c2VyLWxpc3QvdXNlci1yb3cvdXNlci1yb3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XG59XG50ZCB7XG4gICAgcGFkZGluZzogMTBweCAwOztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/user-list/user-row/user-row.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user-list/user-row/user-row.component.ts ***!
  \**********************************************************/
/*! exports provided: UserRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRowComponent", function() { return UserRowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UserRowComponent = class UserRowComponent {
    constructor() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserRowComponent.prototype, "user", void 0);
UserRowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-row',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-row.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-row/user-row.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-row.component.css */ "./src/app/user-list/user-row/user-row.component.css")).default]
    })
], UserRowComponent);



/***/ }),

/***/ "./src/app/users.service.ts":
/*!**********************************!*\
  !*** ./src/app/users.service.ts ***!
  \**********************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _domain_model_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domain-model/user */ "./src/app/domain-model/user.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _domain_model_Address__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domain-model/Address */ "./src/app/domain-model/Address.ts");






let UsersService = class UsersService {
    constructor(http) {
        this.http = http;
    }
    getUsers() {
        return this.http.get('https://jsonplaceholder.typicode.com/users')
            .pipe(
        // first()
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(item => {
            return item.map((el) => new _domain_model_user__WEBPACK_IMPORTED_MODULE_3__["User"](el.id, el.name, el.username, new _domain_model_Address__WEBPACK_IMPORTED_MODULE_5__["Address"](el.address.street, el.address.suite, el.address.city)));
        }));
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UsersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsersService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/angular-test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.74297e2039e2b4c96f76.js.map