import { Request } from 'helper';
import { Olt } from '../_dtos/olt';
import { Baie } from '../_dtos/baie';

export class OltRequest extends Request<Olt> {

    public datasOltBaie: Array<Baie>;

}
