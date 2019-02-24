import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Router } from '../_dtos/router';
export declare class RouterService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Router>, origin: string, callback: (response: Response<Router>) => void): void;
    update(request: Request<Router>, origin: string, callback: (response: Response<Router>) => void): void;
    get(request: Request<Router>, origin: string, callback: (response: Response<Router>) => void): void;
}
