/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HelperModule } from '../helper.module';
import * as i0 from "@angular/core";
import * as i1 from "../helper.module";
var UtilityService = /** @class */ (function () {
    function UtilityService() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    UtilityService.prototype.isNullObject = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value instanceof Boolean || value instanceof Number) {
            return !value;
        }
        if (value instanceof String) {
            return !value || 0 === value.length;
        }
        if (value instanceof Object) {
            return !value || value === {};
        }
    };
    /**
     * @param {?} origin
     * @param {?} service
     * @param {?} method
     * @return {?}
     */
    UtilityService.prototype.getUrl = /**
     * @param {?} origin
     * @param {?} service
     * @param {?} method
     * @return {?}
     */
    function (origin, service, method) {
        return origin + '/' + service + '/' + method;
    };
    /**
     * @param {?} url
     * @param {?} origin
     * @return {?}
     */
    UtilityService.prototype.getService = /**
     * @param {?} url
     * @param {?} origin
     * @return {?}
     */
    function (url, origin) {
        url = url.slice(origin.length + 1, url.length);
        var /** @type {?} */ service = url.split('/');
        return service.shift();
    };
    UtilityService.decorators = [
        { type: Injectable, args: [{
                    providedIn: HelperModule
                },] },
    ];
    /** @nocollapse */
    UtilityService.ctorParameters = function () { return []; };
    /** @nocollapse */ UtilityService.ngInjectableDef = i0.defineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(); }, token: UtilityService, providedIn: i1.HelperModule });
    return UtilityService;
}());
export { UtilityService };
function UtilityService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    UtilityService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    UtilityService.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVscGVyLyIsInNvdXJjZXMiOlsibGliL191dGlsaXRpZXMvdXRpbGl0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztJQU81QztLQUFpQjs7Ozs7SUFFakIscUNBQVk7Ozs7SUFBWixVQUFhLEtBQVU7UUFFbkIsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLE9BQU8sSUFBSSxLQUFLLFlBQVksTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN0RCxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDakI7UUFFRCxFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDdkM7UUFFRCxFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLEVBQUUsQ0FBQztTQUNqQztLQUVKOzs7Ozs7O0lBRUQsK0JBQU07Ozs7OztJQUFOLFVBQU8sTUFBYyxFQUFFLE9BQWUsRUFBRSxNQUFjO1FBQ2xELE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO0tBQ2hEOzs7Ozs7SUFFRCxtQ0FBVTs7Ozs7SUFBVixVQUFXLEdBQVcsRUFBRSxNQUFjO1FBQ2xDLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxxQkFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQzFCOztnQkEvQkosVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxZQUFZO2lCQUMzQjs7Ozs7eUJBTEQ7O1NBTWEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVscGVyTW9kdWxlIH0gZnJvbSAnLi4vaGVscGVyLm1vZHVsZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiBIZWxwZXJNb2R1bGVcclxufSlcclxuZXhwb3J0IGNsYXNzIFV0aWxpdHlTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIGlzTnVsbE9iamVjdCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEJvb2xlYW4gfHwgdmFsdWUgaW5zdGFuY2VvZiBOdW1iZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuICF2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gIXZhbHVlIHx8IDAgPT09IHZhbHVlLmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gIXZhbHVlIHx8IHZhbHVlID09PSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFVybChvcmlnaW46IHN0cmluZywgc2VydmljZTogc3RyaW5nLCBtZXRob2Q6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIG9yaWdpbiArICcvJyArIHNlcnZpY2UgKyAnLycgKyBtZXRob2Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VydmljZSh1cmw6IHN0cmluZywgb3JpZ2luOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHVybCA9IHVybC5zbGljZShvcmlnaW4ubGVuZ3RoICsgMSwgdXJsLmxlbmd0aCk7XHJcbiAgICAgICAgbGV0IHNlcnZpY2UgPSB1cmwuc3BsaXQoJy8nKTtcclxuICAgICAgICByZXR1cm4gc2VydmljZS5zaGlmdCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=