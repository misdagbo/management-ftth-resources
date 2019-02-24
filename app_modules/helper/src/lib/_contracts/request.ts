import { RequestBase } from './request-base';
import { Injectable } from '@angular/core';
import { HelperModule } from '../helper.module';
import { GlobalEnum } from '../_utilities/global-enum';

@Injectable({
    providedIn: HelperModule
})
export class Request<T> extends RequestBase {

    public data: T;
    public datas: Array<T>;

    constructor() {
        super(GlobalEnum._INDEX, GlobalEnum._SIZE, GlobalEnum._TAKE_ALL, GlobalEnum._IS_AND, GlobalEnum._ORDER_BY_DESC, GlobalEnum._LANG);
    }
}
