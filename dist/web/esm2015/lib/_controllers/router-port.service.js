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
const /** @type {?} */ REQUEST_MAPPING = 'oltRouterPort';
export class RouterPortService {
    /**
     * @param {?} _httpService
     * @param {?} _utilityService
     */
    constructor(_httpService, _utilityService) {
        this._httpService = _httpService;
        this._utilityService = _utilityService;
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    create(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'create');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    update(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'update');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'true',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
    /**
     * @param {?} request
     * @param {?} origin
     * @param {?} callback
     * @return {?}
     */
    get(request, origin, callback) {
        const /** @type {?} */ _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'getByCriteria');
        const /** @type {?} */ _httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Show-Success-Message': 'false',
                'Show-Loader': 'true',
                'Show-Error-Message': 'true'
            })
        };
        this._httpService.post(_url, request, _httpOptions)
            .subscribe((response) => callback(response));
    }
}
RouterPortService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
RouterPortService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ RouterPortService.ngInjectableDef = i0.defineInjectable({ factory: function RouterPortService_Factory() { return new RouterPortService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: RouterPortService, providedIn: i2.WebModule });
function RouterPortService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    RouterPortService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    RouterPortService.ctorParameters;
    /** @type {?} */
    RouterPortService.prototype._httpService;
    /** @type {?} */
    RouterPortService.prototype._utilityService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLXBvcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dlYi8iLCJzb3VyY2VzIjpbImxpYi9fY29udHJvbGxlcnMvcm91dGVyLXBvcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQXFCLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7OztBQUcvRSx1QkFBTSxlQUFlLEdBQUcsZUFBZSxDQUFDO0FBS3hDLE1BQU07Ozs7O0lBRUosWUFBb0IsWUFBZ0MsRUFBVSxlQUErQjtRQUF6RSxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7S0FBSzs7Ozs7OztJQUVsRyxNQUFNLENBQUMsT0FBNEIsRUFBRSxNQUFjLEVBQUUsUUFBa0Q7UUFFckcsdUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFNUUsdUJBQU0sWUFBWSxHQUFHO1lBQ25CLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsc0JBQXNCLEVBQUUsTUFBTTtnQkFDOUIsYUFBYSxFQUFFLE1BQU07Z0JBQ3JCLG9CQUFvQixFQUFFLE1BQU07YUFDN0IsQ0FBQztTQUNILENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBYSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQzthQUM1RCxTQUFTLENBQ1IsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FDakMsQ0FBQztLQUNMOzs7Ozs7O0lBRUQsTUFBTSxDQUFDLE9BQTRCLEVBQUUsTUFBYyxFQUFFLFFBQWtEO1FBRXJHLHVCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTVFLHVCQUFNLFlBQVksR0FBRztZQUNuQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLHNCQUFzQixFQUFFLE1BQU07Z0JBQzlCLGFBQWEsRUFBRSxNQUFNO2dCQUNyQixvQkFBb0IsRUFBRSxNQUFNO2FBQzdCLENBQUM7U0FDSCxDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQWEsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUM7YUFDNUQsU0FBUyxDQUNSLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQ2pDLENBQUM7S0FDTDs7Ozs7OztJQUVELEdBQUcsQ0FBQyxPQUE0QixFQUFFLE1BQWMsRUFBRSxRQUFrRDtRQUVsRyx1QkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUVuRix1QkFBTSxZQUFZLEdBQUc7WUFDbkIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxzQkFBc0IsRUFBRSxPQUFPO2dCQUMvQixhQUFhLEVBQUUsTUFBTTtnQkFDckIsb0JBQW9CLEVBQUUsTUFBTTthQUM3QixDQUFDO1NBQ0gsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFhLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDO2FBQzVELFNBQVMsQ0FDUixDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUNqQyxDQUFDO0tBQ0w7OztZQTlERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLFNBQVM7YUFDdEI7Ozs7WUFQMkIsa0JBQWtCO1lBQUUsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgV2ViTW9kdWxlIH0gZnJvbSAnLi4vd2ViLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSHR0cFJlcXVlc3RTZXJ2aWNlLCBVdGlsaXR5U2VydmljZSB9IGZyb20gJ2hlbHBlcic7XG5pbXBvcnQgeyBSb3V0ZXJQb3J0IH0gZnJvbSAnLi4vX2R0b3Mvcm91dGVyLXBvcnQnO1xuXG5jb25zdCBSRVFVRVNUX01BUFBJTkcgPSAnb2x0Um91dGVyUG9ydCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogV2ViTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRlclBvcnRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFJvdXRlclBvcnQ+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8Um91dGVyUG9ydD4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICdjcmVhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFJvdXRlclBvcnQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8Um91dGVyUG9ydD4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxSb3V0ZXJQb3J0PikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ3VwZGF0ZScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1Mb2FkZXInOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUVycm9yLU1lc3NhZ2UnOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Q8Um91dGVyUG9ydD4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxSb3V0ZXJQb3J0Piwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFJvdXRlclBvcnQ+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnZ2V0QnlDcml0ZXJpYScpO1xuXG4gICAgY29uc3QgX2h0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1Nob3ctU3VjY2Vzcy1NZXNzYWdlJzogJ2ZhbHNlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFJvdXRlclBvcnQ+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiJdfQ==