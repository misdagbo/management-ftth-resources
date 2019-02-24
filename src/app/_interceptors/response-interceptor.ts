import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { Helpers } from '../helpers';
import { NotifyService, TranslateService } from 'helper';

declare var swal: any;

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

    constructor(private _translateService: TranslateService, private _notifyService: NotifyService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // extend server response observable with logging
        return next.handle(request)
            .pipe(
                tap(
                    (event: HttpEvent<any>) => {
                        if (event instanceof HttpResponse) {

                            // TODO: Hide Loader
                            if (request.headers.get('Show-Loader').indexOf('true') > -1) {
                                Helpers.setLoading(false);
                            }

                            // TODO: Show Notification
                            if (request.headers.get('Show-Error-Message').indexOf('true') > -1
                                || request.headers.get('Show-Success-Message').indexOf('true') > -1) {
                                if (event.body['hasError']) {
                                    const _error = event.body['status']['code'];
                                    swal({
                                        title: this._translateService.instant('NOTIFY_ERROR_TITLE'),
                                        text: this._translateService.instant('NOTIFY_ERROR_MESSAGE') + ' (0x' + _error + ')',
                                        type: 'error',
                                        allowOutsideClick: false
                                    });
                                } else {
                                    if (!event.body['hasCustomError']) {
                                        if (request.headers.get('Show-Success-Message').indexOf('true') > -1) {
                                            this._notifyService.success(
                                                this._translateService.instant('NOTIFY_SUCCESS_MESSAGE')
                                            );
                                        }
                                    }
                                }
                            }

                        }
                    },
                    (error) => {
                        if (error instanceof HttpErrorResponse) {
                            console.log('error: ', error.status);
                        }
                    }
                )
            );
    }
}
