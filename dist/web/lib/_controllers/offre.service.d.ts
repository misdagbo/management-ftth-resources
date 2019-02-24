import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Offre } from '../_dtos/offre';
export declare class OffreService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Offre>, origin: string, callback: (response: Response<Offre>) => void): void;
    update(request: Request<Offre>, origin: string, callback: (response: Response<Offre>) => void): void;
    get(request: Request<Offre>, origin: string, callback: (response: Response<Offre>) => void): void;
}
