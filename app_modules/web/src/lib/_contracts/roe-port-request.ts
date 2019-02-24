import { Request } from 'helper';
import { RoePort } from '../_dtos/roe-port';

export class RoePortRequest extends Request<RoePort> {

    public operator: string;

}
