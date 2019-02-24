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
export class NotifyService {
    /**
     * @param {?} _toastrService
     * @param {?} _translateService
     */
    constructor(_toastrService, _translateService) {
        this._toastrService = _toastrService;
        this._translateService = _translateService;
    }
    /**
     * @param {?} msg
     * @param {?=} opts
     * @return {?}
     */
    info(msg, opts) {
        this._toastrService.info(msg, this._translateService.instant('NOTIFY_INFORMATION_TITLE'), opts);
    }
    /**
     * @param {?} msg
     * @param {?=} opts
     * @return {?}
     */
    success(msg, opts) {
        this._toastrService.success(msg, this._translateService.instant('NOTIFY_SUCCESS_TITLE'), opts);
    }
    /**
     * @param {?} msg
     * @param {?=} opts
     * @return {?}
     */
    warning(msg, opts) {
        this._toastrService.warning(msg, this._translateService.instant('NOTIFY_WARNING_TITLE'), opts);
    }
    /**
     * @param {?} msg
     * @param {?=} opts
     * @return {?}
     */
    error(msg, opts) {
        this._toastrService.error(msg, this._translateService.instant('NOTIFY_ERROR_TITLE'), opts);
    }
}
NotifyService.decorators = [
    { type: Injectable, args: [{
                providedIn: HelperModule
            },] },
];
/** @nocollapse */
NotifyService.ctorParameters = () => [
    { type: ToastrService, },
    { type: TranslateService, },
];
/** @nocollapse */ NotifyService.ngInjectableDef = i0.defineInjectable({ factory: function NotifyService_Factory() { return new NotifyService(i0.inject(i1.ToastrService), i0.inject(i2.TranslateService)); }, token: NotifyService, providedIn: i3.HelperModule });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxwZXIvIiwic291cmNlcyI6WyJsaWIvX3V0aWxpdGllcy9ub3RpZnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFLaEQsTUFBTTs7Ozs7SUFFSixZQUFvQixjQUE2QixFQUFVLGlCQUFtQztRQUExRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7S0FBSzs7Ozs7O0lBRW5HLElBQUksQ0FBQyxHQUFXLEVBQUUsSUFBUztRQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ2pHOzs7Ozs7SUFFRCxPQUFPLENBQUMsR0FBVyxFQUFFLElBQVM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNoRzs7Ozs7O0lBRUQsT0FBTyxDQUFDLEdBQVcsRUFBRSxJQUFTO1FBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDaEc7Ozs7OztJQUVELEtBQUssQ0FBQyxHQUFXLEVBQUUsSUFBUztRQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzVGOzs7WUFyQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxZQUFZO2FBQ3pCOzs7O1lBTlEsYUFBYTtZQUNiLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tICduZ3gtdG9hc3RyJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi9fdHJhbnNsYXRlcy90cmFuc2xhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJNb2R1bGUgfSBmcm9tICcuLi9oZWxwZXIubW9kdWxlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBIZWxwZXJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZ5U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdG9hc3RyU2VydmljZTogVG9hc3RyU2VydmljZSwgcHJpdmF0ZSBfdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSkgeyB9XG5cbiAgaW5mbyhtc2c6IHN0cmluZywgb3B0cz86IHt9KSB7XG4gICAgdGhpcy5fdG9hc3RyU2VydmljZS5pbmZvKG1zZywgdGhpcy5fdHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdOT1RJRllfSU5GT1JNQVRJT05fVElUTEUnKSwgb3B0cyk7XG4gIH1cblxuICBzdWNjZXNzKG1zZzogc3RyaW5nLCBvcHRzPzoge30pIHtcbiAgICB0aGlzLl90b2FzdHJTZXJ2aWNlLnN1Y2Nlc3MobXNnLCB0aGlzLl90cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ05PVElGWV9TVUNDRVNTX1RJVExFJyksIG9wdHMpO1xuICB9XG5cbiAgd2FybmluZyhtc2c6IHN0cmluZywgb3B0cz86IHt9KSB7XG4gICAgdGhpcy5fdG9hc3RyU2VydmljZS53YXJuaW5nKG1zZywgdGhpcy5fdHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdOT1RJRllfV0FSTklOR19USVRMRScpLCBvcHRzKTtcbiAgfVxuXG4gIGVycm9yKG1zZzogc3RyaW5nLCBvcHRzPzoge30pIHtcbiAgICB0aGlzLl90b2FzdHJTZXJ2aWNlLmVycm9yKG1zZywgdGhpcy5fdHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdOT1RJRllfRVJST1JfVElUTEUnKSwgb3B0cyk7XG4gIH1cblxufVxuIl19