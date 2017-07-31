webpackJsonp([2,8],{

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_routing_module__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_component__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__timesheet_timesheet_component__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__timesheet_calendar_service__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__payroll_payroll_component__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__ = __webpack_require__(651);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__dashboard_routing_module__["a" /* DashboardRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_6__timesheet_timesheet_component__["a" /* TimesheetComponent */], __WEBPACK_IMPORTED_MODULE_8__payroll_payroll_component__["a" /* PayrollComponent */], __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__["a" /* ProfileComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_7__timesheet_calendar_service__["a" /* CalendarService */], __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["b" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["b" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidenav_menu__ = __webpack_require__(674);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(_menuService) {
        this._menuService = _menuService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this._menuService.updateMenuByRoutes(__WEBPACK_IMPORTED_MODULE_2__sidenav_menu__["a" /* PAGES_MENU */]);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(697),
        styles: [__webpack_require__(683)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme__["b" /* BaMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme__["b" /* BaMenuService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayrollComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PayrollComponent = (function () {
    //weekday:any;
    function PayrollComponent(appser) {
        this.appser = appser;
        // EmployeeID:any;
        this.isData = true;
        this.payrolls = [
            { id: 1, types: "Weekly" },
            { id: 2, types: "Bi-Weekly" },
            { id: 3, types: "Monthly" }
        ];
        this.data = {
            payYear: (new Date().getFullYear()),
            payMonth: "",
            paytype: "Weekly"
        };
        //      this.data={
        //        payRollYear:undefined,
        // payMonth:"",
        // paytype:""
        //      };
        this.OutputData = [{
                EmployeeID: undefined,
                EmployeeName: "",
                BasePay: undefined,
                BusinessUnit: "",
                totalHours: undefined
            }];
        this.years = [];
        this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.dateValue = new Date().getFullYear();
        this.payRollYear = (new Date().getFullYear()).toString();
        this.selectedEntry = "Weekly";
    }
    PayrollComponent.prototype.onSelectionChange = function (payroll) {
        //  console.log(payroll);
        //console.log(payroll);
        this.selectedEntry = payroll;
        if (this.selectedEntry == "Weekly")
            this.display(this.data.payYear, "Weekly");
        if (this.selectedEntry == "Monthly")
            this.display(this.data.payYear, "Monthly");
        if (this.selectedEntry == "Bi-Weekly")
            this.display(this.data.payYear, "Bi-Weekly");
    };
    PayrollComponent.prototype.ngOnInit = function () {
        for (var i = this.dateValue; i > this.dateValue - 3; i--) {
            this.years.push({ 'year': i });
        }
        this.display(this.data.payYear, "Weekly");
    };
    PayrollComponent.prototype.individualPayslip = function (EmployeeID) {
        alert("generate individula payslip " + EmployeeID);
        // this.appser.url = "http://localhost:8000/timesheet/individualpayslip";
        // this.appser.data = EmployeeID;
        // this.appser.headers = "Content-Type','application/json; charset=utf-8";
        // this.appser.postService().subscribe(res => {
        //   res
        //   console.log(res);
        // });
    };
    PayrollComponent.prototype.getData = function (data) {
        var _this = this;
        //console.log(data);
        // alert("generate payroll");
        this.appser.url = "http://localhost:8000/timesheet/generatePayRoll";
        this.appser.data = data;
        this.appser.postService().subscribe(function (res) {
            // this.sampleData = res;
            //console.log(res);
            _this.sampleData = (res);
            var hai = _this.sampleData.PayRollArray;
            var statusCode = _this.sampleData.StatusCode;
            _this.OutputData = [];
            // console.log(statusCode);
            if (statusCode == "00") {
                _this.isData = false;
                //     console.log("no data");
                //  
                (hai).forEach(function (element) {
                    _this.OutputData.push({
                        EmployeeID: element.EmployeeID,
                        EmployeeName: element.EmployeeName,
                        BasePay: element.BasePay,
                        totalHours: element.totalHours,
                        BusinessUnit: element.BusinessUnit,
                    });
                });
            }
            else if (statusCode == "01") {
                //console.log("no data");
                _this.isData = true;
            }
        });
    };
    PayrollComponent.prototype.payroll_year = function (payRollYear) {
        //console.log(payRollYear);
        this.data.payYear = payRollYear;
        if (this.selectedEntry == "Weekly")
            this.display(this.data.payYear, "Weekly");
        if (this.selectedEntry == "Monthly")
            this.display(this.data.payYear, "Monthly");
        if (this.selectedEntry == "Bi-Weekly")
            this.display(this.data.payYear, "Bi-Weekly");
    };
    PayrollComponent.prototype.display = function (payRollYear, type) {
        var yearSelected = payRollYear;
        var t;
        this.date = new Date();
        this.todate = this.date.getDate();
        this.tomonth = this.date.getMonth();
        this.toyear = this.date.getFullYear();
        this.day = this.date.getDay();
        if (type == "Monthly") {
            if (yearSelected == this.date.getFullYear()) {
                this.populate = [];
                for (var i = this.tomonth; i >= 0; i--) {
                    this.populatedValues = this.months[i] + "-" + this.todate + "-" + this.toyear;
                    this.todate = 1;
                    this.populate.push({ 'month': this.populatedValues });
                }
                this.data.payMonth = this.populate[0]["month"];
                //console.log(this.data.payMonth)
            }
            else {
                this.populate = [];
                for (i = 11; i >= 0; i--) {
                    this.populatedValues = this.months[i] + "-1-" + yearSelected;
                    this.populate.push({ 'month': this.populatedValues });
                }
                this.data.payMonth = this.populate[0]["month"];
            }
        }
        if (type == "Weekly") {
            var temp;
            this.populate = [];
            if (yearSelected == this.date.getFullYear()) {
                for (i = this.tomonth; i >= 0; i--) {
                    if (i <= this.tomonth - 1) {
                        this.date.setDate(0);
                    }
                    this.date.setDate(1);
                    while (this.date.getDay() !== 1) {
                        this.date.setDate(this.date.getDate() + 1);
                    }
                    while (this.date.getMonth() === i) {
                        temp = this.date.getDate();
                        this.populatedValues = this.months[i] + "-" + temp + "-" + this.toyear;
                        this.populate.push({ 'month': this.populatedValues });
                        this.date.setDate(this.date.getDate() + 7);
                    }
                    this.date.setDate(0);
                }
                this.data.payMonth = this.populate[0]["month"];
                //console.log(this.data.payMonth)
                //this.date1=this.date;
            }
            else {
                this.populate = [];
                this.date.setFullYear(yearSelected);
                this.date.setMonth(11);
                //this.date.setDate(1);
                for (i = 11; i >= 0; i--) {
                    if (i <= 10) {
                        this.date.setDate(0);
                    }
                    this.date.setDate(1);
                    while (this.date.getDay() !== 1) {
                        this.date.setDate(this.date.getDate() + 1);
                    }
                    while (this.date.getMonth() === i) {
                        temp = this.date.getDate();
                        this.populatedValues = this.months[i] + "-" + temp + "-" + yearSelected;
                        this.populate.push({ 'month': this.populatedValues });
                        this.date.setDate(this.date.getDate() + 7);
                    }
                    this.date.setDate(0);
                }
                this.data.payMonth = this.populate[0]["month"];
            }
        }
        if (type == "Bi-Weekly") {
            if (yearSelected == this.date.getFullYear()) {
                this.populate = [];
                for (i = this.tomonth; i >= 0; i--) {
                    if (i <= this.tomonth - 1) {
                        this.date.setDate(0);
                    }
                    this.date.setDate(1);
                    while (this.date.getMonth() == i) {
                        temp = this.date.getDate();
                        if (temp <= 30) {
                            this.populatedValues = this.months[i] + "-" + temp + "-" + this.toyear;
                            this.populate.push({ 'month': this.populatedValues });
                        }
                        this.date.setDate(this.date.getDate() + 15);
                    }
                    this.date.setDate(0);
                }
                this.data.payMonth = this.populate[0]["month"];
                //console.log(this.data.payMonth)
            }
            else {
                this.populate = [];
                this.date.setFullYear(yearSelected);
                this.date.setMonth(11);
                //this.date.setDate(1);
                for (i = 11; i >= 0; i--) {
                    if (i <= 10) {
                        this.date.setDate(0);
                    }
                    this.date.setDate(1);
                    while (this.date.getMonth() === i) {
                        temp = this.date.getDate();
                        if (temp <= 30) {
                            this.populatedValues = this.months[i] + "-" + temp + "-" + yearSelected;
                            this.populate.push({ 'month': this.populatedValues });
                        }
                        this.date.setDate(this.date.getDate() + 15);
                    }
                    this.date.setDate(0);
                }
                this.data.payMonth = this.populate[0]["month"];
            }
        }
    };
    return PayrollComponent;
}());
PayrollComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-payroll',
        template: __webpack_require__(701),
        styles: [__webpack_require__(687)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* AppService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* AppService */]) === "function" && _a || Object])
], PayrollComponent);

var _a;
//# sourceMappingURL=payroll.component.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(profileService) {
        this.profileService = profileService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem("user"));
        // console.log(this.user);
        this._id = (this.user)[0]._id;
        // console.log(this._id); 
        this.profileService.url = "users/empdetails/" + this._id;
        this.profileService.getService().subscribe(function (res) {
            // console.log(res); 
            _this.userDetails = res["data"][0];
            //console.log(this.userDetails);
            _this.image_path = "images/" + _this.userDetails.empImage;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(702),
        styles: [__webpack_require__(688)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* AppService */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalendarService = (function () {
    function CalendarService(_baConfig, calendarService) {
        this._baConfig = _baConfig;
        this.calendarService = calendarService;
        // ngOnInit(){
        //   let dashboardColors = this._baConfig.get().colors.dashboard;
        //          this.user = JSON.parse(localStorage.getItem("user"));
        //     console.log(this.user);
        //     this._id = (this.user)[0].timesheets;
        //     console.log(this._id);
        //         this.calendarService.url = "timesheet/getdata/"+this._id;
        //   this.calendarService.getService().subscribe(res=>{
        //       //console.log(res);
        //       (res).forEach(element => {
        //         //console.log(element);
        //         var sss ={"title":"WorkingHours:8","start":"2017-05-26", "color": dashboardColors.blueStone};
        //         (element["data"]).forEach(element => {
        //            if(element["workingHours"]!=undefined){
        //                sss["title"]=element["Workinghours"+":"+"workingHours"];
        //            }
        //           else{
        //             sss["start"]=element["date"].toLocaleString().slice(0,19);
        //             //console.log(sss["start"]);
        //           }
        //         });
        //         //console.log(sss);
        //         this.data.push(sss);
        //       });
        //        this.publishData(this.data);
        //   })
        // }
        this.caseNumber = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.caseNumber$ = this.caseNumber.asObservable();
        var dashboardColors = this._baConfig.get().colors.dashboard;
        this.data = [{
                title: 'All Day Event',
                start: '2017-03-01',
                color: dashboardColors.silverTree
            },
            {
                title: 'Long Event',
                start: '2017-03-07',
                end: '2017-03-10',
                color: dashboardColors.blueStone
            },
            {
                title: 'Dinner',
                start: '2017-03-14T20:00:00',
                color: dashboardColors.surfieGreen
            },
            {
                title: 'Birthday Party',
                start: '2017-04-01T07:00:00',
                color: dashboardColors.gossip
            }];
    }
    //   publishData(Data) {
    //   console.log(Data);
    //    console.log("%%%%%%%%%%%%%");
    //   this.caseNumber.next(Data);
    // }
    CalendarService.prototype.getData = function (data) {
        //console.log(data);
        var dashboardColors = this._baConfig.get().colors.dashboard;
        var date = new Date(), month = '' + (date.getMonth() + 1), day = '' + date.getDate(), year = date.getFullYear();
        this.finalDate = [year, month, day].join('-');
        //console.log(this.finalDate);
        return {
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay',
            },
            defaultDate: this.finalDate,
            selectable: true,
            selectHelper: true,
            editable: true,
            eventLimit: true,
            events: data
        };
    };
    return CalendarService;
}());
CalendarService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* BaThemeConfigProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["b" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["b" /* AppService */]) === "function" && _b || Object])
], CalendarService);

