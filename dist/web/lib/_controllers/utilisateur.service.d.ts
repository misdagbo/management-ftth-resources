import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Utilisateur } from '../_dtos/utilisateur';
export declare class UtilisateurService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Utilisateur>, origin: string, callback: (response: Response<Utilisateur>) => void): void;
    update(request: Request<Utilisateur>, origin: string, callback: (response: Response<Utilisateur>) => void): void;
    get(request: Request<Utilisateur>, origin: string, callback: (response: Response<Utilisateur>) => void): void;
}
