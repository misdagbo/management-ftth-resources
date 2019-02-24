import { Request } from 'helper';
import { TotPlot } from '../_dtos/tot-plot';
import { Tot } from '../_dtos/tot';
import { TotCoupleur } from '../_dtos/tot-coupleur';
export declare class TotRequest extends Request<Tot> {
    datasSroPlotTransport: Array<TotPlot>;
    datasSroTiroirTransportCoupleur: Array<TotCoupleur>;
}
