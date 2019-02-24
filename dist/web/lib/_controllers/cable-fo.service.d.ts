import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { CableFo } from '../_dtos/cable-fo';
export declare class CableFoService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<CableFo>, origin: string, callback: (response: Response<CableFo>) => void): void;
    update(request: Request<CableFo>, origin: string, callback: (response: Response<CableFo>) => void): void;
    get(request: Request<CableFo>, origin: string, callback: (response: Response<CableFo>) => void): void;
}
