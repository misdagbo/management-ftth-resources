import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { RoeModule } from '../_dtos/roe-module';
export declare class RoeModuleService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<RoeModule>, origin: string, callback: (response: Response<RoeModule>) => void): void;
    update(request: Request<RoeModule>, origin: string, callback: (response: Response<RoeModule>) => void): void;
    get(request: Request<RoeModule>, origin: string, callback: (response: Response<RoeModule>) => void): void;
}
