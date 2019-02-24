import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { TranslateService, NotifyService } from 'helper';

declare let mLayout: any;

@Component({
    selector: 'app-aside-nav',
    templateUrl: './aside-nav.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class AsideNavComponent implements OnInit, AfterViewInit {

    __app_name: string;

    constructor(private _translateService: TranslateService) { }

    ngOnInit() {
        this.__app_name = Helpers.__app_name;
    }

    ngAfterViewInit() {
        mLayout.initAside();
    }

    doSelectLang(lang: string) {
        // TODO: Change Language
        this._translateService.use(lang);
    }

}
