import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { TttPort } from '../_dtos/ttt-port';
export declare class TttPortService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<TttPort>, origin: string, callback: (response: Response<TttPort>) => void): void;
    update(request: Request<TttPort>, origin: string, callback: (response: Response<TttPort>) => void): void;
    get(request: Request<TttPort>, origin: string, callback: (response: Response<TttPort>) => void): void;
}
