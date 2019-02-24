/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
export class UpperCaseDirective {
    constructor() {
        this.ngModelChange = new EventEmitter();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onModelChange($event) {
        this.ngModel = $event.target.value.toUpperCase();
        this.ngModelChange.emit(this.ngModel);
    }
}
UpperCaseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngModel][upper-case]'
            },] },
];
/** @nocollapse */
UpperCaseDirective.ctorParameters = () => [];
UpperCaseDirective.propDecorators = {
    "ngModelChange": [{ type: Output },],
    "onModelChange": [{ type: HostListener, args: ['input', ['$event'],] },],
};
function UpperCaseDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    UpperCaseDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    UpperCaseDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    UpperCaseDirective.propDecorators;
    /** @type {?} */
    UpperCaseDirective.prototype.ngModelChange;
    /** @type {?} */
    UpperCaseDirective.prototype.ngModel;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBwZXItY2FzZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxwZXIvIiwic291cmNlcyI6WyJsaWIvX2RpcmVjdGl2ZXMvdXBwZXItY2FzZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJOUUsTUFBTTtJQUtKOzZCQUg2QyxJQUFJLFlBQVksRUFBRTtLQUc5Qzs7Ozs7SUFFa0IsYUFBYSxDQUFDLE1BQU07UUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7WUFaekMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7YUFDbEM7Ozs7OzhCQUdFLE1BQU07OEJBS04sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nTW9kZWxdW3VwcGVyLWNhc2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBVcHBlckNhc2VEaXJlY3RpdmUge1xuXG4gIEBPdXRwdXQoKSBuZ01vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgbmdNb2RlbDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKSBvbk1vZGVsQ2hhbmdlKCRldmVudCkge1xuICAgIHRoaXMubmdNb2RlbCA9ICRldmVudC50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICB0aGlzLm5nTW9kZWxDaGFuZ2UuZW1pdCh0aGlzLm5nTW9kZWwpO1xuICB9XG5cbn1cbiJdfQ==