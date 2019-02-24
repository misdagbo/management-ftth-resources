import { Nro } from '../_dtos/nro';
import { Request, Response, HttpRequestService, UtilityService } from 'helper';
export declare class NroService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Nro>, origin: string, callback: (response: Response<Nro>) => void): void;
    update(request: Request<Nro>, origin: string, callback: (response: Response<Nro>) => void): void;
    get(request: Request<Nro>, origin: string, callback: (response: Response<Nro>) => void): void;
}
