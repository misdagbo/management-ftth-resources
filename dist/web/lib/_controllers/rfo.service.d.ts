import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Rfo } from '../_dtos/rfo';
export declare class RfoService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Rfo>, origin: string, callback: (response: Response<Rfo>) => void): void;
    update(request: Request<Rfo>, origin: string, callback: (response: Response<Rfo>) => void): void;
    get(request: Request<Rfo>, origin: string, callback: (response: Response<Rfo>) => void): void;
}
