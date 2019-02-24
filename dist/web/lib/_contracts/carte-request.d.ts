import { Request } from 'helper';
import { Carte } from '../_dtos/carte';
import { Port } from '../_dtos/port';
export declare class CarteRequest extends Request<Carte> {
    datasOltPortPhysique: Array<Port>;
}
