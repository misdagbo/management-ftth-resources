(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ng-bootstrap/ng-bootstrap'), require('@angular/common'), require('@angular/forms'), require('@angular/common/http'), require('ngx-toastr'), require('@ng-bootstrap/ng-bootstrap/modal/modal'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('helper', ['exports', '@angular/core', '@ng-bootstrap/ng-bootstrap', '@angular/common', '@angular/forms', '@angular/common/http', 'ngx-toastr', '@ng-bootstrap/ng-bootstrap/modal/modal', 'rxjs'], factory) :
    (factory((global.helper = {}),global.ng.core,null,global.ng.common,global.ng.forms,global.ng.common.http,null,null,global.rxjs));
}(this, (function (exports,i0,ngBootstrap,common,forms,i1,i1$1,i1$2,rxjs) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ LANG_FR_NAME = 'fr';
    var /** @type {?} */ LANG_FR_TRANS = {
        // ASIDE_NAV SECTION
        'ASIDE_NAV_SETTING': 'Paramètres',
        'ASIDE_NAV_SETTING_LANGUAGE': 'Langue',
        'ASIDE_NAV_SETTING_LANGUAGE_FRENCH': 'Français',
        'ASIDE_NAV_SETTING_LANGUAGE_ENGLISH': 'Anglais',
        'ASIDE_NAV_ADMINISTRATION': 'Administration',
        'ASIDE_NAV_PROFILE': 'Profils',
        'ASIDE_NAV_REQUEST': 'Demandes',
        'ASIDE_NAV_RESOURCE': 'Ressources',
        'ASIDE_NAV_HELP': 'Aide',
        'ASIDE_NAV_REPORT': 'Rapports',
        'ASIDE_NAV_LOGOUT': 'Déconnexion',
        'ASIDE_NAV_DASHBOARD': 'Tableau de bord',
        // HEADER_NAV SECTION
        // NOTIFY TITLE SECTION
        'NOTIFY_INFORMATION_TITLE': 'Information',
        'NOTIFY_SUCCESS_TITLE': 'Succès',
        'NOTIFY_WARNING_TITLE': 'Avertissement',
        'NOTIFY_ERROR_TITLE': 'Erreur',
        // NOTIFY MESSAGE SECTION
        'NOTIFY_SUCCESS_MESSAGE': 'Opération effectuée',
        'NOTIFY_ERROR_MESSAGE': 'Une erreur s\'est produite',
        'NOTIFY_CONFIRM_TITLE': 'Confirmation',
        'NOTIFY_CONFIRM_TEXT': 'Voulez-vous continuer?',
        'NOTIFY_CONFIRM_YES': 'Oui',
        'NOTIFY_CONFIRM_NO': 'Non'
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ LANG_EN_NAME = 'en';
    var /** @type {?} */ LANG_EN_TRANS = {
        // ASIDE_NAV SECTION
        'ASIDE_NAV_SETTING': 'Settings',
        'ASIDE_NAV_SETTING_LANGUAGE': 'Language',
        'ASIDE_NAV_SETTING_LANGUAGE_FRENCH': 'French',
        'ASIDE_NAV_SETTING_LANGUAGE_ENGLISH': 'English',
        'ASIDE_NAV_ADMINISTRATION': 'Administration',
        'ASIDE_NAV_PROFILE': 'Profiles',
        'ASIDE_NAV_REQUEST': 'Requests',
        'ASIDE_NAV_RESOURCE': 'Resources',
        'ASIDE_NAV_HELP': 'Help',
        'ASIDE_NAV_ASSISTANCE': 'Assistance',
        'ASIDE_NAV_REPORT': 'Reports',
        'ASIDE_NAV_LOGOUT': 'Logout',
        'ASIDE_NAV_DASHBOARD': 'Dashboard',
        // HEADER_NAV SECTION
        // NOTIFY TITLE SECTION
        'NOTIFY_INFORMATION_TITLE': 'Information',
        'NOTIFY_SUCCESS_TITLE': 'Success',
        'NOTIFY_WARNING_TITLE': 'Warning',
        'NOTIFY_ERROR_TITLE': 'Error',
        // NOTIFY MESSAGE SECTION
        'NOTIFY_SUCCESS_MESSAGE': 'Operation successfully',
        'NOTIFY_ERROR_MESSAGE': 'An error has occurred',
        'NOTIFY_CONFIRM_TITLE': 'Confirm',
        'NOTIFY_CONFIRM_TEXT': 'Do you want to continue?',
        'NOTIFY_CONFIRM_YES': 'Yes',
        'NOTIFY_CONFIRM_NO': 'No'
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ TRANSLATES = new i0.InjectionToken('translates');
    var /** @type {?} */ _translates = (_a = {},
        _a[LANG_FR_NAME] = LANG_FR_TRANS,
        _a[LANG_EN_NAME] = LANG_EN_TRANS,
        _a);
    var /** @type {?} */ TranslateProviders = [
        { provide: TRANSLATES, useValue: _translates }
    ];
    var _a;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TranslateService = (function () {
        function TranslateService(_translate) {
            this._translate = _translate;
        }
        Object.defineProperty(TranslateService.prototype, "currentLang", {
            get: /**
             * @return {?}
             */ function () {
                return this._currentLang;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} lang
         * @return {?}
         */
        TranslateService.prototype.use = /**
         * @param {?} lang
         * @return {?}
         */
            function (lang) {
                this._currentLang = lang;
            };
        /**
         * @param {?} key
         * @return {?}
         */
        TranslateService.prototype.translate = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                var /** @type {?} */ translation = key;
                if (this._translate[this.currentLang] && this._translate[this.currentLang][key]) {
                    return this._translate[this.currentLang][key];
                }
                return translation;
            };
        /**
         * @param {?} key
         * @return {?}
         */
        TranslateService.prototype.instant = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return this.translate(key);
            };
        TranslateService.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        TranslateService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [TRANSLATES,] },] },
            ];
        };
        return TranslateService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TranslatePipe = (function () {
        function TranslatePipe(_translateService) {
            this._translateService = _translateService;
        }
        /**
         * @param {?} value
         * @param {?} args
         * @return {?}
         */
        TranslatePipe.prototype.transform = /**
         * @param {?} value
         * @param {?} args
         * @return {?}
         */
            function (value, args) {
                if (!value) {
                    return;
                }
                return this._translateService.instant(value);
            };
        TranslatePipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'translate',
                        pure: false
                    },] },
        ];
        /** @nocollapse */
        TranslatePipe.ctorParameters = function () {
            return [
                { type: TranslateService, },
            ];
        };
        return TranslatePipe;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var UIViewDirective = (function () {
        function UIViewDirective(viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
        }
        UIViewDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ui-view]'
                    },] },
        ];
        /** @nocollapse */
        UIViewDirective.ctorParameters = function () {
            return [
                { type: i0.ViewContainerRef, },
            ];
        };
        UIViewDirective.propDecorators = {
            "data": [{ type: i0.Input },],
        };
        return UIViewDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AdvancedTableComponent = (function () {
        function AdvancedTableComponent(componentFactoryResolver) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.columns = [];
            this.dataSource = [];
            this.checkedRows = [];
            this.indexChange = new i0.EventEmitter();
            this.sizeChange = new i0.EventEmitter();
            this.countChange = new i0.EventEmitter();
            this.checkedRowsChange = new i0.EventEmitter();
            this.onCreate = new i0.EventEmitter();
            this.onValidate = new i0.EventEmitter();
            this.onModify = new i0.EventEmitter();
            this.onDelete = new i0.EventEmitter();
            this.onRefresh = new i0.EventEmitter();
            this.onSelect = new i0.EventEmitter();
            this.onSearch = new i0.EventEmitter();
            this.onPageChange = new i0.EventEmitter();
        }
        Object.defineProperty(AdvancedTableComponent.prototype, "viewContainerRef", {
            set: /**
             * @param {?} uiView
             * @return {?}
             */ function (uiView) {
                var _this = this;
                if (uiView) {
                    setTimeout(function () {
                        _this._viewContainerRef = uiView.viewContainerRef;
                        if (_this._viewContainerRef) {
                            _this._viewContainerRef.clear();
                        }
                        var /** @type {?} */ _componentFactory = _this.componentFactoryResolver.resolveComponentFactory(_this.viewChild);
                        _this.componentRef = _this._viewContainerRef.createComponent(_componentFactory);
                        _this.componentRef.instance.data = uiView.data;
                    }, 0);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        AdvancedTableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._ngbPagination = {
                    page: 1,
                    pageSize: this.size,
                    maxSize: this.maxSize || 3,
                    ellipses: true,
                    rotate: true,
                    boundaryLinks: false,
                    pageChange: function (page) {
                        _this.index = (page * _this._ngbPagination.pageSize) - _this._ngbPagination.pageSize;
                        _this.indexChange.emit(_this.index);
                        _this.size = _this._ngbPagination.pageSize;
                        _this.sizeChange.emit(_this.size);
                        _this.onPageChange.emit();
                    },
                    rowStart: function () {
                        return 1 + (_this._ngbPagination.pageSize * (_this._ngbPagination.page - 1));
                    },
                    rowEnd: function () {
                        return Number(_this._ngbPagination.pageSize) + Number(Number(_this._ngbPagination.pageSize) * (Number(_this._ngbPagination.page) - 1));
                    }
                };
            };
        /**
         * @return {?}
         */
        AdvancedTableComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.componentRef) {
                    this.componentRef.destroy();
                }
            };
        /**
         * @return {?}
         */
        AdvancedTableComponent.prototype.doSearch = /**
         * @return {?}
         */
            function () {
                this.onSearch.emit(this._searchParam);
            };
        /**
         * @param {?} rowOpened
         * @return {?}
         */
        AdvancedTableComponent.prototype.doOpen = /**
         * @param {?} rowOpened
         * @return {?}
         */
            function (rowOpened) {
                try {
                    for (var _a = __values(this.dataSource), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var row = _b.value;
                        row.isOpen = false;
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                rowOpened.isOpen = true;
                var e_1, _c;
            };
        /**
         * @param {?} row
         * @return {?}
         */
        AdvancedTableComponent.prototype.doClose = /**
         * @param {?} row
         * @return {?}
         */
            function (row) {
                row.isOpen = false;
            };
        /**
         * @param {?} column
         * @return {?}
         */
        AdvancedTableComponent.prototype.doSorting = /**
         * @param {?} column
         * @return {?}
         */
            function (column) {
                if (column.isSorting) {
                    if (column.isSortUp) {
                        this.dataSource = Enumerable.From(this.dataSource)
                            .OrderByDescending(function (x) { return x[column.name]; })
                            .Select(function (x) { return x; })
                            .ToArray();
                        column.isSortUp = false;
                    }
                    else {
                        this.dataSource = Enumerable.From(this.dataSource)
                            .OrderBy(function (x) { return x[column.name]; })
                            .Select(function (x) { return x; })
                            .ToArray();
                        column.isSortUp = true;
                    }
                }
            };
        /**
         * @return {?}
         */
        AdvancedTableComponent.prototype.doUnCheckRows = /**
         * @return {?}
         */
            function () {
                try {
                    for (var _a = __values(this.dataSource), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var row = _b.value;
                        row.checked = false;
                    }
                }
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_2)
                            throw e_2.error;
                    }
                }
                this.checkedRows.length = 0;
                this.checkedRowsChange.emit(this.checkedRows);
                var e_2, _c;
            };
        /**
         * @return {?}
         */
        AdvancedTableComponent.prototype.doCheckRows = /**
         * @return {?}
         */
            function () {
                if (this._isCheckedRows) {
                    try {
                        for (var _a = __values(this.dataSource), _b = _a.next(); !_b.done; _b = _a.next()) {
                            var row = _b.value;
                            row.checked = true;
                            this.checkedRows.push(row);
                        }
                    }
                    catch (e_3_1) {
                        e_3 = { error: e_3_1 };
                    }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return))
                                _c.call(_a);
                        }
                        finally {
                            if (e_3)
                                throw e_3.error;
                        }
                    }
                    this.checkedRowsChange.emit(this.checkedRows);
                }
                else {
                    this.doUnCheckRows();
                }
                var e_3, _c;
            };
        /**
         * @param {?} row
         * @return {?}
         */
        AdvancedTableComponent.prototype.doCheck = /**
         * @param {?} row
         * @return {?}
         */
            function (row) {
                if (row.checked) {
                    this.checkedRows.push(row);
                }
                else {
                    var /** @type {?} */ i = this.checkedRows.indexOf(row);
                    this.checkedRows.splice(i, 1);
                }
                this.checkedRowsChange.emit(this.checkedRows);
            };
        /**
         * @return {?}
         */
        AdvancedTableComponent.prototype.doRefresh = /**
         * @return {?}
         */
            function () {
                this._searchParam = null;
                this._isCheckedRows = false;
                if (this.checkedRows) {
                    this.checkedRows.length = 0;
                    this.checkedRowsChange.emit(this.checkedRows);
                }
                this.onRefresh.emit();
            };
        /**
         * @param {?} rowSelected
         * @return {?}
         */
        AdvancedTableComponent.prototype.doSelect = /**
         * @param {?} rowSelected
         * @return {?}
         */
            function (rowSelected) {
                if (this.isSelected) {
                    try {
                        for (var _a = __values(this.dataSource), _b = _a.next(); !_b.done; _b = _a.next()) {
                            var row = _b.value;
                            row.selected = false;
                        }
                    }
                    catch (e_4_1) {
                        e_4 = { error: e_4_1 };
                    }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return))
                                _c.call(_a);
                        }
                        finally {
                            if (e_4)
                                throw e_4.error;
                        }
                    }
                    rowSelected.selected = true;
                    this.onSelect.emit(rowSelected);
                }
                var e_4, _c;
            };
        /**
         * @return {?}
         */
        AdvancedTableComponent.prototype.doCreate = /**
         * @return {?}
         */
            function () {
                this.onCreate.emit();
            };
        /**
         * @param {?} row
         * @return {?}
         */
        AdvancedTableComponent.prototype.doEditable = /**
         * @param {?} row
         * @return {?}
         */
            function (row) {
                row.editable = true;
            };
        /**
         * @param {?} row
         * @return {?}
         */
        AdvancedTableComponent.prototype.doValidate = /**
         * @param {?} row
         * @return {?}
         */
            function (row) {
                this.onValidate.emit(row);
                row.editable = false;
            };
        /**
         * @param {?} row
         * @return {?}
         */
        AdvancedTableComponent.prototype.doCancel = /**
         * @param {?} row
         * @return {?}
         */
            function (row) {
                row.editable = false;
            };
        /**
         * @param {?} row
         * @return {?}
         */
        AdvancedTableComponent.prototype.doModify = /**
         * @param {?} row
         * @return {?}
         */
            function (row) {
                if (this.isModify) {
                    this.onModify.emit(row);
                }
            };
        /**
         * @param {?} row
         * @return {?}
         */
        AdvancedTableComponent.prototype.doDelete = /**
         * @param {?} row
         * @return {?}
         */
            function (row) {
                this.onDelete.emit(row);
            };
        AdvancedTableComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'helper-advanced-table',
                        template: "<div class=\"table-responsive\">\n  <div class=\"hero-callout\" [style.font-size.px]=\"szTable === 'sm' ? '11' : '13'\">\n    <div class=\"form-group m-form__group row align-items-center\" style=\"margin-bottom: 4px;\">\n      <div [ngClass]=\"{ 'sm': 'col-10', 'md': 'col-9', 'lg': 'col-8', 'sz-6': 'col-6', 'sz-5': 'col-7' }[szSearch]\"\n        *ngIf=\"!isTakeAll\">\n        <label>\n          Affiche\n          <select [(ngModel)]=\"_ngbPagination.pageSize\" (ngModelChange)=\"_ngbPagination.pageChange(_ngbPagination.page)\">\n            <option value=\"5\">5</option>\n            <option value=\"10\">10</option>\n            <option value=\"12\">12</option>\n            <option value=\"25\">25</option>\n            <option value=\"50\">50</option>\n            <option value=\"100\">100</option>\n          </select>\n          entr\u00E9es\n        </label>\n      </div>\n      <div [ngClass]=\"{ 'sm': 'col-2 d-flex justify-content-end', 'md': 'col-3 d-flex justify-content-end', 'lg': 'col-4 d-flex justify-content-end', 'sz-6': 'col-6 d-flex justify-content-end', 'sz-5': 'col-5 d-flex justify-content-end' }[szSearch]\"\n        *ngIf=\"isSearch\">\n        <div class=\"m-input-icon m-input-icon--left\">\n          <input type=\"text\" class=\"form-control form-control-sm m-input\" style=\"border:1px solid #ddd;\" [(ngModel)]=\"_searchParam\"\n            placeholder=\"Recherche...\" (ngModelChange)=\"doSearch()\">\n          <span class=\"m-input-icon__icon m-input-icon__icon--left\">\n            <span>\n              <i class=\"flaticon-search\"></i>\n            </span>\n          </span>\n        </div>\n      </div>\n    </div>\n    <table class=\"table table-striped table-hover advanced-table m-table\">\n      <thead>\n        <tr>\n          <th class=\"th-1\" *ngIf=\"isRefresh && !isNumber\" (click)=\"doRefresh()\">\n            <i class=\"fa fa-refresh\" [style.font-size.px]=\"szTable === 'sm' ? '13' : '14'\"></i>\n          </th>\n          <th *ngIf=\"isDetails\"></th>\n          <th *ngIf=\"isSelected && !isChecked\"></th>\n          <th *ngIf=\"isChecked && !isSelected\">\n            <input type=\"checkbox\" [(ngModel)]=\"_isCheckedRows\" (ngModelChange)=\"doCheckRows()\">\n          </th>\n          <th *ngIf=\"isNumber && !isRefresh\">N\u00B0</th>\n          <th *ngFor=\"let column of columns\" (click)=\"doSorting(column);\">\n            {{column.text}}\n            <i class=\"la la-arrow-up i--filter\" *ngIf=\"column.isSorting && !column.isSortUp\"></i>\n            <i class=\"la la-arrow-down i--filter\" *ngIf=\"column.isSorting && column.isSortUp\"></i>\n          </th>\n          <th class=\"th-1\" *ngIf=\"isEditable\">\n            <div class=\"dropdown btn-group\">\n              <a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" [style.font-size.px]=\"szTable === 'sm' ? '11' : '12'\">\n                <span class=\"fa fa-cog\"></span>\n                <span class=\"caret\"></span>\n              </a>\n              <ul class=\"dropdown-menu\" style=\"cursor: pointer;\" [style.font-size.px]=\"szTable === 'sm' ? '11' : '12'\">\n                <li *ngIf=\"isCreate\" (click)=\"doCreate()\"><a>Nouveau</a></li>\n                <li><a>Exporter</a></li>\n              </ul>\n            </div>\n          </th>\n          <th class=\"th-1\" *ngIf=\"isModify\">\n            <div class=\"dropdown btn-group\">\n              <a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" [style.font-size.px]=\"szTable === 'sm' ? '11' : '12'\">\n                <span class=\"fa fa-cog\"></span>\n                <span class=\"caret\"></span>\n              </a>\n              <ul class=\"dropdown-menu\" style=\"cursor: pointer;\" [style.font-size.px]=\"szTable === 'sm' ? '11' : '12'\">\n                <li *ngIf=\"isCreate\" (click)=\"doCreate()\"><a>Nouveau</a></li>\n                <li><a>Exporter</a></li>\n              </ul>\n            </div>\n          </th>\n          <th class=\"th-1\" *ngIf=\"!isModify && !isEditable && !isDeleted && !isCreate\">\n            <div class=\"dropdown btn-group\">\n              <a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" [style.font-size.px]=\"szTable === 'sm' ? '11' : '12'\">\n                <span class=\"fa fa-cog\"></span>\n                <span class=\"caret\"></span>\n              </a>\n              <ul class=\"dropdown-menu\" style=\"cursor: pointer;\" [style.font-size.px]=\"szTable === 'sm' ? '11' : '12'\">\n                <li><a>Exporter</a></li>\n              </ul>\n            </div>\n          </th>\n          <th class=\"th-1\" *ngIf=\"isDeleted\">\n            <div class=\"dropdown btn-group\">\n              <a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" [style.font-size.px]=\"szTable === 'sm' ? '11' : '12'\">\n                <span class=\"fa fa-cog\"></span>\n                <span class=\"caret\"></span>\n              </a>\n              <ul class=\"dropdown-menu\" style=\"cursor: pointer;\" [style.font-size.px]=\"szTable === 'sm' ? '11' : '12'\">\n                <li *ngIf=\"isCreate\" (click)=\"doCreate()\"><a>Nouveau</a></li>\n                <li><a>Exporter</a></li>\n              </ul>\n            </div>\n          </th>\n        </tr>\n      </thead>\n      <tbody *ngFor=\"let row of dataSource; let i = index;\" style=\"border: none;\">\n        <tr class=\"__r\" (dblclick)=\"doModify(row)\" (click)=\"doSelect(row)\">\n          <td class=\"td-1\" [class.td--active]=\"row.checked || row.selected\" *ngIf=\"isRefresh && !isNumber\">\n            {{ (i + 1) + (_ngbPagination.pageSize * (_ngbPagination.page - 1)) }}\n          </td>\n          <td class=\"td-1\" [class.td--active]=\"row.checked || row.selected\" *ngIf=\"isDetails\">\n            <span class=\"dt-btn-plus\" [style.font-size.px]=\"szTable === 'sm' ? '11' : '13'\" (click)=\"doOpen(row)\" *ngIf=\"!row.isOpen\">+</span>\n            <span class=\"dt-btn-minius\" [style.font-size.px]=\"szTable === 'sm' ? '11' : '13'\" (click)=\"doClose(row)\"\n              *ngIf=\"row.isOpen\">-</span>\n          </td>\n          <td class=\"td-1\" [class.td--active]=\"row.checked || row.selected\" *ngIf=\"isSelected && !isChecked\">\n            <input type=\"radio\" name=\"radio\" [checked]=\"row.selected === true\">\n          </td>\n          <td class=\"td-1\" [class.td--active]=\"row.checked || row.selected\" *ngIf=\"isChecked && !isSelected\">\n            <input type=\"checkbox\" [(ngModel)]=\"row.checked\" (ngModelChange)=\"doCheck(row)\">\n          </td>\n          <td class=\"td-1\" [class.td--active]=\"row.checked || row.selected\" *ngIf=\"isNumber && !isRefresh\">\n            {{ (i + 1) + (_ngbPagination.pageSize * (_ngbPagination.page - 1)) }}\n          </td>\n          <td class=\"td-2\" [class.td--active]=\"row.checked || row.selected\" *ngFor=\"let column of columns\">\n            <span *ngIf=\"!column.isEditable || !row.editable\">{{row[column.name]}}</span>\n            <input *ngIf=\"column.isEditable && row.editable\" type=\"text\" class=\"form-control form-control-sm m-input m-input--square\"\n              style=\"border: 1px solid #ddd;\" [(ngModel)]=\"row[column.name]\" />\n          </td>\n          <td class=\"td-1\" [class.td--active]=\"row.checked || row.selected\" *ngIf=\"isEditable && !isModify\">\n            <img *ngIf=\"!row.editable && isEditable\" src=\"../../../assets/app/media/img/icons/if_Modify_132685.png\"\n              (click)=\"doEditable(row)\" width=\"12\" height=\"12\" />\n            <img *ngIf=\"row.editable && isEditable\" src=\"../../../assets/app/media/img/icons/if_floppy_disk_save_103863.png\"\n              (click)=\"doValidate(row)\" width=\"12\" height=\"12\" style=\"margin-right: 6px;\" />\n            <img *ngIf=\"row.editable && isEditable\" src=\"../../../assets/app/media/img/icons/if_f-cross_256_282471.png\"\n              (click)=\"doCancel(row)\" width=\"12\" height=\"12\" />\n          </td>\n          <td class=\"td-1\" [class.td--active]=\"row.checked || row.selected\" *ngIf=\"isModify && !isEditable\" (click)=\"doModify(row)\">\n            <img src=\"../../../assets/app/media/img/icons/if_Modify_132685.png\" width=\"12\" height=\"12\" />\n          </td>\n          <td class=\"td-1\" [class.td--active]=\"row.checked || row.selected\" *ngIf=\"isDeleted\" (click)=\"doDelete(row)\">\n            <img src=\"../../../assets/app/media/img/icons/if_Erase_132784.png\" width=\"12\" height=\"12\" />\n          </td>\n          <td [class.td--active]=\"row.checked || row.selected\" *ngIf=\"!isModify && !isEditable && !isDeleted && !isCreate\"></td>\n        </tr>\n        <tr *ngIf=\"row.isOpen\">\n          <td class=\"sub--r\" [attr.colspan]=\"columns.length + 8\">\n            <ng-template ui-view [data]=\"row\"></ng-template>\n          </td>\n        </tr>\n      </tbody>\n      <tbody *ngIf=\"!count\" style=\"border: none\">\n        <tr>\n          <td class=\"sub--r-1\" [attr.colspan]=\"columns.length + 8\" style=\"text-align: center\">Aucune donn&eacute;e</td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"form-group m-form__group row align-items-center\" style=\"margin-bottom: 0px;\" *ngIf=\"!isTakeAll && count\">\n      <div class=\"col-md-4\" style=\"top: -7px;\">\n        <span>\n          Affichage {{ _ngbPagination.rowStart() }} \u00E0 {{ _ngbPagination.rowEnd() > count ? count :\n          _ngbPagination.rowEnd() }} de {{count}}\n          entr\u00E9es\n        </span>\n      </div>\n      <div class=\"col-md-8\">\n        <ngb-pagination [ellipses]=\"_ngbPagination.ellipses\" [collectionSize]=\"count\" class=\"d-flex justify-content-end\"\n          [(page)]=\"_ngbPagination.page\" [maxSize]=\"_ngbPagination.maxSize\" [rotate]=\"_ngbPagination.rotate\"\n          [boundaryLinks]=\"_ngbPagination.boundaryLinks\" [pageSize]=\"_ngbPagination.pageSize\" (pageChange)=\"_ngbPagination.pageChange(_ngbPagination.page)\"></ngb-pagination>\n      </div>\n    </div>\n  </div>\n</div>",
                        styles: [".table-responsive{overflow:hidden}.table{border-bottom:1px solid #111;border-spacing:0;overflow:inherit;overflow-x:visible;overflow-y:visible;height:100%;width:100%}.table-striped>tbody:nth-of-type(2n)>tr.__r{background-color:#fff}.table-striped>tbody:nth-of-type(2n+1)>tr.__r{background-color:#f9f9f9}.table-striped>tbody:last-child>tr.__r:hover>td{border-bottom:none}.table-striped>tbody:last-child>tr.__r>td.td--active{border-bottom:none!important}.table-striped>tbody>tr.__r:hover>td{background-color:#daf1ff;border-top:1px solid #6bbef2;border-bottom:1px solid #6bbef2}.table th,td{padding:6px 10px}.table td{max-width:200px;white-space:nowrap;-ms-text-overflow:ellipsis;text-overflow:ellipsis;border-top:1px solid #ddd;font-weight:400;color:#333;cursor:pointer;overflow:visible}.table th{background-color:#fff;position:relative;font-weight:600;border-top:none;border-right:none;border-left:none;vertical-align:middle;border-bottom:1px solid #111;background-repeat:no-repeat;background-position:center right;cursor:pointer;overflow:visible}.dt-btn-plus{top:9px;left:4px;height:12px;width:12px;display:block;color:#fff;border:2px solid #fff;border-radius:14px;box-shadow:0 0 3px #444;box-sizing:content-box;text-align:center;text-indent:0!important;line-height:12px;background-color:#31b131}.dt-btn-minius{top:9px;left:4px;height:12px;width:12px;display:block;color:#fff;border:2px solid #fff;border-radius:14px;box-shadow:0 0 3px #444;box-sizing:content-box;text-align:center;text-indent:0!important;line-height:12px;background-color:#d33333}.td-1,.th-1{width:5px;cursor:pointer;vertical-align:middle;text-align:center}.td-2{vertical-align:middle}.hero-callout{padding:10px;box-shadow:3px 3px 20px rgba(0,0,0,.3);border-radius:3px}.td--active{background-color:#daf1ff;border-top:1px solid #6bbef2!important;border-bottom:1px solid #6bbef2!important}.i--filter{font-size:13px;display:inline-block;position:relative;right:-10px;line-height:0;vertical-align:middle}.sub--r{background-color:#f9f9f9!important;padding:10px}.sub--r:hover{background-color:none!important;border-top:1px solid #ddd!important;border-bottom:1px solid #111!important;padding:10px}.sub--r-1{background-color:#f9f9f9!important;padding:6px 10px}.sub--r-1:hover{background-color:none!important;border-bottom:1px solid #111!important;padding:6px 10px}.btn{border-radius:4px;border:1px solid #979797;height:21px;color:#000;line-height:19px;white-space:nowrap;padding:3px 5px 18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;margin-bottom:0;font-weight:400}.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px solid;border-right:4px solid transparent;border-left:4px solid transparent}a.dropdown-toggle{color:#616161!important}ul.dropdown-menu{right:0!important;top:100%!important;float:none;color:#000;line-height:3px;border-radius:5px!important;font-weight:500;padding:4px;-webkit-transform:none!important;transform:none!important}.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{bottom:auto;left:auto!important}ul.dropdown-menu a:hover{font-weight:600;color:#fff;background-image:linear-gradient(-179deg,#6288f8 0,#2261f6 100%);border-top:1px solid #587fee;border-bottom:1px solid #0d52eb}.dropdown-toggle::after{display:none}.btn-group{white-space:nowrap}.btn-group .btn{float:none;display:inline-block}.__header{border-bottom:1px solid #ddd;padding-bottom:8px;margin-top:-10px}"],
                        encapsulation: i0.ViewEncapsulation.Emulated,
                    },] },
        ];
        /** @nocollapse */
        AdvancedTableComponent.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver, },
            ];
        };
        AdvancedTableComponent.propDecorators = {
            "index": [{ type: i0.Input, args: ['index',] },],
            "size": [{ type: i0.Input, args: ['size',] },],
            "count": [{ type: i0.Input, args: ['count',] },],
            "szTable": [{ type: i0.Input, args: ['sz-table',] },],
            "szSearch": [{ type: i0.Input, args: ['sz-search',] },],
            "isHeader": [{ type: i0.Input, args: ['is-header',] },],
            "isCreate": [{ type: i0.Input, args: ['is-create',] },],
            "isRefresh": [{ type: i0.Input, args: ['is-refresh',] },],
            "isNumber": [{ type: i0.Input, args: ['is-number',] },],
            "isEditable": [{ type: i0.Input, args: ['is-editable',] },],
            "isModify": [{ type: i0.Input, args: ['is-modify',] },],
            "isTakeAll": [{ type: i0.Input, args: ['is-take-all',] },],
            "maxSize": [{ type: i0.Input, args: ['max-size',] },],
            "isDeleted": [{ type: i0.Input, args: ['is-deleted',] },],
            "isSearch": [{ type: i0.Input, args: ['is-search',] },],
            "isDetails": [{ type: i0.Input, args: ['is-details',] },],
            "isChecked": [{ type: i0.Input, args: ['is-checked',] },],
            "isSelected": [{ type: i0.Input, args: ['is-selected',] },],
            "columns": [{ type: i0.Input, args: ['columns',] },],
            "dataSource": [{ type: i0.Input, args: ['data-source',] },],
            "checkedRows": [{ type: i0.Input, args: ['checked-rows',] },],
            "viewChild": [{ type: i0.Input, args: ['view-child',] },],
            "indexChange": [{ type: i0.Output },],
            "sizeChange": [{ type: i0.Output },],
            "countChange": [{ type: i0.Output },],
            "checkedRowsChange": [{ type: i0.Output },],
            "onCreate": [{ type: i0.Output },],
            "onValidate": [{ type: i0.Output },],
            "onModify": [{ type: i0.Output },],
            "onDelete": [{ type: i0.Output },],
            "onRefresh": [{ type: i0.Output },],
            "onSelect": [{ type: i0.Output },],
            "onSearch": [{ type: i0.Output },],
            "onPageChange": [{ type: i0.Output },],
            "viewContainerRef": [{ type: i0.ViewChild, args: [UIViewDirective,] },],
        };
        return AdvancedTableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var UpperCaseDirective = (function () {
        function UpperCaseDirective() {
            this.ngModelChange = new i0.EventEmitter();
        }
        /**
         * @param {?} $event
         * @return {?}
         */
        UpperCaseDirective.prototype.onModelChange = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                this.ngModel = $event.target.value.toUpperCase();
                this.ngModelChange.emit(this.ngModel);
            };
        UpperCaseDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ngModel][upper-case]'
                    },] },
        ];
        /** @nocollapse */
        UpperCaseDirective.ctorParameters = function () { return []; };
        UpperCaseDirective.propDecorators = {
            "ngModelChange": [{ type: i0.Output },],
            "onModelChange": [{ type: i0.HostListener, args: ['input', ['$event'],] },],
        };
        return UpperCaseDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var HelperModule = (function () {
        function HelperModule() {
        }
        /**
         * @return {?}
         */
        HelperModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: HelperModule,
                    providers: [
                        TranslateProviders,
                        TranslateService
                    ]
                };
            };
        HelperModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            TranslatePipe,
                            AdvancedTableComponent,
                            UIViewDirective,
                            UpperCaseDirective,
                        ],
                        exports: [
                            TranslatePipe,
                            AdvancedTableComponent,
                            UIViewDirective,
                            UpperCaseDirective,
                        ],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            i1.HttpClientModule,
                            ngBootstrap.NgbModule.forRoot(),
                        ],
                    },] },
        ];
        return HelperModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RequestBase = (function () {
        function RequestBase(index, size, takeAll, isAnd, orderBy, lang) {
            this.index = index;
            this.size = size;
            this.takeAll = takeAll;
            this.isAnd = isAnd;
            this.orderBy = orderBy;
            this.lang = lang;
        }
        return RequestBase;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ GlobalEnum = {
        // BACKEND PARAMETERS SECTION
        _INDEX: 0,
        _SIZE: 5,
        _TAKE_ALL: false,
        _IS_AND: true,
        _ORDER_BY_DESC: 'desc',
        _ORDER_BY_ASC: 'asc',
        _LANG: 'fr',
        // ADVANCED TABLE
        _SM: 'sm',
        _MD: 'md',
        _LG: 'lg',
        _SZ_6: 'sz-6',
        _SZ_5: 'sz-5',
        // HTTP PARAMETERS SECTION
        _SHOW_LOADER: 'false',
        _SHOW_ERROR_MESSAGE: 'false',
        _SHOW_INFO_MESSAGE: 'false',
        // TRANSLATE SECTION
        _LANGUAGE_FR: 'fr',
        _LANGUAGE_EN: 'en',
        // CODE ERROR
        _IMPLICIT_ERROR: '801',
        // OPERATOR ENUM
        _EQUAL: '=',
        _NOT_EQUAL_1: '<>',
        _NOT_EQUAL_2: '!=',
        _LESS_OR_EQUAL: '<=',
        _LESS: '<',
        _MORE_OR_EQUAL: '>=',
        _MORE: '>',
        _BETWEEN: '[]',
        _BETWEEN_OUT: '][',
        _BETWEEN_LEFT_OUT: ']]',
        _BETWEEN_RIGHT_OUT: '[[',
        _CONTAINS: '%%',
        _START_WTIH: '_%',
        _END_WTIH: '%_',
        // STATE
        _DISPONIBLE: 1,
        _OCCUPE: 2,
        _RESERVE: 3,
        _NON_UTILISABLE: 4,
        _EN_ATTENTE: 5,
        _ATTRIBUEE_NON_ACTIF: 6,
        _EVITER_SATURATION: 7,
        _RESILIER: 8,
        _MAUVAIS: 9,
        _VT: 10,
        _ETEINT: 11,
        _ALLUME: 12,
        _ALLUME_SRO: 13,
        _ALLUME_CLIENT: 14,
        _ALLUME_OLT: 15,
        _NOT_USED: 16,
        _OFF_USED: 17,
        _ALLUME_USED: 18
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     */
    var Request = (function (_super) {
        __extends(Request, _super);
        function Request() {
            return _super.call(this, GlobalEnum._INDEX, GlobalEnum._SIZE, GlobalEnum._TAKE_ALL, GlobalEnum._IS_AND, GlobalEnum._ORDER_BY_DESC, GlobalEnum._LANG) || this;
        }
        Request.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: HelperModule
                    },] },
        ];
        /** @nocollapse */
        Request.ctorParameters = function () { return []; };
        /** @nocollapse */ Request.ngInjectableDef = i0.defineInjectable({ factory: function Request_Factory() { return new Request(); }, token: Request, providedIn: HelperModule });
        return Request;
    }(RequestBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ResponseBase = (function () {
        function ResponseBase(status) {
            this.status = status;
        }
        return ResponseBase;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Status = (function () {
        function Status() {
        }
        Status.decorators = [
            { type: i0.Injectable },
        ];
        return Status;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     */
    var Response = (function (_super) {
        __extends(Response, _super);
        function Response() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Response.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: HelperModule
                    },] },
        ];
        /** @nocollapse */ Response.ngInjectableDef = i0.defineInjectable({ factory: function Response_Factory() { return new Response(i0.inject(Status)); }, token: Response, providedIn: HelperModule });
        return Response;
    }(ResponseBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ SearchParam = (function () {
        function SearchParam() {
        }
        return SearchParam;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var HttpRequestService = (function () {
        function HttpRequestService(_http) {
            this._http = _http;
        }
        /**
         * @template T
         * @param {?} url
         * @param {?} httpOptions
         * @return {?}
         */
        HttpRequestService.prototype.get = /**
         * @template T
         * @param {?} url
         * @param {?} httpOptions
         * @return {?}
         */
            function (url, httpOptions) {
                return this._http.get(url, httpOptions);
            };
        /**
         * @template T
         * @param {?} url
         * @param {?} request
         * @param {?} httpOptions
         * @return {?}
         */
        HttpRequestService.prototype.post = /**
         * @template T
         * @param {?} url
         * @param {?} request
         * @param {?} httpOptions
         * @return {?}
         */
            function (url, request, httpOptions) {
                return this._http.post(url, request, httpOptions);
            };
        /**
         * @template T
         * @param {?} url
         * @param {?} request
         * @param {?} httpOptions
         * @return {?}
         */
        HttpRequestService.prototype.put = /**
         * @template T
         * @param {?} url
         * @param {?} request
         * @param {?} httpOptions
         * @return {?}
         */
            function (url, request, httpOptions) {
                return this._http.put(url, request, httpOptions);
            };
        /**
         * @template T
         * @param {?} url
         * @param {?} httpOptions
         * @return {?}
         */
        HttpRequestService.prototype.delete = /**
         * @template T
         * @param {?} url
         * @param {?} httpOptions
         * @return {?}
         */
            function (url, httpOptions) {
                return this._http.delete(url, httpOptions);
            };
        HttpRequestService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: HelperModule
                    },] },
        ];
        /** @nocollapse */
        HttpRequestService.ctorParameters = function () {
            return [
                { type: i1.HttpClient, },
            ];
        };
        /** @nocollapse */ HttpRequestService.ngInjectableDef = i0.defineInjectable({ factory: function HttpRequestService_Factory() { return new HttpRequestService(i0.inject(i1.HttpClient)); }, token: HttpRequestService, providedIn: HelperModule });
        return HttpRequestService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var UtilityService = (function () {
        function UtilityService() {
        }
        /**
         * @param {?} value
         * @return {?}
         */
        UtilityService.prototype.isNullObject = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value instanceof Boolean || value instanceof Number) {
                    return !value;
                }
                if (value instanceof String) {
                    return !value || 0 === value.length;
                }
                if (value instanceof Object) {
                    return !value || value === {};
                }
            };
        /**
         * @param {?} origin
         * @param {?} service
         * @param {?} method
         * @return {?}
         */
        UtilityService.prototype.getUrl = /**
         * @param {?} origin
         * @param {?} service
         * @param {?} method
         * @return {?}
         */
            function (origin, service, method) {
                return origin + '/' + service + '/' + method;
            };
        /**
         * @param {?} url
         * @param {?} origin
         * @return {?}
         */
        UtilityService.prototype.getService = /**
         * @param {?} url
         * @param {?} origin
         * @return {?}
         */
            function (url, origin) {
                url = url.slice(origin.length + 1, url.length);
                var /** @type {?} */ service = url.split('/');
                return service.shift();
            };
        UtilityService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: HelperModule
                    },] },
        ];
        /** @nocollapse */
        UtilityService.ctorParameters = function () { return []; };
        /** @nocollapse */ UtilityService.ngInjectableDef = i0.defineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(); }, token: UtilityService, providedIn: HelperModule });
        return UtilityService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NotifyService = (function () {
        function NotifyService(_toastrService, _translateService) {
            this._toastrService = _toastrService;
            this._translateService = _translateService;
        }
        /**
         * @param {?} msg
         * @param {?=} opts
         * @return {?}
         */
        NotifyService.prototype.info = /**
         * @param {?} msg
         * @param {?=} opts
         * @return {?}
         */
            function (msg, opts) {
                this._toastrService.info(msg, this._translateService.instant('NOTIFY_INFORMATION_TITLE'), opts);
            };
        /**
         * @param {?} msg
         * @param {?=} opts
         * @return {?}
         */
        NotifyService.prototype.success = /**
         * @param {?} msg
         * @param {?=} opts
         * @return {?}
         */
            function (msg, opts) {
                this._toastrService.success(msg, this._translateService.instant('NOTIFY_SUCCESS_TITLE'), opts);
            };
        /**
         * @param {?} msg
         * @param {?=} opts
         * @return {?}
         */
        NotifyService.prototype.warning = /**
         * @param {?} msg
         * @param {?=} opts
         * @return {?}
         */
            function (msg, opts) {
                this._toastrService.warning(msg, this._translateService.instant('NOTIFY_WARNING_TITLE'), opts);
            };
        /**
         * @param {?} msg
         * @param {?=} opts
         * @return {?}
         */
        NotifyService.prototype.error = /**
         * @param {?} msg
         * @param {?=} opts
         * @return {?}
         */
            function (msg, opts) {
                this._toastrService.error(msg, this._translateService.instant('NOTIFY_ERROR_TITLE'), opts);
            };
        NotifyService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: HelperModule
                    },] },
        ];
        /** @nocollapse */
        NotifyService.ctorParameters = function () {
            return [
                { type: i1$1.ToastrService, },
                { type: TranslateService, },
            ];
        };
        /** @nocollapse */ NotifyService.ngInjectableDef = i0.defineInjectable({ factory: function NotifyService_Factory() { return new NotifyService(i0.inject(i1$1.ToastrService), i0.inject(TranslateService)); }, token: NotifyService, providedIn: HelperModule });
        return NotifyService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ModalService = (function () {
        function ModalService(_ngbModal) {
            this._ngbModal = _ngbModal;
        }
        /**
         * @param {?} content
         * @param {?} size
         * @param {?} centered
         * @param {?} backdrop
         * @param {?} keyboard
         * @param {?=} data
         * @param {?=} animation
         * @return {?}
         */
        ModalService.prototype.open = /**
         * @param {?} content
         * @param {?} size
         * @param {?} centered
         * @param {?} backdrop
         * @param {?} keyboard
         * @param {?=} data
         * @param {?=} animation
         * @return {?}
         */
            function (content, size, centered, backdrop, keyboard, data, animation) {
                var /** @type {?} */ _modal = this._ngbModal.open(content, {
                    size: size,
                    backdrop: backdrop,
                    centered: centered,
                    keyboard: keyboard
                });
                var /** @type {?} */ _instance = ((_modal))._windowCmptRef.instance;
                setTimeout(function () {
                    _instance.windowClass = animation;
                }, 0);
                var /** @type {?} */ _fx = ((_modal))._removeModalElements.bind(_modal);
                ((_modal))._removeModalElements = function () {
                    _instance.windowClass = '';
                    setTimeout(_fx, 250);
                };
                _modal.componentInstance.data = data;
                return _modal;
            };
        ModalService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: HelperModule
                    },] },
        ];
        /** @nocollapse */
        ModalService.ctorParameters = function () {
            return [
                { type: ngBootstrap.NgbModal, },
            ];
        };
        /** @nocollapse */ ModalService.ngInjectableDef = i0.defineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.inject(i1$2.NgbModal)); }, token: ModalService, providedIn: HelperModule });
        return ModalService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SharedService = (function () {
        function SharedService() {
            this.subject = new rxjs.Subject();
        }
        /**
         * @param {?} value
         * @return {?}
         */
        SharedService.prototype.set = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subject.next(value);
            };
        /**
         * @return {?}
         */
        SharedService.prototype.clear = /**
         * @return {?}
         */
            function () {
                this.subject.next();
            };
        /**
         * @return {?}
         */
        SharedService.prototype.get = /**
         * @return {?}
         */
            function () {
                return this.subject.asObservable();
            };
        SharedService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: HelperModule
                    },] },
        ];
        /** @nocollapse */ SharedService.ngInjectableDef = i0.defineInjectable({ factory: function SharedService_Factory() { return new SharedService(); }, token: SharedService, providedIn: HelperModule });
        return SharedService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.HelperModule = HelperModule;
    exports.Request = Request;
    exports.Response = Response;
    exports.TRANSLATES = TRANSLATES;
    exports._translates = _translates;
    exports.TranslateProviders = TranslateProviders;
    exports.SearchParam = SearchParam;
    exports.TranslateService = TranslateService;
    exports.HttpRequestService = HttpRequestService;
    exports.UtilityService = UtilityService;
    exports.NotifyService = NotifyService;
    exports.ModalService = ModalService;
    exports.SharedService = SharedService;
    exports.UIViewDirective = UIViewDirective;
    exports.UpperCaseDirective = UpperCaseDirective;
    exports.GlobalEnum = GlobalEnum;
    exports.ɵb = AdvancedTableComponent;
    exports.ɵc = RequestBase;
    exports.ɵd = ResponseBase;
    exports.ɵe = Status;
    exports.ɵa = TranslatePipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vaGVscGVyL2xpYi9fdHJhbnNsYXRlcy9sYW5nLWZyLnRzIiwibmc6Ly9oZWxwZXIvbGliL190cmFuc2xhdGVzL2xhbmctZW4udHMiLCJuZzovL2hlbHBlci9saWIvX3RyYW5zbGF0ZXMvdHJhbnNsYXRlcy50cyIsIm5nOi8vaGVscGVyL2xpYi9fdHJhbnNsYXRlcy90cmFuc2xhdGUuc2VydmljZS50cyIsIm5nOi8vaGVscGVyL2xpYi9fdHJhbnNsYXRlcy90cmFuc2xhdGUucGlwZS50cyIsbnVsbCwibmc6Ly9oZWxwZXIvbGliL19kaXJlY3RpdmVzL3VpLXZpZXcuZGlyZWN0aXZlLnRzIiwibmc6Ly9oZWxwZXIvbGliL19jb21wb25lbnRzL2FkdmFuY2VkLXRhYmxlL2FkdmFuY2VkLXRhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vaGVscGVyL2xpYi9fZGlyZWN0aXZlcy91cHBlci1jYXNlLmRpcmVjdGl2ZS50cyIsIm5nOi8vaGVscGVyL2xpYi9oZWxwZXIubW9kdWxlLnRzIiwibmc6Ly9oZWxwZXIvbGliL19jb250cmFjdHMvcmVxdWVzdC1iYXNlLnRzIiwibmc6Ly9oZWxwZXIvbGliL191dGlsaXRpZXMvZ2xvYmFsLWVudW0udHMiLCJuZzovL2hlbHBlci9saWIvX2NvbnRyYWN0cy9yZXF1ZXN0LnRzIiwibmc6Ly9oZWxwZXIvbGliL19jb250cmFjdHMvcmVzcG9uc2UtYmFzZS50cyIsIm5nOi8vaGVscGVyL2xpYi9fY29udHJhY3RzL3N0YXR1cy50cyIsIm5nOi8vaGVscGVyL2xpYi9fY29udHJhY3RzL3Jlc3BvbnNlLnRzIiwibmc6Ly9oZWxwZXIvbGliL19jb250cmFjdHMvc2VhcmNoLXBhcmFtLnRzIiwibmc6Ly9oZWxwZXIvbGliL191dGlsaXRpZXMvaHR0cC1yZXF1ZXN0LnNlcnZpY2UudHMiLCJuZzovL2hlbHBlci9saWIvX3V0aWxpdGllcy91dGlsaXR5LnNlcnZpY2UudHMiLCJuZzovL2hlbHBlci9saWIvX3V0aWxpdGllcy9ub3RpZnkuc2VydmljZS50cyIsIm5nOi8vaGVscGVyL2xpYi9fdXRpbGl0aWVzL21vZGFsLnNlcnZpY2UudHMiLCJuZzovL2hlbHBlci9saWIvX3V0aWxpdGllcy9zaGFyZWQuc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTEFOR19GUl9OQU1FID0gJ2ZyJztcclxuXHJcbmV4cG9ydCBjb25zdCBMQU5HX0ZSX1RSQU5TID0ge1xyXG5cclxuICAgIC8vIEFTSURFX05BViBTRUNUSU9OXHJcbiAgICAnQVNJREVfTkFWX1NFVFRJTkcnOiAnUGFyYW3Dg8KodHJlcycsXHJcbiAgICAnQVNJREVfTkFWX1NFVFRJTkdfTEFOR1VBR0UnOiAnTGFuZ3VlJyxcclxuICAgICdBU0lERV9OQVZfU0VUVElOR19MQU5HVUFHRV9GUkVOQ0gnOiAnRnJhbsODwqdhaXMnLFxyXG4gICAgJ0FTSURFX05BVl9TRVRUSU5HX0xBTkdVQUdFX0VOR0xJU0gnOiAnQW5nbGFpcycsXHJcbiAgICAnQVNJREVfTkFWX0FETUlOSVNUUkFUSU9OJzogJ0FkbWluaXN0cmF0aW9uJyxcclxuICAgICdBU0lERV9OQVZfUFJPRklMRSc6ICdQcm9maWxzJyxcclxuICAgICdBU0lERV9OQVZfUkVRVUVTVCc6ICdEZW1hbmRlcycsXHJcbiAgICAnQVNJREVfTkFWX1JFU09VUkNFJzogJ1Jlc3NvdXJjZXMnLFxyXG4gICAgJ0FTSURFX05BVl9IRUxQJzogJ0FpZGUnLFxyXG4gICAgJ0FTSURFX05BVl9SRVBPUlQnOiAnUmFwcG9ydHMnLFxyXG4gICAgJ0FTSURFX05BVl9MT0dPVVQnOiAnRMODwqljb25uZXhpb24nLFxyXG4gICAgJ0FTSURFX05BVl9EQVNIQk9BUkQnOiAnVGFibGVhdSBkZSBib3JkJyxcclxuXHJcbiAgICAvLyBIRUFERVJfTkFWIFNFQ1RJT05cclxuXHJcbiAgICAvLyBOT1RJRlkgVElUTEUgU0VDVElPTlxyXG4gICAgJ05PVElGWV9JTkZPUk1BVElPTl9USVRMRSc6ICdJbmZvcm1hdGlvbicsXHJcbiAgICAnTk9USUZZX1NVQ0NFU1NfVElUTEUnOiAnU3VjY8ODwqhzJyxcclxuICAgICdOT1RJRllfV0FSTklOR19USVRMRSc6ICdBdmVydGlzc2VtZW50JyxcclxuICAgICdOT1RJRllfRVJST1JfVElUTEUnOiAnRXJyZXVyJyxcclxuXHJcbiAgICAvLyBOT1RJRlkgTUVTU0FHRSBTRUNUSU9OXHJcbiAgICAnTk9USUZZX1NVQ0NFU1NfTUVTU0FHRSc6ICdPcMODwqlyYXRpb24gZWZmZWN0dcODwqllJyxcclxuICAgICdOT1RJRllfRVJST1JfTUVTU0FHRSc6ICdVbmUgZXJyZXVyIHNcXCdlc3QgcHJvZHVpdGUnLFxyXG4gICAgJ05PVElGWV9DT05GSVJNX1RJVExFJzogJ0NvbmZpcm1hdGlvbicsXHJcbiAgICAnTk9USUZZX0NPTkZJUk1fVEVYVCc6ICdWb3VsZXotdm91cyBjb250aW51ZXI/JyxcclxuICAgICdOT1RJRllfQ09ORklSTV9ZRVMnOiAnT3VpJyxcclxuICAgICdOT1RJRllfQ09ORklSTV9OTyc6ICdOb24nXHJcblxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgTEFOR19FTl9OQU1FID0gJ2VuJztcclxuXHJcbmV4cG9ydCBjb25zdCBMQU5HX0VOX1RSQU5TID0ge1xyXG5cclxuICAgIC8vIEFTSURFX05BViBTRUNUSU9OXHJcbiAgICAnQVNJREVfTkFWX1NFVFRJTkcnOiAnU2V0dGluZ3MnLFxyXG4gICAgJ0FTSURFX05BVl9TRVRUSU5HX0xBTkdVQUdFJzogJ0xhbmd1YWdlJyxcclxuICAgICdBU0lERV9OQVZfU0VUVElOR19MQU5HVUFHRV9GUkVOQ0gnOiAnRnJlbmNoJyxcclxuICAgICdBU0lERV9OQVZfU0VUVElOR19MQU5HVUFHRV9FTkdMSVNIJzogJ0VuZ2xpc2gnLFxyXG4gICAgJ0FTSURFX05BVl9BRE1JTklTVFJBVElPTic6ICdBZG1pbmlzdHJhdGlvbicsXHJcbiAgICAnQVNJREVfTkFWX1BST0ZJTEUnOiAnUHJvZmlsZXMnLFxyXG4gICAgJ0FTSURFX05BVl9SRVFVRVNUJzogJ1JlcXVlc3RzJyxcclxuICAgICdBU0lERV9OQVZfUkVTT1VSQ0UnOiAnUmVzb3VyY2VzJyxcclxuICAgICdBU0lERV9OQVZfSEVMUCc6ICdIZWxwJyxcclxuICAgICdBU0lERV9OQVZfQVNTSVNUQU5DRSc6ICdBc3Npc3RhbmNlJyxcclxuICAgICdBU0lERV9OQVZfUkVQT1JUJzogJ1JlcG9ydHMnLFxyXG4gICAgJ0FTSURFX05BVl9MT0dPVVQnOiAnTG9nb3V0JyxcclxuICAgICdBU0lERV9OQVZfREFTSEJPQVJEJzogJ0Rhc2hib2FyZCcsXHJcblxyXG4gICAgLy8gSEVBREVSX05BViBTRUNUSU9OXHJcblxyXG4gICAgLy8gTk9USUZZIFRJVExFIFNFQ1RJT05cclxuICAgICdOT1RJRllfSU5GT1JNQVRJT05fVElUTEUnOiAnSW5mb3JtYXRpb24nLFxyXG4gICAgJ05PVElGWV9TVUNDRVNTX1RJVExFJzogJ1N1Y2Nlc3MnLFxyXG4gICAgJ05PVElGWV9XQVJOSU5HX1RJVExFJzogJ1dhcm5pbmcnLFxyXG4gICAgJ05PVElGWV9FUlJPUl9USVRMRSc6ICdFcnJvcicsXHJcblxyXG4gICAgLy8gTk9USUZZIE1FU1NBR0UgU0VDVElPTlxyXG4gICAgJ05PVElGWV9TVUNDRVNTX01FU1NBR0UnOiAnT3BlcmF0aW9uIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAnTk9USUZZX0VSUk9SX01FU1NBR0UnOiAnQW4gZXJyb3IgaGFzIG9jY3VycmVkJyxcclxuICAgICdOT1RJRllfQ09ORklSTV9USVRMRSc6ICdDb25maXJtJyxcclxuICAgICdOT1RJRllfQ09ORklSTV9URVhUJzogJ0RvIHlvdSB3YW50IHRvIGNvbnRpbnVlPycsXHJcbiAgICAnTk9USUZZX0NPTkZJUk1fWUVTJzogJ1llcycsXHJcbiAgICAnTk9USUZZX0NPTkZJUk1fTk8nOiAnTm8nXHJcblxyXG59O1xyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTEFOR19GUl9OQU1FLCBMQU5HX0ZSX1RSQU5TIH0gZnJvbSAnLi9sYW5nLWZyJztcclxuaW1wb3J0IHsgTEFOR19FTl9OQU1FLCBMQU5HX0VOX1RSQU5TIH0gZnJvbSAnLi9sYW5nLWVuJztcclxuXHJcbmV4cG9ydCBjb25zdCBUUkFOU0xBVEVTID0gbmV3IEluamVjdGlvblRva2VuPGFueT4oJ3RyYW5zbGF0ZXMnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBfdHJhbnNsYXRlcyA9IHtcclxuICAgIFtMQU5HX0ZSX05BTUVdOiBMQU5HX0ZSX1RSQU5TLFxyXG4gICAgW0xBTkdfRU5fTkFNRV06IExBTkdfRU5fVFJBTlNcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBUcmFuc2xhdGVQcm92aWRlcnMgPSBbXHJcbiAgICB7IHByb3ZpZGU6IFRSQU5TTEFURVMsIHVzZVZhbHVlOiBfdHJhbnNsYXRlcyB9XHJcbl07XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUUkFOU0xBVEVTIH0gZnJvbSAnLi90cmFuc2xhdGVzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgX2N1cnJlbnRMYW5nOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoQEluamVjdChUUkFOU0xBVEVTKSBwcml2YXRlIF90cmFuc2xhdGU6IGFueSkgeyB9XHJcblxyXG4gICAgcHVibGljIGdldCBjdXJyZW50TGFuZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudExhbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVzZShsYW5nOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50TGFuZyA9IGxhbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGUoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0ga2V5O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fdHJhbnNsYXRlW3RoaXMuY3VycmVudExhbmddICYmIHRoaXMuX3RyYW5zbGF0ZVt0aGlzLmN1cnJlbnRMYW5nXVtrZXldKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cmFuc2xhdGVbdGhpcy5jdXJyZW50TGFuZ11ba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnN0YW50KGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKGtleSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGUuc2VydmljZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAndHJhbnNsYXRlJyxcclxuICAgIHB1cmU6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSkgeyB9XHJcblxyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBpZiAoIXZhbHVlKSB7IHJldHVybjsgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0geVtvcFswXSAmIDIgPyBcInJldHVyblwiIDogb3BbMF0gPyBcInRocm93XCIgOiBcIm5leHRcIl0pICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gWzAsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdWktdmlld10nXG59KVxuZXhwb3J0IGNsYXNzIFVJVmlld0RpcmVjdGl2ZSB7XG5cbiAgQElucHV0KCkgZGF0YTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVSVZpZXdEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9fZGlyZWN0aXZlcy91aS12aWV3LmRpcmVjdGl2ZSc7XG5cbmRlY2xhcmUgdmFyIEVudW1lcmFibGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVscGVyLWFkdmFuY2VkLXRhYmxlJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxuICA8ZGl2IGNsYXNzPVwiaGVyby1jYWxsb3V0XCIgW3N0eWxlLmZvbnQtc2l6ZS5weF09XCJzelRhYmxlID09PSAnc20nID8gJzExJyA6ICcxMydcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBtLWZvcm1fX2dyb3VwIHJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDRweDtcIj5cbiAgICAgIDxkaXYgW25nQ2xhc3NdPVwieyAnc20nOiAnY29sLTEwJywgJ21kJzogJ2NvbC05JywgJ2xnJzogJ2NvbC04JywgJ3N6LTYnOiAnY29sLTYnLCAnc3otNSc6ICdjb2wtNycgfVtzelNlYXJjaF1cIlxuICAgICAgICAqbmdJZj1cIiFpc1Rha2VBbGxcIj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIEFmZmljaGVcbiAgICAgICAgICA8c2VsZWN0IFsobmdNb2RlbCldPVwiX25nYlBhZ2luYXRpb24ucGFnZVNpemVcIiAobmdNb2RlbENoYW5nZSk9XCJfbmdiUGFnaW5hdGlvbi5wYWdlQ2hhbmdlKF9uZ2JQYWdpbmF0aW9uLnBhZ2UpXCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPjU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTJcIj4xMjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjI1XCI+MjU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1MFwiPjUwPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAwXCI+MTAwPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgZW50csODwqllc1xuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IFtuZ0NsYXNzXT1cInsgJ3NtJzogJ2NvbC0yIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kJywgJ21kJzogJ2NvbC0zIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kJywgJ2xnJzogJ2NvbC00IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kJywgJ3N6LTYnOiAnY29sLTYgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQnLCAnc3otNSc6ICdjb2wtNSBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCcgfVtzelNlYXJjaF1cIlxuICAgICAgICAqbmdJZj1cImlzU2VhcmNoXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtLWlucHV0LWljb24gbS1pbnB1dC1pY29uLS1sZWZ0XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIG0taW5wdXRcIiBzdHlsZT1cImJvcmRlcjoxcHggc29saWQgI2RkZDtcIiBbKG5nTW9kZWwpXT1cIl9zZWFyY2hQYXJhbVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlY2hlcmNoZS4uLlwiIChuZ01vZGVsQ2hhbmdlKT1cImRvU2VhcmNoKClcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm0taW5wdXQtaWNvbl9faWNvbiBtLWlucHV0LWljb25fX2ljb24tLWxlZnRcIj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZsYXRpY29uLXNlYXJjaFwiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlciBhZHZhbmNlZC10YWJsZSBtLXRhYmxlXCI+XG4gICAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGggY2xhc3M9XCJ0aC0xXCIgKm5nSWY9XCJpc1JlZnJlc2ggJiYgIWlzTnVtYmVyXCIgKGNsaWNrKT1cImRvUmVmcmVzaCgpXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXJlZnJlc2hcIiBbc3R5bGUuZm9udC1zaXplLnB4XT1cInN6VGFibGUgPT09ICdzbScgPyAnMTMnIDogJzE0J1wiPjwvaT5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDx0aCAqbmdJZj1cImlzRGV0YWlsc1wiPjwvdGg+XG4gICAgICAgICAgPHRoICpuZ0lmPVwiaXNTZWxlY3RlZCAmJiAhaXNDaGVja2VkXCI+PC90aD5cbiAgICAgICAgICA8dGggKm5nSWY9XCJpc0NoZWNrZWQgJiYgIWlzU2VsZWN0ZWRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cIl9pc0NoZWNrZWRSb3dzXCIgKG5nTW9kZWxDaGFuZ2UpPVwiZG9DaGVja1Jvd3MoKVwiPlxuICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPHRoICpuZ0lmPVwiaXNOdW1iZXIgJiYgIWlzUmVmcmVzaFwiPk7DgsKwPC90aD5cbiAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgKGNsaWNrKT1cImRvU29ydGluZyhjb2x1bW4pO1wiPlxuICAgICAgICAgICAge3tjb2x1bW4udGV4dH19XG4gICAgICAgICAgICA8aSBjbGFzcz1cImxhIGxhLWFycm93LXVwIGktLWZpbHRlclwiICpuZ0lmPVwiY29sdW1uLmlzU29ydGluZyAmJiAhY29sdW1uLmlzU29ydFVwXCI+PC9pPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJsYSBsYS1hcnJvdy1kb3duIGktLWZpbHRlclwiICpuZ0lmPVwiY29sdW1uLmlzU29ydGluZyAmJiBjb2x1bW4uaXNTb3J0VXBcIj48L2k+XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgICA8dGggY2xhc3M9XCJ0aC0xXCIgKm5nSWY9XCJpc0VkaXRhYmxlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24gYnRuLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBbc3R5bGUuZm9udC1zaXplLnB4XT1cInN6VGFibGUgPT09ICdzbScgPyAnMTEnIDogJzEyJ1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtY29nXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiIFtzdHlsZS5mb250LXNpemUucHhdPVwic3pUYWJsZSA9PT0gJ3NtJyA/ICcxMScgOiAnMTInXCI+XG4gICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwiaXNDcmVhdGVcIiAoY2xpY2spPVwiZG9DcmVhdGUoKVwiPjxhPk5vdXZlYXU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGE+RXhwb3J0ZXI8L2E+PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzPVwidGgtMVwiICpuZ0lmPVwiaXNNb2RpZnlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93biBidG4tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIFtzdHlsZS5mb250LXNpemUucHhdPVwic3pUYWJsZSA9PT0gJ3NtJyA/ICcxMScgOiAnMTInXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jb2dcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCIgW3N0eWxlLmZvbnQtc2l6ZS5weF09XCJzelRhYmxlID09PSAnc20nID8gJzExJyA6ICcxMidcIj5cbiAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XCJpc0NyZWF0ZVwiIChjbGljayk9XCJkb0NyZWF0ZSgpXCI+PGE+Tm91dmVhdTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YT5FeHBvcnRlcjwvYT48L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgICA8dGggY2xhc3M9XCJ0aC0xXCIgKm5nSWY9XCIhaXNNb2RpZnkgJiYgIWlzRWRpdGFibGUgJiYgIWlzRGVsZXRlZCAmJiAhaXNDcmVhdGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93biBidG4tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIFtzdHlsZS5mb250LXNpemUucHhdPVwic3pUYWJsZSA9PT0gJ3NtJyA/ICcxMScgOiAnMTInXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jb2dcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCIgW3N0eWxlLmZvbnQtc2l6ZS5weF09XCJzelRhYmxlID09PSAnc20nID8gJzExJyA6ICcxMidcIj5cbiAgICAgICAgICAgICAgICA8bGk+PGE+RXhwb3J0ZXI8L2E+PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzPVwidGgtMVwiICpuZ0lmPVwiaXNEZWxldGVkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24gYnRuLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBbc3R5bGUuZm9udC1zaXplLnB4XT1cInN6VGFibGUgPT09ICdzbScgPyAnMTEnIDogJzEyJ1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtY29nXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiIFtzdHlsZS5mb250LXNpemUucHhdPVwic3pUYWJsZSA9PT0gJ3NtJyA/ICcxMScgOiAnMTInXCI+XG4gICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwiaXNDcmVhdGVcIiAoY2xpY2spPVwiZG9DcmVhdGUoKVwiPjxhPk5vdXZlYXU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGE+RXhwb3J0ZXI8L2E+PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5ICpuZ0Zvcj1cImxldCByb3cgb2YgZGF0YVNvdXJjZTsgbGV0IGkgPSBpbmRleDtcIiBzdHlsZT1cImJvcmRlcjogbm9uZTtcIj5cbiAgICAgICAgPHRyIGNsYXNzPVwiX19yXCIgKGRibGNsaWNrKT1cImRvTW9kaWZ5KHJvdylcIiAoY2xpY2spPVwiZG9TZWxlY3Qocm93KVwiPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInRkLTFcIiBbY2xhc3MudGQtLWFjdGl2ZV09XCJyb3cuY2hlY2tlZCB8fCByb3cuc2VsZWN0ZWRcIiAqbmdJZj1cImlzUmVmcmVzaCAmJiAhaXNOdW1iZXJcIj5cbiAgICAgICAgICAgIHt7IChpICsgMSkgKyAoX25nYlBhZ2luYXRpb24ucGFnZVNpemUgKiAoX25nYlBhZ2luYXRpb24ucGFnZSAtIDEpKSB9fVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwidGQtMVwiIFtjbGFzcy50ZC0tYWN0aXZlXT1cInJvdy5jaGVja2VkIHx8IHJvdy5zZWxlY3RlZFwiICpuZ0lmPVwiaXNEZXRhaWxzXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImR0LWJ0bi1wbHVzXCIgW3N0eWxlLmZvbnQtc2l6ZS5weF09XCJzelRhYmxlID09PSAnc20nID8gJzExJyA6ICcxMydcIiAoY2xpY2spPVwiZG9PcGVuKHJvdylcIiAqbmdJZj1cIiFyb3cuaXNPcGVuXCI+Kzwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZHQtYnRuLW1pbml1c1wiIFtzdHlsZS5mb250LXNpemUucHhdPVwic3pUYWJsZSA9PT0gJ3NtJyA/ICcxMScgOiAnMTMnXCIgKGNsaWNrKT1cImRvQ2xvc2Uocm93KVwiXG4gICAgICAgICAgICAgICpuZ0lmPVwicm93LmlzT3BlblwiPi08L3NwYW4+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZC0xXCIgW2NsYXNzLnRkLS1hY3RpdmVdPVwicm93LmNoZWNrZWQgfHwgcm93LnNlbGVjdGVkXCIgKm5nSWY9XCJpc1NlbGVjdGVkICYmICFpc0NoZWNrZWRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicmFkaW9cIiBbY2hlY2tlZF09XCJyb3cuc2VsZWN0ZWQgPT09IHRydWVcIj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInRkLTFcIiBbY2xhc3MudGQtLWFjdGl2ZV09XCJyb3cuY2hlY2tlZCB8fCByb3cuc2VsZWN0ZWRcIiAqbmdJZj1cImlzQ2hlY2tlZCAmJiAhaXNTZWxlY3RlZFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwicm93LmNoZWNrZWRcIiAobmdNb2RlbENoYW5nZSk9XCJkb0NoZWNrKHJvdylcIj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInRkLTFcIiBbY2xhc3MudGQtLWFjdGl2ZV09XCJyb3cuY2hlY2tlZCB8fCByb3cuc2VsZWN0ZWRcIiAqbmdJZj1cImlzTnVtYmVyICYmICFpc1JlZnJlc2hcIj5cbiAgICAgICAgICAgIHt7IChpICsgMSkgKyAoX25nYlBhZ2luYXRpb24ucGFnZVNpemUgKiAoX25nYlBhZ2luYXRpb24ucGFnZSAtIDEpKSB9fVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwidGQtMlwiIFtjbGFzcy50ZC0tYWN0aXZlXT1cInJvdy5jaGVja2VkIHx8IHJvdy5zZWxlY3RlZFwiICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhY29sdW1uLmlzRWRpdGFibGUgfHwgIXJvdy5lZGl0YWJsZVwiPnt7cm93W2NvbHVtbi5uYW1lXX19PC9zcGFuPlxuICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiY29sdW1uLmlzRWRpdGFibGUgJiYgcm93LmVkaXRhYmxlXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gbS1pbnB1dCBtLWlucHV0LS1zcXVhcmVcIlxuICAgICAgICAgICAgICBzdHlsZT1cImJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XCIgWyhuZ01vZGVsKV09XCJyb3dbY29sdW1uLm5hbWVdXCIgLz5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInRkLTFcIiBbY2xhc3MudGQtLWFjdGl2ZV09XCJyb3cuY2hlY2tlZCB8fCByb3cuc2VsZWN0ZWRcIiAqbmdJZj1cImlzRWRpdGFibGUgJiYgIWlzTW9kaWZ5XCI+XG4gICAgICAgICAgICA8aW1nICpuZ0lmPVwiIXJvdy5lZGl0YWJsZSAmJiBpc0VkaXRhYmxlXCIgc3JjPVwiLi4vLi4vLi4vYXNzZXRzL2FwcC9tZWRpYS9pbWcvaWNvbnMvaWZfTW9kaWZ5XzEzMjY4NS5wbmdcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiZG9FZGl0YWJsZShyb3cpXCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgLz5cbiAgICAgICAgICAgIDxpbWcgKm5nSWY9XCJyb3cuZWRpdGFibGUgJiYgaXNFZGl0YWJsZVwiIHNyYz1cIi4uLy4uLy4uL2Fzc2V0cy9hcHAvbWVkaWEvaW1nL2ljb25zL2lmX2Zsb3BweV9kaXNrX3NhdmVfMTAzODYzLnBuZ1wiXG4gICAgICAgICAgICAgIChjbGljayk9XCJkb1ZhbGlkYXRlKHJvdylcIiB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogNnB4O1wiIC8+XG4gICAgICAgICAgICA8aW1nICpuZ0lmPVwicm93LmVkaXRhYmxlICYmIGlzRWRpdGFibGVcIiBzcmM9XCIuLi8uLi8uLi9hc3NldHMvYXBwL21lZGlhL2ltZy9pY29ucy9pZl9mLWNyb3NzXzI1Nl8yODI0NzEucG5nXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImRvQ2FuY2VsKHJvdylcIiB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiAvPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwidGQtMVwiIFtjbGFzcy50ZC0tYWN0aXZlXT1cInJvdy5jaGVja2VkIHx8IHJvdy5zZWxlY3RlZFwiICpuZ0lmPVwiaXNNb2RpZnkgJiYgIWlzRWRpdGFibGVcIiAoY2xpY2spPVwiZG9Nb2RpZnkocm93KVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi9hc3NldHMvYXBwL21lZGlhL2ltZy9pY29ucy9pZl9Nb2RpZnlfMTMyNjg1LnBuZ1wiIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIC8+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZC0xXCIgW2NsYXNzLnRkLS1hY3RpdmVdPVwicm93LmNoZWNrZWQgfHwgcm93LnNlbGVjdGVkXCIgKm5nSWY9XCJpc0RlbGV0ZWRcIiAoY2xpY2spPVwiZG9EZWxldGUocm93KVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi9hc3NldHMvYXBwL21lZGlhL2ltZy9pY29ucy9pZl9FcmFzZV8xMzI3ODQucG5nXCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgLz5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBbY2xhc3MudGQtLWFjdGl2ZV09XCJyb3cuY2hlY2tlZCB8fCByb3cuc2VsZWN0ZWRcIiAqbmdJZj1cIiFpc01vZGlmeSAmJiAhaXNFZGl0YWJsZSAmJiAhaXNEZWxldGVkICYmICFpc0NyZWF0ZVwiPjwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0ciAqbmdJZj1cInJvdy5pc09wZW5cIj5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJzdWItLXJcIiBbYXR0ci5jb2xzcGFuXT1cImNvbHVtbnMubGVuZ3RoICsgOFwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIHVpLXZpZXcgW2RhdGFdPVwicm93XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90Ym9keT5cbiAgICAgIDx0Ym9keSAqbmdJZj1cIiFjb3VudFwiIHN0eWxlPVwiYm9yZGVyOiBub25lXCI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJzdWItLXItMVwiIFthdHRyLmNvbHNwYW5dPVwiY29sdW1ucy5sZW5ndGggKyA4XCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXJcIj5BdWN1bmUgZG9ubiZlYWN1dGU7ZTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbS1mb3JtX19ncm91cCByb3cgYWxpZ24taXRlbXMtY2VudGVyXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAwcHg7XCIgKm5nSWY9XCIhaXNUYWtlQWxsICYmIGNvdW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIiBzdHlsZT1cInRvcDogLTdweDtcIj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgQWZmaWNoYWdlIHt7IF9uZ2JQYWdpbmF0aW9uLnJvd1N0YXJ0KCkgfX0gw4PCoCB7eyBfbmdiUGFnaW5hdGlvbi5yb3dFbmQoKSA+IGNvdW50ID8gY291bnQgOlxuICAgICAgICAgIF9uZ2JQYWdpbmF0aW9uLnJvd0VuZCgpIH19IGRlIHt7Y291bnR9fVxuICAgICAgICAgIGVudHLDg8KpZXNcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLThcIj5cbiAgICAgICAgPG5nYi1wYWdpbmF0aW9uIFtlbGxpcHNlc109XCJfbmdiUGFnaW5hdGlvbi5lbGxpcHNlc1wiIFtjb2xsZWN0aW9uU2l6ZV09XCJjb3VudFwiIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIlxuICAgICAgICAgIFsocGFnZSldPVwiX25nYlBhZ2luYXRpb24ucGFnZVwiIFttYXhTaXplXT1cIl9uZ2JQYWdpbmF0aW9uLm1heFNpemVcIiBbcm90YXRlXT1cIl9uZ2JQYWdpbmF0aW9uLnJvdGF0ZVwiXG4gICAgICAgICAgW2JvdW5kYXJ5TGlua3NdPVwiX25nYlBhZ2luYXRpb24uYm91bmRhcnlMaW5rc1wiIFtwYWdlU2l6ZV09XCJfbmdiUGFnaW5hdGlvbi5wYWdlU2l6ZVwiIChwYWdlQ2hhbmdlKT1cIl9uZ2JQYWdpbmF0aW9uLnBhZ2VDaGFuZ2UoX25nYlBhZ2luYXRpb24ucGFnZSlcIj48L25nYi1wYWdpbmF0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC50YWJsZS1yZXNwb25zaXZle292ZXJmbG93OmhpZGRlbn0udGFibGV7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzExMTtib3JkZXItc3BhY2luZzowO292ZXJmbG93OmluaGVyaXQ7b3ZlcmZsb3cteDp2aXNpYmxlO292ZXJmbG93LXk6dmlzaWJsZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfS50YWJsZS1zdHJpcGVkPnRib2R5Om50aC1vZi10eXBlKDJuKT50ci5fX3J7YmFja2dyb3VuZC1jb2xvcjojZmZmfS50YWJsZS1zdHJpcGVkPnRib2R5Om50aC1vZi10eXBlKDJuKzEpPnRyLl9fcntiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5Zjl9LnRhYmxlLXN0cmlwZWQ+dGJvZHk6bGFzdC1jaGlsZD50ci5fX3I6aG92ZXI+dGR7Ym9yZGVyLWJvdHRvbTpub25lfS50YWJsZS1zdHJpcGVkPnRib2R5Omxhc3QtY2hpbGQ+dHIuX19yPnRkLnRkLS1hY3RpdmV7Ym9yZGVyLWJvdHRvbTpub25lIWltcG9ydGFudH0udGFibGUtc3RyaXBlZD50Ym9keT50ci5fX3I6aG92ZXI+dGR7YmFja2dyb3VuZC1jb2xvcjojZGFmMWZmO2JvcmRlci10b3A6MXB4IHNvbGlkICM2YmJlZjI7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzZiYmVmMn0udGFibGUgdGgsdGR7cGFkZGluZzo2cHggMTBweH0udGFibGUgdGR7bWF4LXdpZHRoOjIwMHB4O3doaXRlLXNwYWNlOm5vd3JhcDstbXMtdGV4dC1vdmVyZmxvdzplbGxpcHNpczt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2JvcmRlci10b3A6MXB4IHNvbGlkICNkZGQ7Zm9udC13ZWlnaHQ6NDAwO2NvbG9yOiMzMzM7Y3Vyc29yOnBvaW50ZXI7b3ZlcmZsb3c6dmlzaWJsZX0udGFibGUgdGh7YmFja2dyb3VuZC1jb2xvcjojZmZmO3Bvc2l0aW9uOnJlbGF0aXZlO2ZvbnQtd2VpZ2h0OjYwMDtib3JkZXItdG9wOm5vbmU7Ym9yZGVyLXJpZ2h0Om5vbmU7Ym9yZGVyLWxlZnQ6bm9uZTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzExMTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXIgcmlnaHQ7Y3Vyc29yOnBvaW50ZXI7b3ZlcmZsb3c6dmlzaWJsZX0uZHQtYnRuLXBsdXN7dG9wOjlweDtsZWZ0OjRweDtoZWlnaHQ6MTJweDt3aWR0aDoxMnB4O2Rpc3BsYXk6YmxvY2s7Y29sb3I6I2ZmZjtib3JkZXI6MnB4IHNvbGlkICNmZmY7Ym9yZGVyLXJhZGl1czoxNHB4O2JveC1zaGFkb3c6MCAwIDNweCAjNDQ0O2JveC1zaXppbmc6Y29udGVudC1ib3g7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC1pbmRlbnQ6MCFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6MTJweDtiYWNrZ3JvdW5kLWNvbG9yOiMzMWIxMzF9LmR0LWJ0bi1taW5pdXN7dG9wOjlweDtsZWZ0OjRweDtoZWlnaHQ6MTJweDt3aWR0aDoxMnB4O2Rpc3BsYXk6YmxvY2s7Y29sb3I6I2ZmZjtib3JkZXI6MnB4IHNvbGlkICNmZmY7Ym9yZGVyLXJhZGl1czoxNHB4O2JveC1zaGFkb3c6MCAwIDNweCAjNDQ0O2JveC1zaXppbmc6Y29udGVudC1ib3g7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC1pbmRlbnQ6MCFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6MTJweDtiYWNrZ3JvdW5kLWNvbG9yOiNkMzMzMzN9LnRkLTEsLnRoLTF7d2lkdGg6NXB4O2N1cnNvcjpwb2ludGVyO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt0ZXh0LWFsaWduOmNlbnRlcn0udGQtMnt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Lmhlcm8tY2FsbG91dHtwYWRkaW5nOjEwcHg7Ym94LXNoYWRvdzozcHggM3B4IDIwcHggcmdiYSgwLDAsMCwuMyk7Ym9yZGVyLXJhZGl1czozcHh9LnRkLS1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZGFmMWZmO2JvcmRlci10b3A6MXB4IHNvbGlkICM2YmJlZjIhaW1wb3J0YW50O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICM2YmJlZjIhaW1wb3J0YW50fS5pLS1maWx0ZXJ7Zm9udC1zaXplOjEzcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7cmlnaHQ6LTEwcHg7bGluZS1oZWlnaHQ6MDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LnN1Yi0tcntiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5ZjkhaW1wb3J0YW50O3BhZGRpbmc6MTBweH0uc3ViLS1yOmhvdmVye2JhY2tncm91bmQtY29sb3I6bm9uZSFpbXBvcnRhbnQ7Ym9yZGVyLXRvcDoxcHggc29saWQgI2RkZCFpbXBvcnRhbnQ7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzExMSFpbXBvcnRhbnQ7cGFkZGluZzoxMHB4fS5zdWItLXItMXtiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5ZjkhaW1wb3J0YW50O3BhZGRpbmc6NnB4IDEwcHh9LnN1Yi0tci0xOmhvdmVye2JhY2tncm91bmQtY29sb3I6bm9uZSFpbXBvcnRhbnQ7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzExMSFpbXBvcnRhbnQ7cGFkZGluZzo2cHggMTBweH0uYnRue2JvcmRlci1yYWRpdXM6NHB4O2JvcmRlcjoxcHggc29saWQgIzk3OTc5NztoZWlnaHQ6MjFweDtjb2xvcjojMDAwO2xpbmUtaGVpZ2h0OjE5cHg7d2hpdGUtc3BhY2U6bm93cmFwO3BhZGRpbmc6M3B4IDVweCAxOHB4Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tYm90dG9tOjA7Zm9udC13ZWlnaHQ6NDAwfS5jYXJldHtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDowO2hlaWdodDowO21hcmdpbi1sZWZ0OjJweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7Ym9yZGVyLXRvcDo0cHggc29saWQ7Ym9yZGVyLXJpZ2h0OjRweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItbGVmdDo0cHggc29saWQgdHJhbnNwYXJlbnR9YS5kcm9wZG93bi10b2dnbGV7Y29sb3I6IzYxNjE2MSFpbXBvcnRhbnR9dWwuZHJvcGRvd24tbWVudXtyaWdodDowIWltcG9ydGFudDt0b3A6MTAwJSFpbXBvcnRhbnQ7ZmxvYXQ6bm9uZTtjb2xvcjojMDAwO2xpbmUtaGVpZ2h0OjNweDtib3JkZXItcmFkaXVzOjVweCFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6NTAwO3BhZGRpbmc6NHB4Oy13ZWJraXQtdHJhbnNmb3JtOm5vbmUhaW1wb3J0YW50O3RyYW5zZm9ybTpub25lIWltcG9ydGFudH0uZHJvcGRvd24tbWVudVt4LXBsYWNlbWVudF49Ym90dG9tXSwuZHJvcGRvd24tbWVudVt4LXBsYWNlbWVudF49bGVmdF0sLmRyb3Bkb3duLW1lbnVbeC1wbGFjZW1lbnRePXJpZ2h0XSwuZHJvcGRvd24tbWVudVt4LXBsYWNlbWVudF49dG9wXXtib3R0b206YXV0bztsZWZ0OmF1dG8haW1wb3J0YW50fXVsLmRyb3Bkb3duLW1lbnUgYTpob3Zlcntmb250LXdlaWdodDo2MDA7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgtMTc5ZGVnLCM2Mjg4ZjggMCwjMjI2MWY2IDEwMCUpO2JvcmRlci10b3A6MXB4IHNvbGlkICM1ODdmZWU7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzBkNTJlYn0uZHJvcGRvd24tdG9nZ2xlOjphZnRlcntkaXNwbGF5Om5vbmV9LmJ0bi1ncm91cHt3aGl0ZS1zcGFjZTpub3dyYXB9LmJ0bi1ncm91cCAuYnRue2Zsb2F0Om5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2t9Ll9faGVhZGVye2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGQ7cGFkZGluZy1ib3R0b206OHB4O21hcmdpbi10b3A6LTEwcHh9YF0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxufSlcbmV4cG9ydCBjbGFzcyBBZHZhbmNlZFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBfbmdiUGFnaW5hdGlvbjogYW55O1xuICBfaXNDaGVja2VkUm93czogYW55O1xuICBfc2VhcmNoUGFyYW06IHN0cmluZztcblxuICBASW5wdXQoJ2luZGV4JykgaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdzaXplJykgc2l6ZTogbnVtYmVyO1xuICBASW5wdXQoJ2NvdW50JykgY291bnQ6IG51bWJlcjtcbiAgQElucHV0KCdzei10YWJsZScpIHN6VGFibGU6IHN0cmluZztcbiAgQElucHV0KCdzei1zZWFyY2gnKSBzelNlYXJjaDogc3RyaW5nO1xuICBASW5wdXQoJ2lzLWhlYWRlcicpIGlzSGVhZGVyOiBib29sZWFuO1xuICBASW5wdXQoJ2lzLWNyZWF0ZScpIGlzQ3JlYXRlOiBib29sZWFuO1xuICBASW5wdXQoJ2lzLXJlZnJlc2gnKSBpc1JlZnJlc2g6IGJvb2xlYW47XG4gIEBJbnB1dCgnaXMtbnVtYmVyJykgaXNOdW1iZXI6IGJvb2xlYW47XG4gIEBJbnB1dCgnaXMtZWRpdGFibGUnKSBpc0VkaXRhYmxlOiBib29sZWFuO1xuICBASW5wdXQoJ2lzLW1vZGlmeScpIGlzTW9kaWZ5OiBib29sZWFuO1xuICBASW5wdXQoJ2lzLXRha2UtYWxsJykgaXNUYWtlQWxsOiBib29sZWFuO1xuICBASW5wdXQoJ21heC1zaXplJykgbWF4U2l6ZTogbnVtYmVyO1xuICBASW5wdXQoJ2lzLWRlbGV0ZWQnKSBpc0RlbGV0ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgnaXMtc2VhcmNoJykgaXNTZWFyY2g6IGJvb2xlYW47XG4gIEBJbnB1dCgnaXMtZGV0YWlscycpIGlzRGV0YWlsczogYm9vbGVhbjtcbiAgQElucHV0KCdpcy1jaGVja2VkJykgaXNDaGVja2VkOiBib29sZWFuO1xuICBASW5wdXQoJ2lzLXNlbGVjdGVkJykgaXNTZWxlY3RlZDogYm9vbGVhbjtcbiAgQElucHV0KCdjb2x1bW5zJykgY29sdW1uczogQXJyYXk8YW55PiA9IFtdO1xuICBASW5wdXQoJ2RhdGEtc291cmNlJykgZGF0YVNvdXJjZTogYW55ID0gW107XG4gIEBJbnB1dCgnY2hlY2tlZC1yb3dzJykgY2hlY2tlZFJvd3M6IGFueSA9IFtdO1xuICBASW5wdXQoJ3ZpZXctY2hpbGQnKSB2aWV3Q2hpbGQ6IGFueTtcblxuICBAT3V0cHV0KCkgaW5kZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIHNpemVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIGNvdW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBjaGVja2VkUm93c0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKSBvbkNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25WYWxpZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25Nb2RpZnkgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uRGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvblJlZnJlc2ggPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvblNlYXJjaCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgb25QYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PjtcbiAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikgeyB9XG5cbiAgQFZpZXdDaGlsZChVSVZpZXdEaXJlY3RpdmUpIHNldCB2aWV3Q29udGFpbmVyUmVmKHVpVmlldzogVUlWaWV3RGlyZWN0aXZlKSB7XG4gICAgaWYgKHVpVmlldykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYgPSB1aVZpZXcudmlld0NvbnRhaW5lclJlZjtcbiAgICAgICAgaWYgKHRoaXMuX3ZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgX2NvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLnZpZXdDaGlsZCk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoX2NvbXBvbmVudEZhY3RvcnkpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5kYXRhID0gdWlWaWV3LmRhdGE7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9uZ2JQYWdpbmF0aW9uID0ge1xuICAgICAgcGFnZTogMSxcbiAgICAgIHBhZ2VTaXplOiB0aGlzLnNpemUsXG4gICAgICBtYXhTaXplOiB0aGlzLm1heFNpemUgfHwgMyxcbiAgICAgIGVsbGlwc2VzOiB0cnVlLFxuICAgICAgcm90YXRlOiB0cnVlLFxuICAgICAgYm91bmRhcnlMaW5rczogZmFsc2UsXG4gICAgICBwYWdlQ2hhbmdlOiAocGFnZSkgPT4ge1xuICAgICAgICB0aGlzLmluZGV4ID0gKHBhZ2UgKiB0aGlzLl9uZ2JQYWdpbmF0aW9uLnBhZ2VTaXplKSAtIHRoaXMuX25nYlBhZ2luYXRpb24ucGFnZVNpemU7XG4gICAgICAgIHRoaXMuaW5kZXhDaGFuZ2UuZW1pdCh0aGlzLmluZGV4KTtcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5fbmdiUGFnaW5hdGlvbi5wYWdlU2l6ZTtcbiAgICAgICAgdGhpcy5zaXplQ2hhbmdlLmVtaXQodGhpcy5zaXplKTtcbiAgICAgICAgdGhpcy5vblBhZ2VDaGFuZ2UuZW1pdCgpO1xuICAgICAgfSxcbiAgICAgIHJvd1N0YXJ0OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiAxICsgKHRoaXMuX25nYlBhZ2luYXRpb24ucGFnZVNpemUgKiAodGhpcy5fbmdiUGFnaW5hdGlvbi5wYWdlIC0gMSkpO1xuICAgICAgfSxcbiAgICAgIHJvd0VuZDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMuX25nYlBhZ2luYXRpb24ucGFnZVNpemUpICsgTnVtYmVyKE51bWJlcih0aGlzLl9uZ2JQYWdpbmF0aW9uLnBhZ2VTaXplKSAqIChOdW1iZXIodGhpcy5fbmdiUGFnaW5hdGlvbi5wYWdlKSAtIDEpKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuY29tcG9uZW50UmVmKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgZG9TZWFyY2goKSB7XG4gICAgdGhpcy5vblNlYXJjaC5lbWl0KHRoaXMuX3NlYXJjaFBhcmFtKTtcbiAgfVxuXG4gIGRvT3Blbihyb3dPcGVuZWQ6IGFueSkge1xuICAgIGZvciAobGV0IHJvdyBvZiB0aGlzLmRhdGFTb3VyY2UpIHtcbiAgICAgIHJvdy5pc09wZW4gPSBmYWxzZTtcbiAgICB9XG4gICAgcm93T3BlbmVkLmlzT3BlbiA9IHRydWU7XG4gIH1cblxuICBkb0Nsb3NlKHJvdzogYW55KSB7XG4gICAgcm93LmlzT3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgZG9Tb3J0aW5nKGNvbHVtbjogYW55KSB7XG4gICAgaWYgKGNvbHVtbi5pc1NvcnRpbmcpIHtcbiAgICAgIGlmIChjb2x1bW4uaXNTb3J0VXApIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gRW51bWVyYWJsZS5Gcm9tKHRoaXMuZGF0YVNvdXJjZSlcbiAgICAgICAgICAuT3JkZXJCeURlc2NlbmRpbmcoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHhbY29sdW1uLm5hbWVdOyB9KVxuICAgICAgICAgIC5TZWxlY3QoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0pXG4gICAgICAgICAgLlRvQXJyYXkoKTtcbiAgICAgICAgY29sdW1uLmlzU29ydFVwID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBFbnVtZXJhYmxlLkZyb20odGhpcy5kYXRhU291cmNlKVxuICAgICAgICAgIC5PcmRlckJ5KGZ1bmN0aW9uICh4KSB7IHJldHVybiB4W2NvbHVtbi5uYW1lXTsgfSlcbiAgICAgICAgICAuU2VsZWN0KGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9KVxuICAgICAgICAgIC5Ub0FycmF5KCk7XG4gICAgICAgIGNvbHVtbi5pc1NvcnRVcCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZG9VbkNoZWNrUm93cygpIHtcbiAgICBmb3IgKGxldCByb3cgb2YgdGhpcy5kYXRhU291cmNlKSB7XG4gICAgICByb3cuY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmNoZWNrZWRSb3dzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5jaGVja2VkUm93c0NoYW5nZS5lbWl0KHRoaXMuY2hlY2tlZFJvd3MpO1xuICB9XG5cbiAgZG9DaGVja1Jvd3MoKSB7XG4gICAgaWYgKHRoaXMuX2lzQ2hlY2tlZFJvd3MpIHtcbiAgICAgIGZvciAobGV0IHJvdyBvZiB0aGlzLmRhdGFTb3VyY2UpIHtcbiAgICAgICAgcm93LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNoZWNrZWRSb3dzLnB1c2gocm93KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hlY2tlZFJvd3NDaGFuZ2UuZW1pdCh0aGlzLmNoZWNrZWRSb3dzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb1VuQ2hlY2tSb3dzKCk7XG4gICAgfVxuICB9XG5cbiAgZG9DaGVjayhyb3c6IGFueSkge1xuICAgIGlmIChyb3cuY2hlY2tlZCkge1xuICAgICAgdGhpcy5jaGVja2VkUm93cy5wdXNoKHJvdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGkgPSB0aGlzLmNoZWNrZWRSb3dzLmluZGV4T2Yocm93KTtcbiAgICAgIHRoaXMuY2hlY2tlZFJvd3Muc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICB0aGlzLmNoZWNrZWRSb3dzQ2hhbmdlLmVtaXQodGhpcy5jaGVja2VkUm93cyk7XG4gIH1cblxuICBkb1JlZnJlc2goKSB7XG4gICAgdGhpcy5fc2VhcmNoUGFyYW0gPSBudWxsO1xuICAgIHRoaXMuX2lzQ2hlY2tlZFJvd3MgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5jaGVja2VkUm93cykge1xuICAgICAgdGhpcy5jaGVja2VkUm93cy5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5jaGVja2VkUm93c0NoYW5nZS5lbWl0KHRoaXMuY2hlY2tlZFJvd3MpO1xuICAgIH1cbiAgICB0aGlzLm9uUmVmcmVzaC5lbWl0KCk7XG4gIH1cblxuICBkb1NlbGVjdChyb3dTZWxlY3RlZDogYW55KSB7XG4gICAgaWYgKHRoaXMuaXNTZWxlY3RlZCkge1xuICAgICAgZm9yIChsZXQgcm93IG9mIHRoaXMuZGF0YVNvdXJjZSkge1xuICAgICAgICByb3cuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJvd1NlbGVjdGVkLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMub25TZWxlY3QuZW1pdChyb3dTZWxlY3RlZCk7XG4gICAgfVxuICB9XG5cbiAgZG9DcmVhdGUoKSB7XG4gICAgdGhpcy5vbkNyZWF0ZS5lbWl0KCk7XG4gIH1cblxuICBkb0VkaXRhYmxlKHJvdzogYW55KSB7XG4gICAgcm93LmVkaXRhYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGRvVmFsaWRhdGUocm93OiBhbnkpIHtcbiAgICB0aGlzLm9uVmFsaWRhdGUuZW1pdChyb3cpO1xuICAgIHJvdy5lZGl0YWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgZG9DYW5jZWwocm93OiBhbnkpIHtcbiAgICByb3cuZWRpdGFibGUgPSBmYWxzZTtcbiAgfVxuXG4gIGRvTW9kaWZ5KHJvdzogYW55KSB7XG4gICAgaWYgKHRoaXMuaXNNb2RpZnkpIHtcbiAgICAgIHRoaXMub25Nb2RpZnkuZW1pdChyb3cpO1xuICAgIH1cbiAgfVxuXG4gIGRvRGVsZXRlKHJvdzogYW55KSB7XG4gICAgdGhpcy5vbkRlbGV0ZS5lbWl0KHJvdyk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdNb2RlbF1bdXBwZXItY2FzZV0nXG59KVxuZXhwb3J0IGNsYXNzIFVwcGVyQ2FzZURpcmVjdGl2ZSB7XG5cbiAgQE91dHB1dCgpIG5nTW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBuZ01vZGVsOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pIG9uTW9kZWxDaGFuZ2UoJGV2ZW50KSB7XG4gICAgdGhpcy5uZ01vZGVsID0gJGV2ZW50LnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgIHRoaXMubmdNb2RlbENoYW5nZS5lbWl0KHRoaXMubmdNb2RlbCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJy4vX3RyYW5zbGF0ZXMvdHJhbnNsYXRlLnBpcGUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi9fdHJhbnNsYXRlcy90cmFuc2xhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVByb3ZpZGVycyB9IGZyb20gJy4vX3RyYW5zbGF0ZXMvdHJhbnNsYXRlcyc7XHJcbmltcG9ydCB7IEFkdmFuY2VkVGFibGVDb21wb25lbnQgfSBmcm9tICcuL19jb21wb25lbnRzL2FkdmFuY2VkLXRhYmxlL2FkdmFuY2VkLXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVJVmlld0RpcmVjdGl2ZSB9IGZyb20gJy4vX2RpcmVjdGl2ZXMvdWktdmlldy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBVcHBlckNhc2VEaXJlY3RpdmUgfSBmcm9tICcuL19kaXJlY3RpdmVzL3VwcGVyLWNhc2UuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBUcmFuc2xhdGVQaXBlLFxyXG4gICAgICAgIEFkdmFuY2VkVGFibGVDb21wb25lbnQsXHJcbiAgICAgICAgVUlWaWV3RGlyZWN0aXZlLFxyXG4gICAgICAgIFVwcGVyQ2FzZURpcmVjdGl2ZSxcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgVHJhbnNsYXRlUGlwZSxcclxuICAgICAgICBBZHZhbmNlZFRhYmxlQ29tcG9uZW50LFxyXG4gICAgICAgIFVJVmlld0RpcmVjdGl2ZSxcclxuICAgICAgICBVcHBlckNhc2VEaXJlY3RpdmUsXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgICAgTmdiTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWxwZXJNb2R1bGUge1xyXG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IEhlbHBlck1vZHVsZSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICBUcmFuc2xhdGVQcm92aWRlcnMsXHJcbiAgICAgICAgICAgICAgICBUcmFuc2xhdGVTZXJ2aWNlXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBSZXF1ZXN0QmFzZSB7XG5cbiAgICBwdWJsaWMgc2VhcmNoUGFyYW06IGFueTtcbiAgICBwdWJsaWMgdXNlcjogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBpbmRleDogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgc2l6ZTogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgdGFrZUFsbDogYm9vbGVhbixcbiAgICAgICAgcHVibGljIGlzQW5kOiBib29sZWFuLFxuICAgICAgICBwdWJsaWMgb3JkZXJCeTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgbGFuZzogc3RyaW5nKSB7XG5cbiAgICB9XG5cbn1cbiIsImV4cG9ydCBjb25zdCBHbG9iYWxFbnVtID0ge1xuXG4gICAgLy8gQkFDS0VORCBQQVJBTUVURVJTIFNFQ1RJT05cbiAgICBfSU5ERVg6IDAsXG4gICAgX1NJWkU6IDUsXG4gICAgX1RBS0VfQUxMOiBmYWxzZSxcbiAgICBfSVNfQU5EOiB0cnVlLFxuICAgIF9PUkRFUl9CWV9ERVNDOiAnZGVzYycsXG4gICAgX09SREVSX0JZX0FTQzogJ2FzYycsXG4gICAgX0xBTkc6ICdmcicsXG5cbiAgICAvLyBBRFZBTkNFRCBUQUJMRVxuICAgIF9TTTogJ3NtJyxcbiAgICBfTUQ6ICdtZCcsXG4gICAgX0xHOiAnbGcnLFxuICAgIF9TWl82OiAnc3otNicsXG4gICAgX1NaXzU6ICdzei01JyxcblxuICAgIC8vIEhUVFAgUEFSQU1FVEVSUyBTRUNUSU9OXG4gICAgX1NIT1dfTE9BREVSOiAnZmFsc2UnLFxuICAgIF9TSE9XX0VSUk9SX01FU1NBR0U6ICdmYWxzZScsXG4gICAgX1NIT1dfSU5GT19NRVNTQUdFOiAnZmFsc2UnLFxuXG4gICAgLy8gVFJBTlNMQVRFIFNFQ1RJT05cbiAgICBfTEFOR1VBR0VfRlI6ICdmcicsXG4gICAgX0xBTkdVQUdFX0VOOiAnZW4nLFxuXG4gICAgLy8gQ09ERSBFUlJPUlxuICAgIF9JTVBMSUNJVF9FUlJPUjogJzgwMScsXG5cbiAgICAvLyBPUEVSQVRPUiBFTlVNXG4gICAgX0VRVUFMOiAnPScsXG4gICAgX05PVF9FUVVBTF8xOiAnPD4nLFxuICAgIF9OT1RfRVFVQUxfMjogJyE9JyxcbiAgICBfTEVTU19PUl9FUVVBTDogJzw9JyxcbiAgICBfTEVTUzogJzwnLFxuICAgIF9NT1JFX09SX0VRVUFMOiAnPj0nLFxuICAgIF9NT1JFOiAnPicsXG4gICAgX0JFVFdFRU46ICdbXScsXG4gICAgX0JFVFdFRU5fT1VUOiAnXVsnLFxuICAgIF9CRVRXRUVOX0xFRlRfT1VUOiAnXV0nLFxuICAgIF9CRVRXRUVOX1JJR0hUX09VVDogJ1tbJyxcbiAgICBfQ09OVEFJTlM6ICclJScsXG4gICAgX1NUQVJUX1dUSUg6ICdfJScsXG4gICAgX0VORF9XVElIOiAnJV8nLFxuXG4gICAgLy8gU1RBVEVcbiAgICBfRElTUE9OSUJMRTogMSxcbiAgICBfT0NDVVBFOiAyLFxuICAgIF9SRVNFUlZFOiAzLFxuICAgIF9OT05fVVRJTElTQUJMRTogNCxcbiAgICBfRU5fQVRURU5URTogNSxcbiAgICBfQVRUUklCVUVFX05PTl9BQ1RJRjogNixcbiAgICBfRVZJVEVSX1NBVFVSQVRJT046IDcsXG4gICAgX1JFU0lMSUVSOiA4LFxuICAgIF9NQVVWQUlTOiA5LFxuICAgIF9WVDogMTAsXG4gICAgX0VURUlOVDogMTEsXG4gICAgX0FMTFVNRTogMTIsXG4gICAgX0FMTFVNRV9TUk86IDEzLFxuICAgIF9BTExVTUVfQ0xJRU5UOiAxNCxcbiAgICBfQUxMVU1FX09MVDogMTUsXG4gICAgX05PVF9VU0VEOiAxNixcbiAgICBfT0ZGX1VTRUQ6IDE3LFxuICAgIF9BTExVTUVfVVNFRDogMThcblxufTtcblxuIiwiaW1wb3J0IHsgUmVxdWVzdEJhc2UgfSBmcm9tICcuL3JlcXVlc3QtYmFzZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJNb2R1bGUgfSBmcm9tICcuLi9oZWxwZXIubW9kdWxlJztcbmltcG9ydCB7IEdsb2JhbEVudW0gfSBmcm9tICcuLi9fdXRpbGl0aWVzL2dsb2JhbC1lbnVtJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IEhlbHBlck1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0PFQ+IGV4dGVuZHMgUmVxdWVzdEJhc2Uge1xuXG4gICAgcHVibGljIGRhdGE6IFQ7XG4gICAgcHVibGljIGRhdGFzOiBBcnJheTxUPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihHbG9iYWxFbnVtLl9JTkRFWCwgR2xvYmFsRW51bS5fU0laRSwgR2xvYmFsRW51bS5fVEFLRV9BTEwsIEdsb2JhbEVudW0uX0lTX0FORCwgR2xvYmFsRW51bS5fT1JERVJfQllfREVTQywgR2xvYmFsRW51bS5fTEFORyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSAnLi9zdGF0dXMnO1xuXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VCYXNlIHtcblxuICAgIHB1YmxpYyBoYXNFcnJvcjogc3RyaW5nO1xuICAgIHB1YmxpYyBoYXNDdXN0b21FcnJvcjogc3RyaW5nO1xuICAgIHB1YmxpYyBjb3VudDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHN0YXR1czogU3RhdHVzKSB7IH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RhdHVzIHtcblxuICAgIHB1YmxpYyBjb2RlOiBzdHJpbmc7XG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcblxufVxuIiwiaW1wb3J0IHsgUmVzcG9uc2VCYXNlIH0gZnJvbSAnLi9yZXNwb25zZS1iYXNlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlbHBlck1vZHVsZSB9IGZyb20gJy4uL2hlbHBlci5tb2R1bGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogSGVscGVyTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIFJlc3BvbnNlPFQ+IGV4dGVuZHMgUmVzcG9uc2VCYXNlIHtcblxuICAgIHB1YmxpYyBpdGVtczogQXJyYXk8VD47XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBTZWFyY2hQYXJhbTxUPiB7XG5cbiAgICBwdWJsaWMgb3BlcmF0b3I6IHN0cmluZztcbiAgICBwdWJsaWMgc3RhcnQ6IFQ7XG4gICAgcHVibGljIGVuZDogVDtcblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVyTW9kdWxlIH0gZnJvbSAnLi4vaGVscGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnLi4vX2NvbnRyYWN0cy9yZXF1ZXN0JztcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnLi4vX2NvbnRyYWN0cy9yZXNwb25zZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogSGVscGVyTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIEh0dHBSZXF1ZXN0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgZ2V0PFQ+KHVybDogc3RyaW5nLCBodHRwT3B0aW9uczoge30pOiBPYnNlcnZhYmxlPFJlc3BvbnNlPFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PFJlc3BvbnNlPFQ+Pih1cmwsIGh0dHBPcHRpb25zKTtcbiAgfVxuXG4gIHBvc3Q8VD4odXJsOiBzdHJpbmcsIHJlcXVlc3Q6IFJlcXVlc3Q8VD4sIGh0dHBPcHRpb25zOiB7fSk6IE9ic2VydmFibGU8UmVzcG9uc2U8VD4+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0PFJlc3BvbnNlPFQ+Pih1cmwsIHJlcXVlc3QsIGh0dHBPcHRpb25zKTtcbiAgfVxuXG4gIHB1dDxUPih1cmw6IHN0cmluZywgcmVxdWVzdDogUmVxdWVzdDxUPiwgaHR0cE9wdGlvbnM6IHt9KTogT2JzZXJ2YWJsZTxSZXNwb25zZTxUPj4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnB1dDxSZXNwb25zZTxUPj4odXJsLCByZXF1ZXN0LCBodHRwT3B0aW9ucyk7XG4gIH1cblxuICBkZWxldGU8VD4odXJsOiBzdHJpbmcsIGh0dHBPcHRpb25zOiB7fSk6IE9ic2VydmFibGU8UmVzcG9uc2U8VD4+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGU8UmVzcG9uc2U8VD4+KHVybCwgaHR0cE9wdGlvbnMpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVscGVyTW9kdWxlIH0gZnJvbSAnLi4vaGVscGVyLm1vZHVsZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiBIZWxwZXJNb2R1bGVcclxufSlcclxuZXhwb3J0IGNsYXNzIFV0aWxpdHlTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIGlzTnVsbE9iamVjdCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEJvb2xlYW4gfHwgdmFsdWUgaW5zdGFuY2VvZiBOdW1iZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuICF2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gIXZhbHVlIHx8IDAgPT09IHZhbHVlLmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gIXZhbHVlIHx8IHZhbHVlID09PSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFVybChvcmlnaW46IHN0cmluZywgc2VydmljZTogc3RyaW5nLCBtZXRob2Q6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIG9yaWdpbiArICcvJyArIHNlcnZpY2UgKyAnLycgKyBtZXRob2Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VydmljZSh1cmw6IHN0cmluZywgb3JpZ2luOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHVybCA9IHVybC5zbGljZShvcmlnaW4ubGVuZ3RoICsgMSwgdXJsLmxlbmd0aCk7XHJcbiAgICAgICAgbGV0IHNlcnZpY2UgPSB1cmwuc3BsaXQoJy8nKTtcclxuICAgICAgICByZXR1cm4gc2VydmljZS5zaGlmdCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSAnbmd4LXRvYXN0cic7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vX3RyYW5zbGF0ZXMvdHJhbnNsYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVyTW9kdWxlIH0gZnJvbSAnLi4vaGVscGVyLm1vZHVsZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogSGVscGVyTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmeVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RvYXN0clNlcnZpY2U6IFRvYXN0clNlcnZpY2UsIHByaXZhdGUgX3RyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UpIHsgfVxuXG4gIGluZm8obXNnOiBzdHJpbmcsIG9wdHM/OiB7fSkge1xuICAgIHRoaXMuX3RvYXN0clNlcnZpY2UuaW5mbyhtc2csIHRoaXMuX3RyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCgnTk9USUZZX0lORk9STUFUSU9OX1RJVExFJyksIG9wdHMpO1xuICB9XG5cbiAgc3VjY2Vzcyhtc2c6IHN0cmluZywgb3B0cz86IHt9KSB7XG4gICAgdGhpcy5fdG9hc3RyU2VydmljZS5zdWNjZXNzKG1zZywgdGhpcy5fdHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdOT1RJRllfU1VDQ0VTU19USVRMRScpLCBvcHRzKTtcbiAgfVxuXG4gIHdhcm5pbmcobXNnOiBzdHJpbmcsIG9wdHM/OiB7fSkge1xuICAgIHRoaXMuX3RvYXN0clNlcnZpY2Uud2FybmluZyhtc2csIHRoaXMuX3RyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCgnTk9USUZZX1dBUk5JTkdfVElUTEUnKSwgb3B0cyk7XG4gIH1cblxuICBlcnJvcihtc2c6IHN0cmluZywgb3B0cz86IHt9KSB7XG4gICAgdGhpcy5fdG9hc3RyU2VydmljZS5lcnJvcihtc2csIHRoaXMuX3RyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCgnTk9USUZZX0VSUk9SX1RJVExFJyksIG9wdHMpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZGFsLCBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEhlbHBlck1vZHVsZSB9IGZyb20gJy4uL2hlbHBlci5tb2R1bGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IEhlbHBlck1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nYk1vZGFsOiBOZ2JNb2RhbCkgeyB9XG5cbiAgb3Blbihjb250ZW50OiBhbnksIHNpemU6IGFueSwgY2VudGVyZWQ6IGJvb2xlYW4sIGJhY2tkcm9wOiBhbnksIGtleWJvYXJkOiBib29sZWFuLCBkYXRhPzogYW55LCBhbmltYXRpb24/OiBhbnkpOiBOZ2JNb2RhbFJlZiB7XG4gICAgY29uc3QgX21vZGFsID0gdGhpcy5fbmdiTW9kYWwub3Blbihjb250ZW50LFxuICAgICAge1xuICAgICAgICBzaXplOiBzaXplLFxuICAgICAgICBiYWNrZHJvcDogYmFja2Ryb3AsXG4gICAgICAgIGNlbnRlcmVkOiBjZW50ZXJlZCxcbiAgICAgICAga2V5Ym9hcmQ6IGtleWJvYXJkXG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnN0IF9pbnN0YW5jZSA9IChfbW9kYWwgYXMgYW55KS5fd2luZG93Q21wdFJlZi5pbnN0YW5jZTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIF9pbnN0YW5jZS53aW5kb3dDbGFzcyA9IGFuaW1hdGlvbjtcbiAgICB9LCAwKTtcblxuICAgIGNvbnN0IF9meCA9IChfbW9kYWwgYXMgYW55KS5fcmVtb3ZlTW9kYWxFbGVtZW50cy5iaW5kKF9tb2RhbCk7XG4gICAgKF9tb2RhbCBhcyBhbnkpLl9yZW1vdmVNb2RhbEVsZW1lbnRzID0gKCkgPT4ge1xuICAgICAgX2luc3RhbmNlLndpbmRvd0NsYXNzID0gJyc7XG4gICAgICBzZXRUaW1lb3V0KF9meCwgMjUwKTtcbiAgICB9O1xuXG4gICAgX21vZGFsLmNvbXBvbmVudEluc3RhbmNlLmRhdGEgPSBkYXRhO1xuXG4gICAgcmV0dXJuIF9tb2RhbDtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJNb2R1bGUgfSBmcm9tICcuLi9oZWxwZXIubW9kdWxlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IEhlbHBlck1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgc3ViamVjdCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICAgIHNldCh2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuc3ViamVjdC5uZXh0KHZhbHVlKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5zdWJqZWN0Lm5leHQoKTtcbiAgICB9XG5cbiAgICBnZXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbn1cbiJdLCJuYW1lcyI6WyJJbmplY3Rpb25Ub2tlbiIsIkluamVjdGFibGUiLCJJbmplY3QiLCJQaXBlIiwiRGlyZWN0aXZlIiwiVmlld0NvbnRhaW5lclJlZiIsIklucHV0IiwiRXZlbnRFbWl0dGVyIiwidHNsaWJfMS5fX3ZhbHVlcyIsIkNvbXBvbmVudCIsIlZpZXdFbmNhcHN1bGF0aW9uIiwiQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIiwiT3V0cHV0IiwiVmlld0NoaWxkIiwiSG9zdExpc3RlbmVyIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIlJlYWN0aXZlRm9ybXNNb2R1bGUiLCJIdHRwQ2xpZW50TW9kdWxlIiwiTmdiTW9kdWxlIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJIdHRwQ2xpZW50IiwiVG9hc3RyU2VydmljZSIsIk5nYk1vZGFsIiwiU3ViamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQU8scUJBQU0sWUFBWSxHQUFHLElBQUksQ0FBQztBQUVqQyxJQUFPLHFCQUFNLGFBQWEsR0FBRzs7UUFHekIsbUJBQW1CLEVBQUUsWUFBWTtRQUNqQyw0QkFBNEIsRUFBRSxRQUFRO1FBQ3RDLG1DQUFtQyxFQUFFLFVBQVU7UUFDL0Msb0NBQW9DLEVBQUUsU0FBUztRQUMvQywwQkFBMEIsRUFBRSxnQkFBZ0I7UUFDNUMsbUJBQW1CLEVBQUUsU0FBUztRQUM5QixtQkFBbUIsRUFBRSxVQUFVO1FBQy9CLG9CQUFvQixFQUFFLFlBQVk7UUFDbEMsZ0JBQWdCLEVBQUUsTUFBTTtRQUN4QixrQkFBa0IsRUFBRSxVQUFVO1FBQzlCLGtCQUFrQixFQUFFLGFBQWE7UUFDakMscUJBQXFCLEVBQUUsaUJBQWlCOzs7UUFLeEMsMEJBQTBCLEVBQUUsYUFBYTtRQUN6QyxzQkFBc0IsRUFBRSxRQUFRO1FBQ2hDLHNCQUFzQixFQUFFLGVBQWU7UUFDdkMsb0JBQW9CLEVBQUUsUUFBUTs7UUFHOUIsd0JBQXdCLEVBQUUscUJBQXFCO1FBQy9DLHNCQUFzQixFQUFFLDRCQUE0QjtRQUNwRCxzQkFBc0IsRUFBRSxjQUFjO1FBQ3RDLHFCQUFxQixFQUFFLHdCQUF3QjtRQUMvQyxvQkFBb0IsRUFBRSxLQUFLO1FBQzNCLG1CQUFtQixFQUFFLEtBQUs7S0FFN0IsQ0FBQzs7Ozs7O0FDbENGLElB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