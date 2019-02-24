import { Request } from 'helper';
import { RouterCarte } from '../_dtos/router-carte';
import { Router } from '../_dtos/router';

export class RouterRequest extends Request<Router> {

    public datasOltRouterCarte: Array<RouterCarte>;

}
