import { Injectable } from '@angular/core';
import { HelperModule } from '../helper.module';

@Injectable({
    providedIn: HelperModule
})
export class UtilityService {

    constructor() { }

    isNullObject(value: any): boolean {

        if (value instanceof Boolean || value instanceof Number) {
            return !value;
        }

        if (value instanceof String) {
            return !value || 0 === value.length;
        }

        if (value instanceof Object) {
            return !value || value === {};
        }

    }

    getUrl(origin: string, service: string, method: string): string {
        return origin + '/' + service + '/' + method;
    }

    getService(url: string, origin: string): string {
        url = url.slice(origin.length + 1, url.length);
        let service = url.split('/');
        return service.shift();
    }

}
