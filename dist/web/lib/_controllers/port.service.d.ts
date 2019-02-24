import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { Port } from '../_dtos/port';
export declare class PortService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<Port>, origin: string, callback: (response: Response<Port>) => void): void;
    update(request: Request<Port>, origin: string, callback: (response: Response<Port>) => void): void;
    get(request: Request<Port>, origin: string, callback: (response: Response<Port>) => void): void;
    getOltPortPhysique(request: Request<Port>, origin: string, callback: (response: Response<Port>) => void): void;
}
