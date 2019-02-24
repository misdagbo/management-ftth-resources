import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { OltLink } from '../_dtos/olt-link';
export declare class OltLinkService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<OltLink>, origin: string, callback: (response: Response<OltLink>) => void): void;
    update(request: Request<OltLink>, origin: string, callback: (response: Response<OltLink>) => void): void;
    get(request: Request<OltLink>, origin: string, callback: (response: Response<OltLink>) => void): void;
}
