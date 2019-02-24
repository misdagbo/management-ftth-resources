/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GlobalEnum } from 'helper';
import * as $ from 'jquery';
var RequestInterceptor = /** @class */ (function () {
    function RequestInterceptor() {
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    RequestInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        // Get the auth token from the service.
        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        var /** @type {?} */ _wrapper = request.clone({
            setHeaders: {
                'Content-Type': request.headers.get('Content-Type') || 'application/json',
                'Show-Info-Message': request.headers.get('Show-Info-Message') || GlobalEnum._SHOW_INFO_MESSAGE,
                'Show-Loader': request.headers.get('Show-Loader') || GlobalEnum._SHOW_LOADER,
                'Show-Error-Message': request.headers.get('Show-Error-Message') || GlobalEnum._SHOW_ERROR_MESSAGE
            }
        });
        if (_wrapper.headers.get('Show-Loader')) {
            var /** @type {?} */ body = $('body');
            // $(body).addClass('m-page--loading-non-block');
            console.log('body: ', body);
        }
        // send cloned request with header to the next handler.
        return next.handle(_wrapper);
    };
    RequestInterceptor.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    RequestInterceptor.ctorParameters = function () { return []; };
    return RequestInterceptor;
}());
export { RequestInterceptor };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dlYi8iLCJzb3VyY2VzIjpbImxpYi9faW50ZXJjZXB0b3JzL3JlcXVlc3QtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNwQyxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7SUFLeEI7S0FBaUI7Ozs7OztJQUVqQixzQ0FBUzs7Ozs7SUFBVCxVQUFVLE9BQXlCLEVBQUUsSUFBaUI7Ozs7UUFLbEQscUJBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDM0IsVUFBVSxFQUFFO2dCQUNSLGNBQWMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxrQkFBa0I7Z0JBQ3pFLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLElBQUksVUFBVSxDQUFDLGtCQUFrQjtnQkFDOUYsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxZQUFZO2dCQUM1RSxvQkFBb0IsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxtQkFBbUI7YUFDcEc7U0FDSixDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMscUJBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7WUFFdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDL0I7O1FBR0QsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDaEM7O2dCQTNCSixVQUFVOzs7OzZCQU5YOztTQU9hLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvciwgSHR0cEhhbmRsZXIsIEh0dHBSZXF1ZXN0LCBIdHRwRXZlbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEdsb2JhbEVudW0gfSBmcm9tICdoZWxwZXInO1xuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVxdWVzdEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgICAgIC8vIEdldCB0aGUgYXV0aCB0b2tlbiBmcm9tIHRoZSBzZXJ2aWNlLlxuXG4gICAgICAgIC8vIENsb25lIHRoZSByZXF1ZXN0IGFuZCByZXBsYWNlIHRoZSBvcmlnaW5hbCBoZWFkZXJzIHdpdGhcbiAgICAgICAgLy8gY2xvbmVkIGhlYWRlcnMsIHVwZGF0ZWQgd2l0aCB0aGUgYXV0aG9yaXphdGlvbi5cbiAgICAgICAgY29uc3QgX3dyYXBwZXIgPSByZXF1ZXN0LmNsb25lKHtcbiAgICAgICAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogcmVxdWVzdC5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykgfHwgJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdTaG93LUluZm8tTWVzc2FnZSc6IHJlcXVlc3QuaGVhZGVycy5nZXQoJ1Nob3ctSW5mby1NZXNzYWdlJykgfHwgR2xvYmFsRW51bS5fU0hPV19JTkZPX01FU1NBR0UsXG4gICAgICAgICAgICAgICAgJ1Nob3ctTG9hZGVyJzogcmVxdWVzdC5oZWFkZXJzLmdldCgnU2hvdy1Mb2FkZXInKSB8fCBHbG9iYWxFbnVtLl9TSE9XX0xPQURFUixcbiAgICAgICAgICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogcmVxdWVzdC5oZWFkZXJzLmdldCgnU2hvdy1FcnJvci1NZXNzYWdlJykgfHwgR2xvYmFsRW51bS5fU0hPV19FUlJPUl9NRVNTQUdFXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChfd3JhcHBlci5oZWFkZXJzLmdldCgnU2hvdy1Mb2FkZXInKSkge1xuICAgICAgICAgICAgY29uc3QgYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgIC8vICQoYm9keSkuYWRkQ2xhc3MoJ20tcGFnZS0tbG9hZGluZy1ub24tYmxvY2snKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdib2R5OiAnLCBib2R5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNlbmQgY2xvbmVkIHJlcXVlc3Qgd2l0aCBoZWFkZXIgdG8gdGhlIG5leHQgaGFuZGxlci5cbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKF93cmFwcGVyKTtcbiAgICB9XG59XG4iXX0=