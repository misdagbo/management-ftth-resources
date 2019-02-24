import { Request } from 'helper';
import { Caracteristique } from '../_dtos/caracteristique';
import { Modele } from '../_dtos/modele';

export class ModeleRequest extends Request<Modele> {

    public datasParamCaracteristique: Array<Caracteristique>;

}
