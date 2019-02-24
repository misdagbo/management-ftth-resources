import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Olt } from '../_dtos/olt';
export declare class OltService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Olt>, origin: string, callback: (response: Response<Olt>) => void): void;
    update(request: Request<Olt>, origin: string, callback: (response: Response<Olt>) => void): void;
    get(request: Request<Olt>, origin: string, callback: (response: Response<Olt>) => void): void;
}
