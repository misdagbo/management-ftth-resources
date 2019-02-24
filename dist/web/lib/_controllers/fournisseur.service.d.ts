import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Fournisseur } from '../_dtos/fournisseur';
export declare class FournisseurService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Fournisseur>, origin: string, callback: (response: Response<Fournisseur>) => void): void;
    update(request: Request<Fournisseur>, origin: string, callback: (response: Response<Fournisseur>) => void): void;
    get(request: Request<Fournisseur>, origin: string, callback: (response: Response<Fournisseur>) => void): void;
}