var _a, _b;
//# sourceMappingURL=calendar.service.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_service__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timesheetdata_timesheetdata_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesheetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TimesheetComponent = (function () {
    function TimesheetComponent(_calendarService, _baConfig, modalService, calendarService) {
        var _this = this;
        this._calendarService = _calendarService;
        this._baConfig = _baConfig;
        this.modalService = modalService;
        this.calendarService = calendarService;
        this.dataAvailable = false;
        var dashboardColors = this._baConfig.get().colors.dashboard;
        this.user = JSON.parse(localStorage.getItem("user"));
        this._id = (this.user)[0].timesheets;
        this.calendarService.url = 'timesheet/getdata/' + this._id;
        this.calendarService.getService().subscribe(function (res) {
            (res).forEach(function (element) {
                var sss = { "title": "", "start": "", "color": dashboardColors.blueStone, editable: false };
                (element["data"]).forEach(function (element) {
                    if (element["workingHours"] != undefined) {
                        sss['title'] = 'Workedhours :' + element['workingHours'];
                    }
                    else {
                        sss['start'] = element['date'].toLocaleString().slice(0, 10);
                    }
                });
                _this.data.push(sss);
                _this.dataAvailable = true;
            });
        });
        this.calendarConfiguration = this.getData();
        this.calendarConfiguration.select = function (start, end) { return _this._onSelect(start, end); };
        this.data = [];
    }
    TimesheetComponent.prototype.onCalendarReady = function (calendar) {
        this._calendar = calendar;
        var eventData;
        eventData = this.data;
        __WEBPACK_IMPORTED_MODULE_1_jquery__(this._calendar).fullCalendar('addEventSource', eventData);
    };
    TimesheetComponent.prototype._onSelect = function (start, end) {
        if (this._calendar != null) {
            var day = start._d;
            var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_4__timesheetdata_timesheetdata_component__["a" /* TimesheetdataComponent */], { size: 'lg', backdrop: 'static' });
            activeModal.componentInstance.modalHeader = 'Child modal';
            activeModal.componentInstance.modalContent = day;
            __WEBPACK_IMPORTED_MODULE_1_jquery__(this._calendar).fullCalendar('unselect');
        }
    };
    TimesheetComponent.prototype.ngOnInit = function () {
        var dashboardColors = this._baConfig.get().colors.dashboard;
        this.user = JSON.parse(localStorage.getItem("user"));
        this._id = (this.user)[0].timesheets;
    };
    TimesheetComponent.prototype.getData = function () {
        var dashboardColors = this._baConfig.get().colors.dashboard;
        var date = new Date(), month = '' + (date.getMonth() + 1), day = '' + date.getDate(), year = date.getFullYear();
        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        this.finalDate = [year, month, day].join('-');
        return {
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay',
            },
            defaultDate: this.finalDate,
            selectable: true,
            selectHelper: true,
            editable: true,
            eventLimit: true,
        };
    };
    return TimesheetComponent;
}());
TimesheetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-timesheet',
        template: __webpack_require__(703),
        styles: [__webpack_require__(689)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__calendar_service__["a" /* CalendarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__calendar_service__["a" /* CalendarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__theme__["a" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__theme__["a" /* BaThemeConfigProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _c || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__app_service__["b" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_service__["b" /* AppService */]) === "function" && _e || Object])
], TimesheetComponent);

