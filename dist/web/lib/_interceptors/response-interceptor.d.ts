import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
export declare class ResponseInterceptor implements HttpInterceptor {
    constructor();
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
