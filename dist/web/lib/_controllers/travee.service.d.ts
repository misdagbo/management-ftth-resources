import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Travee } from '../_dtos/travee';
export declare class TraveeService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Travee>, origin: string, callback: (response: Response<Travee>) => void): void;
    update(request: Request<Travee>, origin: string, callback: (response: Response<Travee>) => void): void;
    get(request: Request<Travee>, origin: string, callback: (response: Response<Travee>) => void): void;
}
