/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '../_translates/translate.service';
import { HelperModule } from '../helper.module';
import * as i0 from "@angular/core";
import * as i1 from "ngx-toastr";
import * as i2 from "../_translates/translate.service";
import * as i3 from "../helper.module";
var NotifyService = /** @class */ (function () {
    function NotifyService(_toastrService, _translateService) {
        this._toastrService = _toastrService;
        this._translateService = _translateService;
    }
    /**
     * @param {?} msg
     * @param {?=} opts
     * @return {?}
     */
    NotifyService.prototype.info = /**
     * @param {?} msg
     * @param {?=} opts
     * @return {?}
     */
    function (msg, opts) {
        this._toastrService.info(msg, this._translateService.instant('NOTIFY_INFORMATION_TITLE'), opts);
    };
    /**
     * @param {?} msg
     * @param {?=} opts
     * @return {?}
     */
    NotifyService.prototype.success = /**
     * @param {?} msg
     * @param {?=} opts
     * @return {?}
     */
    function (msg, opts) {
        this._toastrService.success(msg, this._translateService.instant('NOTIFY_SUCCESS_TITLE'), opts);
    };
    /**
     * @param {?} msg
     * @param {?=} opts
     * @return {?}
     */
    NotifyService.prototype.warning = /**
     * @param {?} msg
     * @param {?=} opts
     * @return {?}
     */
    function (msg, opts) {
        this._toastrService.warning(msg, this._translateService.instant('NOTIFY_WARNING_TITLE'), opts);
    };
    /**
     * @param {?} msg
     * @param {?=} opts
     * @return {?}
     */
    NotifyService.prototype.error = /**
     * @param {?} msg
     * @param {?=} opts
     * @return {?}
     */
    function (msg, opts) {
        this._toastrService.error(msg, this._translateService.instant('NOTIFY_ERROR_TITLE'), opts);
    };
    NotifyService.decorators = [
        { type: Injectable, args: [{
                    providedIn: HelperModule
                },] },
    ];
    /** @nocollapse */
    NotifyService.ctorParameters = function () { return [
        { type: ToastrService, },
        { type: TranslateService, },
    ]; };
    /** @nocollapse */ NotifyService.ngInjectableDef = i0.defineInjectable({ factory: function NotifyService_Factory() { return new NotifyService(i0.inject(i1.ToastrService), i0.inject(i2.TranslateService)); }, token: NotifyService, providedIn: i3.HelperModule });
    return NotifyService;
}());
export { NotifyService };
function NotifyService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NotifyService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NotifyService.ctorParameters;
    /** @type {?} */
    NotifyService.prototype._toastrService;
    /** @type {?} */
    NotifyService.prototype._translateService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxwZXIvIiwic291cmNlcyI6WyJsaWIvX3V0aWxpdGllcy9ub3RpZnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7O0lBTzlDLHVCQUFvQixjQUE2QixFQUFVLGlCQUFtQztRQUExRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7S0FBSzs7Ozs7O0lBRW5HLDRCQUFJOzs7OztJQUFKLFVBQUssR0FBVyxFQUFFLElBQVM7UUFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNqRzs7Ozs7O0lBRUQsK0JBQU87Ozs7O0lBQVAsVUFBUSxHQUFXLEVBQUUsSUFBUztRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ2hHOzs7Ozs7SUFFRCwrQkFBTzs7Ozs7SUFBUCxVQUFRLEdBQVcsRUFBRSxJQUFTO1FBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDaEc7Ozs7OztJQUVELDZCQUFLOzs7OztJQUFMLFVBQU0sR0FBVyxFQUFFLElBQVM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM1Rjs7Z0JBckJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsWUFBWTtpQkFDekI7Ozs7Z0JBTlEsYUFBYTtnQkFDYixnQkFBZ0I7Ozt3QkFGekI7O1NBUWEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tICduZ3gtdG9hc3RyJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi9fdHJhbnNsYXRlcy90cmFuc2xhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJNb2R1bGUgfSBmcm9tICcuLi9oZWxwZXIubW9kdWxlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBIZWxwZXJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZ5U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdG9hc3RyU2VydmljZTogVG9hc3RyU2VydmljZSwgcHJpdmF0ZSBfdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSkgeyB9XG5cbiAgaW5mbyhtc2c6IHN0cmluZywgb3B0cz86IHt9KSB7XG4gICAgdGhpcy5fdG9hc3RyU2VydmljZS5pbmZvKG1zZywgdGhpcy5fdHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdOT1RJRllfSU5GT1JNQVRJT05fVElUTEUnKSwgb3B0cyk7XG4gIH1cblxuICBzdWNjZXNzKG1zZzogc3RyaW5nLCBvcHRzPzoge30pIHtcbiAgICB0aGlzLl90b2FzdHJTZXJ2aWNlLnN1Y2Nlc3MobXNnLCB0aGlzLl90cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ05PVElGWV9TVUNDRVNTX1RJVExFJyksIG9wdHMpO1xuICB9XG5cbiAgd2FybmluZyhtc2c6IHN0cmluZywgb3B0cz86IHt9KSB7XG4gICAgdGhpcy5fdG9hc3RyU2VydmljZS53YXJuaW5nKG1zZywgdGhpcy5fdHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdOT1RJRllfV0FSTklOR19USVRMRScpLCBvcHRzKTtcbiAgfVxuXG4gIGVycm9yKG1zZzogc3RyaW5nLCBvcHRzPzoge30pIHtcbiAgICB0aGlzLl90b2FzdHJTZXJ2aWNlLmVycm9yKG1zZywgdGhpcy5fdHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdOT1RJRllfRVJST1JfVElUTEUnKSwgb3B0cyk7XG4gIH1cblxufVxuIl19