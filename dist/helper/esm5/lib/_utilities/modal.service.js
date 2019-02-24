/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HelperModule } from '../helper.module';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap/modal/modal";
import * as i2 from "../helper.module";
var ModalService = /** @class */ (function () {
    function ModalService(_ngbModal) {
        this._ngbModal = _ngbModal;
    }
    /**
     * @param {?} content
     * @param {?} size
     * @param {?} centered
     * @param {?} backdrop
     * @param {?} keyboard
     * @param {?=} data
     * @param {?=} animation
     * @return {?}
     */
    ModalService.prototype.open = /**
     * @param {?} content
     * @param {?} size
     * @param {?} centered
     * @param {?} backdrop
     * @param {?} keyboard
     * @param {?=} data
     * @param {?=} animation
     * @return {?}
     */
    function (content, size, centered, backdrop, keyboard, data, animation) {
        var /** @type {?} */ _modal = this._ngbModal.open(content, {
            size: size,
            backdrop: backdrop,
            centered: centered,
            keyboard: keyboard
        });
        var /** @type {?} */ _instance = (/** @type {?} */ (_modal))._windowCmptRef.instance;
        setTimeout(function () {
            _instance.windowClass = animation;
        }, 0);
        var /** @type {?} */ _fx = (/** @type {?} */ (_modal))._removeModalElements.bind(_modal);
        (/** @type {?} */ (_modal))._removeModalElements = function () {
            _instance.windowClass = '';
            setTimeout(_fx, 250);
        };
        _modal.componentInstance.data = data;
        return _modal;
    };
    ModalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: HelperModule
                },] },
    ];
    /** @nocollapse */
    ModalService.ctorParameters = function () { return [
        { type: NgbModal, },
    ]; };
    /** @nocollapse */ ModalService.ngInjectableDef = i0.defineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.inject(i1.NgbModal)); }, token: ModalService, providedIn: i2.HelperModule });
    return ModalService;
}());
export { ModalService };
function ModalService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ModalService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ModalService.ctorParameters;
    /** @type {?} */
    ModalService.prototype._ngbModal;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbHBlci8iLCJzb3VyY2VzIjpbImxpYi9fdXRpbGl0aWVzL21vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBZSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7SUFPOUMsc0JBQW9CLFNBQW1CO1FBQW5CLGNBQVMsR0FBVCxTQUFTLENBQVU7S0FBSzs7Ozs7Ozs7Ozs7SUFFNUMsMkJBQUk7Ozs7Ozs7Ozs7SUFBSixVQUFLLE9BQVksRUFBRSxJQUFTLEVBQUUsUUFBaUIsRUFBRSxRQUFhLEVBQUUsUUFBaUIsRUFBRSxJQUFVLEVBQUUsU0FBZTtRQUM1RyxxQkFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUN4QztZQUNFLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FDRixDQUFDO1FBRUYscUJBQU0sU0FBUyxHQUFHLG1CQUFDLE1BQWEsRUFBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7UUFDMUQsVUFBVSxDQUFDO1lBQ1QsU0FBUyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7U0FDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVOLHFCQUFNLEdBQUcsR0FBRyxtQkFBQyxNQUFhLEVBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUQsbUJBQUMsTUFBYSxFQUFDLENBQUMsb0JBQW9CLEdBQUc7WUFDckMsU0FBUyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDM0IsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN0QixDQUFDO1FBRUYsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFckMsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNmOztnQkEvQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxZQUFZO2lCQUN6Qjs7OztnQkFMUSxRQUFROzs7dUJBRGpCOztTQU9hLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbCwgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBIZWxwZXJNb2R1bGUgfSBmcm9tICcuLi9oZWxwZXIubW9kdWxlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBIZWxwZXJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZ2JNb2RhbDogTmdiTW9kYWwpIHsgfVxuXG4gIG9wZW4oY29udGVudDogYW55LCBzaXplOiBhbnksIGNlbnRlcmVkOiBib29sZWFuLCBiYWNrZHJvcDogYW55LCBrZXlib2FyZDogYm9vbGVhbiwgZGF0YT86IGFueSwgYW5pbWF0aW9uPzogYW55KTogTmdiTW9kYWxSZWYge1xuICAgIGNvbnN0IF9tb2RhbCA9IHRoaXMuX25nYk1vZGFsLm9wZW4oY29udGVudCxcbiAgICAgIHtcbiAgICAgICAgc2l6ZTogc2l6ZSxcbiAgICAgICAgYmFja2Ryb3A6IGJhY2tkcm9wLFxuICAgICAgICBjZW50ZXJlZDogY2VudGVyZWQsXG4gICAgICAgIGtleWJvYXJkOiBrZXlib2FyZFxuICAgICAgfVxuICAgICk7XG5cbiAgICBjb25zdCBfaW5zdGFuY2UgPSAoX21vZGFsIGFzIGFueSkuX3dpbmRvd0NtcHRSZWYuaW5zdGFuY2U7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBfaW5zdGFuY2Uud2luZG93Q2xhc3MgPSBhbmltYXRpb247XG4gICAgfSwgMCk7XG5cbiAgICBjb25zdCBfZnggPSAoX21vZGFsIGFzIGFueSkuX3JlbW92ZU1vZGFsRWxlbWVudHMuYmluZChfbW9kYWwpO1xuICAgIChfbW9kYWwgYXMgYW55KS5fcmVtb3ZlTW9kYWxFbGVtZW50cyA9ICgpID0+IHtcbiAgICAgIF9pbnN0YW5jZS53aW5kb3dDbGFzcyA9ICcnO1xuICAgICAgc2V0VGltZW91dChfZngsIDI1MCk7XG4gICAgfTtcblxuICAgIF9tb2RhbC5jb21wb25lbnRJbnN0YW5jZS5kYXRhID0gZGF0YTtcblxuICAgIHJldHVybiBfbW9kYWw7XG4gIH1cblxufVxuIl19