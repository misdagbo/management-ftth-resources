import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ComponentFactoryResolver, ComponentRef, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { UIViewDirective } from '../../_directives/ui-view.directive';

declare var Enumerable: any;

@Component({
  selector: 'helper-advanced-table',
  templateUrl: './advanced-table.component.html',
  styleUrls: ['./advanced-table.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AdvancedTableComponent implements OnInit {

  _ngbPagination: any;
  _isCheckedRows: any;
  _searchParam: string;

  @Input('index') index: number;
  @Input('size') size: number;
  @Input('count') count: number;
  @Input('sz-table') szTable: string;
  @Input('sz-search') szSearch: string;
  @Input('is-header') isHeader: boolean;
  @Input('is-create') isCreate: boolean;
  @Input('is-refresh') isRefresh: boolean;
  @Input('is-number') isNumber: boolean;
  @Input('is-editable') isEditable: boolean;
  @Input('is-modify') isModify: boolean;
  @Input('is-take-all') isTakeAll: boolean;
  @Input('max-size') maxSize: number;
  @Input('is-deleted') isDeleted: boolean;
  @Input('is-search') isSearch: boolean;
  @Input('is-details') isDetails: boolean;
  @Input('is-checked') isChecked: boolean;
  @Input('is-selected') isSelected: boolean;
  @Input('columns') columns: Array<any> = [];
  @Input('data-source') dataSource: any = [];
  @Input('checked-rows') checkedRows: any = [];
  @Input('view-child') viewChild: any;

  @Output() indexChange = new EventEmitter<number>();
  @Output() sizeChange = new EventEmitter<number>();
  @Output() countChange = new EventEmitter<number>();
  @Output() checkedRowsChange = new EventEmitter<any>();

  @Output() onCreate = new EventEmitter<any>();
  @Output() onValidate = new EventEmitter<any>();
  @Output() onModify = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onRefresh = new EventEmitter<any>();
  @Output() onSelect = new EventEmitter<any>();
  @Output() onSearch = new EventEmitter<string>();
  @Output() onPageChange = new EventEmitter<any>();

  componentRef: ComponentRef<any>;
  _viewContainerRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  @ViewChild(UIViewDirective) set viewContainerRef(uiView: UIViewDirective) {
    if (uiView) {
      setTimeout(() => {
        this._viewContainerRef = uiView.viewContainerRef;
        if (this._viewContainerRef) {
          this._viewContainerRef.clear();
        }
        const _componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.viewChild);
        this.componentRef = this._viewContainerRef.createComponent(_componentFactory);
        this.componentRef.instance.data = uiView.data;
      }, 0);
    }
  }

  ngOnInit() {
    this._ngbPagination = {
      page: 1,
      pageSize: this.size,
      maxSize: this.maxSize || 3,
      ellipses: true,
      rotate: true,
      boundaryLinks: false,
      pageChange: (page) => {
        this.index = (page * this._ngbPagination.pageSize) - this._ngbPagination.pageSize;
        this.indexChange.emit(this.index);
        this.size = this._ngbPagination.pageSize;
        this.sizeChange.emit(this.size);
        this.onPageChange.emit();
      },
      rowStart: () => {
        return 1 + (this._ngbPagination.pageSize * (this._ngbPagination.page - 1));
      },
      rowEnd: () => {
        return Number(this._ngbPagination.pageSize) + Number(Number(this._ngbPagination.pageSize) * (Number(this._ngbPagination.page) - 1));
      }
    };
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  doSearch() {
    this.onSearch.emit(this._searchParam);
  }

  doOpen(rowOpened: any) {
    for (let row of this.dataSource) {
      row.isOpen = false;
    }
    rowOpened.isOpen = true;
  }

  doClose(row: any) {
    row.isOpen = false;
  }

  doSorting(column: any) {
    if (column.isSorting) {
      if (column.isSortUp) {
        this.dataSource = Enumerable.From(this.dataSource)
          .OrderByDescending(function (x) { return x[column.name]; })
          .Select(function (x) { return x; })
          .ToArray();
        column.isSortUp = false;
      } else {
        this.dataSource = Enumerable.From(this.dataSource)
          .OrderBy(function (x) { return x[column.name]; })
          .Select(function (x) { return x; })
          .ToArray();
        column.isSortUp = true;
      }
    }
  }

  doUnCheckRows() {
    for (let row of this.dataSource) {
      row.checked = false;
    }
    this.checkedRows.length = 0;
    this.checkedRowsChange.emit(this.checkedRows);
  }

  doCheckRows() {
    if (this._isCheckedRows) {
      for (let row of this.dataSource) {
        row.checked = true;
        this.checkedRows.push(row);
      }
      this.checkedRowsChange.emit(this.checkedRows);
    } else {
      this.doUnCheckRows();
    }
  }

  doCheck(row: any) {
    if (row.checked) {
      this.checkedRows.push(row);
    } else {
      const i = this.checkedRows.indexOf(row);
      this.checkedRows.splice(i, 1);
    }
    this.checkedRowsChange.emit(this.checkedRows);
  }

  doRefresh() {
    this._searchParam = null;
    this._isCheckedRows = false;
    if (this.checkedRows) {
      this.checkedRows.length = 0;
      this.checkedRowsChange.emit(this.checkedRows);
    }
    this.onRefresh.emit();
  }

  doSelect(rowSelected: any) {
    if (this.isSelected) {
      for (let row of this.dataSource) {
        row.selected = false;
      }
      rowSelected.selected = true;
      this.onSelect.emit(rowSelected);
    }
  }

  doCreate() {
    this.onCreate.emit();
  }

  doEditable(row: any) {
    row.editable = true;
  }

  doValidate(row: any) {
    this.onValidate.emit(row);
    row.editable = false;
  }

  doCancel(row: any) {
    row.editable = false;
  }

  doModify(row: any) {
    if (this.isModify) {
      this.onModify.emit(row);
    }
  }

  doDelete(row: any) {
    this.onDelete.emit(row);
  }

}
