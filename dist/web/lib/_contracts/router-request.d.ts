import { Request } from 'helper';
import { RouterCarte } from '../_dtos/router-carte';
import { Router } from '../_dtos/router';
export declare class RouterRequest extends Request<Router> {
    datasOltRouterCarte: Array<RouterCarte>;
}
