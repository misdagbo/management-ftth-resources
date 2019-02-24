import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GlobalEnum } from 'helper';
import { Helpers } from '../helpers';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Get the auth token from the service.

        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        const _wrapper = request.clone({
            setHeaders: {
                'Content-Type': request.headers.get('Content-Type') || 'application/json',
                'Show-Success-Message': request.headers.get('Show-Success-Message') || GlobalEnum._SHOW_INFO_MESSAGE,
                'Show-Loader': request.headers.get('Show-Loader') || GlobalEnum._SHOW_LOADER,
                'Show-Error-Message': request.headers.get('Show-Error-Message') || GlobalEnum._SHOW_ERROR_MESSAGE
            }
        });

        _wrapper.body['user'] = 1;

        // TODO: Show Loader
        if (_wrapper.headers.get('Show-Loader').indexOf('true') > -1) {
            Helpers.setLoading(true);
        }

        // send cloned request with header to the next handler.
        return next.handle(_wrapper);
    }
}
