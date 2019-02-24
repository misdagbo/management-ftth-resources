import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Carte } from '../_dtos/carte';
export declare class CarteService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Carte>, origin: string, callback: (response: Response<Carte>) => void): void;
    update(request: Request<Carte>, origin: string, callback: (response: Response<Carte>) => void): void;
    get(request: Request<Carte>, origin: string, callback: (response: Response<Carte>) => void): void;
    getOltCartePortPhysique(request: Request<Carte>, origin: string, callback: (response: Response<Carte>) => void): void;
}
