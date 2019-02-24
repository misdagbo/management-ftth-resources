import { Request } from 'helper';
import { Fonctionnalite } from '../_dtos/fonctionnalite';
import { Profile } from '../_dtos/profile';
export declare class ProfileRequest extends Request<Profile> {
    datasAdminFonctionnalite: Array<Fonctionnalite>;
}
