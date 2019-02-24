import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Fe } from '../_dtos/fe';
export declare class FeService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Fe>, origin: string, callback: (response: Response<Fe>) => void): void;
    update(request: Request<Fe>, origin: string, callback: (response: Response<Fe>) => void): void;
    get(request: Request<Fe>, origin: string, callback: (response: Response<Fe>) => void): void;
}
