/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './request-interceptor';
import { ResponseInterceptor } from './response-interceptor';
export var /** @type {?} */ HttpInterceptors = [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dlYi8iLCJzb3VyY2VzIjpbImxpYi9faW50ZXJjZXB0b3JzL2h0dHAtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxpQkFBaUIsRUFBbUIsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU3RCxNQUFNLENBQUMscUJBQU0sZ0JBQWdCLEdBQUc7SUFDOUIsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7SUFDekUsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7Q0FDM0UsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cEludGVyY2VwdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUmVxdWVzdEludGVyY2VwdG9yIH0gZnJvbSAnLi9yZXF1ZXN0LWludGVyY2VwdG9yJztcbmltcG9ydCB7IFJlc3BvbnNlSW50ZXJjZXB0b3IgfSBmcm9tICcuL3Jlc3BvbnNlLWludGVyY2VwdG9yJztcblxuZXhwb3J0IGNvbnN0IEh0dHBJbnRlcmNlcHRvcnMgPSBbXG4gIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBSZXF1ZXN0SW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXG4gIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBSZXNwb25zZUludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxuXTtcbiJdfQ==