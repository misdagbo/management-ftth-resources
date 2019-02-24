import { Request } from 'helper';
import { Olt } from '../_dtos/olt';
import { Baie } from '../_dtos/baie';
export declare class OltRequest extends Request<Olt> {
    datasOltBaie: Array<Baie>;
}
