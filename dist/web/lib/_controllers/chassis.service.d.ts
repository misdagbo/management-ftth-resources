import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Chassis } from '../_dtos/chassis';
export declare class ChassisService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Chassis>, origin: string, callback: (response: Response<Chassis>) => void): void;
    update(request: Request<Chassis>, origin: string, callback: (response: Response<Chassis>) => void): void;
    get(request: Request<Chassis>, origin: string, callback: (response: Response<Chassis>) => void): void;
    getAllInfos(request: Request<Chassis>, origin: string, callback: (response: Response<Chassis>) => void): void;
}
