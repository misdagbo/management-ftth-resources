import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Ttt } from '../_dtos/ttt';
export declare class TttService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Ttt>, origin: string, callback: (response: Response<Ttt>) => void): void;
    update(request: Request<Ttt>, origin: string, callback: (response: Response<Ttt>) => void): void;
    get(request: Request<Ttt>, origin: string, callback: (response: Response<Ttt>) => void): void;
}
