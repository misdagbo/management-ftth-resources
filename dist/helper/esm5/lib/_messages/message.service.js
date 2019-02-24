/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { MESSAGES } from './messages';
import { TranslateService } from '../_translates/translate.service';
import { HelperModule } from '../helper.module';
import * as i0 from "@angular/core";
import * as i1 from "./messages";
import * as i2 from "../_translates/translate.service";
import * as i3 from "../helper.module";
var MessageService = /** @class */ (function () {
    function MessageService(_message, _translate) {
        this._message = _message;
        this._translate = _translate;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    MessageService.prototype.message = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var /** @type {?} */ message = key;
        if (this._message[this._translate.currentLang] && this._message[this._translate.currentLang][key]) {
            return this._message[this._translate.currentLang][key];
        }
        return message;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    MessageService.prototype.instant = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.message(key);
    };
    MessageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: HelperModule
                },] },
    ];
    /** @nocollapse */
    MessageService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MESSAGES,] },] },
        { type: TranslateService, },
    ]; };
    /** @nocollapse */ MessageService.ngInjectableDef = i0.defineInjectable({ factory: function MessageService_Factory() { return new MessageService(i0.inject(i1.MESSAGES), i0.inject(i2.TranslateService)); }, token: MessageService, providedIn: i3.HelperModule });
    return MessageService;
}());
export { MessageService };
function MessageService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MessageService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MessageService.ctorParameters;
    /** @type {?} */
    MessageService.prototype._message;
    /** @type {?} */
    MessageService.prototype._translate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVscGVyLyIsInNvdXJjZXMiOlsibGliL19tZXNzYWdlcy9tZXNzYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7SUFPOUMsd0JBQXNDLFVBQXVCLFVBQTRCO1FBQW5ELGFBQVEsR0FBUixRQUFRO1FBQWUsZUFBVSxHQUFWLFVBQVUsQ0FBa0I7S0FBSzs7Ozs7SUFFdEYsZ0NBQU87Ozs7Y0FBQyxHQUFXO1FBQ3pCLHFCQUFNLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFFcEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4RDtRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUM7Ozs7OztJQUdWLGdDQUFPOzs7O2NBQUMsR0FBVztRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7O2dCQWpCNUIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxZQUFZO2lCQUN6Qjs7OztnREFHYyxNQUFNLFNBQUMsUUFBUTtnQkFSckIsZ0JBQWdCOzs7eUJBRnpCOztTQVFhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1FU1NBR0VTIH0gZnJvbSAnLi9tZXNzYWdlcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vX3RyYW5zbGF0ZXMvdHJhbnNsYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVyTW9kdWxlIH0gZnJvbSAnLi4vaGVscGVyLm1vZHVsZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogSGVscGVyTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1FU1NBR0VTKSBwcml2YXRlIF9tZXNzYWdlOiBhbnksIHByaXZhdGUgX3RyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSkgeyB9XG5cbiAgcHJpdmF0ZSBtZXNzYWdlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBtZXNzYWdlID0ga2V5O1xuXG4gICAgaWYgKHRoaXMuX21lc3NhZ2VbdGhpcy5fdHJhbnNsYXRlLmN1cnJlbnRMYW5nXSAmJiB0aGlzLl9tZXNzYWdlW3RoaXMuX3RyYW5zbGF0ZS5jdXJyZW50TGFuZ11ba2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VbdGhpcy5fdHJhbnNsYXRlLmN1cnJlbnRMYW5nXVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfVxuXG4gIHB1YmxpYyBpbnN0YW50KGtleTogc3RyaW5nLCApIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlKGtleSk7XG4gIH1cblxufVxuIl19