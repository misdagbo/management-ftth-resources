import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { WebModule } from '../web.module';
import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { RotPort } from '../_dtos/rot-port';

const REQUEST_MAPPING = 'rfoRotPortModule';

@Injectable({
  providedIn: WebModule
})
export class RotPortService {

  constructor(private _httpService: HttpRequestService, private _utilityService: UtilityService) { }

  create(request: Request<RotPort>, origin: string, callback: (response: Response<RotPort>) => void) {

    const _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'create');

    const _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Show-Success-Message': 'true',
        'Show-Loader': 'true',
        'Show-Error-Message': 'true'
      })
    };

    this._httpService.post<RotPort>(_url, request, _httpOptions)
      .subscribe(
        (response) => callback(response)
      );
  }

  update(request: Request<RotPort>, origin: string, callback: (response: Response<RotPort>) => void) {

    const _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'update');

    const _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Show-Success-Message': 'true',
        'Show-Loader': 'true',
        'Show-Error-Message': 'true'
      })
    };

    this._httpService.post<RotPort>(_url, request, _httpOptions)
      .subscribe(
        (response) => callback(response)
      );
  }

  get(request: Request<RotPort>, origin: string, callback: (response: Response<RotPort>) => void) {

    const _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'getByCriteria');

    const _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Show-Success-Message': 'false',
        'Show-Loader': 'true',
        'Show-Error-Message': 'true'
      })
    };

    this._httpService.post<RotPort>(_url, request, _httpOptions)
      .subscribe(
        (response) => callback(response)
      );
  }

  getRfoRotPortModule(request: Request<RotPort>, origin: string, callback: (response: Response<RotPort>) => void) {

    const _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'getRfoRotPortModule');

    const _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Show-Success-Message': 'false',
        'Show-Loader': 'true',
        'Show-Error-Message': 'true'
      })
    };

    this._httpService.post<RotPort>(_url, request, _httpOptions)
      .subscribe(
        (response) => callback(response)
      );
  }

}
