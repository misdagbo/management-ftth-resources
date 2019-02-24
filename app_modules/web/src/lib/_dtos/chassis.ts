import { OltLink } from './olt-link';
import { Carte } from './carte';

export class Chassis {

    public id: number;
    public numero: string;
    public baie: number;
    public oltBaieNumero: string;
    public itemsOltLink: Array<OltLink>;
    public itemsOltCarte: Array<Carte>;

}
