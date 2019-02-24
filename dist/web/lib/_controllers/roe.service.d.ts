import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Roe } from '../_dtos/roe';
export declare class RoeService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Roe>, origin: string, callback: (response: Response<Roe>) => void): void;
    update(request: Request<Roe>, origin: string, callback: (response: Response<Roe>) => void): void;
    get(request: Request<Roe>, origin: string, callback: (response: Response<Roe>) => void): void;
}
