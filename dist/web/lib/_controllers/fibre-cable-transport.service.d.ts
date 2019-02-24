import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { FibreCableTransport } from '../_dtos/fibre-cable-transport';
export declare class FibreCableTransportService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<FibreCableTransport>, origin: string, callback: (response: Response<FibreCableTransport>) => void): void;
    update(request: Request<FibreCableTransport>, origin: string, callback: (response: Response<FibreCableTransport>) => void): void;
    get(request: Request<FibreCableTransport>, origin: string, callback: (response: Response<FibreCableTransport>) => void): void;
}
