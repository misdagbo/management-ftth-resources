import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Fonctionnalite } from '../_dtos/fonctionnalite';
export declare class FonctionnaliteService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Fonctionnalite>, origin: string, callback: (response: Response<Fonctionnalite>) => void): void;
    update(request: Request<Fonctionnalite>, origin: string, callback: (response: Response<Fonctionnalite>) => void): void;
    get(request: Request<Fonctionnalite>, origin: string, callback: (response: Response<Fonctionnalite>) => void): void;
}
