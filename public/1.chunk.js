webpackJsonp([1,8],{

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enrollment_routing_module__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_nga_module__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__enrollment_component__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__employee_register_employee_register_component__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_employee_edit_employee_component__ = __webpack_require__(656);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollmentModule", function() { return EnrollmentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import {AppService} from "../../app.service";



//import { EditComponentComponent } from './edit-employee/edit-component/edit-component.component';
var EnrollmentModule = (function () {
    function EnrollmentModule() {
    }
    return EnrollmentModule;
}());
EnrollmentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_4__enrollment_routing_module__["a" /* EnrollmentRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__enrollment_component__["a" /* EnrollmentComponent */],
            __WEBPACK_IMPORTED_MODULE_7__employee_register_employee_register_component__["a" /* EmployeeRegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileSelectDirective"],
            __WEBPACK_IMPORTED_MODULE_8__edit_employee_edit_employee_component__["a" /* EditEmployee */],
        ],
        entryComponents: [],
        providers: []
    })
], EnrollmentModule);

//# sourceMappingURL=enrollment.module.js.map

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        // this.lastModifiedDate = copy(object.lastModifiedDate);
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
exports.FileLikeObject = FileLikeObject;


/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__(653);
var file_item_class_1 = __webpack_require__(669);
var file_type_class_1 = __webpack_require__(695);
function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false
        };
        this.setOptions(options);
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = options.authToken;
        this.authTokenHeader = options.authTokenHeader || 'Authorization';
        this.autoUpload = options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
        // this.options.filters.unshift({name: 'folder', fn: this._folderFilter});
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new file_like_object_class_1.FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new file_item_class_1.FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof file_like_object_class_1.FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
        /*forEach(this._directives, (key) => {
         forEach(this._directives[key], (object) => {
         object.destroy();
         });
         });*/
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        // todo
        /*item.formData.map(obj => {
         obj.map((value, key) => {
         form.append(key, value);
         });
         });*/
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            sendable.append(item.alias, item._file, item.file.name);
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(function (key) {
                    sendable.append(key, _this.options.additionalParameter[key]);
                });
            }
        }
        else {
            sendable = item._file;
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (var _b = 0, _c = item.headers; _b < _c.length; _b++) {
                var header = _c[_b];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.send(sendable);
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
        // todo: ?
    };
    // protected _folderFilter(item:FileItem):boolean {
    //   return !!(item.size || item.type);
    // }
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    /* tslint:disable */
    FileUploader.prototype._transformResponse = function (response, headers) {
        // todo: ?
        /*var headersGetter = this._headersGetter(headers);
         forEach($http.defaults.transformResponse, (transformFn) => {
         response = transformFn(response, headersGetter);
         });*/
        return response;
    };
    /* tslint:enable */
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    /*protected _iframeTransport(item:FileItem) {
     // todo: implement it later
     }*/
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    /* tslint:disable */
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    /* tslint:enable */
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
exports.FileUploader = FileUploader;


/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_component_edit_component_component__ = __webpack_require__(399);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEmployee; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditEmployee = (function () {
    function EditEmployee(usersService, modalService, router) {
        this.usersService = usersService;
        this.modalService = modalService;
        this.router = router;
        this.user = [];
    }
    EditEmployee.prototype.userDetails = function (user) {
        this.router.navigate(['dashboard/enrollment/editemployee']);
    };
    EditEmployee.prototype.editEmployee = function (user) {
        this.user[0] = user;
        var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_4__edit_component_edit_component_component__["a" /* EditComponentComponent */], { size: 'lg', backdrop: 'static' });
        activeModal.componentInstance.modalHeader = 'Child modal';
        activeModal.componentInstance.modalContent = this.user;
    };
    EditEmployee.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.url = "users/usersdata";
        this.usersService.getService().subscribe(function (res) {
            // console.log(res["data"]);
            _this.data = res["data"];
            _this.usersdata = _this.data.sort(function (a, b) {
                var nameA = a.employeeId; // ignore upper and lowercase
                var nameB = b.employeeId; // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            // console.log(this.usersdata);
        });
    };
    return EditEmployee;
}());
EditEmployee = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-enrollment',
        template: __webpack_require__(698),
        styles: [__webpack_require__(684)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], EditEmployee);

