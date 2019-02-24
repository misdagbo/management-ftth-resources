/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
var ResponseInterceptor = /** @class */ (function () {
    function ResponseInterceptor() {
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    ResponseInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        // extend server response observable with logging
        return next.handle(request)
            .pipe(tap(function (event) {
            if (event instanceof HttpResponse) {
                if (request.headers.get('Show-Error-Message') || request.headers.get('Show-Info-Message')) {
                    console.log('Show-Error-Message: ', request.headers.get('Show-Error-Message'));
                    console.log('Show-Info-Message: ', request.headers.get('Show-Info-Message'));
                }
            }
        }, function (error) {
            if (error instanceof HttpErrorResponse) {
                console.log('error: ', error.status);
            }
        }));
    };
    ResponseInterceptor.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ResponseInterceptor.ctorParameters = function () { return []; };
    return ResponseInterceptor;
}());
export { ResponseInterceptor };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UtaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93ZWIvIiwic291cmNlcyI6WyJsaWIvX2ludGVyY2VwdG9ycy9yZXNwb25zZS1pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQXdELFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTdILE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFLakM7S0FBaUI7Ozs7OztJQUVqQix1Q0FBUzs7Ozs7SUFBVCxVQUFVLE9BQXlCLEVBQUUsSUFBaUI7O1FBR2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUN0QixJQUFJLENBQ0QsR0FBRyxDQUNDLFVBQUMsS0FBcUI7WUFDbEIsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO29CQUMvRSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztpQkFDaEY7YUFDSjtTQUNKLEVBQ0QsVUFBQyxLQUFLO1lBQ0YsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLGlCQUFpQixDQUFDLENBQUMsQ0FBQztnQkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3hDO1NBQ0osQ0FDSixDQUNKLENBQUM7S0FDVDs7Z0JBMUJKLFVBQVU7Ozs7OEJBTFg7O1NBTWEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yLCBIdHRwSGFuZGxlciwgSHR0cFJlcXVlc3QsIEh0dHBFdmVudCwgSHR0cFJlc3BvbnNlLCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuXG4gICAgICAgIC8vIGV4dGVuZCBzZXJ2ZXIgcmVzcG9uc2Ugb2JzZXJ2YWJsZSB3aXRoIGxvZ2dpbmdcbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICB0YXAoXG4gICAgICAgICAgICAgICAgICAgIChldmVudDogSHR0cEV2ZW50PGFueT4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdTaG93LUVycm9yLU1lc3NhZ2UnKSB8fCByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdTaG93LUluZm8tTWVzc2FnZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTaG93LUVycm9yLU1lc3NhZ2U6ICcsIHJlcXVlc3QuaGVhZGVycy5nZXQoJ1Nob3ctRXJyb3ItTWVzc2FnZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Nob3ctSW5mby1NZXNzYWdlOiAnLCByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdTaG93LUluZm8tTWVzc2FnZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6ICcsIGVycm9yLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==