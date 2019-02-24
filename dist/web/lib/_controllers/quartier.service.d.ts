import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Quartier } from '../_dtos/quartier';
export declare class QuartierService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Quartier>, origin: string, callback: (response: Response<Quartier>) => void): void;
    update(request: Request<Quartier>, origin: string, callback: (response: Response<Quartier>) => void): void;
    get(request: Request<Quartier>, origin: string, callback: (response: Response<Quartier>) => void): void;
}