var _a, _b, _c;
// $(document).ready(function(){
// $("#mytable #checkall").click(function () {
//         if ($("#mytable #checkall").is(':checked')) {
//             $("#mytable input[type=checkbox]").each(function () {
//                 $(this).prop("checked", true);
//             });
//         } else {
//             $("#mytable input[type=checkbox]").each(function () {
//                 $(this).prop("checked", false);
//             });
//         }
//     });
//     $("[data-toggle=tooltip]").tooltip();
// });
//# sourceMappingURL=edit-employee.component.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeRegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmployeeRegisterComponent = (function () {
    function EmployeeRegisterComponent(router, register) {
        this.router = router;
        this.register = register;
        this.user = {
            ename: "",
            email: "",
            erole: "",
            etype: "",
            ctc: undefined,
            epayroll: "",
            designation: "",
            rmanager: "",
            mobile1: undefined,
            mobile2: undefined,
            dob: null,
            doj: null,
            address: "",
            image: "",
            jobstatus: false
        };
        this.managers = [];
    }
    EmployeeRegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = { url: "uploads" };
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"](this.options);
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader._onCompleteItem = function (item, response, status, headers) {
            //console.log("oncomplete call")
            // this.uploaded.emit(item.file.size);
            //console.log(item);
        };
        this.register.url = "users/managers";
        this.register.getService().subscribe(function (res) {
            // console.log(res);
            _this.data = res;
            //console.log(this.data);
            (_this.data).forEach(function (element) {
                //console.log(element);
                _this.managers.push(element.employeeId);
                //console.log(this.managers);
            });
        });
    };
    //  fileChange($event) : void {
    //     this.readThis($event.target);
    //   }
    //   readThis(inputValue: any): void {
    //   var totalLength = inputValue.files;
    //   for(var i = 0; i < totalLength.length; i++) {
    //   var file:File = inputValue.files[i];
    //   var myReader:FileReader = new FileReader();
    //   myReader.onloadend = (e) => {
    //     this.user.image = myReader.result;
    //   }
    //   myReader.readAsDataURL(file);
    //   }
    // }
    EmployeeRegisterComponent.prototype.onRegisterSubmit = function (user) {
        var _this = this;
        //console.log(this.uploader)
        var upload = this.uploader["queue"][0];
        upload.upload();
        this.uploader._onCompleteItem = function (item, response, status, headers) {
            //console.log("oncomplete call")
            // this.uploaded.emit(item.file.size);
            //console.log(item);
        };
        this.register.url = "users/createEmployee";
        user.fileName = upload["file"]["name"];
        //console.log(user);
        this.register.data = user;
        this.register.postService().subscribe(function (res) {
            //console.log(res)
            __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()("Successfully registered");
            _this.router.navigate(["dashboard"]);
        });
    };
    return EmployeeRegisterComponent;
}());
EmployeeRegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-employee-register',
        template: __webpack_require__(699),
        styles: [__webpack_require__(685)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_service__["b" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_service__["b" /* AppService */]) === "function" && _b || Object])
], EmployeeRegisterComponent);

var UserDetails = (function () {
    function UserDetails() {
    }
    return UserDetails;
}());
var _a, _b;
//# sourceMappingURL=employee-register.component.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrollmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EnrollmentComponent = (function () {
    function EnrollmentComponent() {
    }
    EnrollmentComponent.prototype.ngOnInit = function () {
    };
    return EnrollmentComponent;
}());
EnrollmentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-enrollment',
        template: __webpack_require__(700),
        styles: [__webpack_require__(686)]
    }),
    __metadata("design:paramtypes", [])
], EnrollmentComponent);

