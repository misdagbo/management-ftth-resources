import { SearchParam } from 'helper';

export class Modele {

    public id: number;
    public reference: string;
    public fournisseur: number;
    public type: string;
    public typeParam: SearchParam<String>;
}
