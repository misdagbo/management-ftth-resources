import { ResponseBase } from './response-base';
import { Injectable } from '@angular/core';
import { HelperModule } from '../helper.module';

@Injectable({
    providedIn: HelperModule
})
export class Response<T> extends ResponseBase {

    public items: Array<T>;

}
