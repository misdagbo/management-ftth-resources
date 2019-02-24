import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Commune } from '../_dtos/commune';
export declare class CommuneService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Commune>, origin: string, callback: (response: Response<Commune>) => void): void;
    update(request: Request<Commune>, origin: string, callback: (response: Response<Commune>) => void): void;
    get(request: Request<Commune>, origin: string, callback: (response: Response<Commune>) => void): void;
}
