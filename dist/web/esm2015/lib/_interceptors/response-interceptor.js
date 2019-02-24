/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
export class ResponseInterceptor {
    constructor() { }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        // extend server response observable with logging
        return next.handle(request)
            .pipe(tap((event) => {
            if (event instanceof HttpResponse) {
                if (request.headers.get('Show-Error-Message') || request.headers.get('Show-Info-Message')) {
                    console.log('Show-Error-Message: ', request.headers.get('Show-Error-Message'));
                    console.log('Show-Info-Message: ', request.headers.get('Show-Info-Message'));
                }
            }
        }, (error) => {
            if (error instanceof HttpErrorResponse) {
                console.log('error: ', error.status);
            }
        }));
    }
}
ResponseInterceptor.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ResponseInterceptor.ctorParameters = () => [];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UtaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93ZWIvIiwic291cmNlcyI6WyJsaWIvX2ludGVyY2VwdG9ycy9yZXNwb25zZS1pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQXdELFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTdILE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyQyxNQUFNO0lBRUYsaUJBQWlCOzs7Ozs7SUFFakIsU0FBUyxDQUFDLE9BQXlCLEVBQUUsSUFBaUI7O1FBR2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUN0QixJQUFJLENBQ0QsR0FBRyxDQUNDLENBQUMsS0FBcUIsRUFBRSxFQUFFO1lBQ3RCLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4RixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztvQkFDL0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7aUJBQ2hGO2FBQ0o7U0FDSixFQUNELENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDTixFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDeEM7U0FDSixDQUNKLENBQ0osQ0FBQztLQUNUOzs7WUExQkosVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvciwgSHR0cEhhbmRsZXIsIEh0dHBSZXF1ZXN0LCBIdHRwRXZlbnQsIEh0dHBSZXNwb25zZSwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlc3BvbnNlSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcblxuICAgICAgICAvLyBleHRlbmQgc2VydmVyIHJlc3BvbnNlIG9ic2VydmFibGUgd2l0aCBsb2dnaW5nXG4gICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFwKFxuICAgICAgICAgICAgICAgICAgICAoZXZlbnQ6IEh0dHBFdmVudDxhbnk+KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5oZWFkZXJzLmdldCgnU2hvdy1FcnJvci1NZXNzYWdlJykgfHwgcmVxdWVzdC5oZWFkZXJzLmdldCgnU2hvdy1JbmZvLU1lc3NhZ2UnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2hvdy1FcnJvci1NZXNzYWdlOiAnLCByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdTaG93LUVycm9yLU1lc3NhZ2UnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTaG93LUluZm8tTWVzc2FnZTogJywgcmVxdWVzdC5oZWFkZXJzLmdldCgnU2hvdy1JbmZvLU1lc3NhZ2UnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiAnLCBlcnJvci5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=