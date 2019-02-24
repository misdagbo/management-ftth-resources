import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { WebModule } from '../web.module';
import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Rot } from '../_dtos/rot';

const REQUEST_MAPPING = 'rfoRot';

@Injectable({
  providedIn: WebModule
})
export class RotService {

  constructor(private _httpService: HttpRequestService, private _utilityService: UtilityService) { }

  create(request: Request<Rot>, origin: string, callback: (response: Response<Rot>) => void) {

    const _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'create');

    const _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Show-Success-Message': 'true',
        'Show-Loader': 'true',
        'Show-Error-Message': 'true'
      })
    };

    this._httpService.post<Rot>(_url, request, _httpOptions)
      .subscribe(
        (response) => callback(response)
      );
  }

  update(request: Request<Rot>, origin: string, callback: (response: Response<Rot>) => void) {

    const _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'update');

    const _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Show-Success-Message': 'true',
        'Show-Loader': 'true',
        'Show-Error-Message': 'true'
      })
    };

    this._httpService.post<Rot>(_url, request, _httpOptions)
      .subscribe(
        (response) => callback(response)
      );
  }

  get(request: Request<Rot>, origin: string, callback: (response: Response<Rot>) => void) {

    const _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'getByCriteria');

    const _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Show-Success-Message': 'false',
        'Show-Loader': 'true',
        'Show-Error-Message': 'true'
      })
    };

    this._httpService.post<Rot>(_url, request, _httpOptions)
      .subscribe(
        (response) => callback(response)
      );
  }

}
