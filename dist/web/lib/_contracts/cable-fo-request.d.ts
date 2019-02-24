import { Request } from 'helper';
import { RotPort } from '../_dtos/rot-port';
import { CableFo } from '../_dtos/cable-fo';
export declare class CableFoRequest extends Request<CableFo> {
    datasRotPortModule: Array<RotPort>;
}
