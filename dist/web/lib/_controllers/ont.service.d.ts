import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Ont } from '../_dtos/ont';
export declare class OntService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Ont>, origin: string, callback: (response: Response<Ont>) => void): void;
    update(request: Request<Ont>, origin: string, callback: (response: Response<Ont>) => void): void;
    get(request: Request<Ont>, origin: string, callback: (response: Response<Ont>) => void): void;
}
