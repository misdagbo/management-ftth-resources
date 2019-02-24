import { InjectionToken } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { RequestInterceptor } from 'web/lib/_interceptors/request-interceptor';
export declare const HttpInterceptors: {
    provide: InjectionToken<HttpInterceptor[]>;
    useClass: typeof RequestInterceptor;
    multi: boolean;
}[];
