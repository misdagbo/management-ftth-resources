import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Site } from '../_dtos/site';
export declare class SiteService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Site>, origin: string, callback: (response: Response<Site>) => void): void;
    update(request: Request<Site>, origin: string, callback: (response: Response<Site>) => void): void;
    get(request: Request<Site>, origin: string, callback: (response: Response<Site>) => void): void;
    getParamSite(request: Request<Site>, origin: string, callback: (response: Response<Site>) => void): void;
}
