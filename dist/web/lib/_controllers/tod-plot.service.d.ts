import { Request, Response, HttpRequestService, UtilityService } from 'helper';
import { TodPlot } from '../_dtos/tod-plot';
export declare class TodPlotService {
    private _httpService;
    private _utilityService;
    constructor(_httpService: HttpRequestService, _utilityService: UtilityService);
    create(request: Request<TodPlot>, origin: string, callback: (response: Response<TodPlot>) => void): void;
    update(request: Request<TodPlot>, origin: string, callback: (response: Response<TodPlot>) => void): void;
    get(request: Request<TodPlot>, origin: string, callback: (response: Response<TodPlot>) => void): void;
}
