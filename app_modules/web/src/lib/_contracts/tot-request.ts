import { Request } from 'helper';
import { TotPlot } from '../_dtos/tot-plot';
import { Tot } from '../_dtos/tot';
import { TotCoupleur } from '../_dtos/tot-coupleur';

export class TotRequest extends Request<Tot> {

    public datasSroPlotTransport: Array<TotPlot>;
    public datasSroTiroirTransportCoupleur: Array<TotCoupleur>;

}
