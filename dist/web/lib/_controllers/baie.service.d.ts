import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Baie } from '../_dtos/baie';
export declare class BaieService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Baie>, origin: string, callback: (response: Response<Baie>) => void): void;
    update(request: Request<Baie>, origin: string, callback: (response: Response<Baie>) => void): void;
    get(request: Request<Baie>, origin: string, callback: (response: Response<Baie>) => void): void;
}