var _a, _b, _c, _e;
//# sourceMappingURL=timesheet.component.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timesheet_timesheet_component__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payroll_payroll_component__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__ = __webpack_require__(651);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: 'enrollment', loadChildren: './enrollment/enrollment.module#EnrollmentModule' },
            { path: 'timesheet', component: __WEBPACK_IMPORTED_MODULE_3__timesheet_timesheet_component__["a" /* TimesheetComponent */] },
            { path: 'payroll', component: __WEBPACK_IMPORTED_MODULE_4__payroll_payroll_component__["a" /* PayrollComponent */] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */] },
        ],
    },
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], DashboardRoutingModule);

//# sourceMappingURL=dashboard-routing.module.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PAGES_MENU; });
var PAGES_MENU = [
    {
        path: 'dashboard',
        children: [
            {
                path: '',
                data: {
                    menu: {
                        title: 'general.menu.dashboard',
                        icon: 'ion-android-home',
                        selected: false,
                        expanded: false,
                        order: 0
                    }
                }
            },
            {
                path: 'enrollment',
                data: {
                    menu: {
                        title: 'Entrollment',
                        icon: 'ion-edit',
                        selected: false,
                        expanded: false,
                        order: 100,
                    }
                },
                children: [
                    {
                        path: '',
                        data: {
                            menu: {
                                title: 'Enroll Employee',
                                icon: 'ion-gear-a',
                            }
                        }
                    },
                    {
                        path: 'editemployee',
                        data: {
                            menu: {
                                title: 'Edit Employee',
                                icon: 'ion-gear-a',
                            }
                        }
                    }
                ]
            },
            {
                path: 'timesheet',
                data: {
                    menu: {
                        title: 'Timesheet',
                        icon: 'ion-gear-a',
                        selected: false,
                        expanded: false,
                        order: 250,
                    }
                }
            },
            {
                path: 'payroll',
                data: {
                    menu: {
                        title: 'Payroll',
                        icon: 'ion-stats-bars',
                        selected: false,
                        expanded: false,
                        order: 200,
                    }
                },
            },
        ]
    }
];
//# sourceMappingURL=sidenav.menu.js.map

