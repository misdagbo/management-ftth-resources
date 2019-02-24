import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { ProfileFonctionnalite } from '../_dtos/profile-fonctionnalite';
export declare class ProfileFonctionnaliteService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<ProfileFonctionnalite>, origin: string, callback: (response: Response<ProfileFonctionnalite>) => void): void;
    update(request: Request<ProfileFonctionnalite>, origin: string, callback: (response: Response<ProfileFonctionnalite>) => void): void;
    get(request: Request<ProfileFonctionnalite>, origin: string, callback: (response: Response<ProfileFonctionnalite>) => void): void;
}
