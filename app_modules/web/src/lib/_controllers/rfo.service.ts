import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { WebModule } from '../web.module';
import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Rfo } from '../_dtos/rfo';

const REQUEST_MAPPING = 'rfo';

@Injectable({
  providedIn: WebModule
})
export class RfoService {

  constructor(private _httpService: HttpRequestService, private _utilityService: UtilityService) { }

  create(request: Request<Rfo>, origin: string, callback: (response: Response<Rfo>) => void) {

    const _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'create');

    const _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Show-Success-Message': 'true',
        'Show-Loader': 'true',
        'Show-Error-Message': 'true'
      })
    };

    this._httpService.post<Rfo>(_url, request, _httpOptions)
      .subscribe(
        (response) => callback(response)
      );
  }

  update(request: Request<Rfo>, origin: string, callback: (response: Response<Rfo>) => void) {

    const _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'update');

    const _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Show-Success-Message': 'true',
        'Show-Loader': 'true',
        'Show-Error-Message': 'true'
      })
    };

    this._httpService.post<Rfo>(_url, request, _httpOptions)
      .subscribe(
        (response) => callback(response)
      );
  }

  get(request: Request<Rfo>, origin: string, callback: (response: Response<Rfo>) => void) {

    const _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'getByCriteria');

    const _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Show-Success-Message': 'false',
        'Show-Loader': 'true',
        'Show-Error-Message': 'true'
      })
    };

    this._httpService.post<Rfo>(_url, request, _httpOptions)
      .subscribe(
        (response) => callback(response)
      );
  }

}
