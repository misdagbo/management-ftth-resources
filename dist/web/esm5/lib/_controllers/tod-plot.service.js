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
var /** @type {?} */ REQUEST_MAPPING = 'sroPlotDistribution';
var TodPlotService = /** @class */ (function () {
    function TodPlotService(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    TodPlotService.prototype.create = /**
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
    TodPlotService.prototype.update = /**
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
    TodPlotService.prototype.get = /**
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
    TodPlotService.decorators = [
        { type: Injectable, args: [{
                    providedIn: WebModule
                },] },
    ];
    /** @nocollapse */
    TodPlotService.ctorParameters = function () { return [
        { type: HttpRequestService, },
        { type: UtilityService, },
    ]; };
    /** @nocollapse */ TodPlotService.ngInjectableDef = i0.defineInjectable({ factory: function TodPlotService_Factory() { return new TodPlotService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: TodPlotService, providedIn: i2.WebModule });
    return TodPlotService;
}());
export { TodPlotService };
function TodPlotService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TodPlotService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TodPlotService.ctorParameters;
    /** @type {?} */
    TodPlotService.prototype._httpService;
    /** @type {?} */
    TodPlotService.prototype._utilityService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kLXBsb3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dlYi8iLCJzb3VyY2VzIjpbImxpYi9fY29udHJvbGxlcnMvdG9kLXBsb3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQXFCLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7OztBQUcvRSxxQkFBTSxlQUFlLEdBQUcscUJBQXFCLENBQUM7O0lBTzVDLHdCQUFvQixZQUFnQyxFQUFVLGVBQStCO1FBQXpFLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtLQUFLOzs7Ozs7O0lBRWxHLCtCQUFNOzs7Ozs7SUFBTixVQUFPLE9BQXlCLEVBQUUsTUFBYyxFQUFFLFFBQStDO1FBRS9GLHFCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTVFLHFCQUFNLFlBQVksR0FBRztZQUNuQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLHNCQUFzQixFQUFFLE1BQU07Z0JBQzlCLGFBQWEsRUFBRSxNQUFNO2dCQUNyQixvQkFBb0IsRUFBRSxNQUFNO2FBQzdCLENBQUM7U0FDSCxDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQVUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUM7YUFDekQsU0FBUyxDQUNSLFVBQUMsUUFBUSxJQUFLLE9BQUEsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFsQixDQUFrQixDQUNqQyxDQUFDO0tBQ0w7Ozs7Ozs7SUFFRCwrQkFBTTs7Ozs7O0lBQU4sVUFBTyxPQUF5QixFQUFFLE1BQWMsRUFBRSxRQUErQztRQUUvRixxQkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUU1RSxxQkFBTSxZQUFZLEdBQUc7WUFDbkIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxzQkFBc0IsRUFBRSxNQUFNO2dCQUM5QixhQUFhLEVBQUUsTUFBTTtnQkFDckIsb0JBQW9CLEVBQUUsTUFBTTthQUM3QixDQUFDO1NBQ0gsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFVLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDO2FBQ3pELFNBQVMsQ0FDUixVQUFDLFFBQVEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBbEIsQ0FBa0IsQ0FDakMsQ0FBQztLQUNMOzs7Ozs7O0lBRUQsNEJBQUc7Ozs7OztJQUFILFVBQUksT0FBeUIsRUFBRSxNQUFjLEVBQUUsUUFBK0M7UUFFNUYscUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFbkYscUJBQU0sWUFBWSxHQUFHO1lBQ25CLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsc0JBQXNCLEVBQUUsT0FBTztnQkFDL0IsYUFBYSxFQUFFLE1BQU07Z0JBQ3JCLG9CQUFvQixFQUFFLE1BQU07YUFDN0IsQ0FBQztTQUNILENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBVSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQzthQUN6RCxTQUFTLENBQ1IsVUFBQyxRQUFRLElBQUssT0FBQSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQWxCLENBQWtCLENBQ2pDLENBQUM7S0FDTDs7Z0JBOURGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsU0FBUztpQkFDdEI7Ozs7Z0JBUDJCLGtCQUFrQjtnQkFBRSxjQUFjOzs7eUJBSjlEOztTQVlhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBUb2RQbG90IH0gZnJvbSAnLi4vX2R0b3MvdG9kLXBsb3QnO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAnc3JvUGxvdERpc3RyaWJ1dGlvbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIFRvZFBsb3RTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFRvZFBsb3Q+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8VG9kUGxvdD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFRvZFBsb3Q+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8VG9kUGxvdD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxUb2RQbG90PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8VG9kUGxvdD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxUb2RQbG90Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFRvZFBsb3Q+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFRvZFBsb3Q+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiJdfQ==