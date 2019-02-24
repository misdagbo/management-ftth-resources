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
const /** @type {?} */ REQUEST_MAPPING = 'sro';
export class SroService {
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
SroService.decorators = [
    { type: Injectable, args: [{
                providedIn: WebModule
            },] },
];
/** @nocollapse */
SroService.ctorParameters = () => [
    { type: HttpRequestService, },
    { type: UtilityService, },
];
/** @nocollapse */ SroService.ngInjectableDef = i0.defineInjectable({ factory: function SroService_Factory() { return new SroService(i0.inject(i1.HttpRequestService), i0.inject(i1.UtilityService)); }, token: SroService, providedIn: i2.WebModule });
function SroService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SroService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SroService.ctorParameters;
    /** @type {?} */
    SroService.prototype._httpService;
    /** @type {?} */
    SroService.prototype._utilityService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93ZWIvIiwic291cmNlcyI6WyJsaWIvX2NvbnRyb2xsZXJzL3Nyby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBcUIsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7O0FBRy9FLHVCQUFNLGVBQWUsR0FBRyxLQUFLLENBQUM7QUFLOUIsTUFBTTs7Ozs7SUFFSixZQUFvQixZQUFnQyxFQUFVLGVBQStCO1FBQXpFLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtLQUFLOzs7Ozs7O0lBRWxHLE1BQU0sQ0FBQyxPQUFxQixFQUFFLE1BQWMsRUFBRSxRQUEyQztRQUV2Rix1QkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUU1RSx1QkFBTSxZQUFZLEdBQUc7WUFDbkIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxzQkFBc0IsRUFBRSxNQUFNO2dCQUM5QixhQUFhLEVBQUUsTUFBTTtnQkFDckIsb0JBQW9CLEVBQUUsTUFBTTthQUM3QixDQUFDO1NBQ0gsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFNLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDO2FBQ3JELFNBQVMsQ0FDUixDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUNqQyxDQUFDO0tBQ0w7Ozs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBcUIsRUFBRSxNQUFjLEVBQUUsUUFBMkM7UUFFdkYsdUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFNUUsdUJBQU0sWUFBWSxHQUFHO1lBQ25CLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsc0JBQXNCLEVBQUUsTUFBTTtnQkFDOUIsYUFBYSxFQUFFLE1BQU07Z0JBQ3JCLG9CQUFvQixFQUFFLE1BQU07YUFDN0IsQ0FBQztTQUNILENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBTSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQzthQUNyRCxTQUFTLENBQ1IsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FDakMsQ0FBQztLQUNMOzs7Ozs7O0lBRUQsR0FBRyxDQUFDLE9BQXFCLEVBQUUsTUFBYyxFQUFFLFFBQTJDO1FBRXBGLHVCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRW5GLHVCQUFNLFlBQVksR0FBRztZQUNuQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLHNCQUFzQixFQUFFLE9BQU87Z0JBQy9CLGFBQWEsRUFBRSxNQUFNO2dCQUNyQixvQkFBb0IsRUFBRSxNQUFNO2FBQzdCLENBQUM7U0FDSCxDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQU0sSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUM7YUFDckQsU0FBUyxDQUNSLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQ2pDLENBQUM7S0FDTDs7O1lBOURGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsU0FBUzthQUN0Qjs7OztZQVAyQixrQkFBa0I7WUFBRSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBXZWJNb2R1bGUgfSBmcm9tICcuLi93ZWIubW9kdWxlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBIdHRwUmVxdWVzdFNlcnZpY2UsIFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnaGVscGVyJztcbmltcG9ydCB7IFNybyB9IGZyb20gJy4uL19kdG9zL3Nybyc7XG5cbmNvbnN0IFJFUVVFU1RfTUFQUElORyA9ICdzcm8nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFdlYk1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBTcm9TZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFJlcXVlc3RTZXJ2aWNlLCBwcml2YXRlIF91dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZShyZXF1ZXN0OiBSZXF1ZXN0PFNybz4sIG9yaWdpbjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBSZXNwb25zZTxTcm8+KSA9PiB2b2lkKSB7XG5cbiAgICBjb25zdCBfdXJsID0gdGhpcy5fdXRpbGl0eVNlcnZpY2UuZ2V0VXJsKG9yaWdpbiwgUkVRVUVTVF9NQVBQSU5HLCAnY3JlYXRlJyk7XG5cbiAgICBjb25zdCBfaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnU2hvdy1TdWNjZXNzLU1lc3NhZ2UnOiAndHJ1ZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxTcm8+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHJlcXVlc3Q6IFJlcXVlc3Q8U3JvPiwgb3JpZ2luOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFJlc3BvbnNlPFNybz4pID0+IHZvaWQpIHtcblxuICAgIGNvbnN0IF91cmwgPSB0aGlzLl91dGlsaXR5U2VydmljZS5nZXRVcmwob3JpZ2luLCBSRVFVRVNUX01BUFBJTkcsICd1cGRhdGUnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctTG9hZGVyJzogJ3RydWUnLFxuICAgICAgICAnU2hvdy1FcnJvci1NZXNzYWdlJzogJ3RydWUnXG4gICAgICB9KVxuICAgIH07XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0PFNybz4oX3VybCwgcmVxdWVzdCwgX2h0dHBPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgICk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogUmVxdWVzdDxTcm8+LCBvcmlnaW46IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogUmVzcG9uc2U8U3JvPikgPT4gdm9pZCkge1xuXG4gICAgY29uc3QgX3VybCA9IHRoaXMuX3V0aWxpdHlTZXJ2aWNlLmdldFVybChvcmlnaW4sIFJFUVVFU1RfTUFQUElORywgJ2dldEJ5Q3JpdGVyaWEnKTtcblxuICAgIGNvbnN0IF9odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdTaG93LVN1Y2Nlc3MtTWVzc2FnZSc6ICdmYWxzZScsXG4gICAgICAgICdTaG93LUxvYWRlcic6ICd0cnVlJyxcbiAgICAgICAgJ1Nob3ctRXJyb3ItTWVzc2FnZSc6ICd0cnVlJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdDxTcm8+KF91cmwsIHJlcXVlc3QsIF9odHRwT3B0aW9ucylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY2FsbGJhY2socmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbn1cbiJdfQ==