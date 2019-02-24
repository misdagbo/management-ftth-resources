/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { TRANSLATES } from './translates';
var TranslateService = /** @class */ (function () {
    function TranslateService(_translate) {
        this._translate = _translate;
    }
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentLang;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.use = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        this._currentLang = lang;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    TranslateService.prototype.translate = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var /** @type {?} */ translation = key;
        if (this._translate[this.currentLang] && this._translate[this.currentLang][key]) {
            return this._translate[this.currentLang][key];
        }
        return translation;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    TranslateService.prototype.instant = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.translate(key);
    };
    TranslateService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TranslateService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [TRANSLATES,] },] },
    ]; };
    return TranslateService;
}());
export { TranslateService };
function TranslateService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TranslateService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TranslateService.ctorParameters;
    /** @type {?} */
    TranslateService.prototype._currentLang;
    /** @type {?} */
    TranslateService.prototype._translate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxwZXIvIiwic291cmNlcyI6WyJsaWIvX3RyYW5zbGF0ZXMvdHJhbnNsYXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7O0lBT3RDLDBCQUF3QztRQUFBLGVBQVUsR0FBVixVQUFVO0tBQVU7MEJBRWpELHlDQUFXOzs7OztZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzs7Ozs7Ozs7O0lBR3RCLDhCQUFHOzs7O2NBQUMsSUFBWTtRQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzs7Ozs7O0lBR3JCLG9DQUFTOzs7O2NBQUMsR0FBVztRQUN6QixxQkFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakQ7UUFDRCxNQUFNLENBQUMsV0FBVyxDQUFDOzs7Ozs7SUFHaEIsa0NBQU87Ozs7Y0FBQyxHQUFXO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Z0JBekJsQyxVQUFVOzs7O2dEQUtNLE1BQU0sU0FBQyxVQUFVOzsyQkFSbEM7O1NBSWEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRSQU5TTEFURVMgfSBmcm9tICcuL3RyYW5zbGF0ZXMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfY3VycmVudExhbmc6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KFRSQU5TTEFURVMpIHByaXZhdGUgX3RyYW5zbGF0ZTogYW55KSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRMYW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50TGFuZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXNlKGxhbmc6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRMYW5nID0gbGFuZztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRyYW5zbGF0ZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRpb24gPSBrZXk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl90cmFuc2xhdGVbdGhpcy5jdXJyZW50TGFuZ10gJiYgdGhpcy5fdHJhbnNsYXRlW3RoaXMuY3VycmVudExhbmddW2tleV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zbGF0ZVt0aGlzLmN1cnJlbnRMYW5nXVtrZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJhbnNsYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluc3RhbnQoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGUoa2V5KTtcclxuICAgIH1cclxufVxyXG4iXX0=