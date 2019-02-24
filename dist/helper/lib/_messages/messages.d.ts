import { InjectionToken } from '@angular/core';
import { MESSAGE_FR_NAME } from 'helper/lib/_messages/message-fr';
export declare const MESSAGES: InjectionToken<any>;
export declare const _messages: {
    [MESSAGE_FR_NAME]: {
        'SUCCESS_MESSAGE': string;
    };
};
export declare const MessageProviders: {
    provide: InjectionToken<any>;
    useValue: {
        [MESSAGE_FR_NAME]: {
            'SUCCESS_MESSAGE': string;
        };
    };
}[];
