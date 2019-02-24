import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Modele } from '../_dtos/modele';
export declare class ModeleService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Modele>, origin: string, callback: (response: Response<Modele>) => void): void;
    update(request: Request<Modele>, origin: string, callback: (response: Response<Modele>) => void): void;
    get(request: Request<Modele>, origin: string, callback: (response: Response<Modele>) => void): void;
}
