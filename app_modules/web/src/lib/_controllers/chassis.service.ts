import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { WebModule } from '../web.module';
import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Chassis } from '../_dtos/chassis';

const REQUEST_MAPPING = 'oltChassis';

@Injectable({
  providedIn: WebModule
})
export class ChassisService {

  constructor(private _httpService: HttpRequestService, private _utilityService: UtilityService) { }

  create(request: Request<Chassis>, origin: string, callback: (response: Response<Chassis>) => void) {

    const _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'create');

    const _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Show-Success-Message': 'true',
        'Show-Loader': 'true',
        'Show-Error-Message': 'true'
      })
    };

    this._httpService.post<Chassis>(_url, request, _httpOptions)
      .subscribe(
        (response) => callback(response)
      );
  }

  update(request: Request<Chassis>, origin: string, callback: (response: Response<Chassis>) => void) {

    const _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'update');

    const _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Show-Success-Message': 'true',
        'Show-Loader': 'true',
        'Show-Error-Message': 'true'
      })
    };

    this._httpService.post<Chassis>(_url, request, _httpOptions)
      .subscribe(
        (response) => callback(response)
      );
  }

  get(request: Request<Chassis>, origin: string, callback: (response: Response<Chassis>) => void) {

    const _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'getByCriteria');

    const _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Show-Success-Message': 'false',
        'Show-Loader': 'true',
        'Show-Error-Message': 'true'
      })
    };

    this._httpService.post<Chassis>(_url, request, _httpOptions)
      .subscribe(
        (response) => callback(response)
      );
  }

  getAllInfos(request: Request<Chassis>, origin: string, callback: (response: Response<Chassis>) => void) {

    const _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'getAllInfos');

    const _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Show-Success-Message': 'false',
        'Show-Loader': 'true',
        'Show-Error-Message': 'true'
      })
    };

    this._httpService.post<Chassis>(_url, request, _httpOptions)
      .subscribe(
        (response) => callback(response)
      );
  }

}
