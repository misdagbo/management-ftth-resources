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
export class ModalService {
    /**
     * @param {?} _ngbModal
     */
    constructor(_ngbModal) {
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
    open(content, size, centered, backdrop, keyboard, data, animation) {
        const /** @type {?} */ _modal = this._ngbModal.open(content, {
            size: size,
            backdrop: backdrop,
            centered: centered,
            keyboard: keyboard
        });
        const /** @type {?} */ _instance = (/** @type {?} */ (_modal))._windowCmptRef.instance;
        setTimeout(function () {
            _instance.windowClass = animation;
        }, 0);
        const /** @type {?} */ _fx = (/** @type {?} */ (_modal))._removeModalElements.bind(_modal);
        (/** @type {?} */ (_modal))._removeModalElements = () => {
            _instance.windowClass = '';
            setTimeout(_fx, 250);
        };
        _modal.componentInstance.data = data;
        return _modal;
    }
}
ModalService.decorators = [
    { type: Injectable, args: [{
                providedIn: HelperModule
            },] },
];
/** @nocollapse */
ModalService.ctorParameters = () => [
    { type: NgbModal, },
];
/** @nocollapse */ ModalService.ngInjectableDef = i0.defineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.inject(i1.NgbModal)); }, token: ModalService, providedIn: i2.HelperModule });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbHBlci8iLCJzb3VyY2VzIjpbImxpYi9fdXRpbGl0aWVzL21vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBZSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQUtoRCxNQUFNOzs7O0lBRUosWUFBb0IsU0FBbUI7UUFBbkIsY0FBUyxHQUFULFNBQVMsQ0FBVTtLQUFLOzs7Ozs7Ozs7OztJQUU1QyxJQUFJLENBQUMsT0FBWSxFQUFFLElBQVMsRUFBRSxRQUFpQixFQUFFLFFBQWEsRUFBRSxRQUFpQixFQUFFLElBQVUsRUFBRSxTQUFlO1FBQzVHLHVCQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQ3hDO1lBQ0UsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUNGLENBQUM7UUFFRix1QkFBTSxTQUFTLEdBQUcsbUJBQUMsTUFBYSxFQUFDLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUMxRCxVQUFVLENBQUM7WUFDVCxTQUFTLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztTQUNuQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRU4sdUJBQU0sR0FBRyxHQUFHLG1CQUFDLE1BQWEsRUFBQyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCxtQkFBQyxNQUFhLEVBQUMsQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLEVBQUU7WUFDMUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDM0IsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN0QixDQUFDO1FBRUYsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFckMsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNmOzs7WUEvQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxZQUFZO2FBQ3pCOzs7O1lBTFEsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZGFsLCBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEhlbHBlck1vZHVsZSB9IGZyb20gJy4uL2hlbHBlci5tb2R1bGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IEhlbHBlck1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nYk1vZGFsOiBOZ2JNb2RhbCkgeyB9XG5cbiAgb3Blbihjb250ZW50OiBhbnksIHNpemU6IGFueSwgY2VudGVyZWQ6IGJvb2xlYW4sIGJhY2tkcm9wOiBhbnksIGtleWJvYXJkOiBib29sZWFuLCBkYXRhPzogYW55LCBhbmltYXRpb24/OiBhbnkpOiBOZ2JNb2RhbFJlZiB7XG4gICAgY29uc3QgX21vZGFsID0gdGhpcy5fbmdiTW9kYWwub3Blbihjb250ZW50LFxuICAgICAge1xuICAgICAgICBzaXplOiBzaXplLFxuICAgICAgICBiYWNrZHJvcDogYmFja2Ryb3AsXG4gICAgICAgIGNlbnRlcmVkOiBjZW50ZXJlZCxcbiAgICAgICAga2V5Ym9hcmQ6IGtleWJvYXJkXG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnN0IF9pbnN0YW5jZSA9IChfbW9kYWwgYXMgYW55KS5fd2luZG93Q21wdFJlZi5pbnN0YW5jZTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIF9pbnN0YW5jZS53aW5kb3dDbGFzcyA9IGFuaW1hdGlvbjtcbiAgICB9LCAwKTtcblxuICAgIGNvbnN0IF9meCA9IChfbW9kYWwgYXMgYW55KS5fcmVtb3ZlTW9kYWxFbGVtZW50cy5iaW5kKF9tb2RhbCk7XG4gICAgKF9tb2RhbCBhcyBhbnkpLl9yZW1vdmVNb2RhbEVsZW1lbnRzID0gKCkgPT4ge1xuICAgICAgX2luc3RhbmNlLndpbmRvd0NsYXNzID0gJyc7XG4gICAgICBzZXRUaW1lb3V0KF9meCwgMjUwKTtcbiAgICB9O1xuXG4gICAgX21vZGFsLmNvbXBvbmVudEluc3RhbmNlLmRhdGEgPSBkYXRhO1xuXG4gICAgcmV0dXJuIF9tb2RhbDtcbiAgfVxuXG59XG4iXX0=