//# sourceMappingURL=enrollment.component.js.map

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var file_uploader_class_1 = __webpack_require__(654);
var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new core_1.EventEmitter();
        this.onFileDrop = new core_1.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (this.element) {
            if (event.currentTarget === this.element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    return FileDropDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileDropDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "fileOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "onFileDrop", void 0);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDrop", null);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FileDropDirective.prototype, "onDragLeave", null);
FileDropDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileDrop]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileDropDirective);
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__(653);
var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new file_like_object_class_1.FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
exports.FileItem = FileItem;


/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var file_uploader_class_1 = __webpack_require__(654);
// todo: filters
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return void 0;
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        // let files = this.uploader.isHTML5 ? this.element.nativeElement[0].files : this.element.nativeElement[0];
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        // if(!this.uploader.isHTML5) this.destroy();
        this.uploader.addToQueue(files, options, filters);
        if (this.isEmptyAfterSelection()) {
            // todo
            this.element.nativeElement.value = '';
        }
    };
    return FileSelectDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileSelectDirective.prototype, "uploader", void 0);
__decorate([
    core_1.HostListener('change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FileSelectDirective.prototype, "onChange", null);
FileSelectDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileSelect]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileSelectDirective);
exports.FileSelectDirective = FileSelectDirective;


/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(670));
__export(__webpack_require__(668));
__export(__webpack_require__(654));
__export(__webpack_require__(669));
__export(__webpack_require__(653));
var file_upload_module_1 = __webpack_require__(696);
exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enrollment_component__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employee_register_employee_register_component__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_employee_edit_employee_component__ = __webpack_require__(656);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrollmentRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__enrollment_component__["a" /* EnrollmentComponent */], children: [
            {
                path: '', component: __WEBPACK_IMPORTED_MODULE_3__employee_register_employee_register_component__["a" /* EmployeeRegisterComponent */],
            },
            {
                path: 'editemployee', component: __WEBPACK_IMPORTED_MODULE_4__edit_employee_edit_employee_component__["a" /* EditEmployee */],
            }
        ]
    }
];
var EnrollmentRoutingModule = (function () {
    function EnrollmentRoutingModule() {
    }
    return EnrollmentRoutingModule;
}());
EnrollmentRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], EnrollmentRoutingModule);

//# sourceMappingURL=enrollment-routing.module.js.map

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "legend {\n  color: #141823;\n  font-size: 25px;\n  font-weight: bold; }\n\n.signup-btn {\n  background: #79bc64;\n  background-image: linear-gradient(to bottom, #79bc64, #578843);\n  border-radius: 4px;\n  text-shadow: 0px 1px 0px #898a88;\n  box-shadow: 0px 0px 0px #a4e388;\n  font-family: Arial;\n  color: #ffffff;\n  font-size: 20px;\n  padding: 10px 20px 10px 20px;\n  border: solid #3b6e22 1px;\n  text-decoration: none; }\n\n.signup-btn:hover {\n  background: #79bc64;\n  background-image: linear-gradient(to bottom, #79bc64, #5e7056);\n  text-decoration: none; }\n\n.navbar-default .navbar-brand {\n  color: #fff;\n  font-size: 30px;\n  font-weight: bold; }\n\n.form .form-control {\n  margin-bottom: 7px; }\n\n@media (min-width: 768px) {\n  #home {\n    margin-top: 50px; }\n  #home .slogan {\n    color: #0e385f;\n    line-height: 29px;\n    font-weight: bold; } }\n\n.dob {\n  font-size: 20px;\n  padding-top: 5px; }\n\n.enrollForm {\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55); }\n\nlabel {\n  color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "select#select {\n  height: 40px; }\n\nlegend {\n  color: #141823;\n  font-size: 25px;\n  font-weight: bold; }\n\n.signup-btn {\n  background: #79bc64;\n  background-image: linear-gradient(to bottom, #79bc64, #578843);\n  border-radius: 4px;\n  text-shadow: 0px 1px 0px #898a88;\n  box-shadow: 0px 0px 0px #a4e388;\n  font-family: Arial;\n  color: #ffffff;\n  font-size: 20px;\n  padding: 10px 20px 10px 20px;\n  border: solid #3b6e22 1px;\n  text-decoration: none; }\n\n.signup-btn:hover {\n  background: #79bc64;\n  background-image: linear-gradient(to bottom, #79bc64, #5e7056);\n  text-decoration: none; }\n\n.navbar-default .navbar-brand {\n  color: #fff;\n  font-size: 30px;\n  font-weight: bold; }\n\n.form .form-control {\n  margin-bottom: 7px; }\n\n@media (min-width: 768px) {\n  #home {\n    margin-top: 50px; }\n  #home .slogan {\n    color: #0e385f;\n    line-height: 29px;\n    font-weight: bold; } }\n\n.dob {\n  font-size: 20px;\n  padding-top: 5px; }\n\n.enrollForm {\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    return FileType;
}());
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream'
];
exports.FileType = FileType;


