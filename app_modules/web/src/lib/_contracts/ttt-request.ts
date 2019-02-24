import { Request } from 'helper';
import { TttPort } from '../_dtos/ttt-port';
import { Ttt } from '../_dtos/ttt';

export class TttRequest extends Request<Ttt> {

    public datasSroPortTiroirTransition: Array<TttPort>;

}
