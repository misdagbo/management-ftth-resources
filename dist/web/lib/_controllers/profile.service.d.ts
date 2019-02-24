import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Profile } from '../_dtos/profile';
export declare class ProfileService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Profile>, origin: string, callback: (response: Response<Profile>) => void): void;
    update(request: Request<Profile>, origin: string, callback: (response: Response<Profile>) => void): void;
    get(request: Request<Profile>, origin: string, callback: (response: Response<Profile>) => void): void;
}
