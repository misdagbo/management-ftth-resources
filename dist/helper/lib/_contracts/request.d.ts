import { RequestBase } from './request-base';
export declare class Request<T> extends RequestBase {
    data: T;
    datas: Array<T>;
    constructor();
}
