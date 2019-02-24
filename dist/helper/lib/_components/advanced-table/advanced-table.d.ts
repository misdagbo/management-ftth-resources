export declare class AdvancedTable {
    _startRow: number;
    _lastRow: number;
    _countRow: number;
    _isRefresh: boolean;
    _isNumber: boolean;
    _isModify: boolean;
    _isTakeAll: boolean;
    _isDeleted: boolean;
    _isSearch: boolean;
    _isDetails: boolean;
    _isChecked: boolean;
    _isSelected: boolean;
    _columns: Array<any>;
    _dataSource: any;
    constructor();
    doLoad(fn: () => void): void;
}
