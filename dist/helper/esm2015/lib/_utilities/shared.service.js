/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HelperModule } from '../helper.module';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../helper.module";
export class SharedService {
    constructor() {
        this.subject = new Subject();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set(value) {
        this.subject.next(value);
    }
    /**
     * @return {?}
     */
    clear() {
        this.subject.next();
    }
    /**
     * @return {?}
     */
    get() {
        return this.subject.asObservable();
    }
}
SharedService.decorators = [
    { type: Injectable, args: [{
                providedIn: HelperModule
            },] },
];
/** @nocollapse */ SharedService.ngInjectableDef = i0.defineInjectable({ factory: function SharedService_Factory() { return new SharedService(); }, token: SharedService, providedIn: i1.HelperModule });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxwZXIvIiwic291cmNlcyI6WyJsaWIvX3V0aWxpdGllcy9zaGFyZWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBSzNDLE1BQU07O3VCQUVnQixJQUFJLE9BQU8sRUFBTzs7Ozs7O0lBRXBDLEdBQUcsQ0FBQyxLQUFVO1FBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDNUI7Ozs7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUN2Qjs7OztJQUVELEdBQUc7UUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN0Qzs7O1lBakJKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsWUFBWTthQUMzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlbHBlck1vZHVsZSB9IGZyb20gJy4uL2hlbHBlci5tb2R1bGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogSGVscGVyTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZFNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gICAgc2V0KHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5zdWJqZWN0Lm5leHQodmFsdWUpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICAgIH1cblxuICAgIGdldCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxufVxuIl19