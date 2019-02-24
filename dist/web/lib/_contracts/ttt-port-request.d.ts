import { Request } from 'helper';
import { TttPort } from '../_dtos/ttt-port';
import { FibreCableTransport } from '../_dtos/fibre-cable-transport';
export declare class TttPortRequest extends Request<TttPort> {
    datasRfoFibreTransport: Array<FibreCableTransport>;
}