/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "div#router-outlet {\n  margin-top: 5%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "img {\n  /* align-self: center; */\n  margin-left: 38%;\n  width: 200px;\n  height: auto; }\n\ntd b {\n  float: left;\n  margin-left: 35%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ":host /deep/ ba-full-calendar .ba-full-calendar.blurCalendar.fc.fc-unthemed.fc-ltr {\n  margin-right: 10% !important; }\n\n:host /deep/ ba-full-calendar div.blurCalendar {\n  font-size: 12px; }\n\n:host /deep/ ba-full-calendar .fc {\n  direction: ltr;\n  text-align: left; }\n  :host /deep/ ba-full-calendar .fc button {\n    box-sizing: border-box;\n    margin: 0;\n    height: 2.1em;\n    padding: 0 .6em;\n    font-size: 1em;\n    white-space: nowrap;\n    cursor: pointer; }\n    :host /deep/ ba-full-calendar .fc button::-moz-focus-inner {\n      margin: 0;\n      padding: 0; }\n    :host /deep/ ba-full-calendar .fc button .fc-icon {\n      position: relative;\n      top: 0; }\n  :host /deep/ ba-full-calendar .fc .fc-button-group > * {\n    float: left;\n    margin: 0 0 0 -1px; }\n  :host /deep/ ba-full-calendar .fc .fc-button-group > :first-child {\n    margin-left: 0; }\n  :host /deep/ ba-full-calendar .fc hr {\n    height: 0;\n    margin: 0;\n    padding: 0 0 2px;\n    border-style: solid;\n    border-width: 1px 0; }\n  :host /deep/ ba-full-calendar .fc table {\n    width: 100%;\n    table-layout: fixed;\n    border-collapse: collapse;\n    border-spacing: 0;\n    font-size: 1em; }\n  :host /deep/ ba-full-calendar .fc th {\n    text-align: center; }\n  :host /deep/ ba-full-calendar .fc th, :host /deep/ ba-full-calendar .fc td {\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    padding: 0;\n    vertical-align: top; }\n  :host /deep/ ba-full-calendar .fc td.fc-today {\n    border-style: double; }\n  :host /deep/ ba-full-calendar .fc .fc-row {\n    border: 0 solid; }\n  :host /deep/ ba-full-calendar .fc .fc-toolbar > * > * {\n    float: left;\n    margin-left: .75em; }\n  :host /deep/ ba-full-calendar .fc .fc-toolbar > * > :first-child {\n    margin-left: 0; }\n  :host /deep/ ba-full-calendar .fc .fc-axis {\n    vertical-align: middle;\n    padding: 0 4px;\n    white-space: nowrap; }\n\n:host /deep/ ba-full-calendar .fc-rtl {\n  text-align: right; }\n\n:host /deep/ ba-full-calendar .fc-unthemed th, :host /deep/ ba-full-calendar .fc-unthemed td, :host /deep/ ba-full-calendar .fc-unthemed hr, :host /deep/ ba-full-calendar .fc-unthemed thead, :host /deep/ ba-full-calendar .fc-unthemed tbody, :host /deep/ ba-full-calendar .fc-unthemed .fc-row, :host /deep/ ba-full-calendar .fc-unthemed .fc-popover {\n  border-color: rgba(255, 255, 255, 0.3); }\n\n:host /deep/ ba-full-calendar .fc-unthemed .fc-popover {\n  background-color: rgba(0, 0, 0, 0.2);\n  border: 1px solid; }\n  :host /deep/ ba-full-calendar .fc-unthemed .fc-popover .fc-header {\n    background: #eee; }\n    :host /deep/ ba-full-calendar .fc-unthemed .fc-popover .fc-header .fc-close {\n      color: #666666;\n      font-size: 25px;\n      margin-top: 4px; }\n\n:host /deep/ ba-full-calendar .fc-unthemed hr {\n  background: #eee; }\n\n:host /deep/ ba-full-calendar .fc-unthemed .fc-today {\n  background: rgba(255, 255, 255, 0.15); }\n\n:host /deep/ ba-full-calendar .fc-highlight {\n  background: rgba(255, 255, 255, 0.25);\n  opacity: .3; }\n\n:host /deep/ ba-full-calendar .fc-icon {\n  display: inline-block;\n  font-size: 2em;\n  font-family: \"Courier New\", Courier, monospace; }\n\n:host /deep/ ba-full-calendar .fc-icon-left-single-arrow:after {\n  content: \"\\2039\";\n  font-weight: 700;\n  font-size: 100%; }\n\n:host /deep/ ba-full-calendar .fc-icon-right-single-arrow:after {\n  content: \"\\203A\";\n  font-weight: 700;\n  font-size: 100%; }\n\n:host /deep/ ba-full-calendar .fc-icon-left-double-arrow:after {\n  content: \"\\AB\"; }\n\n:host /deep/ ba-full-calendar .fc-icon-right-double-arrow:after {\n  content: \"\\BB\"; }\n\n:host /deep/ ba-full-calendar .fc-icon-x:after {\n  content: \"\\D7\"; }\n\n:host /deep/ ba-full-calendar .fc-state-default {\n  border: 1px solid;\n  outline: none;\n  background: #f5f5f5 repeat-x;\n  border-color: #e6e6e6 #e6e6e6 #bfbfbf;\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1);\n  color: #333333; }\n  :host /deep/ ba-full-calendar .fc-state-default.fc-corner-left {\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px; }\n  :host /deep/ ba-full-calendar .fc-state-default.fc-corner-right {\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px; }\n\n:host /deep/ ba-full-calendar .fc-state-hover,\n:host /deep/ ba-full-calendar .fc-state-down,\n:host /deep/ ba-full-calendar .fc-state-active,\n:host /deep/ ba-full-calendar .fc-state-disabled {\n  color: #333333;\n  background-color: transparent; }\n\n:host /deep/ ba-full-calendar .fc-state-hover {\n  color: #333333;\n  text-decoration: none;\n  background-position: 0 -15px;\n  transition: background-position 0.1s linear; }\n\n:host /deep/ ba-full-calendar .fc-state-down,\n:host /deep/ ba-full-calendar .fc-state-active {\n  background: #cccccc none; }\n\n:host /deep/ ba-full-calendar .fc-state-disabled {\n  cursor: default;\n  background-image: none;\n  opacity: 0.65;\n  box-shadow: none; }\n\n:host /deep/ ba-full-calendar .fc-button-group {\n  display: inline-block; }\n\n:host /deep/ ba-full-calendar .fc-popover {\n  position: absolute; }\n  :host /deep/ ba-full-calendar .fc-popover .fc-header {\n    padding: 2px 4px; }\n  :host /deep/ ba-full-calendar .fc-popover .fc-header .fc-title {\n    margin: 0 2px; }\n  :host /deep/ ba-full-calendar .fc-popover .fc-header .fc-close {\n    cursor: pointer; }\n\n:host /deep/ ba-full-calendar .fc-ltr .fc-popover .fc-header .fc-title,\n:host /deep/ ba-full-calendar .fc-rtl .fc-popover .fc-header .fc-close {\n  float: left; }\n\n:host /deep/ ba-full-calendar .fc-rtl .fc-popover .fc-header .fc-title,\n:host /deep/ ba-full-calendar .fc-ltr .fc-popover .fc-header .fc-close {\n  float: right; }\n\n:host /deep/ ba-full-calendar .fc-popover > .ui-widget-header + .ui-widget-content {\n  border-top: 0; }\n\n:host /deep/ ba-full-calendar .fc-clear {\n  clear: both; }\n\n:host /deep/ ba-full-calendar .fc-bg,\n:host /deep/ ba-full-calendar .fc-highlight-skeleton,\n:host /deep/ ba-full-calendar .fc-helper-skeleton {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0; }\n\n:host /deep/ ba-full-calendar .fc-bg {\n  bottom: 0; }\n\n:host /deep/ ba-full-calendar .fc-bg table {\n  height: 100%; }\n\n:host /deep/ ba-full-calendar .fc-row {\n  position: relative; }\n  :host /deep/ ba-full-calendar .fc-row table {\n    border-left: 1px  solid transparent;\n    border-right: 1px  solid transparent;\n    border-bottom: 1px  solid transparent; }\n  :host /deep/ ba-full-calendar .fc-row:first-child table {\n    border-top: 0 hidden transparent; }\n  :host /deep/ ba-full-calendar .fc-row .fc-bg {\n    z-index: 1; }\n  :host /deep/ ba-full-calendar .fc-row .fc-highlight-skeleton {\n    z-index: 2;\n    bottom: 0; }\n    :host /deep/ ba-full-calendar .fc-row .fc-highlight-skeleton table {\n      height: 100%; }\n    :host /deep/ ba-full-calendar .fc-row .fc-highlight-skeleton td {\n      border-color: transparent; }\n  :host /deep/ ba-full-calendar .fc-row .fc-content-skeleton {\n    position: relative;\n    z-index: 3;\n    padding-bottom: 2px; }\n  :host /deep/ ba-full-calendar .fc-row .fc-helper-skeleton {\n    z-index: 4; }\n  :host /deep/ ba-full-calendar .fc-row .fc-content-skeleton td,\n  :host /deep/ ba-full-calendar .fc-row .fc-helper-skeleton td {\n    background: none;\n    border-color: transparent;\n    border-bottom: 0; }\n  :host /deep/ ba-full-calendar .fc-row .fc-content-skeleton tbody td,\n  :host /deep/ ba-full-calendar .fc-row .fc-helper-skeleton tbody td {\n    border-top: 0; }\n\n:host /deep/ ba-full-calendar .fc-event {\n  position: relative;\n  display: block;\n  font-size: .85em;\n  line-height: 1.3;\n  border: 1px solid #209e91;\n  background-color: #209e91;\n  font-weight: 400; }\n\n:host /deep/ ba-full-calendar .fc-event,\n:host /deep/ ba-full-calendar .fc-event:hover,\n:host /deep/ ba-full-calendar .ui-widget .fc-event {\n  color: #ffffff;\n  text-decoration: none; }\n\n:host /deep/ ba-full-calendar .fc-event[href],\n:host /deep/ ba-full-calendar .fc-event.fc-draggable {\n  cursor: pointer; }\n\n:host /deep/ ba-full-calendar .fc-day-grid-event {\n  margin: 1px 2px 0;\n  padding: 0 1px; }\n\n:host /deep/ ba-full-calendar .fc-ltr .fc-day-grid-event.fc-not-start,\n:host /deep/ ba-full-calendar .fc-rtl .fc-day-grid-event.fc-not-end {\n  margin-left: 0;\n  border-left-width: 0;\n  padding-left: 1px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n:host /deep/ ba-full-calendar .fc-ltr .fc-day-grid-event.fc-not-end,\n:host /deep/ ba-full-calendar .fc-rtl .fc-day-grid-event.fc-not-start {\n  margin-right: 0;\n  border-right-width: 0;\n  padding-right: 1px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n:host /deep/ ba-full-calendar .fc-day-grid-event > .fc-content {\n  white-space: nowrap;\n  overflow: hidden; }\n\n:host /deep/ ba-full-calendar .fc-day-grid-event .fc-time {\n  font-weight: 700; }\n\n:host /deep/ ba-full-calendar .fc-day-grid-event .fc-resizer {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 7px; }\n\n:host /deep/ ba-full-calendar .fc-ltr .fc-day-grid-event .fc-resizer {\n  right: -3px;\n  cursor: e-resize; }\n\n:host /deep/ ba-full-calendar .fc-rtl .fc-day-grid-event .fc-resizer {\n  left: -3px;\n  cursor: w-resize; }\n\n:host /deep/ ba-full-calendar a.fc-more {\n  margin: 1px 3px;\n  font-size: .85em;\n  cursor: pointer;\n  text-decoration: none; }\n  :host /deep/ ba-full-calendar a.fc-more:hover {\n    text-decoration: underline; }\n\n:host /deep/ ba-full-calendar .fc-limited {\n  display: none; }\n\n:host /deep/ ba-full-calendar .fc-day-grid .fc-row {\n  z-index: 1; }\n\n:host /deep/ ba-full-calendar .fc-more-popover {\n  z-index: 2;\n  width: 220px; }\n  :host /deep/ ba-full-calendar .fc-more-popover .fc-event-container {\n    padding: 10px; }\n\n:host /deep/ ba-full-calendar .fc-toolbar {\n  text-align: center;\n  margin-bottom: 1em; }\n  :host /deep/ ba-full-calendar .fc-toolbar .fc-left {\n    float: left; }\n  :host /deep/ ba-full-calendar .fc-toolbar .fc-right {\n    float: right; }\n  :host /deep/ ba-full-calendar .fc-toolbar .fc-center {\n    display: inline-block; }\n  :host /deep/ ba-full-calendar .fc-toolbar h2 {\n    margin: 0;\n    font-size: 24px;\n    width: 100%;\n    line-height: 26px; }\n  :host /deep/ ba-full-calendar .fc-toolbar button {\n    position: relative; }\n  :host /deep/ ba-full-calendar .fc-toolbar .fc-state-hover, :host /deep/ ba-full-calendar .fc-toolbar .ui-state-hover {\n    z-index: 2; }\n  :host /deep/ ba-full-calendar .fc-toolbar .fc-state-down {\n    z-index: 3; }\n  :host /deep/ ba-full-calendar .fc-toolbar .fc-state-active,\n  :host /deep/ ba-full-calendar .fc-toolbar .ui-state-active {\n    z-index: 4; }\n  :host /deep/ ba-full-calendar .fc-toolbar button:focus {\n    z-index: 5; }\n\n:host /deep/ ba-full-calendar .fc-view-container *,\n:host /deep/ ba-full-calendar .fc-view-container *:before,\n:host /deep/ ba-full-calendar .fc-view-container *:after {\n  box-sizing: content-box; }\n\n:host /deep/ ba-full-calendar .fc-view,\n:host /deep/ ba-full-calendar .fc-view > table {\n  position: relative;\n  z-index: 1; }\n\n:host /deep/ ba-full-calendar .fc-basicWeek-view .fc-content-skeleton,\n:host /deep/ ba-full-calendar .fc-basicDay-view .fc-content-skeleton {\n  padding-top: 1px;\n  padding-bottom: 1em; }\n\n:host /deep/ ba-full-calendar .fc-basic-view tbody .fc-row {\n  min-height: 4em;\n  max-height: 70px; }\n\n:host /deep/ ba-full-calendar .fc-row.fc-rigid {\n  overflow: hidden; }\n\n:host /deep/ ba-full-calendar .fc-row.fc-rigid .fc-content-skeleton {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0; }\n\n:host /deep/ ba-full-calendar .fc-basic-view .fc-week-number,\n:host /deep/ ba-full-calendar .fc-basic-view .fc-day-number {\n  padding: 0 2px; }\n\n:host /deep/ ba-full-calendar .fc-basic-view td.fc-week-number span,\n:host /deep/ ba-full-calendar .fc-basic-view td.fc-day-number {\n  padding-top: 2px;\n  padding-bottom: 2px; }\n\n:host /deep/ ba-full-calendar .fc-basic-view .fc-week-number {\n  text-align: center; }\n\n:host /deep/ ba-full-calendar .fc-basic-view .fc-week-number span {\n  display: inline-block;\n  min-width: 1.25em; }\n\n:host /deep/ ba-full-calendar .fc-ltr .fc-basic-view .fc-day-number {\n  text-align: right; }\n\n:host /deep/ ba-full-calendar .fc-rtl .fc-basic-view .fc-day-number {\n  text-align: left; }\n\n:host /deep/ ba-full-calendar .fc-day-number.fc-other-month {\n  opacity: 0.3; }\n\n:host /deep/ ba-full-calendar .fc-agenda-view .fc-day-grid {\n  position: relative;\n  z-index: 2; }\n\n:host /deep/ ba-full-calendar .fc-agenda-view .fc-day-grid .fc-row {\n  min-height: 3em; }\n\n:host /deep/ ba-full-calendar .fc-agenda-view .fc-day-grid .fc-row .fc-content-skeleton {\n  padding-top: 1px;\n  padding-bottom: 1em; }\n\n:host /deep/ ba-full-calendar .fc-ltr .fc-axis {\n  text-align: right; }\n\n:host /deep/ ba-full-calendar .fc-rtl .fc-axis {\n  text-align: left; }\n\n:host /deep/ ba-full-calendar .ui-widget td.fc-axis {\n  font-weight: 400; }\n\n:host /deep/ ba-full-calendar .fc-time-grid-container,\n:host /deep/ ba-full-calendar .fc-time-grid {\n  position: relative;\n  z-index: 1; }\n\n:host /deep/ ba-full-calendar .fc-time-grid {\n  min-height: 100%; }\n\n:host /deep/ ba-full-calendar .fc-time-grid table {\n  border: 0 hidden transparent; }\n\n:host /deep/ ba-full-calendar .fc-time-grid > .fc-bg {\n  z-index: 1; }\n\n:host /deep/ ba-full-calendar .fc-time-grid .fc-slats,\n:host /deep/ ba-full-calendar .fc-time-grid > hr {\n  position: relative;\n  z-index: 2; }\n\n:host /deep/ ba-full-calendar .fc-time-grid .fc-highlight-skeleton {\n  z-index: 3; }\n\n:host /deep/ ba-full-calendar .fc-time-grid .fc-content-skeleton {\n  position: absolute;\n  z-index: 4;\n  top: 0;\n  left: 0;\n  right: 0; }\n\n:host /deep/ ba-full-calendar .fc-time-grid > .fc-helper-skeleton {\n  z-index: 5; }\n\n:host /deep/ ba-full-calendar .fc-slats td {\n  height: 1.5em;\n  border-bottom: 0; }\n\n:host /deep/ ba-full-calendar .fc-slats .fc-minor td {\n  border-top-style: dotted; }\n\n:host /deep/ ba-full-calendar .fc-slats .ui-widget-content {\n  background: none; }\n\n:host /deep/ ba-full-calendar .fc-time-grid .fc-highlight-container {\n  position: relative; }\n\n:host /deep/ ba-full-calendar .fc-time-grid .fc-highlight {\n  position: absolute;\n  left: 0;\n  right: 0; }\n\n:host /deep/ ba-full-calendar .fc-time-grid .fc-event-container {\n  position: relative; }\n\n:host /deep/ ba-full-calendar .fc-ltr .fc-time-grid .fc-event-container {\n  margin: 0 2.5% 0 2px; }\n\n:host /deep/ ba-full-calendar .fc-rtl .fc-time-grid .fc-event-container {\n  margin: 0 2px 0 2.5%; }\n\n:host /deep/ ba-full-calendar .fc-time-grid .fc-event {\n  position: absolute;\n  z-index: 1; }\n\n:host /deep/ ba-full-calendar .fc-time-grid-event {\n  overflow: hidden; }\n  :host /deep/ ba-full-calendar .fc-time-grid-event.fc-not-start {\n    border-top-width: 0;\n    padding-top: 1px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n  :host /deep/ ba-full-calendar .fc-time-grid-event.fc-not-end {\n    border-bottom-width: 0;\n    padding-bottom: 1px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0; }\n  :host /deep/ ba-full-calendar .fc-time-grid-event > .fc-content {\n    position: relative;\n    z-index: 2; }\n  :host /deep/ ba-full-calendar .fc-time-grid-event .fc-title {\n    padding: 0 1px; }\n  :host /deep/ ba-full-calendar .fc-time-grid-event .fc-time {\n    padding: 0 1px;\n    font-size: .85em;\n    white-space: nowrap; }\n  :host /deep/ ba-full-calendar .fc-time-grid-event .fc-bg {\n    z-index: 1;\n    background: rgba(0, 0, 0, 0.2);\n    opacity: .25;\n    filter: alpha(opacity=25); }\n  :host /deep/ ba-full-calendar .fc-time-grid-event.fc-short .fc-content {\n    white-space: nowrap; }\n  :host /deep/ ba-full-calendar .fc-time-grid-event.fc-short .fc-time {\n    display: inline-block;\n    vertical-align: top; }\n    :host /deep/ ba-full-calendar .fc-time-grid-event.fc-short .fc-time span {\n      display: none; }\n    :host /deep/ ba-full-calendar .fc-time-grid-event.fc-short .fc-time:before {\n      content: attr(data-start); }\n    :host /deep/ ba-full-calendar .fc-time-grid-event.fc-short .fc-time:after {\n      content: \"\\A0-\\A0\"; }\n  :host /deep/ ba-full-calendar .fc-time-grid-event.fc-short .fc-title {\n    display: inline-block;\n    vertical-align: top;\n    font-size: .85em;\n    padding: 0; }\n  :host /deep/ ba-full-calendar .fc-time-grid-event .fc-resizer {\n    position: absolute;\n    z-index: 3;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 8px;\n    overflow: hidden;\n    line-height: 8px;\n    font-size: 11px;\n    font-family: monospace;\n    text-align: center;\n    cursor: s-resize; }\n    :host /deep/ ba-full-calendar .fc-time-grid-event .fc-resizer:after {\n      content: \"=\"; }\n\n:host /deep/ ba-full-calendar .fc-day-grid-container.fc-scroller {\n  height: auto !important; }\n\n:host /deep/ ba-full-calendar .fc-body > tr > .fc-widget-content {\n  border: none; }\n\n:host /deep/ ba-full-calendar .fc-head {\n  color: #ffffff;\n  background-color: #209e91; }\n  :host /deep/ ba-full-calendar .fc-head td, :host /deep/ ba-full-calendar .fc-head th {\n    border: none; }\n  :host /deep/ ba-full-calendar .fc-head div.fc-widget-header {\n    padding: 5px 0; }\n\n:host /deep/ ba-full-calendar .fc-today-button, :host /deep/ ba-full-calendar .fc-month-button, :host /deep/ ba-full-calendar .fc-agendaWeek-button, :host /deep/ ba-full-calendar .fc-agendaDay-button {\n  display: none; }\n\n:host /deep/ ba-full-calendar .blurCalendar {\n  margin-top: 15px; }\n\n:host /deep/ ba-full-calendar .fc-prev-button, :host /deep/ ba-full-calendar .fc-next-button {\n  position: absolute;\n  background: transparent;\n  box-shadow: none;\n  border: none;\n  color: #ffffff; }\n\n:host /deep/ ba-full-calendar .fc-next-button {\n  left: 30px; }\n\n:host /deep/ ba-full-calendar .fc-day-number {\n  color: #ffffff;\n  opacity: 0.9; }\n\n/deep/.calendar-panel.card .card-body {\n  padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<ba-page-top></ba-page-top>\r\n<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <ba-sidebar></ba-sidebar>\r\n    </div>\r\n    <div class=\"col-md-9\" id=\"router-outlet\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "\n<!--<h4 class=\"text-center text-danger \" style=\"margin-bottom: 2pc;\"><u>PayRoll Application</u></h4>-->\n<div class=\"container\">\n    <form>\n\n\n        <div class=\"row form-group\">\n\n            <div class=\"col-md-4 form-control\">\n                <label class=\"radio-inline\" *ngFor=\"let payroll of payrolls;let idx = index\">\n              <input type=\"radio\" name=\"radiogroup\"  [checked]=\"idx===0\" [value]=\"payroll.types\" (click)=\"onSelectionChange(payroll.types)\"\n              [(ngModel)]=\"data.paytype\">\n                {{payroll.types}}\n          </label>\n            </div>\n        </div>\n\n        <div class=\"row form-group\">\n        <div class=\"col-md-6 form-control\">\n           <label for=\"year\">Year:</label>\n           <select name=\"year\" id=\"year\" (change)=\"payroll_year(data.payYear)\" [(ngModel)]=\"data.payYear\">\n\t\t\t       <option *ngFor=\"let obj of years\" value=\"{{obj.year}}\">{{obj.year}}</option>\n\t\t\t       </select>\n        <div class=\"col-md-6\">\n           <label for=\"month\">Month:</label>\n           <select name=\"month\" id=\"month\" [(ngModel)]=\"data.payMonth\">\n             <option *ngFor=\"let obj of populate\" value=\"{{obj.month}}\">{{obj.month}}</option>\n\t\t\t       </select>\n\t           \n\t            </div>\n\t            </div>\n              \n\t</div>\n\n        <div class=\"row form-group\">\n            <div class=\"form-control \" style=\"height: 9pc;\">\n                <h5 class=\" text-danger\">Employee Type</h5>\n                <label class=\"radio-inline \"><input type=\"radio\" name=\"optradio\" checked=\"checked\">Salary</label>\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\">Hourly</label>\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\">Independent</label>\n                <div style=\"margin-top: 19px;\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"getData(data)\">GetPayroll</button>\n                    <button type=\"button\" class=\"btn btn-primary \">Submit</button>\n                </div>\n            </div>\n\n        </div>\n    </form>\n    <h2  *ngIf = \"isData\" style=\"color:red\" class=\"text-center row\">No Records Found</h2>\n    <div *ngIf =\"!(isData)\" class=\"tex-center\">\n        <table class=\"table table-bordered table-responsive\">\n            <tr>\n                <th>\n                    S.NO\n                </th>\n                <th>\n                    Employee ID\n                </th>\n                <th>\n                    Employee Name\n                </th>\n                <th>\n                    Working Location\n                </th>\n                <th>\n                    Total Billable Hours\n                </th>\n                <th>\n                    Total Worked Hours\n                </th>\n                <th>\n                    Base Pay\n                </th>\n            </tr>\n\n            <tr *ngFor=\"let obj of OutputData; let i = index\">\n\n                <td>{{i+1}}</td>\n\n                <td><a (click)=\"individualPayslip(obj.EmployeeID)\" style=\"cursor:pointer\">{{obj.EmployeeID}}</a></td>\n                <td>{{obj.EmployeeName}}</td>\n                <td>{{obj.BusinessUnit}}</td>\n                <td></td>\n                <td>{{obj.totalHours}}</td>\n                <td>{{obj.BasePay}}</td>\n\n            </tr>\n\n        </table>\n    </div>\n</div>\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"userDetails\">\r\n  <div class=\"table-responsive\">\r\n    <img [src]=image_path>\r\n    <table class=\"table table-bordred table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th></th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td><b>Emp.Id</b> </td>\r\n          <td>{{userDetails.employeeId}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td><b>Name</b> </td>\r\n          <td>{{userDetails.employeeName}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td><b>Email-Id</b> </td>\r\n          <td>{{userDetails.personalEmail}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td><b>Designation</b> </td>\r\n          <td>{{userDetails.designation}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td><b>EmployeeType</b> </td>\r\n          <td>{{userDetails.employeeType}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td><b>MobileNumber</b> </td>\r\n          <td>{{userDetails.primaryMobile}}</td>\r\n        </tr>\r\n        \r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<ba-full-calendar *ngIf=\"dataAvailable\" [baFullCalendarConfiguration]=\"calendarConfiguration\" baFullCalendarClass=\"blurCalendar\" (onCalendarReady)=\"onCalendarReady($event)\" ></ba-full-calendar>\r\n"

/***/ })

});
//# sourceMappingURL=2.chunk.js.map