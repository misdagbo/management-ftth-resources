import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Ft } from '../_dtos/ft';
export declare class FtService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Ft>, origin: string, callback: (response: Response<Ft>) => void): void;
    update(request: Request<Ft>, origin: string, callback: (response: Response<Ft>) => void): void;
    get(request: Request<Ft>, origin: string, callback: (response: Response<Ft>) => void): void;
}
