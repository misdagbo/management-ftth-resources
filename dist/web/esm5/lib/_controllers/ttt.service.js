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
var /** @type {?} */ REQUEST_MAPPING = 'sroTiroirTransition';
var TttService = /** @class */ (function () {
    function TttService(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    TttService.prototype.create = /**
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
    TttService.prototype.update = /**
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
    TttService.prototype.get = /**
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
    TttService.decorators = [
        { type: Injectable, args: [{
                    providedIn: WebModule
                },] },
    ];
    /** @nocollapse */
    TttService.ctorParameters = function () { return [
        { type: HttpRequestService, },
        { type: UtilityService, },
    ]; };
    /** @nocollapse */ TttService.ngInjectableDef = i0.defineInjectable({ factory: function TttService_Factory() { return new TttService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: TttService, providedIn: i2.WebModule });
    return TttService;
}());
export { TttService };
function TttService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TttService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TttService.ctorParameters;
    /** @type {?} */
    TttService.prototype._httpService;
    /** @type {?} */
    TttService.prototype._utilityService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHR0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93ZWIvIiwic291cmNlcyI6WyJsaWIvX2NvbnRyb2xsZXJzL3R0dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBcUIsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7O0FBRy9FLHFCQUFNLGVBQWUsR0FBRyxxQkFBcUIsQ0FBQzs7SUFPNUMsb0JBQW9CLFlBQWdDLEVBQVUsZUFBK0I7UUFBekUsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWdCO0tBQUs7Ozs7Ozs7SUFFbEcsMkJBQU07Ozs7OztJQUFOLFVBQU8sT0FBcUIsRUFBRSxNQUFjLEVBQUUsUUFBMkM7UUFFdkYscUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFNUUscUJBQU0sWUFBWSxHQUFHO1lBQ25CLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsc0JBQXNCLEVBQUUsTUFBTTtnQkFDOUIsYUFBYSxFQUFFLE1BQU07Z0JBQ3JCLG9CQUFvQixFQUFFLE1BQU07YUFDN0IsQ0FBQztTQUNILENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBTSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQzthQUNyRCxTQUFTLENBQ1IsVUFBQyxRQUFRLElBQUssT0FBQSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQWxCLENBQWtCLENBQ2pDLENBQUM7S0FDTDs7Ozs7OztJQUVELDJCQUFNOzs7Ozs7SUFBTixVQUFPLE9BQXFCLEVBQUUsTUFBYyxFQUFFLFFBQTJDO1FBRXZGLHFCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTVFLHFCQUFNLFlBQVksR0FBRztZQUNuQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLHNCQUFzQixFQUFFLE1BQU07Z0JBQzlCLGFBQWEsRUFBRSxNQUFNO2dCQUNyQixvQkFBb0IsRUFBRSxNQUFNO2FBQzdCLENBQUM7U0FDSCxDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQU0sSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUM7YUFDckQsU0FBUyxDQUNSLFVBQUMsUUFBUSxJQUFLLE9BQUEsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFsQixDQUFrQixDQUNqQyxDQUFDO0tBQ0w7Ozs7Ozs7SUFFRCx3QkFBRzs7Ozs7O0lBQUgsVUFBSSxPQUFxQixFQUFFLE1BQWMsRUFBRSxRQUEyQztRQUVwRixxQkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUVuRixxQkFBTSxZQUFZLEdBQUc7WUFDbkIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxzQkFBc0IsRUFBRSxPQUFPO2dCQUMvQixhQUFhLEVBQUUsTUFBTTtnQkFDckIsb0JBQW9CLEVBQUUsTUFBTTthQUM3QixDQUFDO1NBQ0gsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFNLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDO2FBQ3JELFNBQVMsQ0FDUixVQUFDLFFBQVEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBbEIsQ0FBa0IsQ0FDakMsQ0FBQztLQUNMOztnQkE5REYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxTQUFTO2lCQUN0Qjs7OztnQkFQMkIsa0JBQWtCO2dCQUFFLGNBQWM7OztxQkFKOUQ7O1NBWWEsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFR0dCB9IGZyb20gJy4uL19kdG9zL3R0dCc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdzcm9UaXJvaXJUcmFuc2l0aW9uJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBXZWJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgVHR0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBSZXF1ZXN0U2VydmljZSwgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGUocmVxdWVzdDogUmVxdWVzdDxUdHQ+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8VHR0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2NyZWF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8VHR0PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFR0dD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxUdHQ+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAndXBkYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxUdHQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0KHJlcXVlc3Q6IFJlcXVlc3Q8VHR0Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFR0dD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdnZXRCeUNyaXRlcmlhJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAnZmFsc2UnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8VHR0PihfdXJsLCByZXF1ZXN0LCBfaHR0cE9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2UpID0+IGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgKTtcbiAgfVxuXG59XG4iXX0=