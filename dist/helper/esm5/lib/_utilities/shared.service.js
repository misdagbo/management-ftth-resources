/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HelperModule } from '../helper.module';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../helper.module";
var SharedService = /** @class */ (function () {
    function SharedService() {
        this.subject = new Subject();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SharedService.prototype.set = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.subject.next(value);
    };
    /**
     * @return {?}
     */
    SharedService.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.subject.next();
    };
    /**
     * @return {?}
     */
    SharedService.prototype.get = /**
     * @return {?}
     */
    function () {
        return this.subject.asObservable();
    };
    SharedService.decorators = [
        { type: Injectable, args: [{
                    providedIn: HelperModule
                },] },
    ];
    /** @nocollapse */ SharedService.ngInjectableDef = i0.defineInjectable({ factory: function SharedService_Factory() { return new SharedService(); }, token: SharedService, providedIn: i1.HelperModule });
    return SharedService;
}());
export { SharedService };
function SharedService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SharedService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SharedService.ctorParameters;
    /** @type {?} */
    SharedService.prototype.subject;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxwZXIvIiwic291cmNlcyI6WyJsaWIvX3V0aWxpdGllcy9zaGFyZWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7dUJBT3JCLElBQUksT0FBTyxFQUFPOzs7Ozs7SUFFcEMsMkJBQUc7Ozs7SUFBSCxVQUFJLEtBQVU7UUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM1Qjs7OztJQUVELDZCQUFLOzs7SUFBTDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDdkI7Ozs7SUFFRCwyQkFBRzs7O0lBQUg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN0Qzs7Z0JBakJKLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsWUFBWTtpQkFDM0I7Ozt3QkFORDs7U0FPYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVyTW9kdWxlIH0gZnJvbSAnLi4vaGVscGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBIZWxwZXJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkU2VydmljZSB7XG5cbiAgICBwcml2YXRlIHN1YmplY3QgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgICBzZXQodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLnN1YmplY3QubmV4dCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gICAgfVxuXG4gICAgZ2V0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG59XG4iXX0=