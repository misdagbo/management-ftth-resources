/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GlobalEnum } from 'helper';
import * as $ from 'jquery';
export class RequestInterceptor {
    constructor() { }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        // Get the auth token from the service.
        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        const /** @type {?} */ _wrapper = request.clone({
            setHeaders: {
                'Content-Type': request.headers.get('Content-Type') || 'application/json',
                'Show-Info-Message': request.headers.get('Show-Info-Message') || GlobalEnum._SHOW_INFO_MESSAGE,
                'Show-Loader': request.headers.get('Show-Loader') || GlobalEnum._SHOW_LOADER,
                'Show-Error-Message': request.headers.get('Show-Error-Message') || GlobalEnum._SHOW_ERROR_MESSAGE
            }
        });
        if (_wrapper.headers.get('Show-Loader')) {
            const /** @type {?} */ body = $('body');
            // $(body).addClass('m-page--loading-non-block');
            console.log('body: ', body);
        }
        // send cloned request with header to the next handler.
        return next.handle(_wrapper);
    }
}
RequestInterceptor.decorators = [
    { type: Injectable },
];
/** @nocollapse */
RequestInterceptor.ctorParameters = () => [];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dlYi8iLCJzb3VyY2VzIjpbImxpYi9faW50ZXJjZXB0b3JzL3JlcXVlc3QtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNwQyxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUc1QixNQUFNO0lBRUYsaUJBQWlCOzs7Ozs7SUFFakIsU0FBUyxDQUFDLE9BQXlCLEVBQUUsSUFBaUI7Ozs7UUFLbEQsdUJBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDM0IsVUFBVSxFQUFFO2dCQUNSLGNBQWMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxrQkFBa0I7Z0JBQ3pFLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLElBQUksVUFBVSxDQUFDLGtCQUFrQjtnQkFDOUYsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxZQUFZO2dCQUM1RSxvQkFBb0IsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxtQkFBbUI7YUFDcEc7U0FDSixDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsdUJBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7WUFFdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDL0I7O1FBR0QsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDaEM7OztZQTNCSixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yLCBIdHRwSGFuZGxlciwgSHR0cFJlcXVlc3QsIEh0dHBFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgR2xvYmFsRW51bSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0SW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICAgICAgLy8gR2V0IHRoZSBhdXRoIHRva2VuIGZyb20gdGhlIHNlcnZpY2UuXG5cbiAgICAgICAgLy8gQ2xvbmUgdGhlIHJlcXVlc3QgYW5kIHJlcGxhY2UgdGhlIG9yaWdpbmFsIGhlYWRlcnMgd2l0aFxuICAgICAgICAvLyBjbG9uZWQgaGVhZGVycywgdXBkYXRlZCB3aXRoIHRoZSBhdXRob3JpemF0aW9uLlxuICAgICAgICBjb25zdCBfd3JhcHBlciA9IHJlcXVlc3QuY2xvbmUoe1xuICAgICAgICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSB8fCAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ1Nob3ctSW5mby1NZXNzYWdlJzogcmVxdWVzdC5oZWFkZXJzLmdldCgnU2hvdy1JbmZvLU1lc3NhZ2UnKSB8fCBHbG9iYWxFbnVtLl9TSE9XX0lORk9fTUVTU0FHRSxcbiAgICAgICAgICAgICAgICAnU2hvdy1Mb2FkZXInOiByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdTaG93LUxvYWRlcicpIHx8IEdsb2JhbEVudW0uX1NIT1dfTE9BREVSLFxuICAgICAgICAgICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdTaG93LUVycm9yLU1lc3NhZ2UnKSB8fCBHbG9iYWxFbnVtLl9TSE9XX0VSUk9SX01FU1NBR0VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKF93cmFwcGVyLmhlYWRlcnMuZ2V0KCdTaG93LUxvYWRlcicpKSB7XG4gICAgICAgICAgICBjb25zdCBib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAgICAgLy8gJChib2R5KS5hZGRDbGFzcygnbS1wYWdlLS1sb2FkaW5nLW5vbi1ibG9jaycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2JvZHk6ICcsIGJvZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2VuZCBjbG9uZWQgcmVxdWVzdCB3aXRoIGhlYWRlciB0byB0aGUgbmV4dCBoYW5kbGVyLlxuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUoX3dyYXBwZXIpO1xuICAgIH1cbn1cbiJdfQ==