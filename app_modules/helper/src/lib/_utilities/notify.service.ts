import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '../_translates/translate.service';
import { HelperModule } from '../helper.module';

@Injectable({
  providedIn: HelperModule
})
export class NotifyService {

  constructor(private _toastrService: ToastrService, private _translateService: TranslateService) { }

  info(msg: string, opts?: {}) {
    this._toastrService.info(msg, this._translateService.instant('NOTIFY_INFORMATION_TITLE'), opts);
  }

  success(msg: string, opts?: {}) {
    this._toastrService.success(msg, this._translateService.instant('NOTIFY_SUCCESS_TITLE'), opts);
  }

  warning(msg: string, opts?: {}) {
    this._toastrService.warning(msg, this._translateService.instant('NOTIFY_WARNING_TITLE'), opts);
  }

  error(msg: string, opts?: {}) {
    this._toastrService.error(msg, this._translateService.instant('NOTIFY_ERROR_TITLE'), opts);
  }

}
