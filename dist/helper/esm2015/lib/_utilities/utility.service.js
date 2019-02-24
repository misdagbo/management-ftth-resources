/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HelperModule } from '../helper.module';
import * as i0 from "@angular/core";
import * as i1 from "../helper.module";
export class UtilityService {
    constructor() { }
    /**
     * @param {?} value
     * @return {?}
     */
    isNullObject(value) {
        if (value instanceof Boolean || value instanceof Number) {
            return !value;
        }
        if (value instanceof String) {
            return !value || 0 === value.length;
        }
        if (value instanceof Object) {
            return !value || value === {};
        }
    }
    /**
     * @param {?} origin
     * @param {?} service
     * @param {?} method
     * @return {?}
     */
    getUrl(origin, service, method) {
        return origin + '/' + service + '/' + method;
    }
    /**
     * @param {?} url
     * @param {?} origin
     * @return {?}
     */
    getService(url, origin) {
        url = url.slice(origin.length + 1, url.length);
        let /** @type {?} */ service = url.split('/');
        return service.shift();
    }
}
UtilityService.decorators = [
    { type: Injectable, args: [{
                providedIn: HelperModule
            },] },
];
/** @nocollapse */
UtilityService.ctorParameters = () => [];
/** @nocollapse */ UtilityService.ngInjectableDef = i0.defineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(); }, token: UtilityService, providedIn: i1.HelperModule });
function UtilityService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    UtilityService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    UtilityService.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVscGVyLyIsInNvdXJjZXMiOlsibGliL191dGlsaXRpZXMvdXRpbGl0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBS2hELE1BQU07SUFFRixpQkFBaUI7Ozs7O0lBRWpCLFlBQVksQ0FBQyxLQUFVO1FBRW5CLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxPQUFPLElBQUksS0FBSyxZQUFZLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdEQsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ2pCO1FBRUQsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQ3ZDO1FBRUQsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssS0FBSyxFQUFFLENBQUM7U0FDakM7S0FFSjs7Ozs7OztJQUVELE1BQU0sQ0FBQyxNQUFjLEVBQUUsT0FBZSxFQUFFLE1BQWM7UUFDbEQsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7S0FDaEQ7Ozs7OztJQUVELFVBQVUsQ0FBQyxHQUFXLEVBQUUsTUFBYztRQUNsQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MscUJBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUMxQjs7O1lBL0JKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsWUFBWTthQUMzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVscGVyTW9kdWxlIH0gZnJvbSAnLi4vaGVscGVyLm1vZHVsZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiBIZWxwZXJNb2R1bGVcclxufSlcclxuZXhwb3J0IGNsYXNzIFV0aWxpdHlTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIGlzTnVsbE9iamVjdCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEJvb2xlYW4gfHwgdmFsdWUgaW5zdGFuY2VvZiBOdW1iZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuICF2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gIXZhbHVlIHx8IDAgPT09IHZhbHVlLmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gIXZhbHVlIHx8IHZhbHVlID09PSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFVybChvcmlnaW46IHN0cmluZywgc2VydmljZTogc3RyaW5nLCBtZXRob2Q6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIG9yaWdpbiArICcvJyArIHNlcnZpY2UgKyAnLycgKyBtZXRob2Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VydmljZSh1cmw6IHN0cmluZywgb3JpZ2luOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHVybCA9IHVybC5zbGljZShvcmlnaW4ubGVuZ3RoICsgMSwgdXJsLmxlbmd0aCk7XHJcbiAgICAgICAgbGV0IHNlcnZpY2UgPSB1cmwuc3BsaXQoJy8nKTtcclxuICAgICAgICByZXR1cm4gc2VydmljZS5zaGlmdCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=