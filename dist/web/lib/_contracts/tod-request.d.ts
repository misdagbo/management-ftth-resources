import { Request } from 'helper';
import { TodPlot } from '../_dtos/tod-plot';
import { Tod } from '../_dtos/tod';
export declare class TodRequest extends Request<Tod> {
    datasSroPlotDistribution: Array<TodPlot>;
}
