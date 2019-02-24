import { Request } from 'helper';
import { Site } from '../_dtos/site';
import { Quartier } from '../_dtos/quartier';
export declare class QuartierRequest extends Request<Quartier> {
    datasParamSite: Array<Site>;
}
