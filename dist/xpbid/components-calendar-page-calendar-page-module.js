(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-calendar-page-calendar-page-module"],{

/***/ "./src/app/components/calendar-page/calendar-page.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/calendar-page/calendar-page.module.ts ***!
  \******************************************************************/
/*! exports provided: CalendarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageModule", function() { return CalendarPageModule; });
/* harmony import */ var _shared_pipes_short_time_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/_pipes/short-time.pipe */ "./src/app/shared/_pipes/short-time.pipe.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/calendar/calendar.component */ "./src/app/components/calendar-page/components/calendar/calendar.component.ts");
/* harmony import */ var _shared_pipes_date_suffix_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/_pipes/date-suffix.pipe */ "./src/app/shared/_pipes/date-suffix.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"],
    },
];
var CalendarPageModule = /** @class */ (function () {
    function CalendarPageModule() {
    }
    CalendarPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"],
                _shared_pipes_date_suffix_pipe__WEBPACK_IMPORTED_MODULE_8__["DateSuffix"],
                _shared_pipes_short_time_pipe__WEBPACK_IMPORTED_MODULE_0__["ShortTime"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__["adapterFactory"]
                }),
            ]
        })
    ], CalendarPageModule);
    return CalendarPageModule;
}());



/***/ }),

/***/ "./src/app/shared/_pipes/date-suffix.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/_pipes/date-suffix.pipe.ts ***!
  \***************************************************/
/*! exports provided: DateSuffix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateSuffix", function() { return DateSuffix; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DateSuffix = /** @class */ (function () {
    function DateSuffix() {
    }
    DateSuffix.prototype.transform = function (value) {
        var suffix = 'th', day = value;
        if (day === '1' || day === '21' || day === '31') {
            suffix = 'st';
        }
        else if (day === '2' || day === '22') {
            suffix = 'nd';
        }
        else if (day === '3' || day === '23') {
            suffix = 'rd';
        }
        return suffix;
    };
    DateSuffix = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'dateSuffix' })
    ], DateSuffix);
    return DateSuffix;
}());



/***/ }),

/***/ "./src/app/shared/_pipes/short-time.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/_pipes/short-time.pipe.ts ***!
  \**************************************************/
/*! exports provided: ShortTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortTime", function() { return ShortTime; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShortTime = /** @class */ (function () {
    function ShortTime() {
    }
    ShortTime.prototype.transform = function (value, arg1) {
        var eventDate = new Date(value);
        var calendarDate = new Date(arg1);
        var eventDateony = eventDate.getDate() + '-' + eventDate.getMonth() + '-' + eventDate.getFullYear();
        var calendarDateonly = calendarDate.getDate() + '-' + calendarDate.getMonth() + '-' + calendarDate.getFullYear();
        // console.log(' eventDateony ', eventDateony);
        // console.log(' calendarDateonly ', calendarDateonly);
        if (eventDateony === calendarDateonly) {
            var hours = eventDate.getHours();
            var minutes = eventDate.getMinutes();
            var ampm = hours >= 12 ? 'p' : 'a';
            hours = hours % 12;
            hours = hours ? hours : 12;
            minutes = (minutes < 10) ? 0 : minutes;
            return hours.toString() + ((minutes > 0) ? (':' + minutes.toString()) : '') + ampm;
        }
        else {
            return;
        }
    };
    ShortTime = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'shortTime' })
    ], ShortTime);
    return ShortTime;
}());



/***/ })

}]);
//# sourceMappingURL=components-calendar-page-calendar-page-module.js.map