import { Request } from 'helper';
import { Fonctionnalite } from '../_dtos/fonctionnalite';
export declare class _Request<Profile> extends Request<Profile> {
    adminFonctionnalites: Array<Fonctionnalite>;
}
