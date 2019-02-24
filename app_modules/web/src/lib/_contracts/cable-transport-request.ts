import { Request } from 'helper';
import { CableTransport } from '../_dtos/cable-transport';
import { FibreCableTransport } from '../_dtos/fibre-cable-transport';

export class CableTransportRequest extends Request<CableTransport> {

    public datasRfoFibreTransport: Array<FibreCableTransport>;

}
