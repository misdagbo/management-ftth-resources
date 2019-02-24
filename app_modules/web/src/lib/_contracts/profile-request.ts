import { Request } from 'helper';
import { Fonctionnalite } from '../_dtos/fonctionnalite';
import { Profile } from '../_dtos/profile';

export class ProfileRequest extends Request<Profile> {

    public datasAdminFonctionnalite: Array<Fonctionnalite>;

}
