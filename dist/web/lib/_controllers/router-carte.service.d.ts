import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { RouterCarte } from '../_dtos/router-carte';
export declare class RouterCarteService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<RouterCarte>, origin: string, callback: (response: Response<RouterCarte>) => void): void;
    update(request: Request<RouterCarte>, origin: string, callback: (response: Response<RouterCarte>) => void): void;
    get(request: Request<RouterCarte>, origin: string, callback: (response: Response<RouterCarte>) => void): void;
}
