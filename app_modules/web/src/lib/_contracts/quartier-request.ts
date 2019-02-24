
import { Request } from 'helper';
import { Site } from '../_dtos/site';
import { Quartier } from '../_dtos/quartier';

export class QuartierRequest extends Request<Quartier> {

    public datasParamSite: Array<Site>;

}
