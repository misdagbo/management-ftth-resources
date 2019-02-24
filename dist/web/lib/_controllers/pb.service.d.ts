import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Pb } from '../_dtos/pb';
export declare class PbService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Pb>, origin: string, callback: (response: Response<Pb>) => void): void;
    update(request: Request<Pb>, origin: string, callback: (response: Response<Pb>) => void): void;
    get(request: Request<Pb>, origin: string, callback: (response: Response<Pb>) => void): void;
}
