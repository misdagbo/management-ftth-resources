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
var HttpRequestService = /** @class */ (function () {
    function HttpRequestService(_http) {
        this._http = _http;
    }
    /**
     * @template T
     * @param {?} url
     * @param {?} httpOptions
     * @return {?}
     */
    HttpRequestService.prototype.get = /**
     * @template T
     * @param {?} url
     * @param {?} httpOptions
     * @return {?}
     */
    function (url, httpOptions) {
        return this._http.get(url, httpOptions);
    };
    /**
     * @template T
     * @param {?} url
     * @param {?} request
     * @param {?} httpOptions
     * @return {?}
     */
    HttpRequestService.prototype.post = /**
     * @template T
     * @param {?} url
     * @param {?} request
     * @param {?} httpOptions
     * @return {?}
     */
    function (url, request, httpOptions) {
        return this._http.post(url, request, httpOptions);
    };
    /**
     * @template T
     * @param {?} url
     * @param {?} request
     * @param {?} httpOptions
     * @return {?}
     */
    HttpRequestService.prototype.put = /**
     * @template T
     * @param {?} url
     * @param {?} request
     * @param {?} httpOptions
     * @return {?}
     */
    function (url, request, httpOptions) {
        return this._http.put(url, request, httpOptions);
    };
    /**
     * @template T
     * @param {?} url
     * @param {?} httpOptions
     * @return {?}
     */
    HttpRequestService.prototype.delete = /**
     * @template T
     * @param {?} url
     * @param {?} httpOptions
     * @return {?}
     */
    function (url, httpOptions) {
        return this._http.delete(url, httpOptions);
    };
    HttpRequestService.decorators = [
        { type: Injectable, args: [{
                    providedIn: HelperModule
                },] },
    ];
    /** @nocollapse */
    HttpRequestService.ctorParameters = function () { return [
        { type: HttpClient, },
    ]; };
    /** @nocollapse */ HttpRequestService.ngInjectableDef = i0.defineInjectable({ factory: function HttpRequestService_Factory() { return new HttpRequestService(i0.inject(i1.HttpClient)); }, token: HttpRequestService, providedIn: i2.HelperModule });
    return HttpRequestService;
}());
export { HttpRequestService };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXF1ZXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxwZXIvIiwic291cmNlcyI6WyJsaWIvX3V0aWxpdGllcy9odHRwLXJlcXVlc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztJQVVoRCw0QkFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtLQUFLOzs7Ozs7O0lBRTFDLGdDQUFHOzs7Ozs7SUFBSCxVQUFPLEdBQVcsRUFBRSxXQUFlO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBYyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDdEQ7Ozs7Ozs7O0lBRUQsaUNBQUk7Ozs7Ozs7SUFBSixVQUFRLEdBQVcsRUFBRSxPQUFtQixFQUFFLFdBQWU7UUFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFjLEdBQUcsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDaEU7Ozs7Ozs7O0lBRUQsZ0NBQUc7Ozs7Ozs7SUFBSCxVQUFPLEdBQVcsRUFBRSxPQUFtQixFQUFFLFdBQWU7UUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFjLEdBQUcsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDL0Q7Ozs7Ozs7SUFFRCxtQ0FBTTs7Ozs7O0lBQU4sVUFBVSxHQUFXLEVBQUUsV0FBZTtRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQWMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0tBQ3pEOztnQkFyQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxZQUFZO2lCQUN6Qjs7OztnQkFQUSxVQUFVOzs7NkJBRm5COztTQVVhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlbHBlck1vZHVsZSB9IGZyb20gJy4uL2hlbHBlci5tb2R1bGUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJy4uL19jb250cmFjdHMvcmVxdWVzdCc7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJy4uL19jb250cmFjdHMvcmVzcG9uc2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IEhlbHBlck1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBIdHRwUmVxdWVzdFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIGdldDxUPih1cmw6IHN0cmluZywgaHR0cE9wdGlvbnM6IHt9KTogT2JzZXJ2YWJsZTxSZXNwb25zZTxUPj4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxSZXNwb25zZTxUPj4odXJsLCBodHRwT3B0aW9ucyk7XG4gIH1cblxuICBwb3N0PFQ+KHVybDogc3RyaW5nLCByZXF1ZXN0OiBSZXF1ZXN0PFQ+LCBodHRwT3B0aW9uczoge30pOiBPYnNlcnZhYmxlPFJlc3BvbnNlPFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdDxSZXNwb25zZTxUPj4odXJsLCByZXF1ZXN0LCBodHRwT3B0aW9ucyk7XG4gIH1cblxuICBwdXQ8VD4odXJsOiBzdHJpbmcsIHJlcXVlc3Q6IFJlcXVlc3Q8VD4sIGh0dHBPcHRpb25zOiB7fSk6IE9ic2VydmFibGU8UmVzcG9uc2U8VD4+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wdXQ8UmVzcG9uc2U8VD4+KHVybCwgcmVxdWVzdCwgaHR0cE9wdGlvbnMpO1xuICB9XG5cbiAgZGVsZXRlPFQ+KHVybDogc3RyaW5nLCBodHRwT3B0aW9uczoge30pOiBPYnNlcnZhYmxlPFJlc3BvbnNlPFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlPFJlc3BvbnNlPFQ+Pih1cmwsIGh0dHBPcHRpb25zKTtcbiAgfVxuXG59XG4iXX0=