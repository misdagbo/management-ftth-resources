/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ResponseBase } from './response-base';
import { Injectable } from '@angular/core';
import { HelperModule } from '../helper.module';
import * as i0 from "@angular/core";
import * as i1 from "./status";
import * as i2 from "../helper.module";
/**
 * @template T
 */
var Response = /** @class */ (function (_super) {
    tslib_1.__extends(Response, _super);
    function Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Response.decorators = [
        { type: Injectable, args: [{
                    providedIn: HelperModule
                },] },
    ];
    /** @nocollapse */ Response.ngInjectableDef = i0.defineInjectable({ factory: function Response_Factory() { return new Response(i0.inject(i1.Status)); }, token: Response, providedIn: i2.HelperModule });
    return Response;
}(ResponseBase));
export { Response };
function Response_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    Response.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    Response.ctorParameters;
    /** @type {?} */
    Response.prototype.items;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxwZXIvIiwic291cmNlcyI6WyJsaWIvX2NvbnRyYWN0cy9yZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7SUFLZixvQ0FBWTs7Ozs7Z0JBSDVDLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsWUFBWTtpQkFDM0I7OzttQkFORDtFQU9pQyxZQUFZO1NBQWhDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXNwb25zZUJhc2UgfSBmcm9tICcuL3Jlc3BvbnNlLWJhc2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVyTW9kdWxlIH0gZnJvbSAnLi4vaGVscGVyLm1vZHVsZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBIZWxwZXJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgUmVzcG9uc2U8VD4gZXh0ZW5kcyBSZXNwb25zZUJhc2Uge1xuXG4gICAgcHVibGljIGl0ZW1zOiBBcnJheTxUPjtcblxufVxuIl19