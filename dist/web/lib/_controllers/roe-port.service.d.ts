import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { RoePort } from '../_dtos/roe-port';
export declare class RoePortService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<RoePort>, origin: string, callback: (response: Response<RoePort>) => void): void;
    update(request: Request<RoePort>, origin: string, callback: (response: Response<RoePort>) => void): void;
    get(request: Request<RoePort>, origin: string, callback: (response: Response<RoePort>) => void): void;
}
