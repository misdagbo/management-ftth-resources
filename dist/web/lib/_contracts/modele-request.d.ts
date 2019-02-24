import { Request } from 'helper';
import { Caracteristique } from '../_dtos/caracteristique';
import { Modele } from '../_dtos/modele';
export declare class ModeleRequest extends Request<Modele> {
    datasParamCaracteristique: Array<Caracteristique>;
}
