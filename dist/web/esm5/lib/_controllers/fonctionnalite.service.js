/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { WebModule } from '../web.module';
import { HttpRequestService, UtilityService } from 'helper';
import * as i0 from "@angular/core";
import * as i1 from "helper";
import * as i2 from "../web.module";
var /** @type {?} */ REQUEST_MAPPING = 'adminFonctionnalite';
var FonctionnaliteService = /** @class */ (function () {
    function FonctionnaliteService(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    FonctionnaliteService.prototype.create = /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    function (request, origin, callback) {
        var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'create');
        var /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe(function (response) { return callback(response); });
    };
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    FonctionnaliteService.prototype.update = /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    function (request, origin, callback) {
        var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'update');
        var /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe(function (response) { return callback(response); });
    };
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    FonctionnaliteService.prototype.get = /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    function (request, origin, callback) {
        var /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'getByCriteria');
        var /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe(function (response) { return callback(response); });
    };
    FonctionnaliteService.decorators = [
        { type: Injectable, args: [{
                    providedIn: WebModule
                },] },
    ];
    /** @nocollapse */
    FonctionnaliteService.ctorParameters = function () { return [
        { type: HttpRequestService, },
        { type: UtilityService, },
    ]; };
    /** @nocollapse */ FonctionnaliteService.ngInjectableDef = i0.defineInjectable({ factory: function FonctionnaliteService_Factory() { return new FonctionnaliteService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: FonctionnaliteService, providedIn: i2.WebModule });
    return FonctionnaliteService;
}());
export { FonctionnaliteService };
function FonctionnaliteService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FonctionnaliteService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FonctionnaliteService.ctorParameters;
    /** @type {?} */
    FonctionnaliteService.prototype._httpService;
    /** @type {?} */
    FonctionnaliteService.prototype._utilityService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9uY3Rpb25uYWxpdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dlYi8iLCJzb3VyY2VzIjpbImxpYi9fY29udHJvbGxlcnMvZm9uY3Rpb25uYWxpdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQXFCLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7OztBQUcvRSxxQkFBTSxlQUFlLEdBQUcscUJBQXFCLENBQUM7O0lBTzVDLCtCQUFvQixZQUFnQyxFQUFVLGVBQStCO1FBQXpFLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtLQUFLOzs7Ozs7O0lBRWxHLHNDQUFNOzs7Ozs7SUFBTixVQUFPLE9BQWdDLEVBQUUsTUFBYyxFQUFFLFFBQXNEO1FBRTdHLHFCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTVFLHFCQUFNLFlBQVksR0FBRztZQUNuQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLHNCQUFzQixFQUFFLE1BQU07Z0JBQzlCLGFBQWEsRUFBRSxNQUFNO2dCQUNyQixvQkFBb0IsRUFBRSxNQUFNO2FBQzdCLENBQUM7U0FDSCxDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQWlCLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDO2FBQ2hFLFNBQVMsQ0FDUixVQUFDLFFBQVEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBbEIsQ0FBa0IsQ0FDakMsQ0FBQztLQUNMOzs7Ozs7O0lBRUQsc0NBQU07Ozs7OztJQUFOLFVBQU8sT0FBZ0MsRUFBRSxNQUFjLEVBQUUsUUFBc0Q7UUFFN0cscUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFNUUscUJBQU0sWUFBWSxHQUFHO1lBQ25CLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsc0JBQXNCLEVBQUUsTUFBTTtnQkFDOUIsYUFBYSxFQUFFLE1BQU07Z0JBQ3JCLG9CQUFvQixFQUFFLE1BQU07YUFDN0IsQ0FBQztTQUNILENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBaUIsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUM7YUFDaEUsU0FBUyxDQUNSLFVBQUMsUUFBUSxJQUFLLE9BQUEsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFsQixDQUFrQixDQUNqQyxDQUFDO0tBQ0w7Ozs7Ozs7SUFFRCxtQ0FBRzs7Ozs7O0lBQUgsVUFBSSxPQUFnQyxFQUFFLE1BQWMsRUFBRSxRQUFzRDtRQUUxRyxxQkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUVuRixxQkFBTSxZQUFZLEdBQUc7WUFDbkIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxzQkFBc0IsRUFBRSxPQUFPO2dCQUMvQixhQUFhLEVBQUUsTUFBTTtnQkFDckIsb0JBQW9CLEVBQUUsTUFBTTthQUM3QixDQUFDO1NBQ0gsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFpQixJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQzthQUNoRSxTQUFTLENBQ1IsVUFBQyxRQUFRLElBQUssT0FBQSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQWxCLENBQWtCLENBQ2pDLENBQUM7S0FDTDs7Z0JBOURGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsU0FBUztpQkFDdEI7Ozs7Z0JBUDJCLGtCQUFrQjtnQkFBRSxjQUFjOzs7Z0NBSDlEOztTQVdhLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBGb25jdGlvbm5hbGl0ZSB9IGZyb20gJy4uL19kdG9zL2ZvbmN0aW9ubmFsaXRlJztcblxuY29uc3QgUkVRVUVTVF9NQVBQSU5HID0gJ2FkbWluRm9uY3Rpb25uYWxpdGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBGb25jdGlvbm5hbGl0ZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwUmVxdWVzdFNlcnZpY2UsIHByaXZhdGUgX3V0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgY3JlYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8Rm9uY3Rpb25uYWxpdGU+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Rm9uY3Rpb25uYWxpdGU+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxGb25jdGlvbm5hbGl0ZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICB1cGRhdGUocmVxdWVzdDogUmVxdWVzdDxGb25jdGlvbm5hbGl0ZT4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxGb25jdGlvbm5hbGl0ZT4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PEZvbmN0aW9ubmFsaXRlPihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBSZXF1ZXN0PEZvbmN0aW9ubmFsaXRlPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPEZvbmN0aW9ubmFsaXRlPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxGb25jdGlvbm5hbGl0ZT4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxufVxuIl19