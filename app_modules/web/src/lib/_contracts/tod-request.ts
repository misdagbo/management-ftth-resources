import { Request } from 'helper';
import { TodPlot } from '../_dtos/tod-plot';
import { Tod } from '../_dtos/tod';

export class TodRequest extends Request<Tod> {

    public datasSroPlotDistribution: Array<TodPlot>;

}
