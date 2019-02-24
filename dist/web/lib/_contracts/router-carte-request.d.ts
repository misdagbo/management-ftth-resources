import { Request } from 'helper';
import { RouterCarte } from '../_dtos/router-carte';
import { RouterPort } from '../_dtos/router-port';
export declare class RouterCarteRequest extends Request<RouterCarte> {
    datasOltRouterPort: Array<RouterPort>;
}
