import { Injectable } from '@angular/core';
import { HelperModule } from '../helper.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Request } from '../_contracts/request';
import { Response } from '../_contracts/response';

@Injectable({
  providedIn: HelperModule
})
export class HttpRequestService {

  constructor(private _http: HttpClient) { }

  get<T>(url: string, httpOptions: {}): Observable<Response<T>> {
    return this._http.get<Response<T>>(url, httpOptions);
  }

  post<T>(url: string, request: Request<T>, httpOptions: {}): Observable<Response<T>> {
    return this._http.post<Response<T>>(url, request, httpOptions);
  }

  put<T>(url: string, request: Request<T>, httpOptions: {}): Observable<Response<T>> {
    return this._http.put<Response<T>>(url, request, httpOptions);
  }

  delete<T>(url: string, httpOptions: {}): Observable<Response<T>> {
    return this._http.delete<Response<T>>(url, httpOptions);
  }

}
