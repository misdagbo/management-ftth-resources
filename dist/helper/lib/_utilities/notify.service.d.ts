import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '../_translates/translate.service';
export declare class NotifyService {
    private _toastrService;
    private _translateService;
    constructor(_toastrService: ToastrService, _translateService: TranslateService);
    info(msg: string, opts?: {}): void;
    success(msg: string, opts?: {}): void;
    warning(msg: string, opts?: {}): void;
    error(msg: string, opts?: {}): void;
}
