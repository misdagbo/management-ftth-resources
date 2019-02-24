import { Request } from 'helper';
import { RouterCarte } from '../_dtos/router-carte';
import { RouterPort } from '../_dtos/router-port';

export class RouterCarteRequest extends Request<RouterCarte> {

    public datasOltRouterPort: Array<RouterPort>;

}
