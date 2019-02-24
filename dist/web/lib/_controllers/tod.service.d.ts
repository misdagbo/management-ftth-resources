import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Tod } from '../_dtos/tod';
export declare class TodService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Tod>, origin: string, callback: (response: Response<Tod>) => void): void;
    update(request: Request<Tod>, origin: string, callback: (response: Response<Tod>) => void): void;
    get(request: Request<Tod>, origin: string, callback: (response: Response<Tod>) => void): void;
}
