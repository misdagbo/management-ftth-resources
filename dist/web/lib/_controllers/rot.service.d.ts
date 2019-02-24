import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Rot } from '../_dtos/rot';
export declare class RotService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Rot>, origin: string, callback: (response: Response<Rot>) => void): void;
    update(request: Request<Rot>, origin: string, callback: (response: Response<Rot>) => void): void;
    get(request: Request<Rot>, origin: string, callback: (response: Response<Rot>) => void): void;
}
