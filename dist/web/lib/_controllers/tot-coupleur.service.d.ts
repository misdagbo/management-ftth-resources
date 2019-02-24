import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { TotCoupleur } from '../_dtos/tot-coupleur';
export declare class TotCoupleurService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<TotCoupleur>, origin: string, callback: (response: Response<TotCoupleur>) => void): void;
    update(request: Request<TotCoupleur>, origin: string, callback: (response: Response<TotCoupleur>) => void): void;
    get(request: Request<TotCoupleur>, origin: string, callback: (response: Response<TotCoupleur>) => void): void;
}
