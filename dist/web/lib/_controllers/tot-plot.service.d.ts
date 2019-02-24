import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { TotPlot } from '../_dtos/tot-plot';
export declare class TotPlotService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<TotPlot>, origin: string, callback: (response: Response<TotPlot>) => void): void;
    update(request: Request<TotPlot>, origin: string, callback: (response: Response<TotPlot>) => void): void;
    get(request: Request<TotPlot>, origin: string, callback: (response: Response<TotPlot>) => void): void;
}
