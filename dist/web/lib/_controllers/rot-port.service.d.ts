import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { RotPort } from '../_dtos/rot-port';
export declare class RotPortService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<RotPort>, origin: string, callback: (response: Response<RotPort>) => void): void;
    update(request: Request<RotPort>, origin: string, callback: (response: Response<RotPort>) => void): void;
    get(request: Request<RotPort>, origin: string, callback: (response: Response<RotPort>) => void): void;
    getRfoRotPortModule(request: Request<RotPort>, origin: string, callback: (response: Response<RotPort>) => void): void;
}
