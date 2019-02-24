/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ViewChild, ComponentFactoryResolver, ViewEncapsulation } from '@angular/core';
import { UIViewDirective } from '../../_directives/ui-view.directive';
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
            for (var _a = tslib_1.__values(this.dataSource), _b = _a.next(); !_b.done; _b = _a.next()) {
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
            for (var _a = tslib_1.__values(this.dataSource), _b = _a.next(); !_b.done; _b = _a.next()) {
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
                for (var _a = tslib_1.__values(this.dataSource), _b = _a.next(); !_b.done; _b = _a.next()) {
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
                for (var _a = tslib_1.__values(this.dataSource), _b = _a.next(); !_b.done; _b = _a.next()) {
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
export { AdvancedTableComponent };
function AdvancedTableComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AdvancedTableComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AdvancedTableComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AdvancedTableComponent.propDecorators;
    /** @type {?} */
    AdvancedTableComponent.prototype._ngbPagination;
    /** @type {?} */
    AdvancedTableComponent.prototype._isCheckedRows;
    /** @type {?} */
    AdvancedTableComponent.prototype._searchParam;
    /** @type {?} */
    AdvancedTableComponent.prototype.index;
    /** @type {?} */
    AdvancedTableComponent.prototype.size;
    /** @type {?} */
    AdvancedTableComponent.prototype.count;
    /** @type {?} */
    AdvancedTableComponent.prototype.szTable;
    /** @type {?} */
    AdvancedTableComponent.prototype.szSearch;
    /** @type {?} */
    AdvancedTableComponent.prototype.isHeader;
    /** @type {?} */
    AdvancedTableComponent.prototype.isCreate;
    /** @type {?} */
    AdvancedTableComponent.prototype.isRefresh;
    /** @type {?} */
    AdvancedTableComponent.prototype.isNumber;
    /** @type {?} */
    AdvancedTableComponent.prototype.isEditable;
    /** @type {?} */
    AdvancedTableComponent.prototype.isModify;
    /** @type {?} */
    AdvancedTableComponent.prototype.isTakeAll;
    /** @type {?} */
    AdvancedTableComponent.prototype.maxSize;
    /** @type {?} */
    AdvancedTableComponent.prototype.isDeleted;
    /** @type {?} */
    AdvancedTableComponent.prototype.isSearch;
    /** @type {?} */
    AdvancedTableComponent.prototype.isDetails;
    /** @type {?} */
    AdvancedTableComponent.prototype.isChecked;
    /** @type {?} */
    AdvancedTableComponent.prototype.isSelected;
    /** @type {?} */
    AdvancedTableComponent.prototype.columns;
    /** @type {?} */
    AdvancedTableComponent.prototype.dataSource;
    /** @type {?} */
    AdvancedTableComponent.prototype.checkedRows;
    /** @type {?} */
    AdvancedTableComponent.prototype.viewChild;
    /** @type {?} */
    AdvancedTableComponent.prototype.indexChange;
    /** @type {?} */
    AdvancedTableComponent.prototype.sizeChange;
    /** @type {?} */
    AdvancedTableComponent.prototype.countChange;
    /** @type {?} */
    AdvancedTableComponent.prototype.checkedRowsChange;
    /** @type {?} */
    AdvancedTableComponent.prototype.onCreate;
    /** @type {?} */
    AdvancedTableComponent.prototype.onValidate;
    /** @type {?} */
    AdvancedTableComponent.prototype.onModify;
    /** @type {?} */
    AdvancedTableComponent.prototype.onDelete;
    /** @type {?} */
    AdvancedTableComponent.prototype.onRefresh;
    /** @type {?} */
    AdvancedTableComponent.prototype.onSelect;
    /** @type {?} */
    AdvancedTableComponent.prototype.onSearch;
    /** @type {?} */
    AdvancedTableComponent.prototype.onPageChange;
    /** @type {?} */
    AdvancedTableComponent.prototype.componentRef;
    /** @type {?} */
    AdvancedTableComponent.prototype._viewContainerRef;
    /** @type {?} */
    AdvancedTableComponent.prototype.componentFactoryResolver;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVscGVyLyIsInNvdXJjZXMiOlsibGliL19jb21wb25lbnRzL2FkdmFuY2VkLXRhYmxlL2FkdmFuY2VkLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHdCQUF3QixFQUFrQyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2SyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUNBQXFDLENBQUM7O0lBNE5wRSxnQ0FBb0Isd0JBQWtEO1FBQWxELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7dUJBdEI5QixFQUFFOzBCQUNGLEVBQUU7MkJBQ0EsRUFBRTsyQkFHcEIsSUFBSSxZQUFZLEVBQVU7MEJBQzNCLElBQUksWUFBWSxFQUFVOzJCQUN6QixJQUFJLFlBQVksRUFBVTtpQ0FDcEIsSUFBSSxZQUFZLEVBQU87d0JBRWhDLElBQUksWUFBWSxFQUFPOzBCQUNyQixJQUFJLFlBQVksRUFBTzt3QkFDekIsSUFBSSxZQUFZLEVBQU87d0JBQ3ZCLElBQUksWUFBWSxFQUFPO3lCQUN0QixJQUFJLFlBQVksRUFBTzt3QkFDeEIsSUFBSSxZQUFZLEVBQU87d0JBQ3ZCLElBQUksWUFBWSxFQUFVOzRCQUN0QixJQUFJLFlBQVksRUFBTztLQUsyQjswQkFFM0Msb0RBQWdCOzs7OztrQkFBQyxNQUF1Qjs7WUFDdEUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDWCxVQUFVLENBQUM7b0JBQ1QsS0FBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDakQsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQzt3QkFDM0IsS0FBSSxDQUFDLGlCQUFp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OzhCQUNOLE1BQU07NkJBQ04sTUFBTTs2QkFDTixNQUFNO2lDQUNOLE1BQU07cUNBT04sU0FBUyxTQUFDLGVBQWU7O2lDQS9ONUI7O1NBK0thLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVSVZpZXdEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9fZGlyZWN0aXZlcy91aS12aWV3LmRpcmVjdGl2ZSc7XG5cbmRlY2xhcmUgdmFyIEVudW1lcmFibGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVscGVyLWFkdmFuY2VkLXRhYmxlJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxuICA8ZGl2IGNsYXNzPVwiaGVyby1jYWxsb3V0XCIgW3N0eWxlLmZvbnQtc2l6ZS5weF09XCJzelRhYmxlID09PSAnc20nID8gJzExJyA6ICcxMydcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBtLWZvcm1fX2dyb3VwIHJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDRweDtcIj5cbiAgICAgIDxkaXYgW25nQ2xhc3NdPVwieyAnc20nOiAnY29sLTEwJywgJ21kJzogJ2NvbC05JywgJ2xnJzogJ2NvbC04JywgJ3N6LTYnOiAnY29sLTYnLCAnc3otNSc6ICdjb2wtNycgfVtzelNlYXJjaF1cIlxuICAgICAgICAqbmdJZj1cIiFpc1Rha2VBbGxcIj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIEFmZmljaGVcbiAgICAgICAgICA8c2VsZWN0IFsobmdNb2RlbCldPVwiX25nYlBhZ2luYXRpb24ucGFnZVNpemVcIiAobmdNb2RlbENoYW5nZSk9XCJfbmdiUGFnaW5hdGlvbi5wYWdlQ2hhbmdlKF9uZ2JQYWdpbmF0aW9uLnBhZ2UpXCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPjU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTJcIj4xMjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjI1XCI+MjU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1MFwiPjUwPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAwXCI+MTAwPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgZW50csOpZXNcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBbbmdDbGFzc109XCJ7ICdzbSc6ICdjb2wtMiBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCcsICdtZCc6ICdjb2wtMyBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCcsICdsZyc6ICdjb2wtNCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCcsICdzei02JzogJ2NvbC02IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kJywgJ3N6LTUnOiAnY29sLTUgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQnIH1bc3pTZWFyY2hdXCJcbiAgICAgICAgKm5nSWY9XCJpc1NlYXJjaFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibS1pbnB1dC1pY29uIG0taW5wdXQtaWNvbi0tbGVmdFwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBtLWlucHV0XCIgc3R5bGU9XCJib3JkZXI6MXB4IHNvbGlkICNkZGQ7XCIgWyhuZ01vZGVsKV09XCJfc2VhcmNoUGFyYW1cIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZWNoZXJjaGUuLi5cIiAobmdNb2RlbENoYW5nZSk9XCJkb1NlYXJjaCgpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtLWlucHV0LWljb25fX2ljb24gbS1pbnB1dC1pY29uX19pY29uLS1sZWZ0XCI+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmbGF0aWNvbi1zZWFyY2hcIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXIgYWR2YW5jZWQtdGFibGUgbS10YWJsZVwiPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoIGNsYXNzPVwidGgtMVwiICpuZ0lmPVwiaXNSZWZyZXNoICYmICFpc051bWJlclwiIChjbGljayk9XCJkb1JlZnJlc2goKVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1yZWZyZXNoXCIgW3N0eWxlLmZvbnQtc2l6ZS5weF09XCJzelRhYmxlID09PSAnc20nID8gJzEzJyA6ICcxNCdcIj48L2k+XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgICA8dGggKm5nSWY9XCJpc0RldGFpbHNcIj48L3RoPlxuICAgICAgICAgIDx0aCAqbmdJZj1cImlzU2VsZWN0ZWQgJiYgIWlzQ2hlY2tlZFwiPjwvdGg+XG4gICAgICAgICAgPHRoICpuZ0lmPVwiaXNDaGVja2VkICYmICFpc1NlbGVjdGVkXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJfaXNDaGVja2VkUm93c1wiIChuZ01vZGVsQ2hhbmdlKT1cImRvQ2hlY2tSb3dzKClcIj5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDx0aCAqbmdJZj1cImlzTnVtYmVyICYmICFpc1JlZnJlc2hcIj5OwrA8L3RoPlxuICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIiAoY2xpY2spPVwiZG9Tb3J0aW5nKGNvbHVtbik7XCI+XG4gICAgICAgICAgICB7e2NvbHVtbi50ZXh0fX1cbiAgICAgICAgICAgIDxpIGNsYXNzPVwibGEgbGEtYXJyb3ctdXAgaS0tZmlsdGVyXCIgKm5nSWY9XCJjb2x1bW4uaXNTb3J0aW5nICYmICFjb2x1bW4uaXNTb3J0VXBcIj48L2k+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImxhIGxhLWFycm93LWRvd24gaS0tZmlsdGVyXCIgKm5nSWY9XCJjb2x1bW4uaXNTb3J0aW5nICYmIGNvbHVtbi5pc1NvcnRVcFwiPjwvaT5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzcz1cInRoLTFcIiAqbmdJZj1cImlzRWRpdGFibGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93biBidG4tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIFtzdHlsZS5mb250LXNpemUucHhdPVwic3pUYWJsZSA9PT0gJ3NtJyA/ICcxMScgOiAnMTInXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jb2dcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCIgW3N0eWxlLmZvbnQtc2l6ZS5weF09XCJzelRhYmxlID09PSAnc20nID8gJzExJyA6ICcxMidcIj5cbiAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XCJpc0NyZWF0ZVwiIChjbGljayk9XCJkb0NyZWF0ZSgpXCI+PGE+Tm91dmVhdTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YT5FeHBvcnRlcjwvYT48L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgICA8dGggY2xhc3M9XCJ0aC0xXCIgKm5nSWY9XCJpc01vZGlmeVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duIGJ0bi1ncm91cFwiPlxuICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgW3N0eWxlLmZvbnQtc2l6ZS5weF09XCJzelRhYmxlID09PSAnc20nID8gJzExJyA6ICcxMidcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWNvZ1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIiBbc3R5bGUuZm9udC1zaXplLnB4XT1cInN6VGFibGUgPT09ICdzbScgPyAnMTEnIDogJzEyJ1wiPlxuICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cImlzQ3JlYXRlXCIgKGNsaWNrKT1cImRvQ3JlYXRlKClcIj48YT5Ob3V2ZWF1PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxhPkV4cG9ydGVyPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzcz1cInRoLTFcIiAqbmdJZj1cIiFpc01vZGlmeSAmJiAhaXNFZGl0YWJsZSAmJiAhaXNEZWxldGVkICYmICFpc0NyZWF0ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duIGJ0bi1ncm91cFwiPlxuICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgW3N0eWxlLmZvbnQtc2l6ZS5weF09XCJzelRhYmxlID09PSAnc20nID8gJzExJyA6ICcxMidcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWNvZ1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIiBbc3R5bGUuZm9udC1zaXplLnB4XT1cInN6VGFibGUgPT09ICdzbScgPyAnMTEnIDogJzEyJ1wiPlxuICAgICAgICAgICAgICAgIDxsaT48YT5FeHBvcnRlcjwvYT48L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgICA8dGggY2xhc3M9XCJ0aC0xXCIgKm5nSWY9XCJpc0RlbGV0ZWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93biBidG4tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIFtzdHlsZS5mb250LXNpemUucHhdPVwic3pUYWJsZSA9PT0gJ3NtJyA/ICcxMScgOiAnMTInXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jb2dcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCIgW3N0eWxlLmZvbnQtc2l6ZS5weF09XCJzelRhYmxlID09PSAnc20nID8gJzExJyA6ICcxMidcIj5cbiAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XCJpc0NyZWF0ZVwiIChjbGljayk9XCJkb0NyZWF0ZSgpXCI+PGE+Tm91dmVhdTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YT5FeHBvcnRlcjwvYT48L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHkgKm5nRm9yPVwibGV0IHJvdyBvZiBkYXRhU291cmNlOyBsZXQgaSA9IGluZGV4O1wiIHN0eWxlPVwiYm9yZGVyOiBub25lO1wiPlxuICAgICAgICA8dHIgY2xhc3M9XCJfX3JcIiAoZGJsY2xpY2spPVwiZG9Nb2RpZnkocm93KVwiIChjbGljayk9XCJkb1NlbGVjdChyb3cpXCI+XG4gICAgICAgICAgPHRkIGNsYXNzPVwidGQtMVwiIFtjbGFzcy50ZC0tYWN0aXZlXT1cInJvdy5jaGVja2VkIHx8IHJvdy5zZWxlY3RlZFwiICpuZ0lmPVwiaXNSZWZyZXNoICYmICFpc051bWJlclwiPlxuICAgICAgICAgICAge3sgKGkgKyAxKSArIChfbmdiUGFnaW5hdGlvbi5wYWdlU2l6ZSAqIChfbmdiUGFnaW5hdGlvbi5wYWdlIC0gMSkpIH19XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZC0xXCIgW2NsYXNzLnRkLS1hY3RpdmVdPVwicm93LmNoZWNrZWQgfHwgcm93LnNlbGVjdGVkXCIgKm5nSWY9XCJpc0RldGFpbHNcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZHQtYnRuLXBsdXNcIiBbc3R5bGUuZm9udC1zaXplLnB4XT1cInN6VGFibGUgPT09ICdzbScgPyAnMTEnIDogJzEzJ1wiIChjbGljayk9XCJkb09wZW4ocm93KVwiICpuZ0lmPVwiIXJvdy5pc09wZW5cIj4rPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkdC1idG4tbWluaXVzXCIgW3N0eWxlLmZvbnQtc2l6ZS5weF09XCJzelRhYmxlID09PSAnc20nID8gJzExJyA6ICcxMydcIiAoY2xpY2spPVwiZG9DbG9zZShyb3cpXCJcbiAgICAgICAgICAgICAgKm5nSWY9XCJyb3cuaXNPcGVuXCI+LTwvc3Bhbj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInRkLTFcIiBbY2xhc3MudGQtLWFjdGl2ZV09XCJyb3cuY2hlY2tlZCB8fCByb3cuc2VsZWN0ZWRcIiAqbmdJZj1cImlzU2VsZWN0ZWQgJiYgIWlzQ2hlY2tlZFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYWRpb1wiIFtjaGVja2VkXT1cInJvdy5zZWxlY3RlZCA9PT0gdHJ1ZVwiPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwidGQtMVwiIFtjbGFzcy50ZC0tYWN0aXZlXT1cInJvdy5jaGVja2VkIHx8IHJvdy5zZWxlY3RlZFwiICpuZ0lmPVwiaXNDaGVja2VkICYmICFpc1NlbGVjdGVkXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJyb3cuY2hlY2tlZFwiIChuZ01vZGVsQ2hhbmdlKT1cImRvQ2hlY2socm93KVwiPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwidGQtMVwiIFtjbGFzcy50ZC0tYWN0aXZlXT1cInJvdy5jaGVja2VkIHx8IHJvdy5zZWxlY3RlZFwiICpuZ0lmPVwiaXNOdW1iZXIgJiYgIWlzUmVmcmVzaFwiPlxuICAgICAgICAgICAge3sgKGkgKyAxKSArIChfbmdiUGFnaW5hdGlvbi5wYWdlU2l6ZSAqIChfbmdiUGFnaW5hdGlvbi5wYWdlIC0gMSkpIH19XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZC0yXCIgW2NsYXNzLnRkLS1hY3RpdmVdPVwicm93LmNoZWNrZWQgfHwgcm93LnNlbGVjdGVkXCIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb2x1bW4uaXNFZGl0YWJsZSB8fCAhcm93LmVkaXRhYmxlXCI+e3tyb3dbY29sdW1uLm5hbWVdfX08L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCJjb2x1bW4uaXNFZGl0YWJsZSAmJiByb3cuZWRpdGFibGVcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBtLWlucHV0IG0taW5wdXQtLXNxdWFyZVwiXG4gICAgICAgICAgICAgIHN0eWxlPVwiYm9yZGVyOiAxcHggc29saWQgI2RkZDtcIiBbKG5nTW9kZWwpXT1cInJvd1tjb2x1bW4ubmFtZV1cIiAvPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwidGQtMVwiIFtjbGFzcy50ZC0tYWN0aXZlXT1cInJvdy5jaGVja2VkIHx8IHJvdy5zZWxlY3RlZFwiICpuZ0lmPVwiaXNFZGl0YWJsZSAmJiAhaXNNb2RpZnlcIj5cbiAgICAgICAgICAgIDxpbWcgKm5nSWY9XCIhcm93LmVkaXRhYmxlICYmIGlzRWRpdGFibGVcIiBzcmM9XCIuLi8uLi8uLi9hc3NldHMvYXBwL21lZGlhL2ltZy9pY29ucy9pZl9Nb2RpZnlfMTMyNjg1LnBuZ1wiXG4gICAgICAgICAgICAgIChjbGljayk9XCJkb0VkaXRhYmxlKHJvdylcIiB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiAvPlxuICAgICAgICAgICAgPGltZyAqbmdJZj1cInJvdy5lZGl0YWJsZSAmJiBpc0VkaXRhYmxlXCIgc3JjPVwiLi4vLi4vLi4vYXNzZXRzL2FwcC9tZWRpYS9pbWcvaWNvbnMvaWZfZmxvcHB5X2Rpc2tfc2F2ZV8xMDM4NjMucG5nXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImRvVmFsaWRhdGUocm93KVwiIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiA2cHg7XCIgLz5cbiAgICAgICAgICAgIDxpbWcgKm5nSWY9XCJyb3cuZWRpdGFibGUgJiYgaXNFZGl0YWJsZVwiIHNyYz1cIi4uLy4uLy4uL2Fzc2V0cy9hcHAvbWVkaWEvaW1nL2ljb25zL2lmX2YtY3Jvc3NfMjU2XzI4MjQ3MS5wbmdcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiZG9DYW5jZWwocm93KVwiIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIC8+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZC0xXCIgW2NsYXNzLnRkLS1hY3RpdmVdPVwicm93LmNoZWNrZWQgfHwgcm93LnNlbGVjdGVkXCIgKm5nSWY9XCJpc01vZGlmeSAmJiAhaXNFZGl0YWJsZVwiIChjbGljayk9XCJkb01vZGlmeShyb3cpXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uL2Fzc2V0cy9hcHAvbWVkaWEvaW1nL2ljb25zL2lmX01vZGlmeV8xMzI2ODUucG5nXCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgLz5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInRkLTFcIiBbY2xhc3MudGQtLWFjdGl2ZV09XCJyb3cuY2hlY2tlZCB8fCByb3cuc2VsZWN0ZWRcIiAqbmdJZj1cImlzRGVsZXRlZFwiIChjbGljayk9XCJkb0RlbGV0ZShyb3cpXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uL2Fzc2V0cy9hcHAvbWVkaWEvaW1nL2ljb25zL2lmX0VyYXNlXzEzMjc4NC5wbmdcIiB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiAvPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkIFtjbGFzcy50ZC0tYWN0aXZlXT1cInJvdy5jaGVja2VkIHx8IHJvdy5zZWxlY3RlZFwiICpuZ0lmPVwiIWlzTW9kaWZ5ICYmICFpc0VkaXRhYmxlICYmICFpc0RlbGV0ZWQgJiYgIWlzQ3JlYXRlXCI+PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyICpuZ0lmPVwicm93LmlzT3BlblwiPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInN1Yi0tclwiIFthdHRyLmNvbHNwYW5dPVwiY29sdW1ucy5sZW5ndGggKyA4XCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgdWktdmlldyBbZGF0YV09XCJyb3dcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgICAgPHRib2R5ICpuZ0lmPVwiIWNvdW50XCIgc3R5bGU9XCJib3JkZXI6IG5vbmVcIj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInN1Yi0tci0xXCIgW2F0dHIuY29sc3Bhbl09XCJjb2x1bW5zLmxlbmd0aCArIDhcIiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlclwiPkF1Y3VuZSBkb25uJmVhY3V0ZTtlPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBtLWZvcm1fX2dyb3VwIHJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDBweDtcIiAqbmdJZj1cIiFpc1Rha2VBbGwgJiYgY291bnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiIHN0eWxlPVwidG9wOiAtN3B4O1wiPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICBBZmZpY2hhZ2Uge3sgX25nYlBhZ2luYXRpb24ucm93U3RhcnQoKSB9fSDDoCB7eyBfbmdiUGFnaW5hdGlvbi5yb3dFbmQoKSA+IGNvdW50ID8gY291bnQgOlxuICAgICAgICAgIF9uZ2JQYWdpbmF0aW9uLnJvd0VuZCgpIH19IGRlIHt7Y291bnR9fVxuICAgICAgICAgIGVudHLDqWVzXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04XCI+XG4gICAgICAgIDxuZ2ItcGFnaW5hdGlvbiBbZWxsaXBzZXNdPVwiX25nYlBhZ2luYXRpb24uZWxsaXBzZXNcIiBbY29sbGVjdGlvblNpemVdPVwiY291bnRcIiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCJcbiAgICAgICAgICBbKHBhZ2UpXT1cIl9uZ2JQYWdpbmF0aW9uLnBhZ2VcIiBbbWF4U2l6ZV09XCJfbmdiUGFnaW5hdGlvbi5tYXhTaXplXCIgW3JvdGF0ZV09XCJfbmdiUGFnaW5hdGlvbi5yb3RhdGVcIlxuICAgICAgICAgIFtib3VuZGFyeUxpbmtzXT1cIl9uZ2JQYWdpbmF0aW9uLmJvdW5kYXJ5TGlua3NcIiBbcGFnZVNpemVdPVwiX25nYlBhZ2luYXRpb24ucGFnZVNpemVcIiAocGFnZUNoYW5nZSk9XCJfbmdiUGFnaW5hdGlvbi5wYWdlQ2hhbmdlKF9uZ2JQYWdpbmF0aW9uLnBhZ2UpXCI+PC9uZ2ItcGFnaW5hdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2AudGFibGUtcmVzcG9uc2l2ZXtvdmVyZmxvdzpoaWRkZW59LnRhYmxle2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMxMTE7Ym9yZGVyLXNwYWNpbmc6MDtvdmVyZmxvdzppbmhlcml0O292ZXJmbG93LXg6dmlzaWJsZTtvdmVyZmxvdy15OnZpc2libGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0udGFibGUtc3RyaXBlZD50Ym9keTpudGgtb2YtdHlwZSgybik+dHIuX19ye2JhY2tncm91bmQtY29sb3I6I2ZmZn0udGFibGUtc3RyaXBlZD50Ym9keTpudGgtb2YtdHlwZSgybisxKT50ci5fX3J7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5fS50YWJsZS1zdHJpcGVkPnRib2R5Omxhc3QtY2hpbGQ+dHIuX19yOmhvdmVyPnRke2JvcmRlci1ib3R0b206bm9uZX0udGFibGUtc3RyaXBlZD50Ym9keTpsYXN0LWNoaWxkPnRyLl9fcj50ZC50ZC0tYWN0aXZle2JvcmRlci1ib3R0b206bm9uZSFpbXBvcnRhbnR9LnRhYmxlLXN0cmlwZWQ+dGJvZHk+dHIuX19yOmhvdmVyPnRke2JhY2tncm91bmQtY29sb3I6I2RhZjFmZjtib3JkZXItdG9wOjFweCBzb2xpZCAjNmJiZWYyO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICM2YmJlZjJ9LnRhYmxlIHRoLHRke3BhZGRpbmc6NnB4IDEwcHh9LnRhYmxlIHRke21heC13aWR0aDoyMDBweDt3aGl0ZS1zcGFjZTpub3dyYXA7LW1zLXRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7dGV4dC1vdmVyZmxvdzplbGxpcHNpcztib3JkZXItdG9wOjFweCBzb2xpZCAjZGRkO2ZvbnQtd2VpZ2h0OjQwMDtjb2xvcjojMzMzO2N1cnNvcjpwb2ludGVyO292ZXJmbG93OnZpc2libGV9LnRhYmxlIHRoe2JhY2tncm91bmQtY29sb3I6I2ZmZjtwb3NpdGlvbjpyZWxhdGl2ZTtmb250LXdlaWdodDo2MDA7Ym9yZGVyLXRvcDpub25lO2JvcmRlci1yaWdodDpub25lO2JvcmRlci1sZWZ0Om5vbmU7dmVydGljYWwtYWxpZ246bWlkZGxlO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMxMTE7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyIHJpZ2h0O2N1cnNvcjpwb2ludGVyO292ZXJmbG93OnZpc2libGV9LmR0LWJ0bi1wbHVze3RvcDo5cHg7bGVmdDo0cHg7aGVpZ2h0OjEycHg7d2lkdGg6MTJweDtkaXNwbGF5OmJsb2NrO2NvbG9yOiNmZmY7Ym9yZGVyOjJweCBzb2xpZCAjZmZmO2JvcmRlci1yYWRpdXM6MTRweDtib3gtc2hhZG93OjAgMCAzcHggIzQ0NDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O3RleHQtYWxpZ246Y2VudGVyO3RleHQtaW5kZW50OjAhaW1wb3J0YW50O2xpbmUtaGVpZ2h0OjEycHg7YmFja2dyb3VuZC1jb2xvcjojMzFiMTMxfS5kdC1idG4tbWluaXVze3RvcDo5cHg7bGVmdDo0cHg7aGVpZ2h0OjEycHg7d2lkdGg6MTJweDtkaXNwbGF5OmJsb2NrO2NvbG9yOiNmZmY7Ym9yZGVyOjJweCBzb2xpZCAjZmZmO2JvcmRlci1yYWRpdXM6MTRweDtib3gtc2hhZG93OjAgMCAzcHggIzQ0NDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O3RleHQtYWxpZ246Y2VudGVyO3RleHQtaW5kZW50OjAhaW1wb3J0YW50O2xpbmUtaGVpZ2h0OjEycHg7YmFja2dyb3VuZC1jb2xvcjojZDMzMzMzfS50ZC0xLC50aC0xe3dpZHRoOjVweDtjdXJzb3I6cG9pbnRlcjt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7dGV4dC1hbGlnbjpjZW50ZXJ9LnRkLTJ7dmVydGljYWwtYWxpZ246bWlkZGxlfS5oZXJvLWNhbGxvdXR7cGFkZGluZzoxMHB4O2JveC1zaGFkb3c6M3B4IDNweCAyMHB4IHJnYmEoMCwwLDAsLjMpO2JvcmRlci1yYWRpdXM6M3B4fS50ZC0tYWN0aXZle2JhY2tncm91bmQtY29sb3I6I2RhZjFmZjtib3JkZXItdG9wOjFweCBzb2xpZCAjNmJiZWYyIWltcG9ydGFudDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjNmJiZWYyIWltcG9ydGFudH0uaS0tZmlsdGVye2ZvbnQtc2l6ZToxM3B4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3JpZ2h0Oi0xMHB4O2xpbmUtaGVpZ2h0OjA7dmVydGljYWwtYWxpZ246bWlkZGxlfS5zdWItLXJ7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5IWltcG9ydGFudDtwYWRkaW5nOjEwcHh9LnN1Yi0tcjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOm5vbmUhaW1wb3J0YW50O2JvcmRlci10b3A6MXB4IHNvbGlkICNkZGQhaW1wb3J0YW50O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMxMTEhaW1wb3J0YW50O3BhZGRpbmc6MTBweH0uc3ViLS1yLTF7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5IWltcG9ydGFudDtwYWRkaW5nOjZweCAxMHB4fS5zdWItLXItMTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOm5vbmUhaW1wb3J0YW50O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMxMTEhaW1wb3J0YW50O3BhZGRpbmc6NnB4IDEwcHh9LmJ0bntib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MXB4IHNvbGlkICM5Nzk3OTc7aGVpZ2h0OjIxcHg7Y29sb3I6IzAwMDtsaW5lLWhlaWdodDoxOXB4O3doaXRlLXNwYWNlOm5vd3JhcDtwYWRkaW5nOjNweCA1cHggMThweDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLWJvdHRvbTowO2ZvbnQtd2VpZ2h0OjQwMH0uY2FyZXR7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MDtoZWlnaHQ6MDttYXJnaW4tbGVmdDoycHg7dmVydGljYWwtYWxpZ246bWlkZGxlO2JvcmRlci10b3A6NHB4IHNvbGlkO2JvcmRlci1yaWdodDo0cHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWxlZnQ6NHB4IHNvbGlkIHRyYW5zcGFyZW50fWEuZHJvcGRvd24tdG9nZ2xle2NvbG9yOiM2MTYxNjEhaW1wb3J0YW50fXVsLmRyb3Bkb3duLW1lbnV7cmlnaHQ6MCFpbXBvcnRhbnQ7dG9wOjEwMCUhaW1wb3J0YW50O2Zsb2F0Om5vbmU7Y29sb3I6IzAwMDtsaW5lLWhlaWdodDozcHg7Ym9yZGVyLXJhZGl1czo1cHghaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OjUwMDtwYWRkaW5nOjRweDstd2Via2l0LXRyYW5zZm9ybTpub25lIWltcG9ydGFudDt0cmFuc2Zvcm06bm9uZSFpbXBvcnRhbnR9LmRyb3Bkb3duLW1lbnVbeC1wbGFjZW1lbnRePWJvdHRvbV0sLmRyb3Bkb3duLW1lbnVbeC1wbGFjZW1lbnRePWxlZnRdLC5kcm9wZG93bi1tZW51W3gtcGxhY2VtZW50Xj1yaWdodF0sLmRyb3Bkb3duLW1lbnVbeC1wbGFjZW1lbnRePXRvcF17Ym90dG9tOmF1dG87bGVmdDphdXRvIWltcG9ydGFudH11bC5kcm9wZG93bi1tZW51IGE6aG92ZXJ7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOiNmZmY7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoLTE3OWRlZywjNjI4OGY4IDAsIzIyNjFmNiAxMDAlKTtib3JkZXItdG9wOjFweCBzb2xpZCAjNTg3ZmVlO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMwZDUyZWJ9LmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXJ7ZGlzcGxheTpub25lfS5idG4tZ3JvdXB7d2hpdGUtc3BhY2U6bm93cmFwfS5idG4tZ3JvdXAgLmJ0bntmbG9hdDpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5fX2hlYWRlcntib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGRkO3BhZGRpbmctYm90dG9tOjhweDttYXJnaW4tdG9wOi0xMHB4fWBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbn0pXG5leHBvcnQgY2xhc3MgQWR2YW5jZWRUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgX25nYlBhZ2luYXRpb246IGFueTtcbiAgX2lzQ2hlY2tlZFJvd3M6IGFueTtcbiAgX3NlYXJjaFBhcmFtOiBzdHJpbmc7XG5cbiAgQElucHV0KCdpbmRleCcpIGluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnc2l6ZScpIHNpemU6IG51bWJlcjtcbiAgQElucHV0KCdjb3VudCcpIGNvdW50OiBudW1iZXI7XG4gIEBJbnB1dCgnc3otdGFibGUnKSBzelRhYmxlOiBzdHJpbmc7XG4gIEBJbnB1dCgnc3otc2VhcmNoJykgc3pTZWFyY2g6IHN0cmluZztcbiAgQElucHV0KCdpcy1oZWFkZXInKSBpc0hlYWRlcjogYm9vbGVhbjtcbiAgQElucHV0KCdpcy1jcmVhdGUnKSBpc0NyZWF0ZTogYm9vbGVhbjtcbiAgQElucHV0KCdpcy1yZWZyZXNoJykgaXNSZWZyZXNoOiBib29sZWFuO1xuICBASW5wdXQoJ2lzLW51bWJlcicpIGlzTnVtYmVyOiBib29sZWFuO1xuICBASW5wdXQoJ2lzLWVkaXRhYmxlJykgaXNFZGl0YWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCdpcy1tb2RpZnknKSBpc01vZGlmeTogYm9vbGVhbjtcbiAgQElucHV0KCdpcy10YWtlLWFsbCcpIGlzVGFrZUFsbDogYm9vbGVhbjtcbiAgQElucHV0KCdtYXgtc2l6ZScpIG1heFNpemU6IG51bWJlcjtcbiAgQElucHV0KCdpcy1kZWxldGVkJykgaXNEZWxldGVkOiBib29sZWFuO1xuICBASW5wdXQoJ2lzLXNlYXJjaCcpIGlzU2VhcmNoOiBib29sZWFuO1xuICBASW5wdXQoJ2lzLWRldGFpbHMnKSBpc0RldGFpbHM6IGJvb2xlYW47XG4gIEBJbnB1dCgnaXMtY2hlY2tlZCcpIGlzQ2hlY2tlZDogYm9vbGVhbjtcbiAgQElucHV0KCdpcy1zZWxlY3RlZCcpIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgnY29sdW1ucycpIGNvbHVtbnM6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KCdkYXRhLXNvdXJjZScpIGRhdGFTb3VyY2U6IGFueSA9IFtdO1xuICBASW5wdXQoJ2NoZWNrZWQtcm93cycpIGNoZWNrZWRSb3dzOiBhbnkgPSBbXTtcbiAgQElucHV0KCd2aWV3LWNoaWxkJykgdmlld0NoaWxkOiBhbnk7XG5cbiAgQE91dHB1dCgpIGluZGV4Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBzaXplQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBjb3VudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgY2hlY2tlZFJvd3NDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KCkgb25DcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uVmFsaWRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uTW9kaWZ5ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbkRlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25SZWZyZXNoID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25TZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIG9uUGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHsgfVxuXG4gIEBWaWV3Q2hpbGQoVUlWaWV3RGlyZWN0aXZlKSBzZXQgdmlld0NvbnRhaW5lclJlZih1aVZpZXc6IFVJVmlld0RpcmVjdGl2ZSkge1xuICAgIGlmICh1aVZpZXcpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmID0gdWlWaWV3LnZpZXdDb250YWluZXJSZWY7XG4gICAgICAgIGlmICh0aGlzLl92aWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IF9jb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy52aWV3Q2hpbGQpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KF9jb21wb25lbnRGYWN0b3J5KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuZGF0YSA9IHVpVmlldy5kYXRhO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fbmdiUGFnaW5hdGlvbiA9IHtcbiAgICAgIHBhZ2U6IDEsXG4gICAgICBwYWdlU2l6ZTogdGhpcy5zaXplLFxuICAgICAgbWF4U2l6ZTogdGhpcy5tYXhTaXplIHx8IDMsXG4gICAgICBlbGxpcHNlczogdHJ1ZSxcbiAgICAgIHJvdGF0ZTogdHJ1ZSxcbiAgICAgIGJvdW5kYXJ5TGlua3M6IGZhbHNlLFxuICAgICAgcGFnZUNoYW5nZTogKHBhZ2UpID0+IHtcbiAgICAgICAgdGhpcy5pbmRleCA9IChwYWdlICogdGhpcy5fbmdiUGFnaW5hdGlvbi5wYWdlU2l6ZSkgLSB0aGlzLl9uZ2JQYWdpbmF0aW9uLnBhZ2VTaXplO1xuICAgICAgICB0aGlzLmluZGV4Q2hhbmdlLmVtaXQodGhpcy5pbmRleCk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuX25nYlBhZ2luYXRpb24ucGFnZVNpemU7XG4gICAgICAgIHRoaXMuc2l6ZUNoYW5nZS5lbWl0KHRoaXMuc2l6ZSk7XG4gICAgICAgIHRoaXMub25QYWdlQ2hhbmdlLmVtaXQoKTtcbiAgICAgIH0sXG4gICAgICByb3dTdGFydDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gMSArICh0aGlzLl9uZ2JQYWdpbmF0aW9uLnBhZ2VTaXplICogKHRoaXMuX25nYlBhZ2luYXRpb24ucGFnZSAtIDEpKTtcbiAgICAgIH0sXG4gICAgICByb3dFbmQ6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIE51bWJlcih0aGlzLl9uZ2JQYWdpbmF0aW9uLnBhZ2VTaXplKSArIE51bWJlcihOdW1iZXIodGhpcy5fbmdiUGFnaW5hdGlvbi5wYWdlU2l6ZSkgKiAoTnVtYmVyKHRoaXMuX25nYlBhZ2luYXRpb24ucGFnZSkgLSAxKSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZikge1xuICAgICAgdGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIGRvU2VhcmNoKCkge1xuICAgIHRoaXMub25TZWFyY2guZW1pdCh0aGlzLl9zZWFyY2hQYXJhbSk7XG4gIH1cblxuICBkb09wZW4ocm93T3BlbmVkOiBhbnkpIHtcbiAgICBmb3IgKGxldCByb3cgb2YgdGhpcy5kYXRhU291cmNlKSB7XG4gICAgICByb3cuaXNPcGVuID0gZmFsc2U7XG4gICAgfVxuICAgIHJvd09wZW5lZC5pc09wZW4gPSB0cnVlO1xuICB9XG5cbiAgZG9DbG9zZShyb3c6IGFueSkge1xuICAgIHJvdy5pc09wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIGRvU29ydGluZyhjb2x1bW46IGFueSkge1xuICAgIGlmIChjb2x1bW4uaXNTb3J0aW5nKSB7XG4gICAgICBpZiAoY29sdW1uLmlzU29ydFVwKSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IEVudW1lcmFibGUuRnJvbSh0aGlzLmRhdGFTb3VyY2UpXG4gICAgICAgICAgLk9yZGVyQnlEZXNjZW5kaW5nKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4W2NvbHVtbi5uYW1lXTsgfSlcbiAgICAgICAgICAuU2VsZWN0KGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9KVxuICAgICAgICAgIC5Ub0FycmF5KCk7XG4gICAgICAgIGNvbHVtbi5pc1NvcnRVcCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gRW51bWVyYWJsZS5Gcm9tKHRoaXMuZGF0YVNvdXJjZSlcbiAgICAgICAgICAuT3JkZXJCeShmdW5jdGlvbiAoeCkgeyByZXR1cm4geFtjb2x1bW4ubmFtZV07IH0pXG4gICAgICAgICAgLlNlbGVjdChmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSlcbiAgICAgICAgICAuVG9BcnJheSgpO1xuICAgICAgICBjb2x1bW4uaXNTb3J0VXAgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRvVW5DaGVja1Jvd3MoKSB7XG4gICAgZm9yIChsZXQgcm93IG9mIHRoaXMuZGF0YVNvdXJjZSkge1xuICAgICAgcm93LmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5jaGVja2VkUm93cy5sZW5ndGggPSAwO1xuICAgIHRoaXMuY2hlY2tlZFJvd3NDaGFuZ2UuZW1pdCh0aGlzLmNoZWNrZWRSb3dzKTtcbiAgfVxuXG4gIGRvQ2hlY2tSb3dzKCkge1xuICAgIGlmICh0aGlzLl9pc0NoZWNrZWRSb3dzKSB7XG4gICAgICBmb3IgKGxldCByb3cgb2YgdGhpcy5kYXRhU291cmNlKSB7XG4gICAgICAgIHJvdy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jaGVja2VkUm93cy5wdXNoKHJvdyk7XG4gICAgICB9XG4gICAgICB0aGlzLmNoZWNrZWRSb3dzQ2hhbmdlLmVtaXQodGhpcy5jaGVja2VkUm93cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9VbkNoZWNrUm93cygpO1xuICAgIH1cbiAgfVxuXG4gIGRvQ2hlY2socm93OiBhbnkpIHtcbiAgICBpZiAocm93LmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuY2hlY2tlZFJvd3MucHVzaChyb3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpID0gdGhpcy5jaGVja2VkUm93cy5pbmRleE9mKHJvdyk7XG4gICAgICB0aGlzLmNoZWNrZWRSb3dzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgdGhpcy5jaGVja2VkUm93c0NoYW5nZS5lbWl0KHRoaXMuY2hlY2tlZFJvd3MpO1xuICB9XG5cbiAgZG9SZWZyZXNoKCkge1xuICAgIHRoaXMuX3NlYXJjaFBhcmFtID0gbnVsbDtcbiAgICB0aGlzLl9pc0NoZWNrZWRSb3dzID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuY2hlY2tlZFJvd3MpIHtcbiAgICAgIHRoaXMuY2hlY2tlZFJvd3MubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMuY2hlY2tlZFJvd3NDaGFuZ2UuZW1pdCh0aGlzLmNoZWNrZWRSb3dzKTtcbiAgICB9XG4gICAgdGhpcy5vblJlZnJlc2guZW1pdCgpO1xuICB9XG5cbiAgZG9TZWxlY3Qocm93U2VsZWN0ZWQ6IGFueSkge1xuICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQpIHtcbiAgICAgIGZvciAobGV0IHJvdyBvZiB0aGlzLmRhdGFTb3VyY2UpIHtcbiAgICAgICAgcm93LnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICByb3dTZWxlY3RlZC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB0aGlzLm9uU2VsZWN0LmVtaXQocm93U2VsZWN0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGRvQ3JlYXRlKCkge1xuICAgIHRoaXMub25DcmVhdGUuZW1pdCgpO1xuICB9XG5cbiAgZG9FZGl0YWJsZShyb3c6IGFueSkge1xuICAgIHJvdy5lZGl0YWJsZSA9IHRydWU7XG4gIH1cblxuICBkb1ZhbGlkYXRlKHJvdzogYW55KSB7XG4gICAgdGhpcy5vblZhbGlkYXRlLmVtaXQocm93KTtcbiAgICByb3cuZWRpdGFibGUgPSBmYWxzZTtcbiAgfVxuXG4gIGRvQ2FuY2VsKHJvdzogYW55KSB7XG4gICAgcm93LmVkaXRhYmxlID0gZmFsc2U7XG4gIH1cblxuICBkb01vZGlmeShyb3c6IGFueSkge1xuICAgIGlmICh0aGlzLmlzTW9kaWZ5KSB7XG4gICAgICB0aGlzLm9uTW9kaWZ5LmVtaXQocm93KTtcbiAgICB9XG4gIH1cblxuICBkb0RlbGV0ZShyb3c6IGFueSkge1xuICAgIHRoaXMub25EZWxldGUuZW1pdChyb3cpO1xuICB9XG5cbn1cbiJdfQ==