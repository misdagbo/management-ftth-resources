import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Helpers } from './helpers';
import { TranslateService, GlobalEnum } from 'helper';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'body',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
    name = 'Metronic';
    globalBodyClass = 'm-page--loading-non-block m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-light m-aside-left--fixed m-aside-left--offcanvas m-aside-left--minimize m-brand--minimize m-footer--push m-aside--offcanvas-default';

    constructor(private _router: Router, private _translateService: TranslateService, private _titleService: Title) { }

    ngOnInit() {
        this._translateService.use(GlobalEnum._LANGUAGE_FR);
        this._router.events.subscribe((route) => {
            if (route instanceof NavigationStart) {
                Helpers.setLoading(true);
                Helpers.bodyClass(this.globalBodyClass);
            }
            if (route instanceof NavigationEnd) {
                Helpers.setLoading(false);
                const _routeTitle = this.getTitle(this._router.routerState, this._router.routerState.root);
                const _fullTitle = this.name.concat(' | ', _routeTitle.substr(0, _routeTitle.length - 1));
                this._titleService.setTitle(_fullTitle);
            }
        });
    }

    getTitle(state, parent) {
        const data = [];
        if (parent && parent.snapshot.data && parent.snapshot.data.title) {
            data.push(parent.snapshot.data.title);
        }
        if (state && parent) {
            data.push(this.getTitle(state, state.firstChild(parent)));
        }
        return data.join('-');
    }

}
