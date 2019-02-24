import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Request } from '../_contracts/request';
import { Response } from '../_contracts/response';
export declare class HttpRequestService {
    private _http;
    constructor(_http: HttpClient);
    get<T>(url: string, httpOptions: {}): Observable<Response<T>>;
    post<T>(url: string, request: Request<T>, httpOptions: {}): Observable<Response<T>>;
    put<T>(url: string, request: Request<T>, httpOptions: {}): Observable<Response<T>>;
    delete<T>(url: string, httpOptions: {}): Observable<Response<T>>;
}
