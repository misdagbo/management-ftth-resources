import { Request } from 'helper';
import { TttPort } from '../_dtos/ttt-port';
import { Ttt } from '../_dtos/ttt';
export declare class TttRequest extends Request<Ttt> {
    datasSroPortTiroirTransition: Array<TttPort>;
}
