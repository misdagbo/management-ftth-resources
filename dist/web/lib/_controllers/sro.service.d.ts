import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Sro } from '../_dtos/sro';
export declare class SroService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Sro>, origin: string, callback: (response: Response<Sro>) => void): void;
    update(request: Request<Sro>, origin: string, callback: (response: Response<Sro>) => void): void;
    get(request: Request<Sro>, origin: string, callback: (response: Response<Sro>) => void): void;
}
