import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { RouterPort } from '../_dtos/router-port';
export declare class RouterPortService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<RouterPort>, origin: string, callback: (response: Response<RouterPort>) => void): void;
    update(request: Request<RouterPort>, origin: string, callback: (response: Response<RouterPort>) => void): void;
    get(request: Request<RouterPort>, origin: string, callback: (response: Response<RouterPort>) => void): void;
}
