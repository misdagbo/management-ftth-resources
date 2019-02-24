/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HelperModule } from '../helper.module';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../helper.module";
export class HttpRequestService {
    /**
     * @param {?} _http
     */
    constructor(_http) {
        this._http = _http;
    }
    /**
     * @template T
     * @param {?} url
     * @param {?} httpOptions
     * @return {?}
     */
    get(url, httpOptions) {
        return this._http.get(url, httpOptions);
    }
    /**
     * @template T
     * @param {?} url
     * @param {?} request
     * @param {?} httpOptions
     * @return {?}
     */
    post(url, request, httpOptions) {
        return this._http.post(url, request, httpOptions);
    }
    /**
     * @template T
     * @param {?} url
     * @param {?} request
     * @param {?} httpOptions
     * @return {?}
     */
    put(url, request, httpOptions) {
        return this._http.put(url, request, httpOptions);
    }
    /**
     * @template T
     * @param {?} url
     * @param {?} httpOptions
     * @return {?}
     */
    delete(url, httpOptions) {
        return this._http.delete(url, httpOptions);
    }
}
HttpRequestService.decorators = [
    { type: Injectable, args: [{
                providedIn: HelperModule
            },] },
];
/** @nocollapse */
HttpRequestService.ctorParameters = () => [
    { type: HttpClient, },
];
/** @nocollapse */ HttpRequestService.ngInjectableDef = i0.defineInjectable({ factory: function HttpRequestService_Factory() { return new HttpRequestService(i0.inject(i1.HttpClient)); }, token: HttpRequestService, providedIn: i2.HelperModule });
function HttpRequestService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HttpRequestService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HttpRequestService.ctorParameters;
    /** @type {?} */
    HttpRequestService.prototype._http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXF1ZXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxwZXIvIiwic291cmNlcyI6WyJsaWIvX3V0aWxpdGllcy9odHRwLXJlcXVlc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBUWxELE1BQU07Ozs7SUFFSixZQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO0tBQUs7Ozs7Ozs7SUFFMUMsR0FBRyxDQUFJLEdBQVcsRUFBRSxXQUFlO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBYyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDdEQ7Ozs7Ozs7O0lBRUQsSUFBSSxDQUFJLEdBQVcsRUFBRSxPQUFtQixFQUFFLFdBQWU7UUFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFjLEdBQUcsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDaEU7Ozs7Ozs7O0lBRUQsR0FBRyxDQUFJLEdBQVcsRUFBRSxPQUFtQixFQUFFLFdBQWU7UUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFjLEdBQUcsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDL0Q7Ozs7Ozs7SUFFRCxNQUFNLENBQUksR0FBVyxFQUFFLFdBQWU7UUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFjLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztLQUN6RDs7O1lBckJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsWUFBWTthQUN6Qjs7OztZQVBRLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJNb2R1bGUgfSBmcm9tICcuLi9oZWxwZXIubW9kdWxlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICcuLi9fY29udHJhY3RzL3JlcXVlc3QnO1xuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICcuLi9fY29udHJhY3RzL3Jlc3BvbnNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBIZWxwZXJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgSHR0cFJlcXVlc3RTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBnZXQ8VD4odXJsOiBzdHJpbmcsIGh0dHBPcHRpb25zOiB7fSk6IE9ic2VydmFibGU8UmVzcG9uc2U8VD4+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8UmVzcG9uc2U8VD4+KHVybCwgaHR0cE9wdGlvbnMpO1xuICB9XG5cbiAgcG9zdDxUPih1cmw6IHN0cmluZywgcmVxdWVzdDogUmVxdWVzdDxUPiwgaHR0cE9wdGlvbnM6IHt9KTogT2JzZXJ2YWJsZTxSZXNwb25zZTxUPj4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3Q8UmVzcG9uc2U8VD4+KHVybCwgcmVxdWVzdCwgaHR0cE9wdGlvbnMpO1xuICB9XG5cbiAgcHV0PFQ+KHVybDogc3RyaW5nLCByZXF1ZXN0OiBSZXF1ZXN0PFQ+LCBodHRwT3B0aW9uczoge30pOiBPYnNlcnZhYmxlPFJlc3BvbnNlPFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucHV0PFJlc3BvbnNlPFQ+Pih1cmwsIHJlcXVlc3QsIGh0dHBPcHRpb25zKTtcbiAgfVxuXG4gIGRlbGV0ZTxUPih1cmw6IHN0cmluZywgaHR0cE9wdGlvbnM6IHt9KTogT2JzZXJ2YWJsZTxSZXNwb25zZTxUPj4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZTxSZXNwb25zZTxUPj4odXJsLCBodHRwT3B0aW9ucyk7XG4gIH1cblxufVxuIl19