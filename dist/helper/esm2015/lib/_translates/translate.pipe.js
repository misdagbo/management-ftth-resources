/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
import { TranslateService } from './translate.service';
export class TranslatePipe {
    /**
     * @param {?} _translateService
     */
    constructor(_translateService) {
        this._translateService = _translateService;
    }
    /**
     * @param {?} value
     * @param {?} args
     * @return {?}
     */
    transform(value, args) {
        if (!value) {
            return;
        }
        return this._translateService.instant(value);
    }
}
TranslatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'translate',
                pure: false
            },] },
];
/** @nocollapse */
TranslatePipe.ctorParameters = () => [
    { type: TranslateService, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxwZXIvIiwic291cmNlcyI6WyJsaWIvX3RyYW5zbGF0ZXMvdHJhbnNsYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBTXZELE1BQU07Ozs7SUFFRixZQUFvQixpQkFBbUM7UUFBbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtLQUFLOzs7Ozs7SUFFNUQsU0FBUyxDQUFDLEtBQWEsRUFBRSxJQUFXO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQztTQUFFO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2hEOzs7WUFYSixJQUFJLFNBQUM7Z0JBQ0YsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLElBQUksRUFBRSxLQUFLO2FBQ2Q7Ozs7WUFMUSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RyYW5zbGF0ZS5zZXJ2aWNlJztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICd0cmFuc2xhdGUnLFxyXG4gICAgcHVyZTogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIGlmICghdmFsdWUpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIl19