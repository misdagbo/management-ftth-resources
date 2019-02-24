import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { OltControl } from '../_dtos/olt-control';
export declare class OltControlService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<OltControl>, origin: string, callback: (response: Response<OltControl>) => void): void;
    update(request: Request<OltControl>, origin: string, callback: (response: Response<OltControl>) => void): void;
    get(request: Request<OltControl>, origin: string, callback: (response: Response<OltControl>) => void): void;
}
