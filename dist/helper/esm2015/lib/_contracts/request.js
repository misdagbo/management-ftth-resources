/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { RequestBase } from './request-base';
import { Injectable } from '@angular/core';
import { HelperModule } from '../helper.module';
import { GlobalEnum } from '../_utilities/global-enum';
import * as i0 from "@angular/core";
import * as i1 from "../helper.module";
/**
 * @template T
 */
export class Request extends RequestBase {
    constructor() {
        super(GlobalEnum._INDEX, GlobalEnum._SIZE, GlobalEnum._TAKE_ALL, GlobalEnum._IS_AND, GlobalEnum._ORDER_BY_DESC, GlobalEnum._LANG);
    }
}
Request.decorators = [
    { type: Injectable, args: [{
                providedIn: HelperModule
            },] },
];
/** @nocollapse */
Request.ctorParameters = () => [];
/** @nocollapse */ Request.ngInjectableDef = i0.defineInjectable({ factory: function Request_Factory() { return new Request(); }, token: Request, providedIn: i1.HelperModule });
function Request_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    Request.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    Request.ctorParameters;
    /** @type {?} */
    Request.prototype.data;
    /** @type {?} */
    Request.prototype.datas;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbHBlci8iLCJzb3VyY2VzIjpbImxpYi9fY29udHJhY3RzL3JlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7OztBQUt2RCxNQUFNLGNBQWtCLFNBQVEsV0FBVztJQUt2QztRQUNJLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JJOzs7WUFWSixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLFlBQVk7YUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0QmFzZSB9IGZyb20gJy4vcmVxdWVzdC1iYXNlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlbHBlck1vZHVsZSB9IGZyb20gJy4uL2hlbHBlci5tb2R1bGUnO1xuaW1wb3J0IHsgR2xvYmFsRW51bSB9IGZyb20gJy4uL191dGlsaXRpZXMvZ2xvYmFsLWVudW0nO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogSGVscGVyTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIFJlcXVlc3Q8VD4gZXh0ZW5kcyBSZXF1ZXN0QmFzZSB7XG5cbiAgICBwdWJsaWMgZGF0YTogVDtcbiAgICBwdWJsaWMgZGF0YXM6IEFycmF5PFQ+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEdsb2JhbEVudW0uX0lOREVYLCBHbG9iYWxFbnVtLl9TSVpFLCBHbG9iYWxFbnVtLl9UQUtFX0FMTCwgR2xvYmFsRW51bS5fSVNfQU5ELCBHbG9iYWxFbnVtLl9PUkRFUl9CWV9ERVNDLCBHbG9iYWxFbnVtLl9MQU5HKTtcbiAgICB9XG59XG4iXX0=