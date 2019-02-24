import { Request } from 'helper';
import { RoePort } from '../_dtos/roe-port';
export declare class RoePortRequest extends Request<RoePort> {
    operator: string;
}
