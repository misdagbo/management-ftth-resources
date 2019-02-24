/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AdvancedTable = /** @class */ (function () {
    function AdvancedTable() {
        this._startRow = 0;
        this._lastRow = 10;
        this._isModify = true;
        this._isSearch = true;
        this._isRefresh = true;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    AdvancedTable.prototype.doLoad = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { fn(); };
    return AdvancedTable;
}());
export { AdvancedTable };
function AdvancedTable_tsickle_Closure_declarations() {
    /** @type {?} */
    AdvancedTable.prototype._startRow;
    /** @type {?} */
    AdvancedTable.prototype._lastRow;
    /** @type {?} */
    AdvancedTable.prototype._countRow;
    /** @type {?} */
    AdvancedTable.prototype._isRefresh;
    /** @type {?} */
    AdvancedTable.prototype._isNumber;
    /** @type {?} */
    AdvancedTable.prototype._isModify;
    /** @type {?} */
    AdvancedTable.prototype._isTakeAll;
    /** @type {?} */
    AdvancedTable.prototype._isDeleted;
    /** @type {?} */
    AdvancedTable.prototype._isSearch;
    /** @type {?} */
    AdvancedTable.prototype._isDetails;
    /** @type {?} */
    AdvancedTable.prototype._isChecked;
    /** @type {?} */
    AdvancedTable.prototype._isSelected;
    /** @type {?} */
    AdvancedTable.prototype._columns;
    /** @type {?} */
    AdvancedTable.prototype._dataSource;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtdGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxwZXIvIiwic291cmNlcyI6WyJsaWIvX2NvbXBvbmVudHMvYWR2YW5jZWQtdGFibGUvYWR2YW5jZWQtdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQUE7SUFpQkk7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztLQUMxQjs7Ozs7SUFFRCw4QkFBTTs7OztJQUFOLFVBQU8sRUFBYyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUU7d0JBekJwQztJQTJCQyxDQUFBO0FBM0JELHlCQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBZHZhbmNlZFRhYmxlIHtcblxuICAgIHB1YmxpYyBfc3RhcnRSb3c6IG51bWJlcjtcbiAgICBwdWJsaWMgX2xhc3RSb3c6IG51bWJlcjtcbiAgICBwdWJsaWMgX2NvdW50Um93OiBudW1iZXI7XG4gICAgcHVibGljIF9pc1JlZnJlc2g6IGJvb2xlYW47XG4gICAgcHVibGljIF9pc051bWJlcjogYm9vbGVhbjtcbiAgICBwdWJsaWMgX2lzTW9kaWZ5OiBib29sZWFuO1xuICAgIHB1YmxpYyBfaXNUYWtlQWxsOiBib29sZWFuO1xuICAgIHB1YmxpYyBfaXNEZWxldGVkOiBib29sZWFuO1xuICAgIHB1YmxpYyBfaXNTZWFyY2g6IGJvb2xlYW47XG4gICAgcHVibGljIF9pc0RldGFpbHM6IGJvb2xlYW47XG4gICAgcHVibGljIF9pc0NoZWNrZWQ6IGJvb2xlYW47XG4gICAgcHVibGljIF9pc1NlbGVjdGVkOiBib29sZWFuO1xuICAgIHB1YmxpYyBfY29sdW1uczogQXJyYXk8YW55PjtcbiAgICBwdWJsaWMgX2RhdGFTb3VyY2U6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9zdGFydFJvdyA9IDA7XG4gICAgICAgIHRoaXMuX2xhc3RSb3cgPSAxMDtcbiAgICAgICAgdGhpcy5faXNNb2RpZnkgPSB0cnVlO1xuICAgICAgICB0aGlzLl9pc1NlYXJjaCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2lzUmVmcmVzaCA9IHRydWU7XG4gICAgfVxuXG4gICAgZG9Mb2FkKGZuOiAoKSA9PiB2b2lkKSB7IGZuKCk7IH1cblxufVxuIl19