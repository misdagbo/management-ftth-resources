/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { TRANSLATES } from './translates';
export class TranslateService {
    /**
     * @param {?} _translate
     */
    constructor(_translate) {
        this._translate = _translate;
    }
    /**
     * @return {?}
     */
    get currentLang() {
        return this._currentLang;
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    use(lang) {
        this._currentLang = lang;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    translate(key) {
        const /** @type {?} */ translation = key;
        if (this._translate[this.currentLang] && this._translate[this.currentLang][key]) {
            return this._translate[this.currentLang][key];
        }
        return translation;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    instant(key) {
        return this.translate(key);
    }
}
TranslateService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TranslateService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [TRANSLATES,] },] },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxwZXIvIiwic291cmNlcyI6WyJsaWIvX3RyYW5zbGF0ZXMvdHJhbnNsYXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHMUMsTUFBTTs7OztJQUlGLFlBQXdDO1FBQUEsZUFBVSxHQUFWLFVBQVU7S0FBVTs7OztRQUVqRCxXQUFXO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDOzs7Ozs7SUFHdEIsR0FBRyxDQUFDLElBQVk7UUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Ozs7OztJQUdyQixTQUFTLENBQUMsR0FBVztRQUN6Qix1QkFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakQ7UUFDRCxNQUFNLENBQUMsV0FBVyxDQUFDOzs7Ozs7SUFHaEIsT0FBTyxDQUFDLEdBQVc7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7WUF6QmxDLFVBQVU7Ozs7NENBS00sTUFBTSxTQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVFJBTlNMQVRFUyB9IGZyb20gJy4vdHJhbnNsYXRlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIF9jdXJyZW50TGFuZzogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoVFJBTlNMQVRFUykgcHJpdmF0ZSBfdHJhbnNsYXRlOiBhbnkpIHsgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY3VycmVudExhbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRMYW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1c2UobGFuZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudExhbmcgPSBsYW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdHJhbnNsYXRlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGlvbiA9IGtleTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3RyYW5zbGF0ZVt0aGlzLmN1cnJlbnRMYW5nXSAmJiB0aGlzLl90cmFuc2xhdGVbdGhpcy5jdXJyZW50TGFuZ11ba2V5XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNsYXRlW3RoaXMuY3VycmVudExhbmddW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cmFuc2xhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5zdGFudChrZXk6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZShrZXkpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==