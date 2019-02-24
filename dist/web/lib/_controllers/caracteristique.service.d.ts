import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Caracteristique } from '../_dtos/caracteristique';
export declare class CaracteristiqueService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Caracteristique>, origin: string, callback: (response: Response<Caracteristique>) => void): void;
    update(request: Request<Caracteristique>, origin: string, callback: (response: Response<Caracteristique>) => void): void;
    get(request: Request<Caracteristique>, origin: string, callback: (response: Response<Caracteristique>) => void): void;
}
