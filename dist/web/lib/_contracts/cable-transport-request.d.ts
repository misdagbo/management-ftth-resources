import { Request } from 'helper';
import { CableTransport } from '../_dtos/cable-transport';
import { FibreCableTransport } from '../_dtos/fibre-cable-transport';
export declare class CableTransportRequest extends Request<CableTransport> {
    datasRfoFibreTransport: Array<FibreCableTransport>;
}
