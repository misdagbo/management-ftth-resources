import { Request } from 'helper';
import { Carte } from '../_dtos/carte';
import { Port } from '../_dtos/port';

export class CarteRequest extends Request<Carte> {

    public datasOltPortPhysique: Array<Port>;

}
