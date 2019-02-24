import { OltLink } from './olt-link';
import { Carte } from './carte';
export declare class Chassis {
    id: number;
    numero: string;
    baie: number;
    oltBaieNumero: string;
    itemsOltLink: Array<OltLink>;
    itemsOltCarte: Array<Carte>;
}
