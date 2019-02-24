import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { CableTransport } from '../_dtos/cable-transport';
export declare class CableTransportService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<CableTransport>, origin: string, callback: (response: Response<CableTransport>) => void): void;
    update(request: Request<CableTransport>, origin: string, callback: (response: Response<CableTransport>) => void): void;
    get(request: Request<CableTransport>, origin: string, callback: (response: Response<CableTransport>) => void): void;
}