/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = __webpack_require__(7);
var core_1 = __webpack_require__(0);
var file_drop_directive_1 = __webpack_require__(668);
var file_select_directive_1 = __webpack_require__(670);
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
        exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
    })
], FileUploadModule);
exports.FileUploadModule = FileUploadModule;


/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <h4>Employees List</h4>\r\n            <div class=\"table-responsive\">\r\n                <table id=\"mytable\" class=\"table table-bordred table-striped\">\r\n                    <thead>\r\n                        <th>S.NO</th>\r\n                        <th>Employee ID</th>\r\n                        <th>Employee Name</th>\r\n                        <th>Email</th>\r\n                        <th>Contact</th>\r\n                        <th>Edit</th>\r\n                        <th>Delete</th>\r\n                    </thead>\r\n                    <tbody>\r\n\r\n\r\n                        <tr *ngFor=\"let user of usersdata; let i= index\">\r\n                            <td>{{i+1}}</td>\r\n                            <td>{{user.employeeId}}</td>\r\n                            <td>{{user.employeeName}}</td>\r\n                            <td>{{user.personalEmail}}</td>\r\n                            <td>{{user.primaryMobile}}</td>\r\n                            <td>\r\n                                <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\" (click)=editEmployee(user)><span class=\"glyphicon glyphicon-pencil\"></span></button></p>\r\n                            </td>\r\n                            <td>\r\n                                <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\"><span class=\"glyphicon glyphicon-trash\"></span></button></p>\r\n                            </td>\r\n                        </tr>\r\n\r\n                    </tbody>\r\n\r\n                </table>\r\n\r\n                <div class=\"clearfix\"></div>\r\n                <ul class=\"pagination pull-right\">\r\n                    <li class=\"disabled\"><a href=\"#\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a></li>\r\n                    <li class=\"active\"><a href=\"#\">1</a></li>\r\n                    <li><a href=\"#\">2</a></li>\r\n                    <li><a href=\"#\">3</a></li>\r\n                    <li><a href=\"#\">4</a></li>\r\n                    <li><a href=\"#\">5</a></li>\r\n                    <li><a href=\"#\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a></li>\r\n                </ul>\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"edit\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n                <h4 class=\"modal-title custom_align\" id=\"Heading\">Edit Your Detail</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group\">\r\n                    <label> Employee Name </label>\r\n                    <input class=\"form-control \" type=\"text\" placeholder=\"Employee Name\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input class=\"form-control \" type=\"text\" placeholder=\"Personal Email\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input class=\"form-control \" type=\"text\" placeholder=\"Employee Role\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input class=\"form-control \" type=\"text\" placeholder=\"Payroll Type\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input class=\"form-control \" type=\"text\" placeholder=\"Designation\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input class=\"form-control \" type=\"text\" placeholder=\"Reporting Manager\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input class=\"form-control \" type=\"text\" placeholder=\"Primary Mobile Number\">\r\n                </div>\r\n                <div class=\" form-group \">\r\n                    <input class=\"form-control \" type=\"date\" placeholder=\"Date of birth \">\r\n                </div>\r\n\r\n                <div class=\"form-group \">\r\n                    <textarea rows=\"2 \" class=\"form-control \" placeholder=\"Address\"></textarea>\r\n\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer \">\r\n                <button type=\"button \" class=\"btn btn-warning btn-lg \" style=\"width: 100%; \"><span class=\"glyphicon glyphicon-ok-sign \"></span> Update</button>\r\n            </div>\r\n        </div>\r\n        <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade \" id=\"delete \" tabindex=\"-1 \" role=\"dialog \" aria-labelledby=\"edit \" aria-hidden=\"true \">\r\n    <div class=\"modal-dialog \">\r\n        <div class=\"modal-content \">\r\n            <div class=\"modal-header \">\r\n                <button type=\"button \" class=\"close \" data-dismiss=\"modal \" aria-hidden=\"true \"><span class=\"glyphicon glyphicon-remove \" aria-hidden=\"true \"></span></button>\r\n                <h4 class=\"modal-title custom_align \" id=\"Heading \">Delete this entry</h4>\r\n            </div>\r\n            <div class=\"modal-body \">\r\n\r\n                <div class=\"alert alert-danger \"><span class=\"glyphicon glyphicon-warning-sign \"></span> Are you sure you want to delete this Record?</div>\r\n\r\n            </div>\r\n            <div class=\"modal-footer \">\r\n                <button type=\"button \" class=\"btn btn-success \"><span class=\"glyphicon glyphicon-ok-sign \"></span> Yes</button>\r\n                <button type=\"button \" class=\"btn btn-default \" data-dismiss=\"modal \"><span class=\"glyphicon glyphicon-remove \"></span> No</button>\r\n            </div>\r\n        </div>\r\n        <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n</div>"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"wrap\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 col-md-offset-3 enrollForm\">\r\n      <form role=\"form\" (submit)=\"onRegisterSubmit(user)\" novalidate #registerForm='ngForm' name=\"registerForm\" class=\"form\">\r\n\r\n        <!--h3>New Employee Registration</h3-->\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-6 col-md-6\">\r\n            <input type=\"text\" name=\"ename\" [(ngModel)]=\"user.ename\" value=\"\" class=\"form-control input-lg\" placeholder=\"Employee Name\"\r\n              required/> </div>\r\n          <div class=\"col-xs-6 col-md-6\">\r\n            <input type=\"text\" name=\"email\" [(ngModel)]=\"user.email\" class=\"form-control input-lg\" placeholder=\"Personal Email\" required\r\n            /> </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-6 col-md-6\">\r\n            <select id=\"select\" class=\"form-control input-lg\" name=\"erole\" [(ngModel)]=\"user.erole\">\r\n                      <option value=\"\" selected disabled>Employee Role</option>\r\n                      <option value=\"HR Executive\">HR Executive</option>\r\n                      <option value=\"Manager\">Manager</option>\r\n                        <option value=\"Employee\">Employee</option>\r\n                  </select>\r\n          </div>\r\n          <div class=\"col-xs-6 col-md-6\">\r\n            <select id=\"select\" [(ngModel)]=\"user.etype\" name=\"etype\" class=\"form-control input-lg\">\r\n                      <option value=\"\" selected disabled>Employee Type</option>\r\n                      <option value=\"Permanent\">Permanent</option>\r\n                      <option value=\"Temporary\">Temporary</option>\r\n                        <option value=\"Contract\">Contract</option>\r\n\r\n                  </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-6 col-md-6\">\r\n            <input type=\"text\" [(ngModel)]=\"user.ctc\" name=\"ctc\" class=\"form-control input-lg\" placeholder=\"Cost to Company\" required\r\n            /></div>\r\n          <div class=\"col-xs-6 col-md-6\">\r\n            <select id=\"select\" [(ngModel)]=\"user.epayroll\" name=\"epayroll\" class=\"form-control input-lg\">\r\n                      <option value=\"\" selected disabled>Payroll Type</option>\r\n                      <option value=\"Weekly\">Weekly</option>\r\n                      <option value=\"Biweekly\">Biweekly</option>\r\n                        <option value=\"Monthly\">Monthly</option>\r\n\r\n                  </select>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-6 col-md-6\">\r\n            <input type=\"text\" [(ngModel)]=\"user.designation\" name=\"designation\" class=\"form-control input-lg\" placeholder=\"Designation\"\r\n              required /></div>\r\n          <div class=\"col-xs-6 col-md-6\">\r\n            <select  id=\"select\" [(ngModel)]=\"user.rmanager\" name=\"rmanager\" class=\"form-control input-lg\">\r\n                      <option value=\"\" selected disabled>Reporting Manager ID</option>\r\n                      <option  *ngFor=\"let manager of managers\" [ngValue]=\"manager\">{{manager}}</option> \r\n                  </select>\r\n          </div>\r\n        </div>\r\n\r\n          <div class=\"row\">\r\n                    <div class=\"col-xs-6 col-md-6\">\r\n                        <input type=\"text\" name=\"mobile1\" [(ngModel)]=\"user.mobile1\" class=\"form-control input-lg\" placeholder=\"Primary mobile number\" required/> </div>\r\n                    <div class=\"col-xs-6 col-md-6\">\r\n                        <input type=\"text\" name=\"mobile2\" [(ngModel)]=\"user.mobile2\"  class=\"form-control input-lg\" placeholder=\"Alternate Mobile number\" required/> </div>\r\n                </div>\r\n                <label> Joined Date:</label>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12 col-md-12\">\r\n                        <input type=\"date\" name=\"doj\" [(ngModel)]=\"user.doj\"  class=\"form-control input-lg\" /> </div>\r\n\r\n                </div>\r\n                <label>Address:</label>\r\n                <input type=\"textarea\" name=\"address\" [(ngModel)]=\"user.address\" class=\"form-control input-lg\" />\r\n\r\n                <label>Birth Date:</label>\r\n                <input type=\"date\" name=\"dob\" [(ngModel)]=\"user.dob\" class=\"form-control input-lg\" />\r\n\r\n                <!--label>Gender : </label>\r\n                <input type=\"radio\" name=\"gender\" value=\"Male\" [(ngModel)]=\"user.gender\" required #gender=\"ngModel\">Male\r\n                <input type=\"radio\" name=\"gender\" value=\"Female\" [(ngModel)]=\"user.gender\" required #gender=\"ngModel\">Female-->\r\n\r\n                <label>Upload Photo:</label>\r\n                <div>\r\n                 <input type=\"file\" class=\"form-control\" name=\"single\" ng2FileSelect [uploader]=\"uploader\"/>\r\n                </div><br>\r\n                <div>\r\n                    <label>Job Status:</label>\r\n                    <input type=\"checkbox\" [(ngModel)]=\"user.jobstatus\" name=\"jobstatus\" value=\"job status\" required>\r\n                </div>\r\n\r\n\r\n\r\n\r\n        <button class=\"btn btn-lg btn-primary btn-block signup-btn\" type=\"submit\" [disabled]='!registerForm.form.valid'>\r\n                            Create Employee</button>\r\n\r\n\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<!--<ba-sidebar></ba-sidebar>-->\r\n<!--<ba-page-top></ba-page-top>-->\r\n<router-outlet></router-outlet>\r\n"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map