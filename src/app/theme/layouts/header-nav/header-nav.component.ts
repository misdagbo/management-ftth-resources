import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';

declare let mLayout: any;
@Component({
    selector: 'app-header-nav',
    templateUrl: './header-nav.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {

    __app_name: string;

    constructor() { }

    ngOnInit() {
        this.__app_name = Helpers.__app_name;
    }

    ngAfterViewInit() {
        mLayout.initHeader();
    }

}
