import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Couleur } from '../_dtos/couleur';
export declare class CouleurService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Couleur>, origin: string, callback: (response: Response<Couleur>) => void): void;
    update(request: Request<Couleur>, origin: string, callback: (response: Response<Couleur>) => void): void;
    get(request: Request<Couleur>, origin: string, callback: (response: Response<Couleur>) => void): void;
}
