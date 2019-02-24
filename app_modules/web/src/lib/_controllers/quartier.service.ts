import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { WebModule } from '../web.module';
import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Quartier } from '../_dtos/quartier';

const REQUEST_MAPPING = 'paramQuartier';

@Injectable({
  providedIn: WebModule
})
export class QuartierService {

  constructor(private _httpService: HttpRequestService, private _utilityService: UtilityService) { }

  create(request: Request<Quartier>, origin: string, callback: (response: Response<Quartier>) => void) {

    const _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'create');

    const _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Show-Success-Message': 'true',
        'Show-Loader': 'true',
        'Show-Error-Message': 'true'
      })
    };

    this._httpService.post<Quartier>(_url, request, _httpOptions)
      .subscribe(
        (response) => callback(response)
      );
  }

  update(request: Request<Quartier>, origin: string, callback: (response: Response<Quartier>) => void) {

    const _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'update');

    const _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Show-Success-Message': 'true',
        'Show-Loader': 'true',
        'Show-Error-Message': 'true'
      })
    };

    this._httpService.post<Quartier>(_url, request, _httpOptions)
      .subscribe(
        (response) => callback(response)
      );
  }

  get(request: Request<Quartier>, origin: string, callback: (response: Response<Quartier>) => void) {

    const _url = this._utilityService.getUrl(origin, REQUEST_MAPPING, 'getByCriteria');

    const _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Show-Success-Message': 'false',
        'Show-Loader': 'true',
        'Show-Error-Message': 'true'
      })
    };

    this._httpService.post<Quartier>(_url, request, _httpOptions)
      .subscribe(
        (response) => callback(response)
      );
  }

}
