import { Request } from 'helper';
import { TttPort } from '../_dtos/ttt-port';
import { FibreCableTransport } from '../_dtos/fibre-cable-transport';

export class TttPortRequest extends Request<TttPort> {

    public datasRfoFibreTransport: Array<FibreCableTransport>;

}
