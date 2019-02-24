/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
import { TranslateService } from './translate.service';
var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(_translateService) {
        this._translateService = _translateService;
    }
    /**
     * @param {?} value
     * @param {?} args
     * @return {?}
     */
    TranslatePipe.prototype.transform = /**
     * @param {?} value
     * @param {?} args
     * @return {?}
     */
    function (value, args) {
        if (!value) {
            return;
        }
        return this._translateService.instant(value);
    };
    TranslatePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'translate',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    TranslatePipe.ctorParameters = function () { return [
        { type: TranslateService, },
    ]; };
    return TranslatePipe;
}());
export { TranslatePipe };
function TranslatePipe_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TranslatePipe.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TranslatePipe.ctorParameters;
    /** @type {?} */
    TranslatePipe.prototype._translateService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxwZXIvIiwic291cmNlcyI6WyJsaWIvX3RyYW5zbGF0ZXMvdHJhbnNsYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztJQVFuRCx1QkFBb0IsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7S0FBSzs7Ozs7O0lBRTVELGlDQUFTOzs7OztJQUFULFVBQVUsS0FBYSxFQUFFLElBQVc7UUFDaEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDO1NBQUU7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEQ7O2dCQVhKLElBQUksU0FBQztvQkFDRixJQUFJLEVBQUUsV0FBVztvQkFDakIsSUFBSSxFQUFFLEtBQUs7aUJBQ2Q7Ozs7Z0JBTFEsZ0JBQWdCOzt3QkFEekI7O1NBT2EsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRlLnNlcnZpY2UnO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ3RyYW5zbGF0ZScsXHJcbiAgICBwdXJlOiBmYWxzZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UpIHsgfVxyXG5cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkgeyByZXR1cm47IH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNsYXRlU2VydmljZS5pbnN0YW50KHZhbHVlKTtcclxuICAgIH1cclxufVxyXG4iXX0=