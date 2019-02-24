/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
var UpperCaseDirective = /** @class */ (function () {
    function UpperCaseDirective() {
        this.ngModelChange = new EventEmitter();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    UpperCaseDirective.prototype.onModelChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.ngModel = $event.target.value.toUpperCase();
        this.ngModelChange.emit(this.ngModel);
    };
    UpperCaseDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngModel][upper-case]'
                },] },
    ];
    /** @nocollapse */
    UpperCaseDirective.ctorParameters = function () { return []; };
    UpperCaseDirective.propDecorators = {
        "ngModelChange": [{ type: Output },],
        "onModelChange": [{ type: HostListener, args: ['input', ['$event'],] },],
    };
    return UpperCaseDirective;
}());
export { UpperCaseDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBwZXItY2FzZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxwZXIvIiwic291cmNlcyI6WyJsaWIvX2RpcmVjdGl2ZXMvdXBwZXItY2FzZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBUzVFOzZCQUg2QyxJQUFJLFlBQVksRUFBRTtLQUc5Qzs7Ozs7SUFFa0IsMENBQWE7Ozs7Y0FBQyxNQUFNO1FBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Z0JBWnpDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2lCQUNsQzs7Ozs7a0NBR0UsTUFBTTtrQ0FLTixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs2QkFYbkM7O1NBSWEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdNb2RlbF1bdXBwZXItY2FzZV0nXG59KVxuZXhwb3J0IGNsYXNzIFVwcGVyQ2FzZURpcmVjdGl2ZSB7XG5cbiAgQE91dHB1dCgpIG5nTW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBuZ01vZGVsOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pIG9uTW9kZWxDaGFuZ2UoJGV2ZW50KSB7XG4gICAgdGhpcy5uZ01vZGVsID0gJGV2ZW50LnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgIHRoaXMubmdNb2RlbENoYW5nZS5lbWl0KHRoaXMubmdNb2RlbCk7XG4gIH1cblxufVxuIl19