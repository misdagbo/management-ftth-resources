import { TranslateService } from 'helper/lib/_translates/translate.service';
export declare class MessageService {
    private _message;
    private _translate;
    constructor(_message: any, _translate: TranslateService);
    private message(key);
    instant(key: string): string;
}
