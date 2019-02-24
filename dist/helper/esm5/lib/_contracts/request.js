/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { RequestBase } from './request-base';
import { Injectable } from '@angular/core';
import { HelperModule } from '../helper.module';
import { GlobalEnum } from '../_utilities/global-enum';
import * as i0 from "@angular/core";
import * as i1 from "../helper.module";
/**
 * @template T
 */
var Request = /** @class */ (function (_super) {
    tslib_1.__extends(Request, _super);
    function Request() {
        return _super.call(this, GlobalEnum._INDEX, GlobalEnum._SIZE, GlobalEnum._TAKE_ALL, GlobalEnum._IS_AND, GlobalEnum._ORDER_BY_DESC, GlobalEnum._LANG) || this;
    }
    Request.decorators = [
        { type: Injectable, args: [{
                    providedIn: HelperModule
                },] },
    ];
    /** @nocollapse */
    Request.ctorParameters = function () { return []; };
    /** @nocollapse */ Request.ngInjectableDef = i0.defineInjectable({ factory: function Request_Factory() { return new Request(); }, token: Request, providedIn: i1.HelperModule });
    return Request;
}(RequestBase));
export { Request };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbHBlci8iLCJzb3VyY2VzIjpbImxpYi9fY29udHJhY3RzL3JlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7O0lBS3ZCLG1DQUFXO0lBS3ZDO2VBQ0ksa0JBQU0sVUFBVSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUM7S0FDcEk7O2dCQVZKLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsWUFBWTtpQkFDM0I7Ozs7O2tCQVBEO0VBUWdDLFdBQVc7U0FBOUIsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3RCYXNlIH0gZnJvbSAnLi9yZXF1ZXN0LWJhc2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVyTW9kdWxlIH0gZnJvbSAnLi4vaGVscGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBHbG9iYWxFbnVtIH0gZnJvbSAnLi4vX3V0aWxpdGllcy9nbG9iYWwtZW51bSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBIZWxwZXJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgUmVxdWVzdDxUPiBleHRlbmRzIFJlcXVlc3RCYXNlIHtcblxuICAgIHB1YmxpYyBkYXRhOiBUO1xuICAgIHB1YmxpYyBkYXRhczogQXJyYXk8VD47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoR2xvYmFsRW51bS5fSU5ERVgsIEdsb2JhbEVudW0uX1NJWkUsIEdsb2JhbEVudW0uX1RBS0VfQUxMLCBHbG9iYWxFbnVtLl9JU19BTkQsIEdsb2JhbEVudW0uX09SREVSX0JZX0RFU0MsIEdsb2JhbEVudW0uX0xBTkcpO1xuICAgIH1cbn1cbiJdfQ==