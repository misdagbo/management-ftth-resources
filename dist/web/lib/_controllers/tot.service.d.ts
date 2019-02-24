import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Tot } from '../_dtos/tot';
export declare class TotService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Tot>, origin: string, callback: (response: Response<Tot>) => void): void;
    update(request: Request<Tot>, origin: string, callback: (response: Response<Tot>) => void): void;
    get(request: Request<Tot>, origin: string, callback: (response: Response<Tot>) => void): void;
}
