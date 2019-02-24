import { InjectionToken, Injectable, Inject, Pipe, Directive, ViewContainerRef, Input, Component, Output, EventEmitter, ViewChild, ComponentFactoryResolver, ViewEncapsulation, HostListener, NgModule, defineInjectable, inject } from '@angular/core';
import { __extends, __values } from 'tslib';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgbModal as NgbModal$1 } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { Subject } from 'rxjs';

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
var /** @type {?} */ TRANSLATES = new InjectionToken('translates');
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
var TranslateService = /** @class */ (function () {
    function TranslateService(_translate) {
        this._translate = _translate;
    }
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        get: /**
         * @return {?}
         */
        function () {
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
        { type: Injectable },
    ];
    /** @nocollapse */
    TranslateService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [TRANSLATES,] },] },
    ]; };
    return TranslateService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TranslatePipe = /** @class */ (function () {
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
        { type: Pipe, args: [{
                    name: 'translate',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    TranslatePipe.ctorParameters = function () { return [
        { type: TranslateService, },
    ]; };
    return TranslatePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UIViewDirective = /** @class */ (function () {
    function UIViewDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    UIViewDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ui-view]'
                },] },
    ];
    /** @nocollapse */
    UIViewDirective.ctorParameters = function () { return [
        { type: ViewContainerRef, },
    ]; };
    UIViewDirective.propDecorators = {
        "data": [{ type: Input },],
    };
    return UIViewDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AdvancedTableComponent = /** @class */ (function () {
    function AdvancedTableComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.columns = [];
        this.dataSource = [];
        this.checkedRows = [];
        this.indexChange = new EventEmitter();
        this.sizeChange = new EventEmitter();
        this.countChange = new EventEmitter();
        this.checkedRowsChange = new EventEmitter();
        this.onCreate = new EventEmitter();
        this.onValidate = new EventEmitter();
        this.onModify = new EventEmitter();
        this.onDelete = new EventEmitter();
        this.onRefresh = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onSearch = new EventEmitter();
        this.onPageChange = new EventEmitter();
    }
    Object.defineProperty(AdvancedTableComponent.prototype, "viewContainerRef", {
        set: /**
         * @param {?} uiView
         * @return {?}
         */
        function (uiView) {
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
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
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
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
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
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_3) throw e_3.error; }
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
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_4) throw e_4.error; }
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
        { type: Component, args: [{
                    selector: 'helper-advanced-table',
                    template: "<div class=\"table-responsive\">\n  <div class=\"hero-callout\" [style.font-size.px]=\"szTable === 'sm' ? '11' : '13'\">\n    <div class=\"form-group m-form__group row align-items-center\" style=\"margin-bottom: 4px;\">\n      <div [ngClass]=\"{ 'sm': 'col-10', 'md': 'col-9', 'lg': 'col-8', 'sz-6': 'col-6', 'sz-5': 'col-7' }[szSearch]\"\n        *ngIf=\"!isTakeAll\">\n        <label>\n          Affiche\n          <select [(ngModel)]=\"_ngbPagination.pageSize\" (ngModelChange)=\"_ngbPagination.pageChange(_ngbPagination.page)\">\n            <option value=\"5\">5</option>\n            <option value=\"10\">10</option>\n            <option value=\"12\">12</option>\n            <option value=\"25\">25</option>\n            <option value=\"50\">50</option>\n            <option value=\"100\">100</option>\n          </select>\n          entr\u00E9es\n        </label>\n      </div>\n      <div [ngClass]=\"{ 'sm': 'col-2 d-flex justify-content-end', 'md': 'col-3 d-flex justify-content-end', 'lg': 'col-4 d-flex justify-content-end', 'sz-6': 'col-6 d-flex justify-content-end', 'sz-5': 'col-5 d-flex justify-content-end' }[szSearch]\"\n        *ngIf=\"isSearch\">\n        <div class=\"m-input-icon m-input-icon--left\">\n          <input type=\"text\" class=\"form-control form-control-sm m-input\" style=\"border:1px solid #ddd;\" [(ngModel)]=\"_searchParam\"\n            placeholder=\"Recherche...\" (ngModelChange)=\"doSearch()\">\n          <span class=\"m-input-icon__icon m-input-icon__icon--left\">\n            <span>\n              <i class=\"flaticon-search\"></i>\n            </span>\n          </span>\n        </div>\n      </div>\n    </div>\n    <table class=\"table table-striped table-hover advanced-table m-table\">\n      <thead>\n        <tr>\n          <th class=\"th-1\" *ngIf=\"isRefresh && !isNumber\" (click)=\"doRefresh()\">\n            <i class=\"fa fa-refresh\" [style.font-size.px]=\"szTable === 'sm' ? '13' : '14'\"></i>\n          </th>\n          <th *ngIf=\"isDetails\"></th>\n          <th *ngIf=\"isSelected && !isChecked\"></th>\n          <th *ngIf=\"isChecked && !isSelected\">\n            <input type=\"checkbox\" [(ngModel)]=\"_isCheckedRows\" (ngModelChange)=\"doCheckRows()\">\n          </th>\n          <th *ngIf=\"isNumber && !isRefresh\">N\u00B0</th>\n          <th *ngFor=\"let column of columns\" (click)=\"doSorting(column);\">\n            {{column.text}}\n            <i class=\"la la-arrow-up i--filter\" *ngIf=\"column.isSorting && !column.isSortUp\"></i>\n            <i class=\"la la-arrow-down i--filter\" *ngIf=\"column.isSorting && column.isSortUp\"></i>\n          </th>\n          <th class=\"th-1\" *ngIf=\"isEditable\">\n            <div class=\"dropdown btn-group\">\n              <a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" [style.font-size.px]=\"szTable === 'sm' ? '11' : '12'\">\n                <span class=\"fa fa-cog\"></span>\n                <span class=\"caret\"></span>\n              </a>\n              <ul class=\"dropdown-menu\" style=\"cursor: pointer;\" [style.font-size.px]=\"szTable === 'sm' ? '11' : '12'\">\n                <li *ngIf=\"isCreate\" (click)=\"doCreate()\"><a>Nouveau</a></li>\n                <li><a>Exporter</a></li>\n              </ul>\n            </div>\n          </th>\n          <th class=\"th-1\" *ngIf=\"isModify\">\n            <div class=\"dropdown btn-group\">\n              <a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" [style.font-size.px]=\"szTable === 'sm' ? '11' : '12'\">\n                <span class=\"fa fa-cog\"></span>\n                <span class=\"caret\"></span>\n              </a>\n              <ul class=\"dropdown-menu\" style=\"cursor: pointer;\" [style.font-size.px]=\"szTable === 'sm' ? '11' : '12'\">\n                <li *ngIf=\"isCreate\" (click)=\"doCreate()\"><a>Nouveau</a></li>\n                <li><a>Exporter</a></li>\n              </ul>\n            </div>\n          </th>\n          <th class=\"th-1\" *ngIf=\"!isModify && !isEditable && !isDeleted && !isCreate\">\n            <div class=\"dropdown btn-group\">\n              <a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" [style.font-size.px]=\"szTable === 'sm' ? '11' : '12'\">\n                <span class=\"fa fa-cog\"></span>\n                <span class=\"caret\"></span>\n              </a>\n              <ul class=\"dropdown-menu\" style=\"cursor: pointer;\" [style.font-size.px]=\"szTable === 'sm' ? '11' : '12'\">\n                <li><a>Exporter</a></li>\n              </ul>\n            </div>\n          </th>\n          <th class=\"th-1\" *ngIf=\"isDeleted\">\n            <div class=\"dropdown btn-group\">\n              <a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" [style.font-size.px]=\"szTable === 'sm' ? '11' : '12'\">\n                <span class=\"fa fa-cog\"></span>\n                <span class=\"caret\"></span>\n              </a>\n              <ul class=\"dropdown-menu\" style=\"cursor: pointer;\" [style.font-size.px]=\"szTable === 'sm' ? '11' : '12'\">\n                <li *ngIf=\"isCreate\" (click)=\"doCreate()\"><a>Nouveau</a></li>\n                <li><a>Exporter</a></li>\n              </ul>\n            </div>\n          </th>\n        </tr>\n      </thead>\n      <tbody *ngFor=\"let row of dataSource; let i = index;\" style=\"border: none;\">\n        <tr class=\"__r\" (dblclick)=\"doModify(row)\" (click)=\"doSelect(row)\">\n          <td class=\"td-1\" [class.td--active]=\"row.checked || row.selected\" *ngIf=\"isRefresh && !isNumber\">\n            {{ (i + 1) + (_ngbPagination.pageSize * (_ngbPagination.page - 1)) }}\n          </td>\n          <td class=\"td-1\" [class.td--active]=\"row.checked || row.selected\" *ngIf=\"isDetails\">\n            <span class=\"dt-btn-plus\" [style.font-size.px]=\"szTable === 'sm' ? '11' : '13'\" (click)=\"doOpen(row)\" *ngIf=\"!row.isOpen\">+</span>\n            <span class=\"dt-btn-minius\" [style.font-size.px]=\"szTable === 'sm' ? '11' : '13'\" (click)=\"doClose(row)\"\n              *ngIf=\"row.isOpen\">-</span>\n          </td>\n          <td class=\"td-1\" [class.td--active]=\"row.checked || row.selected\" *ngIf=\"isSelected && !isChecked\">\n            <input type=\"radio\" name=\"radio\" [checked]=\"row.selected === true\">\n          </td>\n          <td class=\"td-1\" [class.td--active]=\"row.checked || row.selected\" *ngIf=\"isChecked && !isSelected\">\n            <input type=\"checkbox\" [(ngModel)]=\"row.checked\" (ngModelChange)=\"doCheck(row)\">\n          </td>\n          <td class=\"td-1\" [class.td--active]=\"row.checked || row.selected\" *ngIf=\"isNumber && !isRefresh\">\n            {{ (i + 1) + (_ngbPagination.pageSize * (_ngbPagination.page - 1)) }}\n          </td>\n          <td class=\"td-2\" [class.td--active]=\"row.checked || row.selected\" *ngFor=\"let column of columns\">\n            <span *ngIf=\"!column.isEditable || !row.editable\">{{row[column.name]}}</span>\n            <input *ngIf=\"column.isEditable && row.editable\" type=\"text\" class=\"form-control form-control-sm m-input m-input--square\"\n              style=\"border: 1px solid #ddd;\" [(ngModel)]=\"row[column.name]\" />\n          </td>\n          <td class=\"td-1\" [class.td--active]=\"row.checked || row.selected\" *ngIf=\"isEditable && !isModify\">\n            <img *ngIf=\"!row.editable && isEditable\" src=\"../../../assets/app/media/img/icons/if_Modify_132685.png\"\n              (click)=\"doEditable(row)\" width=\"12\" height=\"12\" />\n            <img *ngIf=\"row.editable && isEditable\" src=\"../../../assets/app/media/img/icons/if_floppy_disk_save_103863.png\"\n              (click)=\"doValidate(row)\" width=\"12\" height=\"12\" style=\"margin-right: 6px;\" />\n            <img *ngIf=\"row.editable && isEditable\" src=\"../../../assets/app/media/img/icons/if_f-cross_256_282471.png\"\n              (click)=\"doCancel(row)\" width=\"12\" height=\"12\" />\n          </td>\n          <td class=\"td-1\" [class.td--active]=\"row.checked || row.selected\" *ngIf=\"isModify && !isEditable\" (click)=\"doModify(row)\">\n            <img src=\"../../../assets/app/media/img/icons/if_Modify_132685.png\" width=\"12\" height=\"12\" />\n          </td>\n          <td class=\"td-1\" [class.td--active]=\"row.checked || row.selected\" *ngIf=\"isDeleted\" (click)=\"doDelete(row)\">\n            <img src=\"../../../assets/app/media/img/icons/if_Erase_132784.png\" width=\"12\" height=\"12\" />\n          </td>\n          <td [class.td--active]=\"row.checked || row.selected\" *ngIf=\"!isModify && !isEditable && !isDeleted && !isCreate\"></td>\n        </tr>\n        <tr *ngIf=\"row.isOpen\">\n          <td class=\"sub--r\" [attr.colspan]=\"columns.length + 8\">\n            <ng-template ui-view [data]=\"row\"></ng-template>\n          </td>\n        </tr>\n      </tbody>\n      <tbody *ngIf=\"!count\" style=\"border: none\">\n        <tr>\n          <td class=\"sub--r-1\" [attr.colspan]=\"columns.length + 8\" style=\"text-align: center\">Aucune donn&eacute;e</td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"form-group m-form__group row align-items-center\" style=\"margin-bottom: 0px;\" *ngIf=\"!isTakeAll && count\">\n      <div class=\"col-md-4\" style=\"top: -7px;\">\n        <span>\n          Affichage {{ _ngbPagination.rowStart() }} \u00E0 {{ _ngbPagination.rowEnd() > count ? count :\n          _ngbPagination.rowEnd() }} de {{count}}\n          entr\u00E9es\n        </span>\n      </div>\n      <div class=\"col-md-8\">\n        <ngb-pagination [ellipses]=\"_ngbPagination.ellipses\" [collectionSize]=\"count\" class=\"d-flex justify-content-end\"\n          [(page)]=\"_ngbPagination.page\" [maxSize]=\"_ngbPagination.maxSize\" [rotate]=\"_ngbPagination.rotate\"\n          [boundaryLinks]=\"_ngbPagination.boundaryLinks\" [pageSize]=\"_ngbPagination.pageSize\" (pageChange)=\"_ngbPagination.pageChange(_ngbPagination.page)\"></ngb-pagination>\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: [".table-responsive{overflow:hidden}.table{border-bottom:1px solid #111;border-spacing:0;overflow:inherit;overflow-x:visible;overflow-y:visible;height:100%;width:100%}.table-striped>tbody:nth-of-type(2n)>tr.__r{background-color:#fff}.table-striped>tbody:nth-of-type(2n+1)>tr.__r{background-color:#f9f9f9}.table-striped>tbody:last-child>tr.__r:hover>td{border-bottom:none}.table-striped>tbody:last-child>tr.__r>td.td--active{border-bottom:none!important}.table-striped>tbody>tr.__r:hover>td{background-color:#daf1ff;border-top:1px solid #6bbef2;border-bottom:1px solid #6bbef2}.table th,td{padding:6px 10px}.table td{max-width:200px;white-space:nowrap;-ms-text-overflow:ellipsis;text-overflow:ellipsis;border-top:1px solid #ddd;font-weight:400;color:#333;cursor:pointer;overflow:visible}.table th{background-color:#fff;position:relative;font-weight:600;border-top:none;border-right:none;border-left:none;vertical-align:middle;border-bottom:1px solid #111;background-repeat:no-repeat;background-position:center right;cursor:pointer;overflow:visible}.dt-btn-plus{top:9px;left:4px;height:12px;width:12px;display:block;color:#fff;border:2px solid #fff;border-radius:14px;box-shadow:0 0 3px #444;box-sizing:content-box;text-align:center;text-indent:0!important;line-height:12px;background-color:#31b131}.dt-btn-minius{top:9px;left:4px;height:12px;width:12px;display:block;color:#fff;border:2px solid #fff;border-radius:14px;box-shadow:0 0 3px #444;box-sizing:content-box;text-align:center;text-indent:0!important;line-height:12px;background-color:#d33333}.td-1,.th-1{width:5px;cursor:pointer;vertical-align:middle;text-align:center}.td-2{vertical-align:middle}.hero-callout{padding:10px;box-shadow:3px 3px 20px rgba(0,0,0,.3);border-radius:3px}.td--active{background-color:#daf1ff;border-top:1px solid #6bbef2!important;border-bottom:1px solid #6bbef2!important}.i--filter{font-size:13px;display:inline-block;position:relative;right:-10px;line-height:0;vertical-align:middle}.sub--r{background-color:#f9f9f9!important;padding:10px}.sub--r:hover{background-color:none!important;border-top:1px solid #ddd!important;border-bottom:1px solid #111!important;padding:10px}.sub--r-1{background-color:#f9f9f9!important;padding:6px 10px}.sub--r-1:hover{background-color:none!important;border-bottom:1px solid #111!important;padding:6px 10px}.btn{border-radius:4px;border:1px solid #979797;height:21px;color:#000;line-height:19px;white-space:nowrap;padding:3px 5px 18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;margin-bottom:0;font-weight:400}.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px solid;border-right:4px solid transparent;border-left:4px solid transparent}a.dropdown-toggle{color:#616161!important}ul.dropdown-menu{right:0!important;top:100%!important;float:none;color:#000;line-height:3px;border-radius:5px!important;font-weight:500;padding:4px;-webkit-transform:none!important;transform:none!important}.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{bottom:auto;left:auto!important}ul.dropdown-menu a:hover{font-weight:600;color:#fff;background-image:linear-gradient(-179deg,#6288f8 0,#2261f6 100%);border-top:1px solid #587fee;border-bottom:1px solid #0d52eb}.dropdown-toggle::after{display:none}.btn-group{white-space:nowrap}.btn-group .btn{float:none;display:inline-block}.__header{border-bottom:1px solid #ddd;padding-bottom:8px;margin-top:-10px}"],
                    encapsulation: ViewEncapsulation.Emulated,
                },] },
    ];
    /** @nocollapse */
    AdvancedTableComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver, },
    ]; };
    AdvancedTableComponent.propDecorators = {
        "index": [{ type: Input, args: ['index',] },],
        "size": [{ type: Input, args: ['size',] },],
        "count": [{ type: Input, args: ['count',] },],
        "szTable": [{ type: Input, args: ['sz-table',] },],
        "szSearch": [{ type: Input, args: ['sz-search',] },],
        "isHeader": [{ type: Input, args: ['is-header',] },],
        "isCreate": [{ type: Input, args: ['is-create',] },],
        "isRefresh": [{ type: Input, args: ['is-refresh',] },],
        "isNumber": [{ type: Input, args: ['is-number',] },],
        "isEditable": [{ type: Input, args: ['is-editable',] },],
        "isModify": [{ type: Input, args: ['is-modify',] },],
        "isTakeAll": [{ type: Input, args: ['is-take-all',] },],
        "maxSize": [{ type: Input, args: ['max-size',] },],
        "isDeleted": [{ type: Input, args: ['is-deleted',] },],
        "isSearch": [{ type: Input, args: ['is-search',] },],
        "isDetails": [{ type: Input, args: ['is-details',] },],
        "isChecked": [{ type: Input, args: ['is-checked',] },],
        "isSelected": [{ type: Input, args: ['is-selected',] },],
        "columns": [{ type: Input, args: ['columns',] },],
        "dataSource": [{ type: Input, args: ['data-source',] },],
        "checkedRows": [{ type: Input, args: ['checked-rows',] },],
        "viewChild": [{ type: Input, args: ['view-child',] },],
        "indexChange": [{ type: Output },],
        "sizeChange": [{ type: Output },],
        "countChange": [{ type: Output },],
        "checkedRowsChange": [{ type: Output },],
        "onCreate": [{ type: Output },],
        "onValidate": [{ type: Output },],
        "onModify": [{ type: Output },],
        "onDelete": [{ type: Output },],
        "onRefresh": [{ type: Output },],
        "onSelect": [{ type: Output },],
        "onSearch": [{ type: Output },],
        "onPageChange": [{ type: Output },],
        "viewContainerRef": [{ type: ViewChild, args: [UIViewDirective,] },],
    };
    return AdvancedTableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UpperCaseDirective = /** @class */ (function () {
    function UpperCaseDirective() {
        this.ngModelChange = new EventEmitter();
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
        { type: Directive, args: [{
                    selector: '[ngModel][upper-case]'
                },] },
    ];
    /** @nocollapse */
    UpperCaseDirective.ctorParameters = function () { return []; };
    UpperCaseDirective.propDecorators = {
        "ngModelChange": [{ type: Output },],
        "onModelChange": [{ type: HostListener, args: ['input', ['$event'],] },],
    };
    return UpperCaseDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HelperModule = /** @class */ (function () {
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
        { type: NgModule, args: [{
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
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        HttpClientModule,
                        NgbModule.forRoot(),
                    ],
                },] },
    ];
    return HelperModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RequestBase = /** @class */ (function () {
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
var Request = /** @class */ (function (_super) {
    __extends(Request, _super);
    function Request() {
        return _super.call(this, GlobalEnum._INDEX, GlobalEnum._SIZE, GlobalEnum._TAKE_ALL, GlobalEnum._IS_AND, GlobalEnum._ORDER_BY_DESC, GlobalEnum._LANG) || this;
    }
    Request.decorators = [
        { type: Injectable, args: [{
                    providedIn: HelperModule
                },] },
    ];
    /** @nocollapse */
    Request.ctorParameters = function () { return []; };
    /** @nocollapse */ Request.ngInjectableDef = defineInjectable({ factory: function Request_Factory() { return new Request(); }, token: Request, providedIn: HelperModule });
    return Request;
}(RequestBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ResponseBase = /** @class */ (function () {
    function ResponseBase(status) {
        this.status = status;
    }
    return ResponseBase;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Status = /** @class */ (function () {
    function Status() {
    }
    Status.decorators = [
        { type: Injectable },
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
var Response = /** @class */ (function (_super) {
    __extends(Response, _super);
    function Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Response.decorators = [
        { type: Injectable, args: [{
                    providedIn: HelperModule
                },] },
    ];
    /** @nocollapse */ Response.ngInjectableDef = defineInjectable({ factory: function Response_Factory() { return new Response(inject(Status)); }, token: Response, providedIn: HelperModule });
    return Response;
}(ResponseBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
SearchParam = /** @class */ (function () {
    function SearchParam() {
    }
    return SearchParam;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HttpRequestService = /** @class */ (function () {
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
        { type: Injectable, args: [{
                    providedIn: HelperModule
                },] },
    ];
    /** @nocollapse */
    HttpRequestService.ctorParameters = function () { return [
        { type: HttpClient, },
    ]; };
    /** @nocollapse */ HttpRequestService.ngInjectableDef = defineInjectable({ factory: function HttpRequestService_Factory() { return new HttpRequestService(inject(HttpClient)); }, token: HttpRequestService, providedIn: HelperModule });
    return HttpRequestService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UtilityService = /** @class */ (function () {
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
        { type: Injectable, args: [{
                    providedIn: HelperModule
                },] },
    ];
    /** @nocollapse */
    UtilityService.ctorParameters = function () { return []; };
    /** @nocollapse */ UtilityService.ngInjectableDef = defineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(); }, token: UtilityService, providedIn: HelperModule });
    return UtilityService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NotifyService = /** @class */ (function () {
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
        { type: Injectable, args: [{
                    providedIn: HelperModule
                },] },
    ];
    /** @nocollapse */
    NotifyService.ctorParameters = function () { return [
        { type: ToastrService, },
        { type: TranslateService, },
    ]; };
    /** @nocollapse */ NotifyService.ngInjectableDef = defineInjectable({ factory: function NotifyService_Factory() { return new NotifyService(inject(ToastrService), inject(TranslateService)); }, token: NotifyService, providedIn: HelperModule });
    return NotifyService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalService = /** @class */ (function () {
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
        var /** @type {?} */ _instance = (/** @type {?} */ (_modal))._windowCmptRef.instance;
        setTimeout(function () {
            _instance.windowClass = animation;
        }, 0);
        var /** @type {?} */ _fx = (/** @type {?} */ (_modal))._removeModalElements.bind(_modal);
        (/** @type {?} */ (_modal))._removeModalElements = function () {
            _instance.windowClass = '';
            setTimeout(_fx, 250);
        };
        _modal.componentInstance.data = data;
        return _modal;
    };
    ModalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: HelperModule
                },] },
    ];
    /** @nocollapse */
    ModalService.ctorParameters = function () { return [
        { type: NgbModal, },
    ]; };
    /** @nocollapse */ ModalService.ngInjectableDef = defineInjectable({ factory: function ModalService_Factory() { return new ModalService(inject(NgbModal$1)); }, token: ModalService, providedIn: HelperModule });
    return ModalService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SharedService = /** @class */ (function () {
    function SharedService() {
        this.subject = new Subject();
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
        { type: Injectable, args: [{
                    providedIn: HelperModule
                },] },
    ];
    /** @nocollapse */ SharedService.ngInjectableDef = defineInjectable({ factory: function SharedService_Factory() { return new SharedService(); }, token: SharedService, providedIn: HelperModule });
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

export { HelperModule, Request, Response, TRANSLATES, _translates, TranslateProviders, SearchParam, TranslateService, HttpRequestService, UtilityService, NotifyService, ModalService, SharedService, UIViewDirective, UpperCaseDirective, GlobalEnum, AdvancedTableComponent as ɵb, RequestBase as ɵc, ResponseBase as ɵd, Status as ɵe, TranslatePipe as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9oZWxwZXIvbGliL190cmFuc2xhdGVzL2xhbmctZnIudHMiLCJuZzovL2hlbHBlci9saWIvX3RyYW5zbGF0ZXMvbGFuZy1lbi50cyIsIm5nOi8vaGVscGVyL2xpYi9fdHJhbnNsYXRlcy90cmFuc2xhdGVzLnRzIiwibmc6Ly9oZWxwZXIvbGliL190cmFuc2xhdGVzL3RyYW5zbGF0ZS5zZXJ2aWNlLnRzIiwibmc6Ly9oZWxwZXIvbGliL190cmFuc2xhdGVzL3RyYW5zbGF0ZS5waXBlLnRzIiwibmc6Ly9oZWxwZXIvbGliL19kaXJlY3RpdmVzL3VpLXZpZXcuZGlyZWN0aXZlLnRzIiwibmc6Ly9oZWxwZXIvbGliL19jb21wb25lbnRzL2FkdmFuY2VkLXRhYmxlL2FkdmFuY2VkLXRhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vaGVscGVyL2xpYi9fZGlyZWN0aXZlcy91cHBlci1jYXNlLmRpcmVjdGl2ZS50cyIsIm5nOi8vaGVscGVyL2xpYi9oZWxwZXIubW9kdWxlLnRzIiwibmc6Ly9oZWxwZXIvbGliL19jb250cmFjdHMvcmVxdWVzdC1iYXNlLnRzIiwibmc6Ly9oZWxwZXIvbGliL191dGlsaXRpZXMvZ2xvYmFsLWVudW0udHMiLCJuZzovL2hlbHBlci9saWIvX2NvbnRyYWN0cy9yZXF1ZXN0LnRzIiwibmc6Ly9oZWxwZXIvbGliL19jb250cmFjdHMvcmVzcG9uc2UtYmFzZS50cyIsIm5nOi8vaGVscGVyL2xpYi9fY29udHJhY3RzL3N0YXR1cy50cyIsIm5nOi8vaGVscGVyL2xpYi9fY29udHJhY3RzL3Jlc3BvbnNlLnRzIiwibmc6Ly9oZWxwZXIvbGliL19jb250cmFjdHMvc2VhcmNoLXBhcmFtLnRzIiwibmc6Ly9oZWxwZXIvbGliL191dGlsaXRpZXMvaHR0cC1yZXF1ZXN0LnNlcnZpY2UudHMiLCJuZzovL2hlbHBlci9saWIvX3V0aWxpdGllcy91dGlsaXR5LnNlcnZpY2UudHMiLCJuZzovL2hlbHBlci9saWIvX3V0aWxpdGllcy9ub3RpZnkuc2VydmljZS50cyIsIm5nOi8vaGVscGVyL2xpYi9fdXRpbGl0aWVzL21vZGFsLnNlcnZpY2UudHMiLCJuZzovL2hlbHBlci9saWIvX3V0aWxpdGllcy9zaGFyZWQuc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTEFOR19GUl9OQU1FID0gJ2ZyJztcclxuXHJcbmV4cG9ydCBjb25zdCBMQU5HX0ZSX1RSQU5TID0ge1xyXG5cclxuICAgIC8vIEFTSURFX05BViBTRUNUSU9OXHJcbiAgICAnQVNJREVfTkFWX1NFVFRJTkcnOiAnUGFyYW3Dg8KodHJlcycsXHJcbiAgICAnQVNJREVfTkFWX1NFVFRJTkdfTEFOR1VBR0UnOiAnTGFuZ3VlJyxcclxuICAgICdBU0lERV9OQVZfU0VUVElOR19MQU5HVUFHRV9GUkVOQ0gnOiAnRnJhbsODwqdhaXMnLFxyXG4gICAgJ0FTSURFX05BVl9TRVRUSU5HX0xBTkdVQUdFX0VOR0xJU0gnOiAnQW5nbGFpcycsXHJcbiAgICAnQVNJREVfTkFWX0FETUlOSVNUUkFUSU9OJzogJ0FkbWluaXN0cmF0aW9uJyxcclxuICAgICdBU0lERV9OQVZfUFJPRklMRSc6ICdQcm9maWxzJyxcclxuICAgICdBU0lERV9OQVZfUkVRVUVTVCc6ICdEZW1hbmRlcycsXHJcbiAgICAnQVNJREVfTkFWX1JFU09VUkNFJzogJ1Jlc3NvdXJjZXMnLFxyXG4gICAgJ0FTSURFX05BVl9IRUxQJzogJ0FpZGUnLFxyXG4gICAgJ0FTSURFX05BVl9SRVBPUlQnOiAnUmFwcG9ydHMnLFxyXG4gICAgJ0FTSURFX05BVl9MT0dPVVQnOiAnRMODwqljb25uZXhpb24nLFxyXG4gICAgJ0FTSURFX05BVl9EQVNIQk9BUkQnOiAnVGFibGVhdSBkZSBib3JkJyxcclxuXHJcbiAgICAvLyBIRUFERVJfTkFWIFNFQ1RJT05cclxuXHJcbiAgICAvLyBOT1RJRlkgVElUTEUgU0VDVElPTlxyXG4gICAgJ05PVElGWV9JTkZPUk1BVElPTl9USVRMRSc6ICdJbmZvcm1hdGlvbicsXHJcbiAgICAnTk9USUZZX1NVQ0NFU1NfVElUTEUnOiAnU3VjY8ODwqhzJyxcclxuICAgICdOT1RJRllfV0FSTklOR19USVRMRSc6ICdBdmVydGlzc2VtZW50JyxcclxuICAgICdOT1RJRllfRVJST1JfVElUTEUnOiAnRXJyZXVyJyxcclxuXHJcbiAgICAvLyBOT1RJRlkgTUVTU0FHRSBTRUNUSU9OXHJcbiAgICAnTk9USUZZX1NVQ0NFU1NfTUVTU0FHRSc6ICdPcMODwqlyYXRpb24gZWZmZWN0dcODwqllJyxcclxuICAgICdOT1RJRllfRVJST1JfTUVTU0FHRSc6ICdVbmUgZXJyZXVyIHNcXCdlc3QgcHJvZHVpdGUnLFxyXG4gICAgJ05PVElGWV9DT05GSVJNX1RJVExFJzogJ0NvbmZpcm1hdGlvbicsXHJcbiAgICAnTk9USUZZX0NPTkZJUk1fVEVYVCc6ICdWb3VsZXotdm91cyBjb250aW51ZXI/JyxcclxuICAgICdOT1RJRllfQ09ORklSTV9ZRVMnOiAnT3VpJyxcclxuICAgICdOT1RJRllfQ09ORklSTV9OTyc6ICdOb24nXHJcblxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgTEFOR19FTl9OQU1FID0gJ2VuJztcclxuXHJcbmV4cG9ydCBjb25zdCBMQU5HX0VOX1RSQU5TID0ge1xyXG5cclxuICAgIC8vIEFTSURFX05BViBTRUNUSU9OXHJcbiAgICAnQVNJREVfTkFWX1NFVFRJTkcnOiAnU2V0dGluZ3MnLFxyXG4gICAgJ0FTSURFX05BVl9TRVRUSU5HX0xBTkdVQUdFJzogJ0xhbmd1YWdlJyxcclxuICAgICdBU0lERV9OQVZfU0VUVElOR19MQU5HVUFHRV9GUkVOQ0gnOiAnRnJlbmNoJyxcclxuICAgICdBU0lERV9OQVZfU0VUVElOR19MQU5HVUFHRV9FTkdMSVNIJzogJ0VuZ2xpc2gnLFxyXG4gICAgJ0FTSURFX05BVl9BRE1JTklTVFJBVElPTic6ICdBZG1pbmlzdHJhdGlvbicsXHJcbiAgICAnQVNJREVfTkFWX1BST0ZJTEUnOiAnUHJvZmlsZXMnLFxyXG4gICAgJ0FTSURFX05BVl9SRVFVRVNUJzogJ1JlcXVlc3RzJyxcclxuICAgICdBU0lERV9OQVZfUkVTT1VSQ0UnOiAnUmVzb3VyY2VzJyxcclxuICAgICdBU0lERV9OQVZfSEVMUCc6ICdIZWxwJyxcclxuICAgICdBU0lERV9OQVZfQVNTSVNUQU5DRSc6ICdBc3Npc3RhbmNlJyxcclxuICAgICdBU0lERV9OQVZfUkVQT1JUJzogJ1JlcG9ydHMnLFxyXG4gICAgJ0FTSURFX05BVl9MT0dPVVQnOiAnTG9nb3V0JyxcclxuICAgICdBU0lERV9OQVZfREFTSEJPQVJEJzogJ0Rhc2hib2FyZCcsXHJcblxyXG4gICAgLy8gSEVBREVSX05BViBTRUNUSU9OXHJcblxyXG4gICAgLy8gTk9USUZZIFRJVExFIFNFQ1RJT05cclxuICAgICdOT1RJRllfSU5GT1JNQVRJT05fVElUTEUnOiAnSW5mb3JtYXRpb24nLFxyXG4gICAgJ05PVElGWV9TVUNDRVNTX1RJVExFJzogJ1N1Y2Nlc3MnLFxyXG4gICAgJ05PVElGWV9XQVJOSU5HX1RJVExFJzogJ1dhcm5pbmcnLFxyXG4gICAgJ05PVElGWV9FUlJPUl9USVRMRSc6ICdFcnJvcicsXHJcblxyXG4gICAgLy8gTk9USUZZIE1FU1NBR0UgU0VDVElPTlxyXG4gICAgJ05PVElGWV9TVUNDRVNTX01FU1NBR0UnOiAnT3BlcmF0aW9uIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAnTk9USUZZX0VSUk9SX01FU1NBR0UnOiAnQW4gZXJyb3IgaGFzIG9jY3VycmVkJyxcclxuICAgICdOT1RJRllfQ09ORklSTV9USVRMRSc6ICdDb25maXJtJyxcclxuICAgICdOT1RJRllfQ09ORklSTV9URVhUJzogJ0RvIHlvdSB3YW50IHRvIGNvbnRpbnVlPycsXHJcbiAgICAnTk9USUZZX0NPTkZJUk1fWUVTJzogJ1llcycsXHJcbiAgICAnTk9USUZZX0NPTkZJUk1fTk8nOiAnTm8nXHJcblxyXG59O1xyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTEFOR19GUl9OQU1FLCBMQU5HX0ZSX1RSQU5TIH0gZnJvbSAnLi9sYW5nLWZyJztcclxuaW1wb3J0IHsgTEFOR19FTl9OQU1FLCBMQU5HX0VOX1RSQU5TIH0gZnJvbSAnLi9sYW5nLWVuJztcclxuXHJcbmV4cG9ydCBjb25zdCBUUkFOU0xBVEVTID0gbmV3IEluamVjdGlvblRva2VuPGFueT4oJ3RyYW5zbGF0ZXMnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBfdHJhbnNsYXRlcyA9IHtcclxuICAgIFtMQU5HX0ZSX05BTUVdOiBMQU5HX0ZSX1RSQU5TLFxyXG4gICAgW0xBTkdfRU5fTkFNRV06IExBTkdfRU5fVFJBTlNcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBUcmFuc2xhdGVQcm92aWRlcnMgPSBbXHJcbiAgICB7IHByb3ZpZGU6IFRSQU5TTEFURVMsIHVzZVZhbHVlOiBfdHJhbnNsYXRlcyB9XHJcbl07XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUUkFOU0xBVEVTIH0gZnJvbSAnLi90cmFuc2xhdGVzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgX2N1cnJlbnRMYW5nOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoQEluamVjdChUUkFOU0xBVEVTKSBwcml2YXRlIF90cmFuc2xhdGU6IGFueSkgeyB9XHJcblxyXG4gICAgcHVibGljIGdldCBjdXJyZW50TGFuZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudExhbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVzZShsYW5nOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50TGFuZyA9IGxhbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGUoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0ga2V5O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fdHJhbnNsYXRlW3RoaXMuY3VycmVudExhbmddICYmIHRoaXMuX3RyYW5zbGF0ZVt0aGlzLmN1cnJlbnRMYW5nXVtrZXldKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cmFuc2xhdGVbdGhpcy5jdXJyZW50TGFuZ11ba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnN0YW50KGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKGtleSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGUuc2VydmljZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAndHJhbnNsYXRlJyxcclxuICAgIHB1cmU6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSkgeyB9XHJcblxyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBpZiAoIXZhbHVlKSB7IHJldHVybjsgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3VpLXZpZXddJ1xufSlcbmV4cG9ydCBjbGFzcyBVSVZpZXdEaXJlY3RpdmUge1xuXG4gIEBJbnB1dCgpIGRhdGE7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVUlWaWV3RGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vX2RpcmVjdGl2ZXMvdWktdmlldy5kaXJlY3RpdmUnO1xuXG5kZWNsYXJlIHZhciBFbnVtZXJhYmxlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlbHBlci1hZHZhbmNlZC10YWJsZScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cbiAgPGRpdiBjbGFzcz1cImhlcm8tY2FsbG91dFwiIFtzdHlsZS5mb250LXNpemUucHhdPVwic3pUYWJsZSA9PT0gJ3NtJyA/ICcxMScgOiAnMTMnXCI+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbS1mb3JtX19ncm91cCByb3cgYWxpZ24taXRlbXMtY2VudGVyXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiA0cHg7XCI+XG4gICAgICA8ZGl2IFtuZ0NsYXNzXT1cInsgJ3NtJzogJ2NvbC0xMCcsICdtZCc6ICdjb2wtOScsICdsZyc6ICdjb2wtOCcsICdzei02JzogJ2NvbC02JywgJ3N6LTUnOiAnY29sLTcnIH1bc3pTZWFyY2hdXCJcbiAgICAgICAgKm5nSWY9XCIhaXNUYWtlQWxsXCI+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBBZmZpY2hlXG4gICAgICAgICAgPHNlbGVjdCBbKG5nTW9kZWwpXT1cIl9uZ2JQYWdpbmF0aW9uLnBhZ2VTaXplXCIgKG5nTW9kZWxDaGFuZ2UpPVwiX25nYlBhZ2luYXRpb24ucGFnZUNoYW5nZShfbmdiUGFnaW5hdGlvbi5wYWdlKVwiPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj41PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTBcIj4xMDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEyXCI+MTI8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyNVwiPjI1PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNTBcIj41MDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwMFwiPjEwMDwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIGVudHLDg8KpZXNcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBbbmdDbGFzc109XCJ7ICdzbSc6ICdjb2wtMiBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCcsICdtZCc6ICdjb2wtMyBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCcsICdsZyc6ICdjb2wtNCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCcsICdzei02JzogJ2NvbC02IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kJywgJ3N6LTUnOiAnY29sLTUgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQnIH1bc3pTZWFyY2hdXCJcbiAgICAgICAgKm5nSWY9XCJpc1NlYXJjaFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibS1pbnB1dC1pY29uIG0taW5wdXQtaWNvbi0tbGVmdFwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBtLWlucHV0XCIgc3R5bGU9XCJib3JkZXI6MXB4IHNvbGlkICNkZGQ7XCIgWyhuZ01vZGVsKV09XCJfc2VhcmNoUGFyYW1cIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZWNoZXJjaGUuLi5cIiAobmdNb2RlbENoYW5nZSk9XCJkb1NlYXJjaCgpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtLWlucHV0LWljb25fX2ljb24gbS1pbnB1dC1pY29uX19pY29uLS1sZWZ0XCI+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmbGF0aWNvbi1zZWFyY2hcIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXIgYWR2YW5jZWQtdGFibGUgbS10YWJsZVwiPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoIGNsYXNzPVwidGgtMVwiICpuZ0lmPVwiaXNSZWZyZXNoICYmICFpc051bWJlclwiIChjbGljayk9XCJkb1JlZnJlc2goKVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1yZWZyZXNoXCIgW3N0eWxlLmZvbnQtc2l6ZS5weF09XCJzelRhYmxlID09PSAnc20nID8gJzEzJyA6ICcxNCdcIj48L2k+XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgICA8dGggKm5nSWY9XCJpc0RldGFpbHNcIj48L3RoPlxuICAgICAgICAgIDx0aCAqbmdJZj1cImlzU2VsZWN0ZWQgJiYgIWlzQ2hlY2tlZFwiPjwvdGg+XG4gICAgICAgICAgPHRoICpuZ0lmPVwiaXNDaGVja2VkICYmICFpc1NlbGVjdGVkXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJfaXNDaGVja2VkUm93c1wiIChuZ01vZGVsQ2hhbmdlKT1cImRvQ2hlY2tSb3dzKClcIj5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDx0aCAqbmdJZj1cImlzTnVtYmVyICYmICFpc1JlZnJlc2hcIj5Ow4LCsDwvdGg+XG4gICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiIChjbGljayk9XCJkb1NvcnRpbmcoY29sdW1uKTtcIj5cbiAgICAgICAgICAgIHt7Y29sdW1uLnRleHR9fVxuICAgICAgICAgICAgPGkgY2xhc3M9XCJsYSBsYS1hcnJvdy11cCBpLS1maWx0ZXJcIiAqbmdJZj1cImNvbHVtbi5pc1NvcnRpbmcgJiYgIWNvbHVtbi5pc1NvcnRVcFwiPjwvaT5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwibGEgbGEtYXJyb3ctZG93biBpLS1maWx0ZXJcIiAqbmdJZj1cImNvbHVtbi5pc1NvcnRpbmcgJiYgY29sdW1uLmlzU29ydFVwXCI+PC9pPlxuICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzPVwidGgtMVwiICpuZ0lmPVwiaXNFZGl0YWJsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duIGJ0bi1ncm91cFwiPlxuICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgW3N0eWxlLmZvbnQtc2l6ZS5weF09XCJzelRhYmxlID09PSAnc20nID8gJzExJyA6ICcxMidcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWNvZ1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIiBbc3R5bGUuZm9udC1zaXplLnB4XT1cInN6VGFibGUgPT09ICdzbScgPyAnMTEnIDogJzEyJ1wiPlxuICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cImlzQ3JlYXRlXCIgKGNsaWNrKT1cImRvQ3JlYXRlKClcIj48YT5Ob3V2ZWF1PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxhPkV4cG9ydGVyPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzcz1cInRoLTFcIiAqbmdJZj1cImlzTW9kaWZ5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24gYnRuLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBbc3R5bGUuZm9udC1zaXplLnB4XT1cInN6VGFibGUgPT09ICdzbScgPyAnMTEnIDogJzEyJ1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtY29nXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiIFtzdHlsZS5mb250LXNpemUucHhdPVwic3pUYWJsZSA9PT0gJ3NtJyA/ICcxMScgOiAnMTInXCI+XG4gICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwiaXNDcmVhdGVcIiAoY2xpY2spPVwiZG9DcmVhdGUoKVwiPjxhPk5vdXZlYXU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGE+RXhwb3J0ZXI8L2E+PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzPVwidGgtMVwiICpuZ0lmPVwiIWlzTW9kaWZ5ICYmICFpc0VkaXRhYmxlICYmICFpc0RlbGV0ZWQgJiYgIWlzQ3JlYXRlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24gYnRuLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBbc3R5bGUuZm9udC1zaXplLnB4XT1cInN6VGFibGUgPT09ICdzbScgPyAnMTEnIDogJzEyJ1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtY29nXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiIFtzdHlsZS5mb250LXNpemUucHhdPVwic3pUYWJsZSA9PT0gJ3NtJyA/ICcxMScgOiAnMTInXCI+XG4gICAgICAgICAgICAgICAgPGxpPjxhPkV4cG9ydGVyPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzcz1cInRoLTFcIiAqbmdJZj1cImlzRGVsZXRlZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duIGJ0bi1ncm91cFwiPlxuICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgW3N0eWxlLmZvbnQtc2l6ZS5weF09XCJzelRhYmxlID09PSAnc20nID8gJzExJyA6ICcxMidcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWNvZ1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIiBbc3R5bGUuZm9udC1zaXplLnB4XT1cInN6VGFibGUgPT09ICdzbScgPyAnMTEnIDogJzEyJ1wiPlxuICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cImlzQ3JlYXRlXCIgKGNsaWNrKT1cImRvQ3JlYXRlKClcIj48YT5Ob3V2ZWF1PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxhPkV4cG9ydGVyPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keSAqbmdGb3I9XCJsZXQgcm93IG9mIGRhdGFTb3VyY2U7IGxldCBpID0gaW5kZXg7XCIgc3R5bGU9XCJib3JkZXI6IG5vbmU7XCI+XG4gICAgICAgIDx0ciBjbGFzcz1cIl9fclwiIChkYmxjbGljayk9XCJkb01vZGlmeShyb3cpXCIgKGNsaWNrKT1cImRvU2VsZWN0KHJvdylcIj5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZC0xXCIgW2NsYXNzLnRkLS1hY3RpdmVdPVwicm93LmNoZWNrZWQgfHwgcm93LnNlbGVjdGVkXCIgKm5nSWY9XCJpc1JlZnJlc2ggJiYgIWlzTnVtYmVyXCI+XG4gICAgICAgICAgICB7eyAoaSArIDEpICsgKF9uZ2JQYWdpbmF0aW9uLnBhZ2VTaXplICogKF9uZ2JQYWdpbmF0aW9uLnBhZ2UgLSAxKSkgfX1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInRkLTFcIiBbY2xhc3MudGQtLWFjdGl2ZV09XCJyb3cuY2hlY2tlZCB8fCByb3cuc2VsZWN0ZWRcIiAqbmdJZj1cImlzRGV0YWlsc1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkdC1idG4tcGx1c1wiIFtzdHlsZS5mb250LXNpemUucHhdPVwic3pUYWJsZSA9PT0gJ3NtJyA/ICcxMScgOiAnMTMnXCIgKGNsaWNrKT1cImRvT3Blbihyb3cpXCIgKm5nSWY9XCIhcm93LmlzT3BlblwiPis8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImR0LWJ0bi1taW5pdXNcIiBbc3R5bGUuZm9udC1zaXplLnB4XT1cInN6VGFibGUgPT09ICdzbScgPyAnMTEnIDogJzEzJ1wiIChjbGljayk9XCJkb0Nsb3NlKHJvdylcIlxuICAgICAgICAgICAgICAqbmdJZj1cInJvdy5pc09wZW5cIj4tPC9zcGFuPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwidGQtMVwiIFtjbGFzcy50ZC0tYWN0aXZlXT1cInJvdy5jaGVja2VkIHx8IHJvdy5zZWxlY3RlZFwiICpuZ0lmPVwiaXNTZWxlY3RlZCAmJiAhaXNDaGVja2VkXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInJhZGlvXCIgW2NoZWNrZWRdPVwicm93LnNlbGVjdGVkID09PSB0cnVlXCI+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZC0xXCIgW2NsYXNzLnRkLS1hY3RpdmVdPVwicm93LmNoZWNrZWQgfHwgcm93LnNlbGVjdGVkXCIgKm5nSWY9XCJpc0NoZWNrZWQgJiYgIWlzU2VsZWN0ZWRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cInJvdy5jaGVja2VkXCIgKG5nTW9kZWxDaGFuZ2UpPVwiZG9DaGVjayhyb3cpXCI+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZC0xXCIgW2NsYXNzLnRkLS1hY3RpdmVdPVwicm93LmNoZWNrZWQgfHwgcm93LnNlbGVjdGVkXCIgKm5nSWY9XCJpc051bWJlciAmJiAhaXNSZWZyZXNoXCI+XG4gICAgICAgICAgICB7eyAoaSArIDEpICsgKF9uZ2JQYWdpbmF0aW9uLnBhZ2VTaXplICogKF9uZ2JQYWdpbmF0aW9uLnBhZ2UgLSAxKSkgfX1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInRkLTJcIiBbY2xhc3MudGQtLWFjdGl2ZV09XCJyb3cuY2hlY2tlZCB8fCByb3cuc2VsZWN0ZWRcIiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWNvbHVtbi5pc0VkaXRhYmxlIHx8ICFyb3cuZWRpdGFibGVcIj57e3Jvd1tjb2x1bW4ubmFtZV19fTwvc3Bhbj5cbiAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cImNvbHVtbi5pc0VkaXRhYmxlICYmIHJvdy5lZGl0YWJsZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIG0taW5wdXQgbS1pbnB1dC0tc3F1YXJlXCJcbiAgICAgICAgICAgICAgc3R5bGU9XCJib3JkZXI6IDFweCBzb2xpZCAjZGRkO1wiIFsobmdNb2RlbCldPVwicm93W2NvbHVtbi5uYW1lXVwiIC8+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZC0xXCIgW2NsYXNzLnRkLS1hY3RpdmVdPVwicm93LmNoZWNrZWQgfHwgcm93LnNlbGVjdGVkXCIgKm5nSWY9XCJpc0VkaXRhYmxlICYmICFpc01vZGlmeVwiPlxuICAgICAgICAgICAgPGltZyAqbmdJZj1cIiFyb3cuZWRpdGFibGUgJiYgaXNFZGl0YWJsZVwiIHNyYz1cIi4uLy4uLy4uL2Fzc2V0cy9hcHAvbWVkaWEvaW1nL2ljb25zL2lmX01vZGlmeV8xMzI2ODUucG5nXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImRvRWRpdGFibGUocm93KVwiIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIC8+XG4gICAgICAgICAgICA8aW1nICpuZ0lmPVwicm93LmVkaXRhYmxlICYmIGlzRWRpdGFibGVcIiBzcmM9XCIuLi8uLi8uLi9hc3NldHMvYXBwL21lZGlhL2ltZy9pY29ucy9pZl9mbG9wcHlfZGlza19zYXZlXzEwMzg2My5wbmdcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiZG9WYWxpZGF0ZShyb3cpXCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDZweDtcIiAvPlxuICAgICAgICAgICAgPGltZyAqbmdJZj1cInJvdy5lZGl0YWJsZSAmJiBpc0VkaXRhYmxlXCIgc3JjPVwiLi4vLi4vLi4vYXNzZXRzL2FwcC9tZWRpYS9pbWcvaWNvbnMvaWZfZi1jcm9zc18yNTZfMjgyNDcxLnBuZ1wiXG4gICAgICAgICAgICAgIChjbGljayk9XCJkb0NhbmNlbChyb3cpXCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgLz5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInRkLTFcIiBbY2xhc3MudGQtLWFjdGl2ZV09XCJyb3cuY2hlY2tlZCB8fCByb3cuc2VsZWN0ZWRcIiAqbmdJZj1cImlzTW9kaWZ5ICYmICFpc0VkaXRhYmxlXCIgKGNsaWNrKT1cImRvTW9kaWZ5KHJvdylcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vYXNzZXRzL2FwcC9tZWRpYS9pbWcvaWNvbnMvaWZfTW9kaWZ5XzEzMjY4NS5wbmdcIiB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiAvPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwidGQtMVwiIFtjbGFzcy50ZC0tYWN0aXZlXT1cInJvdy5jaGVja2VkIHx8IHJvdy5zZWxlY3RlZFwiICpuZ0lmPVwiaXNEZWxldGVkXCIgKGNsaWNrKT1cImRvRGVsZXRlKHJvdylcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vYXNzZXRzL2FwcC9tZWRpYS9pbWcvaWNvbnMvaWZfRXJhc2VfMTMyNzg0LnBuZ1wiIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIC8+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgW2NsYXNzLnRkLS1hY3RpdmVdPVwicm93LmNoZWNrZWQgfHwgcm93LnNlbGVjdGVkXCIgKm5nSWY9XCIhaXNNb2RpZnkgJiYgIWlzRWRpdGFibGUgJiYgIWlzRGVsZXRlZCAmJiAhaXNDcmVhdGVcIj48L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHIgKm5nSWY9XCJyb3cuaXNPcGVuXCI+XG4gICAgICAgICAgPHRkIGNsYXNzPVwic3ViLS1yXCIgW2F0dHIuY29sc3Bhbl09XCJjb2x1bW5zLmxlbmd0aCArIDhcIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSB1aS12aWV3IFtkYXRhXT1cInJvd1wiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgICA8dGJvZHkgKm5nSWY9XCIhY291bnRcIiBzdHlsZT1cImJvcmRlcjogbm9uZVwiPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIGNsYXNzPVwic3ViLS1yLTFcIiBbYXR0ci5jb2xzcGFuXT1cImNvbHVtbnMubGVuZ3RoICsgOFwiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyXCI+QXVjdW5lIGRvbm4mZWFjdXRlO2U8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG0tZm9ybV9fZ3JvdXAgcm93IGFsaWduLWl0ZW1zLWNlbnRlclwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMHB4O1wiICpuZ0lmPVwiIWlzVGFrZUFsbCAmJiBjb3VudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCIgc3R5bGU9XCJ0b3A6IC03cHg7XCI+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIEFmZmljaGFnZSB7eyBfbmdiUGFnaW5hdGlvbi5yb3dTdGFydCgpIH19IMODwqAge3sgX25nYlBhZ2luYXRpb24ucm93RW5kKCkgPiBjb3VudCA/IGNvdW50IDpcbiAgICAgICAgICBfbmdiUGFnaW5hdGlvbi5yb3dFbmQoKSB9fSBkZSB7e2NvdW50fX1cbiAgICAgICAgICBlbnRyw4PCqWVzXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04XCI+XG4gICAgICAgIDxuZ2ItcGFnaW5hdGlvbiBbZWxsaXBzZXNdPVwiX25nYlBhZ2luYXRpb24uZWxsaXBzZXNcIiBbY29sbGVjdGlvblNpemVdPVwiY291bnRcIiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCJcbiAgICAgICAgICBbKHBhZ2UpXT1cIl9uZ2JQYWdpbmF0aW9uLnBhZ2VcIiBbbWF4U2l6ZV09XCJfbmdiUGFnaW5hdGlvbi5tYXhTaXplXCIgW3JvdGF0ZV09XCJfbmdiUGFnaW5hdGlvbi5yb3RhdGVcIlxuICAgICAgICAgIFtib3VuZGFyeUxpbmtzXT1cIl9uZ2JQYWdpbmF0aW9uLmJvdW5kYXJ5TGlua3NcIiBbcGFnZVNpemVdPVwiX25nYlBhZ2luYXRpb24ucGFnZVNpemVcIiAocGFnZUNoYW5nZSk9XCJfbmdiUGFnaW5hdGlvbi5wYWdlQ2hhbmdlKF9uZ2JQYWdpbmF0aW9uLnBhZ2UpXCI+PC9uZ2ItcGFnaW5hdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2AudGFibGUtcmVzcG9uc2l2ZXtvdmVyZmxvdzpoaWRkZW59LnRhYmxle2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMxMTE7Ym9yZGVyLXNwYWNpbmc6MDtvdmVyZmxvdzppbmhlcml0O292ZXJmbG93LXg6dmlzaWJsZTtvdmVyZmxvdy15OnZpc2libGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0udGFibGUtc3RyaXBlZD50Ym9keTpudGgtb2YtdHlwZSgybik+dHIuX19ye2JhY2tncm91bmQtY29sb3I6I2ZmZn0udGFibGUtc3RyaXBlZD50Ym9keTpudGgtb2YtdHlwZSgybisxKT50ci5fX3J7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5fS50YWJsZS1zdHJpcGVkPnRib2R5Omxhc3QtY2hpbGQ+dHIuX19yOmhvdmVyPnRke2JvcmRlci1ib3R0b206bm9uZX0udGFibGUtc3RyaXBlZD50Ym9keTpsYXN0LWNoaWxkPnRyLl9fcj50ZC50ZC0tYWN0aXZle2JvcmRlci1ib3R0b206bm9uZSFpbXBvcnRhbnR9LnRhYmxlLXN0cmlwZWQ+dGJvZHk+dHIuX19yOmhvdmVyPnRke2JhY2tncm91bmQtY29sb3I6I2RhZjFmZjtib3JkZXItdG9wOjFweCBzb2xpZCAjNmJiZWYyO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICM2YmJlZjJ9LnRhYmxlIHRoLHRke3BhZGRpbmc6NnB4IDEwcHh9LnRhYmxlIHRke21heC13aWR0aDoyMDBweDt3aGl0ZS1zcGFjZTpub3dyYXA7LW1zLXRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7dGV4dC1vdmVyZmxvdzplbGxpcHNpcztib3JkZXItdG9wOjFweCBzb2xpZCAjZGRkO2ZvbnQtd2VpZ2h0OjQwMDtjb2xvcjojMzMzO2N1cnNvcjpwb2ludGVyO292ZXJmbG93OnZpc2libGV9LnRhYmxlIHRoe2JhY2tncm91bmQtY29sb3I6I2ZmZjtwb3NpdGlvbjpyZWxhdGl2ZTtmb250LXdlaWdodDo2MDA7Ym9yZGVyLXRvcDpub25lO2JvcmRlci1yaWdodDpub25lO2JvcmRlci1sZWZ0Om5vbmU7dmVydGljYWwtYWxpZ246bWlkZGxlO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMxMTE7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyIHJpZ2h0O2N1cnNvcjpwb2ludGVyO292ZXJmbG93OnZpc2libGV9LmR0LWJ0bi1wbHVze3RvcDo5cHg7bGVmdDo0cHg7aGVpZ2h0OjEycHg7d2lkdGg6MTJweDtkaXNwbGF5OmJsb2NrO2NvbG9yOiNmZmY7Ym9yZGVyOjJweCBzb2xpZCAjZmZmO2JvcmRlci1yYWRpdXM6MTRweDtib3gtc2hhZG93OjAgMCAzcHggIzQ0NDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O3RleHQtYWxpZ246Y2VudGVyO3RleHQtaW5kZW50OjAhaW1wb3J0YW50O2xpbmUtaGVpZ2h0OjEycHg7YmFja2dyb3VuZC1jb2xvcjojMzFiMTMxfS5kdC1idG4tbWluaXVze3RvcDo5cHg7bGVmdDo0cHg7aGVpZ2h0OjEycHg7d2lkdGg6MTJweDtkaXNwbGF5OmJsb2NrO2NvbG9yOiNmZmY7Ym9yZGVyOjJweCBzb2xpZCAjZmZmO2JvcmRlci1yYWRpdXM6MTRweDtib3gtc2hhZG93OjAgMCAzcHggIzQ0NDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O3RleHQtYWxpZ246Y2VudGVyO3RleHQtaW5kZW50OjAhaW1wb3J0YW50O2xpbmUtaGVpZ2h0OjEycHg7YmFja2dyb3VuZC1jb2xvcjojZDMzMzMzfS50ZC0xLC50aC0xe3dpZHRoOjVweDtjdXJzb3I6cG9pbnRlcjt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7dGV4dC1hbGlnbjpjZW50ZXJ9LnRkLTJ7dmVydGljYWwtYWxpZ246bWlkZGxlfS5oZXJvLWNhbGxvdXR7cGFkZGluZzoxMHB4O2JveC1zaGFkb3c6M3B4IDNweCAyMHB4IHJnYmEoMCwwLDAsLjMpO2JvcmRlci1yYWRpdXM6M3B4fS50ZC0tYWN0aXZle2JhY2tncm91bmQtY29sb3I6I2RhZjFmZjtib3JkZXItdG9wOjFweCBzb2xpZCAjNmJiZWYyIWltcG9ydGFudDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjNmJiZWYyIWltcG9ydGFudH0uaS0tZmlsdGVye2ZvbnQtc2l6ZToxM3B4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3JpZ2h0Oi0xMHB4O2xpbmUtaGVpZ2h0OjA7dmVydGljYWwtYWxpZ246bWlkZGxlfS5zdWItLXJ7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5IWltcG9ydGFudDtwYWRkaW5nOjEwcHh9LnN1Yi0tcjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOm5vbmUhaW1wb3J0YW50O2JvcmRlci10b3A6MXB4IHNvbGlkICNkZGQhaW1wb3J0YW50O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMxMTEhaW1wb3J0YW50O3BhZGRpbmc6MTBweH0uc3ViLS1yLTF7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5IWltcG9ydGFudDtwYWRkaW5nOjZweCAxMHB4fS5zdWItLXItMTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOm5vbmUhaW1wb3J0YW50O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMxMTEhaW1wb3J0YW50O3BhZGRpbmc6NnB4IDEwcHh9LmJ0bntib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MXB4IHNvbGlkICM5Nzk3OTc7aGVpZ2h0OjIxcHg7Y29sb3I6IzAwMDtsaW5lLWhlaWdodDoxOXB4O3doaXRlLXNwYWNlOm5vd3JhcDtwYWRkaW5nOjNweCA1cHggMThweDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLWJvdHRvbTowO2ZvbnQtd2VpZ2h0OjQwMH0uY2FyZXR7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MDtoZWlnaHQ6MDttYXJnaW4tbGVmdDoycHg7dmVydGljYWwtYWxpZ246bWlkZGxlO2JvcmRlci10b3A6NHB4IHNvbGlkO2JvcmRlci1yaWdodDo0cHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWxlZnQ6NHB4IHNvbGlkIHRyYW5zcGFyZW50fWEuZHJvcGRvd24tdG9nZ2xle2NvbG9yOiM2MTYxNjEhaW1wb3J0YW50fXVsLmRyb3Bkb3duLW1lbnV7cmlnaHQ6MCFpbXBvcnRhbnQ7dG9wOjEwMCUhaW1wb3J0YW50O2Zsb2F0Om5vbmU7Y29sb3I6IzAwMDtsaW5lLWhlaWdodDozcHg7Ym9yZGVyLXJhZGl1czo1cHghaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OjUwMDtwYWRkaW5nOjRweDstd2Via2l0LXRyYW5zZm9ybTpub25lIWltcG9ydGFudDt0cmFuc2Zvcm06bm9uZSFpbXBvcnRhbnR9LmRyb3Bkb3duLW1lbnVbeC1wbGFjZW1lbnRePWJvdHRvbV0sLmRyb3Bkb3duLW1lbnVbeC1wbGFjZW1lbnRePWxlZnRdLC5kcm9wZG93bi1tZW51W3gtcGxhY2VtZW50Xj1yaWdodF0sLmRyb3Bkb3duLW1lbnVbeC1wbGFjZW1lbnRePXRvcF17Ym90dG9tOmF1dG87bGVmdDphdXRvIWltcG9ydGFudH11bC5kcm9wZG93bi1tZW51IGE6aG92ZXJ7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOiNmZmY7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoLTE3OWRlZywjNjI4OGY4IDAsIzIyNjFmNiAxMDAlKTtib3JkZXItdG9wOjFweCBzb2xpZCAjNTg3ZmVlO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMwZDUyZWJ9LmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXJ7ZGlzcGxheTpub25lfS5idG4tZ3JvdXB7d2hpdGUtc3BhY2U6bm93cmFwfS5idG4tZ3JvdXAgLmJ0bntmbG9hdDpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5fX2hlYWRlcntib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGRkO3BhZGRpbmctYm90dG9tOjhweDttYXJnaW4tdG9wOi0xMHB4fWBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbn0pXG5leHBvcnQgY2xhc3MgQWR2YW5jZWRUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgX25nYlBhZ2luYXRpb246IGFueTtcbiAgX2lzQ2hlY2tlZFJvd3M6IGFueTtcbiAgX3NlYXJjaFBhcmFtOiBzdHJpbmc7XG5cbiAgQElucHV0KCdpbmRleCcpIGluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnc2l6ZScpIHNpemU6IG51bWJlcjtcbiAgQElucHV0KCdjb3VudCcpIGNvdW50OiBudW1iZXI7XG4gIEBJbnB1dCgnc3otdGFibGUnKSBzelRhYmxlOiBzdHJpbmc7XG4gIEBJbnB1dCgnc3otc2VhcmNoJykgc3pTZWFyY2g6IHN0cmluZztcbiAgQElucHV0KCdpcy1oZWFkZXInKSBpc0hlYWRlcjogYm9vbGVhbjtcbiAgQElucHV0KCdpcy1jcmVhdGUnKSBpc0NyZWF0ZTogYm9vbGVhbjtcbiAgQElucHV0KCdpcy1yZWZyZXNoJykgaXNSZWZyZXNoOiBib29sZWFuO1xuICBASW5wdXQoJ2lzLW51bWJlcicpIGlzTnVtYmVyOiBib29sZWFuO1xuICBASW5wdXQoJ2lzLWVkaXRhYmxlJykgaXNFZGl0YWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCdpcy1tb2RpZnknKSBpc01vZGlmeTogYm9vbGVhbjtcbiAgQElucHV0KCdpcy10YWtlLWFsbCcpIGlzVGFrZUFsbDogYm9vbGVhbjtcbiAgQElucHV0KCdtYXgtc2l6ZScpIG1heFNpemU6IG51bWJlcjtcbiAgQElucHV0KCdpcy1kZWxldGVkJykgaXNEZWxldGVkOiBib29sZWFuO1xuICBASW5wdXQoJ2lzLXNlYXJjaCcpIGlzU2VhcmNoOiBib29sZWFuO1xuICBASW5wdXQoJ2lzLWRldGFpbHMnKSBpc0RldGFpbHM6IGJvb2xlYW47XG4gIEBJbnB1dCgnaXMtY2hlY2tlZCcpIGlzQ2hlY2tlZDogYm9vbGVhbjtcbiAgQElucHV0KCdpcy1zZWxlY3RlZCcpIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgnY29sdW1ucycpIGNvbHVtbnM6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KCdkYXRhLXNvdXJjZScpIGRhdGFTb3VyY2U6IGFueSA9IFtdO1xuICBASW5wdXQoJ2NoZWNrZWQtcm93cycpIGNoZWNrZWRSb3dzOiBhbnkgPSBbXTtcbiAgQElucHV0KCd2aWV3LWNoaWxkJykgdmlld0NoaWxkOiBhbnk7XG5cbiAgQE91dHB1dCgpIGluZGV4Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBzaXplQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBjb3VudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgY2hlY2tlZFJvd3NDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KCkgb25DcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uVmFsaWRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uTW9kaWZ5ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbkRlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25SZWZyZXNoID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25TZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIG9uUGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHsgfVxuXG4gIEBWaWV3Q2hpbGQoVUlWaWV3RGlyZWN0aXZlKSBzZXQgdmlld0NvbnRhaW5lclJlZih1aVZpZXc6IFVJVmlld0RpcmVjdGl2ZSkge1xuICAgIGlmICh1aVZpZXcpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmID0gdWlWaWV3LnZpZXdDb250YWluZXJSZWY7XG4gICAgICAgIGlmICh0aGlzLl92aWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IF9jb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy52aWV3Q2hpbGQpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KF9jb21wb25lbnRGYWN0b3J5KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuZGF0YSA9IHVpVmlldy5kYXRhO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fbmdiUGFnaW5hdGlvbiA9IHtcbiAgICAgIHBhZ2U6IDEsXG4gICAgICBwYWdlU2l6ZTogdGhpcy5zaXplLFxuICAgICAgbWF4U2l6ZTogdGhpcy5tYXhTaXplIHx8IDMsXG4gICAgICBlbGxpcHNlczogdHJ1ZSxcbiAgICAgIHJvdGF0ZTogdHJ1ZSxcbiAgICAgIGJvdW5kYXJ5TGlua3M6IGZhbHNlLFxuICAgICAgcGFnZUNoYW5nZTogKHBhZ2UpID0+IHtcbiAgICAgICAgdGhpcy5pbmRleCA9IChwYWdlICogdGhpcy5fbmdiUGFnaW5hdGlvbi5wYWdlU2l6ZSkgLSB0aGlzLl9uZ2JQYWdpbmF0aW9uLnBhZ2VTaXplO1xuICAgICAgICB0aGlzLmluZGV4Q2hhbmdlLmVtaXQodGhpcy5pbmRleCk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuX25nYlBhZ2luYXRpb24ucGFnZVNpemU7XG4gICAgICAgIHRoaXMuc2l6ZUNoYW5nZS5lbWl0KHRoaXMuc2l6ZSk7XG4gICAgICAgIHRoaXMub25QYWdlQ2hhbmdlLmVtaXQoKTtcbiAgICAgIH0sXG4gICAgICByb3dTdGFydDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gMSArICh0aGlzLl9uZ2JQYWdpbmF0aW9uLnBhZ2VTaXplICogKHRoaXMuX25nYlBhZ2luYXRpb24ucGFnZSAtIDEpKTtcbiAgICAgIH0sXG4gICAgICByb3dFbmQ6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIE51bWJlcih0aGlzLl9uZ2JQYWdpbmF0aW9uLnBhZ2VTaXplKSArIE51bWJlcihOdW1iZXIodGhpcy5fbmdiUGFnaW5hdGlvbi5wYWdlU2l6ZSkgKiAoTnVtYmVyKHRoaXMuX25nYlBhZ2luYXRpb24ucGFnZSkgLSAxKSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZikge1xuICAgICAgdGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIGRvU2VhcmNoKCkge1xuICAgIHRoaXMub25TZWFyY2guZW1pdCh0aGlzLl9zZWFyY2hQYXJhbSk7XG4gIH1cblxuICBkb09wZW4ocm93T3BlbmVkOiBhbnkpIHtcbiAgICBmb3IgKGxldCByb3cgb2YgdGhpcy5kYXRhU291cmNlKSB7XG4gICAgICByb3cuaXNPcGVuID0gZmFsc2U7XG4gICAgfVxuICAgIHJvd09wZW5lZC5pc09wZW4gPSB0cnVlO1xuICB9XG5cbiAgZG9DbG9zZShyb3c6IGFueSkge1xuICAgIHJvdy5pc09wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIGRvU29ydGluZyhjb2x1bW46IGFueSkge1xuICAgIGlmIChjb2x1bW4uaXNTb3J0aW5nKSB7XG4gICAgICBpZiAoY29sdW1uLmlzU29ydFVwKSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IEVudW1lcmFibGUuRnJvbSh0aGlzLmRhdGFTb3VyY2UpXG4gICAgICAgICAgLk9yZGVyQnlEZXNjZW5kaW5nKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4W2NvbHVtbi5uYW1lXTsgfSlcbiAgICAgICAgICAuU2VsZWN0KGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9KVxuICAgICAgICAgIC5Ub0FycmF5KCk7XG4gICAgICAgIGNvbHVtbi5pc1NvcnRVcCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gRW51bWVyYWJsZS5Gcm9tKHRoaXMuZGF0YVNvdXJjZSlcbiAgICAgICAgICAuT3JkZXJCeShmdW5jdGlvbiAoeCkgeyByZXR1cm4geFtjb2x1bW4ubmFtZV07IH0pXG4gICAgICAgICAgLlNlbGVjdChmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSlcbiAgICAgICAgICAuVG9BcnJheSgpO1xuICAgICAgICBjb2x1bW4uaXNTb3J0VXAgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRvVW5DaGVja1Jvd3MoKSB7XG4gICAgZm9yIChsZXQgcm93IG9mIHRoaXMuZGF0YVNvdXJjZSkge1xuICAgICAgcm93LmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5jaGVja2VkUm93cy5sZW5ndGggPSAwO1xuICAgIHRoaXMuY2hlY2tlZFJvd3NDaGFuZ2UuZW1pdCh0aGlzLmNoZWNrZWRSb3dzKTtcbiAgfVxuXG4gIGRvQ2hlY2tSb3dzKCkge1xuICAgIGlmICh0aGlzLl9pc0NoZWNrZWRSb3dzKSB7XG4gICAgICBmb3IgKGxldCByb3cgb2YgdGhpcy5kYXRhU291cmNlKSB7XG4gICAgICAgIHJvdy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jaGVja2VkUm93cy5wdXNoKHJvdyk7XG4gICAgICB9XG4gICAgICB0aGlzLmNoZWNrZWRSb3dzQ2hhbmdlLmVtaXQodGhpcy5jaGVja2VkUm93cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9VbkNoZWNrUm93cygpO1xuICAgIH1cbiAgfVxuXG4gIGRvQ2hlY2socm93OiBhbnkpIHtcbiAgICBpZiAocm93LmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuY2hlY2tlZFJvd3MucHVzaChyb3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpID0gdGhpcy5jaGVja2VkUm93cy5pbmRleE9mKHJvdyk7XG4gICAgICB0aGlzLmNoZWNrZWRSb3dzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgdGhpcy5jaGVja2VkUm93c0NoYW5nZS5lbWl0KHRoaXMuY2hlY2tlZFJvd3MpO1xuICB9XG5cbiAgZG9SZWZyZXNoKCkge1xuICAgIHRoaXMuX3NlYXJjaFBhcmFtID0gbnVsbDtcbiAgICB0aGlzLl9pc0NoZWNrZWRSb3dzID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuY2hlY2tlZFJvd3MpIHtcbiAgICAgIHRoaXMuY2hlY2tlZFJvd3MubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMuY2hlY2tlZFJvd3NDaGFuZ2UuZW1pdCh0aGlzLmNoZWNrZWRSb3dzKTtcbiAgICB9XG4gICAgdGhpcy5vblJlZnJlc2guZW1pdCgpO1xuICB9XG5cbiAgZG9TZWxlY3Qocm93U2VsZWN0ZWQ6IGFueSkge1xuICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQpIHtcbiAgICAgIGZvciAobGV0IHJvdyBvZiB0aGlzLmRhdGFTb3VyY2UpIHtcbiAgICAgICAgcm93LnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICByb3dTZWxlY3RlZC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB0aGlzLm9uU2VsZWN0LmVtaXQocm93U2VsZWN0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGRvQ3JlYXRlKCkge1xuICAgIHRoaXMub25DcmVhdGUuZW1pdCgpO1xuICB9XG5cbiAgZG9FZGl0YWJsZShyb3c6IGFueSkge1xuICAgIHJvdy5lZGl0YWJsZSA9IHRydWU7XG4gIH1cblxuICBkb1ZhbGlkYXRlKHJvdzogYW55KSB7XG4gICAgdGhpcy5vblZhbGlkYXRlLmVtaXQocm93KTtcbiAgICByb3cuZWRpdGFibGUgPSBmYWxzZTtcbiAgfVxuXG4gIGRvQ2FuY2VsKHJvdzogYW55KSB7XG4gICAgcm93LmVkaXRhYmxlID0gZmFsc2U7XG4gIH1cblxuICBkb01vZGlmeShyb3c6IGFueSkge1xuICAgIGlmICh0aGlzLmlzTW9kaWZ5KSB7XG4gICAgICB0aGlzLm9uTW9kaWZ5LmVtaXQocm93KTtcbiAgICB9XG4gIH1cblxuICBkb0RlbGV0ZShyb3c6IGFueSkge1xuICAgIHRoaXMub25EZWxldGUuZW1pdChyb3cpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nTW9kZWxdW3VwcGVyLWNhc2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBVcHBlckNhc2VEaXJlY3RpdmUge1xuXG4gIEBPdXRwdXQoKSBuZ01vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgbmdNb2RlbDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKSBvbk1vZGVsQ2hhbmdlKCRldmVudCkge1xuICAgIHRoaXMubmdNb2RlbCA9ICRldmVudC50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICB0aGlzLm5nTW9kZWxDaGFuZ2UuZW1pdCh0aGlzLm5nTW9kZWwpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICcuL190cmFuc2xhdGVzL3RyYW5zbGF0ZS5waXBlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4vX3RyYW5zbGF0ZXMvdHJhbnNsYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQcm92aWRlcnMgfSBmcm9tICcuL190cmFuc2xhdGVzL3RyYW5zbGF0ZXMnO1xyXG5pbXBvcnQgeyBBZHZhbmNlZFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9fY29tcG9uZW50cy9hZHZhbmNlZC10YWJsZS9hZHZhbmNlZC10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVSVZpZXdEaXJlY3RpdmUgfSBmcm9tICcuL19kaXJlY3RpdmVzL3VpLXZpZXcuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVXBwZXJDYXNlRGlyZWN0aXZlIH0gZnJvbSAnLi9fZGlyZWN0aXZlcy91cHBlci1jYXNlLmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgVHJhbnNsYXRlUGlwZSxcclxuICAgICAgICBBZHZhbmNlZFRhYmxlQ29tcG9uZW50LFxyXG4gICAgICAgIFVJVmlld0RpcmVjdGl2ZSxcclxuICAgICAgICBVcHBlckNhc2VEaXJlY3RpdmUsXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIFRyYW5zbGF0ZVBpcGUsXHJcbiAgICAgICAgQWR2YW5jZWRUYWJsZUNvbXBvbmVudCxcclxuICAgICAgICBVSVZpZXdEaXJlY3RpdmUsXHJcbiAgICAgICAgVXBwZXJDYXNlRGlyZWN0aXZlLFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICAgIE5nYk1vZHVsZS5mb3JSb290KCksXHJcbiAgICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVscGVyTW9kdWxlIHtcclxuICAgIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5nTW9kdWxlOiBIZWxwZXJNb2R1bGUsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgICAgICAgICAgVHJhbnNsYXRlUHJvdmlkZXJzLFxyXG4gICAgICAgICAgICAgICAgVHJhbnNsYXRlU2VydmljZVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgUmVxdWVzdEJhc2Uge1xuXG4gICAgcHVibGljIHNlYXJjaFBhcmFtOiBhbnk7XG4gICAgcHVibGljIHVzZXI6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgaW5kZXg6IG51bWJlcixcbiAgICAgICAgcHVibGljIHNpemU6IG51bWJlcixcbiAgICAgICAgcHVibGljIHRha2VBbGw6IGJvb2xlYW4sXG4gICAgICAgIHB1YmxpYyBpc0FuZDogYm9vbGVhbixcbiAgICAgICAgcHVibGljIG9yZGVyQnk6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGxhbmc6IHN0cmluZykge1xuXG4gICAgfVxuXG59XG4iLCJleHBvcnQgY29uc3QgR2xvYmFsRW51bSA9IHtcblxuICAgIC8vIEJBQ0tFTkQgUEFSQU1FVEVSUyBTRUNUSU9OXG4gICAgX0lOREVYOiAwLFxuICAgIF9TSVpFOiA1LFxuICAgIF9UQUtFX0FMTDogZmFsc2UsXG4gICAgX0lTX0FORDogdHJ1ZSxcbiAgICBfT1JERVJfQllfREVTQzogJ2Rlc2MnLFxuICAgIF9PUkRFUl9CWV9BU0M6ICdhc2MnLFxuICAgIF9MQU5HOiAnZnInLFxuXG4gICAgLy8gQURWQU5DRUQgVEFCTEVcbiAgICBfU006ICdzbScsXG4gICAgX01EOiAnbWQnLFxuICAgIF9MRzogJ2xnJyxcbiAgICBfU1pfNjogJ3N6LTYnLFxuICAgIF9TWl81OiAnc3otNScsXG5cbiAgICAvLyBIVFRQIFBBUkFNRVRFUlMgU0VDVElPTlxuICAgIF9TSE9XX0xPQURFUjogJ2ZhbHNlJyxcbiAgICBfU0hPV19FUlJPUl9NRVNTQUdFOiAnZmFsc2UnLFxuICAgIF9TSE9XX0lORk9fTUVTU0FHRTogJ2ZhbHNlJyxcblxuICAgIC8vIFRSQU5TTEFURSBTRUNUSU9OXG4gICAgX0xBTkdVQUdFX0ZSOiAnZnInLFxuICAgIF9MQU5HVUFHRV9FTjogJ2VuJyxcblxuICAgIC8vIENPREUgRVJST1JcbiAgICBfSU1QTElDSVRfRVJST1I6ICc4MDEnLFxuXG4gICAgLy8gT1BFUkFUT1IgRU5VTVxuICAgIF9FUVVBTDogJz0nLFxuICAgIF9OT1RfRVFVQUxfMTogJzw+JyxcbiAgICBfTk9UX0VRVUFMXzI6ICchPScsXG4gICAgX0xFU1NfT1JfRVFVQUw6ICc8PScsXG4gICAgX0xFU1M6ICc8JyxcbiAgICBfTU9SRV9PUl9FUVVBTDogJz49JyxcbiAgICBfTU9SRTogJz4nLFxuICAgIF9CRVRXRUVOOiAnW10nLFxuICAgIF9CRVRXRUVOX09VVDogJ11bJyxcbiAgICBfQkVUV0VFTl9MRUZUX09VVDogJ11dJyxcbiAgICBfQkVUV0VFTl9SSUdIVF9PVVQ6ICdbWycsXG4gICAgX0NPTlRBSU5TOiAnJSUnLFxuICAgIF9TVEFSVF9XVElIOiAnXyUnLFxuICAgIF9FTkRfV1RJSDogJyVfJyxcblxuICAgIC8vIFNUQVRFXG4gICAgX0RJU1BPTklCTEU6IDEsXG4gICAgX09DQ1VQRTogMixcbiAgICBfUkVTRVJWRTogMyxcbiAgICBfTk9OX1VUSUxJU0FCTEU6IDQsXG4gICAgX0VOX0FUVEVOVEU6IDUsXG4gICAgX0FUVFJJQlVFRV9OT05fQUNUSUY6IDYsXG4gICAgX0VWSVRFUl9TQVRVUkFUSU9OOiA3LFxuICAgIF9SRVNJTElFUjogOCxcbiAgICBfTUFVVkFJUzogOSxcbiAgICBfVlQ6IDEwLFxuICAgIF9FVEVJTlQ6IDExLFxuICAgIF9BTExVTUU6IDEyLFxuICAgIF9BTExVTUVfU1JPOiAxMyxcbiAgICBfQUxMVU1FX0NMSUVOVDogMTQsXG4gICAgX0FMTFVNRV9PTFQ6IDE1LFxuICAgIF9OT1RfVVNFRDogMTYsXG4gICAgX09GRl9VU0VEOiAxNyxcbiAgICBfQUxMVU1FX1VTRUQ6IDE4XG5cbn07XG5cbiIsImltcG9ydCB7IFJlcXVlc3RCYXNlIH0gZnJvbSAnLi9yZXF1ZXN0LWJhc2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVyTW9kdWxlIH0gZnJvbSAnLi4vaGVscGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBHbG9iYWxFbnVtIH0gZnJvbSAnLi4vX3V0aWxpdGllcy9nbG9iYWwtZW51bSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBIZWxwZXJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgUmVxdWVzdDxUPiBleHRlbmRzIFJlcXVlc3RCYXNlIHtcblxuICAgIHB1YmxpYyBkYXRhOiBUO1xuICAgIHB1YmxpYyBkYXRhczogQXJyYXk8VD47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoR2xvYmFsRW51bS5fSU5ERVgsIEdsb2JhbEVudW0uX1NJWkUsIEdsb2JhbEVudW0uX1RBS0VfQUxMLCBHbG9iYWxFbnVtLl9JU19BTkQsIEdsb2JhbEVudW0uX09SREVSX0JZX0RFU0MsIEdsb2JhbEVudW0uX0xBTkcpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFN0YXR1cyB9IGZyb20gJy4vc3RhdHVzJztcblxuZXhwb3J0IGNsYXNzIFJlc3BvbnNlQmFzZSB7XG5cbiAgICBwdWJsaWMgaGFzRXJyb3I6IHN0cmluZztcbiAgICBwdWJsaWMgaGFzQ3VzdG9tRXJyb3I6IHN0cmluZztcbiAgICBwdWJsaWMgY291bnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGF0dXM6IFN0YXR1cykgeyB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0YXR1cyB7XG5cbiAgICBwdWJsaWMgY29kZTogc3RyaW5nO1xuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XG5cbn1cbiIsImltcG9ydCB7IFJlc3BvbnNlQmFzZSB9IGZyb20gJy4vcmVzcG9uc2UtYmFzZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJNb2R1bGUgfSBmcm9tICcuLi9oZWxwZXIubW9kdWxlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IEhlbHBlck1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBSZXNwb25zZTxUPiBleHRlbmRzIFJlc3BvbnNlQmFzZSB7XG5cbiAgICBwdWJsaWMgaXRlbXM6IEFycmF5PFQ+O1xuXG59XG4iLCJleHBvcnQgY2xhc3MgU2VhcmNoUGFyYW08VD4ge1xuXG4gICAgcHVibGljIG9wZXJhdG9yOiBzdHJpbmc7XG4gICAgcHVibGljIHN0YXJ0OiBUO1xuICAgIHB1YmxpYyBlbmQ6IFQ7XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlbHBlck1vZHVsZSB9IGZyb20gJy4uL2hlbHBlci5tb2R1bGUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJy4uL19jb250cmFjdHMvcmVxdWVzdCc7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJy4uL19jb250cmFjdHMvcmVzcG9uc2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IEhlbHBlck1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBIdHRwUmVxdWVzdFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIGdldDxUPih1cmw6IHN0cmluZywgaHR0cE9wdGlvbnM6IHt9KTogT2JzZXJ2YWJsZTxSZXNwb25zZTxUPj4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxSZXNwb25zZTxUPj4odXJsLCBodHRwT3B0aW9ucyk7XG4gIH1cblxuICBwb3N0PFQ+KHVybDogc3RyaW5nLCByZXF1ZXN0OiBSZXF1ZXN0PFQ+LCBodHRwT3B0aW9uczoge30pOiBPYnNlcnZhYmxlPFJlc3BvbnNlPFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdDxSZXNwb25zZTxUPj4odXJsLCByZXF1ZXN0LCBodHRwT3B0aW9ucyk7XG4gIH1cblxuICBwdXQ8VD4odXJsOiBzdHJpbmcsIHJlcXVlc3Q6IFJlcXVlc3Q8VD4sIGh0dHBPcHRpb25zOiB7fSk6IE9ic2VydmFibGU8UmVzcG9uc2U8VD4+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wdXQ8UmVzcG9uc2U8VD4+KHVybCwgcmVxdWVzdCwgaHR0cE9wdGlvbnMpO1xuICB9XG5cbiAgZGVsZXRlPFQ+KHVybDogc3RyaW5nLCBodHRwT3B0aW9uczoge30pOiBPYnNlcnZhYmxlPFJlc3BvbnNlPFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlPFJlc3BvbnNlPFQ+Pih1cmwsIGh0dHBPcHRpb25zKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlbHBlck1vZHVsZSB9IGZyb20gJy4uL2hlbHBlci5tb2R1bGUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogSGVscGVyTW9kdWxlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVdGlsaXR5U2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBpc051bGxPYmplY3QodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBCb29sZWFuIHx8IHZhbHVlIGluc3RhbmNlb2YgTnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBTdHJpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuICF2YWx1ZSB8fCAwID09PSB2YWx1ZS5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuICF2YWx1ZSB8fCB2YWx1ZSA9PT0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRVcmwob3JpZ2luOiBzdHJpbmcsIHNlcnZpY2U6IHN0cmluZywgbWV0aG9kOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBvcmlnaW4gKyAnLycgKyBzZXJ2aWNlICsgJy8nICsgbWV0aG9kO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlcnZpY2UodXJsOiBzdHJpbmcsIG9yaWdpbjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICB1cmwgPSB1cmwuc2xpY2Uob3JpZ2luLmxlbmd0aCArIDEsIHVybC5sZW5ndGgpO1xyXG4gICAgICAgIGxldCBzZXJ2aWNlID0gdXJsLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgcmV0dXJuIHNlcnZpY2Uuc2hpZnQoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gJ25neC10b2FzdHInO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4uL190cmFuc2xhdGVzL3RyYW5zbGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlck1vZHVsZSB9IGZyb20gJy4uL2hlbHBlci5tb2R1bGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IEhlbHBlck1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZnlTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90b2FzdHJTZXJ2aWNlOiBUb2FzdHJTZXJ2aWNlLCBwcml2YXRlIF90cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7IH1cblxuICBpbmZvKG1zZzogc3RyaW5nLCBvcHRzPzoge30pIHtcbiAgICB0aGlzLl90b2FzdHJTZXJ2aWNlLmluZm8obXNnLCB0aGlzLl90cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ05PVElGWV9JTkZPUk1BVElPTl9USVRMRScpLCBvcHRzKTtcbiAgfVxuXG4gIHN1Y2Nlc3MobXNnOiBzdHJpbmcsIG9wdHM/OiB7fSkge1xuICAgIHRoaXMuX3RvYXN0clNlcnZpY2Uuc3VjY2Vzcyhtc2csIHRoaXMuX3RyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCgnTk9USUZZX1NVQ0NFU1NfVElUTEUnKSwgb3B0cyk7XG4gIH1cblxuICB3YXJuaW5nKG1zZzogc3RyaW5nLCBvcHRzPzoge30pIHtcbiAgICB0aGlzLl90b2FzdHJTZXJ2aWNlLndhcm5pbmcobXNnLCB0aGlzLl90cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ05PVElGWV9XQVJOSU5HX1RJVExFJyksIG9wdHMpO1xuICB9XG5cbiAgZXJyb3IobXNnOiBzdHJpbmcsIG9wdHM/OiB7fSkge1xuICAgIHRoaXMuX3RvYXN0clNlcnZpY2UuZXJyb3IobXNnLCB0aGlzLl90cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ05PVElGWV9FUlJPUl9USVRMRScpLCBvcHRzKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbCwgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBIZWxwZXJNb2R1bGUgfSBmcm9tICcuLi9oZWxwZXIubW9kdWxlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBIZWxwZXJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZ2JNb2RhbDogTmdiTW9kYWwpIHsgfVxuXG4gIG9wZW4oY29udGVudDogYW55LCBzaXplOiBhbnksIGNlbnRlcmVkOiBib29sZWFuLCBiYWNrZHJvcDogYW55LCBrZXlib2FyZDogYm9vbGVhbiwgZGF0YT86IGFueSwgYW5pbWF0aW9uPzogYW55KTogTmdiTW9kYWxSZWYge1xuICAgIGNvbnN0IF9tb2RhbCA9IHRoaXMuX25nYk1vZGFsLm9wZW4oY29udGVudCxcbiAgICAgIHtcbiAgICAgICAgc2l6ZTogc2l6ZSxcbiAgICAgICAgYmFja2Ryb3A6IGJhY2tkcm9wLFxuICAgICAgICBjZW50ZXJlZDogY2VudGVyZWQsXG4gICAgICAgIGtleWJvYXJkOiBrZXlib2FyZFxuICAgICAgfVxuICAgICk7XG5cbiAgICBjb25zdCBfaW5zdGFuY2UgPSAoX21vZGFsIGFzIGFueSkuX3dpbmRvd0NtcHRSZWYuaW5zdGFuY2U7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBfaW5zdGFuY2Uud2luZG93Q2xhc3MgPSBhbmltYXRpb247XG4gICAgfSwgMCk7XG5cbiAgICBjb25zdCBfZnggPSAoX21vZGFsIGFzIGFueSkuX3JlbW92ZU1vZGFsRWxlbWVudHMuYmluZChfbW9kYWwpO1xuICAgIChfbW9kYWwgYXMgYW55KS5fcmVtb3ZlTW9kYWxFbGVtZW50cyA9ICgpID0+IHtcbiAgICAgIF9pbnN0YW5jZS53aW5kb3dDbGFzcyA9ICcnO1xuICAgICAgc2V0VGltZW91dChfZngsIDI1MCk7XG4gICAgfTtcblxuICAgIF9tb2RhbC5jb21wb25lbnRJbnN0YW5jZS5kYXRhID0gZGF0YTtcblxuICAgIHJldHVybiBfbW9kYWw7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVyTW9kdWxlIH0gZnJvbSAnLi4vaGVscGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBIZWxwZXJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkU2VydmljZSB7XG5cbiAgICBwcml2YXRlIHN1YmplY3QgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgICBzZXQodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLnN1YmplY3QubmV4dCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gICAgfVxuXG4gICAgZ2V0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX3ZhbHVlcyIsInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8scUJBQU0sWUFBWSxHQUFHLElBQUksQ0FBQztBQUVqQyxBQUFPLHFCQUFNLGFBQWEsR0FBRzs7SUFHekIsbUJBQW1CLEVBQUUsWUFBWTtJQUNqQyw0QkFBNEIsRUFBRSxRQUFRO0lBQ3RDLG1DQUFtQyxFQUFFLFVBQVU7SUFDL0Msb0NBQW9DLEVBQUUsU0FBUztJQUMvQywwQkFBMEIsRUFBRSxnQkFBZ0I7SUFDNUMsbUJBQW1CLEVBQUUsU0FBUztJQUM5QixtQkFBbUIsRUFBRSxVQUFVO0lBQy9CLG9CQUFvQixFQUFFLFlBQVk7SUFDbEMsZ0JBQWdCLEVBQUUsTUFBTTtJQUN4QixrQkFBa0IsRUFBRSxV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