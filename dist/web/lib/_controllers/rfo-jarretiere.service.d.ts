import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { RfoJarretiere } from '../_dtos/rfo-jarretiere';
export declare class RfoJarretiereService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<RfoJarretiere>, origin: string, callback: (response: Response<RfoJarretiere>) => void): void;
    update(request: Request<RfoJarretiere>, origin: string, callback: (response: Response<RfoJarretiere>) => void): void;
    get(request: Request<RfoJarretiere>, origin: string, callback: (response: Response<RfoJarretiere>) => void): void;
}
