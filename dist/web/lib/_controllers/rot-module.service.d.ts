import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { RotModule } from '../_dtos/rot-module';
export declare class RotModuleService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<RotModule>, origin: string, callback: (response: Response<RotModule>) => void): void;
    update(request: Request<RotModule>, origin: string, callback: (response: Response<RotModule>) => void): void;
    get(request: Request<RotModule>, origin: string, callback: (response: Response<RotModule>) => void): void;
}
